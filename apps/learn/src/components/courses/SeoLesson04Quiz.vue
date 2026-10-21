<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'À quoi sert principalement Google Search Console ?',
    options: [
      { letter: 'A', text: 'À créer automatiquement des pages optimisées pour Google.' },
      {
        letter: 'B',
        text: "À observer la présence d'un site dans la recherche Google et identifier des informations utiles à son référencement.",
      },
      { letter: 'C', text: 'À acheter les premières positions dans les résultats de recherche.' },
    ],
    correct: 'B',
    explanation:
      "Google Search Console permet de suivre la présence d'un site dans la recherche Google et de consulter des informations utiles à son référencement.",
  },
  {
    id: 2,
    prompt: "Quelle est la particularité d'une propriété de domaine ?",
    options: [
      {
        letter: 'A',
        text: "Elle permet de regrouper les données des différentes variantes et sous-domaines d'un domaine.",
      },
      { letter: 'B', text: "Elle concerne uniquement la page d'accueil du site." },
      { letter: 'C', text: 'Elle installe automatiquement Google Analytics.' },
    ],
    correct: 'A',
    explanation:
      "Une propriété de domaine regroupe notamment les différentes variantes du domaine et ses sous-domaines, ce qui permet d'obtenir une vision globale.",
  },
  {
    id: 3,
    prompt: 'Que permet la validation de propriété ?',
    options: [
      { letter: 'A', text: 'De garantir que toutes les pages seront indexées.' },
      {
        letter: 'B',
        text: 'De confirmer que tu disposes des autorisations nécessaires pour accéder aux informations du site.',
      },
      { letter: 'C', text: "D'améliorer automatiquement les positions du site sur Google." },
    ],
    correct: 'B',
    explanation:
      "La validation de propriété confirme que tu es autorisé à consulter les données du site. Elle n'améliore pas automatiquement son référencement.",
  },
  {
    id: 4,
    prompt: "Quelle fonctionnalité permet d'examiner une URL précise ?",
    options: [
      { letter: 'A', text: 'Le rapport de performances.' },
      { letter: 'B', text: 'Le sélecteur de propriétés.' },
      { letter: 'C', text: "L'outil d'inspection d'URL." },
    ],
    correct: 'C',
    explanation:
      "L'inspection d'URL permet d'examiner une adresse particulière et d'obtenir des informations sur la manière dont Google la prend en compte.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les notions essentielles."
  />
</template>
