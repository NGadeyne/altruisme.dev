import { beforeEach, describe, expect, it, vi } from 'vitest'

import {
  completeSeoModule,
  loadSeoModuleProgress,
  reopenSeoModule,
} from '@/services/seoModuleProgress'

const mock = vi.hoisted(() => ({
  queries: [] as {
    table: string
    operation: string
    filters: Record<string, string>
    payload?: unknown
  }[],
}))

vi.mock('@/lib/supabase', () => ({
  supabase: {
    from(table: string) {
      const query: {
        table: string
        operation: string
        filters: Record<string, string>
        payload?: unknown
      } = {
        table,
        operation: 'select',
        filters: {},
      }
      mock.queries.push(query)
      type Builder = Promise<{ data: { module_id: string }[]; error: null }> & {
        select: () => Builder
        eq: (column: string, value: string) => Builder
        delete: () => Builder
        upsert: (payload: unknown) => Promise<{ error: null }>
      }
      const builder = Object.assign(
        Promise.resolve({ data: [{ module_id: 'seo-comprendre-google' }], error: null }),
        {
          select() {
            return builder
          },
          eq(column: string, value: string) {
            query.filters[column] = value
            return builder
          },
          delete() {
            query.operation = 'delete'
            return builder
          },
          upsert(payload: unknown) {
            query.operation = 'upsert'
            query.payload = payload
            return Promise.resolve({ error: null })
          },
        },
      ) as Builder
      return builder
    },
  },
}))

beforeEach(() => {
  mock.queries.length = 0
})

describe('requêtes de progression des modules', () => {
  it('limite la lecture et la suppression au compte et à la formation SEO', async () => {
    expect(await loadSeoModuleProgress('learner-a')).toEqual(['seo-comprendre-google'])
    await reopenSeoModule('learner-b', 'seo-comprendre-google')
    expect(
      mock.queries.map(({ table, operation, filters }) => ({ table, operation, filters })),
    ).toEqual([
      {
        table: 'learn_module_progress',
        operation: 'select',
        filters: { user_id: 'learner-a', course_slug: 'seo' },
      },
      {
        table: 'learn_module_progress',
        operation: 'delete',
        filters: { user_id: 'learner-b', course_slug: 'seo', module_id: 'seo-comprendre-google' },
      },
    ])
  })

  it('enregistre un module avec une clé propre au compte et à la formation', async () => {
    await completeSeoModule('learner-a', 'seo-comprendre-google')
    expect(mock.queries[0]).toMatchObject({
      table: 'learn_module_progress',
      operation: 'upsert',
      payload: { user_id: 'learner-a', course_slug: 'seo', module_id: 'seo-comprendre-google' },
    })
  })
})
