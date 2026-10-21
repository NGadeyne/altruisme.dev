import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SeoLessonVideo from './SeoLessonVideo.vue'

describe('vidéo des leçons SEO', () => {
  it('charge YouTube uniquement après activation de l’aperçu', async () => {
    const wrapper = mount(SeoLessonVideo, {
      props: {
        lessonNumber: 2,
        lessonTitle: 'Comment Google découvre, indexe et classe les pages',
        videoId: 'aqz-KE-bpKQ',
      },
    })

    expect(wrapper.text()).toContain('Leçon 02')
    expect(wrapper.find('iframe').exists()).toBe(false)

    await wrapper.get('button[aria-label^="Lire la vidéo"]').trigger('click')

    const iframe = wrapper.get('iframe')
    expect(iframe.attributes('src')).toBe(
      'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0',
    )
    expect(iframe.attributes('title')).toContain('Comment Google découvre')
  })
})
