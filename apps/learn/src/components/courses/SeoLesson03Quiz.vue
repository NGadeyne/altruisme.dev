<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Pourquoi est-il important de comprendre l'intention de recherche ?",
    options: [
      {
        letter: 'A',
        text: 'Pour répéter exactement les mêmes mots-clés dans toutes les pages du site.',
      },
      {
        letter: 'B',
        text: 'Pour proposer des contenus adaptés aux besoins réels des personnes qui effectuent une recherche.',
      },
      { letter: 'C', text: 'Pour garantir automatiquement la première position sur Google.' },
    ],
    correct: 'B',
    explanation:
      "Comprendre l'intention de recherche permet de proposer des pages qui répondent aux besoins réels des internautes, plutôt que de se concentrer uniquement sur la présence de certains mots-clés.",
  },
  {
    id: 2,
    prompt: 'Quel est le rôle du maillage interne ?',
    options: [
      {
        letter: 'A',
        text: 'Relier des pages pertinentes afin de faciliter la navigation et la découverte des contenus.',
      },
      { letter: 'B', text: 'Remplacer les contenus des pages par un grand nombre de liens.' },
      {
        letter: 'C',
        text: "Obtenir automatiquement davantage de backlinks depuis d'autres sites.",
      },
    ],
    correct: 'A',
    explanation:
      'Le maillage interne facilite la navigation des visiteurs et aide les moteurs de recherche à découvrir les pages et à comprendre les relations entre les différents contenus.',
  },
  {
    id: 3,
    prompt: 'Quelle affirmation concernant le référencement technique est correcte ?',
    options: [
      {
        letter: 'A',
        text: 'Un site qui obtient un score de performance parfait sera nécessairement premier sur Google.',
      },
      {
        letter: 'B',
        text: "Le référencement technique n'a aucune importance si les contenus sont bien rédigés.",
      },
      {
        letter: 'C',
        text: "Le référencement technique aide notamment à rendre les pages accessibles aux moteurs de recherche et à améliorer certains aspects de l'expérience utilisateur.",
      },
    ],
    correct: 'C',
    explanation:
      "Le référencement technique contribue notamment à l'accessibilité des contenus, à leur exploration et à certains aspects de l'expérience utilisateur. Il ne garantit toutefois aucun classement particulier.",
  },
  {
    id: 4,
    prompt: 'Quelle approche est la plus pertinente pour commencer à améliorer un site ?',
    options: [
      {
        letter: 'A',
        text: 'Modifier immédiatement toutes les pages et publier le plus de contenus possible.',
      },
      {
        letter: 'B',
        text: 'Identifier les pages importantes, comprendre leurs problèmes et prioriser les actions utiles.',
      },
      {
        letter: 'C',
        text: 'Acheter un grand nombre de backlinks sans analyser les contenus existants.',
      },
    ],
    correct: 'B',
    explanation:
      "Un bon travail SEO commence par la compréhension du site et la priorisation des actions, plutôt que par une accumulation d'optimisations réalisées au hasard.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce premier module, prends quelques instants pour vérifier que tu as compris les principaux fondamentaux du référencement naturel."
  />
</template>
