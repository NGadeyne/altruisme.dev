import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { GuideSection } from '@/types/guide'

export function useGuideNavigation(sections: GuideSection[]) {
  const activeId = ref(sections[0]?.id ?? '')
  let frame = 0
  let elements: HTMLElement[] = []
  const update = () => {
    frame = 0
    const threshold = window.matchMedia('(min-width: 1024px)').matches ? 140 : 190
    let current = elements[0]
    for (const element of elements) {
      if (element.getBoundingClientRect().top > threshold) break
      current = element
    }
    if (current) activeId.value = current.id
  }
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }
  onMounted(() => {
    elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null)
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
  })
  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
  })
  return { activeId }
}
