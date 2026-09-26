import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'
import { JSDOM } from 'jsdom'
import { prerenderPaths } from '../node_modules/.prerender/entry-server.js'

const output = resolve('dist')
for (const path of [...prerenderPaths, '/404']) {
  const file = resolve(output, path === '/' ? 'index.html' : `${path.slice(1)}.html`)
  const html = await readFile(file, 'utf8')
  const { document } = new JSDOM(html).window
  assert.equal(document.querySelectorAll('title').length, 1, path)
  assert.equal(document.querySelectorAll('meta[name="description"]').length, 1, path)
  assert.ok(
    document.querySelector('#app h1')?.textContent.trim(),
    `Missing initial content: ${path}`,
  )
  assert.ok(!document.title.includes('Signons ensemble'), path)
  if (path === '/404') {
    assert.equal(document.querySelector('meta[name="robots"]').content, 'noindex, follow')
    assert.equal(document.querySelector('link[rel="canonical"]'), null)
  } else {
    assert.equal(
      document.querySelector('link[rel="canonical"]').getAttribute('href'),
      `https://altruisme.dev${path === '/' ? '' : path}`,
    )
  }
  for (const element of document.querySelectorAll(
    'script[src], link[rel="stylesheet"], img[src]',
  )) {
    const asset = element.getAttribute('src') ?? element.getAttribute('href')
    if (asset.startsWith('/')) await access(resolve(output, asset.slice(1)))
  }
  if (path === '/guides/freelance') {
    assert.equal(document.querySelectorAll('.guide-section').length, 21)
    assert.ok(document.querySelector('#faq-et-apres'))
    const data = JSON.parse(document.querySelector('#guide-structured-data').textContent)
    assert.equal(data['@graph'][0].url, 'https://altruisme.dev/guides/freelance')
    assert.ok(
      [...document.querySelectorAll('link[rel="stylesheet"]')].some((link) =>
        link.href.includes('GuideView-'),
      ),
      'Guide styles must be present before hydration',
    )
  }
  if (path === '/guides/saas') {
    assert.equal(document.querySelectorAll('.guide-section').length, 21)
    assert.ok(document.querySelector('#partie-18'))
    assert.ok(document.querySelector('#conclusion'))
    assert.ok(document.querySelector('#faq'))
    assert.ok(
      document
        .querySelector('#partie-18')
        .compareDocumentPosition(document.querySelector('#conclusion')) & 4,
    )
    assert.equal(
      document.querySelector('link[rel="canonical"]').getAttribute('href'),
      'https://altruisme.dev/guides/saas',
    )
    assert.equal(
      document.querySelector('meta[property="og:title"]').content,
      'SaaS 2026 : le guide ultime',
    )
    assert.equal(
      document.querySelector('meta[property="og:image:alt"]').content,
      'SaaS 2026 : le guide ultime pour créer, lancer et développer un SaaS',
    )
  }
  if (path === '/') {
    assert.equal(document.querySelectorAll('.media-news-list article').length, 1)
    assert.equal(document.querySelector('.media-feature'), null)
    assert.equal(
      document.querySelector('.media-news-list .media-arrow-link')?.getAttribute('href'),
      '/actualites/semaine-39-2026',
    )
  }
  if (path === '/actualites') {
    assert.equal(document.querySelectorAll('main article').length, 1)
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'Actu Tech de la semaine')
    assert.equal(
      document.querySelector('main article h2')?.textContent.trim(),
      'Actu Tech de la semaine #39 : Claude sort de l’écran',
    )
    assert.equal(document.querySelector('main article img'), null)
    assert.equal(
      document.querySelector('main article a')?.getAttribute('href'),
      '/actualites/semaine-39-2026',
    )
  }
  if (path === '/actualites/semaine-39-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-39-2026.txt'), 'utf8')
    const publishedLines = [...document.querySelectorAll('.news-body h2, .news-body p')].map(
      (element) => element.textContent.trim(),
    )
    assert.deepEqual(
      publishedLines,
      source.split(/\r?\n/).filter((line) => line.trim()),
    )
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a[href^="http"]')].map((link) => [
        link.textContent,
        link.href,
      ]),
      [
        [
          'nouveau groupe de recherche en sciences du vivant',
          'https://www.anthropic.com/news/claude-discovers-novel-enzyme-system',
        ],
        [
          'Claude Opus 5.5',
          'https://www.reuters.com/business/anthropic-unveils-claude-opus-55-2026-09-22/',
        ],
        [
          'Aikido Security',
          'https://www.reuters.com/legal/litigation/belgiums-aikido-launches-cybersecurity-ai-model-demand-local-tools-grows-2026-09-21/',
        ],
        [
          'rachat de Row Zero',
          'https://techcrunch.com/2026/09/24/databricks-buys-row-zero-and-is-scouting-for-more-startups-to-acquire/',
        ],
        [
          'gigantesque datacenter en Alberta',
          'https://www.reuters.com/legal/litigation/meta-data-center-boosts-alberta-appeal-hyperscalers-capital-power-says-2026-09-21/',
        ],
      ],
    )
    assert.equal(document.title, 'Actu Tech de la semaine #39 : Claude, IA et cybersécurité')
    assert.equal(document.querySelector('meta[property="og:type"]').content, 'article')
    assert.equal(
      document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #39 sur Altruisme.DEV : Claude sort de l’écran',
    )
  }
}
for (const retired of ['contact', 'guides/freelance-2026']) {
  await assert.rejects(access(resolve(output, `${retired}.html`)))
}
assert.ok(!(await readFile(resolve(output, 'sitemap.xml'), 'utf8')).includes('/contact'))
console.log(
  `Verified initial HTML, metadata and assets for ${prerenderPaths.length} pages and the 404 page.`,
)
