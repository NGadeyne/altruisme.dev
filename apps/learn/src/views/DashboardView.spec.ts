import { mount, RouterLinkStub } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import DashboardView from '@/views/DashboardView.vue'

vi.mock('@/stores/auth', () => ({ useAuthStore: () => ({ user: { id: 'learner-a' } }) }))

beforeEach(() => localStorage.clear())

function mountDashboard() {
  return mount(DashboardView, {
    global: {
      stubs: {
        BaseContainer: { template: '<div><slot /></div>' },
        RouterLink: RouterLinkStub,
      },
    },
  })
}

describe('progression de la formation SEO', () => {
  it('affiche trois modules terminés sur neuf et restaure la progression', async () => {
    const wrapper = mountDashboard()
    const buttons = wrapper.findAll('button[aria-pressed]')
    expect(buttons).toHaveLength(9)
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('0')

    for (const button of buttons.slice(0, 3)) await button.trigger('click')

    expect(wrapper.text()).toContain('3 modules terminés sur 9')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('3')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuemax')).toBe('9')
    expect(wrapper.get('[role="progressbar"] > div').attributes('style')).toContain('33%')

    wrapper.unmount()
    const restored = mountDashboard()
    expect(restored.text()).toContain('3 modules terminés sur 9')
    await restored.findAll('button[aria-pressed]')[0]!.trigger('click')
    expect(restored.text()).toContain('2 modules terminés sur 9')
  })
})
