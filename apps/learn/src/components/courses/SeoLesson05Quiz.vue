<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Une page non indexée constitue-t-elle toujours un problème SEO ?',
    options: [
      {
        letter: 'A',
        text: "Oui, toutes les pages d'un site doivent obligatoirement être indexées.",
      },
      {
        letter: 'B',
        text: "Non, certaines pages peuvent être volontairement exclues ou correspondre à des variantes d'autres contenus.",
      },
      {
        letter: 'C',
        text: 'Oui, car Google pénalise automatiquement les sites qui possèdent des pages non indexées.',
      },
    ],
    correct: 'B',
    explanation:
      "Toutes les pages n'ont pas nécessairement vocation à être indexées. L'important est de vérifier que les pages utiles et stratégiques pour ton activité sont correctement prises en compte.",
  },
  {
    id: 2,
    prompt: 'Que signifie le statut « Détectée, actuellement non indexée » ?',
    options: [
      { letter: 'A', text: "Google connaît l'URL, mais ne l'a pas encore explorée." },
      { letter: 'B', text: 'Google a exploré et supprimé définitivement la page de son index.' },
      { letter: 'C', text: "La page est indexée, mais elle n'apparaît pas en première position." },
    ],
    correct: 'A',
    explanation:
      "Ce statut signifie que Google connaît l'adresse de la page, mais ne l'a pas encore explorée. Cela ne prouve pas que le contenu est de mauvaise qualité.",
  },
  {
    id: 3,
    prompt: "Quelle est la différence entre l'inspection d'URL et le test de l'URL active ?",
    options: [
      { letter: 'A', text: 'Les deux fournissent systématiquement les mêmes informations.' },
      { letter: 'B', text: "Le test de l'URL active garantit que la page sera indexée." },
      {
        letter: 'C',
        text: "L'inspection fournit notamment les informations connues de Google sur l'indexation, tandis que le test actif vérifie certains aspects de la version actuellement accessible.",
      },
    ],
    correct: 'C',
    explanation:
      "L'inspection permet de consulter les informations d'indexation disponibles, tandis que le test de l'URL active examine certains aspects de la version actuelle. Un résultat positif au test actif ne garantit pas l'indexation.",
  },
  {
    id: 4,
    prompt: "Que faut-il faire lorsqu'une page importante n'est pas indexée ?",
    options: [
      {
        letter: 'A',
        text: "Demander son indexation plusieurs fois par jour jusqu'à ce qu'elle apparaisse.",
      },
      {
        letter: 'B',
        text: 'Examiner le motif de non-indexation, vérifier la situation de la page et déterminer si une correction est nécessaire.',
      },
      {
        letter: 'C',
        text: 'Supprimer immédiatement la page et la recréer sous une autre adresse.',
      },
    ],
    correct: 'B',
    explanation:
      "Avant de demander une nouvelle indexation ou de modifier la page, il faut comprendre la situation. Certaines exclusions sont normales, tandis que d'autres peuvent nécessiter une correction technique ou une amélioration du contenu.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant l'indexation et son analyse dans Google Search Console."
  />
</template>
