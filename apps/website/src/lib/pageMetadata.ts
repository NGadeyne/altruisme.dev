import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { guides, guidePath } from '@/data/guides'

const SITE_NAME = 'Altruisme.DEV'
const SITE_URL = 'https://altruisme.dev'
const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[character] ?? character,
  )

// One serializer for the initial HTML and subsequent client-side navigations.
export function renderPageMetadata(to: RouteLocationNormalizedLoaded) {
  const path = to.path.replace(/\/+$/, '') || '/'
  const guide = guides.find((item) => guidePath(item) === path)
  const published = guide?.status === 'available'
  const title = String(to.meta.title || SITE_NAME)
  const description = String(
    to.meta.description || 'Média tech indépendant : guides, actualités, podcast et communauté.',
  )
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const tags = [`<title data-page-meta>${escapeHtml(title)}</title>`]
  const meta = (name: string, content: string, attribute = 'name') => {
    tags.push(
      `<meta data-page-meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}">`,
    )
  }
  meta('description', description)
  meta('robots', String(to.meta.robots || 'index, follow'))
  if (to.name !== 'not-found')
    tags.push(`<link data-page-meta rel="canonical" href="${escapeHtml(url)}">`)
  meta('og:title', title, 'property')
  meta('og:description', description, 'property')
  meta('og:type', published ? 'article' : 'website', 'property')
  if (to.name !== 'not-found') meta('og:url', url, 'property')
  meta('og:site_name', SITE_NAME, 'property')
  meta('og:locale', 'fr_FR', 'property')
  meta('twitter:card', published && guide.image ? 'summary_large_image' : 'summary')
  meta('twitter:title', title)
  meta('twitter:description', description)
  if (published && guide) {
    if (guide.image) {
      const image = new URL(guide.image, SITE_URL).href
      meta('og:image', image, 'property')
      meta('og:image:alt', guide.title, 'property')
      meta('twitter:image', image)
      meta('twitter:image:alt', guide.title)
    }
    if (guide.publishedAt) meta('article:published_time', guide.publishedAt, 'property')
    if (guide.updatedAt) meta('article:modified_time', guide.updatedAt, 'property')
    const structuredData = {
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
    }
    tags.push(
      `<script data-page-meta id="guide-structured-data" type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
    )
  }
  return tags.join('\n')
}

export function updatePageMetadata(to: RouteLocationNormalizedLoaded) {
  document.head.querySelectorAll('[data-page-meta], title').forEach((element) => element.remove())
  const template = document.createElement('template')
  template.innerHTML = renderPageMetadata(to)
  document.head.appendChild(template.content)
  document.documentElement.lang = 'fr'
}
