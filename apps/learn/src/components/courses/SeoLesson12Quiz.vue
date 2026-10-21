<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Quel est l'intérêt principal du maillage interne ?",
    options: [
      {
        letter: 'A',
        text: 'Garantir que toutes les pages apparaissent en première position sur Google.',
      },
      {
        letter: 'B',
        text: 'Relier les contenus pour faciliter la navigation, la découverte et la compréhension des pages.',
      },
      { letter: 'C', text: "Remplacer les contenus par des liens vers d'autres pages." },
    ],
    correct: 'B',
    explanation:
      'Le maillage interne permet de créer des relations entre les pages. Il facilite la navigation des internautes, peut aider les moteurs de recherche à découvrir des URL et fournit des indications sur les contenus liés.',
  },
  {
    id: 2,
    prompt:
      "Quel texte d'ancrage est généralement le plus pertinent pour un lien vers un guide consacré au choix d'un photographe ?",
    options: [
      { letter: 'A', text: '« Clique ici ».' },
      { letter: 'B', text: '« En savoir plus ».' },
      { letter: 'C', text: '« Conseils pour choisir un photographe de mariage ».' },
    ],
    correct: 'C',
    explanation:
      "Un texte d'ancrage descriptif permet de mieux comprendre la destination du lien. Les formulations génériques ne donnent généralement que peu d'informations sur le contenu attendu.",
  },
  {
    id: 3,
    prompt: 'Une page ne reçoit aucun lien interne. Que peut-on en conclure ?',
    options: [
      {
        letter: 'A',
        text: "Elle peut être difficile à découvrir depuis le site, même si Google peut éventuellement connaître son URL par d'autres moyens.",
      },
      { letter: 'B', text: "Elle est automatiquement supprimée de l'index Google." },
      { letter: 'C', text: 'Elle ne peut jamais être accessible depuis un navigateur.' },
    ],
    correct: 'A',
    explanation:
      "Une page sans lien interne entrant peut être difficile à découvrir par la navigation et l'exploration des liens. Elle peut néanmoins être connue de Google par d'autres moyens, comme un sitemap ou un lien externe.",
  },
  {
    id: 4,
    prompt:
      'Combien de liens internes faut-il obligatoirement ajouter sur chaque page pour améliorer son référencement ?',
    options: [
      { letter: 'A', text: 'Exactement trois.' },
      {
        letter: 'B',
        text: "Il n'existe pas de nombre universel : les liens doivent être pertinents pour le lecteur.",
      },
      { letter: 'C', text: 'Au moins dix, quels que soient le sujet et la longueur de la page.' },
    ],
    correct: 'B',
    explanation:
      "Il n'existe pas de nombre magique de liens internes. Leur utilité dépend du contenu, de sa longueur et des ressources complémentaires qui peuvent réellement aider le lecteur.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce quatrième module, prends quelques instants pour vérifier que tu as compris les principales notions concernant la structure et le maillage interne."
  />
</template>
