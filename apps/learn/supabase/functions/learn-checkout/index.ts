import { hashClaimToken, seoCoursePriceCents } from '../learn-stripe-webhook/payment.ts'

const courseSlug = 'seo'

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
  if (!configuredSiteUrl || !stripeSecret) {
    console.error('Configuration Learn Checkout manquante')
    return new Response('Service indisponible', { status: 503 })
  }

  const siteUrl = new URL(configuredSiteUrl)
  const headers = corsHeaders(request.headers.get('Origin'), siteUrl)
  if (request.method === 'OPTIONS') return new Response(null, { headers })
  if (request.method !== 'POST')
    return new Response('Méthode non autorisée', { status: 405, headers })

  const origin = request.headers.get('Origin')
  if (origin && origin !== siteUrl.origin && origin !== 'http://localhost:5173') {
    return new Response('Origine non autorisée', { status: 403, headers })
  }

  let claimToken: string
  try {
    const body = (await request.json()) as { claim_token?: unknown }
    if (typeof body.claim_token !== 'string' || !/^[a-f0-9]{64}$/.test(body.claim_token)) {
      return Response.json({ error: 'Requête invalide.' }, { status: 400, headers })
    }
    claimToken = body.claim_token
  } catch {
    return Response.json({ error: 'Requête invalide.' }, { status: 400, headers })
  }

  const claimTokenHash = await hashClaimToken(claimToken)
  const successUrl = `${new URL('/paiement/confirmation', siteUrl)}?session_id={CHECKOUT_SESSION_ID}`

  const params = new URLSearchParams({
    ui_mode: 'hosted_page',
    mode: 'payment',
    billing_address_collection: 'auto',
    'phone_number_collection[enabled]': 'false',
    'automatic_tax[enabled]': 'true',
    allow_promotion_codes: 'false',
    submit_type: 'auto',
    integration_identifier: 'hosted_web_0001',
    origin_context: 'web',
    'payment_method_types[0]': 'card',
    'line_items[0][price_data][currency]': 'eur',
    'line_items[0][price_data][unit_amount]': String(seoCoursePriceCents),
    'line_items[0][price_data][tax_behavior]': 'inclusive',
    'line_items[0][price_data][product_data][name]': 'Formation SEO — Altruisme Learn',
    'line_items[0][quantity]': '1',
    'metadata[course_slug]': courseSlug,
    'metadata[claim_token_hash]': claimTokenHash,
    success_url: successUrl,
    cancel_url: new URL('/paiement?annule=1', siteUrl).toString(),
  })

  try {
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    })
    if (!response.ok) {
      console.error('Création de session Stripe refusée', response.status, await response.text())
      return Response.json(
        { error: 'Paiement indisponible pour le moment.' },
        { status: 502, headers },
      )
    }

    const session: { id?: string; url?: string } = await response.json()
    if (!session.id?.startsWith('cs_') || !session.url || new URL(session.url).protocol !== 'https:') {
      throw new Error('URL de session Stripe absente ou invalide')
    }
    return Response.json({ id: session.id, url: session.url }, { headers })
  } catch (error) {
    console.error('Erreur Learn Checkout', error)
    return Response.json(
      { error: 'Paiement indisponible pour le moment.' },
      { status: 502, headers },
    )
  }
})
