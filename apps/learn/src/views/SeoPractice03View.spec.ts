import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import router from '@/router'
import SeoPractice03View from '@/views/SeoPractice03View.vue'

describe('mise en pratique du module 3', () => {
  it('possède une route courte et relie les trois actions du module au plan', () => {
    expect(router.resolve('/formation/pratique-03').name).toBe('seo-practice-03')

    const wrapper = mount(SeoPractice03View, {
      global: {
        stubs: {
          BaseContainer: { template: '<div><slot /></div>' },
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.get('h1').text()).toBe(
      'Mise en pratique — Sélectionner ses mots-clés prioritaires',
    )
    expect(wrapper.text()).toContain('Module 3 · Trouver les bons mots-clés')
    expect(wrapper.text()).toContain('environ 18 minutes')
    expect(wrapper.text()).toContain('Étape 3 — Associe tes priorités aux bonnes pages')
    expect(wrapper.text()).toContain('Prochain module : Optimiser tes pages.')

    const actionLinks = wrapper.findAll('nav[aria-label="Actions liées à cet exercice"] li a')
    expect(actionLinks.map((link) => link.text())).toEqual([
      'Définir les intentions de recherche de mes futurs clients →',
      'Trouver 10 mots-clés pertinents →',
      'Prioriser mes mots-clés et les associer aux bonnes pages →',
    ])
    expect(
      wrapper
        .findAllComponents(RouterLinkStub)
        .filter((link) => actionLinks.some((actionLink) => actionLink.text() === link.text()))
        .map((link) => link.props('to')),
    ).toEqual([
      { name: 'learning-plan', query: { action: 'seo_identify_search_intents' } },
      { name: 'learning-plan', query: { action: 'seo_find_keywords' } },
      { name: 'learning-plan', query: { action: 'seo_map_keywords' } },
    ])
  })
})
