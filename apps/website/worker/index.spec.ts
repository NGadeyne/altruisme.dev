import { afterEach, expect, it, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import worker from './index'

const env = {
  ASSETS: { fetch: vi.fn(async () => new Response('asset')) },
  BREVO_API_KEY: 'test-key',
  BREVO_LIST_ID: '2',
}

function request(body: object) {
  return new Request('https://altruisme.dev/api/lancement', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://altruisme.dev' },
    body: JSON.stringify(body),
  })
}

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

it('serves only news from the last two days as valid XML', async () => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2026-10-02T15:00:00Z'))
  const articles = [
    {
      url: 'https://altruisme.dev/actualites/semaine-39-2026',
      publishedAt: '2026-09-26',
      title: 'Semaine 39',
    },
    {
      url: 'https://altruisme.dev/actualites/semaine-40-2026',
      publishedAt: '2026-10-02',
      title: 'IA & agents <autonomes>',
    },
  ]
  const assets = {
    fetch: vi.fn(async () => new Response(JSON.stringify(articles))),
  }
  const newsRequest = new Request('https://altruisme.dev/news-sitemap.xml')
  const response = await worker.fetch(newsRequest, { ...env, ASSETS: assets })

  expect(response.status).toBe(200)
  expect(response.headers.get('Content-Type')).toBe('application/xml; charset=utf-8')
  expect(response.headers.get('Cache-Control')).toBe('no-store')
  expect(assets.fetch).toHaveBeenCalledWith(
    expect.objectContaining({ url: 'https://altruisme.dev/news-sitemap-articles.json' }),
  )

  const document = new JSDOM(await response.text(), { contentType: 'application/xml' }).window
    .document
  const sitemapNamespace = 'http://www.sitemaps.org/schemas/sitemap/0.9'
  const newsNamespace = 'http://www.google.com/schemas/sitemap-news/0.9'
  const value = (namespace: string, name: string) =>
    document.getElementsByTagNameNS(namespace, name)[0]?.textContent
  expect(document.getElementsByTagNameNS(sitemapNamespace, 'url')).toHaveLength(1)
  expect(value(sitemapNamespace, 'loc')).toBe(
    'https://altruisme.dev/actualites/semaine-40-2026',
  )
  expect(value(newsNamespace, 'name')).toBe('Altruisme.DEV')
  expect(value(newsNamespace, 'language')).toBe('fr')
  expect(value(newsNamespace, 'publication_date')).toBe('2026-10-02')
  expect(value(newsNamespace, 'title')).toBe('IA & agents <autonomes>')

  vi.setSystemTime(new Date('2026-10-04T00:00:00Z'))
  const expired = await worker.fetch(newsRequest, { ...env, ASSETS: assets })
  const expiredDocument = new JSDOM(await expired.text(), { contentType: 'application/xml' })
    .window.document
  expect(expiredDocument.getElementsByTagNameNS(sitemapNamespace, 'url')).toHaveLength(0)
})

it('rejects invalid addresses and missing consent without calling Brevo', async () => {
  const brevo = vi.spyOn(globalThis, 'fetch')
  const invalid = await worker.fetch(request({ email: 'invalid', consent: true }), env)
  const noConsent = await worker.fetch(request({ email: 'hello@example.com', consent: false }), env)
  expect(invalid.status).toBe(400)
  expect(await invalid.json()).toEqual({ status: 'invalid_email' })
  expect(noConsent.status).toBe(400)
  expect(await noConsent.json()).toEqual({ status: 'consent_required' })
  expect(brevo).not.toHaveBeenCalled()
})

it('adds the email to the configured Brevo list without exposing the API key', async () => {
  const brevo = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('{}', { status: 201 }))
  const response = await worker.fetch(request({ email: ' HELLO@example.com ', consent: true }), env)
  expect(response.status).toBe(200)
  expect(await response.clone().text()).not.toContain('test-key')
  expect(await response.json()).toEqual({ status: 'success' })
  expect(brevo).toHaveBeenCalledWith(
    'https://api.brevo.com/v3/contacts',
    expect.objectContaining({
      body: JSON.stringify({ email: 'hello@example.com', listIds: [2], updateEnabled: true }),
    }),
  )
  expect(response.headers.get('Cache-Control')).toBe('no-store')
})

it('recognizes an existing Brevo contact', async () => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 204 }))
  const response = await worker.fetch(request({ email: 'hello@example.com', consent: true }), env)
  expect(await response.json()).toEqual({ status: 'already_registered' })
})

it('fails closed when the secret is missing', async () => {
  const brevo = vi.spyOn(globalThis, 'fetch')
  const response = await worker.fetch(
    request({ email: 'hello@example.com', consent: true }),
    { ...env, BREVO_API_KEY: undefined },
  )
  expect(response.status).toBe(503)
  expect(brevo).not.toHaveBeenCalled()
})
