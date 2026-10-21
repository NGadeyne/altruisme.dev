<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quel est le principal objectif du référencement naturel ?',
    options: [
      {
        letter: 'A',
        text: 'Attirer le maximum de visiteurs, quel que soit leur intérêt pour ton activité.',
      },
      {
        letter: 'B',
        text: "Améliorer la visibilité d'un site auprès des personnes qui effectuent des recherches pertinentes.",
      },
      { letter: 'C', text: 'Acheter les premières positions dans les résultats Google.' },
    ],
    correct: 'B',
    explanation:
      "Le SEO vise à améliorer la visibilité sur des recherches pertinentes, et pas uniquement à augmenter le nombre de visiteurs. L'objectif est d'attirer des personnes susceptibles d'être intéressées par ce que tu proposes.",
  },
  {
    id: 2,
    prompt: 'Quelle affirmation concernant le SEO est correcte ?',
    options: [
      {
        letter: 'A',
        text: 'Une fois correctement optimisé, un site conserve définitivement ses positions.',
      },
      {
        letter: 'B',
        text: 'Le référencement naturel garantit des résultats dès les premières semaines.',
      },
      {
        letter: 'C',
        text: 'Le référencement naturel demande des efforts dans la durée et ne garantit pas de positionnement.',
      },
    ],
    correct: 'C',
    explanation:
      "Le référencement naturel repose sur un travail continu. Même une page correctement optimisée ne bénéficie d'aucune garantie de classement et ses positions peuvent évoluer.",
  },
  {
    id: 3,
    prompt: "Pourquoi le nombre de visiteurs ne suffit-il pas à mesurer la réussite d'un site ?",
    options: [
      {
        letter: 'A',
        text: "Parce que le trafic provenant de Google n'a aucune valeur commerciale.",
      },
      {
        letter: 'B',
        text: "Parce que la pertinence des visiteurs et les actions qu'ils réalisent comptent également.",
      },
      {
        letter: 'C',
        text: "Parce qu'un site qui reçoit peu de visiteurs est forcément mieux référencé.",
      },
    ],
    correct: 'B',
    explanation:
      "La valeur du trafic dépend notamment de l'intérêt des visiteurs pour ton activité et de leur capacité à trouver ce qu'ils recherchent. Le nombre de visites ne suffit donc pas à déterminer la réussite d'une stratégie SEO.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette première leçon, prends quelques instants pour vérifier que tu as compris les notions essentielles."
  />
</template>
