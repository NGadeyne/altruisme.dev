import { supabase } from '@/lib/supabase'
import type { PersonalPlanAction, PlanStatus } from '@/types/learningPlan'

interface PersonalActionRow {
  id: string
  title: string
  description: string | null
  module_id: string | null
  status: PlanStatus
  created_at: string
  updated_at: string
  completed_at: string | null
}

interface PresetStatusRow {
  action_key: string
  status: PlanStatus
}

export interface PersonalActionInput {
  title: string
  description: string | null
  moduleId: string | null
}

function mapPersonalAction(row: PersonalActionRow): PersonalPlanAction {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    moduleId: row.module_id,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    completedAt: row.completed_at,
  }
}

export async function loadLearningPlan(userId: string, courseSlug: string) {
  const [presetResult, personalResult] = await Promise.all([
    supabase
      .from('learn_plan_statuses')
      .select('action_key,status')
      .eq('user_id', userId)
      .eq('course_slug', courseSlug),
    supabase
      .from('learn_personal_actions')
      .select('id,title,description,module_id,status,created_at,updated_at,completed_at')
      .eq('user_id', userId)
      .eq('course_slug', courseSlug)
      .order('created_at', { ascending: true }),
  ])

  if (presetResult.error) throw presetResult.error
  if (personalResult.error) throw personalResult.error

  const statuses = Object.fromEntries(
    ((presetResult.data ?? []) as PresetStatusRow[]).map((row) => [row.action_key, row.status]),
  ) as Record<string, PlanStatus>

  const personalActions = ((personalResult.data ?? []) as PersonalActionRow[]).map(
    mapPersonalAction,
  )

  return { statuses, personalActions }
}

export async function loadPresetStatus(userId: string, courseSlug: string, actionKey: string) {
  const { data, error } = await supabase
    .from('learn_plan_statuses')
    .select('status')
    .eq('user_id', userId)
    .eq('course_slug', courseSlug)
    .eq('action_key', actionKey)
    .maybeSingle()

  if (error) throw error
  return (data?.status ?? 'todo') as PlanStatus
}

export async function savePresetStatus(
  userId: string,
  courseSlug: string,
  actionKey: string,
  status: PlanStatus,
) {
  const { error } = await supabase
    .from('learn_plan_statuses')
    .upsert(
      { user_id: userId, course_slug: courseSlug, action_key: actionKey, status },
      { onConflict: 'user_id,course_slug,action_key' },
    )

  if (error) throw error
}

export async function createPersonalAction(
  userId: string,
  courseSlug: string,
  input: PersonalActionInput,
) {
  const { data, error } = await supabase
    .from('learn_personal_actions')
    .insert({
      user_id: userId,
      course_slug: courseSlug,
      title: input.title,
      description: input.description,
      module_id: input.moduleId,
      status: 'todo',
    })
    .select('id,title,description,module_id,status,created_at,updated_at,completed_at')
    .single()

  if (error) throw error
  return mapPersonalAction(data as PersonalActionRow)
}

export async function updatePersonalAction(
  userId: string,
  courseSlug: string,
  actionId: string,
  changes: Partial<PersonalActionInput> & { status?: PlanStatus },
) {
  const update: Record<string, string | null> = {}
  if (changes.title !== undefined) update.title = changes.title
  if (changes.description !== undefined) update.description = changes.description
  if (changes.moduleId !== undefined) update.module_id = changes.moduleId
  if (changes.status !== undefined) update.status = changes.status

  const { data, error } = await supabase
    .from('learn_personal_actions')
    .update(update)
    .eq('id', actionId)
    .eq('user_id', userId)
    .eq('course_slug', courseSlug)
    .select('id,title,description,module_id,status,created_at,updated_at,completed_at')
    .single()

  if (error) throw error
  return mapPersonalAction(data as PersonalActionRow)
}

export async function deletePersonalAction(userId: string, courseSlug: string, actionId: string) {
  const { error } = await supabase
    .from('learn_personal_actions')
    .delete()
    .eq('id', actionId)
    .eq('user_id', userId)
    .eq('course_slug', courseSlug)
    .select('id')
    .single()

  if (error) throw error
}
