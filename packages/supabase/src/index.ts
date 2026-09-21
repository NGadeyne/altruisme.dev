import { createClient } from '@supabase/supabase-js'

export function createBrowserSupabaseClient(
  supabaseUrl: string | undefined,
  supabasePublishableKey: string | undefined,
) {
  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error('Variables Supabase manquantes.')
  }

  return createClient(supabaseUrl, supabasePublishableKey)
}
