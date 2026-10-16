import catalogData from './catalog.json'

export const categories = {
  acquerir: { title: 'Acquérir', description: 'Visibilité, messages et relations.' },
  construire: { title: 'Construire', description: 'Produits, interfaces et technologies.' },
  gerer: { title: 'Gérer', description: 'Décisions, organisation et pilotage.' },
} as const

export const availabilityLabels = { 'coming-soon': 'Bientôt disponible' } as const

export type Category = keyof typeof categories
export type OfferType = keyof typeof catalogData
export type Offer = {
  slug: string
  title: string
  tagline?: string
  description: string
  category: Category
  availability: 'coming-soon'
  hasLandingPage: boolean
  formationSlugs?: string[]
}

// Les formations restent indépendantes et peuvent être référencées dans plusieurs parcours.
export const catalog: Record<OfferType, Offer[]> = {
  formations: catalogData.formations.map((offer) => ({
    ...offer,
    category: offer.category as Category,
    availability: 'coming-soon',
    hasLandingPage: 'landingPage' in offer && offer.landingPage === true,
  })),
  packs: [],
  bootcamps: [],
}

export function getOffer(type: OfferType, slug: string): Offer | undefined {
  return catalog[type].find((offer) => offer.slug === slug)
}
