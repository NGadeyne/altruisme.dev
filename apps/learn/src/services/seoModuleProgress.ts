import { supabase } from '@/lib/supabase'

const courseSlug = 'seo'

export async function loadSeoModuleProgress(userId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('learn_module_progress')
    .select('module_id')
    .eq('user_id', userId)
    .eq('course_slug', courseSlug)

  if (error) throw error
  return (data ?? []).map((row: { module_id: string }) => row.module_id)
}

export async function completeSeoModule(userId: string, moduleId: string): Promise<void> {
  const { error } = await supabase
    .from('learn_module_progress')
    .upsert(
      { user_id: userId, course_slug: courseSlug, module_id: moduleId },
      { onConflict: 'user_id,course_slug,module_id', ignoreDuplicates: true },
    )

  if (error) throw error
}

export async function reopenSeoModule(userId: string, moduleId: string): Promise<void> {
  const { error } = await supabase
    .from('learn_module_progress')
    .delete()
    .eq('user_id', userId)
    .eq('course_slug', courseSlug)
    .eq('module_id', moduleId)

  if (error) throw error
}
