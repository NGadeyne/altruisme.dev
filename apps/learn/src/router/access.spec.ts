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

  it('protège les formations et les ouvre aux apprenants autorisés', async () => {
    await router.push('/formations')
    expect(router.currentRoute.value.name).toBe('login')
    expect(router.currentRoute.value.query.redirect).toBe('/formations')

    mock.auth.user = { id: 'learner-without-access' }
    await router.push('/formations')
    expect(router.currentRoute.value.name).toBe('access-pending')

    mock.auth.refreshSeoAccess.mockResolvedValue('granted')
    await router.push('/formations')
    expect(router.currentRoute.value.name).toBe('formations')
  })

  it('laisse le paiement et l’activation accessibles sans compte', async () => {
    await router.push('/paiement')
    expect(router.currentRoute.value.name).toBe('checkout')
    await router.push('/activation')
    expect(router.currentRoute.value.name).toBe('account-activation')
    await router.push('/inscription')
    expect(router.currentRoute.value.name).toBe('checkout')
    await router.push('/confirmation-email')
    expect(router.currentRoute.value.name).toBe('email-confirmation')
    expect(mock.auth.refreshSeoAccess).not.toHaveBeenCalled()
  })

  it('envoie un compte sans achat vers sa page d’accès depuis les contenus', async () => {
    mock.auth.user = { id: 'learner-without-access' }
    await router.push('/formation/lesson-01')
    expect(router.currentRoute.value.name).toBe('access-pending')
    await router.push('/plan-action')
    expect(router.currentRoute.value.name).toBe('access-pending')
    await router.push('/paiement')
    expect(router.currentRoute.value.name).toBe('checkout')
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

  it('sépare la liste /formations du programme /formations/seo', async () => {
    mock.auth.user = { id: 'learner-with-access' }
    mock.auth.refreshSeoAccess.mockResolvedValue('granted')

    await router.push('/formations')
    expect(router.currentRoute.value.path).toBe('/formations')
    expect(router.currentRoute.value.name).toBe('formations')
    await router.push('/formations/seo')
    expect(router.currentRoute.value.name).toBe('dashboard')
    expect(router.currentRoute.value.path).toBe('/formations/seo')
    expect(router.resolve('/formation').name).toBe('not-found')
  })

  it('ouvre les trois leçons du module local et leurs mises en pratique', async () => {
    mock.auth.user = { id: 'learner-with-access' }
    mock.auth.refreshSeoAccess.mockResolvedValue('granted')

    await router.push('/formation/lesson-23')
    expect(router.currentRoute.value.name).toBe('seo-lesson')
    await router.push('/formation/lesson-24')
    expect(router.currentRoute.value.name).toBe('seo-lesson')
    await router.push('/formation/lesson-25')
    expect(router.currentRoute.value.name).toBe('seo-lesson')
    await router.push('/formation/lesson-26')
    expect(router.currentRoute.value.name).toBe('seo-lesson')
    await router.push('/formation/pratique-08')
    expect(router.currentRoute.value.name).toBe('seo-practice-08')
    await router.push('/formation/pratique-09')
    expect(router.currentRoute.value.name).toBe('seo-practice-09')
    await router.push('/formation/pratique-10')
    expect(router.currentRoute.value.name).toBe('seo-practice-10')
  })
})
