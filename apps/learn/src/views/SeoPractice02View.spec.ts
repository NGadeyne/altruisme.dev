import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import router from '@/router'
import SeoPractice02View from '@/views/SeoPractice02View.vue'

describe('mise en pratique du module 2', () => {
  it('ouvre la page depuis une route courte et relie les trois actions du module au plan', () => {
    expect(router.resolve('/formation/pratique-02').name).toBe('seo-practice-02')

    const wrapper = mount(SeoPractice02View, {
      global: {
        stubs: {
          BaseContainer: { template: '<div><slot /></div>' },
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.get('h1').text()).toBe('Mise en pratique — Réaliser son premier diagnostic SEO')
    expect(wrapper.text()).toContain('Module 2 · Auditer ton site')
    expect(wrapper.text()).toContain('environ 18 minutes')
    expect(wrapper.text()).toContain('Étape 4 — Identifie tes trois premiers constats')
    expect(wrapper.text()).toContain('Prochain module : Trouver les bons mots-clés.')

    const actionLinks = wrapper.findAll('nav[aria-label="Actions liées à cet exercice"] li a')
    expect(actionLinks.map((link) => link.text())).toEqual([
      'Configurer Google Search Console →',
      "Vérifier l'indexation de mes pages →",
      'Identifier mes premières opportunités SEO →',
    ])
    expect(
      wrapper
        .findAllComponents(RouterLinkStub)
        .filter((link) => actionLinks.some((actionLink) => actionLink.text() === link.text()))
        .map((link) => link.props('to')),
    ).toEqual([
      { name: 'learning-plan', query: { action: 'seo_setup_search_console' } },
      { name: 'learning-plan', query: { action: 'seo_check_indexation' } },
      { name: 'learning-plan', query: { action: 'seo_identify_opportunities' } },
    ])
  })
})
