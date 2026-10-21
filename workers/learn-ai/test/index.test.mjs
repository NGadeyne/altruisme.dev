import assert from 'node:assert/strict'
import test from 'node:test'
import worker from '../src/index.ts'

const origin = 'https://learn.altruisme.dev'

function environment(limit = () => ({ success: true })) {
  return {
    OPENAI_API_KEY: 'test-key',
    OPENAI_MODEL: 'gpt-6-luna',
    SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_PUBLISHABLE_KEY: 'test-publishable-key',
    IP_RATE_LIMITER: { limit },
    USER_RATE_LIMITER: { limit },
    GLOBAL_RATE_LIMITER: { limit },
  }
}

function chatRequest(message, requestOrigin = origin) {
  return new Request('https://worker.example/chat', {
    method: 'POST',
    headers: {
      Origin: requestOrigin,
      Authorization: 'Bearer user-access-token',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })
}

test('health responds without secrets or authentication', async () => {
  const response = await worker.fetch(new Request('https://worker.example/health'), environment())
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { status: 'ok' })
})

test('CORS rejects an unknown origin before contacting upstream services', async () => {
  const response = await worker.fetch(chatRequest('SEO ?', 'https://other.example'), environment())
  assert.equal(response.status, 403)
  assert.equal(response.headers.get('access-control-allow-origin'), null)
})

test('a missing session cannot call OpenAI', async () => {
  const request = new Request('https://worker.example/chat', {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: '{"message":"SEO ?"}',
  })
  const response = await worker.fetch(request, environment())
  assert.equal(response.status, 401)
})

test('validates the session and message, then calls Responses API', async () => {
  const originalFetch = globalThis.fetch
  const calls = []
  globalThis.fetch = async (url, options) => {
    calls.push({ url: String(url), options })
    if (calls.length === 1) {
      return Response.json({ id: 'user-1' })
    }
    return Response.json({
      status: 'completed',
      output: [
        {
          type: 'message',
          content: [{ type: 'output_text', text: 'Commence par trois mots-clés précis.' }],
        },
      ],
    })
  }
  try {
    const response = await worker.fetch(chatRequest('Comment débuter ?'), environment())
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('access-control-allow-origin'), origin)
    assert.deepEqual(await response.json(), { answer: 'Commence par trois mots-clés précis.' })
    assert.equal(calls[0].url, 'https://example.supabase.co/auth/v1/user')
    assert.equal(calls[1].url, 'https://api.openai.com/v1/responses')
    const body = JSON.parse(calls[1].options.body)
    assert.equal(body.model, 'gpt-6-luna')
    assert.equal(body.store, false)
    assert.equal(body.input, 'Comment débuter ?')
    assert.equal(body.max_output_tokens, 600)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('rejects oversized messages before calling OpenAI', async () => {
  const originalFetch = globalThis.fetch
  let calls = 0
  globalThis.fetch = async () => {
    calls += 1
    return Response.json({ id: 'user-1' })
  }
  try {
    const response = await worker.fetch(chatRequest('x'.repeat(2_001)), environment())
    assert.equal(response.status, 400)
    assert.equal(calls, 1)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('rate limiter failure blocks requests', async () => {
  const response = await worker.fetch(
    chatRequest('SEO ?'),
    environment(() => ({ success: false })),
  )
  assert.equal(response.status, 429)
})

test('invalid Supabase sessions do not reach OpenAI', async () => {
  const originalFetch = globalThis.fetch
  let calls = 0
  globalThis.fetch = async () => {
    calls += 1
    return new Response(null, { status: 401 })
  }
  try {
    const response = await worker.fetch(chatRequest('SEO ?'), environment())
    assert.equal(response.status, 401)
    assert.equal(calls, 1)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('per-user limit blocks paid requests after authentication', async () => {
  const originalFetch = globalThis.fetch
  let calls = 0
  globalThis.fetch = async () => {
    calls += 1
    return Response.json({ id: 'user-1' })
  }
  const env = environment(({ key }) => ({ success: key !== 'chat:user-1' }))
  try {
    const response = await worker.fetch(chatRequest('SEO ?'), env)
    assert.equal(response.status, 429)
    assert.equal(calls, 1)
  } finally {
    globalThis.fetch = originalFetch
  }
})
