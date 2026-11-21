import { defineComponent, h, type Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { courseModules, coursePath } from '@/content/guides/seo'

const lessons = import.meta.glob<Component>(
  '../../../learn/src/components/courses/SeoLesson*Content.vue',
  { import: 'default' },
)
const practices = import.meta.glob<Component>(
  '../../../learn/src/components/courses/practices/SeoPractice*Content.vue',
  { import: 'default' },
)

export const seoCourseRoutes: RouteRecordRaw[] = courseModules.flatMap((module) => {
  const route: RouteRecordRaw = {
    path: module.path,
    name: `formation-seo-${module.slug}`,
    meta: {
      title: `${module.title} | SEO 2026 : guide complet`,
      description: module.description,
      ogTitle: module.title,
    },
    component: async () => {
      const [{ default: view }, sections] = await Promise.all([
        import('@/views/guides/SeoCourseModule.vue'),
        Promise.all(
          module.steps.map(async (step) => {
            const load = step.lessonNumber
              ? lessons[
                  `../../../learn/src/components/courses/SeoLesson${step.lessonNumber}Content.vue`
                ]
              : practices[
                  `../../../learn/src/components/courses/practices/SeoPractice${String(module.number).padStart(2, '0')}Content.vue`
                ]
            if (!load) throw new Error(`Contenu manquant pour ${step.path}`)
            return { ...step, body: await load() }
          }),
        ),
      ])
      return defineComponent({ setup: () => () => h(view, { module, sections }) })
    },
  }
  return [
    route,
    ...module.steps.map((step) => ({
      path: `${coursePath}/${step.slug}`,
      redirect: { path: module.path, hash: `#${step.slug}` },
    })),
  ]
})

// Published fragments of the former guide lead to the closest topic in the course.
const formerChapters = [
  'lecon-01',
  'lecon-03',
  'lecon-02',
  'lecon-07',
  'lecon-08',
  'lecon-14',
  'lecon-13',
  'lecon-05',
  'lecon-10',
  'lecon-11',
  'lecon-20',
  'lecon-12',
  'lecon-21',
  'lecon-10',
  'lecon-29',
  'exercice-02',
  'lecon-26',
  'lecon-31',
]

export function formerSeoGuideAnchor(id: string) {
  const chapter = /^partie-(\d+)(?:-|$)/.exec(id)
  if (chapter) return formerChapters[Number(chapter[1]) - 1]
  if (/^conclusion(?:-|$)/.test(id)) return 'exercice-10'
  if (id.startsWith('faq-')) return 'faq'
  if (id.startsWith('introduction-')) return 'introduction'
}
