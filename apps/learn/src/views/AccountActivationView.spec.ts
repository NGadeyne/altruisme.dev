import { flushPromises, mount, RouterLinkStub } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import AccountActivationView from '@/views/AccountActivationView.vue'

const mock = vi.hoisted(() => ({
  user: null as { id: string; email: string; invited_at?: string } | null,
  loading: true,
  initialize: vi.fn<() => Promise<void>>(),
  setPassword: vi.fn<(password: string) => Promise<void>>(),
  refreshSeoAccess: vi.fn<() => Promise<'granted' | 'denied'>>(),
  replace: vi.fn<(route: { name: string }) => Promise<void>>(),
  query: {} as Record<string, string>,
}))

vi.mock('@/stores/auth', () => ({ useAuthStore: () => mock }))
vi.mock('vue-router', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue-router')>()),
  useRoute: () => ({ query: mock.query }),
  useRouter: () => ({ replace: mock.replace }),
}))

function mountActivation() {
  return mount(AccountActivationView, {
    global: { stubs: { RouterLink: RouterLinkStub } },
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  mock.user = null
  mock.loading = true
  mock.query = {}
  window.location.hash = ''
  mock.initialize.mockResolvedValue()
  mock.setPassword.mockResolvedValue()
  mock.refreshSeoAccess.mockResolvedValue('granted')
})

describe('activation du compte Learn', () => {
  it('refuse un lien sans session authentifiée', async () => {
    const wrapper = mountActivation()
    await flushPromises()

    expect(wrapper.text()).toContain("Ce lien n'est plus valide")
    expect(wrapper.find('form').exists()).toBe(false)
    expect(mock.setPassword).not.toHaveBeenCalled()
  })

  it('envoie un compte déjà créé vers la vérification de son accès', async () => {
    mock.user = { id: 'existing-user', email: 'existing@example.com' }
    mock.refreshSeoAccess.mockResolvedValue('denied')
    const wrapper = mountActivation()
    await flushPromises()

    expect(wrapper.find('form').exists()).toBe(false)
    expect(mock.replace).toHaveBeenCalledWith({ name: 'access-pending' })
    expect(mock.setPassword).not.toHaveBeenCalled()
  })

  it('permet de définir le mot de passe puis ouvre la formation si le droit existe', async () => {
    mock.user = {
      id: 'invited-user',
      email: 'acheteur@example.com',
      invited_at: '2026-10-22T17:00:00Z',
    }
    const wrapper = mountActivation()
    await flushPromises()

    expect(wrapper.text()).toContain('acheteur@example.com')
    await wrapper.get('#activation-password').setValue('secure-password-123')
    await wrapper.get('#activation-password-confirmation').setValue('secure-password-123')
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(mock.setPassword).toHaveBeenCalledWith('secure-password-123')
    expect(mock.refreshSeoAccess).toHaveBeenCalledWith(true)
    expect(mock.replace).toHaveBeenCalledWith({ name: 'dashboard' })
  })

  it('ne donne pas accès à la formation sans droit SEO', async () => {
    mock.user = {
      id: 'invited-user',
      email: 'acheteur@example.com',
      invited_at: '2026-10-22T17:00:00Z',
    }
    mock.refreshSeoAccess.mockResolvedValue('denied')
    const wrapper = mountActivation()
    await flushPromises()

    await wrapper.get('#activation-password').setValue('secure-password-123')
    await wrapper.get('#activation-password-confirmation').setValue('secure-password-123')
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(mock.replace).toHaveBeenCalledWith({ name: 'access-pending' })
  })

  it('affiche une erreur si le mot de passe ne peut pas être enregistré', async () => {
    mock.user = {
      id: 'invited-user',
      email: 'acheteur@example.com',
      invited_at: '2026-10-22T17:00:00Z',
    }
    mock.setPassword.mockRejectedValue(new Error('offline'))
    const wrapper = mountActivation()
    await flushPromises()

    await wrapper.get('#activation-password').setValue('secure-password-123')
    await wrapper.get('#activation-password-confirmation').setValue('secure-password-123')
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(wrapper.get('[role="alert"]').text()).toContain(
      'Impossible d’enregistrer ton mot de passe',
    )
    expect(mock.replace).not.toHaveBeenCalled()
  })
})
