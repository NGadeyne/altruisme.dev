<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Quel est le principal objectif d'un plan SEO sur 90 jours ?",
    options: [
      { letter: 'A', text: 'Garantir la première position sur Google en trois mois.' },
      {
        letter: 'B',
        text: 'Organiser les actions prioritaires, suivre leur réalisation et mesurer progressivement les résultats.',
      },
      { letter: 'C', text: 'Publier obligatoirement un article chaque jour.' },
    ],
    correct: 'B',
    explanation:
      "Un plan SEO sur 90 jours constitue un cadre d'organisation. Il permet de sélectionner les actions importantes, de les réaliser progressivement et d'observer leurs résultats, sans garantir une position particulière.",
  },
  {
    id: 2,
    prompt:
      'Quelle différence existe entre un critère de réalisation et un indicateur de résultat ?',
    options: [
      {
        letter: 'A',
        text: "Le critère de réalisation permet de vérifier qu'une action a été effectuée, tandis qu'un indicateur de résultat permet d'observer ses effets éventuels.",
      },
      {
        letter: 'B',
        text: 'Les deux représentent obligatoirement le nombre de visiteurs du site.',
      },
      {
        letter: 'C',
        text: "Une action ne peut être terminée que lorsqu'elle a généré une hausse de trafic.",
      },
    ],
    correct: 'A',
    explanation:
      "Un critère de réalisation permet de vérifier qu'une amélioration a été effectuée. Un indicateur de résultat mesure une évolution éventuelle de la visibilité, du trafic ou des objectifs commerciaux.",
  },
  {
    id: 3,
    prompt:
      "Que faut-il faire lorsqu'une nouvelle urgence technique apparaît pendant le calendrier ?",
    options: [
      { letter: 'A', text: 'Continuer le programme sans examiner le problème.' },
      { letter: 'B', text: 'Abandonner définitivement toutes les actions prévues.' },
      {
        letter: 'C',
        text: "Évaluer l'urgence, adapter les priorités si nécessaire et conserver une organisation cohérente.",
      },
    ],
    correct: 'C',
    explanation:
      "Un calendrier doit rester adaptable. Lorsqu'un problème important apparaît, il est pertinent d'évaluer son urgence et de modifier les priorités sans abandonner systématiquement l'ensemble du plan.",
  },
  {
    id: 4,
    prompt:
      "À la fin des 90 jours, les positions d'une page n'ont pas progressé. Quelle est la meilleure approche ?",
    options: [
      {
        letter: 'A',
        text: 'Considérer automatiquement que tout le travail réalisé est inutile.',
      },
      {
        letter: 'B',
        text: 'Examiner les actions terminées, les données disponibles, le contexte et les délais possibles avant de décider de la suite.',
      },
      {
        letter: 'C',
        text: 'Modifier immédiatement toutes les URL du site pour relancer son référencement.',
      },
    ],
    correct: 'B',
    explanation:
      "Les effets du SEO peuvent prendre du temps et dépendent de nombreux facteurs. Il faut examiner les performances, les modifications réalisées et le contexte avant de conclure qu'une action était inutile ou de choisir une nouvelle optimisation.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer la formation, prends quelques instants pour vérifier que tu as compris les principaux principes permettant de construire un plan SEO réaliste."
  />
</template>
