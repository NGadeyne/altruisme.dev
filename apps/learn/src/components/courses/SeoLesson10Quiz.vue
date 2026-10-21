<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Quel est le rôle principal de l'élément title ?",
    options: [
      { letter: 'A', text: 'Garantir la première position sur Google.' },
      {
        letter: 'B',
        text: 'Décrire le sujet de la page et contribuer à la génération du titre affiché dans les résultats de recherche.',
      },
      { letter: 'C', text: 'Remplacer le titre principal visible sur la page.' },
    ],
    correct: 'B',
    explanation:
      "Le title permet de présenter le sujet de la page. Google peut l'utiliser, parmi d'autres éléments, pour générer le titre cliquable affiché dans ses résultats. Il ne garantit aucun classement particulier.",
  },
  {
    id: 2,
    prompt: 'Google affiche-t-il toujours exactement la meta description renseignée ?',
    options: [
      {
        letter: 'A',
        text: 'Non, Google peut utiliser un autre passage du contenu selon la recherche.',
      },
      { letter: 'B', text: "Oui, la meta description est toujours affichée à l'identique." },
      { letter: 'C', text: 'Oui, à condition de respecter exactement 160 caractères.' },
    ],
    correct: 'A',
    explanation:
      "Google peut choisir un extrait différent de la meta description lorsqu'il estime qu'un passage du contenu correspond davantage à la recherche effectuée.",
  },
  {
    id: 3,
    prompt: "Quelle précaution faut-il prendre avant de modifier l'URL d'une page existante ?",
    options: [
      { letter: 'A', text: 'Ajouter le mot-clé principal autant de fois que possible.' },
      { letter: 'B', text: "Supprimer immédiatement l'ancienne adresse." },
      {
        letter: 'C',
        text: 'Vérifier les conséquences du changement et prévoir les redirections nécessaires.',
      },
    ],
    correct: 'C',
    explanation:
      "Une modification d'URL peut affecter les liens existants et la manière dont Google découvre la page. Il est important de prévoir les redirections appropriées et les mises à jour nécessaires avant de réaliser le changement.",
  },
  {
    id: 4,
    prompt: 'Quelle affirmation concernant les titres H1, H2 et H3 est correcte ?',
    options: [
      {
        letter: 'A',
        text: 'Chaque sous-titre doit obligatoirement contenir le mot-clé principal.',
      },
      {
        letter: 'B',
        text: "Ils permettent d'organiser les informations et de rendre la structure du contenu plus compréhensible.",
      },
      { letter: 'C', text: 'Leur présence garantit une amélioration des positions sur Google.' },
    ],
    correct: 'B',
    explanation:
      "Les titres H1, H2 et H3 permettent d'organiser le contenu et de faciliter sa compréhension. Leur utilisation ne garantit pas de meilleures positions, et il n'est pas nécessaire de répéter systématiquement le même mot-clé dans chaque titre.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris le rôle des principaux éléments que nous venons d'étudier."
  />
</template>
