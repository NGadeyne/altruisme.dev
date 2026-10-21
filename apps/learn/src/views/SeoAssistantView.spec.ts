import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import router from '@/router'
import SeoAssistantView from '@/views/SeoAssistantView.vue'

describe('Assistant SEO', () => {
  it('possède une page protégée et un accès au plan d’action', () => {
    const route = router.resolve('/assistant-seo')
    expect(route.name).toBe('seo-assistant')
    expect(route.meta.requiresAuth).toBe(true)

    const wrapper = mount(SeoAssistantView, {
      global: {
        stubs: {
          BaseContainer: { template: '<div><slot /></div>' },
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.get('h1').text()).toBe('Assistant SEO')
    expect(wrapper.text()).toContain("L'assistant SEO n'est pas encore disponible")
    expect(wrapper.getComponent(RouterLinkStub).props('to')).toEqual({ name: 'learning-plan' })
  })
})
