<script setup lang="ts">
import type { QuizQuestion } from '@/types/quiz'

import SeoLessonQuiz from './SeoLessonQuiz.vue'

const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt:
      'Quelle démarche permet de recueillir des avis clients conformément aux règles de Google ?',
    options: [
      { letter: 'A', text: 'Proposer une remise aux clients qui déposent un avis cinq étoiles.' },
      {
        letter: 'B',
        text: "Inviter les clients ayant réellement bénéficié d'une prestation à partager librement leur expérience, sans récompense ni pression.",
      },
      {
        letter: 'C',
        text: 'Demander uniquement aux clients satisfaits de publier un avis positif.',
      },
    ],
    correct: 'B',
    explanation:
      "Google autorise les demandes d'avis reposant sur des expériences réelles, à condition de ne pas proposer de récompenses ni chercher à influencer artificiellement la note ou le contenu des commentaires.",
  },
  {
    id: 2,
    prompt:
      'Une entreprise intervient dans plusieurs villes. Quelle approche éditoriale est la plus pertinente ?',
    options: [
      {
        letter: 'A',
        text: 'Créer une page presque identique pour chaque commune en remplaçant uniquement le nom de la ville.',
      },
      {
        letter: 'B',
        text: "Ajouter toutes les villes possibles dans chaque paragraphe de sa page d'accueil.",
      },
      {
        letter: 'C',
        text: 'Proposer des pages locales lorsque chacune apporte des informations utiles et réellement spécifiques au territoire concerné.',
      },
    ],
    correct: 'C',
    explanation:
      'Une page locale doit répondre à un besoin réel et apporter une valeur spécifique. La multiplication de pages presque identiques destinées uniquement à cibler différentes villes peut relever de pratiques contraires aux règles de Google.',
  },
  {
    id: 3,
    prompt:
      "Le rapport Google Business Profile indique 25 clics sur le bouton d'appel. Que peut-on en conclure ?",
    options: [
      {
        letter: 'A',
        text: "Les utilisateurs ont cliqué 25 fois sur le bouton d'appel selon les règles de comptabilisation, sans garantie que 25 conversations ont eu lieu.",
      },
      { letter: 'B', text: "L'entreprise a nécessairement reçu 25 appels aboutis." },
      { letter: 'C', text: "L'entreprise a signé 25 nouveaux clients grâce à Google Maps." },
    ],
    correct: 'A',
    explanation:
      "Le rapport mesure les clics sur le bouton d'appel. Il ne permet pas d'affirmer que toutes ces interactions ont donné lieu à une conversation téléphonique ou à une demande commerciale.",
  },
  {
    id: 4,
    prompt: "Quel est le meilleur indicateur pour évaluer l'intérêt commercial du SEO local ?",
    options: [
      { letter: 'A', text: 'Uniquement le nombre de photographies présentes sur la fiche.' },
      {
        letter: 'B',
        text: "Uniquement la position observée lors d'une recherche effectuée depuis son domicile.",
      },
      {
        letter: 'C',
        text: 'Les interactions utiles et les demandes commerciales identifiables, complétées par les données de visibilité disponibles.',
      },
    ],
    correct: 'C',
    explanation:
      "Les vues et les classements permettent d'observer une partie de la visibilité, mais les interactions pertinentes et les contacts réellement obtenus sont généralement plus proches des objectifs commerciaux d'une entreprise.",
  },
]
</script>

<template>
  <SeoLessonQuiz
    :questions="questions"
    intro="Avant de terminer ce module, prends quelques instants pour vérifier que tu as compris les principaux leviers de visibilité locale et les indicateurs permettant d'observer leurs résultats."
  />
</template>
