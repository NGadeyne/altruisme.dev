import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { hasCourseAccess } from '@/services/courseAccess'
import { useAuthStore } from '@/stores/auth'

const mock = vi.hoisted(() => ({
  sessionUser: null as { id: string; email: string } | null,
  onAuthStateChange: null as
    ((event: string, session: { user: { id: string; email: string } } | null) => void) | null,
}))

vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      async getSession() {
        return {
          data: { session: mock.sessionUser ? { user: mock.sessionUser } : null },
          error: null,
        }
      },
      onAuthStateChange(callback: typeof mock.onAuthStateChange) {
        mock.onAuthStateChange = callback
        return { data: { subscription: { unsubscribe() {} } } }
      },
      async signInWithPassword({ email }: { email: string; password: string }) {
        return { data: { user: { id: email, email } }, error: null }
      },
      async signOut() {
        return { error: null }
      },
    },
  },
}))

vi.mock('@/services/courseAccess', () => ({
  hasCourseAccess: vi.fn<(userId: string, courseSlug: string) => Promise<boolean>>(),
}))

beforeEach(() => {
  setActivePinia(createPinia())
  mock.sessionUser = null
  mock.onAuthStateChange = null
  vi.mocked(hasCourseAccess).mockReset()
})

describe('états des comptes Learn', () => {
  it('distingue visiteur, compte sans droit et apprenant autorisé', async () => {
    const store = useAuthStore()
    await store.initialize()
    expect(store.learnerState).toBe('visitor')

    await store.login('sans-acces@example.com', 'password')
    expect(store.learnerState).toBe('checking')
    vi.mocked(hasCourseAccess).mockResolvedValue(false)
    expect(await store.refreshSeoAccess()).toBe('denied')
    expect(store.learnerState).toBe('account_without_access')

    vi.mocked(hasCourseAccess).mockResolvedValue(true)
    mock.onAuthStateChange?.('SIGNED_IN', { user: { id: 'paid-user', email: 'paid@example.com' } })
    expect(store.seoAccessStatus).toBe('unknown')
    expect(await store.refreshSeoAccess()).toBe('granted')
    expect(store.learnerState).toBe('learner')
    expect(hasCourseAccess).toHaveBeenLastCalledWith('paid-user', 'seo')

    await store.logout()
    expect(store.learnerState).toBe('visitor')
    expect(store.seoAccessStatus).toBe('unknown')
  })

  it('ne confond pas une erreur de vérification avec un achat confirmé', async () => {
    const store = useAuthStore()
    await store.initialize()
    await store.login('learner@example.com', 'password')
    vi.mocked(hasCourseAccess).mockRejectedValueOnce(new Error('network'))

    expect(await store.refreshSeoAccess()).toBe('error')
    expect(store.learnerState).toBe('access_error')

    vi.mocked(hasCourseAccess).mockResolvedValue(true)
    expect(await store.refreshSeoAccess(true)).toBe('granted')
    expect(store.learnerState).toBe('learner')
  })
})
