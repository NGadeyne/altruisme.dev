<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt:
      'Une page importante possède une URL courte, compréhensible et déjà indexée. Faut-il la modifier pour y ajouter son mot-clé principal ?',
    options: [
      {
        letter: 'A',
        text: 'Oui, car Google exige que chaque URL contienne exactement le mot-clé principal.',
      },
      {
        letter: 'B',
        text: "Non, ce changement n'est pas nécessairement utile et peut entraîner des conséquences techniques.",
      },
      {
        letter: 'C',
        text: 'Oui, car une URL contenant davantage de mots-clés garantit une meilleure position.',
      },
    ],
    correct: 'B',
    explanation:
      "Une URL existante, claire et fonctionnelle n'a pas nécessairement besoin d'être modifiée. Un changement d'adresse peut nécessiter des redirections et des mises à jour sans apporter de bénéfice SEO garanti.",
  },
  {
    id: 2,
    prompt:
      "Quel type de redirection est généralement recommandé lorsqu'une page change définitivement d'adresse ?",
    options: [
      { letter: 'A', text: 'Une redirection permanente de type 301 ou 308.' },
      { letter: 'B', text: 'Une redirection temporaire 302 utilisée systématiquement.' },
      {
        letter: 'C',
        text: 'Aucune redirection, puisque Google retrouvera automatiquement la nouvelle page.',
      },
    ],
    correct: 'A',
    explanation:
      "Lorsqu'un contenu change définitivement d'adresse, Google recommande généralement une redirection permanente côté serveur, notamment de type 301 ou 308.",
  },
  {
    id: 3,
    prompt:
      "Une ancienne page a été supprimée et aucun contenu équivalent n'existe. Quelle approche peut être adaptée ?",
    options: [
      { letter: 'A', text: "La rediriger obligatoirement vers la page d'accueil." },
      {
        letter: 'B',
        text: "La rediriger vers n'importe quelle page contenant un mot-clé similaire.",
      },
      {
        letter: 'C',
        text: 'Conserver une réponse 404 ou 410 appropriée, plutôt que créer une redirection sans rapport.',
      },
    ],
    correct: 'C',
    explanation:
      "Lorsqu'un contenu a réellement disparu sans remplacement pertinent, une réponse 404 ou 410 peut être appropriée. Une redirection vers une page sans rapport risque de dégrader la navigation et peut être interprétée comme une erreur.",
  },
  {
    id: 4,
    prompt: "Pourquoi faut-il mettre à jour les liens internes après un changement d'URL ?",
    options: [
      {
        letter: 'A',
        text: "Pour empêcher définitivement Google d'explorer les anciennes adresses.",
      },
      {
        letter: 'B',
        text: 'Pour diriger les visiteurs directement vers les nouvelles pages et limiter les redirections inutiles.',
      },
      {
        letter: 'C',
        text: "Parce qu'une redirection permanente cesse automatiquement de fonctionner après quelques jours.",
      },
    ],
    correct: 'B',
    explanation:
      "Mettre à jour les liens internes permet d'envoyer directement les visiteurs vers les destinations définitives, sans passer inutilement par les anciennes adresses.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales notions concernant les URL et les redirections."
  />
</template>
