<script setup lang="ts">
defineProps<{ practiceMinutes: number; publicEdition?: boolean }>()
</script>

<template>
  <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
    Sélectionner 10 mots-clés pertinents et choisir trois priorités
  </h2>

  <section class="mt-10" aria-labelledby="practice-intro">
    <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
      Transformer tes recherches en premières priorités SEO
    </h3>
    <p class="mt-4">
      Tu viens de terminer le troisième module de cette formation. Tu sais désormais
      identifier les intentions de recherche, découvrir des mots-clés sans utiliser d'outils
      payants et comprendre pourquoi certaines expressions présentent davantage d'intérêt que
      d'autres pour ton activité.
    </p>
    <p class="mt-4">
      Mais une longue liste de mots-clés ne constitue pas encore une stratégie. Pour commencer
      à améliorer ton référencement, tu dois sélectionner les recherches qui méritent
      réellement ton attention et déterminer quelles pages de ton site pourraient y répondre.
    </p>
    <p class="mt-4">
      L'objectif de cet exercice est simple :
      <strong class="font-semibold text-ink"
        >retenir dix mots-clés pertinents pour ton activité, puis sélectionner trois priorités
        sur lesquelles concentrer tes prochaines optimisations</strong
      >.
    </p>
    <p class="mt-4">
      Tu utiliseras le tableau de recherche de mots-clés fourni avec la formation pour
      conserver tes choix.
    </p>
    <p class="mt-4">
      <strong class="font-semibold text-ink"
        >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
      >
    </p>
  </section>

  <section class="mt-10" aria-labelledby="practice-step-1">
    <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
      Étape 1 — Sélectionne tes 10 mots-clés
    </h3>
    <p class="mt-4">
      Commence par reprendre la liste d'expressions que tu as constituée pendant la leçon 08.
      Relis les mots-clés identifiés grâce aux suggestions Google, aux recherches associées
      et, si tu disposes de données, à Google Search Console.
    </p>
    <p class="mt-4">
      Parmi ces expressions, sélectionne les dix qui te semblent les plus pertinentes pour ton
      activité. Pour effectuer ton choix, demande-toi si elles correspondent aux besoins de
      tes futurs clients, si ton site peut leur apporter une réponse utile et si elles
      présentent un intérêt pour tes objectifs.
    </p>
    <p class="mt-4">
      Tu peux conserver différentes formulations d'un même besoin ainsi que des recherches
      informationnelles et commerciales. L'important est de comprendre pourquoi chaque
      expression mérite de figurer dans ton tableau.
    </p>
    <p class="mt-4">
      Si certaines recherches te semblent trop éloignées de ton activité, écarte-les pour le
      moment.
    </p>
  </section>

  <section class="mt-10" aria-labelledby="practice-step-2">
    <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
      Étape 2 — Identifie tes trois priorités
    </h3>
    <p class="mt-4">
      Maintenant que tu possèdes une sélection de dix mots-clés, il est temps de choisir ceux
      sur lesquels concentrer tes premiers efforts.
    </p>
    <p class="mt-4">
      Commence par regrouper les expressions qui correspondent à des intentions similaires.
      Plusieurs mots-clés peuvent en effet être traités par une même page, sans qu'il soit
      nécessaire de créer un contenu différent pour chacun d'eux.
    </p>
    <p class="mt-4">
      Sélectionne ensuite
      <strong class="font-semibold text-ink"
        >trois mots-clés principaux, ou trois groupes de recherches proches</strong
      >, qui présentent le plus d'intérêt pour ton activité.
    </p>
    <p class="mt-4">
      Privilégie les besoins directement liés à tes prestations, les recherches auxquelles tu
      peux apporter une réponse pertinente et les opportunités pour lesquelles tu possèdes
      déjà une page à améliorer.
    </p>
    <p class="mt-4">
      Tu n'as pas besoin de connaître le volume exact de chaque expression ni de calculer un
      score de difficulté. L'objectif est simplement de prendre une première décision
      cohérente avec ton activité.
    </p>
  </section>

  <section class="mt-10" aria-labelledby="practice-step-3">
    <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
      Étape 3 — Associe tes priorités aux bonnes pages
    </h3>
    <p class="mt-4">
      Pour chacune des trois priorités sélectionnées, identifie la page de ton site qui
      pourrait le mieux répondre à la recherche.
    </p>
    <p class="mt-4">
      Tu peux notamment reprendre les pages stratégiques identifiées dans le module 1. Vérifie
      si leur contenu correspond réellement à l'intention des internautes et si elles
      présentent les informations attendues.
    </p>
    <p class="mt-4">
      Si une page adaptée existe déjà, conserve son adresse dans ton tableau. Si aucun contenu
      ne répond au besoin, indique simplement « À créer » ou « À étudier ».
    </p>
    <p class="mt-4">
      Ne modifie pas encore tes pages et ne commence pas à rédiger de nouveaux contenus. Nous
      allons apprendre à réaliser ces optimisations dans le prochain module.
    </p>
  </section>
</template>
