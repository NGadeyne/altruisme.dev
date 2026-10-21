import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import LearningPlanView from '@/views/LearningPlanView.vue'

const mocks = vi.hoisted(() => ({
  load: vi.fn<(...args: unknown[]) => Promise<unknown>>(),
  saveStatus: vi.fn<(...args: unknown[]) => Promise<unknown>>(),
  create: vi.fn<(...args: unknown[]) => Promise<unknown>>(),
  update: vi.fn<(...args: unknown[]) => Promise<unknown>>(),
  remove: vi.fn<(...args: unknown[]) => Promise<unknown>>(),
  route: { meta: { courseSlug: 'seo' }, query: {} as Record<string, string> },
}))

vi.mock('vue-router', async (importOriginal) => {
  const original = await importOriginal<typeof import('vue-router')>()
  return { ...original, useRoute: () => mocks.route }
})

vi.mock('@/stores/auth', () => ({ useAuthStore: () => ({ user: { id: 'learner-a' } }) }))

vi.mock('@/services/learningPlan', () => ({
  loadLearningPlan: mocks.load,
  savePresetStatus: mocks.saveStatus,
  createPersonalAction: mocks.create,
  updatePersonalAction: mocks.update,
  deletePersonalAction: mocks.remove,
}))

function mountPlan(attachTo?: Element) {
  return mount(LearningPlanView, {
    attachTo,
    global: {
      stubs: {
        BaseContainer: { template: '<div><slot /></div>' },
        RouterLink: { template: '<a><slot /></a>' },
      },
    },
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  mocks.route.query = {}
  mocks.load.mockResolvedValue({ statuses: {}, personalActions: [] })
  mocks.saveStatus.mockResolvedValue(undefined)
})

describe('Mon plan d’action', () => {
  it('charge les dix-sept actions SEO, filtre et recalcule la progression immédiatement', async () => {
    const wrapper = mountPlan()
    await flushPromises()

    expect(mocks.load).toHaveBeenCalledWith('learner-a', 'seo')
    expect(wrapper.findAll('select[id^="status-"]')).toHaveLength(17)
    expect(wrapper.text()).toContain('0 action terminée sur 17')
    expect(wrapper.text()).toContain('Nouvelles actions')

    await wrapper.get('#status-seo_identify_strategic_pages').setValue('done')
    expect(wrapper.text()).toContain('1 action terminée sur 17')
    await flushPromises()
    expect(mocks.saveStatus).toHaveBeenCalledWith(
      'learner-a',
      'seo',
      'seo_identify_strategic_pages',
      'done',
    )

    await wrapper
      .findAll('button')
      .find((button) => button.text().includes('Terminées'))
      ?.trigger('click')
    expect(wrapper.findAll('select[id^="status-"]')).toHaveLength(1)
  })

  it('rétablit le statut sauvegardé en cas d’échec', async () => {
    mocks.saveStatus.mockRejectedValueOnce(new Error('offline'))
    const wrapper = mountPlan()
    await flushPromises()

    await wrapper.get('#status-seo_identify_strategic_pages').setValue('done')
    await flushPromises()

    expect(wrapper.text()).toContain('0 action terminée sur 17')
    expect(wrapper.get('[role="alert"]').text()).toContain("n'a pas été enregistré")
  })

  it('retrouve les statuts enregistrés après un nouveau chargement', async () => {
    mocks.load.mockResolvedValue({
      statuses: { seo_identify_strategic_pages: 'done' },
      personalActions: [],
    })

    const wrapper = mountPlan()
    await flushPromises()
    expect(wrapper.text()).toContain('1 action terminée sur 17')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('1')
    expect(wrapper.get('[role="progressbar"]').attributes('aria-valuemax')).toBe('17')
    expect(wrapper.text()).toContain('6 %')
    wrapper.unmount()

    const reopened = mountPlan()
    await flushPromises()
    expect(reopened.get('#status-seo_identify_strategic_pages').element).toHaveProperty(
      'value',
      'done',
    )
  })

  it('conserve le statut des anciennes actions déplacées aux numéros 16 et 17', async () => {
    mocks.load.mockResolvedValue({
      statuses: { seo_record_baseline: 'in_progress', seo_90_day_plan: 'done' },
      personalActions: [],
    })

    const wrapper = mountPlan()
    await flushPromises()

    expect(wrapper.get('#plan-action-seo_record_baseline').text()).toContain('Action 16')
    expect(wrapper.get('#status-seo_record_baseline').element).toHaveProperty(
      'value',
      'in_progress',
    )
    expect(wrapper.get('#plan-action-seo_90_day_plan').text()).toContain('Action 17')
    expect(wrapper.get('#status-seo_90_day_plan').element).toHaveProperty('value', 'done')
    expect(wrapper.get('#status-seo_backlink_opportunities').element).toHaveProperty(
      'value',
      'todo',
    )
    expect(wrapper.get('#status-seo_geo_visibility').element).toHaveProperty('value', 'todo')
    expect(wrapper.text()).toContain('1 action terminée sur 17')
  })

  it('déplie une action demandée depuis une leçon', async () => {
    mocks.route.query = { action: 'seo_check_indexation' }
    Element.prototype.scrollIntoView = vi.fn<() => void>()
    const wrapper = mountPlan(document.body)
    await flushPromises()

    expect(wrapper.get('#plan-action-seo_check_indexation details').element).toHaveProperty(
      'open',
      true,
    )
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('ajoute une action personnelle dans la progression', async () => {
    mocks.create.mockResolvedValue({
      id: 'personal-1',
      title: 'Améliorer ma page de service',
      description: 'Revoir les liens internes.',
      moduleId: 'seo-optimiser-pages',
      status: 'todo',
      createdAt: '2026-10-17T12:00:00Z',
      updatedAt: '2026-10-17T12:00:00Z',
      completedAt: null,
    })

    const wrapper = mountPlan()
    await flushPromises()
    await wrapper
      .findAll('button')
      .find((button) => button.text().includes('Ajouter une action'))
      ?.trigger('click')
    await wrapper.get('#personal-action-title').setValue('Améliorer ma page de service')
    await wrapper.get('#personal-action-description').setValue('Revoir les liens internes.')
    await wrapper.get('#personal-action-module').setValue('seo-optimiser-pages')
    await wrapper.get('form').trigger('submit.prevent')
    await flushPromises()

    expect(mocks.create).toHaveBeenCalledWith('learner-a', 'seo', {
      title: 'Améliorer ma page de service',
      description: 'Revoir les liens internes.',
      moduleId: 'seo-optimiser-pages',
    })
    expect(wrapper.text()).toContain('0 action terminée sur 18')
    expect(wrapper.get('#plan-action-personal-1').text()).toContain('Améliorer ma page de service')
  })

  it('modifie et supprime seulement une action personnelle', async () => {
    const existing = {
      id: 'personal-1',
      title: 'Ma première action',
      description: null,
      moduleId: null,
      status: 'todo',
      createdAt: '2026-10-17T12:00:00Z',
      updatedAt: '2026-10-17T12:00:00Z',
      completedAt: null,
    }
    mocks.load.mockResolvedValue({ statuses: {}, personalActions: [existing] })
    mocks.update.mockResolvedValue({ ...existing, title: 'Mon action améliorée' })
    mocks.remove.mockResolvedValue(undefined)

    const wrapper = mountPlan()
    await flushPromises()
    const personal = wrapper.get('#plan-action-personal-1')
    await personal
      .findAll('button')
      .find((button) => button.text() === 'Modifier')
      ?.trigger('click')
    await wrapper.get('#personal-action-title').setValue('Mon action améliorée')
    await wrapper.get('form').trigger('submit.prevent')
    await flushPromises()

    expect(mocks.update).toHaveBeenCalledWith('learner-a', 'seo', 'personal-1', {
      title: 'Mon action améliorée',
      description: null,
      moduleId: null,
    })
    expect(wrapper.get('#plan-action-personal-1').text()).toContain('Mon action améliorée')

    await wrapper
      .get('#plan-action-personal-1')
      .findAll('button')
      .find((button) => button.text() === 'Supprimer')
      ?.trigger('click')
    await flushPromises()

    expect(mocks.remove).toHaveBeenCalledWith('learner-a', 'seo', 'personal-1')
    expect(wrapper.find('#plan-action-personal-1').exists()).toBe(false)
    expect(wrapper.text()).toContain('0 action terminée sur 17')
  })
})
