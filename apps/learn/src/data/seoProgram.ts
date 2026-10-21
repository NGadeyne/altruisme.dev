export interface SeoDurationRange {
  min: number
  max: number
}

interface SeoProgramLesson {
  id: string
  number: number
  title: string
  readingMinutes: SeoDurationRange
}

export interface SeoProgramModule {
  id: string
  number: number
  title: string
  description: string
  lessons: SeoProgramLesson[]
  exercise?: string
  practiceMinutes?: SeoDurationRange
}

export const seoProgram: SeoProgramModule[] = [
  {
    id: 'seo-comprendre-google',
    number: 1,
    title: 'Comprendre Google',
    description: "Comprendre pourquoi certaines pages sont visibles et d'autres non.",
    lessons: [
      {
        id: 'seo-lesson-01',
        number: 1,
        title: 'Le SEO : à quoi ça sert vraiment ?',
        readingMinutes: { min: 10, max: 12 },
      },
      {
        id: 'seo-lesson-02',
        number: 2,
        title: 'Comment Google découvre, indexe et classe les pages',
        readingMinutes: { min: 12, max: 15 },
      },
      {
        id: 'seo-lesson-03',
        number: 3,
        title: "Les fondamentaux d'un référencement efficace",
        readingMinutes: { min: 12, max: 15 },
      },
    ],
    exercise: 'Identifier les pages les plus importantes de son site.',
    practiceMinutes: { min: 10, max: 15 },
  },
  {
    id: 'seo-auditer-site',
    number: 2,
    title: 'Auditer ton site',
    description: 'Savoir utiliser Google Search Console pour établir un premier diagnostic.',
    lessons: [
      {
        id: 'seo-lesson-04',
        number: 4,
        title: 'Installer et découvrir Google Search Console',
        readingMinutes: { min: 10, max: 15 },
      },
      {
        id: 'seo-lesson-05',
        number: 5,
        title: "Vérifier l'indexation et repérer les problèmes",
        readingMinutes: { min: 12, max: 15 },
      },
      {
        id: 'seo-lesson-06',
        number: 6,
        title: 'Analyser les performances et trouver les premiers freins',
        readingMinutes: { min: 12, max: 15 },
      },
    ],
    exercise: "Compléter la checklist d'audit SEO avec les premiers constats.",
    practiceMinutes: { min: 15, max: 20 },
  },
  {
    id: 'seo-mots-cles',
    number: 3,
    title: 'Trouver les bons mots-clés',
    description: 'Choisir les recherches qui correspondent réellement à son activité.',
    lessons: [
      {
        id: 'seo-lesson-07',
        number: 7,
        title: 'Comprendre les intentions de recherche',
        readingMinutes: { min: 12, max: 15 },
      },
      {
        id: 'seo-lesson-08',
        number: 8,
        title: 'Trouver des mots-clés sans outils payants',
        readingMinutes: { min: 12, max: 15 },
      },
      {
        id: 'seo-lesson-09',
        number: 9,
        title: 'Prioriser ses mots-clés et les associer aux bonnes pages',
        readingMinutes: { min: 15, max: 18 },
      },
    ],
    exercise: 'Sélectionner 10 mots-clés pertinents et choisir trois priorités.',
    practiceMinutes: { min: 15, max: 20 },
  },
  {
    id: 'seo-optimiser-pages',
    number: 4,
    title: 'Optimiser tes pages',
    description: 'Savoir optimiser une page pour la rendre plus utile, claire et accessible.',
    lessons: [
      {
        id: 'seo-lesson-10',
        number: 10,
        title: 'Optimiser title, meta description, URL et titres',
        readingMinutes: { min: 12, max: 15 },
      },
      {
        id: 'seo-lesson-11',
        number: 11,
        title: 'Créer un contenu qui répond aux bonnes intentions',
        readingMinutes: { min: 15, max: 18 },
      },
      {
        id: 'seo-lesson-12',
        number: 12,
        title: 'Améliorer la structure et le maillage interne',
        readingMinutes: { min: 15, max: 18 },
      },
    ],
    exercise: 'Optimiser une page existante et documenter les modifications.',
    practiceMinutes: { min: 20, max: 25 },
  },
  {
    id: 'seo-fondamentaux-techniques',
    number: 5,
    title: 'Maîtriser les fondamentaux techniques',
    description: 'Identifier les freins techniques qui peuvent limiter la visibilité de son site.',
    lessons: [
      {
        id: 'seo-lesson-13',
        number: 13,
        title: 'Comprendre et corriger les principaux freins techniques',
        readingMinutes: { min: 15, max: 18 },
      },
      {
        id: 'seo-lesson-14',
        number: 14,
        title: 'Organiser son architecture, ses URL et ses redirections',
        readingMinutes: { min: 15, max: 18 },
      },
      {
        id: 'seo-lesson-15',
        number: 15,
        title: 'Comprendre robots.txt, sitemap et balises canoniques',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-16',
        number: 16,
        title: 'Améliorer PageSpeed, le mobile et les Core Web Vitals',
        readingMinutes: { min: 15, max: 20 },
      },
    ],
    exercise: 'Vérifier les points techniques du site et choisir une première amélioration.',
    practiceMinutes: { min: 20, max: 25 },
  },
  {
    id: 'seo-developper-visibilite',
    number: 6,
    title: 'Construire ta stratégie de contenu',
    description: 'Passer des optimisations isolées à une stratégie de contenus cohérente.',
    lessons: [
      {
        id: 'seo-lesson-17',
        number: 17,
        title: 'Identifier les sujets à fort potentiel',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-18',
        number: 18,
        title: 'Préparer un contenu SEO de qualité',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-19',
        number: 19,
        title: 'Construire une stratégie éditoriale cohérente',
        readingMinutes: { min: 15, max: 20 },
      },
    ],
    exercise: 'Préparer un calendrier de cinq contenus à publier ou améliorer.',
    practiceMinutes: { min: 15, max: 20 },
  },
  {
    id: 'seo-autorite-backlinks',
    number: 7,
    title: 'Développer son autorité et ses backlinks',
    description: 'Comprendre le rôle des liens et développer sa notoriété avec méthode.',
    lessons: [
      {
        id: 'seo-lesson-20',
        number: 20,
        title: "Comprendre l'autorité d'un site et le rôle des backlinks",
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-21',
        number: 21,
        title: 'Obtenir des backlinks pertinents et développer sa notoriété',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-22',
        number: 22,
        title: 'Analyser ses backlinks et éviter les mauvaises pratiques',
        readingMinutes: { min: 15, max: 20 },
      },
    ],
    exercise: 'Identifier cinq sites pertinents et une première opportunité de lien.',
    practiceMinutes: { min: 15, max: 20 },
  },
  {
    id: 'seo-visibilite-geo',
    number: 8,
    title: 'Être visible dans les moteurs IA (GEO)',
    description:
      'Comprendre comment rendre ses contenus accessibles et citables par les moteurs IA.',
    lessons: [
      {
        id: 'seo-lesson-23',
        number: 23,
        title: 'Comprendre comment ChatGPT, Gemini et les moteurs IA utilisent les sources',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-24',
        number: 24,
        title: 'Rendre son site accessible, compréhensible et citable par les IA',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-25',
        number: 25,
        title: 'Mesurer sa visibilité et ses citations dans les moteurs IA',
        readingMinutes: { min: 15, max: 20 },
      },
    ],
    exercise: 'Observer sa visibilité dans les moteurs IA et choisir une amélioration.',
    practiceMinutes: { min: 15, max: 20 },
  },
  {
    id: 'seo-mesurer-progresser',
    number: 9,
    title: 'Mesurer et progresser',
    description: 'Savoir évaluer les progrès et définir les prochaines actions.',
    lessons: [
      {
        id: 'seo-lesson-26',
        number: 26,
        title: 'Mesurer les bons indicateurs SEO',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-27',
        number: 27,
        title: 'Identifier et prioriser les prochaines optimisations',
        readingMinutes: { min: 15, max: 20 },
      },
      {
        id: 'seo-lesson-28',
        number: 28,
        title: "Construire ton plan d'action SEO sur 90 jours",
        readingMinutes: { min: 15, max: 20 },
      },
    ],
    exercise: "Finaliser son plan d'action SEO sur 90 jours.",
    practiceMinutes: { min: 20, max: 30 },
  },
]

export function estimateSeoMinutes(range: SeoDurationRange): number {
  return Math.round((range.min + range.max) / 2)
}

export const seoReadingMinutes = seoProgram.reduce(
  (total, module) =>
    total +
    module.lessons.reduce(
      (minutes, lesson) => minutes + estimateSeoMinutes(lesson.readingMinutes),
      0,
    ),
  0,
)

export const seoPracticeMinutes = seoProgram.reduce(
  (total, module) =>
    total + (module.practiceMinutes ? estimateSeoMinutes(module.practiceMinutes) : 0),
  0,
)

export function getSeoPracticeMinutes(moduleNumber: number): number {
  const range = seoProgram.find((module) => module.number === moduleNumber)?.practiceMinutes
  if (!range) throw new Error(`Mise en pratique SEO introuvable pour le module ${moduleNumber}`)
  return estimateSeoMinutes(range)
}

export function formatSeoMinutes(minutes: number): string {
  return minutes < 60
    ? `${minutes} min`
    : `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, '0')}`
}

export function getSeoLessonSlug(lessonId: string) {
  return lessonId.replace(/^seo-/, '')
}

export function getSeoLessonBySlug(slug: string) {
  return seoProgram
    .flatMap((module) => module.lessons)
    .find((lesson) => getSeoLessonSlug(lesson.id) === slug)
}
