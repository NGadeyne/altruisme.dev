import { supabase } from '@/lib/supabase'

export async function syncProtectedAssets(): Promise<void> {
  if (import.meta.env.DEV) return
  const { data, error } = await supabase.auth.getSession()
  const token = data.session?.access_token
  if (error || !token) throw new Error('Session Learn indisponible.')

  const response = await fetch('/api/asset-access', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    credentials: 'same-origin',
    cache: 'no-store',
  })
  if (!response.ok) throw new Error('Accès à la formation indisponible.')
}

export async function clearProtectedAssets(): Promise<void> {
  if (import.meta.env.DEV) return
  const response = await fetch('/api/asset-access', {
    method: 'DELETE',
    credentials: 'same-origin',
    cache: 'no-store',
  })
  if (!response.ok) throw new Error('Déconnexion de la formation indisponible.')
}
