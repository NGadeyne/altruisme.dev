import { afterEach, expect, it, vi } from 'vitest'
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

afterEach(() => vi.restoreAllMocks())

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
