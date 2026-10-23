<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt:
      'Ton entreprise possède déjà une fiche Google que tu ne gères pas. Quelle est la meilleure première démarche ?',
    options: [
      {
        letter: 'A',
        text: 'Créer immédiatement une deuxième fiche avec un nom légèrement différent.',
      },
      {
        letter: 'B',
        text: "Vérifier la fiche existante et utiliser la procédure de revendication ou de demande d'accès adaptée.",
      },
      { letter: 'C', text: 'Ajouter une adresse virtuelle pour créer un nouvel établissement.' },
    ],
    correct: 'B',
    explanation:
      "Lorsqu'une fiche existe déjà, il est préférable de rechercher les possibilités de revendication ou de récupération de gestion plutôt que de créer un doublon.",
  },
  {
    id: 2,
    prompt: "Quel nom faut-il utiliser dans une fiche d'établissement Google ?",
    options: [
      { letter: 'A', text: "Le nom réel de l'entreprise, tel qu'il est présenté à ses clients." },
      {
        letter: 'B',
        text: 'Une combinaison de tous les mots-clés commerciaux les plus recherchés.',
      },
      { letter: 'C', text: 'Le nom de la ville suivi de la mention « meilleur professionnel ».' },
    ],
    correct: 'A',
    explanation:
      "Le nom de la fiche doit refléter le nom réel de l'entreprise. L'ajout artificiel de mots-clés ou de mentions promotionnelles peut contrevenir aux règles de Google.",
  },
  {
    id: 3,
    prompt:
      'Un artisan travaille depuis son domicile et intervient exclusivement chez ses clients. Quelle configuration est généralement appropriée ?',
    options: [
      { letter: 'A', text: 'Afficher son domicile comme une boutique ouverte au public.' },
      { letter: 'B', text: 'Créer une fiche dans chaque ville de sa zone commerciale.' },
      {
        letter: 'C',
        text: 'Utiliser une fiche de service de proximité éligible, masquer son adresse et renseigner les zones réellement desservies.',
      },
    ],
    correct: 'C',
    explanation:
      'Une entreprise éligible intervenant exclusivement auprès de ses clients doit normalement masquer son adresse et présenter une zone desservie adaptée à son activité réelle.',
  },
  {
    id: 4,
    prompt: 'Google demande une validation vidéo pour une nouvelle fiche. Que faut-il faire ?',
    options: [
      {
        letter: 'A',
        text: "Envoyer une vidéo publicitaire déjà montée pour présenter l'entreprise.",
      },
      {
        letter: 'B',
        text: 'Suivre les instructions de Google et réaliser la validation avec les preuves authentiques demandées.',
      },
      {
        letter: 'C',
        text: "Créer plusieurs nouvelles fiches jusqu'à obtenir une autre méthode de validation.",
      },
    ],
    correct: 'B',
    explanation:
      "Les méthodes de validation sont déterminées par Google. Lorsqu'une vidéo est demandée, elle doit respecter les instructions officielles et fournir des éléments authentiques permettant de vérifier l'établissement.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer cette leçon, prends quelques instants pour vérifier que tu as compris les principales étapes de création et d'optimisation d'une fiche d'établissement Google."
  />
</template>
