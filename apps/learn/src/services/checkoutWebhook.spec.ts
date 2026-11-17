import { describe, expect, it } from 'vitest'

import {
  hasValidStripeSignature,
  hashClaimToken,
  hasMatchingClaimToken,
  isPaidSeoCheckout,
} from '../../supabase/functions/learn-stripe-webhook/payment'

const paidSession = {
  id: 'cs_test_123',
  mode: 'payment',
  payment_status: 'paid',
  amount_total: 2700,
  currency: 'eur',
  metadata: { course_slug: 'seo' },
  customer_details: { email: 'acheteur@example.com' },
}

describe('confirmation Stripe Learn', () => {
  it('refuse une session impayée, un autre montant ou une autre formation', () => {
    expect(isPaidSeoCheckout(paidSession)).toBe(true)
    expect(isPaidSeoCheckout({ ...paidSession, amount_total: 9700 })).toBe(true)
    expect(isPaidSeoCheckout({ ...paidSession, payment_status: 'unpaid' })).toBe(false)
    expect(isPaidSeoCheckout({ ...paidSession, amount_total: 1 })).toBe(false)
    expect(isPaidSeoCheckout({ ...paidSession, metadata: { course_slug: 'other' } })).toBe(false)
  })

  it('vérifie la signature du corps brut et refuse un rejeu ancien', async () => {
    const body = JSON.stringify({
      type: 'checkout.session.completed',
      data: { object: paidSession },
    })
    const timestamp = Math.floor(Date.now() / 1000)
    const encoder = new TextEncoder()
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode('whsec_test'),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign'],
    )
    const digest = new Uint8Array(
      await crypto.subtle.sign('HMAC', key, encoder.encode(`${timestamp}.${body}`)),
    )
    const signature = Array.from(digest, (byte) => byte.toString(16).padStart(2, '0')).join('')

    expect(
      await hasValidStripeSignature(body, `t=${timestamp},v1=${signature}`, 'whsec_test'),
    ).toBe(true)
    expect(
      await hasValidStripeSignature(`${body} `, `t=${timestamp},v1=${signature}`, 'whsec_test'),
    ).toBe(false)
    expect(
      await hasValidStripeSignature(body, `t=${timestamp - 600},v1=${signature}`, 'whsec_test'),
    ).toBe(false)
  })

  it('réserve la vérification du retour au navigateur qui a lancé le Checkout', async () => {
    const token = 'a'.repeat(64)
    const session = {
      ...paidSession,
      metadata: {
        course_slug: 'seo',
        claim_token_hash: await hashClaimToken(token),
      },
    }
    expect(await hasMatchingClaimToken(session, token)).toBe(true)
    expect(await hasMatchingClaimToken(session, 'b'.repeat(64))).toBe(false)
    expect(await hasMatchingClaimToken(paidSession, token)).toBe(false)
  })
})
