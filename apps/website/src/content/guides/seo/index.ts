import { modulePages } from './modulePages'
import { lessonDetails, practiceObjectives } from '../../../../../learn/src/data/seoLessonDetails'
import {
  estimateSeoMinutes,
  getSeoPracticeMinutes,
  seoProgram,
} from '../../../../../learn/src/data/seoProgram'

export { formatSeoMinutes, seoReadingMinutes } from '../../../../../learn/src/data/seoProgram'
export { seoResources } from '../../../../../learn/src/data/seoResources'
export { seoExternalResources } from '../../../../../learn/src/data/seoExternalResources'

export interface CourseStep {
  slug: string
  path: string
  title: string
  objective: string
  label: string
  minutes: number
  lessonNumber?: string
}

export const coursePath = '/guides/seo'
const pad = (number: number) => String(number).padStart(2, '0')

export const courseModules = seoProgram.map((module) => {
  const page = modulePages[module.id]
  if (!page) throw new Error(`Page publique manquante pour ${module.id}`)
  const path = `${coursePath}/${page.slug}`
  const steps: CourseStep[] = module.lessons.map((lesson) => {
    const lessonNumber = pad(lesson.number)
    const slug = `lecon-${lessonNumber}`
    return {
      slug,
      path: `${path}#${slug}`,
      title: lesson.title,
      objective: lessonDetails[lesson.id]!.objective,
      label: `Leçon ${lesson.number}`,
      minutes: estimateSeoMinutes(lesson.readingMinutes),
      lessonNumber,
    }
  })
  if (module.exercise) {
    const slug = `exercice-${pad(module.number)}`
    steps.push({
      slug,
      path: `${path}#${slug}`,
      title: module.exercise.replace(/\.$/, ''),
      objective: practiceObjectives[module.number]!,
      label: 'Mise en pratique',
      minutes: getSeoPracticeMinutes(module.number),
    })
  }
  return { ...page, path, number: module.number, steps }
})

export const courseSteps = courseModules.flatMap((module) => module.steps)

export type CourseModule = (typeof courseModules)[number]
