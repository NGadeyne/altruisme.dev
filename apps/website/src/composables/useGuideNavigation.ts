import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { GuideSection } from '@/types/guide'

export function useGuideNavigation(sections: GuideSection[]) {
  const activeId = ref(sections[0]?.id ?? '')
  let observer: IntersectionObserver | undefined
  let frame = 0

  const observe = () => {
    observer?.disconnect()
    const top = window.matchMedia('(min-width: 1024px)').matches ? 140 : 190
    // Observe a reading line below the sticky header instead of reading layout on every scroll.
    const bottom = Math.max(0, window.innerHeight - top - 1)
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeId.value = entry.target.id
        }
      },
      { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 },
    )
    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    }
  }
  const resize = () => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(observe)
  }
  onMounted(() => {
    observe()
    window.addEventListener('resize', resize, { passive: true })
  })
  onBeforeUnmount(() => {
    observer?.disconnect()
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', resize)
  })
  return { activeId }
}
