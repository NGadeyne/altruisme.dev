<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'
import { seoActions } from '@/data/seoActions'

const actionKeys = new Set([
  'seo_setup_search_console',
  'seo_check_indexation',
  'seo_identify_opportunities',
])
const relatedActions = seoActions.filter((action) => actionKeys.has(action.key))
const practiceMinutes = getSeoPracticeMinutes(2)
</script>

<template>
  <BaseContainer>
    <div class="mx-auto max-w-3xl">
      <RouterLink
        to="/formations/seo"
        class="text-sm font-medium text-petrol-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
      >
        ← Formation SEO
      </RouterLink>

      <header
        class="mt-8 rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Altruisme Learn · Formation SEO
        </p>
        <h1 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Mise en pratique — Réaliser son premier diagnostic SEO
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 2 · Auditer ton site</p>
        <div class="mt-5 flex flex-wrap gap-2 text-sm text-ink-soft">
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5">
            environ {{ practiceMinutes }} minutes
          </span>
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5">
            Exercice pratique
          </span>
        </div>
        <div class="mt-7 border-t border-petrol/15 pt-6">
          <h2 class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
            Objectif pédagogique
          </h2>
          <p class="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
            Compléter une première checklist d'audit SEO à partir des données de Google Search
            Console, en identifiant l'état d'indexation des pages stratégiques et les premières
            observations sur leur visibilité.
          </p>
        </div>
      </header>

      <article class="mt-12 text-base leading-8 text-ink-soft">
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

        <section
          class="mt-12 rounded-2xl border border-petrol/15 bg-white p-6 sm:p-8"
          aria-labelledby="practice-finished"
        >
          <h3 id="practice-finished" class="text-xl font-semibold text-ink sm:text-2xl">
            Exercice terminé !
          </h3>
          <p class="mt-4">
            Tu disposes maintenant d'une première checklist d'audit SEO, avec l'état d'indexation de
            tes pages stratégiques, quelques informations sur leurs performances et tes premiers
            constats.
          </p>
          <p class="mt-4">
            Ce diagnostic est volontairement simple. Il ne remplace pas un audit SEO complet, mais
            il te permet de commencer à comprendre ton site à partir de données concrètes plutôt que
            de suppositions.
          </p>
          <p class="mt-4">
            Conserve précieusement ta checklist : nous allons continuer à l'enrichir au fil de la
            formation, notamment lorsque nous travaillerons sur les mots-clés et l'optimisation de
            tes pages.
          </p>
          <p class="mt-4">
            Dans ton espace Altruisme Learn, vérifie également que les actions « Configurer Google
            Search Console », « Vérifier l'indexation de mes pages » et « Identifier mes premières
            opportunités SEO » sont à jour dans
            <strong class="font-semibold text-ink">« Mon plan d'action »</strong>.
          </p>
          <p class="mt-4">
            Tu viens de franchir une étape importante : tu ne regardes plus simplement ton site
            comme son propriétaire, mais tu commences à l'analyser avec une véritable méthode SEO.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Prochain module : Trouver les bons mots-clés.</strong
            >
          </p>

          <nav
            class="mt-6 border-t border-petrol/15 pt-5"
            aria-label="Actions liées à cet exercice"
          >
            <p class="text-sm font-semibold text-ink">Retrouver ces actions dans mon plan</p>
            <ul class="mt-3 space-y-2">
              <li v-for="action in relatedActions" :key="action.key">
                <RouterLink
                  :to="{ name: 'learning-plan', query: { action: action.key } }"
                  class="inline-flex text-sm font-medium text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                >
                  {{ action.title }} →
                </RouterLink>
              </li>
            </ul>
          </nav>
          <RouterLink
            :to="{ name: 'seo-lesson', params: { lessonSlug: 'lesson-06' } }"
            class="mt-5 inline-flex text-sm font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            Revoir la leçon 06 →
          </RouterLink>
        </section>
      </article>
    </div>
  </BaseContainer>
</template>
