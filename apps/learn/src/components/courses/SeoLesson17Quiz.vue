<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quel sujet possède généralement le meilleur potentiel pour une entreprise ?',
    options: [
      {
        letter: 'A',
        text: 'Celui qui possède obligatoirement le volume de recherche le plus élevé.',
      },
      {
        letter: 'B',
        text: "Celui qui répond à un besoin pertinent du public et présente un lien cohérent avec l'activité.",
      },
      { letter: 'C', text: 'Celui qui permet de publier le plus grand nombre de mots.' },
    ],
    correct: 'B',
    explanation:
      "Le potentiel d'un sujet dépend de plusieurs éléments, notamment son intérêt pour le public, sa proximité avec l'activité et la capacité à apporter une réponse utile. Un volume de recherche élevé ne garantit pas des résultats commerciaux.",
  },
  {
    id: 2,
    prompt:
      "Que peut-on faire lorsqu'une question intéressante est déjà partiellement traitée sur une page existante ?",
    options: [
      {
        letter: 'A',
        text: 'Créer obligatoirement une nouvelle page avec un titre légèrement différent.',
      },
      { letter: 'B', text: 'Supprimer immédiatement la page existante.' },
      {
        letter: 'C',
        text: 'Examiner si le contenu actuel peut être enrichi avant de créer une nouvelle ressource.',
      },
    ],
    correct: 'C',
    explanation:
      "Lorsqu'une page répond déjà partiellement à une intention de recherche, il peut être préférable de l'améliorer plutôt que de multiplier les contenus redondants.",
  },
  {
    id: 3,
    prompt: 'Quelle affirmation concernant Google Trends est correcte ?',
    options: [
      {
        letter: 'A',
        text: "Il présente l'évolution relative de l'intérêt pour des recherches, mais pas leurs volumes mensuels exacts.",
      },
      { letter: 'B', text: "Il garantit le nombre de visiteurs qu'un futur article recevra." },
      {
        letter: 'C',
        text: "Il permet de connaître précisément les positions futures d'une page dans Google.",
      },
    ],
    correct: 'A',
    explanation:
      "Google Trends utilise une échelle normalisée permettant d'observer un intérêt relatif dans une zone géographique et sur une période donnée. Ces données ne correspondent pas directement à des volumes de recherche mensuels.",
  },
  {
    id: 4,
    prompt: 'Quelle est une bonne méthode pour identifier des idées de contenus ?',
    options: [
      { letter: 'A', text: 'Reprendre automatiquement les articles publiés par les concurrents.' },
      {
        letter: 'B',
        text: 'Observer les questions des clients, les données disponibles et les besoins auxquels le site ne répond pas encore suffisamment.',
      },
      {
        letter: 'C',
        text: "Publier uniquement sur les sujets à la mode, même lorsqu'ils n'ont aucun lien avec l'activité.",
      },
    ],
    correct: 'B',
    explanation:
      "Les questions clients, les recherches observables dans Search Console et les besoins non couverts constituent de bonnes sources d'inspiration. L'objectif est de découvrir des sujets réellement utiles, pas de copier les publications existantes.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant la recherche et la priorisation des sujets."
  />
</template>
