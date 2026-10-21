<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Que permet principalement la saisie semi-automatique de Google ?',
    options: [
      {
        letter: 'A',
        text: 'Connaître le nombre exact de recherches mensuelles pour chaque expression.',
      },
      {
        letter: 'B',
        text: "Découvrir des formulations de recherche susceptibles d'être utilisées par les internautes.",
      },
      {
        letter: 'C',
        text: 'Identifier automatiquement les mots-clés sur lesquels ton site sera premier.',
      },
    ],
    correct: 'B',
    explanation:
      'La saisie semi-automatique permet de découvrir des formulations intéressantes à explorer. Elle ne fournit pas directement de volumes mensuels et ne garantit aucun positionnement.',
  },
  {
    id: 2,
    prompt:
      'Quelle est la principale limite de Google Search Console pour la recherche de mots-clés ?',
    options: [
      {
        letter: 'A',
        text: 'Il présente principalement les requêtes sur lesquelles ton site a déjà enregistré de la visibilité, sans révéler toutes les recherches potentielles.',
      },
      {
        letter: 'B',
        text: 'Il ne permet de consulter que les recherches effectuées sur le nom de ton entreprise.',
      },
      { letter: 'C', text: 'Il ne fonctionne que pour les sites utilisant Google Ads.' },
    ],
    correct: 'A',
    explanation:
      "Search Console permet d'observer certaines requêtes qui ont déjà généré des impressions ou des clics vers ton site. Il ne révèle pas toutes les expressions que tes futurs clients pourraient rechercher.",
  },
  {
    id: 3,
    prompt: 'Que signifie un indice de 100 dans Google Trends ?',
    options: [
      { letter: 'A', text: "L'expression a été recherchée exactement 100 fois." },
      {
        letter: 'B',
        text: "L'expression possède automatiquement un volume de 100 recherches mensuelles.",
      },
      {
        letter: 'C',
        text: "L'expression atteint un niveau maximal de popularité relative dans le périmètre étudié.",
      },
    ],
    correct: 'C',
    explanation:
      'Google Trends utilise des données normalisées. Un indice de 100 représente le maximum de popularité relative dans le périmètre de comparaison, et non un nombre exact de recherches.',
  },
  {
    id: 4,
    prompt: 'Quelle est la meilleure approche pour constituer une première liste de mots-clés ?',
    options: [
      {
        letter: 'A',
        text: "Conserver toutes les suggestions, même lorsqu'elles n'ont aucun rapport avec ton activité.",
      },
      {
        letter: 'B',
        text: 'Identifier des expressions pertinentes, comprendre les besoins associés et organiser les observations.',
      },
      {
        letter: 'C',
        text: 'Choisir uniquement les expressions les plus courtes, car elles sont toujours plus intéressantes.',
      },
    ],
    correct: 'B',
    explanation:
      'Une bonne recherche de mots-clés consiste à identifier des expressions qui possèdent un intérêt réel pour ton activité et à comprendre les intentions auxquelles elles correspondent.',
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales méthodes de recherche de mots-clés."
  />
</template>
