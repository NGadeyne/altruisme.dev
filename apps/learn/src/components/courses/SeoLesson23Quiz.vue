<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quelle affirmation concernant le référencement local est correcte ?',
    options: [
      { letter: 'A', text: 'Il concerne uniquement les sites qui vendent des produits en ligne.' },
      {
        letter: 'B',
        text: "Il permet de travailler la visibilité d'une entreprise sur des recherches associées à une zone géographique.",
      },
      {
        letter: 'C',
        text: "Il consiste uniquement à ajouter le nom d'une ville dans tous les titres du site.",
      },
    ],
    correct: 'B',
    explanation:
      'Le référencement local vise à améliorer la visibilité des entreprises sur des recherches possédant une dimension géographique. Il peut concerner à la fois les pages web et les résultats associés aux établissements.',
  },
  {
    id: 2,
    prompt: 'Quels sont les trois principaux critères du classement local indiqués par Google ?',
    options: [
      { letter: 'A', text: 'La pertinence, la distance et la notoriété.' },
      { letter: 'B', text: 'Le nombre de pages, la longueur des articles et le Domain Rating.' },
      {
        letter: 'C',
        text: 'Le prix des prestations, la couleur du site et le nombre de publications sur les réseaux sociaux.',
      },
    ],
    correct: 'A',
    explanation:
      'Google explique que le classement local repose principalement sur la pertinence, la distance et la notoriété. Ces dimensions sont combinées pour sélectionner les établissements susceptibles de répondre aux besoins des utilisateurs.',
  },
  {
    id: 3,
    prompt:
      "Une entreprise exerce exclusivement son activité en ligne, sans recevoir ni rencontrer physiquement ses clients. Peut-elle normalement créer une fiche d'établissement Google ?",
    options: [
      { letter: 'A', text: 'Oui, à condition de louer une adresse virtuelle.' },
      { letter: 'B', text: 'Oui, en créant une fiche dans chaque ville où elle souhaite vendre.' },
      {
        letter: 'C',
        text: 'Non, les activités exclusivement en ligne ne sont normalement pas éligibles.',
      },
    ],
    correct: 'C',
    explanation:
      "Les entreprises exclusivement en ligne ne sont normalement pas éligibles à une fiche d'établissement. Une adresse virtuelle ne permet pas de contourner cette condition.",
  },
  {
    id: 4,
    prompt:
      'Une entreprise indique plusieurs villes dans sa zone desservie. Que peut-on en conclure ?',
    options: [
      {
        letter: 'A',
        text: 'Elle apparaîtra automatiquement en première position dans toutes ces villes.',
      },
      {
        letter: 'B',
        text: 'Elle indique les territoires dans lesquels elle intervient, mais sa visibilité dépend toujours des critères de classement local.',
      },
      { letter: 'C', text: "Elle n'a plus besoin de posséder un site internet." },
    ],
    correct: 'B',
    explanation:
      "Définir une zone desservie permet de présenter le territoire d'intervention d'une entreprise éligible. Cela ne garantit pas une visibilité identique ni une position particulière dans toutes les villes concernées.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions du référencement local."
  />
</template>
