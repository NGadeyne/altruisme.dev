<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt:
      "Une page stratégique renvoie une erreur 404 alors qu'elle devrait être accessible. Quelle est la meilleure première réaction ?",
    options: [
      {
        letter: 'A',
        text: "Ignorer systématiquement l'erreur, car les 404 ne posent jamais de problème.",
      },
      {
        letter: 'B',
        text: "Vérifier si la page existe toujours, si son adresse a changé et quels liens permettent d'y accéder.",
      },
      {
        letter: 'C',
        text: "Rediriger automatiquement toutes les erreurs 404 du site vers la page d'accueil.",
      },
    ],
    correct: 'B',
    explanation:
      "Une erreur 404 mérite une investigation lorsqu'elle concerne une page qui devrait fonctionner. Il faut comprendre si le contenu a été supprimé, déplacé ou si un lien incorrect empêche d'y accéder.",
  },
  {
    id: 2,
    prompt: 'Que signifie généralement une erreur HTTP de la famille 5xx ?',
    options: [
      {
        letter: 'A',
        text: 'Le serveur ou un intermédiaire rencontre une difficulté pour traiter la requête.',
      },
      {
        letter: 'B',
        text: 'Google considère automatiquement que le contenu est de mauvaise qualité.',
      },
      { letter: 'C', text: 'La page possède obligatoirement une instruction noindex.' },
    ],
    correct: 'A',
    explanation:
      "Les codes 5xx correspondent à des difficultés techniques du côté du serveur ou de l'infrastructure. Lorsqu'elles persistent sur des pages importantes, elles peuvent perturber leur exploration.",
  },
  {
    id: 3,
    prompt:
      'Une page importante possède une instruction noindex ajoutée par erreur. Quelle correction est adaptée ?',
    options: [
      { letter: 'A', text: 'Répéter davantage le mot-clé principal dans son contenu.' },
      { letter: 'B', text: 'Modifier immédiatement son URL pour lui donner une nouvelle adresse.' },
      {
        letter: 'C',
        text: "Vérifier la configuration d'indexation et supprimer l'instruction si la page doit effectivement pouvoir être indexée.",
      },
    ],
    correct: 'C',
    explanation:
      'Une instruction noindex demande aux moteurs de recherche compatibles de ne pas indexer la page. Si elle a été ajoutée par erreur, il faut corriger le réglage concerné, puis vérifier la version publiée.',
  },
  {
    id: 4,
    prompt:
      "Un test de l'URL active indique que Google peut accéder à une page. Que peut-on en conclure ?",
    options: [
      { letter: 'A', text: 'La page sera automatiquement première sur son mot-clé principal.' },
      {
        letter: 'B',
        text: "Certains contrôles d'accessibilité et d'indexabilité sont favorables, mais l'indexation n'est pas garantie.",
      },
      {
        letter: 'C',
        text: 'Tous les problèmes techniques du site ont nécessairement été corrigés.',
      },
    ],
    correct: 'B',
    explanation:
      "Le test de l'URL active permet d'examiner certains aspects techniques de la page actuellement accessible. Il ne garantit ni l'indexation ni son classement dans les résultats Google.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant les freins techniques."
  />
</template>
