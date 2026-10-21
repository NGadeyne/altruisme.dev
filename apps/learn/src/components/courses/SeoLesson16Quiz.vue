<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Que mesure le Largest Contentful Paint (LCP) ?',
    options: [
      { letter: 'A', text: 'Le nombre de liens internes présents dans une page.' },
      {
        letter: 'B',
        text: 'Le temps nécessaire pour afficher le plus grand élément de contenu visible lors du chargement.',
      },
      { letter: 'C', text: 'Le nombre de clics générés depuis Google.' },
    ],
    correct: 'B',
    explanation:
      'Le LCP mesure un aspect du chargement perçu en évaluant le moment où le plus grand élément de contenu visible est affiché. Il aide à comprendre si les principales informations apparaissent suffisamment rapidement.',
  },
  {
    id: 2,
    prompt: 'Quelle affirmation concernant PageSpeed Insights est correcte ?',
    options: [
      {
        letter: 'A',
        text: "Il peut présenter des données de visiteurs réels et des résultats issus d'un test automatisé.",
      },
      {
        letter: 'B',
        text: "Il mesure systématiquement les performances de tous les visiteurs d'un site.",
      },
      { letter: 'C', text: 'Un score de 100 garantit une meilleure position dans Google.' },
    ],
    correct: 'A',
    explanation:
      'PageSpeed Insights peut combiner des données réelles issues de Chrome et des mesures de laboratoire produites par Lighthouse. Un bon score ne garantit pas un meilleur classement.',
  },
  {
    id: 3,
    prompt: 'Quel problème peut contribuer à augmenter le CLS ?',
    options: [
      { letter: 'A', text: "La présence d'un titre H1 descriptif." },
      { letter: 'B', text: "L'utilisation de liens internes vers des pages pertinentes." },
      {
        letter: 'C',
        text: 'Des images qui apparaissent sans que leur espace ait été réservé dans la mise en page.',
      },
    ],
    correct: 'C',
    explanation:
      "Lorsqu'une image ou un autre élément apparaît sans espace réservé, il peut déplacer les contenus déjà affichés. Ces mouvements inattendus contribuent au CLS.",
  },
  {
    id: 4,
    prompt: 'Une page possède un LCP médiocre sur mobile. Quelle est la meilleure démarche ?',
    options: [
      {
        letter: 'A',
        text: 'Supprimer immédiatement toutes les images et tous les scripts du site.',
      },
      {
        letter: 'B',
        text: 'Examiner les causes possibles, identifier une amélioration pertinente et vérifier ses effets.',
      },
      {
        letter: 'C',
        text: 'Ignorer systématiquement le résultat, car les performances ne concernent jamais le référencement.',
      },
    ],
    correct: 'B',
    explanation:
      'Une bonne optimisation commence par un diagnostic. Il faut comprendre ce qui ralentit le contenu principal, choisir une correction adaptée et vérifier ses effets plutôt que supprimer des fonctionnalités au hasard.',
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce module, prends quelques instants pour vérifier que tu as compris les principaux indicateurs et leur utilisation."
  />
</template>
