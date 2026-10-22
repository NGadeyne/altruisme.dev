import { supabase } from '@/lib/supabase'

export async function hasCourseAccess(userId: string, courseSlug: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('learn_course_entitlements')
    .select('course_slug')
    .eq('user_id', userId)
    .eq('course_slug', courseSlug)
    .maybeSingle()

  if (error) throw error
  return Boolean(data)
}
