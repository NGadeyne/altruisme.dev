import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PlanActionItem, {
  type DisplayPlanAction,
} from '@/components/learningPlan/PlanActionItem.vue'

const preset: DisplayPlanAction = {
  id: 'seo_check_indexation',
  title: "Vérifier l'indexation de mes pages",
  description: 'Contrôle les pages importantes.',
  completionCriterion: 'Avoir vérifié trois URL.',
  lessonId: 'seo-lesson-05',
  status: 'todo',
  personal: false,
  isNew: false,
  order: 3,
  moduleId: 'seo-auditer-site',
}

describe('action du plan', () => {
  it('permet de changer librement le statut sans proposer la modification du catalogue', async () => {
    const wrapper = mount(PlanActionItem, {
      props: {
        action: preset,
        courseSlug: 'seo',
        busy: false,
        highlighted: false,
        lessonAvailable: false,
      },
    })

    expect(wrapper.text()).toContain(preset.title)
    expect(wrapper.text()).toContain('Avoir vérifié trois URL.')
    expect(wrapper.text()).not.toContain('Modifier')
    expect(wrapper.text()).not.toContain('Voir la leçon associée')

    await wrapper.get('select').setValue('done')
    expect(wrapper.emitted('statusChange')?.[0]).toEqual(['done'])
    await wrapper.get('select').setValue('in_progress')
    expect(wrapper.emitted('statusChange')?.[1]).toEqual(['in_progress'])
    await wrapper.get('select').setValue('todo')
    expect(wrapper.emitted('statusChange')?.[2]).toEqual(['todo'])
  })

  it('réserve la modification et la suppression aux actions personnelles', async () => {
    const wrapper = mount(PlanActionItem, {
      props: {
        action: { ...preset, id: 'personal-1', personal: true },
        courseSlug: 'seo',
        busy: false,
        highlighted: false,
        lessonAvailable: false,
      },
    })

    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('edit')).toHaveLength(1)
    await wrapper.findAll('button')[1]?.trigger('click')
    expect(wrapper.emitted('delete')).toHaveLength(1)
  })

  it('utilise le lien court pour une leçon disponible', () => {
    const wrapper = mount(PlanActionItem, {
      props: {
        action: preset,
        courseSlug: 'seo',
        busy: false,
        highlighted: false,
        lessonAvailable: true,
      },
      global: { stubs: { RouterLink: RouterLinkStub } },
    })

    expect(wrapper.getComponent(RouterLinkStub).props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-05' },
    })
  })

  it('signale discrètement une nouvelle action sans autoriser sa modification', () => {
    const wrapper = mount(PlanActionItem, {
      props: {
        action: { ...preset, id: 'seo_geo_visibility', order: 15, isNew: true },
        courseSlug: 'seo',
        busy: false,
        highlighted: false,
        lessonAvailable: false,
      },
    })

    expect(wrapper.text()).toContain('Action 15')
    expect(wrapper.text()).toContain('Nouvelle action')
    expect(wrapper.text()).not.toContain('Modifier')
  })
})
