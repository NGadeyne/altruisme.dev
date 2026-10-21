<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quel est le rôle principal du fichier robots.txt ?',
    options: [
      { letter: 'A', text: 'Garantir que les pages bloquées disparaissent des résultats Google.' },
      {
        letter: 'B',
        text: "Indiquer aux robots compatibles les parties du site qu'ils peuvent ou ne peuvent pas explorer.",
      },
      {
        letter: 'C',
        text: 'Définir automatiquement les mots-clés sur lesquels le site doit apparaître.',
      },
    ],
    correct: 'B',
    explanation:
      "Le fichier robots.txt permet principalement de gérer l'exploration par les robots compatibles. Il ne garantit pas qu'une URL sera absente des résultats et ne constitue pas une protection des contenus privés.",
  },
  {
    id: 2,
    prompt: 'Une URL figure dans le sitemap XML de ton site. Que peut-on en conclure ?',
    options: [
      { letter: 'A', text: 'Elle sera obligatoirement indexée par Google.' },
      { letter: 'B', text: 'Elle sera automatiquement placée en première position.' },
      {
        letter: 'C',
        text: 'Elle est signalée aux moteurs de recherche, mais son exploration et son indexation ne sont pas garanties.',
      },
    ],
    correct: 'C',
    explanation:
      'Un sitemap signale des URL importantes aux moteurs de recherche. Il peut faciliter leur découverte, mais ne garantit ni leur exploration ni leur indexation.',
  },
  {
    id: 3,
    prompt: "Quel est le rôle d'une balise canonique ?",
    options: [
      {
        letter: 'A',
        text: 'Indiquer une URL préférée lorsque plusieurs pages possèdent un contenu identique ou très similaire.',
      },
      { letter: 'B', text: 'Envoyer automatiquement tous les visiteurs vers une autre adresse.' },
      { letter: 'C', text: "Garantir qu'une page ne sera jamais explorée." },
    ],
    correct: 'A',
    explanation:
      "Une balise canonique indique une préférence concernant la version représentative d'un contenu identique ou très similaire. Google peut toutefois choisir une autre adresse selon les signaux dont il dispose.",
  },
  {
    id: 4,
    prompt:
      'Une page possède une instruction noindex, mais son exploration est bloquée par robots.txt. Quel problème peut apparaître ?',
    options: [
      {
        letter: 'A',
        text: 'Google prendra nécessairement en compte noindex sans accéder à la page.',
      },
      {
        letter: 'B',
        text: "Google peut ne pas voir l'instruction noindex, puisque l'exploration de la page est bloquée.",
      },
      {
        letter: 'C',
        text: 'Le sitemap rendra automatiquement la page indexable malgré toutes les restrictions.',
      },
    ],
    correct: 'B',
    explanation:
      "Pour prendre en compte une instruction noindex, Google doit pouvoir y accéder. Si une règle robots.txt bloque l'exploration, cette instruction peut rester invisible pour Google.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant les fichiers et directives techniques."
  />
</template>
