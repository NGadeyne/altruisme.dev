<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quelle différence existe entre une mention de marque et une citation documentaire ?',
    options: [
      {
        letter: 'A',
        text: "Une mention correspond à l'apparition d'une entreprise dans la réponse, tandis qu'une citation renvoie à une ressource présentée comme source ou référence.",
      },
      { letter: 'B', text: 'Une mention garantit toujours un lien cliquable vers le site.' },
      {
        letter: 'C',
        text: "Une citation prouve automatiquement que l'entreprise est recommandée comme meilleur prestataire.",
      },
    ],
    correct: 'A',
    explanation:
      "Une mention peut simplement faire apparaître le nom d'une entreprise dans une réponse. Une citation correspond à une référence documentaire. Ces deux formes de visibilité peuvent se compléter, mais ne sont pas équivalentes.",
  },
  {
    id: 2,
    prompt:
      "Tu testes six réponses et ton entreprise apparaît dans deux d'entre elles. Que peux-tu conclure ?",
    options: [
      {
        letter: 'A',
        text: 'Ton entreprise possède exactement 33 % de visibilité sur tous les moteurs IA.',
      },
      {
        letter: 'B',
        text: "Ton site est désormais garanti d'apparaître dans les futures réponses.",
      },
      {
        letter: 'C',
        text: 'Ton entreprise a été mentionnée dans deux observations sur six, mais ce résultat ne représente pas une mesure globale de sa visibilité.',
      },
    ],
    correct: 'C',
    explanation:
      "Deux mentions sur six réponses représentent uniquement le résultat de l'échantillon testé. Ce chiffre ne constitue pas une part de marché ni une mesure exhaustive de la visibilité dans les moteurs IA.",
  },
  {
    id: 3,
    prompt: "Que permet de mesurer le rapport dédié à l'IA générative dans Google Search Console ?",
    options: [
      {
        letter: 'A',
        text: 'Toutes les conversations privées des utilisateurs de ChatGPT.',
      },
      {
        letter: 'B',
        text: "Les impressions des URL du site dans certaines fonctionnalités d'IA générative de Google Search, notamment les Aperçus IA et le Mode IA.",
      },
      {
        letter: 'C',
        text: 'Le nombre exact de fois où Gemini recommande une entreprise dans toutes ses conversations.',
      },
    ],
    correct: 'B',
    explanation:
      "Google Search Console propose des données d'impressions concernant certaines fonctionnalités d'IA générative de sa recherche. Ces informations ne permettent pas de mesurer les conversations ou les citations produites par tous les assistants.",
  },
  {
    id: 4,
    prompt: 'Quelle est une bonne démarche pour suivre la visibilité GEO dans le temps ?',
    options: [
      {
        letter: 'A',
        text: 'Conserver des questions représentatives, documenter les outils et les conditions de test, puis comparer les observations avec prudence.',
      },
      {
        letter: 'B',
        text: 'Modifier systématiquement ses questions pour obtenir davantage de mentions.',
      },
      {
        letter: 'C',
        text: 'Rechercher son entreprise une seule fois et considérer cette réponse comme un classement définitif.',
      },
    ],
    correct: 'A',
    explanation:
      "Un suivi cohérent repose sur des questions comparables, des conditions documentées et une interprétation prudente des résultats. Les réponses pouvant varier, il faut éviter de tirer des conclusions définitives à partir d'un seul test.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce module, prends quelques instants pour vérifier que tu as compris les principales notions concernant la mesure de la visibilité GEO."
  />
</template>
