import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import router from '@/router'

const mock = vi.hoisted(() => ({
  auth: {
    user: null as { id: string } | null,
    loading: false,
    initialize: vi.fn<() => Promise<void>>(async () => {}),
    refreshSeoAccess: vi.fn<() => Promise<'granted' | 'denied' | 'error'>>(async () => 'denied'),
  },
}))

vi.mock('@/stores/auth', () => ({ useAuthStore: () => mock.auth }))

beforeEach(async () => {
  mock.auth.user = null
  mock.auth.loading = false
  mock.auth.refreshSeoAccess.mockResolvedValue('denied')
  await router.replace('/')
})

afterEach(() => vi.clearAllMocks())

describe('accès à la formation SEO', () => {
  it('envoie un visiteur vers la connexion', async () => {
    await router.push('/formation/lesson-01')
    expect(router.currentRoute.value.name).toBe('login')
    expect(router.currentRoute.value.query.redirect).toBe('/formation/lesson-01')
    expect(mock.auth.refreshSeoAccess).not.toHaveBeenCalled()
  })

  it('envoie un compte sans achat vers sa page d’accès depuis les contenus', async () => {
    mock.auth.user = { id: 'learner-without-access' }
    await router.push('/formation/lesson-01')
    expect(router.currentRoute.value.name).toBe('access-pending')
    await router.push('/plan-action')
    expect(router.currentRoute.value.name).toBe('access-pending')
  })

  it('garde les contenus fermés lorsque Supabase ne peut pas vérifier le droit', async () => {
    mock.auth.user = { id: 'learner-1' }
    mock.auth.refreshSeoAccess.mockResolvedValue('error')
    await router.push('/formation')
    expect(router.currentRoute.value.name).toBe('access-pending')
  })

  it('ouvre la formation à un apprenant autorisé', async () => {
    mock.auth.user = { id: 'learner-with-access' }
    mock.auth.refreshSeoAccess.mockResolvedValue('granted')
    await router.push('/formation/lesson-01')
    expect(router.currentRoute.value.name).toBe('seo-lesson')
    await router.push('/acces')
    expect(router.currentRoute.value.name).toBe('dashboard')
  })
})
