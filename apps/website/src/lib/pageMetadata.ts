import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { guides, guidePath } from '@/data/guides'

const SITE_NAME = 'Altruisme.DEV'
const SITE_URL = 'https://altruisme.dev'

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.content = content
}

export function updatePageMetadata(to: RouteLocationNormalizedLoaded) {
  const path = to.path.replace(/\/+$/, '') || '/'
  const guide = guides.find((item) => guidePath(item) === path)
  const published = guide?.status === 'available'
  const title = String(to.meta.title || SITE_NAME)
  const description = String(
    to.meta.description || 'Média tech indépendant : guides, actualités, podcast et communauté.',
  )
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  document.title = title
  document.documentElement.lang = 'fr'
  setMeta('description', description)
  setMeta('robots', String(to.meta.robots || 'index, follow'))
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
  setMeta('og:title', title, 'property')
  setMeta('og:description', description, 'property')
  setMeta('og:type', published ? 'article' : 'website', 'property')
  setMeta('og:url', url, 'property')
  setMeta('og:site_name', SITE_NAME, 'property')
  setMeta('og:locale', 'fr_FR', 'property')
  setMeta('twitter:card', published && guide.image ? 'summary_large_image' : 'summary')
  setMeta('twitter:title', title)
  setMeta('twitter:description', description)

  // Remove article-only metadata when navigating to another page.
  document.head
    .querySelectorAll(
      'meta[property^="og:image"], meta[name^="twitter:image"], meta[property^="article:"], meta[name="keywords"]',
    )
    .forEach((element) => element.remove())
  document.getElementById('guide-structured-data')?.remove()
  if (!published || !guide) return
  if (guide.image) {
    const image = new URL(guide.image, SITE_URL).href
    setMeta('og:image', image, 'property')
    setMeta('og:image:alt', guide.title, 'property')
    setMeta('twitter:image', image)
    setMeta('twitter:image:alt', guide.title)
  }
  if (guide.publishedAt) setMeta('article:published_time', guide.publishedAt, 'property')
  if (guide.updatedAt) setMeta('article:modified_time', guide.updatedAt, 'property')
  const script = document.createElement('script')
  script.id = 'guide-structured-data'
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        image: guide.image ? new URL(guide.image, SITE_URL).href : undefined,
        author: guide.author ? { '@type': 'Person', ...guide.author } : undefined,
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        inLanguage: 'fr-FR',
        articleSection: guide.label,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url },
        ],
      },
    ],
  })
  document.head.appendChild(script)
}
