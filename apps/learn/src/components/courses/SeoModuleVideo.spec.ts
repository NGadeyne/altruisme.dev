import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoModuleVideo from './SeoModuleVideo.vue'

describe('vidéo du module SEO', () => {
  it('attend une vraie vidéo sans afficher de lecteur provisoire', () => {
    const wrapper = mount(SeoModuleVideo, {
      props: { moduleNumber: 2, moduleTitle: 'Auditer ton site' },
    })

    expect(wrapper.text()).toContain('La vidéo du module 2 est en préparation.')
    expect(wrapper.find('button').exists()).toBe(false)
    expect(wrapper.find('iframe').exists()).toBe(false)
  })

  it('charge la vidéo du module uniquement après activation de l’aperçu', async () => {
    const wrapper = mount(SeoModuleVideo, {
      props: {
        moduleNumber: 2,
        moduleTitle: 'Auditer ton site',
        videoId: 'aqz-KE-bpKQ',
      },
    })

    expect(wrapper.text()).toContain('Module 02')
    expect(wrapper.find('iframe').exists()).toBe(false)

    await wrapper.get('button[aria-label^="Lire la vidéo du module"]').trigger('click')

    const iframe = wrapper.get('iframe')
    expect(iframe.attributes('src')).toBe(
      'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0',
    )
    expect(iframe.attributes('title')).toContain('Auditer ton site')
  })
})
