import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoLesson05Quiz from './SeoLesson05Quiz.vue'

describe('questionnaire de la cinquième leçon SEO', () => {
  it('corrige les quatre questions après validation', async () => {
    const wrapper = mount(SeoLesson05Quiz)

    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeDefined()
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    await wrapper.get('input[name="quiz-question-1"][value="B"]').setValue()
    await wrapper.get('input[name="quiz-question-2"][value="A"]').setValue()
    await wrapper.get('input[name="quiz-question-3"][value="C"]').setValue()
    await wrapper.get('input[name="quiz-question-4"][value="B"]').setValue()
    await wrapper.get('form').trigger('submit')

    expect(wrapper.get('[role="status"]').text()).toBe('4 bonnes réponses sur 4.')
    expect(wrapper.text()).toContain('Question 4 : B.')
    expect(wrapper.text()).toContain('Certaines exclusions sont normales')
  })
})
