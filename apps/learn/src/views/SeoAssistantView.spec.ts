import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useSeoConversation } from '@/composables/useSeoConversation'
import router from '@/router'
import { askSeoAssistant } from '@/services/seoAssistant'
import SeoAssistantView from '@/views/SeoAssistantView.vue'

vi.mock('@/stores/auth', () => ({
  useAuthStore: () => ({ user: { id: 'learner-1' } }),
}))

vi.mock('@/services/seoAssistant', () => ({
  askSeoAssistant: vi.fn(async () => '**Commence** par quelques mots-clés précis.'),
}))

function mountPage() {
  return mount(SeoAssistantView, {
    global: {
      stubs: {
        BaseContainer: { template: '<div><slot /></div>' },
      },
    },
  })
}

describe('Assistant SEO', () => {
  beforeEach(() => {
    localStorage.clear()
    useSeoConversation().setUser(null)
    vi.clearAllMocks()
  })

  afterEach(() => {
    useSeoConversation().setUser(null)
  })

  it('garde la route protégée et affiche les suggestions initiales', () => {
    const route = router.resolve('/assistant-seo')
    expect(route.name).toBe('seo-assistant')
    expect(route.meta.requiresAuth).toBe(true)

    const wrapper = mountPage()
    expect(wrapper.get('h1').text()).toBe('Assistant SEO')
    expect(wrapper.text()).toContain('Une question sur le SEO ?')
    expect(wrapper.text()).toContain('Comment améliorer mon maillage interne ?')
    wrapper.unmount()
  })

  it('envoie une suggestion et affiche la réponse Markdown', async () => {
    const wrapper = mountPage()
    const suggestion = wrapper
      .findAll('button')
      .find((button) => button.text() === 'Comment trouver les bons mots-clés ?')
    expect(suggestion).toBeDefined()
    await suggestion!.trigger('click')
    await flushPromises()

    expect(askSeoAssistant).toHaveBeenCalledWith(
      'Comment trouver les bons mots-clés ?',
      expect.any(AbortSignal),
    )
    expect(wrapper.text()).toContain('Commence par quelques mots-clés précis.')
    expect(wrapper.find('strong').text()).toBe('Commence')
    expect(wrapper.text()).toContain('Nouvelle conversation')
    wrapper.unmount()
  })

  it('envoie avec Entrée, garde Maj + Entrée et efface une nouvelle conversation', async () => {
    const wrapper = mountPage()
    const textarea = wrapper.get('textarea')
    await textarea.setValue('Comment progresser ?')
    await textarea.trigger('keydown', { key: 'Enter', shiftKey: true })
    expect(askSeoAssistant).not.toHaveBeenCalled()

    await textarea.trigger('keydown', { key: 'Enter' })
    await flushPromises()
    expect(askSeoAssistant).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toContain('Comment progresser ?')

    const reset = wrapper
      .findAll('button')
      .find((button) => button.text() === 'Nouvelle conversation')
    await reset!.trigger('click')
    expect(wrapper.text()).not.toContain('Comment progresser ?')
    expect(wrapper.text()).toContain('Une question sur le SEO ?')
    wrapper.unmount()
  })

  it('empêche un second envoi pendant la génération', async () => {
    let finish!: (answer: string) => void
    vi.mocked(askSeoAssistant).mockImplementationOnce(
      () => new Promise<string>((resolve) => (finish = resolve)),
    )
    const wrapper = mountPage()
    const textarea = wrapper.get('textarea')
    await textarea.setValue('Une première question ?')
    await textarea.trigger('keydown', { key: 'Enter' })
    expect(textarea.attributes('disabled')).toBeDefined()
    expect(wrapper.text()).toContain("L'assistant prépare sa réponse")

    await useSeoConversation().sendQuestion('Une seconde question ?')
    expect(askSeoAssistant).toHaveBeenCalledTimes(1)
    finish('Réponse terminée.')
    await flushPromises()
    wrapper.unmount()
  })

  it('n’enregistre la conversation sur cet appareil qu’après accord', async () => {
    const wrapper = mountPage()
    const checkbox = wrapper.get('input[type="checkbox"]')
    await checkbox.setValue(true)
    const suggestion = wrapper
      .findAll('button')
      .find((button) => button.text() === 'Comment optimiser une page pour le SEO ?')
    await suggestion!.trigger('click')
    await flushPromises()

    const key = 'altruisme:learn:seo-assistant:v1:learner-1'
    expect(localStorage.getItem(key)).toContain('Comment optimiser une page pour le SEO ?')
    wrapper.unmount()
    useSeoConversation().setUser(null)

    const restored = mountPage()
    expect(restored.text()).toContain('Comment optimiser une page pour le SEO ?')
    await restored.get('input[type="checkbox"]').setValue(false)
    expect(localStorage.getItem(key)).toBeNull()
    restored.unmount()
  })
})
