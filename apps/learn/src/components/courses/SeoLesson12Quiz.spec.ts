import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoLesson12Quiz from './SeoLesson12Quiz.vue'

describe('questionnaire de la douzième leçon SEO', () => {
  it('corrige les quatre réponses et permet de recommencer', async () => {
    const wrapper = mount(SeoLesson12Quiz)

    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeDefined()
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    await wrapper.get('input[name="quiz-question-1"][value="B"]').setValue()
    await wrapper.get('input[name="quiz-question-2"][value="C"]').setValue()
    await wrapper.get('input[name="quiz-question-3"][value="A"]').setValue()
    await wrapper.get('input[name="quiz-question-4"][value="B"]').setValue()
    await wrapper.get('form').trigger('submit')

    expect(wrapper.get('[role="status"]').text()).toBe('4 bonnes réponses sur 4.')
    expect(wrapper.text()).toContain('Question 4 : B.')
    expect(wrapper.text()).toContain("Il n'existe pas de nombre magique de liens internes")

    await wrapper.get('button[type="button"]').trigger('click')
    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeDefined()
    expect(wrapper.text()).not.toContain('Question 4 : B.')
  })
})
