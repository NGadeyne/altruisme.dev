export interface SeoExternalResource {
  title: string
  description: string
  url: string
}

export const seoExternalResources: Record<number, SeoExternalResource[]> = {
  1: [
    {
      title: 'Comment fonctionne la recherche Google',
      description: 'Comprends les étapes d’exploration, d’indexation et de classement des résultats.',
      url: 'https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr',
    },
    {
      title: 'Guide SEO pour débutants de Google',
      description: 'Retrouve les principes fondamentaux du référencement naturel.',
      url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr',
    },
  ],
  2: [
    {
      title: 'Découvrir Google Search Console',
      description: 'Découvre l’outil et ses principales fonctionnalités.',
      url: 'https://support.google.com/webmasters/answer/9128668?hl=fr',
    },
    {
      title: "Utiliser l’outil d’inspection d’URL",
      description: 'Vérifie l’accessibilité et l’indexation d’une page.',
      url: 'https://support.google.com/webmasters/answer/9012289?hl=fr',
    },
  ],
  3: [
    {
      title: 'Google Trends',
      description: 'Explore les tendances et compare l’intérêt relatif des recherches.',
      url: 'https://trends.google.com/trends/',
    },
    {
      title: 'Rapport Performances de Search Console',
      description: 'Identifie les requêtes sur lesquelles ton site apparaît déjà.',
      url: 'https://support.google.com/webmasters/answer/7576553?hl=fr',
    },
  ],
  4: [
    {
      title: 'Optimiser les balises title',
      description: 'Comprends comment Google génère les titres de ses résultats.',
      url: 'https://developers.google.com/search/docs/appearance/title-link?hl=fr',
    },
    {
      title: 'Optimiser les extraits et meta descriptions',
      description: 'Rédige des descriptions pertinentes et comprends leur affichage.',
      url: 'https://developers.google.com/search/docs/appearance/snippet?hl=fr',
    },
    {
      title: 'Bonnes pratiques concernant les liens',
      description: 'Améliore tes liens internes et leurs textes d’ancrage.',
      url: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr',
    },
  ],
  5: [
    {
      title: 'Comprendre robots.txt',
      description: 'Maîtrise les règles d’exploration de ton site.',
      url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=fr',
    },
    {
      title: 'Créer et envoyer un sitemap',
      description: 'Aide Google à découvrir les URL importantes.',
      url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr',
    },
    {
      title: 'PageSpeed Insights',
      description: 'Analyse les performances et les Core Web Vitals.',
      url: 'https://pagespeed.web.dev/',
    },
  ],
  6: [
    {
      title: 'Créer des contenus utiles et fiables',
      description: 'Comprends les attentes de Google concernant la qualité éditoriale.',
      url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr',
    },
    {
      title: 'Comparer des recherches avec Google Trends',
      description: 'Explore des thèmes pour préparer tes prochains contenus.',
      url: 'https://support.google.com/trends/answer/4359550?hl=fr',
    },
  ],
  7: [
    {
      title: 'Comprendre les bonnes pratiques de liens',
      description: 'Découvre le rôle des liens et des textes d’ancrage.',
      url: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr',
    },
    {
      title: 'Règles Google concernant le spam de liens',
      description: 'Reconnais les pratiques artificielles et risquées.',
      url: 'https://developers.google.com/search/docs/essentials/spam-policies?hl=fr',
    },
  ],
  8: [
    {
      title: 'Comprendre le classement local sur Google',
      description: 'Découvre les critères de pertinence, de distance et de notoriété.',
      url: 'https://support.google.com/business/answer/7091?hl=fr',
    },
    {
      title: "Créer ou revendiquer sa fiche d’établissement",
      description: 'Retrouve les étapes officielles pour gérer ta présence dans Google Maps.',
      url: 'https://support.google.com/business/answer/2911778?hl=fr',
    },
    {
      title: 'Suivre les performances de sa fiche',
      description: 'Apprends à interpréter les interactions avec ton établissement.',
      url: 'https://support.google.com/business/answer/9918094?hl=fr',
    },
  ],
  9: [
    {
      title: 'Fonctionnalités IA de Google et SEO',
      description: 'Comprends la visibilité dans les Aperçus IA et le Mode IA.',
      url: 'https://developers.google.com/search/docs/appearance/ai-features?hl=fr',
    },
    {
      title: 'Documentation officielle des robots OpenAI',
      description: 'Comprends notamment le rôle d’OAI-SearchBot dans ChatGPT Search.',
      url: 'https://developers.openai.com/api/docs/bots',
    },
  ],
  10: [
    {
      title: 'Analyser les performances dans Search Console',
      description: 'Suis les clics, impressions, CTR et positions moyennes.',
      url: 'https://support.google.com/webmasters/answer/7576553?hl=fr',
    },
    {
      title: 'Analyser l’acquisition de trafic dans GA4',
      description: 'Comprends la provenance des visiteurs et les canaux d’acquisition.',
      url: 'https://support.google.com/analytics/answer/12923437?hl=fr',
    },
  ],
}
