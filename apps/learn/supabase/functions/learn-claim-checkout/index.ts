import { createClient } from 'npm:@supabase/supabase-js@2.112.4'
import { fulfillPaidCheckout } from '../learn-stripe-webhook/fulfillment.ts'
import {
  hasMatchingClaimToken,
  isPaidSeoCheckout,
  type CheckoutSession,
} from '../learn-stripe-webhook/payment.ts'

function corsHeaders(origin: string | null, siteUrl: URL): HeadersInit {
  const allowed = origin === siteUrl.origin || origin === 'http://localhost:5173'
  return {
    'Access-Control-Allow-Origin': allowed ? origin : siteUrl.origin,
    'Access-Control-Allow-Headers': 'apikey, authorization, content-type, x-client-info',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    Vary: 'Origin',
  }
}

Deno.serve(async (request) => {
  const configuredSiteUrl = Deno.env.get('LEARN_SITE_URL')
  const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const secretKeys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}') as {
    default?: string
  }
  const serviceRoleKey = secretKeys.default ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!configuredSiteUrl || !stripeSecret || !supabaseUrl || !serviceRoleKey) {
    console.error('Configuration Learn claim manquante')
    return new Response('Service indisponible', { status: 503 })
  }

  const siteUrl = new URL(configuredSiteUrl)
  const headers = corsHeaders(request.headers.get('Origin'), siteUrl)
  if (request.method === 'OPTIONS') return new Response(null, { headers })
  if (request.method !== 'POST') {
    return new Response('Méthode non autorisée', { status: 405, headers })
  }
  const origin = request.headers.get('Origin')
  if (origin && origin !== siteUrl.origin && origin !== 'http://localhost:5173') {
    return new Response('Origine non autorisée', { status: 403, headers })
  }

  let sessionId: string
  let claimToken: string
  try {
    const body = (await request.json()) as Record<string, unknown>
    if (
      typeof body.session_id !== 'string' ||
      !/^cs_[A-Za-z0-9_]{8,}$/.test(body.session_id) ||
      typeof body.claim_token !== 'string' ||
      !/^[a-f0-9]{64}$/.test(body.claim_token) ||
      body.password !== undefined
    ) {
      return Response.json({ error: 'Requête invalide.' }, { status: 400, headers })
    }
    sessionId = body.session_id
    claimToken = body.claim_token
  } catch {
    return Response.json({ error: 'Requête invalide.' }, { status: 400, headers })
  }

  try {
    const stripeResponse = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      { headers: { Authorization: `Bearer ${stripeSecret}` } },
    )
    if (!stripeResponse.ok) {
      return Response.json({ error: 'Paiement introuvable.' }, { status: 404, headers })
    }
    const session = (await stripeResponse.json()) as CheckoutSession
    if (!isPaidSeoCheckout(session) || session.id !== sessionId) {
      return Response.json({ error: 'Paiement non validé.' }, { status: 409, headers })
    }
    if (!(await hasMatchingClaimToken(session, claimToken))) {
      return Response.json({ error: 'Vérification impossible.' }, { status: 403, headers })
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })
    const status = await fulfillPaidCheckout(supabase, session)

    return Response.json(
      { status, email: session.customer_details.email },
      { headers },
    )
  } catch (error) {
    console.error('Activation Learn impossible pour la session', sessionId, error)
    return Response.json({ error: 'Accès indisponible.' }, { status: 503, headers })
  }
})
