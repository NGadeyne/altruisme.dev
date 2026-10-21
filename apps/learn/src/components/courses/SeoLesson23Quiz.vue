<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quelle affirmation concernant les assistants IA est correcte ?',
    options: [
      {
        letter: 'A',
        text: 'Ils effectuent systématiquement une recherche sur Internet avant chaque réponse.',
      },
      {
        letter: 'B',
        text: 'Ils peuvent répondre à partir de connaissances apprises ou utiliser des sources externes selon leurs fonctionnalités et le contexte.',
      },
      {
        letter: 'C',
        text: 'Ils citent obligatoirement toutes les pages qui ont servi à entraîner leurs modèles.',
      },
    ],
    correct: 'B',
    explanation:
      "Un assistant peut produire une réponse à partir des connaissances acquises pendant son entraînement ou utiliser des informations récupérées depuis des sources externes. La recherche Web n'est pas systématiquement déclenchée.",
  },
  {
    id: 2,
    prompt: 'Quelle différence existe entre une mention de marque et une citation de source ?',
    options: [
      {
        letter: 'A',
        text: "Une mention peut simplement nommer une entreprise, tandis qu'une citation peut présenter une ressource identifiable utilisée ou proposée pour étayer la réponse.",
      },
      {
        letter: 'B',
        text: "Une mention garantit toujours un lien vers le site de l'entreprise.",
      },
      {
        letter: 'C',
        text: "Une citation signifie que l'outil recommande officiellement tous les services de l'entreprise.",
      },
    ],
    correct: 'A',
    explanation:
      "Une mention peut simplement faire apparaître le nom d'une entreprise. Une citation ou une référence renvoie à une ressource présentée comme source ou comme information complémentaire. Ces deux formes de visibilité ne possèdent pas nécessairement le même intérêt.",
  },
  {
    id: 3,
    prompt: 'Que recommande Google pour apparaître dans les fonctionnalités IA de sa recherche ?',
    options: [
      {
        letter: 'A',
        text: 'Créer obligatoirement un fichier spécial destiné aux modèles de langage.',
      },
      {
        letter: 'B',
        text: 'Répéter le nom de son entreprise dans chaque paragraphe.',
      },
      {
        letter: 'C',
        text: "Continuer à appliquer les bonnes pratiques fondamentales du SEO, notamment l'accessibilité technique et la qualité des contenus.",
      },
    ],
    correct: 'C',
    explanation:
      "Google indique qu'aucune optimisation spéciale n'est obligatoire pour ses Aperçus IA et son Mode IA. Les fondamentaux du SEO restent pertinents, notamment l'indexation, l'accessibilité des pages et la qualité des contenus.",
  },
  {
    id: 4,
    prompt:
      "Ton entreprise n'apparaît pas dans une réponse générée par un assistant. Que peux-tu en conclure ?",
    options: [
      {
        letter: 'A',
        text: "Ton site est nécessairement bloqué par tous les robots d'intelligence artificielle.",
      },
      {
        letter: 'B',
        text: "Ce test précis n'a pas montré de mention, mais il ne suffit pas à établir ton absence de visibilité dans toutes les réponses.",
      },
      { letter: 'C', text: 'Tu dois immédiatement acheter des backlinks pour être cité.' },
    ],
    correct: 'B',
    explanation:
      "Les réponses générées peuvent varier selon les questions, les outils et le contexte. L'absence d'une marque dans un test isolé ne permet pas de conclure qu'elle n'apparaît jamais.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principaux mécanismes de recherche et de citation dans les moteurs IA."
  />
</template>
