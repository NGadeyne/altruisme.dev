import { beforeEach, describe, expect, it, vi } from 'vitest'

import { hasCourseAccess } from '@/services/courseAccess'

const mock = vi.hoisted(() => ({
  filters: {} as Record<string, string>,
  row: null as { course_slug: string } | null,
  error: null as Error | null,
}))

vi.mock('@/lib/supabase', () => ({
  supabase: {
    from(table: string) {
      if (table !== 'learn_course_entitlements') throw new Error(`Unexpected table: ${table}`)
      return {
        select() {
          return this
        },
        eq(column: string, value: string) {
          mock.filters[column] = value
          return this
        },
        async maybeSingle() {
          return { data: mock.row, error: mock.error }
        },
      }
    },
  },
}))

beforeEach(() => {
  mock.filters = {}
  mock.row = null
  mock.error = null
})

describe('droits de formation', () => {
  it('ne consulte que le droit du compte et de la formation demandés', async () => {
    mock.row = { course_slug: 'seo' }
    expect(await hasCourseAccess('learner-a', 'seo')).toBe(true)
    expect(mock.filters).toEqual({ user_id: 'learner-a', course_slug: 'seo' })
  })

  it('refuse l’accès lorsque le droit manque ou que la vérification échoue', async () => {
    expect(await hasCourseAccess('learner-b', 'seo')).toBe(false)
    mock.error = new Error('Supabase unavailable')
    await expect(hasCourseAccess('learner-b', 'seo')).rejects.toThrow('Supabase unavailable')
  })
})
