export type NewsSitemapArticle = {
  url: string
  publishedAt: string
  title: string
}

const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000

const escapeXml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character] ??
      character,
  )

export function renderNewsSitemap(articles: NewsSitemapArticle[], now = new Date()) {
  const recentArticles = articles.filter((article) => {
    // The editorial dates are date-only; interpret them as UTC midnight to avoid retaining old URLs.
    const age = now.getTime() - Date.parse(article.publishedAt)
    return Number.isFinite(age) && age >= 0 && age < TWO_DAYS_MS
  })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">',
    ...recentArticles.map(
      (article) =>
        `  <url>\n    <loc>${escapeXml(article.url)}</loc>\n    <news:news>\n      <news:publication>\n        <news:name>Altruisme.DEV</news:name>\n        <news:language>fr</news:language>\n      </news:publication>\n      <news:publication_date>${escapeXml(article.publishedAt)}</news:publication_date>\n      <news:title>${escapeXml(article.title)}</news:title>\n    </news:news>\n  </url>`,
    ),
    '</urlset>',
  ].join('\n')
}
