import type { PlanActionDefinition } from '@/types/learningPlan'

// Catalogue partagé : seul le statut de chaque action est enregistré par apprenant.
export const seoActions: PlanActionDefinition[] = [
  {
    key: 'seo_identify_strategic_pages',
    title: 'Identifier les pages stratégiques de mon site',
    description:
      'Sélectionne les trois pages les plus importantes pour ton activité : celles qui présentent tes offres ou répondent aux besoins essentiels de tes futurs clients.',
    completionCriterion:
      "Avoir sélectionné jusqu'à trois pages prioritaires et compris pourquoi elles sont importantes.",
    moduleId: 'seo-comprendre-google',
    lessonId: 'seo-lesson-03',
    order: 1,
  },
  {
    key: 'seo_setup_search_console',
    title: 'Configurer Google Search Console',
    description:
      'Ajoute ton site à Google Search Console et valide que tu en es bien propriétaire.',
    completionCriterion: 'La propriété du site est validée.',
    moduleId: 'seo-auditer-site',
    lessonId: 'seo-lesson-04',
    order: 2,
  },
  {
    key: 'seo_check_indexation',
    title: "Vérifier l'indexation de mes pages",
    description:
      'Contrôle si tes pages stratégiques sont indexées et note les éventuels problèmes rencontrés.',
    completionCriterion: 'Avoir vérifié au moins trois URL importantes.',
    moduleId: 'seo-auditer-site',
    lessonId: 'seo-lesson-05',
    order: 3,
  },
  {
    key: 'seo_identify_opportunities',
    title: 'Identifier mes premières opportunités SEO',
    description:
      'Explore les rapports de Search Console pour repérer les pages ou recherches intéressantes. Si le site est récent et ne dispose pas encore de données suffisantes, identifie les informations manquantes et les vérifications à prévoir.',
    completionCriterion:
      "Avoir consigné jusqu'à trois premiers constats utiles, ou l'absence actuelle de données.",
    moduleId: 'seo-auditer-site',
    lessonId: 'seo-lesson-06',
    order: 4,
  },
  {
    key: 'seo_identify_search_intents',
    title: 'Définir les intentions de recherche de mes futurs clients',
    description:
      'Identifie trois besoins ou questions que tes futurs clients pourraient exprimer sur Google.',
    completionCriterion: 'Avoir identifié trois intentions cohérentes avec ton activité.',
    moduleId: 'seo-mots-cles',
    lessonId: 'seo-lesson-07',
    order: 5,
  },
  {
    key: 'seo_find_keywords',
    title: 'Trouver 10 mots-clés pertinents',
    description:
      'Recherche dix expressions réellement liées à ton activité, à tes offres ou aux problèmes de tes clients.',
    completionCriterion: 'Disposer d’une première liste de dix requêtes pertinentes.',
    moduleId: 'seo-mots-cles',
    lessonId: 'seo-lesson-08',
    order: 6,
  },
  {
    key: 'seo_map_keywords',
    title: 'Prioriser mes mots-clés et les associer aux bonnes pages',
    description:
      'Choisis les requêtes prioritaires et associe-les aux pages de ton site qui répondent le mieux à chaque intention.',
    completionCriterion:
      'Avoir défini au moins trois associations pertinentes entre requêtes et pages cibles, existantes ou à créer.',
    moduleId: 'seo-mots-cles',
    lessonId: 'seo-lesson-09',
    order: 7,
  },
  {
    key: 'seo_optimize_metadata',
    title: "Optimiser les titres et balises d'une page",
    description:
      'Améliore le title, le H1 et la meta description d’une page importante, en conservant une formulation naturelle et cohérente avec son contenu.',
    completionCriterion: 'Avoir revu les principaux éléments de présentation d’une page.',
    moduleId: 'seo-optimiser-pages',
    lessonId: 'seo-lesson-10',
    order: 8,
  },
  {
    key: 'seo_improve_content',
    title: "Améliorer le contenu d'une page stratégique",
    description:
      'Retravaille une page pour mieux répondre aux questions, attentes et intentions de tes visiteurs.',
    completionCriterion: 'Avoir réalisé une amélioration concrète du contenu.',
    moduleId: 'seo-optimiser-pages',
    lessonId: 'seo-lesson-11',
    order: 9,
  },
  {
    key: 'seo_internal_links',
    title: 'Améliorer mon maillage interne',
    description:
      'Ajoute des liens internes pertinents entre des pages complémentaires de ton site.',
    completionCriterion:
      'Avoir ajouté ou amélioré jusqu’à trois liens internes utiles, selon la structure réelle du site.',
    moduleId: 'seo-optimiser-pages',
    lessonId: 'seo-lesson-12',
    order: 10,
  },
  {
    key: 'seo_technical_checks',
    title: 'Réaliser un premier audit technique de mon site',
    description:
      "Vérifie l'accessibilité de tes pages, le fichier robots.txt, le sitemap et les performances mobiles avec PageSpeed Insights. Identifie une première amélioration prioritaire.",
    completionCriterion:
      'Avoir vérifié les principaux points techniques du site et identifié une première amélioration prioritaire, ou constaté qu’aucun problème évident n’est apparu.',
    moduleId: 'seo-fondamentaux-techniques',
    lessonId: 'seo-lesson-13',
    order: 11,
  },
  {
    key: 'seo_content_ideas',
    title: 'Identifier cinq sujets de contenu pertinents',
    description:
      'Liste cinq sujets qui répondent aux questions de tes prospects et correspondent à ton activité.',
    completionCriterion: 'Avoir sélectionné cinq idées de contenus utiles.',
    moduleId: 'seo-developper-visibilite',
    lessonId: 'seo-lesson-17',
    order: 12,
  },
  {
    key: 'seo_editorial_plan',
    title: 'Planifier mes cinq prochains contenus',
    description:
      'Prépare un calendrier éditorial comprenant cinq contenus à créer ou à améliorer, avec leurs priorités et échéances.',
    completionCriterion: 'Avoir préparé un calendrier de cinq contenus réaliste et priorisé.',
    moduleId: 'seo-developper-visibilite',
    lessonId: 'seo-lesson-19',
    order: 13,
  },
  {
    key: 'seo_backlink_opportunities',
    title: 'Identifier mes premières opportunités de backlinks',
    description:
      'Sélectionne cinq sites ou partenaires pertinents qui pourraient légitimement mentionner ton activité, puis choisis une première opportunité à explorer.',
    completionCriterion:
      'Avoir identifié cinq sites ou partenaires pertinents et une première opportunité de lien à explorer.',
    moduleId: 'seo-autorite-backlinks',
    lessonId: 'seo-lesson-21',
    order: 14,
    isNew: true,
  },
  {
    key: 'seo_geo_visibility',
    title: 'Évaluer ma visibilité dans les moteurs IA',
    description:
      "Vérifie les principales conditions d'accès à ton site, réalise trois recherches pertinentes dans les moteurs IA et identifie une amélioration potentielle.",
    completionCriterion:
      'Avoir vérifié les conditions d’accès au site, réalisé trois recherches pertinentes et identifié une amélioration possible.',
    moduleId: 'seo-visibilite-geo',
    lessonId: 'seo-lesson-25',
    order: 15,
    isNew: true,
  },
  {
    key: 'seo_record_baseline',
    title: 'Établir mon point de départ SEO',
    description:
      'Rassemble les principaux indicateurs de ton site pour disposer d’une situation de référence.',
    completionCriterion:
      'Avoir identifié les données de référence disponibles et celles qui manquent.',
    moduleId: 'seo-mesurer-progresser',
    lessonId: 'seo-lesson-26',
    order: 16,
  },
  {
    key: 'seo_90_day_plan',
    title: "Construire mon plan d'action SEO sur 90 jours",
    description:
      'Sélectionne trois à cinq actions prioritaires, organise-les sur 90 jours et définis les indicateurs à suivre.',
    completionCriterion:
      'Avoir identifié trois à cinq priorités, leurs prochaines étapes et les indicateurs à suivre.',
    moduleId: 'seo-mesurer-progresser',
    lessonId: 'seo-lesson-28',
    order: 17,
  },
]
