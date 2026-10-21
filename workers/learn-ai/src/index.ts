interface RateLimiter {
  limit(options: { key: string }): Promise<{ success: boolean }>
}

interface Env {
  OPENAI_API_KEY: string
  OPENAI_MODEL: string
  SUPABASE_URL: string
  SUPABASE_PUBLISHABLE_KEY: string
  IP_RATE_LIMITER: RateLimiter
  USER_RATE_LIMITER: RateLimiter
  GLOBAL_RATE_LIMITER: RateLimiter
}

const MAX_BODY_BYTES = 8_192
const MAX_MESSAGE_LENGTH = 2_000
const SYSTEM_PROMPT = `Tu es le formateur SEO d'Altruisme Learn. Tu aides des entrepreneurs et indépendants débutants à comprendre et appliquer le référencement naturel. Réponds en français, avec des mots simples, des étapes concrètes et des exemples adaptés à une petite activité. Explique les termes techniques brièvement. Reste centré sur le SEO, évite les promesses de classement garanti et indique clairement quand une information dépend d'une évolution récente ou nécessite une vérification.`

function allowedOrigin(origin: string | null): origin is string {
  return (
    origin === 'https://learn.altruisme.dev' ||
    (origin !== null &&
      /^http:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::(?:5173|5174|4173))?$/.test(origin))
  )
}

function jsonResponse(body: unknown, status: number, origin: string | null): Response {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    Vary: 'Origin',
  })
  if (allowedOrigin(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
  }
  return new Response(JSON.stringify(body), { status, headers })
}

function errorResponse(message: string, status: number, origin: string | null): Response {
  return jsonResponse({ error: message }, status, origin)
}

async function readMessage(request: Request): Promise<string | null> {
  const contentLength = Number(request.headers.get('content-length'))
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) return null
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get('content-type') ?? '')) return null
  if (!request.body) return null

  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let length = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      length += value.byteLength
      if (length > MAX_BODY_BYTES) {
        await reader.cancel()
        return null
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  const bytes = new Uint8Array(length)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }

  try {
    const data: unknown = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes))
    if (typeof data !== 'object' || data === null || Array.isArray(data)) return null
    if (Object.keys(data).length !== 1 || !('message' in data)) return null
    if (typeof data.message !== 'string') return null
    const message = data.message.trim()
    return message.length > 0 && message.length <= MAX_MESSAGE_LENGTH ? message : null
  } catch {
    return null
  }
}

async function getUserId(token: string, env: Env): Promise<string | 'invalid' | 'unavailable'> {
  try {
    const url = new URL('/auth/v1/user', env.SUPABASE_URL)
    if (url.protocol !== 'https:') return 'unavailable'
    const response = await fetch(url, {
      headers: {
        apikey: env.SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${token}`,
      },
      signal: AbortSignal.timeout(10_000),
    })
    if (response.status === 401 || response.status === 403) return 'invalid'
    if (!response.ok) return 'unavailable'
    const user: unknown = await response.json()
    if (typeof user === 'object' && user !== null && 'id' in user && typeof user.id === 'string') {
      return user.id
    }
    return 'unavailable'
  } catch {
    return 'unavailable'
  }
}

function extractAnswer(data: unknown): string | null {
  if (
    typeof data !== 'object' ||
    data === null ||
    !('output' in data) ||
    !Array.isArray(data.output)
  ) {
    return null
  }
  const parts: string[] = []
  for (const item of data.output) {
    if (typeof item !== 'object' || item === null || item.type !== 'message') continue
    if (!('content' in item) || !Array.isArray(item.content)) continue
    for (const content of item.content) {
      if (
        typeof content === 'object' &&
        content !== null &&
        content.type === 'output_text' &&
        typeof content.text === 'string'
      ) {
        parts.push(content.text)
      }
    }
  }
  return parts.join('\n').trim() || null
}

async function chat(request: Request, env: Env, origin: string | null): Promise<Response> {
  if (origin !== null && !allowedOrigin(origin)) {
    return errorResponse('Origine non autorisée.', 403, origin)
  }
  if (
    !env.OPENAI_API_KEY ||
    !env.SUPABASE_URL ||
    !env.SUPABASE_PUBLISHABLE_KEY ||
    !env.OPENAI_MODEL
  ) {
    return errorResponse('Service indisponible.', 503, origin)
  }

  // This first limit also protects the Supabase Auth verification endpoint.
  const ip = request.headers.get('cf-connecting-ip') ?? 'local'
  if (!(await env.IP_RATE_LIMITER.limit({ key: `chat:${ip}` })).success) {
    return errorResponse('Trop de requêtes. Réessaie dans une minute.', 429, origin)
  }

  const authorization = request.headers.get('authorization') ?? ''
  const token = /^Bearer ([^\s]+)$/i.exec(authorization)?.[1]
  if (!token || token.length > 4_096) {
    return errorResponse('Connexion requise.', 401, origin)
  }
  const userId = await getUserId(token, env)
  if (userId === 'invalid') return errorResponse('Session invalide.', 401, origin)
  if (userId === 'unavailable') return errorResponse('Service indisponible.', 503, origin)

  const message = await readMessage(request)
  if (message === null) {
    return errorResponse(
      'Envoie un message JSON non vide de 2 000 caractères maximum.',
      400,
      origin,
    )
  }
  if (!(await env.USER_RATE_LIMITER.limit({ key: `chat:${userId}` })).success) {
    return errorResponse('Trop de requêtes. Réessaie dans une minute.', 429, origin)
  }
  if (!(await env.GLOBAL_RATE_LIMITER.limit({ key: 'chat' })).success) {
    return errorResponse('Service momentanément occupé. Réessaie dans une minute.', 429, origin)
  }

  let response: Response
  try {
    response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: env.OPENAI_MODEL,
        instructions: SYSTEM_PROMPT,
        input: message,
        max_output_tokens: 600,
        store: false,
      }),
      signal: AbortSignal.timeout(30_000),
    })
  } catch {
    return errorResponse('Le service de réponse est indisponible.', 502, origin)
  }

  if (!response.ok) return errorResponse('Le service de réponse est indisponible.', 502, origin)
  try {
    const data: unknown = await response.json()
    if (
      typeof data !== 'object' ||
      data === null ||
      !('status' in data) ||
      data.status !== 'completed'
    ) {
      return errorResponse('Aucune réponse disponible pour le moment.', 502, origin)
    }
    const answer = extractAnswer(data)
    if (!answer) return errorResponse('Aucune réponse disponible pour le moment.', 502, origin)
    return jsonResponse({ answer }, 200, origin)
  } catch {
    return errorResponse('Le service de réponse est indisponible.', 502, origin)
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url)
    const origin = request.headers.get('origin')
    if (pathname === '/health') {
      if (request.method !== 'GET') return errorResponse('Méthode non autorisée.', 405, origin)
      return jsonResponse({ status: 'ok' }, 200, origin)
    }
    if (pathname !== '/chat') return errorResponse('Route introuvable.', 404, origin)
    if (request.method === 'OPTIONS') {
      if (!allowedOrigin(origin)) return errorResponse('Origine non autorisée.', 403, origin)
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization, Content-Type',
          'Access-Control-Max-Age': '600',
          'Cache-Control': 'no-store',
          Vary: 'Origin',
        },
      })
    }
    if (request.method !== 'POST') return errorResponse('Méthode non autorisée.', 405, origin)
    try {
      return await chat(request, env, origin)
    } catch {
      // A failed rate-limit binding must not allow a paid OpenAI request through.
      return errorResponse('Service indisponible.', 503, origin)
    }
  },
}
