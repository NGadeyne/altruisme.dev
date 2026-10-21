<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Quel critère est particulièrement important pour prioriser un mot-clé ?',
    options: [
      {
        letter: 'A',
        text: "Le fait qu'il possède systématiquement le plus grand volume de recherche possible.",
      },
      {
        letter: 'B',
        text: 'Sa pertinence pour ton activité et sa correspondance avec les besoins de tes futurs clients.',
      },
      { letter: 'C', text: "Le nombre de mots qui composent l'expression." },
    ],
    correct: 'B',
    explanation:
      "La pertinence pour ton activité et l'intention de recherche constituent des critères essentiels. Un volume de recherche élevé ne garantit ni un trafic important ni des résultats commerciaux intéressants.",
  },
  {
    id: 2,
    prompt:
      'Plusieurs expressions proches correspondent à une même intention. Quelle approche est généralement pertinente ?',
    options: [
      { letter: 'A', text: 'Créer obligatoirement une nouvelle page pour chaque expression.' },
      {
        letter: 'B',
        text: 'Répéter toutes les expressions plusieurs fois dans un même paragraphe.',
      },
      {
        letter: 'C',
        text: 'Examiner si une seule page peut répondre correctement aux différentes formulations.',
      },
    ],
    correct: 'C',
    explanation:
      'Plusieurs expressions proches peuvent correspondre à un même besoin. Une seule page suffisamment pertinente peut donc répondre à ces différentes formulations.',
  },
  {
    id: 3,
    prompt:
      "Que faut-il faire lorsqu'un mot-clé intéressant ne correspond à aucune page existante ?",
    options: [
      {
        letter: 'A',
        text: "Vérifier s'il mérite un nouveau contenu et noter cette possibilité dans son tableau de travail.",
      },
      {
        letter: 'B',
        text: "Créer immédiatement une page, même si le besoin n'est pas clairement identifié.",
      },
      {
        letter: 'C',
        text: 'Supprimer automatiquement une page existante pour réutiliser son adresse.',
      },
    ],
    correct: 'A',
    explanation:
      "Lorsqu'aucun contenu existant ne répond à une recherche intéressante, il est utile d'envisager une nouvelle page. Mais cette création doit être réfléchie et priorisée, plutôt que réalisée automatiquement.",
  },
  {
    id: 4,
    prompt: 'Deux pages apparaissent sur une même recherche Google. Que peut-on en conclure ?',
    options: [
      { letter: 'A', text: 'Le site subit obligatoirement une pénalité.' },
      { letter: 'B', text: 'Il faut automatiquement fusionner les deux pages.' },
      {
        letter: 'C',
        text: "Ce n'est pas nécessairement un problème : il faut examiner leurs intentions et leurs contenus avant de conclure.",
      },
    ],
    correct: 'C',
    explanation:
      "Plusieurs pages peuvent légitimement apparaître sur des recherches proches, notamment lorsqu'elles répondent à des besoins complémentaires. Ce n'est pas, en soi, la preuve d'un problème de cannibalisation ou d'une pénalité.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce troisième module, prends quelques instants pour vérifier que tu as compris les principales notions concernant la priorisation des mots-clés et leur association aux pages."
  />
</template>
