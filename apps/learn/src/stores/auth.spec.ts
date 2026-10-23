import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { hasCourseAccess } from '@/services/courseAccess'
import { useAuthStore } from '@/stores/auth'

const mock = vi.hoisted(() => ({
  sessionUser: null as { id: string; email: string } | null,
  resendArgs: null as unknown,
  updatePasswordArgs: null as unknown,
  updatePasswordError: false,
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
      async resend(args: unknown) {
        mock.resendArgs = args
        return { error: null }
      },
      async updateUser(args: unknown) {
        mock.updatePasswordArgs = args
        return {
          data: { user: null },
          error: mock.updatePasswordError ? new Error('update failed') : null,
        }
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
  mock.resendArgs = null
  mock.updatePasswordArgs = null
  mock.updatePasswordError = false
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

  it('enregistre un mot de passe après activation sans attribuer de droit SEO', async () => {
    const store = useAuthStore()
    await store.initialize()
    await store.login('new@example.com', 'temporary-password')

    await store.setPassword('password123')
    expect(mock.updatePasswordArgs).toEqual({ password: 'password123' })
    expect(store.user?.email).toBe('new@example.com')
    expect(hasCourseAccess).not.toHaveBeenCalled()
  })

  it('permet de renvoyer un ancien lien de confirmation et remonte une erreur de mot de passe', async () => {
    const store = useAuthStore()
    await store.initialize()
    await store.resendConfirmation('new@example.com')
    expect(mock.resendArgs).toEqual({
      type: 'signup',
      email: 'new@example.com',
      options: { emailRedirectTo: `${window.location.origin}/confirmation-email` },
    })
    mock.updatePasswordError = true
    await expect(store.setPassword('password123')).rejects.toThrow('update failed')
  })
})
