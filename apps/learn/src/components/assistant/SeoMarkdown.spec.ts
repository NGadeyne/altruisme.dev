import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoMarkdown from '@/components/assistant/SeoMarkdown.vue'

describe('réponses Markdown', () => {
  it('affiche le contenu courant sans exécuter le HTML ou des liens dangereux', () => {
    const wrapper = mount(SeoMarkdown, {
      props: {
        content:
          '**Important**\n\n- Une action\n\n[Guide](https://example.com) [Piège](javascript:alert(1))\n\n```txt\ncode\n```\n\n<script>alert(1)</script>',
      },
    })

    expect(wrapper.get('strong').text()).toBe('Important')
    expect(wrapper.get('li').text()).toBe('Une action')
    expect(wrapper.get('pre code').text()).toBe('code')
    expect(wrapper.get('a').attributes('href')).toBe('https://example.com')
    expect(wrapper.find('a[href^="javascript:"]').exists()).toBe(false)
    expect(wrapper.find('script').exists()).toBe(false)
  })
})
