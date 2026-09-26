interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
  BREVO_API_KEY?: string
  BREVO_LIST_ID?: string
}

type SignupPayload = {
  email?: unknown
  consent?: unknown
  website?: unknown
}

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  })

const validEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname !== '/api/lancement') return env.ASSETS.fetch(request)
    if (request.method !== 'POST') return json({ status: 'method_not_allowed' }, 405)

    const origin = request.headers.get('Origin')
    const isLocalPreview =
      ['localhost', '127.0.0.1'].includes(url.hostname) &&
      origin !== null &&
      /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)
    if (origin && origin !== url.origin && !isLocalPreview)
      return json({ status: 'forbidden' }, 403)
    if (!request.headers.get('Content-Type')?.startsWith('application/json'))
      return json({ status: 'invalid_request' }, 415)

    let payload: SignupPayload
    try {
      const body = await request.text()
      if (body.length > 2048) return json({ status: 'invalid_request' }, 413)
      payload = JSON.parse(body) as SignupPayload
      if (!payload || typeof payload !== 'object' || Array.isArray(payload))
        return json({ status: 'invalid_request' }, 400)
    } catch {
      return json({ status: 'invalid_request' }, 400)
    }

    // A hidden field keeps most automated form posts away from Brevo.
    if (payload.website) return json({ status: 'success' })
    const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
    if (email.length > 254 || !validEmail(email)) return json({ status: 'invalid_email' }, 400)
    if (payload.consent !== true) return json({ status: 'consent_required' }, 400)

    const listId = Number(env.BREVO_LIST_ID)
    if (!env.BREVO_API_KEY || !Number.isSafeInteger(listId) || listId < 1)
      return json({ status: 'unavailable' }, 503)

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'api-key': env.BREVO_API_KEY,
        },
        body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
      })
      if (!response.ok) {
        console.error('Brevo signup failed', response.status)
        return json({ status: 'unavailable' }, 502)
      }
      return json({ status: response.status === 204 ? 'already_registered' : 'success' })
    } catch {
      console.error('Brevo signup request failed')
      return json({ status: 'unavailable' }, 502)
    }
  },
}
