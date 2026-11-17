import { describe, expect, it, vi } from 'vitest'

import { fulfillPaidCheckout } from '../../supabase/functions/learn-stripe-webhook/fulfillment'

const session = {
  id: 'cs_test_paid_checkout',
  mode: 'payment',
  payment_status: 'paid',
  amount_total: 2700,
  currency: 'eur',
  metadata: { course_slug: 'seo' },
  customer_details: { email: 'Acheteur@Example.com ' },
}

describe('attribution du paiement Learn', () => {
  it('met un achat en attente sans confirmer l’adresse e-mail', async () => {
    const rpc = vi
      .fn()
      .mockResolvedValueOnce({ data: null, error: null })
      .mockResolvedValueOnce({ data: null, error: null })
    const supabase = { rpc }

    const status = await fulfillPaidCheckout(
      supabase as unknown as Parameters<typeof fulfillPaidCheckout>[0],
      session,
    )

    expect(status).toBe('new')
    expect(rpc).toHaveBeenLastCalledWith('learn_record_pending_checkout', {
      p_session_id: session.id,
      p_email: 'acheteur@example.com',
      p_amount_total: 2700,
      p_currency: 'eur',
    })
  })

  it('préserve le mot de passe d’un compte existant', async () => {
    const rpc = vi
      .fn()
      .mockResolvedValueOnce({ data: 'user-1', error: null })
      .mockResolvedValueOnce({ data: 'user-1', error: null })
    const supabase = { rpc }

    const status = await fulfillPaidCheckout(
      supabase as unknown as Parameters<typeof fulfillPaidCheckout>[0],
      session,
    )

    expect(status).toBe('existing')
    expect(rpc).toHaveBeenLastCalledWith(
      'learn_record_paid_checkout',
      expect.objectContaining({ p_email: 'acheteur@example.com' }),
    )
  })
})
