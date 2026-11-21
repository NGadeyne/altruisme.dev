import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'
import { JSDOM } from 'jsdom'
import { prerenderPaths, routes } from '../node_modules/.prerender/entry-server.js'

const output = resolve('dist')
const indexableUrls = new Set()
const seoModules = prerenderPaths.filter((path) => path.startsWith('/guides/seo/'))
const legacySteps = new Set()
const redirectRules = (await readFile(resolve(output, '_redirects'), 'utf8')).trim().split('\n')

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
    const requestedChecklistTitle = path === '/checklist' && ['launch-title', 'launch-projects-title', 'launch-final-title'].includes(heading.id)
    assert.ok(requestedChecklistTitle || !heading.textContent.trim().endsWith('.'), `Final period in ${heading.tagName}: ${path}`)
  }
  assert.ok(!document.title.includes('Signons ensemble'), path)
  assert.equal(document.querySelectorAll('a[href="/communaute"]').length, 0, path)
  assert.equal(document.querySelectorAll('a[href^="/lancement"]').length, 0, path)
  if (path === '/404') {
    assert.equal(document.querySelector('meta[name="robots"]').content, 'noindex, follow')
    assert.equal(document.querySelector('link[rel="canonical"]'), null)
  } else {
    const canonical = document.querySelector('link[rel="canonical"]').getAttribute('href')
    assert.equal(canonical, `https://altruisme.dev${path === '/' ? '' : path}`)
    if (!document.querySelector('meta[name="robots"]')?.content.includes('noindex'))
      indexableUrls.add(canonical)
  }
  for (const element of document.querySelectorAll(
    'script[src], link[rel="stylesheet"], img[src]',
  )) {
    const asset = element.getAttribute('src') ?? element.getAttribute('href')
    if (asset.startsWith('/')) await access(resolve(output, asset.slice(1)))
  }
  const isNewsArticle = routes.some(
    (route) => route.path === path && path.startsWith('/actualites/') && route.meta?.article === true,
  )
  if (document.querySelector('.guide-page') || isNewsArticle) {
    const ctas = document.querySelectorAll('[data-checklist-cta]')
    assert.equal(ctas.length, 1, `Checklist CTA count: ${path}`)
    const cta = ctas[0]
    assert.deepEqual(
      [...cta.querySelectorAll('p')].map((paragraph) => paragraph.textContent.replace(/\s+/g, ' ').trim()),
      [
        'Ressource gratuite',
        'Découvre notre checklist SEO gratuite : 9 points essentiels pour améliorer ton référencement sur Google et les moteurs IA.',
      ],
    )
    assert.equal(
      cta.querySelector('h2')?.textContent.replace(/\s+/g, ' ').trim(),
      'Et si ton site méritait plus de visibilité ?',
    )
    assert.equal(cta.querySelector('a[href="/checklist"]')?.textContent.trim(), 'Recevoir la checklist SEO')
    if (isNewsArticle) {
      assert.ok(document.querySelector('article')?.compareDocumentPosition(cta) & 4, path)
    }
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
  if (path === '/guides/linkedin') {
    assert.equal(document.querySelectorAll('.guide-section').length, 21)
    assert.ok(document.querySelector('#partie-18'))
    assert.ok(document.querySelector('#faq'))
    assert.ok(document.querySelector('#faq')?.textContent.includes(
      'Elle se mesure aussi au nombre de bonnes personnes qui savent pourquoi elles devraient penser à vous.',
    ))
    assert.equal(document.title, 'LinkedIn 2026 : le guide complet pour développer sa visibilité')
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'Le guide complet pour réussir sur LinkedIn en 2026 : profil, positionnement, contenu, réseau, algorithme, prospection, IA et opportunités.',
    )
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'LinkedIn 2026 : Guide complet')
    assert.equal(document.querySelector('meta[property="og:title"]').content, 'LinkedIn 2026 : le guide complet')
    assert.equal(
      document.querySelector('meta[property="og:description"]').content,
      'Construire une présence forte sur LinkedIn, développer sa visibilité, créer du contenu utile et transformer cette visibilité en opportunités professionnelles.',
    )
    assert.equal(
      document.querySelector('main img')?.getAttribute('src'),
      '/images/guides/guide-linkedin-2026.webp',
    )
    assert.equal(
      document.querySelector('main img')?.getAttribute('alt'),
      'LinkedIn 2026 : guide complet pour développer sa visibilité et créer des opportunités',
    )
  }
  if (path === '/guides/seo') {
    assert.equal(document.title, 'SEO 2026 : guide complet | Altruisme.DEV')
    assert.equal(document.querySelector('main h1').textContent.trim(), 'SEO 2026 : guide complet')
    for (const hash of ['#plan-action', '#sommaire', '#ressources', '#faq']) {
      assert.ok(document.querySelector(`main a[href="${hash}"]`) && document.querySelector(hash), hash)
    }
    assert.equal(document.querySelectorAll('#plan-action h3').length, 3)
    assert.equal(document.querySelector('#plan-action input'), null)
    const paths = [...document.querySelectorAll('#sommaire h3 a')].map((a) => a.getAttribute('href'))
    assert.equal(seoModules.length, 10)
    assert.deepEqual(paths, seoModules)
    assert.equal(document.querySelectorAll('#sommaire li a').length, 41)
    const steps = [...document.querySelectorAll('#sommaire li a')].map((a) => a.getAttribute('href'))
    const questions = document.querySelectorAll('#faq details')
    assert.ok(questions.length >= 12)
    for (const question of questions) {
      assert.ok(question.querySelector('summary')?.textContent.trim().endsWith('?'))
      assert.ok(question.querySelector('p')?.textContent.trim())
      assert.ok(steps.includes(question.querySelector('a')?.getAttribute('href')))
    }
    assert.equal(document.querySelectorAll('#ressources li a').length, 5)
    const [course] = JSON.parse(document.querySelector('#guide-structured-data').textContent)['@graph']
    assert.equal(course['@type'], 'Course')
    assert.deepEqual(course.hasPart.map((part) => new URL(part['@id']).pathname), paths)
  }
  if (seoModules.includes(path)) {
    const title = document.querySelector('main h1').textContent.trim()
    assert.equal(document.querySelectorAll('main h1').length, 1)
    assert.equal(document.title, `${title} | SEO 2026 : guide complet`)
    const ids = [...document.querySelectorAll('[id]')].map((element) => element.id)
    assert.equal(ids.length, new Set(ids).size, `Repeated id on ${path}`)
    const anchors = [...document.querySelectorAll('#sommaire a')].map((a) => a.getAttribute('href'))
    const [module, breadcrumbs] = JSON.parse(document.querySelector('#guide-structured-data').textContent)['@graph']
    assert.equal(module['@type'], 'LearningResource')
    assert.equal(module.isPartOf['@id'], 'https://altruisme.dev/guides/seo')
    assert.equal(breadcrumbs.itemListElement.at(-1).item, module.url)
    assert.deepEqual(module.hasPart.map((part) => part.url), anchors.map((hash) => module.url + hash))
    assert.equal(anchors.filter((hash) => hash.startsWith('#exercice-')).length, 1)
    for (const anchor of anchors) {
      const step = document.getElementById(anchor.slice(1))
      assert.ok(step, anchor)
      const body = step.querySelector('.course-body')
      assert.ok(body?.textContent.length > 3000, path + anchor)
      assert.equal(body.querySelector('h1, h2'), null, path + anchor)
      assert.ok(body.querySelector('h3'), path + anchor)
      assert.doesNotMatch(body.textContent, /« Mon plan d['’]action »/, path)
      if (anchor.startsWith('#lecon-')) {
        assert.ok(body.querySelectorAll('form fieldset').length >= 3, path + anchor)
      } else {
        assert.match(body.textContent, /Étape 3 —/, path)
      }
      const oldPath = '/guides/seo/' + step.id
      assert.ok(!legacySteps.has(oldPath))
      legacySteps.add(oldPath)
      assert.ok(redirectRules.includes(`${oldPath} ${path}${anchor} 301`), oldPath)
      await assert.rejects(access(resolve(output, oldPath.slice(1) + '.html')))
    }
    const index = seoModules.indexOf(path)
    const navigation = document.querySelector('nav[aria-label="Parcourir le guide"]')
    for (const target of [seoModules[index - 1], seoModules[index + 1] ?? '/guides/seo'].filter(Boolean))
      assert.ok(navigation.querySelector(`a[href="${target}"]`), path)
  }
  if (path === '/guides/prospection') {
    assert.equal(document.querySelectorAll('.guide-section').length, 21)
    assert.ok(document.querySelector('#partie-18'))
    assert.ok(document.querySelector('#faq')?.textContent.includes(
      'La bonne prospection combine donc patience et réactivité',
    ))
    assert.ok(!document.querySelector('main')?.textContent.includes('Bien sûr. Je garde exactement'))
    assert.equal(document.title, 'Prospection 2026 : le guide complet pour trouver des clients')
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'Le guide complet de la prospection en 2026 : stratégie, ciblage, messages, LinkedIn, email, relances, CRM, automatisation et intelligence artificielle.',
    )
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'Prospection 2026 : Guide complet')
    assert.equal(document.querySelector('link[rel="canonical"]').href, 'https://altruisme.dev/guides/prospection')
    assert.equal(document.querySelector('meta[property="og:title"]').content, 'Prospection 2026 : le guide complet')
    assert.equal(
      document.querySelector('meta[property="og:description"]').content,
      'Construire une prospection efficace en 2026 : ciblage, proposition de valeur, messages, séquences, qualification, CRM, automatisation et IA.',
    )
    assert.equal(document.querySelector('meta[property="og:url"]').content, 'https://altruisme.dev/guides/prospection')
    assert.equal(document.querySelector('meta[property="og:type"]').content, 'article')
    assert.equal(document.querySelector('meta[name="twitter:card"]').content, 'summary_large_image')
    assert.equal(document.querySelector('main img')?.getAttribute('src'), '/images/guides/guide-prospection-2026.webp')
  }
  if (path === '/guides/cloud') {
    assert.equal(document.querySelectorAll('.guide-section').length, 21)
    assert.ok(document.querySelector('#partie-18'))
    assert.ok(document.querySelector('#faq')?.textContent.includes(
      'La meilleure architecture pour lancer une application est donc rarement celle qui pourrait théoriquement supporter cent millions d’utilisateurs',
    ))
    assert.equal(document.title, 'Cloud 2026 : le guide complet du cloud computing')
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'Comprendre le cloud en 2026 : serveurs, réseau, Docker, Kubernetes, CI/CD, sécurité, observabilité, coûts, IA et architectures modernes.',
    )
    assert.equal(document.querySelector('meta[name="keywords"]').content, 'cloud')
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'Cloud 2026 : Guide complet')
    assert.equal(document.querySelector('link[rel="canonical"]').href, 'https://altruisme.dev/guides/cloud')
    assert.equal(document.querySelector('meta[property="og:title"]').content, 'Cloud 2026 : le guide complet')
    assert.equal(
      document.querySelector('meta[property="og:description"]').content,
      'Comprendre et maîtriser le cloud en 2026 : infrastructure, Docker, Kubernetes, réseau, sécurité, CI/CD, observabilité, coûts et intelligence artificielle.',
    )
    assert.equal(document.querySelector('meta[property="og:url"]').content, 'https://altruisme.dev/guides/cloud')
    assert.equal(document.querySelector('meta[property="og:type"]').content, 'article')
    assert.equal(document.querySelector('meta[name="twitter:card"]').content, 'summary_large_image')
    assert.equal(document.querySelector('main img')?.getAttribute('src'), '/images/guides/guide-cloud-2026.webp')
  }
  if (path === '/') {
    assert.equal(document.querySelectorAll('.media-news-list article').length, 2)
    assert.equal(document.querySelector('.media-feature'), null)
    assert.equal(
      document.querySelector('.media-news-list .media-arrow-link')?.getAttribute('href'),
      '/actualites/semaine-47-2026',
    )
    assert.equal(document.querySelector('.media-resource .base-button')?.getAttribute('href'), '/checklist')
    assert.equal(document.querySelectorAll('nav[aria-label="Navigation principale"] a[href="/checklist"]').length, 1)
  }
  if (path === '/actualites') {
    assert.equal(document.querySelectorAll('main article').length, 9)
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'Actu Tech de la semaine')
    assert.equal(
      document.querySelector('main article h2')?.textContent.trim(),
      'Actu Tech de la semaine #47 : GTA VI pulvérise tous les records',
    )
    assert.equal(document.querySelector('main article img'), null)
    assert.equal(
      document.querySelector('main article a')?.getAttribute('href'),
      '/actualites/semaine-47-2026',
    )
    assert.equal(document.querySelectorAll('script[type="application/ld+json"]').length, 0)
  }
  if (['/actualites/semaine-39-2026', '/actualites/semaine-40-2026', '/actualites/semaine-41-2026', '/actualites/semaine-42-2026', '/actualites/semaine-43-2026', '/actualites/semaine-44-2026', '/actualites/semaine-45-2026', '/actualites/semaine-46-2026', '/actualites/semaine-47-2026'].includes(path)) {
    const publishedAt = path.endsWith('semaine-39-2026') ? '2026-09-26'
      : path.endsWith('semaine-40-2026') ? '2026-10-02'
        : path.endsWith('semaine-41-2026') ? '2026-10-10'
          : path.endsWith('semaine-42-2026') ? '2026-10-17'
            : path.endsWith('semaine-43-2026') ? '2026-10-23'
              : path.endsWith('semaine-44-2026') ? '2026-10-31'
                : path.endsWith('semaine-45-2026') ? '2026-11-07'
                  : path.endsWith('semaine-46-2026') ? '2026-11-17' : '2026-11-21'
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
  if (path === '/actualites/semaine-47-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-47-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\*|`/g, '').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #47 : GTA VI pulvérise tous les records')
    assert.equal(document.querySelector('meta[name="description"]').content,
      'GTA VI bat tous les records, Anthropic réussit une IPO historique, Signal se protège des agents IA et OVHcloud pousse la souveraineté européenne.')
    assert.equal(document.querySelector('main h1')?.textContent.trim(),
      'Actu Tech de la semaine #47 : GTA VI pulvérise tous les records')
    assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
      'https://altruisme.dev/actualites/semaine-47-2026')
    assert.equal(document.querySelector('meta[property="og:title"]').content,
      'Actu Tech de la semaine #47 : GTA VI pulvérise tous les records')
    assert.equal(document.querySelector('meta[property="og:description"]').content,
      'GTA VI devient le plus gros lancement du divertissement, Anthropic entre en Bourse et la bataille autour des agents, des puces et du Cloud s’intensifie.')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #47 — Altruisme.DEV')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-47-2026.webp')
    assert.equal(document.querySelector('main img')?.getAttribute('alt'),
      'Actu Tech de la semaine #47 : GTA VI pulvérise tous les records')
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a')].map((link) => [link.textContent, link.href, link.target, link.rel]),
      [
        ['32,5 millions d’unités', 'https://www.reuters.com/lifestyle/take-two-set-shatter-sales-records-gta-vi-launches-massive-fanfare-2026-11-19/', '_blank', 'noopener noreferrer'],
        ['81 milliards de dollars', 'https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/', '_blank', 'noopener noreferrer'],
        ['nouvelles protections', 'https://signal.org/blog/protecting-your-privacy/', '_blank', 'noopener noreferrer'],
        ['nouvelles règles', 'https://www.reuters.com/legal/litigation/us-issues-rule-protect-advanced-ai-chips-being-accessed-remotely-2026-11-16/', '_blank', 'noopener noreferrer'],
        ['55 nouveautés Cloud et IA', 'https://corporate.ovhcloud.com/fr-ma/newsroom/news/ovh-ai-turn-55-products/', '_blank', 'noopener noreferrer'],
      ],
    )
    assert.equal(document.querySelector('nav[aria-label="Navigation entre les éditions"] a')?.getAttribute('href'),
      '/actualites/semaine-46-2026')
  }
  if (path === '/actualites/semaine-46-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-46-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\*\*|`/g, '').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #46 : NVIDIA perd Jensen Huang')
    assert.equal(document.querySelector('meta[name="description"]').content,
      'Jensen Huang quitte NVIDIA, ChatGPT Wallet arrive, Microsoft subit une panne majeure et AMD investit dans le quantique : l’actu Tech de la semaine #46.')
    assert.equal(document.querySelector('meta[property="og:title"]').content,
      'Actu Tech de la semaine #46 : NVIDIA perd l’homme qui a façonné le boom de l’IA')
    assert.equal(document.querySelector('meta[property="og:description"]').content,
      'Le départ de Jensen Huang secoue NVIDIA pendant qu’OpenAI donne un moyen de paiement aux agents, Microsoft tombe en panne et AMD pousse le quantique.')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #46 — Altruisme.DEV')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-46-2026.webp')
    assert.equal(document.querySelector('main img')?.getAttribute('alt'),
      'Actu Tech de la semaine #46 : NVIDIA perd l’homme qui a façonné le boom de l’IA')
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a')].map((link) => [link.textContent, link.href, link.target, link.rel]),
      [
        ['4,3 % de l’action NVIDIA', 'https://www.reuters.com/business/retail-consumer/nvidia-ceo-jensen-huang-step-down-big-blow-ai-boom-2026-11-12/', '_blank', 'noopener noreferrer'],
        ['ChatGPT Wallet', 'https://openai.com/index/introducing-chatgpt-wallet/', '_blank', 'noopener noreferrer'],
        ['importante interruption', 'https://www.reuters.com/commentary/breakingviews/microsoft-outage-will-supercharge-backup-plans-2026-11-13/', '_blank', 'noopener noreferrer'],
        ['PsiQuantum', 'https://www.reuters.com/business/amd-invest-psiquantum-advance-quantum-computing-infrastructure-2026-11-12/', '_blank', 'noopener noreferrer'],
        ['technologie d’estimation d’âge', 'https://about.fb.com/news/2026/11/expanding-teen-account-protections-to-teens-around-the-world/', '_blank', 'noopener noreferrer'],
      ],
    )
    assert.equal(document.querySelector('nav[aria-label="Navigation entre les éditions"] a')?.getAttribute('href'),
      '/actualites/semaine-45-2026')
  }
  if (path === '/actualites/semaine-45-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-45-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\*\*|`/g, '').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #45 : Tesla enterre son pari Cybertruck')
    assert.equal(document.querySelector('meta[name="description"]').content,
      'Tesla réduit le Cybertruck, OpenAI muscle la cybersécurité, Microsoft encadre les agents et Google mise sur Qualcomm : l’actu Tech de la semaine #45.')
    assert.equal(document.querySelector('meta[property="og:title"]').content,
      'Actu Tech de la semaine #45 : Tesla enterre son pari Cybertruck')
    assert.equal(document.querySelector('meta[property="og:description"]').content,
      'Tesla prépare la fin du Cybertruck, OpenAI industrialise la recherche de vulnérabilités et Microsoft renforce les permissions des agents IA.')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #45 — Altruisme.DEV')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-45-2026.webp')
    assert.equal(document.querySelector('main img')?.getAttribute('alt'),
      'Actu Tech de la semaine #45 : Tesla enterre son pari Cybertruck')
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a')].map((link) => [link.textContent, link.href, link.target, link.rel]),
      [
        ['mi-2027', 'https://www.reuters.com/business/autos-transportation/tesla-wind-down-cybertruck-production-texas-gigafactory-next-year-musk-says-2026-11-06/', '_blank', 'noopener noreferrer'],
        ['GPT-6 Cyber', 'https://openai.com/fr-FR/index/introducing-gpt-6-cyber/', '_blank', 'noopener noreferrer'],
        ['Dynamic Permissions', 'https://www.microsoft.com/en-us/security/blog/2026/11/05/whats-new-in-microsoft-security-november-2026/', '_blank', 'noopener noreferrer'],
        ['548 millions de dollars d’actions Qualcomm', 'https://www.reuters.com/business/alphabet-discloses-548-million-worth-qualcomm-stake-2026-11-06/', '_blank', 'noopener noreferrer'],
        ['220 millions de dollars', 'https://www.atg.wa.gov/news/news-releases/gm-pay-220m-sharing-drivers-private-data-case-co-led-washington', '_blank', 'noopener noreferrer'],
      ],
    )
    assert.equal(document.querySelector('nav[aria-label="Navigation entre les éditions"] a')?.getAttribute('href'),
      '/actualites/semaine-44-2026')
  }
  if (path === '/actualites/semaine-44-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-44-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\*\*|`/g, '').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #44 : la facture de l’IA rattrape Big Tech')
    assert.equal(document.querySelector('meta[name="description"]').content,
      'Big Tech dépense plus que jamais dans l’IA, Google lance Gemini 4 Carbon, Apple passe au tactile et le Web prépare de nouvelles règles pour l’entraînement IA.')
    assert.equal(document.querySelector('meta[property="og:title"]').content,
      'Actu Tech de la semaine #44 : la facture de l’IA rattrape Big Tech')
    assert.equal(document.querySelector('meta[property="og:description"]').content,
      'Les géants de la Tech brûlent des centaines de milliards dans l’IA, Google pousse la cyber avec Gemini 4 Carbon et la Chine durcit le contrôle sur ses technologies stratégiques.')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #44 — Altruisme.DEV')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-44-2026.webp')
    assert.equal(document.querySelector('main img')?.getAttribute('alt'),
      'Actu Tech de la semaine #44 : la facture de l’IA rattrape Big Tech')
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a')].map((link) => [link.textContent, link.href, link.target, link.rel]),
      [
        ['556,9 milliards de dollars', 'https://www.reuters.com/legal/transactional/big-tech-returns-smallest-share-cash-shareholders-15-years-given-ai-spending-2026-10-30/', '_blank', 'noopener noreferrer'],
        ['Gemini 4 Carbon', 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/', '_blank', 'noopener noreferrer'],
        ['Touch sur Mac', 'https://www.apple.com/newsroom/2026/10/apple-unveils-groundbreaking-macbook-pro-with-proled-xdr-display/', '_blank', 'noopener noreferrer'],
        ['signal commun dans robots.txt', 'https://openai.com/index/helping-websites-express-ai-training-preferences/', '_blank', 'noopener noreferrer'],
        ['23 technologies liées à l’intelligence artificielle', 'https://www.reuters.com/business/retail-consumer/chinas-new-export-curbs-draw-line-around-its-ai-crown-jewels-2026-10-28/', '_blank', 'noopener noreferrer'],
      ],
    )
    assert.equal(document.querySelector('nav[aria-label="Navigation entre les éditions"] a')?.getAttribute('href'),
      '/actualites/semaine-43-2026')
  }
  if (path === '/actualites/semaine-43-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-43-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\*\*|`/g, '').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #43 : PHP2Shell secoue le Web')
    assert.equal(document.querySelector('meta[name="description"]').content,
      'PHP2Shell, puces IA, OpenAI chez Google Cloud, lunettes Meta et ChatGPT chez Uber : découvre les actualités Tech à retenir de la semaine #43.')
    assert.equal(document.querySelector('meta[property="og:title"]').content,
      'Actu Tech de la semaine #43 : PHP2Shell secoue le Web')
    assert.equal(document.querySelector('meta[property="og:description"]').content,
      'Deux failles critiques secouent PHP, Amazon attaque le verrou logiciel de NVIDIA, OpenAI arrive chez Google Cloud et Uber déploie ChatGPT à grande échelle.')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #43 — Altruisme.DEV')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-43-2026.webp')
    assert.equal(document.querySelector('main img')?.getAttribute('alt'),
      'Actu Tech de la semaine #43 : PHP2Shell secoue le Web')
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a')].map((link) => [link.textContent, link.href, link.target, link.rel]),
      [
        ['quatre nouvelles versions de sécurité', 'https://www.php.net/', '_blank', 'noopener noreferrer'],
        ['Patch the Planet', 'https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/', '_blank', 'noopener noreferrer'],
        ['TorchNeuron', 'https://aws.amazon.com/about-aws/whats-new/2026/10/aws-announce-native-pytorch-support-trainium/', '_blank', 'noopener noreferrer'],
        ['Model Garden de Google Cloud', 'https://openai.com/index/openai-models-google-cloud/', '_blank', 'noopener noreferrer'],
        ['ChatGPT Work', 'https://openai.com/index/uber-chatgpt-work-rollout/', '_blank', 'noopener noreferrer'],
      ],
    )
    assert.equal(document.querySelector('.news-body code')?.textContent, 'mod_php')
    assert.equal(document.querySelector('nav[aria-label="Navigation entre les éditions"] a')?.getAttribute('href'),
      '/actualites/semaine-42-2026')
  }
  if (path === '/actualites/semaine-42-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-42-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #42 : Google s’attaque au grand verrou du quantique')
    assert.equal(document.querySelector('meta[name="description"]').content,
      'Google avance sur le quantique, Meta muscle ses modèles IA, Apple pousse la maison connectée et les puces restent sous tension : l’actu Tech de la semaine #42.')
    assert.equal(document.querySelector('meta[property="og:title"]').content,
      'Actu Tech de la semaine #42 : Google s’attaque au grand verrou du quantique')
    assert.equal(document.querySelector('meta[property="og:description"]').content,
      'Google progresse sur la correction d’erreur quantique, Meta relance la course aux modèles, Apple accélère dans la maison connectée et la demande en puces reste explosive.')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #42 — Altruisme.DEV')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-42-2026.webp')
    assert.equal(document.querySelector('main img')?.getAttribute('alt'),
      'Actu Tech de la semaine #42 : Google s’attaque au grand verrou du quantique')
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a')].map((link) => [link.textContent, link.href, link.target, link.rel]),
      [
        ['magic state cultivation', 'https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/', '_blank', 'noopener noreferrer'],
        ['Muse Wonder et Muse Wonder Full', 'https://about.fb.com/news/2026/10/introducing-muse-wonder-models/', '_blank', 'noopener noreferrer'],
        ['accédé à des systèmes réels d’entreprises indiennes', 'https://www.reuters.com/legal/litigation/rogue-ai-agents-broke-into-indian-firms-live-systems-government-says-2026-10-16/', '_blank', 'noopener noreferrer'],
        ['Apple Home Collection', 'https://www.apple.com/fr/newsroom/2026/10/introducing-apple-home-collection-a-new-lineup-of-smart-home-accessories/', '_blank', 'noopener noreferrer'],
        ['sixième trimestre consécutif de bénéfice record', 'https://www.reuters.com/world/asia-pacific/tsmc-expected-report-sixth-straight-quarter-record-profit-thanks-ai-boom-2026-10-14/', '_blank', 'noopener noreferrer'],
      ],
    )
    assert.equal(document.querySelector('nav[aria-label="Navigation entre les éditions"] a')?.getAttribute('href'),
      '/actualites/semaine-41-2026')
  }
  if (path === '/actualites/semaine-41-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-41-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\r?\n/g, ' '),
      ),
    )
    assert.equal(document.title, 'Actu Tech semaine #41 : Google veut faire de Gemini un collègue')
    assert.equal(document.querySelector('meta[name="description"]').content,
      'Gemini agent, IA locale, cybersécurité, traçabilité des contenus et datacenters : découvre les actualités Tech à retenir de la semaine #41.')
    assert.equal(document.querySelector('meta[property="og:title"]').content,
      'Actu Tech de la semaine #41 : Google veut faire de Gemini un collègue')
    assert.equal(document.querySelector('meta[property="og:description"]').content,
      'Google transforme Gemini en agent de travail, Microsoft pousse l’IA locale et la sécurité devient une couche essentielle de l’écosystème agentique.')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content,
      'Actu Tech de la semaine #41 — Altruisme.DEV')
    assert.equal(document.querySelector('main img')?.getAttribute('src'),
      '/images/news/actu-tech-semaine-41-2026.webp')
    assert.deepEqual(
      [...document.querySelectorAll('.news-body a[href^="http"]')].map((link) => [link.textContent, link.href, link.target]),
      [
        ['agent universel pour le travail', 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/', '_blank'],
        ['intelligence hybride', 'https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/', '_blank'],
        ['Cyber Mission', 'https://www.anthropic.com/news/anthropic-cyber-mission', '_blank'],
        ['textGrain', 'https://openai.com/index/eu-text-provenance/', '_blank'],
        ['abandonné cette semaine son projet d’introduction en Bourse', 'https://www.reuters.com/world/asia-pacific/australian-nvidia-backed-ai-data-centre-operator-firmus-shelves-ipo-2026-10-08/', '_blank'],
      ],
    )
  }
  if (path === '/actualites/semaine-40-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-40-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p:not(.news-sources)')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/g, '$1').replace(/\r?\n/g, ' '),
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
      source.split(/\r?\n/).filter((line) => line.trim()).map((line) =>
        line.replace(/\[([^\]]+)\]\(\/[^)]+\)/g, '$1'),
      ),
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
    assert.equal(document.title, 'Checklist SEO gratuite : 9 points clés | Altruisme.DEV')
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'Télécharge notre checklist SEO gratuite : 9 points pour identifier les problèmes de ton site et améliorer ta visibilité sur Google et les moteurs IA.',
    )
    assert.equal(document.querySelector('meta[property="og:title"]').content, 'Checklist SEO gratuite — 9 points pour ton site')
    assert.equal(
      document.querySelector('meta[property="og:description"]').content,
      'Identifie les freins à ton référencement et découvre les 9 vérifications essentielles pour améliorer ta visibilité sur Google et les moteurs IA.',
    )
    assert.equal(document.querySelector('meta[property="og:type"]').content, 'website')
    assert.equal(document.querySelector('meta[property="og:url"]').content, 'https://altruisme.dev/checklist')
    assert.equal(document.querySelector('meta[property="og:site_name"]').content, 'Altruisme.DEV')
    assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), 'https://altruisme.dev/checklist')
    assert.equal(document.querySelector('meta[name="robots"]').content, 'index, follow')
    assert.equal(document.documentElement.lang, 'fr')
    assert.equal(document.querySelector('meta[property="og:image"]').content, 'https://altruisme.dev/images/checklist-seo-og.png')
    assert.equal(document.querySelector('meta[property="og:image:alt"]').content, 'Checklist SEO gratuite : les 9 points essentiels pour ton site')
    assert.equal(document.querySelector('meta[name="twitter:card"]').content, 'summary_large_image')
    assert.equal(document.querySelector('meta[name="twitter:image"]').content, 'https://altruisme.dev/images/checklist-seo-og.png')
    assert.equal(document.querySelector('meta[name="twitter:image:alt"]').content, 'Checklist SEO gratuite : les 9 points essentiels pour ton site')
    assert.equal(document.body.querySelector('img[src="/images/checklist-seo-og.png"]'), null)
    await access(resolve(output, 'images/checklist-seo-og.png'))
    assert.equal(document.querySelector('meta[name="twitter:title"]').content, 'Checklist SEO gratuite — 9 points pour ton site')
    assert.equal(
      document.querySelector('meta[name="twitter:description"]').content,
      'Identifie les freins à ton référencement et découvre les 9 vérifications essentielles pour améliorer ta visibilité sur Google et les moteurs IA.',
    )
    assert.equal(document.querySelector('.launch-hero .launch-eyebrow')?.textContent.trim(), 'La checklist SEO')
    assert.equal(document.querySelector('h1')?.textContent.replace(/\s+/g, ' ').trim(), "Ton site mérite d'être trouvé.")
    assert.equal(document.querySelector('.launch-subtitle')?.textContent.trim(), 'Fais le point sur ta visibilité.')
    assert.equal(
      document.querySelector('.launch-lead')?.textContent.trim(),
      'Ton site est en ligne, mais est-il vraiment visible ? Découvre les 9 points essentiels à vérifier pour améliorer ton référencement sur Google et ta visibilité dans les moteurs IA.',
    )
    assert.equal(document.querySelector('#formulaire .launch-form-title')?.textContent.trim(), 'Reçois la checklist SEO gratuitement.')
    assert.equal(document.querySelector('#formulaire .launch-external-placeholder p')?.textContent.trim(), 'Autorise les contenus externes pour afficher le formulaire Brevo.')
    assert.equal(document.querySelector('#formulaire .base-button')?.textContent.trim(), 'Gérer mes préférences')
    assert.equal(document.querySelector('#formulaire iframe'), null)
    assert.equal(document.querySelector('#formulaire form'), null)
    assert.equal(document.querySelector('.launch-sheet-title')?.textContent.replace(/\u00ad/g, '').trim(), "Fondamentaux d'un SEO solide.")
    assert.equal(document.querySelector('.launch-sheet-subtitle')?.textContent.trim(), '9 vérifications pour identifier les problèmes et savoir par où commencer.')
    assert.deepEqual(
      [...document.querySelectorAll('.launch-sheet-step')].map((item) => [
        item.children[1]?.textContent.trim(),
        item.querySelector('small')?.textContent.trim(),
      ]),
      [
        ['Vérifier l’indexation', '01'],
        ['Identifier les bonnes requêtes', '03'],
        ['Optimiser les pages', '05'],
        ['Mesurer les résultats', '09'],
      ],
    )
    assert.equal(document.querySelector('.launch-sheet-foot')?.textContent.trim(), "Comprends ce qui bloque. Passe à l'action.")
    assert.equal(document.querySelector('#launch-steps-title')?.textContent.replace(/\s+/g, ' ').trim(), '9 points pour faire le diagnostic de ton SEO')
    assert.deepEqual(
      [...document.querySelectorAll('.launch-step p')].map((item) => item.textContent.trim()),
      [
        'Vérifier l’indexation',
        'Identifier les freins techniques',
        'Comprendre les recherches de ta cible',
        'Prioriser les pages stratégiques',
        'Optimiser les contenus',
        'Améliorer le maillage interne',
        'Renforcer la crédibilité du site',
        'Penser aussi aux moteurs IA',
        'Mesurer et ajuster',
      ],
    )
    assert.equal(document.querySelectorAll('.launch-step').length, 9)
    assert.equal(document.querySelector('.launch-projects .launch-eyebrow')?.textContent.trim(), 'Pourquoi Altruisme.DEV')
    assert.equal(document.querySelector('#launch-projects-title')?.textContent.replace(/\s+/g, ' ').trim(), 'Du SEO concret, pas des recettes miracles.')
    assert.deepEqual(
      [...document.querySelectorAll('.launch-projects-grid > div:last-child > .launch-lead')].map((item) => item.textContent.trim()),
      [
        'Altruisme.DEV est un média indépendant consacré à la tech, à l’acquisition et à l’entrepreneuriat.',
        'Nos contenus s’appuient sur l’expérience terrain en développement, produit et acquisition.',
        'Cette checklist propose une approche pratique du référencement : vérifier les bases, repérer les freins et choisir les prochaines actions avec méthode.',
      ],
    )
    assert.deepEqual(
      [...document.querySelectorAll('.launch-project-list > span')].map((item) => [
        item.querySelector('strong')?.textContent,
        item.querySelector('small')?.textContent,
      ]),
      [
        ['Des années d’expérience dans la tech', 'Développement, produit et acquisition appliqués à la visibilité des sites.'],
        ['Une approche terrain', 'Des vérifications concrètes pour prioriser les actions SEO.'],
        ['Indépendant', 'Une lecture claire du référencement, sans recette miracle ni jargon inutile.'],
      ],
    )
    assert.equal(document.querySelector('.launch-faq .launch-eyebrow')?.textContent.trim(), 'Questions fréquentes')
    assert.equal(document.querySelector('#launch-faq-title')?.textContent.trim(), 'Avant de commencer')
    assert.deepEqual(
      [...document.querySelectorAll('.launch-faq-item')].map((item) => [
        item.querySelector('summary span')?.textContent.trim(),
        item.querySelector('p')?.textContent.trim(),
      ]),
      [
        ['À qui s’adresse cette checklist SEO ?', 'À toi si tu veux comprendre la visibilité de ton site et savoir quels points vérifier en priorité, que tu sois indépendant, entrepreneur ou responsable d’un projet.'],
        ['Faut-il avoir des connaissances techniques ?', 'Non. Les vérifications sont accessibles sans être spécialiste du SEO. Certaines corrections techniques pourront demander de l’aide, mais tu sauras quoi regarder.'],
        ['Est-ce utile si mon site est déjà en ligne ?', 'Oui. Elle t’aide à faire le point sur l’indexation, les contenus et la structure de ton site pour repérer ce qui peut être amélioré.'],
        ['Est-ce vraiment gratuit ?', 'Oui. Tu reçois la checklist gratuitement en laissant ton adresse email. Aucun paiement n’est demandé.'],
        ['Qu’est-ce que je vais recevoir ensuite ?', 'La checklist, puis ponctuellement les prochains contenus d’Altruisme.DEV : guides, ressources et actualités autour de la tech, de l’acquisition et de l’entrepreneuriat.'],
      ],
    )
    assert.ok(document.querySelector('.launch-faq').compareDocumentPosition(document.querySelector('.launch-final')) & 4)
    assert.equal(document.querySelector('.launch-final .base-button')?.getAttribute('href'), '/checklist#formulaire')
    assert.equal(document.querySelector('#launch-final-title')?.textContent.replace(/\s+/g, ' ').trim(), 'Un bon référencement commence par un bon diagnostic.')
    assert.equal(document.querySelector('.launch-final-inner > p:not(.launch-eyebrow)')?.textContent.trim(), 'Identifie les points à améliorer et avance avec méthode.')
  }
  if (path === '/checklist/etapes') {
    assert.equal(document.querySelector('meta[name="robots"]').content, 'noindex, follow')
    assert.equal(document.querySelectorAll('.checklist-steps li').length, 9)
  }
}
assert.equal(legacySteps.size, 41)
for (const retired of [
  'contact', 'guides/freelance-2026', 'communaute',
  'guides/ia', 'guides/esn', 'guides/marketplace', 'guides/api', 'guides/typescript',
  'guides/python', 'guides/youtube', 'guides/newsletter', 'guides/landing-page',
]) {
  await assert.rejects(access(resolve(output, `${retired}.html`)))
}
const sitemap = await readFile(resolve(output, 'sitemap.xml'), 'utf8')
const sitemapDocument = new JSDOM(sitemap, { contentType: 'application/xml' }).window.document
assert.equal(sitemapDocument.querySelector('parsererror'), null, 'Invalid sitemap XML')
const sitemapUrls = [...sitemapDocument.getElementsByTagNameNS('http://www.sitemaps.org/schemas/sitemap/0.9', 'loc')]
  .map((element) => element.textContent)
assert.equal(sitemapUrls.length, new Set(sitemapUrls).size, 'Duplicate sitemap URL')
assert.deepEqual(new Set(sitemapUrls), indexableUrls, 'Sitemap must match indexable canonical pages')

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
const redirects = await readFile(resolve(output, '_redirects'), 'utf8')
assert.ok(redirects.includes('/communaute /checklist 301'))
assert.ok(redirects.includes('/guides/cloud-2026 /guides/cloud 301'))
console.log(
  `Verified initial HTML, metadata and assets for ${prerenderPaths.length} pages and the 404 page.`,
)
