<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt:
      'Tu constates une baisse de clics sur une page importante. Quelle est la meilleure première démarche ?',
    options: [
      { letter: 'A', text: "Réécrire immédiatement l'intégralité de la page." },
      {
        letter: 'B',
        text: 'Examiner les performances, les requêtes et le contexte avant de formuler une hypothèse.',
      },
      { letter: 'C', text: 'Acheter des backlinks pour compenser la baisse.' },
    ],
    correct: 'B',
    explanation:
      "Une baisse de clics peut avoir plusieurs explications. L'analyse des pages, des requêtes et des périodes comparables permet de construire une hypothèse plus solide avant d'intervenir.",
  },
  {
    id: 2,
    prompt:
      'Une page commerciale possède une instruction noindex involontaire. Comment faut-il considérer cette situation ?',
    options: [
      {
        letter: 'A',
        text: 'Comme un problème technique concret qui mérite une correction si la page doit être indexable.',
      },
      { letter: 'B', text: 'Comme une simple opportunité esthétique.' },
      {
        letter: 'C',
        text: 'Comme une preuve que Google considère le contenu comme mauvais.',
      },
    ],
    correct: 'A',
    explanation:
      "Une instruction noindex involontaire sur une page destinée à apparaître dans Google constitue un problème identifiable. Sa correction peut rétablir l'indexabilité souhaitée, sans garantir un classement.",
  },
  {
    id: 3,
    prompt: 'Quels critères permettent de prioriser simplement des actions SEO ?',
    options: [
      {
        letter: 'A',
        text: 'Uniquement le nombre de recommandations affichées par un outil.',
      },
      { letter: 'B', text: 'Uniquement le Domain Rating des concurrents.' },
      {
        letter: 'C',
        text: "L'impact potentiel, l'effort nécessaire, le niveau de confiance et, lorsque c'est pertinent, l'urgence.",
      },
    ],
    correct: 'C',
    explanation:
      "Une bonne priorisation tient compte de l'intérêt potentiel de l'action, des ressources nécessaires et de la solidité des informations disponibles. Les problèmes urgents et les dépendances doivent également être considérés.",
  },
  {
    id: 4,
    prompt:
      'Une page possède de nombreuses impressions, mais peu de clics. Que peut-on en conclure ?',
    options: [
      { letter: 'A', text: 'Il faut obligatoirement modifier son titre.' },
      {
        letter: 'B',
        text: 'Il faut examiner les recherches, les positions et la présentation des résultats avant de choisir une optimisation.',
      },
      { letter: 'C', text: "Il faut supprimer la page, puisqu'elle ne fonctionne pas." },
    ],
    correct: 'B',
    explanation:
      "Un faible CTR ne suffit pas à identifier une erreur. Il faut comprendre les requêtes concernées, les positions et le contexte d'affichage avant de décider d'une modification.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principaux critères de priorisation SEO."
  />
</template>
