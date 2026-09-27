import { createBrowserSupabaseClient } from '@altruisme/supabase'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createBrowserSupabaseClient(supabaseUrl, supabasePublishableKey)
