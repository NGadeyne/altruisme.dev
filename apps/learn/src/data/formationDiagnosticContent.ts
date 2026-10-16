type Axis = { title: string; description: string }

export type FormationDiagnosticContent = {
  title: { lead: string; accent: string }
  intro: string
  axes: readonly [Axis, Axis, Axis, Axis, Axis]
}

// Des points de réflexion liés à chaque sujet, sans anticiper le programme détaillé.
export const formationDiagnosticContent: Record<string, FormationDiagnosticContent> = {
  seo: {
    title: { lead: 'Le frein à la visibilité n’est pas toujours', accent: 'là où on le pense' },
    intro:
      'Une page peut traiter le bon sujet et rester difficile à trouver. Plusieurs dimensions se croisent.',
    axes: [
      {
        title: 'Recherches',
        description:
          'Les mots employés ne correspondent pas toujours aux questions de ton audience.',
      },
      {
        title: 'Contenu',
        description: 'Une page utile répond à une intention précise, au bon niveau de détail.',
      },
      {
        title: 'Structure',
        description:
          'Les pages importantes doivent être faciles à parcourir et à relier entre elles.',
      },
      {
        title: 'Technique',
        description: 'L’accès aux pages et leur performance peuvent freiner leur visibilité.',
      },
      {
        title: 'Parcours',
        description: 'Être trouvé ne suffit pas si la suite du parcours reste floue.',
      },
    ],
  },
}
