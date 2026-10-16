type Theme = { title: string; description: string }

export type FormationLandingContent = {
  tagline: string
  themes: readonly [Theme, Theme, Theme]
}

// Des axes de présentation, pas un programme détaillé : les contenus seront précisés avant l'ouverture.
export const formationLandingContent: Record<string, FormationLandingContent> = {
  seo: {
    tagline: 'Travailler la visibilité organique',
    themes: [
      {
        title: 'Recherches',
        description: 'Comprendre ce que les personnes cherchent et pourquoi.',
      },
      { title: 'Contenus', description: 'Répondre aux intentions utiles avec des pages adaptées.' },
      { title: 'Visibilité', description: 'Donner une place claire aux pages qui comptent.' },
    ],
  },
}
