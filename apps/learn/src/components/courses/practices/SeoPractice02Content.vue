<script setup lang="ts">
defineProps<{ practiceMinutes: number; publicEdition?: boolean }>()
</script>

<template>
  <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
    Compléter ta première checklist d'audit SEO
  </h2>

  <section class="mt-10" aria-labelledby="practice-intro">
    <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
      Passer des observations à un premier diagnostic
    </h3>
    <p class="mt-4">
      Tu viens de terminer le deuxième module de cette formation. Tu sais désormais utiliser
      Google Search Console, vérifier l'indexation de tes pages et observer les principales
      données de performances de ton site.
    </p>
    <p class="mt-4">
      Mais consulter des rapports ne suffit pas. Pour que ces informations deviennent
      réellement utiles, il faut apprendre à les organiser et à conserver les observations qui
      pourront guider tes prochaines actions.
    </p>
    <p class="mt-4">
      C'est précisément l'objectif de cette mise en pratique :
      <strong class="font-semibold text-ink"
        >rassembler tes premiers constats dans une checklist d'audit SEO</strong
      >, afin de disposer d'une vision claire de la situation actuelle de ton site.
    </p>
    <p class="mt-4">
      Tu n'as pas besoin de réaliser un audit technique complet ni de corriger les problèmes
      identifiés. Nous cherchons simplement à construire un premier diagnostic, sur lequel
      nous pourrons nous appuyer dans les prochains modules.
    </p>
    <p class="mt-4">
      <strong class="font-semibold text-ink"
        >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
      >
    </p>
  </section>

  <section class="mt-10" aria-labelledby="practice-step-1">
    <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
      Étape 1 — Reprends tes pages stratégiques
    </h3>
    <p class="mt-4">
      Commence par ouvrir la checklist d'audit SEO fournie avec la formation, puis retrouve
      les trois pages prioritaires que tu as sélectionnées à la fin du module 1.
    </p>
    <p class="mt-4">
      Pour chacune, renseigne son adresse et rappelle brièvement son rôle dans ton activité.
      Il peut s'agir d'une page de service, d'une fiche produit ou d'un contenu destiné à
      attirer de futurs clients.
    </p>
    <p class="mt-4">
      Ces pages serviront de point de départ à ton diagnostic. L'objectif n'est pas encore
      d'analyser l'ensemble de ton site, mais de concentrer ton attention sur les contenus qui
      présentent le plus d'intérêt pour ton projet.
    </p>
  </section>

  <section class="mt-10" aria-labelledby="practice-step-2">
    <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
      Étape 2 — Vérifie leur état d'indexation
    </h3>
    <p class="mt-4">
      Connecte-toi à Google Search Console et utilise l'outil d'inspection d'URL pour examiner
      chacune des pages sélectionnées.
    </p>
    <p class="mt-4">
      Dans ta checklist, indique si la page est indexée ou non. Si elle ne l'est pas, note le
      motif présenté par Google, comme « Détectée, actuellement non indexée » ou « Explorée,
      actuellement non indexée ».
    </p>
    <p class="mt-4">
      Essaie également de distinguer les situations normales de celles qui méritent une
      investigation. Une ancienne URL redirigée ou une page volontairement exclue de l'index
      ne nécessite pas forcément de correction.
    </p>
    <p class="mt-4">
      À ce stade, contente-toi de relever les informations disponibles.
      <strong class="font-semibold text-ink"
        >Il n'est pas nécessaire de modifier ton site pour terminer l'exercice.</strong
      >
    </p>
  </section>

  <section class="mt-10" aria-labelledby="practice-step-3">
    <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
      Étape 3 — Observe les premières performances
    </h3>
    <p class="mt-4">
      Ouvre ensuite le rapport de performances de Google Search Console et sélectionne une
      période de 28 jours, ou une période plus longue si ton site dispose de peu de données.
    </p>
    <p class="mt-4">
      Observe les clics, les impressions et les principales recherches qui font apparaître ton
      site. Essaie notamment de retrouver tes pages stratégiques dans le rapport.
    </p>
    <p class="mt-4">
      Certaines possèdent-elles déjà de la visibilité ? D'autres apparaissent-elles rarement ?
      Les recherches associées à ces pages correspondent-elles réellement à ton activité ?
    </p>
    <p class="mt-4">
      Conserve les informations les plus intéressantes dans ta checklist. Si Search Console ne
      dispose pas encore de suffisamment de données, indique simplement qu'elles ne sont pas
      disponibles pour le moment.
    </p>
  </section>

  <section class="mt-10" aria-labelledby="practice-step-4">
    <h3 id="practice-step-4" class="text-xl font-semibold text-ink">
      Étape 4 — Identifie tes trois premiers constats
    </h3>
    <p class="mt-4">
      À partir des informations recueillies, essaie de formuler jusqu'à trois observations
      importantes concernant ton site.
    </p>
    <p class="mt-4">
      Tu pourrais constater qu'une page stratégique n'est pas indexée, qu'une autre apparaît
      régulièrement sur Google mais reçoit peu de clics, ou qu'un contenu attire déjà des
      visiteurs grâce à des recherches pertinentes.
    </p>
    <p class="mt-4">
      Pour chaque constat, note brièvement ce que tu as observé et pourquoi cette situation
      mérite éventuellement ton attention.
    </p>
    <p class="mt-4">
      Ne cherche pas encore à déterminer une solution définitive. L'objectif est de distinguer
      les faits observés des hypothèses que nous pourrons approfondir plus tard.
    </p>
  </section>
</template>
