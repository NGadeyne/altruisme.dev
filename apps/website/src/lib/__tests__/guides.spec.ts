import { describe, expect, it, beforeEach } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import { guides, guidePath } from '@/data/guides'
import { renderInline, readingMinutes } from '@/lib/guide'
import { updatePageMetadata } from '@/lib/pageMetadata'
import sections from '@/content/guides/freelance'

describe('published guides', () => {
  it('keeps every anchor unique and every published guide loadable', async () => {
    for (const guide of guides.filter((item) => item.status === 'available')) {
      expect(guide.loadSections).toBeTypeOf('function')
      const content = await guide.loadSections!()
      expect(content.length).toBeGreaterThan(0)
      const ids = content.flatMap((section) => [
        section.id,
        ...section.subsections.map((subsection) => subsection.id),
      ])
      expect(new Set(ids).size).toBe(ids.length)
      expect(content.every((section) => section.title.length > 0)).toBe(true)
    }
  })

  it('preserves the full freelance guide and derives reading time', () => {
    expect(sections).toHaveLength(21)
    expect(sections.flatMap((section) => section.subsections)).toHaveLength(157)
    expect(readingMinutes(sections)).toBe(229)
  })

  it('escapes embedded HTML while rendering supported inline markup', () => {
    expect(renderInline('<script>alert(1)</script>')).not.toContain('<script>')
    expect(renderInline('[lien](javascript:alert)')).not.toContain('<a')
    expect(renderInline('**Important**')).toContain('<strong')
    expect(renderInline('[Exemple](https://example.com)')).toContain('rel="noopener noreferrer"')
  })
})

describe('guide metadata', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
  })
  it('uses the stable URL and clears guide metadata on exit', async () => {
    const guide = guides.find((item) => item.slug === 'freelance')!
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: guidePath(guide),
          component: {},
          meta: { title: guide.title, description: guide.description },
        },
        { path: '/guides', component: {}, meta: { title: 'Guides' } },
      ],
    })
    await router.push('/guides/freelance')
    updatePageMetadata(router.currentRoute.value)
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://altruisme.dev/guides/freelance',
    )
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(
      'article',
    )
    const structured = document.getElementById('guide-structured-data')?.textContent
    expect(structured).toContain('https://altruisme.dev/guides/freelance')
    expect(structured).not.toContain('freelance-2026')
    await router.push('/guides')
    updatePageMetadata(router.currentRoute.value)
    expect(document.querySelector('meta[property="og:image"]')).toBeNull()
    expect(document.querySelector('meta[name="twitter:image"]')).toBeNull()
    expect(document.getElementById('guide-structured-data')).toBeNull()
    expect(document.title).toBe('Guides')
  })
})
