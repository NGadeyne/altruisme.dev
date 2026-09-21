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
    assert.ok(document.querySelector('#partie-18').compareDocumentPosition(document.querySelector('#conclusion')) & 4)
    assert.equal(
      document.querySelector('link[rel="canonical"]').getAttribute('href'),
      'https://altruisme.dev/guides/saas',
    )
    assert.equal(document.querySelector('meta[property="og:title"]').content, 'SaaS 2026 : le guide ultime')
    assert.equal(
      document.querySelector('meta[property="og:image:alt"]').content,
      'SaaS 2026 : le guide ultime pour créer, lancer et développer un SaaS',
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
