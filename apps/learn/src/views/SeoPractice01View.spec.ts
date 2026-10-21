import { flushPromises, mount, RouterLinkStub } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import router from '@/router'
import SeoPractice01View from '@/views/SeoPractice01View.vue'

const mocks = vi.hoisted(() => ({
  loadStatus: vi.fn<(...args: unknown[]) => Promise<unknown>>(),
}))

vi.mock('@/stores/auth', () => ({ useAuthStore: () => ({ user: { id: 'learner-a' } }) }))
vi.mock('@/services/learningPlan', () => ({ loadPresetStatus: mocks.loadStatus }))

function mountPractice() {
  return mount(SeoPractice01View, {
    global: {
      stubs: {
        BaseContainer: { template: '<div><slot /></div>' },
        RouterLink: RouterLinkStub,
      },
    },
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  mocks.loadStatus.mockResolvedValue('todo')
})

describe('mise en pratique du module 1', () => {
  it('possède une route courte et mène à la bonne action du plan', async () => {
    expect(router.resolve('/formation/pratique-01').name).toBe('seo-practice-01')

    const wrapper = mountPractice()
    await flushPromises()

    expect(mocks.loadStatus).toHaveBeenCalledWith(
      'learner-a',
      'seo',
      'seo_identify_strategic_pages',
    )
    expect(wrapper.get('h1').text()).toBe(
      'Mise en pratique — Identifier les pages les plus importantes de son site',
    )
    expect(wrapper.text()).toContain('Altruisme Learn · Formation SEO')
    expect(wrapper.text()).toContain('Module 1 · Comprendre Google')
    expect(wrapper.text()).toContain('environ 13 minutes')
    expect(wrapper.text()).toContain('Objectif pédagogique')
    expect(wrapper.get('[role="status"]').text()).toBe('À faire')
    expect(wrapper.text()).toContain("Avant d'optimiser, il faut savoir où concentrer ses efforts")
    expect(wrapper.text()).toContain('Étape 3 — Identifie une première amélioration')
    expect(wrapper.text()).toContain('Prochain module : Auditer ton site.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.find((link) => link.text().includes('Revoir la leçon 03'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-03' },
    })
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({
      name: 'learning-plan',
      query: { action: 'seo_identify_strategic_pages' },
    })
  })

  it('affiche le statut sauvegardé et permet de réessayer en cas d’erreur', async () => {
    mocks.loadStatus.mockRejectedValueOnce(new Error('offline')).mockResolvedValueOnce('done')
    const wrapper = mountPractice()
    await flushPromises()

    expect(wrapper.get('[role="status"]').text()).toBe('Statut indisponible')
    await wrapper.get('button').trigger('click')
    await flushPromises()
    expect(wrapper.get('[role="status"]').text()).toBe('Terminé')
  })
})
