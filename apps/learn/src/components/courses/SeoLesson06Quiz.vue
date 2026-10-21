<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Que représente une impression dans Google Search Console ?',
    options: [
      { letter: 'A', text: 'Une visite réalisée sur ton site internet.' },
      {
        letter: 'B',
        text: 'Une apparition de ton résultat dans Google, selon les règles de comptabilisation du rapport.',
      },
      { letter: 'C', text: 'Une demande de contact effectuée par un visiteur.' },
    ],
    correct: 'B',
    explanation:
      "Une impression correspond à une apparition comptabilisée dans les résultats Google. Elle ne signifie pas nécessairement qu'un utilisateur a cliqué ou consulté ton site.",
  },
  {
    id: 2,
    prompt: 'Une page possède 1 000 impressions et 50 clics. Quel est son CTR ?',
    options: [
      { letter: 'A', text: '5 %.' },
      { letter: 'B', text: '10 %.' },
      { letter: 'C', text: '50 %.' },
    ],
    correct: 'A',
    explanation:
      'Le CTR correspond aux clics divisés par les impressions, multipliés par 100. Dans cet exemple, 50 clics pour 1 000 impressions représentent un taux de clics de 5 %.',
  },
  {
    id: 3,
    prompt: 'Une page possède un CTR relativement faible. Que faut-il en conclure ?',
    options: [
      { letter: 'A', text: 'Son title doit obligatoirement être modifié.' },
      { letter: 'B', text: 'Elle rencontre nécessairement un problème technique.' },
      {
        letter: 'C',
        text: "Il faut examiner les recherches, les positions et le contexte avant de déterminer s'il existe une opportunité.",
      },
    ],
    correct: 'C',
    explanation:
      'Un faible CTR ne suffit pas à identifier un problème. Il faut notamment examiner les recherches concernées, les positions et le type de résultats proposés.',
  },
  {
    id: 4,
    prompt: "Pourquoi est-il intéressant d'analyser les requêtes associées à une page ?",
    options: [
      {
        letter: 'A',
        text: 'Pour comprendre quelles recherches font apparaître cette page et évaluer leur pertinence pour ton activité.',
      },
      {
        letter: 'B',
        text: 'Pour garantir automatiquement son passage dans les trois premiers résultats.',
      },
      {
        letter: 'C',
        text: 'Pour obtenir la liste complète de toutes les recherches effectuées sur Google.',
      },
    ],
    correct: 'A',
    explanation:
      'Les requêtes permettent de comprendre comment les internautes découvrent une page et de vérifier si cette visibilité correspond aux objectifs de ton activité. Elles ne constituent toutefois pas un inventaire exhaustif des recherches.',
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce deuxième module, prends quelques instants pour vérifier que tu as compris les principaux indicateurs et leur utilisation dans Google Search Console."
  />
</template>
