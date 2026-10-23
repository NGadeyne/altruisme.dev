import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import { seoProgram } from '@/data/seoProgram'

vi.mock('@/stores/auth', () => ({ useAuthStore: () => ({ user: { id: 'learner-a' } }) }))
vi.mock('@/composables/useSeoModuleProgress', () => ({
  useSeoModuleProgress: () => ({
    completedCount: 3,
    percentage: 30,
    loading: false,
    error: '',
    isCompleted: (moduleId: string) =>
      seoProgram.slice(0, 3).some((module) => module.id === moduleId),
    reload: vi.fn(),
  }),
}))

import AcquisitionRoadmap from '@/components/courses/AcquisitionRoadmap.vue'

const stubs = {
  RouterLink: RouterLinkStub,
}

describe('roadmap acquisition clients', () => {
  it('montre les quatre étapes, la boucle et la progression SEO existante', () => {
    const wrapper = mount(AcquisitionRoadmap, { global: { stubs } })

    expect(wrapper.get('#roadmap-heading').text()).toBe('Vue d’ensemble du parcours')
    expect(wrapper.findAll('button[aria-controls="roadmap-detail"]')).toHaveLength(4)
    const stages = wrapper.findAll('button[aria-controls="roadmap-detail"]')
    for (const [index, title, topics] of [
      [0, 'Offre', 'Cible · Proposition de valeur'],
      [1, 'Acquisition', 'SEO · Réseaux sociaux · Prospection'],
      [2, 'Conversion', 'Landing page · Vente'],
      [3, 'Fidélisation', 'Satisfaction client · Recommandation'],
    ] as const) {
      expect(stages[index]!.text()).toContain(title)
      expect(stages[index]!.text()).toContain(topics)
    }
    expect(wrapper.text()).toContain('Les recommandations nourrissent une nouvelle acquisition')
    expect(wrapper.text()).toContain('3 / 10 modules SEO suivis')
    expect(wrapper.text()).toContain('Progression : 30 %')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('3')

    const links = wrapper.findAllComponents(RouterLinkStub).map((link) => link.props('to'))
    for (const module of seoProgram) {
      expect(links).toContainEqual({ name: 'dashboard', hash: `#module-${module.number}` })
    }
  })

  it('permet d’explorer les étapes non publiées sans leur attribuer une progression fictive', async () => {
    const wrapper = mount(AcquisitionRoadmap, { global: { stubs } })
    const stages = wrapper.findAll('button[aria-controls="roadmap-detail"]')

    await stages[0]!.trigger('click')
    expect(wrapper.get('#roadmap-detail-heading').text()).toBe('Offre')
    expect(wrapper.text()).toContain('Modules Learn à venir pour cette étape.')
    expect(wrapper.findAll('a[aria-label^="Voir le module"]')).toHaveLength(0)

    await stages[2]!.trigger('click')
    expect(wrapper.get('#roadmap-detail-heading').text()).toBe('Conversion')

    await stages[1]!.trigger('click')
    expect(wrapper.get('#roadmap-detail-heading').text()).toBe('Acquisition')
    expect(wrapper.findAll('a[aria-label^="Voir le module"]')).toHaveLength(seoProgram.length)
  })
})
