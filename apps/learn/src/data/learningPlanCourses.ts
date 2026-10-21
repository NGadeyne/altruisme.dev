import { seoActions } from '@/data/seoActions'
import { seoProgram } from '@/data/seoProgram'
import type { LearningPlanCourse } from '@/types/learningPlan'

const seoCourse: LearningPlanCourse = {
  slug: 'seo',
  title: 'Formation SEO',
  planDescription:
    "Retrouve les actions à réaliser sur ton site et avance à ton rythme. Chaque action terminée te rapproche d'un référencement plus solide.",
  modules: seoProgram.map(({ id, title, number }) => ({ id, title, number })),
  actions: seoActions,
}

const learningPlanCourses = new Map<string, LearningPlanCourse>([[seoCourse.slug, seoCourse]])

export function getLearningPlanCourse(slug: string) {
  return learningPlanCourses.get(slug)
}
