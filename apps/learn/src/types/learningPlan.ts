export type PlanStatus = 'todo' | 'in_progress' | 'done'

export interface PlanActionDefinition {
  key: string
  title: string
  description: string
  completionCriterion: string
  moduleId: string
  lessonId: string
  order: number
  isNew?: boolean
}

export interface PersonalPlanAction {
  id: string
  title: string
  description: string | null
  moduleId: string | null
  status: PlanStatus
  createdAt: string
  updatedAt: string
  completedAt: string | null
}

export interface PlanModule {
  id: string
  title: string
  number: number
}

export interface LearningPlanCourse {
  slug: string
  title: string
  planDescription: string
  modules: PlanModule[]
  actions: PlanActionDefinition[]
}
