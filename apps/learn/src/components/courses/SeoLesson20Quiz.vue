<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Qu'est-ce qu'un backlink ?",
    options: [
      {
        letter: 'A',
        text: 'Un lien présent sur une page de ton site et qui renvoie vers une autre page du même domaine.',
      },
      {
        letter: 'B',
        text: 'Un lien publié sur un autre site et qui dirige vers une page de ton site.',
      },
      { letter: 'C', text: 'Un mot-clé utilisé plusieurs fois dans ton contenu.' },
    ],
    correct: 'B',
    explanation:
      'Un backlink est un lien entrant depuis un autre site. Il peut permettre aux visiteurs et aux robots qui le suivent de découvrir une ressource extérieure.',
  },
  {
    id: 2,
    prompt: 'Quelle affirmation concernant le Domain Rating est correcte ?',
    options: [
      {
        letter: 'A',
        text: "C'est une métrique proposée par Ahrefs, et non une note officielle attribuée par Google.",
      },
      {
        letter: 'B',
        text: "C'est le score utilisé directement par Google pour classer tous les domaines.",
      },
      { letter: 'C', text: "Un DR de 50 garantit l'indexation et le classement d'un site." },
    ],
    correct: 'A',
    explanation:
      "Le Domain Rating est une métrique développée par Ahrefs. Elle peut servir de repère pour examiner un profil de backlinks, mais Google ne l'utilise pas comme une note officielle de classement.",
  },
  {
    id: 3,
    prompt: 'Quel backlink présente une justification éditoriale claire ?',
    options: [
      {
        letter: 'A',
        text: 'Un lien placé automatiquement dans une liste de centaines de sites sans rapport.',
      },
      {
        letter: 'B',
        text: 'Un lien acheté uniquement pour manipuler les classements Google.',
      },
      {
        letter: 'C',
        text: 'Un lien depuis un guide spécialisé qui recommande une ressource réellement utile à ses lecteurs.',
      },
    ],
    correct: 'C',
    explanation:
      'Un lien éditorial pertinent possède une justification claire dans son contexte. Il peut aider le lecteur à découvrir une ressource complémentaire, sans garantir un gain précis de positionnement.',
  },
  {
    id: 4,
    prompt: 'Un site récent possède peu de backlinks. Que peut-on en conclure ?',
    options: [
      { letter: 'A', text: 'Il ne pourra jamais apparaître dans les résultats Google.' },
      {
        letter: 'B',
        text: 'Il peut encore se positionner sur des recherches pertinentes ; les backlinks ne sont pas une condition préalable universelle.',
      },
      {
        letter: 'C',
        text: 'Il doit obligatoirement acheter cinquante liens avant de publier ses premiers contenus.',
      },
    ],
    correct: 'B',
    explanation:
      "Un site récent peut apparaître sur certaines recherches même s'il possède peu de backlinks. Les performances dépendent de nombreux éléments, dont la pertinence des contenus et la concurrence.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant l'autorité et les backlinks."
  />
</template>
