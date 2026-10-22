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

    expect(await askSeoAssistant('Comment débuter ?')).toEqual({ answer: 'Une réponse SEO.', resources: [] })
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, options] = fetchMock.mock.calls[0]!
    expect(String(url)).toBe('https://worker.example/chat')
    expect(options?.headers).toEqual({
      Authorization: 'Bearer current-token',
      'Content-Type': 'application/json',
      Accept: 'text/event-stream',
    })
    expect(options?.body).toBe(JSON.stringify({ message: 'Comment débuter ?', history: [] }))
  })

  it('affiche les fragments du flux puis valide la réponse finale', async () => {
    const events = [
      'event: delta\ndata: {"text":"Commence par "}\n\n',
      'event: delta\ndata: {"text":"tes mots-clés."}\n\n',
      'event: done\ndata: {"answer":"Commence par tes mots-clés.","resources":[]}\n\n',
    ]
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        const encoder = new TextEncoder()
        for (const event of events) controller.enqueue(encoder.encode(event))
        controller.close()
      },
    })
    vi.stubGlobal('fetch', vi.fn(async () => new Response(stream, {
      headers: { 'Content-Type': 'text/event-stream' },
    })))
    const received: string[] = []
    const reply = await askSeoAssistant('Quels mots-clés ?', [], undefined, (delta) => received.push(delta))
    expect(received).toEqual(['Commence par ', 'tes mots-clés.'])
    expect(reply).toEqual({ answer: 'Commence par tes mots-clés.', resources: [] })
  })

  it('signale un flux interrompu avant la réponse finale', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('event: delta\ndata: {"text":"Début"}\n\n', {
      headers: { 'Content-Type': 'text/event-stream' },
    })))
    const received: string[] = []
    await expect(askSeoAssistant('Une question ?', [], undefined, (delta) => received.push(delta)))
      .rejects.toMatchObject({ kind: 'invalid-response' })
    expect(received).toEqual(['Début'])
  })

  it('renouvelle une session expirée puis réessaie une fois', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(null, { status: 401 }))
      .mockResolvedValueOnce(Response.json({ answer: 'Réponse.' }))
    vi.stubGlobal('fetch', fetchMock)

    expect(await askSeoAssistant('SEO ?')).toEqual({ answer: 'Réponse.', resources: [] })
    expect(refreshSession).toHaveBeenCalledTimes(1)
    expect(new Headers(fetchMock.mock.calls[1]?.[1]?.headers).get('Authorization')).toBe(
      'Bearer new-token',
    )
  })

  it('transmet le contexte et ne garde que les liens de leçons valides', async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) => Response.json({
      answer: 'Le robots.txt concerne l’exploration.',
      resources: [
        { id: 'seo-lesson-15', number: 15, title: 'Comprendre robots.txt, sitemap et balises canoniques', moduleTitle: 'Maîtriser les fondamentaux techniques', url: '/formation/lesson-15' },
        { id: 'seo-lesson-99', number: 99, title: 'Fausse leçon', moduleTitle: 'Technique', url: 'https://evil.example' },
      ],
    }))
    vi.stubGlobal('fetch', fetchMock)
    const history = [{ role: 'user' as const, content: 'À quoi sert robots.txt ?' }]
    const reply = await askSeoAssistant('Et le sitemap ?', history)
    expect(reply.resources).toHaveLength(1)
    expect(reply.resources[0]?.url).toBe('/formation/lesson-15')
    expect(JSON.parse(fetchMock.mock.calls[0]![1]?.body as string)).toEqual({ message: 'Et le sitemap ?', history })
  })

  it('réduit le contexte pour respecter la limite de taille du Worker', async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
      Response.json({ answer: 'Voici une réponse SEO.' }),
    )
    vi.stubGlobal('fetch', fetchMock)
    const history = Array.from({ length: 8 }, (_, index) => ({
      role: index % 2 === 0 ? 'user' as const : 'assistant' as const,
      content: `Échange ${index} : ${'x'.repeat(1_400)}`,
    }))

    await askSeoAssistant('Et maintenant ?', history)
    const body = fetchMock.mock.calls[0]![1]?.body as string
    expect(new TextEncoder().encode(body).length).toBeLessThanOrEqual(8_192)
    const sent = JSON.parse(body) as { history: typeof history }
    expect(sent.history.length).toBeLessThan(8)
    expect(sent.history.at(-1)).toEqual(history.at(-1))
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

  it('affiche le diagnostic sûr du Worker quand la réponse IA est incomplète', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () =>
        Response.json({ error: 'Aucune réponse disponible pour le moment.' }, { status: 502 }),
      ),
    )

    await expect(askSeoAssistant('SEO ?')).rejects.toMatchObject({
      kind: 'server',
      message: 'Aucune réponse disponible pour le moment.',
    })
  })
})
