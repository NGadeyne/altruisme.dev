import type { GuideDefinition } from '@/types/guide'

export const guides: GuideDefinition[] = [
  {
    slug: 'freelance',
    loadSections: () => import('@/content/guides/freelance').then((module) => module.default),
    title: 'Freelance 2026 : Guide complet',
    description:
      'Construire une activité freelance solide : positionnement, offre, acquisition, vente, TJM, organisation et développement.',
    status: 'available',
    label: 'Freelance',
    edition: '2026',
    seoTitle: 'Freelance 2026 : Guide complet pour devenir freelance | Altruisme.DEV',
    image: '/images/guides/guide-freelance.webp',
    imageSrcset:
      '/images/guides/guide-freelance-640.webp 640w, /images/guides/guide-freelance.webp 1200w',
    author: {
      name: 'Nicolas Gadeyne',
      url: 'https://www.linkedin.com/in/nicolas-gadeyne/',
    },
    publishedAt: '2026-09-19',
    updatedAt: '2026-09-19',
  },
  {
    slug: 'saas',
    title: 'SaaS 2026 : Guide complet',
    description:
      'De l’idée au produit : comprendre le modèle SaaS, valider un problème, construire, lancer, mesurer et faire grandir un produit.',
    status: 'soon',
    label: 'SaaS',
    edition: '2026',
  },
  {
    slug: 'automatisation',
    title: 'Automatisation 2026 : Guide complet',
    description:
      'Concevoir des automatisations utiles, fiables et maintenables pour les produits, les équipes et les opérations.',
    status: 'soon',
    label: 'Automatisation',
    edition: '2026',
  },
  {
    slug: 'esn',
    title: 'ESN 2026 : Guide complet',
    description:
      'Comprendre le modèle ESN, ses métiers, son économie, ses forces, ses limites et ses évolutions.',
    status: 'soon',
    label: 'ESN',
    edition: '2026',
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce 2026 : Guide complet',
    description:
      'Construire une activité e-commerce moderne : modèle, acquisition, produit, marge, opérations et fidélisation.',
    status: 'soon',
    label: 'E-commerce',
    edition: '2026',
  },
  {
    slug: 'ia',
    title: 'IA 2026 : Guide complet',
    description:
      'Comprendre l’IA moderne, ses usages, ses limites et la façon de l’intégrer réellement dans un produit ou une organisation.',
    status: 'soon',
    label: 'IA',
    edition: '2026',
  },
  {
    slug: 'marketplace',
    title: 'Marketplace 2026 : Guide complet',
    description:
      'Comprendre les effets de réseau, la liquidité, la confiance, la monétisation et les défis propres aux marketplaces.',
    status: 'soon',
    label: 'Marketplace',
    edition: '2026',
  },
]

export const guidePath = (guide: GuideDefinition) => `/guides/${guide.slug}`

export const featuredGuides = guides.map((guide) => ({
  ...guide,
  to: guide.status === 'available' ? guidePath(guide) : undefined,
}))
