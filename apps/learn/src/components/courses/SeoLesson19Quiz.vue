<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Quel est l'objectif principal d'une stratégie éditoriale ?",
    options: [
      { letter: 'A', text: "Publier le plus grand nombre d'articles possible." },
      {
        letter: 'B',
        text: "Organiser des contenus pertinents en fonction des besoins du public et des objectifs de l'activité.",
      },
      { letter: 'C', text: 'Répéter systématiquement les mêmes mots-clés sur plusieurs pages.' },
    ],
    correct: 'B',
    explanation:
      "Une stratégie éditoriale permet de choisir et d'organiser les contenus en fonction de leur utilité pour le public et de leur contribution aux objectifs du site. La quantité de publications ne constitue pas, à elle seule, un objectif pertinent.",
  },
  {
    id: 2,
    prompt: 'Quelle affirmation concernant la fréquence de publication est correcte ?',
    options: [
      { letter: 'A', text: 'Google exige obligatoirement un nouvel article chaque semaine.' },
      { letter: 'B', text: 'Publier quotidiennement garantit une meilleure position.' },
      {
        letter: 'C',
        text: "Il est préférable d'adopter un rythme réaliste permettant de maintenir la qualité des contenus.",
      },
    ],
    correct: 'C',
    explanation:
      "Il n'existe pas de fréquence universelle de publication garantissant de bonnes positions. Il est préférable de choisir un rythme compatible avec les ressources disponibles et la production de contenus fiables et utiles.",
  },
  {
    id: 3,
    prompt:
      'Une page existante répond déjà à une intention importante, mais ses informations sont incomplètes. Quelle approche peut être pertinente ?',
    options: [
      {
        letter: 'A',
        text: 'Examiner les améliorations possibles avant de créer une nouvelle page sur le même sujet.',
      },
      { letter: 'B', text: 'Publier immédiatement plusieurs articles similaires.' },
      { letter: 'C', text: 'Supprimer systématiquement la page existante.' },
    ],
    correct: 'A',
    explanation:
      "Lorsqu'une page répond déjà à une intention de recherche, une optimisation peut être préférable à la création d'un contenu supplémentaire qui traiterait essentiellement le même sujet.",
  },
  {
    id: 4,
    prompt: 'Que doit permettre de suivre un calendrier éditorial ?',
    options: [
      { letter: 'A', text: 'Uniquement le nombre total de mots publiés.' },
      {
        letter: 'B',
        text: 'Les contenus, leurs priorités, leurs échéances et leur avancement.',
      },
      { letter: 'C', text: 'La position garantie de chaque article dans Google.' },
    ],
    correct: 'B',
    explanation:
      'Le calendrier éditorial permet de conserver une vision claire des contenus à créer ou améliorer, de leur priorité, des échéances et des principales étapes de réalisation.',
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce module, prends quelques instants pour vérifier que tu as compris les principales notions concernant la stratégie éditoriale."
  />
</template>
