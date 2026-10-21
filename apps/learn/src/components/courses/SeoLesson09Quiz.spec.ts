import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoLesson09Quiz from './SeoLesson09Quiz.vue'

describe('questionnaire de la neuvième leçon SEO', () => {
  it('corrige les quatre questions après validation', async () => {
    const wrapper = mount(SeoLesson09Quiz)

    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeDefined()
    expect(wrapper.text()).not.toContain('Question 4 : C.')

    await wrapper.get('input[name="quiz-question-1"][value="B"]').setValue()
    await wrapper.get('input[name="quiz-question-2"][value="C"]').setValue()
    await wrapper.get('input[name="quiz-question-3"][value="A"]').setValue()
    await wrapper.get('input[name="quiz-question-4"][value="C"]').setValue()
    await wrapper.get('form').trigger('submit')

    expect(wrapper.get('[role="status"]').text()).toBe('4 bonnes réponses sur 4.')
    expect(wrapper.text()).toContain('Question 4 : C.')
    expect(wrapper.text()).toContain("preuve d'un problème de cannibalisation")
  })
})
