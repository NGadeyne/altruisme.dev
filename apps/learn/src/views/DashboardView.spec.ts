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
  it('replie les modules sur mobile et ouvre celui sélectionné dans la roadmap', async () => {
    const wrapper = mountDashboard()
    await flushPromises()

    const moduleToggles = wrapper.findAll('button[aria-controls^="module-content-"]')
    expect(moduleToggles).toHaveLength(10)
    expect(moduleToggles[0]!.attributes('aria-expanded')).toBe('false')
    expect(wrapper.get('#module-content-1').classes()).toContain('hidden')
    expect(wrapper.get('#module-content-1').classes()).toContain('sm:flex')

    await moduleToggles[0]!.trigger('click')
    expect(moduleToggles[0]!.attributes('aria-expanded')).toBe('true')
    expect(wrapper.get('#module-content-1').classes()).toContain('flex')

    await wrapper.get('[aria-label="Voir le module 2 : Auditer ton site"]').trigger('click')
    await flushPromises()
    expect(moduleToggles[0]!.attributes('aria-expanded')).toBe('false')
    expect(moduleToggles[1]!.attributes('aria-expanded')).toBe('true')
    expect(wrapper.get('#module-content-2').classes()).toContain('flex')
  })

  it('affiche trois modules terminés sur dix et restaure la progression', async () => {
    const wrapper = mountDashboard()
    await flushPromises()
    const buttons = wrapper.findAll(
      'section[aria-label="Modules de la formation"] button[aria-pressed]',
    )
    expect(buttons).toHaveLength(10)
    expect(buttons[7]?.attributes('disabled')).toBeUndefined()
    expect(wrapper.findAll('[role="progressbar"]')).toHaveLength(1)
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('0')
    expect(wrapper.findAll('button[aria-controls="seo-roadmap-detail"]')).toHaveLength(4)
    expect(
      wrapper
        .get('h1')
        .element.compareDocumentPosition(wrapper.get('#seo-roadmap-heading').element) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()

    for (const button of buttons.slice(0, 3)) {
      await button.trigger('click')
      await flushPromises()
    }

    expect(wrapper.text()).toContain('3 modules terminés sur 10')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('3')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuemax')).toBe('10')
    expect(wrapper.get('[role="progressbar"] > div').attributes('style')).toContain('30%')
    expect(wrapper.findAll('button[aria-controls="seo-roadmap-detail"]')[0]!.text()).toContain(
      '2 / 2 modules terminés',
    )

    wrapper.unmount()
    localStorage.clear()
    const restored = mountDashboard()
    await flushPromises()
    expect(restored.text()).toContain('3 modules terminés sur 10')
    await restored
      .findAll('section[aria-label="Modules de la formation"] button[aria-pressed]')[0]!
      .trigger('click')
    await flushPromises()
    expect(restored.text()).toContain('2 modules terminés sur 10')
  })
})
