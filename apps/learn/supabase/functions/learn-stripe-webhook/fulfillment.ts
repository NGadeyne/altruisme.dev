import type { CheckoutSession } from './payment.ts'

type FulfillmentClient = {
  rpc: (
    functionName: string,
    args: Record<string, unknown>,
  ) => PromiseLike<{ data: unknown; error: Error | null }>
}

type PaidSession = CheckoutSession & {
  id: string
  amount_total: number
  currency: string
  customer_details: { email: string }
}

export async function fulfillPaidCheckout(
  supabase: FulfillmentClient,
  session: PaidSession,
): Promise<'new' | 'existing'> {
  const email = session.customer_details.email.trim().toLowerCase()
  const { data: confirmedUserId, error: lookupError } = await supabase.rpc(
    'learn_find_confirmed_user_by_email',
    { p_email: email },
  )
  if (lookupError) throw lookupError

  const args = {
    p_session_id: session.id,
    p_email: email,
    p_amount_total: session.amount_total,
    p_currency: session.currency,
  }
  const { error } = await supabase.rpc(
    confirmedUserId ? 'learn_record_paid_checkout' : 'learn_record_pending_checkout',
    args,
  )
  if (error) throw error
  return confirmedUserId ? 'existing' : 'new'
}
