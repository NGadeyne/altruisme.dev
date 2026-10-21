<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Qu'est-ce que l'intention de recherche ?",
    options: [
      { letter: 'A', text: "Le nombre de fois qu'un mot-clé est recherché sur Google." },
      {
        letter: 'B',
        text: "Le besoin ou l'objectif qu'une personne cherche à satisfaire lorsqu'elle effectue une recherche.",
      },
      { letter: 'C', text: 'La position occupée par une page dans les résultats Google.' },
    ],
    correct: 'B',
    explanation:
      "L'intention de recherche correspond à ce qu'une personne cherche réellement à accomplir. Comprendre cette intention permet de proposer un contenu adapté à ses attentes.",
  },
  {
    id: 2,
    prompt: 'Quelle recherche correspond principalement à une intention informationnelle ?',
    options: [
      { letter: 'A', text: '« Comment améliorer la vitesse de mon site internet »' },
      { letter: 'B', text: '« Acheter formation SEO »' },
      { letter: 'C', text: '« LinkedIn connexion »' },
    ],
    correct: 'A',
    explanation:
      "Cette recherche exprime principalement un besoin de compréhension ou de résolution d'un problème. Les deux autres exemples suggèrent davantage une intention transactionnelle et navigationnelle.",
  },
  {
    id: 3,
    prompt:
      "Pourquoi est-il intéressant d'observer les résultats Google avant de créer un contenu ?",
    options: [
      {
        letter: 'A',
        text: "Parce que les trois premiers résultats indiquent exactement le texte qu'il faut recopier.",
      },
      {
        letter: 'B',
        text: "Parce que Google garantit qu'une page similaire obtiendra le même classement.",
      },
      {
        letter: 'C',
        text: 'Parce que les types de résultats proposés peuvent aider à comprendre les attentes associées à une recherche.',
      },
    ],
    correct: 'C',
    explanation:
      "Observer les résultats Google permet d'identifier les types de contenus que le moteur de recherche semble privilégier pour une requête. Cela aide à mieux comprendre les besoins des internautes, sans garantir un classement particulier.",
  },
  {
    id: 4,
    prompt: 'Faut-il créer une page différente pour chaque variation de mot-clé ?',
    options: [
      { letter: 'A', text: 'Oui, chaque expression doit obligatoirement posséder sa propre page.' },
      {
        letter: 'B',
        text: 'Non, plusieurs expressions proches peuvent correspondre à une même intention et être traitées par une page pertinente.',
      },
      {
        letter: 'C',
        text: 'Oui, car Google ne comprend que les mots-clés écrits exactement de la même manière.',
      },
    ],
    correct: 'B',
    explanation:
      "Plusieurs expressions différentes peuvent répondre à une même intention. Une seule page bien construite peut donc être pertinente pour plusieurs recherches proches, sans qu'il soit nécessaire de multiplier les contenus similaires.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant les intentions de recherche."
  />
</template>
