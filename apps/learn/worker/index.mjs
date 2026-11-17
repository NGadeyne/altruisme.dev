import assetManifest from '../dist/protected-assets.json' with { type: 'json' }

const knownAssets = new Set(assetManifest.assets)
const knownScripts = new Set(assetManifest.scripts)
const protectedScripts = new Set(assetManifest.protectedScripts)
const cookieName = '__Host-learn_course_access'

function noStoreHeaders(extra = {}) {
  return { 'Cache-Control': 'private, no-store', ...extra }
}

function clearCookie() {
  return `${cookieName}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`
}

function accessTokenFromCookie(request) {
  const matches = (request.headers.get('Cookie') ?? '')
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.startsWith(`${cookieName}=`))
  if (matches.length !== 1) return null
  const token = matches[0].slice(cookieName.length + 1)
  return /^[A-Za-z0-9._-]{20,4096}$/.test(token) ? token : null
}

async function courseAccess(token, env) {
  if (!env.SUPABASE_URL || !env.SUPABASE_PUBLISHABLE_KEY) return 'unavailable'
  try {
    const url = new URL('/rest/v1/learn_course_entitlements', env.SUPABASE_URL)
    url.search = 'select=user_id&course_slug=eq.seo&limit=1'
    const response = await fetch(url, {
      headers: {
        apikey: env.SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      signal: AbortSignal.timeout(5_000),
    })
    if (response.status === 401 || response.status === 403) return 'denied'
    if (!response.ok) return 'unavailable'
    const rows = await response.json()
    return Array.isArray(rows) && rows.length > 0 ? 'granted' : 'denied'
  } catch {
    return 'unavailable'
  }
}

async function assetAccess(request, env) {
  if (request.method === 'DELETE') {
    return new Response(null, {
      status: 204,
      headers: noStoreHeaders({ 'Set-Cookie': clearCookie() }),
    })
  }
  if (request.method !== 'POST') {
    return new Response('Méthode non autorisée', { status: 405, headers: noStoreHeaders() })
  }
  const origin = request.headers.get('Origin')
  if (origin && origin !== new URL(request.url).origin) {
    return new Response('Origine non autorisée', { status: 403, headers: noStoreHeaders() })
  }
  const token = /^Bearer ([A-Za-z0-9._-]{20,4096})$/i.exec(
    request.headers.get('Authorization') ?? '',
  )?.[1]
  if (!token) return new Response('Connexion requise', { status: 401, headers: noStoreHeaders() })

  const access = await courseAccess(token, env)
  if (access !== 'granted') {
    return new Response(access === 'denied' ? 'Accès refusé' : 'Service indisponible', {
      status: access === 'denied' ? 403 : 503,
      headers: noStoreHeaders({ 'Set-Cookie': clearCookie() }),
    })
  }
  return new Response(null, {
    status: 204,
    headers: noStoreHeaders({
      'Set-Cookie': `${cookieName}=${token}; Path=/; Max-Age=300; HttpOnly; Secure; SameSite=Strict`,
    }),
  })
}

export default {
  async fetch(request, env) {
    const pathname = new URL(request.url).pathname
    if (pathname === '/api/asset-access') return assetAccess(request, env)
    if (
      pathname.includes('%') ||
      pathname === '/protected-assets.json' ||
      pathname.endsWith('.map')
    ) {
      return new Response('Introuvable', { status: 404, headers: noStoreHeaders() })
    }
    if (pathname.startsWith('/assets/') && !knownAssets.has(pathname)) {
      return new Response('Introuvable', { status: 404, headers: noStoreHeaders() })
    }
    if (pathname.endsWith('.js') && !knownScripts.has(pathname)) {
      return new Response('Introuvable', { status: 404, headers: noStoreHeaders() })
    }
    if (/^\/assets\/[^/]+\.js$/.test(pathname)) {
      if (protectedScripts.has(pathname)) {
        const token = accessTokenFromCookie(request)
        if (!token) {
          return new Response('Connexion requise', { status: 401, headers: noStoreHeaders() })
        }
        const access = await courseAccess(token, env)
        if (access !== 'granted') {
          return new Response(access === 'denied' ? 'Accès refusé' : 'Service indisponible', {
            status: access === 'denied' ? 403 : 503,
            headers: noStoreHeaders(),
          })
        }
        const asset = await env.ASSETS.fetch(request)
        const headers = new Headers(asset.headers)
        headers.set('Cache-Control', 'private, no-store')
        headers.set('Vary', 'Cookie')
        return new Response(asset.body, { status: asset.status, headers })
      }
    }
    return env.ASSETS.fetch(request)
  },
}
