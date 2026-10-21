<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Qu'est-ce qui rend principalement un contenu pertinent pour une recherche ?",
    options: [
      { letter: 'A', text: "Le fait qu'il contienne plusieurs fois le mot-clé principal." },
      { letter: 'B', text: "Sa capacité à répondre correctement au besoin de l'internaute." },
      { letter: 'C', text: "Le fait qu'il possède au moins 2 000 mots." },
    ],
    correct: 'B',
    explanation:
      "Un contenu pertinent doit avant tout apporter une réponse adaptée à l'intention de recherche. La répétition de mots-clés et la longueur du texte ne garantissent pas sa qualité.",
  },
  {
    id: 2,
    prompt:
      'Une page de prestation présente uniquement des affirmations générales comme « service de qualité » et « accompagnement personnalisé ». Quelle amélioration serait la plus utile ?',
    options: [
      {
        letter: 'A',
        text: 'Ajouter des explications concrètes sur la prestation, son déroulement et les besoins auxquels elle répond.',
      },
      {
        letter: 'B',
        text: 'Répéter davantage les mêmes expressions pour augmenter la longueur du texte.',
      },
      {
        letter: 'C',
        text: "Supprimer toutes les informations concernant les prestations pour ne conserver qu'un formulaire de contact.",
      },
    ],
    correct: 'A',
    explanation:
      "Des informations concrètes permettent au visiteur de mieux comprendre ce que propose l'entreprise. Elles sont généralement plus utiles que des affirmations générales répétées sans explication.",
  },
  {
    id: 3,
    prompt: 'Quelle affirmation concernant la longueur des contenus est correcte ?',
    options: [
      { letter: 'A', text: 'Google exige au moins 1 500 mots pour indexer une page.' },
      {
        letter: 'B',
        text: 'Les articles longs sont toujours mieux positionnés que les articles courts.',
      },
      {
        letter: 'C',
        text: 'La longueur doit dépendre du sujet et des informations nécessaires pour répondre au besoin.',
      },
    ],
    correct: 'C',
    explanation:
      'Google ne fixe pas de longueur idéale applicable à tous les contenus. Une page doit être suffisamment complète pour répondre au besoin, sans ajouter artificiellement du texte.',
  },
  {
    id: 4,
    prompt: "Pourquoi est-il intéressant d'ajouter des exemples réels à un contenu ?",
    options: [
      {
        letter: 'A',
        text: "Parce qu'un exemple garantit automatiquement une meilleure position sur Google.",
      },
      {
        letter: 'B',
        text: "Parce qu'il peut aider à comprendre les informations présentées et montrer concrètement une expérience ou une méthode.",
      },
      {
        letter: 'C',
        text: "Parce qu'un exemple remplace systématiquement toutes les explications nécessaires.",
      },
    ],
    correct: 'B',
    explanation:
      'Les exemples réels peuvent rendre les explications plus compréhensibles et contribuer à montrer une expérience concrète. Ils doivent toutefois rester exacts et adaptés au sujet.',
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant la qualité des contenus et les intentions de recherche."
  />
</template>
