export type CheckoutSession = {
  id?: string
  mode?: string
  payment_status?: string
  amount_total?: number
  currency?: string
  metadata?: { course_slug?: string; claim_token_hash?: string }
  customer_details?: { email?: string | null }
}

export const seoCoursePriceCents = 2700
const legacySeoCoursePriceCents = 9700

export async function hashClaimToken(token: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token))
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export async function hasMatchingClaimToken(
  session: CheckoutSession,
  token: string,
): Promise<boolean> {
  const expected = session.metadata?.claim_token_hash
  if (!expected || !/^[a-f0-9]{64}$/.test(expected)) return false
  const actual = await hashClaimToken(token)
  let difference = 0
  for (let index = 0; index < expected.length; index++) {
    difference |= expected.charCodeAt(index) ^ actual.charCodeAt(index)
  }
  return difference === 0
}

export function isPaidSeoCheckout(
  session: CheckoutSession | undefined,
): session is CheckoutSession & {
  id: string
  amount_total: number
  currency: string
  customer_details: { email: string }
} {
  return Boolean(
    session?.id &&
    session.mode === 'payment' &&
    session.payment_status === 'paid' &&
    (session.amount_total === seoCoursePriceCents ||
      session.amount_total === legacySeoCoursePriceCents) &&
    session.currency === 'eur' &&
    session.metadata?.course_slug === 'seo' &&
    session.customer_details?.email,
  )
}

export async function hasValidStripeSignature(
  body: string,
  header: string,
  secret: string,
): Promise<boolean> {
  const timestampPart = header.split(',').find((part) => part.trim().startsWith('t='))
  const timestamp = Number(timestampPart?.trim().slice(2))
  const signatures =
    header.match(/(?:^|,)\s*v1=([a-f0-9]{64})(?=,|$)/g)?.map((part) => part.split('=')[1]) ?? []
  if (
    !Number.isInteger(timestamp) ||
    Math.abs(Date.now() / 1000 - timestamp) > 300 ||
    !signatures.length
  ) {
    return false
  }

  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const digest = new Uint8Array(
    await crypto.subtle.sign('HMAC', key, encoder.encode(`${timestamp}.${body}`)),
  )
  const expected = Array.from(digest, (byte) => byte.toString(16).padStart(2, '0')).join('')
  return signatures.some((signature) => {
    let difference = 0
    for (let index = 0; index < expected.length; index++) {
      difference |= expected.charCodeAt(index) ^ (signature ?? '').charCodeAt(index)
    }
    return difference === 0
  })
}
