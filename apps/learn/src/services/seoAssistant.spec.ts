import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { askSeoAssistant } from '@/services/seoAssistant'

const { getSession, refreshSession } = vi.hoisted(() => ({
  getSession: vi.fn(async () => ({
    data: { session: { access_token: 'current-token' } },
    error: null,
  })),
  refreshSession: vi.fn(async () => ({
    data: { session: { access_token: 'new-token' } },
    error: null,
  })),
}))

vi.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession, refreshSession } },
}))

describe('service Assistant SEO', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubEnv('VITE_LEARN_AI_API_URL', 'https://worker.example')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  it('respecte le contrat du Worker et transmet la session Supabase', async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
      Response.json({ answer: '  Une réponse SEO.  ' }),
    )
    vi.stubGlobal('fetch', fetchMock)

    expect(await askSeoAssistant('Comment débuter ?')).toBe('Une réponse SEO.')
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, options] = fetchMock.mock.calls[0]!
    expect(String(url)).toBe('https://worker.example/chat')
    expect(options?.headers).toEqual({
      Authorization: 'Bearer current-token',
      'Content-Type': 'application/json',
    })
    expect(options?.body).toBe(JSON.stringify({ message: 'Comment débuter ?' }))
  })

  it('renouvelle une session expirée puis réessaie une fois', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(null, { status: 401 }))
      .mockResolvedValueOnce(Response.json({ answer: 'Réponse.' }))
    vi.stubGlobal('fetch', fetchMock)

    expect(await askSeoAssistant('SEO ?')).toBe('Réponse.')
    expect(refreshSession).toHaveBeenCalledTimes(1)
    expect(new Headers(fetchMock.mock.calls[1]?.[1]?.headers).get('Authorization')).toBe(
      'Bearer new-token',
    )
  })

  it('présente une erreur explicite pour les limites et les réponses invalides', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(null, { status: 429 })),
    )
    await expect(askSeoAssistant('SEO ?')).rejects.toMatchObject({
      kind: 'rate-limit',
    })

    vi.stubGlobal(
      'fetch',
      vi.fn(async () => Response.json({ unexpected: true })),
    )
    await expect(askSeoAssistant('SEO ?')).rejects.toMatchObject({
      kind: 'invalid-response',
    })
  })
})
