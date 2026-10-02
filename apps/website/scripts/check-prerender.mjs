import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'
import { JSDOM } from 'jsdom'
import { prerenderPaths, routes } from '../node_modules/.prerender/entry-server.js'

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
  for (const heading of document.querySelectorAll('#app h1, #app h2')) {
    assert.ok(!heading.textContent.trim().endsWith('.'), `Final period in ${heading.tagName}: ${path}`)
  }
  assert.ok(!document.title.includes('Signons ensemble'), path)
  assert.equal(document.querySelectorAll('a[href="/communaute"]').length, 0, path)
  assert.equal(document.querySelectorAll('a[href^="/lancement"]').length, 0, path)
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
      'SaaS 2026 : Guide complet',
    )
    assert.equal(
      document.querySelector('meta[property="og:image:alt"]').content,
      'SaaS 2026 : Guide complet pour créer, lancer et développer un SaaS',
    )
  }
  if (path === '/') {
    assert.equal(document.querySelectorAll('.media-news-list article').length, 2)
    assert.equal(document.querySelector('.media-feature'), null)
    assert.equal(
      document.querySelector('.media-news-list .media-arrow-link')?.getAttribute('href'),
      '/actualites/semaine-40-2026',
    )
    assert.equal(document.querySelector('.media-resource .base-button')?.getAttribute('href'), '/checklist')
    assert.equal(document.querySelectorAll('nav[aria-label="Navigation principale"] a[href="/checklist"]').length, 1)
  }
  if (path === '/actualites') {
    assert.equal(document.querySelectorAll('main article').length, 2)
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'Actu Tech de la semaine')
    assert.equal(
      document.querySelector('main article h2')?.textContent.trim(),
      'Actu Tech de la semaine #40 : l’IA ne veut plus seulement discuter',
    )
    assert.equal(document.querySelector('main article img'), null)
    assert.equal(
      document.querySelector('main article a')?.getAttribute('href'),
      '/actualites/semaine-40-2026',
    )
    assert.equal(document.querySelectorAll('script[type="application/ld+json"]').length, 0)
  }
  if (path === '/actualites/semaine-39-2026' || path === '/actualites/semaine-40-2026') {
    const publishedAt = path.endsWith('semaine-39-2026') ? '2026-09-26' : '2026-10-02'
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href')
    assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1, path)
    assert.equal(document.querySelectorAll('script[type="application/ld+json"]').length, 1, path)
    for (const property of [
      'og:title', 'og:description', 'og:type', 'og:url', 'og:site_name', 'og:locale',
      'og:image', 'og:image:alt',
    ]) {
      assert.equal(
        document.querySelectorAll(`meta[property="${property}"]`).length,
        1,
        `${property}: ${path}`,
      )
    }
    for (const name of [
      'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt',
    ]) {
      assert.equal(
        document.querySelectorAll(`meta[name="${name}"]`).length,
        1,
        `${name}: ${path}`,
      )
    }
    const data = JSON.parse(document.querySelector('#news-structured-data').textContent)
    assert.equal(data['@context'], 'https://schema.org')
    assert.equal(data['@type'], 'NewsArticle')
    assert.equal(data.headline, document.querySelector('main h1')?.textContent.trim())
    assert.equal(data.description, document.querySelector('meta[name="description"]')?.content)
    assert.equal(
      data.image,
      new URL(document.querySelector('main img')?.getAttribute('src'), canonical).href,
    )
    assert.equal(data.datePublished, publishedAt)
    assert.equal(data.dateModified, publishedAt)
    assert.deepEqual(data.author, { '@type': 'Person', name: 'Nicolas Gadeyne' })
    assert.deepEqual(data.publisher, {
      '@type': 'Organization',
      name: 'Altruisme.DEV',
      url: 'https://altruisme.dev',
    })
    assert.equal(data.mainEntityOfPage['@id'], canonical)
    assert.equal(
      document.querySelector('article header time')?.getAttribute('datetime'),
      publishedAt,
    )
    assert.match(document.querySelector('article header')?.textContent, /Par Nicolas Gadeyne/)
    for (const property of ['article:published_time', 'article:modified_time']) {
      const tags = document.querySelectorAll(`meta[property="${property}"]`)
      assert.equal(tags.length, 1, `${property}: ${path}`)
      assert.equal(tags[0].content, publishedAt)
    }
  }
  if (path === '/actualites/semaine-40-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-40-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p:not(.news-sources)')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, '$1').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #40 : l’IA ne veut plus seulement discuter')
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'OpenAI DevDay, agents IA, sécurité, Gemini 4 et infrastructure : découvre les actualités Tech à retenir de la semaine #40.',
    )
    assert.equal(document.querySelector('main h1')?.textContent.trim(),
      'Actu Tech de la semaine #40 : l’IA ne veut plus seulement discuter')
    assert.equal(document.querySelector('meta[property="og:type"]').content, 'article')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #40 : l’IA ne veut plus seulement discuter')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-40-2026.webp')
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
  if (path === '/apropos') {
    assert.equal(
      document.querySelector('h1')?.textContent.replace(/\s+/g, ' ').trim(),
      'Altruisme n’est pas un produit. C’est un écosystème',
    )
    assert.equal(document.querySelectorAll('.ecosystem-brick').length, 6)
    assert.ok(document.querySelector('.ecosystem-foundation'))
    assert.equal(document.querySelectorAll('.ecosystem-flow li').length, 5)
    assert.equal(document.querySelectorAll('.ecosystem-journey-steps li').length, 6)
    assert.equal(
      document.querySelector('.ecosystem-actions a')?.getAttribute('href'),
      'https://learn.altruisme.dev/',
    )
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'Découvrez l’écosystème Altruisme : média, formations, consulting et produits pour apprendre, construire, héberger et développer des projets numériques.',
    )
    assert.ok(
      [...document.querySelectorAll('nav a')].some(
        (link) => link.textContent.trim() === 'Écosystème',
      ),
    )
  }
  if (path === '/checklist') {
    assert.equal(document.title, 'Checklist gratuite : de l’idée au premier euro | Altruisme.DEV')
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'Une checklist gratuite pour passer d’une idée de SaaS, d’e-commerce, d’automatisation ou de produit numérique à une première version, des utilisateurs et une première vente.',
    )
    assert.equal(document.querySelector('meta[property="og:title"]').content, document.title)
    assert.equal(
      document.querySelector('meta[property="og:description"]').content,
      document.querySelector('meta[name="description"]').content,
    )
    assert.equal(document.querySelector('meta[property="og:url"]').content, 'https://altruisme.dev/checklist')
    assert.equal(document.querySelector('meta[name="twitter:title"]').content, document.title)
    assert.equal(
      document.querySelector('meta[name="twitter:description"]').content,
      document.querySelector('meta[name="description"]').content,
    )
    assert.equal(document.querySelector('h1')?.textContent.replace(/\s+/g, ' ').trim(), 'La checklist SaaS')
    assert.equal(document.querySelector('.launch-subtitle')?.textContent.trim(), 'De l’idée au premier euro.')
    assert.equal(
      document.querySelector('.launch-lead')?.textContent.trim(),
      'Tu as une idée de SaaS, d’e-commerce, d’automatisation ou de produit numérique ? Cette checklist t’aide à passer de l’idée à quelque chose de concret, étape par étape.',
    )
    assert.equal(document.querySelector('.launch-sheet-title')?.textContent.trim(), 'De l’idée au premier euro.')
    assert.deepEqual(
      [...document.querySelectorAll('.launch-sheet-step')].map((item) => [
        item.children[1]?.textContent.trim(),
        item.querySelector('small')?.textContent.trim(),
      ]),
      [
        ['Clarifier l’idée', '01'],
        ['Valider la demande', '05'],
        ['Trouver les premiers utilisateurs', '07'],
        ['Faire la première vente', '09'],
      ],
    )
    assert.equal(document.querySelectorAll('.launch-step').length, 9)
    assert.equal(document.querySelector('.launch-projects .launch-eyebrow')?.textContent.trim(), 'Pourquoi Altruisme.DEV')
    assert.equal(document.querySelector('#launch-projects-title')?.textContent.replace(/\s+/g, ' ').trim(), 'Construire, tester, apprendre. Pour de vrai')
    assert.deepEqual(
      [...document.querySelectorAll('.launch-projects-grid > div:last-child > .launch-lead')].map((item) => item.textContent.trim()),
      [
        'Altruisme.DEV est un média indépendant consacré à celles et ceux qui construisent dans la tech.',
        'Les contenus sont pensés à partir de l’expérience terrain : produit, développement, acquisition, freelancing et lancement de projets numériques.',
        'Pas de recette magique ni de promesse de réussite rapide. Cette checklist rassemble simplement les étapes essentielles pour transformer une idée en quelque chose de concret, le confronter au réel et avancer avec méthode.',
      ],
    )
    assert.deepEqual(
      [...document.querySelectorAll('.launch-project-list > span')].map((item) => [
        item.querySelector('strong')?.textContent,
        item.querySelector('small')?.textContent,
      ]),
      [
        ['Des années d’expérience dans la tech', 'Produit, développement, acquisition et accompagnement de projets.'],
        ['Une approche terrain', 'Des ressources conçues pour être utilisées, pas seulement consommées.'],
        ['Indépendant', 'Pas de méthode miracle. Pas de bullshit. Des contenus utiles, accessibles et applicables.'],
      ],
    )
    assert.equal(document.querySelector('.launch-faq .launch-eyebrow')?.textContent.trim(), 'Questions fréquentes')
    assert.equal(document.querySelector('#launch-faq-title')?.textContent.trim(), 'Avant de te lancer')
    assert.deepEqual(
      [...document.querySelectorAll('.launch-faq-item')].map((item) => [
        item.querySelector('summary span')?.textContent.trim(),
        item.querySelector('p')?.textContent.trim(),
      ]),
      [
        ['À qui s’adresse cette checklist ?', 'À celles et ceux qui veulent transformer une idée de SaaS, d’automatisation, d’e-commerce ou de produit numérique en quelque chose de concret.'],
        ['Est-ce que je dois déjà savoir coder ?', 'Non. La checklist est pensée pour t’aider à structurer ton projet, valider la demande et avancer dans le bon ordre, quel que soit ton niveau technique.'],
        ['Est-ce vraiment gratuit ?', 'Oui. Tu reçois la checklist gratuitement en laissant ton adresse email. Aucun paiement n’est demandé.'],
        ['Est-ce utile si j’ai déjà commencé mon projet ?', 'Oui. Tu peux l’utiliser comme feuille de route ou comme checklist de contrôle pour voir ce qu’il te manque avant d’aller chercher tes premiers utilisateurs ou ta première vente.'],
        ['Qu’est-ce que je vais recevoir ensuite ?', 'La checklist, puis ponctuellement les prochains contenus d’Altruisme.DEV : guides, ressources et actualités utiles autour de la tech, du produit, de l’acquisition et de la construction de projets.'],
      ],
    )
    assert.ok(document.querySelector('.launch-faq').compareDocumentPosition(document.querySelector('.launch-final')) & 4)
    assert.equal(document.querySelector('.launch-final .base-button')?.getAttribute('href'), '/checklist#formulaire')
    assert.ok(document.querySelector('form input[type="email"][required]'))
    assert.ok(document.querySelector('form input[type="checkbox"]'))
  }
  if (path === '/checklist/etapes') {
    assert.equal(document.querySelector('meta[name="robots"]').content, 'noindex, follow')
    assert.equal(document.querySelectorAll('.checklist-steps li').length, 9)
  }
}
for (const retired of ['contact', 'guides/freelance-2026', 'communaute']) {
  await assert.rejects(access(resolve(output, `${retired}.html`)))
}
const sitemap = await readFile(resolve(output, 'sitemap.xml'), 'utf8')
assert.ok(!sitemap.includes('/contact'))
assert.ok(!sitemap.includes('/communaute'))
assert.ok(sitemap.includes('https://altruisme.dev/checklist</loc>'))
assert.ok(!sitemap.includes('/lancement'))

const newsArticles = JSON.parse(await readFile(resolve(output, 'news-sitemap-articles.json'), 'utf8'))
const newsRoutes = routes.filter((route) => route.path.startsWith('/actualites/') && route.meta?.article === true)
assert.equal(newsArticles.length, newsRoutes.length)
for (const article of newsArticles) {
  const path = new URL(article.url).pathname
  const route = newsRoutes.find((item) => item.path === path)
  assert.ok(route, `Missing News route for ${article.url}`)
  assert.equal(article.url, `https://altruisme.dev${route.path}`)
  assert.equal(article.title, route.meta.ogTitle || route.meta.title)
  assert.equal(article.publishedAt, route.meta.publishedAt)
  assert.match(article.publishedAt, /^\d{4}-\d{2}-\d{2}$/)
  const html = await readFile(resolve(output, `${path.slice(1)}.html`), 'utf8')
  const { document } = new JSDOM(html).window
  assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), article.url)
  assert.equal(document.querySelector('h1').textContent.trim(), article.title)
}
assert.ok((await readFile(resolve(output, '_redirects'), 'utf8')).includes('/communaute /checklist 301'))
console.log(
  `Verified initial HTML, metadata and assets for ${prerenderPaths.length} pages and the 404 page.`,
)
