import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoLesson01Quiz from './SeoLesson01Quiz.vue'

describe('questionnaire de la première leçon SEO', () => {
  it('valide les trois réponses, affiche le score et permet de réessayer', async () => {
    const wrapper = mount(SeoLesson01Quiz)

    const submit = wrapper.get('button[type="submit"]')
    expect(submit.attributes('disabled')).toBeDefined()
    expect(wrapper.text()).not.toContain('Correction')

    await wrapper.get('input[name="quiz-question-1"][value="B"]').setValue()
    await wrapper.get('input[name="quiz-question-2"][value="C"]').setValue()
    await wrapper.get('input[name="quiz-question-3"][value="A"]').setValue()

    expect(submit.attributes('disabled')).toBeUndefined()
    await wrapper.get('form').trigger('submit')

    expect(wrapper.get('[role="status"]').text()).toBe('2 bonnes réponses sur 3.')
    expect(wrapper.text()).toContain('À revoir.')
    expect(wrapper.text()).toContain('Question 3 : B.')
    expect(
      wrapper
        .findAll('input[type="radio"]')
        .every((input) => input.attributes('disabled') !== undefined),
    ).toBe(true)

    await wrapper.get('button[type="button"]').trigger('click')

    expect(wrapper.text()).not.toContain('Correction')
    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeDefined()
    expect(
      wrapper
        .findAll('input[type="radio"]')
        .every((input) => !(input.element as HTMLInputElement).checked),
    ).toBe(true)
  })
})
