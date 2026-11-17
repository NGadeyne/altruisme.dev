import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import assetManifest from '../dist/protected-assets.json' with { type: 'json' }
import worker from './index.mjs'

const token = 'a'.repeat(32)
const protectedPath = assetManifest.protectedScripts.find((path) =>
  path.includes('SeoLesson01Content'),
)
const publicPath = assetManifest.scripts.find((path) => path.includes('/index-'))

function environment() {
  let assetRequests = 0
  return {
    SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test',
    ASSETS: {
      fetch() {
        assetRequests += 1
        return new Response('lesson asset', { headers: { 'Content-Type': 'text/javascript' } })
      },
    },
    get assetRequests() {
      return assetRequests
    },
  }
}

function request(path, options = {}) {
  return new Request(`https://learn.altruisme.dev${path}`, options)
}

test('the build marks every paid lesson, quiz and practice chunk as protected', async () => {
  assert.ok(protectedPath)
  assert.ok(publicPath)
  assert.equal(
    assetManifest.protectedScripts.filter((path) => /SeoLesson\d{2}Content/.test(path)).length,
    31,
  )
  assert.equal(
    assetManifest.protectedScripts.filter((path) => /SeoPractice\d{2}View/.test(path)).length,
    10,
  )
  assert.ok(assetManifest.protectedScripts.some((path) => path.includes('SeoLessonView')))
  assert.ok(assetManifest.protectedScripts.some((path) => path.includes('LessonView-')))
  assert.ok(assetManifest.protectedScripts.some((path) => path.includes('ResourceView-')))
  assert.ok(assetManifest.protectedScripts.some((path) => path.includes('SeoFurtherReading-')))
  const content = await readFile(new URL(`../dist${protectedPath}`, import.meta.url), 'utf8')
  assert.match(content, /Ton site existe/)
})

test('the public landing loads without a protected dependency or paid content', async () => {
  const landingPath = assetManifest.scripts.find((path) => path.includes('/LandingView-'))
  assert.ok(landingPath)
  assert.ok(!assetManifest.protectedScripts.includes(landingPath))
  const landing = await readFile(new URL(`../dist${landingPath}`, import.meta.url), 'utf8')
  for (const match of landing.matchAll(/(?:import|from)\s*["']\.\/([^"']+)["']/g)) {
    assert.ok(!assetManifest.protectedScripts.includes(`/assets/${match[1]}`))
  }

  const publicScripts = assetManifest.scripts.filter(
    (path) => !assetManifest.protectedScripts.includes(path),
  )
  const publicCode = (
    await Promise.all(
      publicScripts.map((path) => readFile(new URL(`../dist${path}`, import.meta.url), 'utf8')),
    )
  ).join('\n')
  assert.ok(!publicCode.includes('docs.google.com/spreadsheets/d/'))
  assert.ok(!publicCode.includes('Identifier les pages stratégiques de mon site'))
})

test('a protected asset is denied before static serving without a course cookie', async () => {
  const env = environment()
  const response = await worker.fetch(request(protectedPath), env)
  assert.equal(response.status, 401)
  assert.equal(env.assetRequests, 0)
})

test('a JWT cookie is checked against the current course grant for every protected asset', async () => {
  const originalFetch = globalThis.fetch
  const env = environment()
  let checks = 0
  globalThis.fetch = async (url, options) => {
    checks += 1
    assert.match(String(url), /learn_course_entitlements/)
    assert.equal(options.headers.Authorization, `Bearer ${token}`)
    return Response.json(checks === 1 ? [{ user_id: 'learner' }] : [])
  }
  try {
    const options = { headers: { Cookie: `__Host-learn_course_access=${token}` } }
    const allowed = await worker.fetch(request(protectedPath, options), env)
    assert.equal(allowed.status, 200)
    assert.equal(allowed.headers.get('Cache-Control'), 'private, no-store')
    const denied = await worker.fetch(request(protectedPath, options), env)
    assert.equal(denied.status, 403)
    assert.equal(checks, 2)
    assert.equal(env.assetRequests, 1)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('public scripts work and unknown scripts or source maps fail closed', async () => {
  const env = environment()
  assert.equal((await worker.fetch(request(publicPath), env)).status, 200)
  assert.equal((await worker.fetch(request('/assets/SeoLesson01Content-old.js'), env)).status, 404)
  assert.equal(
    (await worker.fetch(request(protectedPath.replace('.js', '%2ejs')), env)).status,
    404,
  )
  assert.equal(
    (await worker.fetch(request(protectedPath.replace('/assets/', '/%61ssets/')), env)).status,
    404,
  )
  assert.equal((await worker.fetch(request('/assets/course.js.map'), env)).status, 404)
  assert.equal((await worker.fetch(request('/protected-assets.json'), env)).status, 404)
  assert.equal(env.assetRequests, 1)
})

test('the cookie is issued only for a validated course grant and can be cleared', async () => {
  const originalFetch = globalThis.fetch
  const env = environment()
  globalThis.fetch = async () => Response.json([{ user_id: 'learner' }])
  try {
    const response = await worker.fetch(
      request('/api/asset-access', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, Origin: 'https://learn.altruisme.dev' },
      }),
      env,
    )
    assert.equal(response.status, 204)
    assert.match(response.headers.get('Set-Cookie'), /HttpOnly; Secure; SameSite=Strict/)
    const foreign = await worker.fetch(
      request('/api/asset-access', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, Origin: 'https://other.example' },
      }),
      env,
    )
    assert.equal(foreign.status, 403)
    const cleared = await worker.fetch(request('/api/asset-access', { method: 'DELETE' }), env)
    assert.equal(cleared.status, 204)
    assert.match(cleared.headers.get('Set-Cookie'), /Max-Age=0/)
  } finally {
    globalThis.fetch = originalFetch
  }
})
