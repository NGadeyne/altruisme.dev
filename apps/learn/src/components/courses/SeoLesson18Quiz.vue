<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quelle est la première étape pour préparer un contenu de qualité ?',
    options: [
      { letter: 'A', text: 'Définir exactement le nombre de mots à rédiger.' },
      {
        letter: 'B',
        text: "Comprendre le public, l'intention de recherche et le résultat attendu pour le lecteur.",
      },
      { letter: 'C', text: 'Reproduire les sous-titres des premiers résultats Google.' },
    ],
    correct: 'B',
    explanation:
      "Un contenu doit commencer par une compréhension claire de son public et de l'intention de recherche. Ces éléments permettent de sélectionner les informations nécessaires et de construire une réponse adaptée.",
  },
  {
    id: 2,
    prompt: "Quel est l'intérêt d'un brief éditorial ?",
    options: [
      {
        letter: 'A',
        text: 'Organiser les objectifs, les informations et la structure du contenu avant sa rédaction.',
      },
      {
        letter: 'B',
        text: 'Garantir automatiquement que le futur article sera indexé en première position.',
      },
      {
        letter: 'C',
        text: 'Remplacer toutes les recherches nécessaires par une liste de mots-clés.',
      },
    ],
    correct: 'A',
    explanation:
      'Le brief éditorial constitue un document de préparation. Il permet de définir le sujet, les objectifs, la structure et les ressources utiles avant la rédaction. Il ne garantit pas le positionnement du contenu.',
  },
  {
    id: 3,
    prompt: 'Comment faut-il utiliser les contenus déjà présents dans Google ?',
    options: [
      {
        letter: 'A',
        text: "En recopiant leurs principaux paragraphes lorsqu'ils sont bien positionnés.",
      },
      {
        letter: 'B',
        text: 'En reproduisant obligatoirement leur longueur et leur nombre de sous-titres.',
      },
      {
        letter: 'C',
        text: 'En comprenant les attentes des internautes, puis en construisant une réponse originale et utile.',
      },
    ],
    correct: 'C',
    explanation:
      "L'observation des résultats Google peut aider à comprendre les besoins des internautes, mais elle ne doit pas conduire à reproduire automatiquement les contenus existants. L'objectif est d'apporter une véritable valeur supplémentaire.",
  },
  {
    id: 4,
    prompt: "Quelle affirmation concernant la qualité et la fiabilité d'un contenu est correcte ?",
    options: [
      {
        letter: 'A',
        text: "Un contenu est automatiquement fiable lorsqu'il possède beaucoup de liens externes.",
      },
      {
        letter: 'B',
        text: 'Les affirmations importantes doivent être exactes, contextualisées et appuyées sur des informations suffisamment fiables.',
      },
      {
        letter: 'C',
        text: 'Un article rédigé avec une IA ne nécessite aucune vérification supplémentaire.',
      },
    ],
    correct: 'B',
    explanation:
      "La qualité d'un contenu dépend notamment de l'exactitude des informations, de leur pertinence et de la confiance qu'elles peuvent inspirer. Les outils utilisés pour rédiger ne remplacent pas la vérification des faits.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant la préparation d'un contenu SEO."
  />
</template>
