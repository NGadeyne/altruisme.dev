import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoLesson04Quiz from './SeoLesson04Quiz.vue'

describe('questionnaire de la quatrième leçon SEO', () => {
  it('affiche les corrections après réponse aux quatre questions', async () => {
    const wrapper = mount(SeoLesson04Quiz)

    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeDefined()
    expect(wrapper.text()).not.toContain('Question 4 : C.')

    await wrapper.get('input[name="quiz-question-1"][value="B"]').setValue()
    await wrapper.get('input[name="quiz-question-2"][value="A"]').setValue()
    await wrapper.get('input[name="quiz-question-3"][value="B"]').setValue()
    await wrapper.get('input[name="quiz-question-4"][value="C"]').setValue()
    await wrapper.get('form').trigger('submit')

    expect(wrapper.get('[role="status"]').text()).toBe('4 bonnes réponses sur 4.')
    expect(wrapper.text()).toContain('Question 4 : C.')
    expect(wrapper.text()).toContain(
      "L'inspection d'URL permet d'examiner une adresse particulière",
    )
  })
})
