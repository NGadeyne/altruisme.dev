import { defineComponent, h } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { guides, guidePath } from '@/data/guides'

export const guideRoutes: RouteRecordRaw[] = guides.map((guide) => ({
  path: guidePath(guide),
  name: `guide-${guide.slug}`,
  meta: {
    title: guide.seoTitle ?? `${guide.title} | Altruisme.DEV`,
    description: guide.metaDescription ?? guide.description,
    ogTitle: guide.ogTitle,
    ogDescription: guide.ogDescription,
    twitterTitle: guide.twitterTitle,
    twitterDescription: guide.twitterDescription,
    keywords: guide.keywords,
    robots: guide.status === 'available' ? 'index, follow' : 'noindex, follow',
  },
  component: async () => {
    if (guide.status === 'available' && guide.loadSections) {
      const [view, sections] = await Promise.all([
        import('@/views/guides/GuideView.vue'),
        guide.loadSections(),
      ])
      return defineComponent({
        name: `Guide-${guide.slug}`,
        setup: () => () => h(view.default, { guide, sections }),
      })
    }
    const view = await import('@/views/guides/UpcomingGuideView.vue')
    return defineComponent({ setup: () => () => h(view.default, { guide }) })
  },
}))
