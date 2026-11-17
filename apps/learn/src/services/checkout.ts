export async function startSeoCheckout(): Promise<void> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  if (!supabaseUrl || !publishableKey) throw new Error('Configuration de paiement manquante.')

  const claimToken = Array.from(crypto.getRandomValues(new Uint8Array(32)), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('')
  const response = await fetch(`${supabaseUrl}/functions/v1/learn-checkout`, {
    method: 'POST',
    headers: {
      apikey: publishableKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ claim_token: claimToken }),
  })
  if (!response.ok) throw new Error('Impossible d’ouvrir le paiement. Réessaie dans un instant.')

  const result: { id?: string; url?: string } = await response.json()
  if (!result.id?.startsWith('cs_') || !result.url || new URL(result.url).protocol !== 'https:') {
    throw new Error('La page de paiement est indisponible. Réessaie dans un instant.')
  }
  sessionStorage.setItem(`learn_checkout_claim:${result.id}`, claimToken)
  window.location.assign(result.url)
}

type CheckoutAccess = { status: 'new' | 'existing'; email: string }

async function requestCheckoutAccess(sessionId: string): Promise<CheckoutAccess> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  const claimToken = sessionStorage.getItem(`learn_checkout_claim:${sessionId}`)
  if (!supabaseUrl || !publishableKey || !claimToken) {
    throw new Error('Cette page de paiement ne peut plus être vérifiée dans cet onglet.')
  }

  const response = await fetch(`${supabaseUrl}/functions/v1/learn-claim-checkout`, {
    method: 'POST',
    headers: { apikey: publishableKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, claim_token: claimToken }),
  })
  if (!response.ok) {
    throw new Error(
      response.status === 409
        ? 'Ce paiement a déjà été associé à un compte. Connecte-toi pour accéder à la formation.'
        : 'Impossible de vérifier ton paiement pour le moment. Réessaie dans un instant.',
    )
  }
  const result = (await response.json()) as CheckoutAccess
  if (result.status !== 'new' && result.status !== 'existing') {
    throw new Error('Réponse de paiement invalide.')
  }
  return result
}

export function checkCheckoutAccess(sessionId: string): Promise<CheckoutAccess> {
  return requestCheckoutAccess(sessionId)
}

export function clearCheckoutClaim(sessionId: string): void {
  sessionStorage.removeItem(`learn_checkout_claim:${sessionId}`)
}
