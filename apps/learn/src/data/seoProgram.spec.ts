import { describe, expect, it } from 'vitest'

import {
  estimateSeoMinutes,
  formatSeoMinutes,
  getSeoPracticeMinutes,
  seoPracticeMinutes,
  seoProgram,
  seoReadingMinutes,
} from '@/data/seoProgram'

describe('programme de la formation SEO', () => {
  it('contient neuf modules et vingt-huit leçons aux identifiants et numéros uniques', () => {
    expect(seoProgram.map((module) => module.number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const lessons = seoProgram.flatMap((module) => module.lessons)
    expect(lessons.map((lesson) => lesson.number)).toEqual(
      Array.from({ length: 28 }, (_, index) => index + 1),
    )
    expect(lessons.map((lesson) => lesson.id)).toEqual(
      lessons.map((lesson) => `seo-lesson-${String(lesson.number).padStart(2, '0')}`),
    )
  })

  it('place les nouveaux modules et les leçons déplacées au bon endroit', () => {
    expect(seoProgram[4]?.title).toBe('Maîtriser les fondamentaux techniques')
    expect(seoProgram[4]?.exercise).toBeTruthy()
    expect(seoProgram[4]?.lessons.map((lesson) => lesson.readingMinutes)).toEqual([
      { min: 15, max: 18 },
      { min: 15, max: 18 },
      { min: 15, max: 20 },
      { min: 15, max: 20 },
    ])
    expect(seoProgram[5]?.title).toBe('Construire ta stratégie de contenu')
    expect(seoProgram[5]?.id).toBe('seo-developper-visibilite')
    expect(seoProgram[5]?.lessons.map((lesson) => lesson.title)).toEqual([
      'Identifier les sujets à fort potentiel',
      'Préparer un contenu SEO de qualité',
      'Construire une stratégie éditoriale cohérente',
    ])
    expect(seoProgram[6]?.title).toBe('Développer son autorité et ses backlinks')
    expect(seoProgram[6]?.exercise).toBeTruthy()
    expect(seoProgram[7]?.title).toBe('Être visible dans les moteurs IA (GEO)')
    expect(seoProgram[7]?.exercise).toBeTruthy()
    expect(seoProgram[8]?.title).toBe('Mesurer et progresser')
    expect(seoProgram[8]?.id).toBe('seo-mesurer-progresser')
    expect(
      seoProgram.flatMap((module) => module.lessons).map((lesson) => lesson.title),
    ).not.toContain('Développer son autorité et obtenir des liens pertinents')
  })

  it('calcule les durées du parcours à partir des leçons et des exercices', () => {
    const lessons = seoProgram.flatMap((module) => module.lessons)
    expect(lessons.every((lesson) => lesson.readingMinutes.min <= lesson.readingMinutes.max)).toBe(
      true,
    )
    expect(lessons[0]?.readingMinutes).toEqual({ min: 10, max: 12 })
    expect(estimateSeoMinutes(lessons[0]!.readingMinutes)).toBe(11)
    expect(getSeoPracticeMinutes(1)).toBe(13)
    expect(seoReadingMinutes).toBe(459)
    expect(seoPracticeMinutes).toBe(174)
    expect(formatSeoMinutes(seoReadingMinutes)).toBe('7 h 39')
    expect(formatSeoMinutes(seoReadingMinutes + seoPracticeMinutes)).toBe('10 h 33')
  })
})
