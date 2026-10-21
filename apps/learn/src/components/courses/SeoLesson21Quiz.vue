<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quelle est une bonne première démarche pour rechercher des backlinks ?',
    options: [
      { letter: 'A', text: 'Acheter immédiatement des centaines de liens sur des sites inconnus.' },
      {
        letter: 'B',
        text: 'Identifier des organisations pertinentes qui pourraient légitimement mentionner une ressource utile.',
      },
      {
        letter: 'C',
        text: 'Créer automatiquement plusieurs annuaires contenant des liens vers son site.',
      },
    ],
    correct: 'B',
    explanation:
      'Une bonne stratégie commence par des publications et des organisations pertinentes. Le lien doit posséder une justification compréhensible et apporter une ressource utile au lecteur.',
  },
  {
    id: 2,
    prompt: "Quel est le principal intérêt d'un partenariat professionnel réel ?",
    options: [
      {
        letter: 'A',
        text: "Il peut donner lieu à des mentions naturelles et utiles lorsqu'une collaboration mérite d'être présentée.",
      },
      {
        letter: 'B',
        text: "Il oblige contractuellement tous les partenaires à utiliser le même texte d'ancrage commercial.",
      },
      { letter: 'C', text: 'Il garantit une progression immédiate des positions Google.' },
    ],
    correct: 'A',
    explanation:
      "Une collaboration réelle peut naturellement justifier une mention ou un lien, notamment lorsqu'un projet est présenté publiquement. Mais aucun partenaire n'est tenu de créer un backlink.",
  },
  {
    id: 3,
    prompt:
      'Une publication propose un article sponsorisé comportant un lien vers ton site. Quelle pratique respecte les recommandations de Google ?',
    options: [
      {
        letter: 'A',
        text: 'Exiger un lien transmettant des signaux de classement sans indiquer son caractère commercial.',
      },
      { letter: 'B', text: 'Publier le même article sur plusieurs centaines de sites.' },
      {
        letter: 'C',
        text: 'Qualifier correctement le lien commercial, notamment avec rel="sponsored" ou rel="nofollow".',
      },
    ],
    correct: 'C',
    explanation:
      'Google recommande de qualifier les liens publicitaires ou sponsorisés, notamment avec rel="sponsored". L\'attribut nofollow reste également accepté pour signaler ce type de lien.',
  },
  {
    id: 4,
    prompt: "Quel objectif est réaliste pour une première recherche d'opportunités ?",
    options: [
      { letter: 'A', text: 'Obtenir obligatoirement cinquante backlinks en une semaine.' },
      {
        letter: 'B',
        text: 'Identifier cinq organisations pertinentes, comprendre pourquoi elles pourraient mentionner ton activité et préparer une première démarche.',
      },
      {
        letter: 'C',
        text: 'Faire augmenter son Domain Rating à un niveau précis avant de créer des contenus.',
      },
    ],
    correct: 'B',
    explanation:
      'Identifier cinq opportunités cohérentes constitue un premier objectif accessible. Cette démarche permet de préparer une stratégie fondée sur la pertinence, sans chercher à accumuler artificiellement des backlinks.',
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales méthodes permettant de développer des backlinks pertinents."
  />
</template>
