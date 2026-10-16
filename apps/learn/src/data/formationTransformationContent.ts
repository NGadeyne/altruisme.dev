type SplitTitle = { lead: string; accent: string }

export type FormationTransformationContent = {
  title: SplitTitle
  before: { lines: readonly [string, string, string]; description: string }
  afterDescription: string
}

// Ce contraste présente des questions et des thèmes, pas un programme déjà arrêté.
export const formationTransformationContent: Record<string, FormationTransformationContent> = {
  seo: {
    title: { lead: 'Passer de sujets isolés', accent: 'à une visibilité mieux pensée' },
    before: {
      lines: ['Des recherches à comprendre', 'Des pages à travailler', 'Des priorités à choisir'],
      description:
        'Difficile de savoir par où commencer quand chaque page semble pouvoir être améliorée.',
    },
    afterDescription:
      'Recherches, contenus et visibilité donnent un premier cadre pour relier les décisions SEO.',
  },
}
