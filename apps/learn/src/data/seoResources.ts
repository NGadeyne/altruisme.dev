export interface SeoResource {
  number: number
  title: string
  description: string
}

export const seoResources: SeoResource[] = [
  {
    number: 1,
    title: "Checklist d'audit SEO",
    description: 'Contrôles essentiels, anomalies, gravité et priorités.',
  },
  {
    number: 2,
    title: 'Recherche de mots-clés',
    description: 'Tableau des requêtes, intentions, pages cibles et potentiel.',
  },
  {
    number: 3,
    title: "Modèle d'optimisation de page",
    description: 'Analyse avant/après, title, H1, contenu, maillage et CTA.',
  },
  {
    number: 4,
    title: 'Calendrier éditorial',
    description: 'Sujets, intentions, échéances, statuts et liens internes.',
  },
  {
    number: 5,
    title: "Plan d'action SEO sur 90 jours",
    description: 'Actions, priorités, efforts estimés, échéances et résultats attendus.',
  },
]
