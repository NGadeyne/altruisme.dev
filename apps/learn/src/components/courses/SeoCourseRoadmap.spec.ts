import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoCourseRoadmap from '@/components/courses/SeoCourseRoadmap.vue'
import { seoProgram } from '@/data/seoProgram'

const stubs = { RouterLink: RouterLinkStub }

describe('micro roadmap SEO', () => {
  it('regroupe les dix modules en quatre étapes et calcule leur progression', async () => {
    const wrapper = mount(SeoCourseRoadmap, {
      props: {
        completedModuleIds: [seoProgram[0]!.id, seoProgram[2]!.id, seoProgram[5]!.id],
        loading: false,
        error: '',
      },
      global: { stubs },
    })

    const stages = wrapper.findAll('button[aria-controls="seo-roadmap-detail"]')
    expect(stages).toHaveLength(4)
    expect(stages.map((stage) => stage.text())).toEqual([
      expect.stringContaining('1 / 2 modules terminés'),
      expect.stringContaining('1 / 3 modules terminés'),
      expect.stringContaining('1 / 4 modules terminés'),
      expect.stringContaining('0 / 1 module terminé'),
    ])

    expect(wrapper.get('#seo-roadmap-detail-heading').text()).toBe('Comprendre et auditer')
    expect(
      wrapper
        .findAllComponents(RouterLinkStub)
        .slice(1)
        .map((link) => link.props('to')),
    ).toEqual([
      { name: 'dashboard', hash: '#module-1' },
      { name: 'dashboard', hash: '#module-2' },
    ])

    await stages[2]!.trigger('click')
    expect(wrapper.get('#seo-roadmap-detail-heading').text()).toBe('Développer sa visibilité')
    expect(
      wrapper
        .findAllComponents(RouterLinkStub)
        .slice(1)
        .map((link) => link.props('to')),
    ).toEqual([6, 7, 8, 9].map((number) => ({ name: 'dashboard', hash: `#module-${number}` })))
    expect(wrapper.text()).toContain('✓ Terminé')

    await wrapper.setProps({ completedModuleIds: seoProgram.map((module) => module.id) })
    expect(wrapper.findAll('button[aria-controls="seo-roadmap-detail"]')[2]!.text()).toContain(
      '4 / 4 modules terminés',
    )
  })

  it('signale que la progression est indisponible quand son chargement échoue', () => {
    const wrapper = mount(SeoCourseRoadmap, {
      props: { completedModuleIds: [], loading: false, error: 'Erreur de chargement' },
      global: { stubs },
    })

    expect(wrapper.findAll('button[aria-controls="seo-roadmap-detail"]')).toHaveLength(4)
    expect(wrapper.text()).toContain('Progression indisponible')
    expect(wrapper.findAll('button[aria-controls="seo-roadmap-detail"]')[0]!.text()).not.toContain(
      '0 / 2',
    )
  })
})
