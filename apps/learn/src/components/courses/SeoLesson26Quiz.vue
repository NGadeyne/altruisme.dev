<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Que représente une impression dans Google Search Console ?',
    options: [
      { letter: 'A', text: 'Une vente réalisée grâce au référencement naturel.' },
      {
        letter: 'B',
        text: "Une apparition d'un résultat associé à ton site dans Google, selon les règles de comptabilisation du rapport.",
      },
      { letter: 'C', text: "Une visite garantie d'une personne différente." },
    ],
    correct: 'B',
    explanation:
      "Une impression correspond à l'apparition d'un résultat associé au site dans les conditions prises en compte par Google. Elle ne représente ni une visite unique ni une conversion.",
  },
  {
    id: 2,
    prompt:
      'Une page enregistre de nombreuses impressions, mais peu de clics. Quelle est la meilleure interprétation ?',
    options: [
      { letter: 'A', text: 'La page est nécessairement mauvaise et doit être supprimée.' },
      {
        letter: 'B',
        text: 'Il faut systématiquement répéter davantage son mot-clé dans les titres.',
      },
      {
        letter: 'C',
        text: 'Il faut examiner les requêtes, la position et la présentation du résultat avant de déterminer si une amélioration est pertinente.',
      },
    ],
    correct: 'C',
    explanation:
      "Un CTR faible peut avoir différentes explications. Il faut examiner la position du résultat, les recherches concernées et les informations affichées avant de décider d'une optimisation.",
  },
  {
    id: 3,
    prompt:
      'Pourquoi les clics de Search Console et les sessions de Google Analytics peuvent-ils différer ?',
    options: [
      {
        letter: 'A',
        text: 'Les deux outils utilisent des méthodes de comptabilisation et de collecte différentes.',
      },
      {
        letter: 'B',
        text: 'Tous les clics qui ne deviennent pas des sessions sont nécessairement frauduleux.',
      },
      {
        letter: 'C',
        text: 'Search Console mesure exclusivement les ventes réalisées depuis Google.',
      },
    ],
    correct: 'A',
    explanation:
      "Les clics et les sessions ne représentent pas exactement les mêmes événements. Les différences de collecte, de configuration et d'attribution peuvent notamment expliquer les écarts entre Search Console et Analytics.",
  },
  {
    id: 4,
    prompt:
      'Quel indicateur est particulièrement intéressant pour un consultant souhaitant développer son activité grâce au SEO ?',
    options: [
      { letter: 'A', text: 'Uniquement le Domain Rating de son site.' },
      {
        letter: 'B',
        text: 'Les demandes qualifiées attribuables au référencement, en complément des données de visibilité et de trafic.',
      },
      { letter: 'C', text: 'Le nombre de mots publiés chaque mois.' },
    ],
    correct: 'B',
    explanation:
      "Les demandes qualifiées permettent de rapprocher les performances SEO des objectifs commerciaux. Elles doivent être interprétées avec les autres indicateurs et les limites de l'attribution.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principaux indicateurs et la manière de les interpréter."
  />
</template>
