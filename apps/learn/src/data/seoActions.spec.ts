import { describe, expect, it } from 'vitest'

import { seoActions } from '@/data/seoActions'
import { seoProgram } from '@/data/seoProgram'
import { getLearningPlanCourse } from '@/data/learningPlanCourses'

describe('catalogue du plan SEO', () => {
  it('contient dix-sept actions stables, ordonnées et rattachées aux bonnes leçons', () => {
    expect(seoActions).toHaveLength(17)
    expect(new Set(seoActions.map((action) => action.key)).size).toBe(17)
    expect(seoActions.map((action) => action.order)).toEqual(
      Array.from({ length: 17 }, (_, index) => index + 1),
    )

    for (const action of seoActions) {
      const module = seoProgram.find((item) => item.id === action.moduleId)
      expect(module).toBeDefined()
      expect(module?.lessons.some((lesson) => lesson.id === action.lessonId)).toBe(true)
      expect(action.title.trim()).not.toBe('')
      expect(action.description.trim()).not.toBe('')
      expect(action.completionCriterion.trim()).not.toBe('')
    }

    expect(
      seoProgram.map(
        (module) => seoActions.filter((action) => action.moduleId === module.id).length,
      ),
    ).toEqual([1, 3, 3, 3, 1, 2, 1, 0, 1, 2])
    expect(seoActions.filter((action) => action.isNew).map((action) => action.key)).toEqual([
      'seo_backlink_opportunities',
      'seo_geo_visibility',
    ])
    expect(seoActions.map((action) => action.key)).toEqual([
      'seo_identify_strategic_pages',
      'seo_setup_search_console',
      'seo_check_indexation',
      'seo_identify_opportunities',
      'seo_identify_search_intents',
      'seo_find_keywords',
      'seo_map_keywords',
      'seo_optimize_metadata',
      'seo_improve_content',
      'seo_internal_links',
      'seo_technical_checks',
      'seo_content_ideas',
      'seo_editorial_plan',
      'seo_backlink_opportunities',
      'seo_geo_visibility',
      'seo_record_baseline',
      'seo_90_day_plan',
    ])
    expect(seoActions.find((action) => action.key === 'seo_technical_checks')?.lessonId).toBe(
      'seo-lesson-13',
    )
    expect(seoActions.find((action) => action.key === 'seo_backlink_opportunities')?.lessonId).toBe(
      'seo-lesson-21',
    )
    expect(seoActions.find((action) => action.key === 'seo_geo_visibility')?.lessonId).toBe(
      'seo-lesson-28',
    )
    expect(seoActions.find((action) => action.key === 'seo_record_baseline')?.order).toBe(16)
    expect(seoActions.find((action) => action.key === 'seo_90_day_plan')?.order).toBe(17)
    expect(getLearningPlanCourse('seo')?.actions).toBe(seoActions)
    expect(getLearningPlanCourse('__proto__')).toBeUndefined()
  })
})
