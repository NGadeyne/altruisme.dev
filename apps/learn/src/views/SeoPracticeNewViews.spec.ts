import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import router from '@/router'
import DashboardView from '@/views/DashboardView.vue'
import SeoPractice04View from '@/views/SeoPractice04View.vue'
import SeoPractice05View from '@/views/SeoPractice05View.vue'
import SeoPractice06View from '@/views/SeoPractice06View.vue'
import SeoPractice07View from '@/views/SeoPractice07View.vue'
import SeoPractice08View from '@/views/SeoPractice08View.vue'
import SeoPractice09View from '@/views/SeoPractice09View.vue'

const stubs = {
  BaseContainer: { template: '<div><slot /></div>' },
  RouterLink: RouterLinkStub,
}

describe('mises en pratique des modules 5, 7 et 8', () => {
  it.each([
    {
      number: '05',
      component: SeoPractice05View,
      title: 'Mise en pratique — Réaliser un premier contrôle technique de son site',
      objective: 'Vérifier les principaux éléments techniques de son site',
      lastStep: 'Étape 4 — Choisis une amélioration prioritaire',
      planRoute: { name: 'learning-plan', query: { action: 'seo_technical_checks' } },
    },
    {
      number: '07',
      component: SeoPractice07View,
      title: 'Mise en pratique — Identifier une première opportunité de backlink',
      objective: 'Identifier cinq sites susceptibles de faire connaître son activité',
      lastStep: 'Étape 4 — Choisis une première action',
      planRoute: { name: 'learning-plan', query: { action: 'seo_backlink_opportunities' } },
    },
    {
      number: '08',
      component: SeoPractice08View,
      title: 'Mise en pratique — Observer sa visibilité dans les moteurs IA',
      objective: "Réaliser un premier état des lieux de l'accessibilité de son site aux moteurs IA",
      lastStep: 'Étape 4 — Choisis une amélioration et conserve tes observations',
      planRoute: { name: 'learning-plan', query: { action: 'seo_geo_visibility' } },
    },
  ])('ouvre la mise en pratique $number et son lien vers le plan', (practice) => {
    expect(router.resolve(`/formation/pratique-${practice.number}`).name).toBe(
      `seo-practice-${practice.number}`,
    )
    const wrapper = mount(practice.component, { global: { stubs } })

    expect(wrapper.get('h1').text()).toBe(practice.title)
    expect(wrapper.text()).toContain(practice.objective)
    expect(wrapper.text()).toContain(practice.lastStep)
    expect(wrapper.text()).toContain('Exercice terminé !')
    expect(
      wrapper.findAllComponents(RouterLinkStub).map((link) => link.props('to')),
    ).toContainEqual(practice.planRoute)
  })

  it('relie les trois exercices depuis le programme', () => {
    const wrapper = mount(DashboardView, { global: { stubs } })
    const routes = wrapper.findAllComponents(RouterLinkStub).map((link) => link.props('to'))
    for (const number of ['05', '07', '08']) {
      expect(routes).toContainEqual({ name: `seo-practice-${number}` })
    }
  })

  it('garde le lien PageSpeed Insights dans l’exercice technique', () => {
    const wrapper = mount(SeoPractice05View, { global: { stubs } })
    expect(wrapper.get('a[href="https://pagespeed.web.dev/"]').text()).toBe('PageSpeed Insights')
  })
})

describe('mises en pratique des modules 4, 6 et 9', () => {
  it.each([
    {
      number: '04',
      component: SeoPractice04View,
      title: 'Mise en pratique — Optimiser une page existante et documenter les modifications',
      objective: 'Optimiser une page stratégique en améliorant ses titres',
      lastStep: 'Étape 4 — Documente les modifications',
    },
    {
      number: '06',
      component: SeoPractice06View,
      title: 'Mise en pratique — Préparer un calendrier de cinq contenus à publier ou améliorer',
      objective: 'Construire un premier calendrier éditorial comprenant cinq contenus',
      lastStep: 'Étape 4 — Vérifie la cohérence de ton programme',
    },
    {
      number: '09',
      component: SeoPractice09View,
      title: "Mise en pratique — Finaliser son plan d'action SEO sur 90 jours",
      objective: 'Rassembler les observations et les priorités identifiées pendant la formation',
      lastStep: 'Étape 4 — Définis les indicateurs et les prochains rendez-vous',
    },
  ])('ouvre la mise en pratique $number et son lien vers le plan', (practice) => {
    expect(router.resolve(`/formation/pratique-${practice.number}`).name).toBe(
      `seo-practice-${practice.number}`,
    )
    const wrapper = mount(practice.component, { global: { stubs } })

    expect(wrapper.get('h1').text()).toBe(practice.title)
    expect(wrapper.text()).toContain(practice.objective)
    expect(wrapper.text()).toContain(practice.lastStep)
    expect(wrapper.text()).toContain('Exercice terminé !')
    expect(
      wrapper.findAllComponents(RouterLinkStub).map((link) => link.props('to')),
    ).toContainEqual({
      name: 'learning-plan',
    })
  })

  it('relie les trois exercices depuis le programme', () => {
    const wrapper = mount(DashboardView, { global: { stubs } })
    const routes = wrapper.findAllComponents(RouterLinkStub).map((link) => link.props('to'))
    for (const number of ['04', '06', '09']) {
      expect(routes).toContainEqual({ name: `seo-practice-${number}` })
    }
    expect(wrapper.text()).toContain('11 min')
    expect(wrapper.text()).toContain('7 h 39')
    expect(wrapper.text()).toContain('2 h 54')
    expect(wrapper.text()).toContain('10 h 33')
    expect(wrapper.text()).toContain('Lecture estimée')
    expect(wrapper.text()).not.toContain('Vidéo estimée')
  })
})
