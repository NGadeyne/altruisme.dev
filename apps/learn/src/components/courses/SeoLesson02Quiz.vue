<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "À quoi sert principalement l'exploration ?",
    options: [
      { letter: 'A', text: 'À attribuer définitivement une position aux pages dans Google.' },
      { letter: 'B', text: 'À découvrir les URL et récupérer le contenu des pages accessibles.' },
      { letter: 'C', text: 'À mesurer le nombre de visiteurs qui consultent un site.' },
    ],
    correct: 'B',
    explanation:
      "L'exploration permet notamment aux robots de Google de découvrir des URL et de récupérer le contenu des pages auxquelles ils peuvent accéder. Elle constitue une étape préalable à leur éventuelle indexation.",
  },
  {
    id: 2,
    prompt: 'Une page explorée par Google est-elle automatiquement indexée ?',
    options: [
      { letter: 'A', text: "Oui, toutes les pages explorées sont ajoutées à l'index." },
      { letter: 'B', text: 'Oui, à condition que le site possède un sitemap.' },
      { letter: 'C', text: "Non, Google peut explorer une page sans décider de l'indexer." },
    ],
    correct: 'C',
    explanation:
      "Google peut explorer une page sans l'intégrer à son index. Cette situation peut notamment se produire lorsqu'une directive technique empêche l'indexation ou lorsqu'une autre version du contenu est privilégiée.",
  },
  {
    id: 3,
    prompt: 'Pourquoi une page indexée peut-elle être peu visible sur Google ?',
    options: [
      {
        letter: 'A',
        text: "Parce que l'indexation ne garantit pas un classement favorable sur toutes les recherches.",
      },
      {
        letter: 'B',
        text: "Parce que Google empêche systématiquement les nouveaux sites d'apparaître dans les premiers résultats.",
      },
      {
        letter: 'C',
        text: "Parce qu'il faut obligatoirement payer Google Ads pour obtenir un bon référencement naturel.",
      },
    ],
    correct: 'A',
    explanation:
      "Une page indexée n'est pas nécessairement pertinente pour toutes les recherches. Son classement dépend notamment de la requête, de son contenu et du contexte dans lequel la recherche est effectuée.",
  },
  {
    id: 4,
    prompt: 'Quelle affirmation concernant le sitemap est correcte ?',
    options: [
      {
        letter: 'A',
        text: "Il garantit l'indexation de toutes les pages qu'il contient.",
      },
      {
        letter: 'B',
        text: 'Il aide Google à découvrir certaines URL, sans garantir leur exploration ou leur indexation.',
      },
      { letter: 'C', text: 'Il améliore automatiquement les positions des pages sur Google.' },
    ],
    correct: 'B',
    explanation:
      "Le sitemap permet de signaler des URL aux moteurs de recherche et peut faciliter leur découverte, mais il ne garantit ni l'exploration, ni l'indexation, ni l'obtention de meilleures positions.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as bien compris les principales étapes du fonctionnement de Google."
  />
</template>
