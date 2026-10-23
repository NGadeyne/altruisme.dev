import { flushPromises, mount, RouterLinkStub } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import DashboardView from '@/views/DashboardView.vue'

const mock = vi.hoisted(() => ({ rows: new Set<string>() }))
vi.mock('@/stores/auth', () => ({ useAuthStore: () => ({ user: { id: 'learner-a' } }) }))
vi.mock('@/services/seoModuleProgress', () => ({
  async loadSeoModuleProgress() {
    return [...mock.rows]
  },
  async completeSeoModule(_userId: string, moduleId: string) {
    mock.rows.add(moduleId)
  },
  async reopenSeoModule(_userId: string, moduleId: string) {
    mock.rows.delete(moduleId)
  },
}))

beforeEach(() => {
  mock.rows.clear()
  localStorage.clear()
})

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
  it('affiche trois modules terminés sur dix et restaure la progression', async () => {
    const wrapper = mountDashboard()
    await flushPromises()
    const buttons = wrapper.findAll('button[aria-pressed]')
    expect(buttons).toHaveLength(10)
    expect(buttons[7]?.attributes('disabled')).toBeUndefined()
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('0')

    for (const button of buttons.slice(0, 3)) {
      await button.trigger('click')
      await flushPromises()
    }

    expect(wrapper.text()).toContain('3 modules terminés sur 10')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('3')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuemax')).toBe('10')
    expect(wrapper.get('[role="progressbar"] > div').attributes('style')).toContain('30%')

    wrapper.unmount()
    localStorage.clear()
    const restored = mountDashboard()
    await flushPromises()
    expect(restored.text()).toContain('3 modules terminés sur 10')
    await restored.findAll('button[aria-pressed]')[0]!.trigger('click')
    await flushPromises()
    expect(restored.text()).toContain('2 modules terminés sur 10')
  })
})
