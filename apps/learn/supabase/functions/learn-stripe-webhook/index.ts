import { createClient } from 'npm:@supabase/supabase-js@2.112.4'
import { hasValidStripeSignature, isPaidSeoCheckout, type CheckoutSession } from './payment.ts'
import { fulfillPaidCheckout } from './fulfillment.ts'

type StripeEvent = {
  type?: string
  data?: { object?: CheckoutSession }
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') return new Response('Méthode non autorisée', { status: 405 })

  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const secretKeys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}') as {
    default?: string
  }
  const serviceRoleKey = secretKeys.default ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!webhookSecret || !supabaseUrl || !serviceRoleKey) {
    console.error('Configuration Learn Stripe webhook manquante')
    return new Response('Service indisponible', { status: 503 })
  }

  const body = await request.text()
  if (
    !(await hasValidStripeSignature(
      body,
      request.headers.get('stripe-signature') ?? '',
      webhookSecret,
    ))
  ) {
    return new Response('Signature invalide', { status: 400 })
  }

  const event = JSON.parse(body) as StripeEvent
  if (event.type !== 'checkout.session.completed') return Response.json({ received: true })

  const session = event.data?.object
  if (!isPaidSeoCheckout(session)) {
    console.error('Session Learn Checkout inattendue', session?.id)
    return new Response('Session invalide', { status: 400 })
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  try {
    await fulfillPaidCheckout(supabase, session)
    return Response.json({ received: true })
  } catch (error) {
    console.error('Attribution Learn impossible pour la session', session.id, error)
    return new Response('Attribution impossible', { status: 500 })
  }
})
