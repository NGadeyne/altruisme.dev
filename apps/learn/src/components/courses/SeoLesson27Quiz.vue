<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Quel est le rôle principal d'OAI-SearchBot ?",
    options: [
      { letter: 'A', text: 'Garantir que chaque page explorée sera recommandée par ChatGPT.' },
      {
        letter: 'B',
        text: "Permettre l'exploration de contenus pour les fonctionnalités de recherche ChatGPT.",
      },
      { letter: 'C', text: 'Mesurer automatiquement le Domain Rating des sites.' },
    ],
    correct: 'B',
    explanation:
      'OAI-SearchBot est associé aux fonctionnalités de recherche ChatGPT. Autoriser son exploration peut faciliter la prise en compte des contenus accessibles, mais ne garantit pas leur apparition dans une réponse.',
  },
  {
    id: 2,
    prompt: 'Quelle affirmation concernant GPTBot est correcte ?',
    options: [
      {
        letter: 'A',
        text: "Il est associé à l'exploration de contenus susceptibles de contribuer à l'entraînement des modèles OpenAI.",
      },
      {
        letter: 'B',
        text: 'Il constitue le seul robot utilisé pour toutes les fonctionnalités de recherche ChatGPT.',
      },
      {
        letter: 'C',
        text: "Son autorisation garantit qu'un site apparaîtra dans les citations des moteurs IA.",
      },
    ],
    correct: 'A',
    explanation:
      "GPTBot est documenté par OpenAI comme un robot destiné à explorer des contenus susceptibles d'être utilisés dans l'entraînement de ses modèles. Son rôle est distinct de celui d'OAI-SearchBot.",
  },
  {
    id: 3,
    prompt: 'Que faut-il faire pour apparaître dans les fonctionnalités IA de Google ?',
    options: [
      { letter: 'A', text: 'Installer obligatoirement un fichier llms.txt.' },
      { letter: 'B', text: 'Ajouter une balise spéciale garantissant une citation.' },
      {
        letter: 'C',
        text: 'Respecter les fondamentaux du SEO et les exigences techniques de Google Search, sans garantie de sélection.',
      },
    ],
    correct: 'C',
    explanation:
      "Google indique qu'aucune optimisation technique supplémentaire n'est nécessaire pour ses Aperçus IA et son Mode IA. Les fondamentaux du référencement restent pertinents, sans garantie de citation.",
  },
  {
    id: 4,
    prompt: 'Quelle amélioration peut rendre un contenu plus compréhensible ?',
    options: [
      {
        letter: 'A',
        text: 'Répéter artificiellement les mêmes mots-clés dans tous les paragraphes.',
      },
      {
        letter: 'B',
        text: 'Présenter clairement les informations essentielles, utiliser des titres explicites et fournir des explications fiables.',
      },
      {
        letter: 'C',
        text: 'Supprimer toutes les sources et tous les exemples pour raccourcir au maximum la page.',
      },
    ],
    correct: 'B',
    explanation:
      'Des informations explicites, des titres compréhensibles et des explications vérifiables améliorent la qualité du contenu pour les lecteurs et facilitent sa compréhension.',
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant l'accessibilité et la compréhension des contenus par les moteurs IA."
  />
</template>
