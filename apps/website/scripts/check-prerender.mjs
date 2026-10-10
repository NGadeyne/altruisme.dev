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
    assert.equal(document.querySelectorAll('.guide-section').length, 21)
    assert.ok(document.querySelector('#partie-18'))
    assert.ok(document.querySelector('#faq')?.textContent.includes(
      'Trouvez le prochain problème le plus important, résolvez-le correctement, mesurez ce qui change puis recommencez.',
    ))
    assert.equal(document.title, 'SEO 2026 : le guide complet pour réussir son référencement')
    assert.equal(
      document.querySelector('meta[name="description"]').content,
      'Le guide complet du SEO en 2026 : stratégie, mots-clés, contenu, technique, indexation, backlinks, autorité, IA et mesure des performances.',
    )
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'SEO 2026 : Guide complet')
    assert.equal(document.querySelector('link[rel="canonical"]').href, 'https://altruisme.dev/guides/seo')
    assert.equal(document.querySelector('meta[property="og:title"]').content, 'SEO 2026 : le guide complet')
    assert.equal(
      document.querySelector('meta[property="og:description"]').content,
      'Comprendre et maîtriser le SEO en 2026 : stratégie, contenu, technique, indexation, autorité, backlinks, IA et croissance organique durable.',
    )
    assert.equal(document.querySelector('meta[property="og:url"]').content, 'https://altruisme.dev/guides/seo')
    assert.equal(document.querySelector('meta[property="og:type"]').content, 'article')
    assert.equal(document.querySelector('meta[name="twitter:card"]').content, 'summary_large_image')
    assert.equal(document.querySelector('main img')?.getAttribute('src'), '/images/guides/guide-seo-2026.webp')
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
  if (path === '/') {
    assert.equal(document.querySelectorAll('.media-news-list article').length, 2)
    assert.equal(document.querySelector('.media-feature'), null)
    assert.equal(
      document.querySelector('.media-news-list .media-arrow-link')?.getAttribute('href'),
      '/actualites/semaine-41-2026',
    )
    assert.equal(document.querySelector('.media-resource .base-button')?.getAttribute('href'), '/checklist')
    assert.equal(document.querySelectorAll('nav[aria-label="Navigation principale"] a[href="/checklist"]').length, 1)
  }
  if (path === '/actualites') {
    assert.equal(document.querySelectorAll('main article').length, 3)
    assert.equal(document.querySelector('main h1')?.textContent.trim(), 'Actu Tech de la semaine')
    assert.equal(
      document.querySelector('main article h2')?.textContent.trim(),
      'Actu Tech de la semaine #41 : Google veut faire de Gemini un collègue',
    )
    assert.equal(document.querySelector('main article img'), null)
    assert.equal(
      document.querySelector('main article a')?.getAttribute('href'),
      '/actualites/semaine-41-2026',
    )
    assert.equal(document.querySelectorAll('script[type="application/ld+json"]').length, 0)
  }
  if (['/actualites/semaine-39-2026', '/actualites/semaine-40-2026', '/actualites/semaine-41-2026'].includes(path)) {
    const publishedAt = path.endsWith('semaine-39-2026') ? '2026-09-26'
      : path.endsWith('semaine-40-2026') ? '2026-10-02' : '2026-10-10'
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
  if (path === '/actualites/semaine-41-2026') {
    const source = await readFile(resolve('src/content/news/actu-tech-semaine-41-2026.txt'), 'utf8')
    const publishedBlocks = [...document.querySelectorAll('.news-body h2, .news-body p')]
      .map((element) => element.textContent.trim())
    assert.deepEqual(
      publishedBlocks,
      source.trim().split(/\r?\n\s*\r?\n/).map((block) =>
        block.replace(/^## /, '').replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, '$1').replace(/\r?\n/g, ' '),
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
      [...document.querySelectorAll('.news-body a')].map((link) => [link.textContent, link.href, link.target]),
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
    assert.equal(document.querySelector('form .base-button')?.textContent.trim(), 'Recevoir la checklist gratuitement')
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
