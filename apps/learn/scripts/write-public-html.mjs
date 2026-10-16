import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const pages = JSON.parse(
  await readFile(new URL('../src/data/publicPages.json', import.meta.url), 'utf8'),
)
const dist = new URL('../dist/', import.meta.url)
const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

for (const [path, page] of Object.entries(pages)) {
  if (path === '/') continue

  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(page.description)}$2`,
    )
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${escapeHtml(page.title)}$2`)
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(page.description)}$2`,
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*("\s*\/>)/,
      `$1https://learn.altruisme.dev${page.canonical ?? path}$2`,
    )

  if (page.robots) {
    html = html.replace(
      '<link rel="canonical"',
      `<meta name="robots" content="${escapeHtml(page.robots)}" />\n    <link rel="canonical"`,
    )
  }

  const directory = join(dist.pathname, path.slice(1))
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), html)
}

const sitemapPaths = Object.entries(pages)
  .filter(([, page]) => !page.robots?.includes('noindex'))
  .map(([path]) => `  <url><loc>https://learn.altruisme.dev${path}</loc></url>`)

await writeFile(
  new URL('../dist/sitemap.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.join('\n')}\n</urlset>\n`,
)
