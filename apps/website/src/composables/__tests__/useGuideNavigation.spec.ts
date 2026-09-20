import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue'
import { useGuideNavigation } from '../useGuideNavigation'
import type { GuideSection } from '@/types/guide'

afterEach(() => {
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

describe('guide reading position', () => {
  it('tracks a deep chapter without synchronous layout reads and disconnects on exit', () => {
    const disconnect = vi.fn()
    const observe = vi.fn()
    let callback: IntersectionObserverCallback | undefined
    vi.stubGlobal('matchMedia', () => ({ matches: true }))
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        disconnect = disconnect
        observe = observe
        constructor(handler: IntersectionObserverCallback) {
          callback = handler
        }
      },
    )
    document.body.innerHTML = '<section id="intro"></section><section id="chapter-18"></section>'
    const sections: GuideSection[] = ['intro', 'chapter-18'].map((id) => ({
      id,
      title: id,
      kind: 'chapter',
      intro: [],
      subsections: [],
    }))
    const component = mount(
      defineComponent({
        setup: () => useGuideNavigation(sections),
        template: '<p>{{ activeId }}</p>',
      }),
    )
    expect(observe).toHaveBeenCalledTimes(2)
    const target = document.getElementById('chapter-18')!
    const geometry = vi.spyOn(target, 'getBoundingClientRect')
    callback!(
      [{ target, isIntersecting: true, boundingClientRect: new DOMRect(), intersectionRatio: 1, intersectionRect: new DOMRect(), rootBounds: null, time: 0 }],
      {} as IntersectionObserver,
    )
    expect(component.vm.activeId).toBe('chapter-18')
    expect(geometry).not.toHaveBeenCalled()
    component.unmount()
    expect(disconnect).toHaveBeenCalledOnce()
  })
})
