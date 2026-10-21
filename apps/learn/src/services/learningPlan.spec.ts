import { beforeEach, describe, expect, it, vi } from 'vitest'

import {
  deletePersonalAction,
  loadLearningPlan,
  updatePersonalAction,
} from '@/services/learningPlan'

const mock = vi.hoisted(() => ({
  queries: [] as { table: string; filters: Record<string, string>; operation: string }[],
}))

vi.mock('@/lib/supabase', () => ({
  supabase: {
    from(table: string) {
      const query = { table, filters: {} as Record<string, string>, operation: 'select' }
      mock.queries.push(query)
      type QueryBuilder = Promise<{ data: unknown[]; error: null }> & {
        select: () => QueryBuilder
        eq: (column: string, value: string) => QueryBuilder
        order: () => QueryBuilder
        update: () => QueryBuilder
        delete: () => QueryBuilder
        single: () => Promise<{ data: Record<string, string | null>; error: null }>
      }
      const builder: QueryBuilder = Object.assign(
        Promise.resolve({ data: [] as unknown[], error: null }),
        {
          select() {
            return builder
          },
          eq(column: string, value: string) {
            query.filters[column] = value
            return builder
          },
          order() {
            return builder
          },
          update() {
            query.operation = 'update'
            return builder
          },
          delete() {
            query.operation = 'delete'
            return builder
          },
          single() {
            return Promise.resolve({
              data: {
                id: 'personal-1',
                title: 'Action',
                description: null,
                module_id: null,
                status: 'todo',
                created_at: '2026-10-17T12:00:00Z',
                updated_at: '2026-10-17T12:00:00Z',
                completed_at: null,
              },
              error: null,
            })
          },
        },
      ) as QueryBuilder
      return builder
    },
  },
}))

beforeEach(() => {
  mock.queries.length = 0
})

describe('requêtes du plan d’action', () => {
  it('charge uniquement les données de l’apprenant et de la formation demandés', async () => {
    await loadLearningPlan('learner-a', 'seo')

    expect(mock.queries.map((query) => query.table)).toEqual([
      'learn_plan_statuses',
      'learn_personal_actions',
    ])
    for (const query of mock.queries) {
      expect(query.filters).toEqual({ user_id: 'learner-a', course_slug: 'seo' })
    }
  })

  it('limite modification et suppression au propriétaire et à la formation', async () => {
    await updatePersonalAction('learner-b', 'other-course', 'personal-1', { title: 'Action' })
    await deletePersonalAction('learner-b', 'other-course', 'personal-1')

    expect(
      mock.queries.map((query) => ({ operation: query.operation, filters: query.filters })),
    ).toEqual([
      {
        operation: 'update',
        filters: { id: 'personal-1', user_id: 'learner-b', course_slug: 'other-course' },
      },
      {
        operation: 'delete',
        filters: { id: 'personal-1', user_id: 'learner-b', course_slug: 'other-course' },
      },
    ])
  })
})
