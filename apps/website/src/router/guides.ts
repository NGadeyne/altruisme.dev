import { defineAsyncComponent, defineComponent, h, hydrateOnInteraction } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { guides, guidePath } from '@/data/guides'
import type { GuideDefinition } from '@/types/guide'

function createAvailableGuideComponent(guide: GuideDefinition) {
  if (!guide.loadSections) {
    throw new Error(`Missing sections loader for guide ${guide.slug}`)
  }

  const GuideContent = defineAsyncComponent({
    loader: async () => {
      const [view, sections] = await Promise.all([
        import('@/views/guides/GuideView.vue'),
        guide.loadSections!(),
      ])

      return defineComponent({
        name: `Guide-${guide.slug}`,
        setup: () => () => h(view.default, { guide, sections }),
      })
    },
    // The guide is fully rendered in HTML. Its only client-side enhancement is the active
    // table-of-contents state, so loading its large content module can wait for interaction.
    hydrate: hydrateOnInteraction('click'),
  })

  return defineComponent({
    name: `GuideRoute-${guide.slug}`,
    setup: () => () => h(GuideContent),
  })
}

export const guideRoutes: RouteRecordRaw[] = guides.map((guide) => ({
  path: guidePath(guide),
  name: `guide-${guide.slug}`,
  meta: {
    title: guide.seoTitle ?? `${guide.title} | Altruisme.DEV`,
    description: guide.description,
    robots: guide.status === 'available' ? 'index, follow' : 'noindex, follow',
  },
  component:
    guide.status === 'available' && guide.loadSections
      ? createAvailableGuideComponent(guide)
      : () =>
          import('@/views/guides/UpcomingGuideView.vue').then((view) =>
            defineComponent({ setup: () => () => h(view.default, { guide }) }),
          ),
}))
