<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt:
      "Un outil SEO indique qu'un backlink provient d'un domaine avec un DR très faible. Que faut-il en conclure ?",
    options: [
      { letter: 'A', text: 'Le lien pénalise automatiquement ton site.' },
      {
        letter: 'B',
        text: 'Le score ne suffit pas à déterminer la qualité ou le risque du lien ; il faut examiner son contexte.',
      },
      { letter: 'C', text: 'Il faut immédiatement désavouer le domaine.' },
    ],
    correct: 'B',
    explanation:
      "Un faible DR ne représente pas une sanction Google. Il faut examiner la pertinence du lien, son contexte et sa justification avant de considérer qu'une intervention est nécessaire.",
  },
  {
    id: 2,
    prompt: 'Quelle pratique peut contrevenir aux règles de Google concernant le spam de liens ?',
    options: [
      {
        letter: 'A',
        text: 'Acheter massivement des liens destinés à influencer les classements sans les qualifier correctement.',
      },
      {
        letter: 'B',
        text: 'Être mentionné naturellement dans un reportage consacré à une collaboration réelle.',
      },
      { letter: 'C', text: 'Recevoir un lien depuis un site associatif pertinent.' },
    ],
    correct: 'A',
    explanation:
      "L'achat de liens destinés à manipuler les classements, sans qualification appropriée, fait partie des pratiques contraires aux règles de Google concernant le spam. Les références éditoriales légitimes ne sont pas comparables.",
  },
  {
    id: 3,
    prompt: "Dans quel cas l'outil de désaveu peut-il être envisagé ?",
    options: [
      { letter: 'A', text: "Dès qu'un backlink possède un Trust Flow inférieur à 10." },
      { letter: 'B', text: "Chaque fois qu'un domaine étranger fait un lien vers ton site." },
      {
        letter: 'C',
        text: "Lorsqu'un nombre considérable de liens artificiels ou associés au spam a provoqué, ou risque de provoquer, une action manuelle.",
      },
    ],
    correct: 'C',
    explanation:
      "Google recommande de réserver le désaveu aux situations impliquant un nombre considérable de liens artificiels, de mauvaise qualité ou associés au spam, lorsqu'ils sont à l'origine d'une action manuelle ou risquent sérieusement d'en provoquer une.",
  },
  {
    id: 4,
    prompt:
      "Un partenaire possède un lien vers une ancienne page qui n'existe plus, mais une nouvelle page équivalente est disponible. Quelle approche peut être pertinente ?",
    options: [
      {
        letter: 'A',
        text: "Rediriger tous les liens externes du site vers la page d'accueil.",
      },
      {
        letter: 'B',
        text: 'Mettre en place une redirection permanente appropriée et, si possible, proposer au partenaire de mettre à jour son lien.',
      },
      {
        letter: 'C',
        text: 'Supprimer immédiatement toutes les anciennes URL du site sans vérification.',
      },
    ],
    correct: 'B',
    explanation:
      "Lorsqu'une page a changé définitivement d'adresse et qu'une ressource équivalente existe, une redirection permanente peut permettre de préserver l'accès au contenu. La mise à jour du lien d'origine constitue également une amélioration pertinente.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce module, prends quelques instants pour vérifier que tu as compris les principaux risques et les bonnes pratiques concernant l'analyse des backlinks."
  />
</template>
