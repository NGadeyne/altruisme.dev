import { questions } from '@/data/questions'

import type {
  AuditAnswers,
  AuditResult,
  DiagnosticFlag,
  Dimension,
  DimensionScores,
} from '@/types/audit'

const dimensions: Dimension[] = [
  'positionnement',
  'offre',
  'visibilite',
  'prospection',
  'conversion',
]

const labels: Record<Dimension, string> = {
  positionnement: 'Positionnement',
  offre: 'Offre',
  visibilite: 'Visibilité',
  prospection: 'Prospection',
  conversion: 'Conversion',
}

export function calculateDiagnostic(
  answers: AuditAnswers,
): AuditResult {
  const points = Object.fromEntries(
    dimensions.map((dimension) => [dimension, 0]),
  ) as Record<Dimension, number>

  const maximums = Object.fromEntries(
    dimensions.map((dimension) => [dimension, 0]),
  ) as Record<Dimension, number>

  for (const question of questions) {
    if (
      !question.scored ||
      !question.dimension ||
      !question.answers
    ) {
      continue
    }

    const selected = question.answers.find(
      (option) => option.value === answers[question.id],
    )

    if (
      !selected ||
      typeof selected.score !== 'number'
    ) {
      continue
    }

    const weight = question.weight ?? 1

    points[question.dimension] +=
      selected.score * weight

    maximums[question.dimension] +=
      4 * weight
  }

  const scores = Object.fromEntries(
    dimensions.map((dimension) => [
      dimension,
      maximums[dimension]
        ? Math.round(
            (points[dimension] /
              maximums[dimension]) *
              100,
          )
        : 0,
    ]),
  ) as DimensionScores

  const globalScore = Math.round(
    dimensions.reduce(
      (sum, dimension) =>
        sum + scores[dimension],
      0,
    ) / dimensions.length,
  )

  const priority = findPriority(scores)

  const secondaryPriority = [...dimensions]
    .filter(
      (dimension) =>
        dimension !== priority,
    )
    .sort(
      (a, b) =>
        scores[a] - scores[b],
    )[0]

  const flags = detectFlags(
    answers,
    scores,
  )

  const strengths = dimensions
    .filter(
      (dimension) =>
        scores[dimension] >= 75,
    )
    .sort(
      (a, b) =>
        scores[b] - scores[a],
    )

  return {
    globalScore,
    scores,
    priority,
    secondaryPriority,
    flags,
    strengths,
    summary: buildSummary(
      priority,
      scores,
    ),
    why: buildWhy(
      priority,
      answers,
      scores,
    ),
    priorities:
      buildPriorities(priority),
    stopDoing:
      buildStopDoing(priority),
  }
}

function findPriority(
  scores: DimensionScores,
): Dimension {
  const funnel: Dimension[] = [
    'positionnement',
    'offre',
    'visibilite',
    'prospection',
    'conversion',
  ]

  // On cherche d'abord le premier maillon
  // réellement cassé dans le funnel.
  const critical = funnel.find(
    (dimension) =>
      scores[dimension] < 40,
  )

  if (critical) {
    return critical
  }

  // Sinon, on prend simplement
  // le score le plus faible.
  return [...funnel].sort(
    (a, b) =>
      scores[a] - scores[b],
  )[0]
}

function detectFlags(
  answers: AuditAnswers,
  scores: DimensionScores,
): DiagnosticFlag[] {
  const flags: DiagnosticFlag[] = []

  if (
    answers.search_duration ===
      '4_months_plus' &&
    answers.conversations_30d ===
      'none'
  ) {
    flags.push(
      'acquisition_inactive',
    )
  }

  if (
    answers.weekly_prospects ===
      'none' ||
    answers.weekly_prospects ===
      'low'
  ) {
    flags.push(
      'low_prospecting_volume',
    )
  }

  if (
    answers.prospecting_regular ===
      'none' ||
    answers.prospecting_regular ===
      'reactive' ||
    answers.prospecting_regular ===
      'irregular'
  ) {
    flags.push(
      'irregular_prospecting',
    )
  }

  if (
    scores.positionnement < 40
  ) {
    flags.push(
      'weak_positioning',
    )
  }

  if (scores.offre < 40) {
    flags.push(
      'weak_offer',
    )
  }

  if (
    scores.visibilite < 40
  ) {
    flags.push(
      'weak_visibility',
    )
  }

  if (
    scores.conversion < 40
  ) {
    flags.push(
      'weak_conversion',
    )
  }

  if (
    answers.urgency ===
      '2_weeks' ||
    answers.urgency ===
      '1_month'
  ) {
    flags.push(
      'high_urgency',
    )
  }

  return flags
}

function buildSummary(
  priority: Dimension,
  scores: DimensionScores,
) {
  const score = scores[priority]

  const intros: Record<
    Dimension,
    string
  > = {
    positionnement:
      'Ton principal frein se situe en amont : ton positionnement manque encore de clarté ou de différenciation.',

    offre:
      'Ton expertise semble présente, mais ton offre n’est pas encore assez facile à comprendre, à valoriser ou à défendre.',

    visibilite:
      'Ton profil et tes preuves ne transforment pas encore suffisamment ton expertise en confiance et en opportunités.',

    prospection:
      'Ton système d’acquisition manque surtout de volume, de régularité ou de ciblage pour générer assez de conversations.',

    conversion:
      'Tu génères des opportunités, mais une partie importante de la valeur se perd au moment de qualifier, défendre ou faire avancer les échanges.',
  }

  return `${intros[priority]} Score ${labels[priority]} : ${score}/100.`
}

function buildWhy(
  priority: Dimension,
  answers: AuditAnswers,
  scores: DimensionScores,
): string[] {
  const result: string[] = []

  if (
    priority === 'prospection'
  ) {
    if (
      answers.weekly_prospects ===
        'none' ||
      answers.weekly_prospects ===
        'low'
    ) {
      result.push(
        'Ton volume de prospection est trop faible pour créer suffisamment d’opportunités.',
      )
    }

    if (
      answers.prospecting_regular !==
        'regular' &&
      answers.prospecting_regular !==
        'system'
    ) {
      result.push(
        'Ta prospection manque de régularité, ce qui rend les résultats difficiles à reproduire.',
      )
    }

    if (
      answers.conversations_30d ===
        'none' ||
      answers.conversations_30d ===
        '1_2'
    ) {
      result.push(
        'Le nombre de conversations qualifiées sur les 30 derniers jours reste faible.',
      )
    }
  }

  if (
    priority ===
    'positionnement'
  ) {
    result.push(
      'Ta cible, ta proposition de valeur ou ta différence ne sont pas encore assez explicites.',
    )

    result.push(
      'Prospecter davantage maintenant risquerait surtout d’amplifier un message encore trop générique.',
    )
  }

  if (priority === 'offre') {
    result.push(
      'Tu sembles encore présenter davantage ce que tu fais que le résultat concret que tu apportes.',
    )

    result.push(
      'Des preuves plus visibles et une meilleure défense de ta valeur rendraient ton offre plus facile à acheter.',
    )
  }

  if (
    priority === 'visibilite'
  ) {
    result.push(
      'Ton expertise n’est pas encore suffisamment transformée en signaux de confiance visibles.',
    )

    result.push(
      'Tes profils et preuves peuvent mieux préparer le terrain avant même le premier échange.',
    )
  }

  if (
    priority === 'conversion'
  ) {
    result.push(
      'Tes opportunités ont besoin d’un meilleur processus de qualification et de prochaines étapes plus explicites.',
    )

    result.push(
      'Le sujet n’est probablement pas seulement de générer plus de leads, mais de mieux transformer ceux que tu as déjà.',
    )
  }

  if (result.length < 2) {
    result.push(
      `Ton score ${labels[
        priority
      ].toLowerCase()} (${scores[priority]}/100) est le plus limitant actuellement.`,
    )
  }

  return result.slice(0, 3)
}

function buildPriorities(
  priority: Dimension,
): string[] {
  const map: Record<
    Dimension,
    string[]
  > = {
    positionnement: [
      'Choisir une cible prioritaire et un problème précis à résoudre.',
      'Formuler une proposition de valeur compréhensible en une phrase.',
      'Rassembler 2 à 3 preuves qui renforcent immédiatement ta légitimité.',
    ],

    offre: [
      'Transformer tes compétences en résultats et bénéfices concrets.',
      'Clarifier ce qui rend ton intervention différente ou plus sûre.',
      'Préparer une défense simple de ton TJM basée sur la valeur créée.',
    ],

    visibilite: [
      'Repositionner ton profil LinkedIn comme une page de conversion, pas comme un CV.',
      'Ajouter des preuves visibles : recommandations, résultats, cas ou projets.',
      'Optimiser uniquement les plateformes réellement pertinentes pour ta cible.',
    ],

    prospection: [
      'Définir un volume hebdomadaire de prospects qualifiés.',
      'Installer une routine fixe de prospection et de relance.',
      'Suivre le nombre de conversations générées, pas seulement le nombre de messages envoyés.',
    ],

    conversion: [
      'Qualifier le besoin avant de présenter ton profil ou ton TJM.',
      'Identifier le problème business et le coût de l’inaction.',
      'Toujours sortir d’un échange avec une prochaine étape explicite.',
    ],
  }

  return map[priority]
}

function buildStopDoing(
  priority: Dimension,
): string[] {
  const map: Record<
    Dimension,
    string[]
  > = {
    positionnement: [
      'Multiplier les canaux de prospection avant d’avoir clarifié ton message.',
      'Réécrire ton CV sans fin sans travailler ta proposition de valeur.',
    ],

    offre: [
      'Ajouter encore plus de compétences à ton profil.',
      'Baisser ton TJM automatiquement pour rendre ton offre plus attractive.',
    ],

    visibilite: [
      'Créer du contenu partout sans optimiser d’abord tes profils principaux.',
      'Être présent sur toutes les plateformes par défaut.',
    ],

    prospection: [
      'Retoucher ton branding chaque semaine au lieu de générer des conversations.',
      'Attendre que Malt ou LinkedIn génèrent seuls ta prochaine mission.',
    ],

    conversion: [
      'Augmenter brutalement ton volume de prospection avant de comprendre pourquoi tes opportunités actuelles n’aboutissent pas.',
      'Envoyer ton CV ou ton TJM trop tôt sans qualifier le besoin.',
    ],
  }

  return map[priority]
}
