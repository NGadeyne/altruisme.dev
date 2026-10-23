import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/stores/auth', () => ({ useAuthStore: () => ({ user: { id: 'learner-a' } }) }))
vi.mock('@/composables/useSeoModuleProgress', () => ({
  useSeoModuleProgress: () => ({
    completedCount: 3,
    percentage: 30,
    loading: false,
    error: '',
    isCompleted: () => false,
    reload: vi.fn(),
  }),
}))

import FormationsView from '@/views/FormationsView.vue'

describe('liste des formations', () => {
  it('intègre le parcours interactif avant le contenu de la formation SEO', () => {
    const wrapper = mount(FormationsView, {
      global: {
        stubs: {
          BaseContainer: { template: '<div><slot /></div>' },
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.get('h1').text()).toBe('Formations')
    expect(wrapper.get('#roadmap-heading').text()).toBe('Vue d’ensemble du parcours')
    expect(wrapper.findAll('button[aria-controls="roadmap-detail"]')).toHaveLength(4)
    expect(wrapper.text()).toContain('Contenu de la formation')
    expect(wrapper.text()).toContain('Modules, leçons et exercices')
    expect(wrapper.text()).toContain('Formation SEO')
    expect(wrapper.text()).toContain('Progression : 30 %')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('3')
    expect(wrapper.getComponent(RouterLinkStub).props('to')).toEqual({ name: 'dashboard' })
  })
})
