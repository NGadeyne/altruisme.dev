<script setup lang="ts">
import { onMounted, ref } from 'vue'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'
import { loadPresetStatus } from '@/services/learningPlan'
import { useAuthStore } from '@/stores/auth'
import type { PlanStatus } from '@/types/learningPlan'

const actionKey = 'seo_identify_strategic_pages'
const authStore = useAuthStore()
const status = ref<PlanStatus>('todo')
const statusLoading = ref(true)
const statusError = ref(false)

const statusLabels: Record<PlanStatus, string> = {
  todo: 'À faire',
  in_progress: 'En cours',
  done: 'Terminé',
}

async function refreshStatus() {
  const userId = authStore.user?.id
  if (!userId) {
    statusLoading.value = false
    statusError.value = true
    return
  }

  statusLoading.value = true
  statusError.value = false
  try {
    status.value = await loadPresetStatus(userId, 'seo', actionKey)
  } catch {
    statusError.value = true
  } finally {
    statusLoading.value = false
  }
}

onMounted(refreshStatus)
const practiceMinutes = getSeoPracticeMinutes(1)
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
          Mise en pratique — Identifier les pages les plus importantes de son site
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 1 · Comprendre Google</p>
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
            Identifier les trois pages les plus importantes de son site, comprendre leur rôle dans
            son activité et repérer une première possibilité d'amélioration.
          </p>
        </div>
      </header>

      <article class="mt-12 text-base leading-8 text-ink-soft">
        <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Identifier les pages les plus importantes de son site
        </h2>

        <section class="mt-10" aria-labelledby="practice-intro">
          <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
            Avant d'optimiser, il faut savoir où concentrer ses efforts
          </h3>
          <p class="mt-4">
            Tu viens de terminer le premier module de cette formation. Tu comprends désormais à quoi
            sert le référencement naturel, comment Google découvre les pages et quels sont les
            principaux éléments qui peuvent influencer leur visibilité.
          </p>
          <p class="mt-4">
            Mais avant de commencer à analyser ou à optimiser ton site, il reste une question
            importante :
            <strong class="font-semibold text-ink"
              >quelles sont les pages qui méritent réellement ton attention ?</strong
            >
          </p>
          <p class="mt-4">
            Toutes les pages de ton site ne jouent pas nécessairement le même rôle. Certaines
            présentent tes prestations, d'autres répondent aux questions de tes futurs clients et
            d'autres permettent simplement de retrouver des informations pratiques.
          </p>
          <p class="mt-4">
            L'objectif de cet exercice est d'identifier les trois pages les plus importantes pour
            ton activité. Nous les utiliserons dans les prochains modules pour apprendre à analyser
            leur référencement et à réaliser tes premières optimisations.
          </p>
        </section>

        <section class="mt-10" aria-labelledby="practice-step-1">
          <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
            Étape 1 — Explore les pages de ton site
          </h3>
          <p class="mt-4">
            Commence par ouvrir ton site et parcourir ses principales sections. Observe ta page
            d'accueil, tes pages de services ou de produits, ainsi que les contenus qui pourraient
            intéresser tes futurs clients.
          </p>
          <p class="mt-4">
            Essaie de comprendre le rôle de chaque page. Certaines permettent de présenter
            directement ton offre, tandis que d'autres peuvent attirer des visiteurs qui cherchent
            des informations sur un sujet lié à ton activité.
          </p>
          <p class="mt-4">
            Pour le moment, ne cherche pas à identifier les pages les mieux positionnées sur Google.
            Nous apprendrons à analyser ces informations plus tard. Concentre-toi simplement sur
            leur importance pour ton projet.
          </p>
        </section>

        <section class="mt-10" aria-labelledby="practice-step-2">
          <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
            Étape 2 — Sélectionne trois pages prioritaires
          </h3>
          <p class="mt-4">
            Parmi les pages que tu viens de parcourir, sélectionne les trois qui présentent le plus
            d'intérêt pour ton activité.
          </p>
          <p class="mt-4">
            Pour effectuer ton choix, demande-toi si elles répondent à un besoin important de tes
            futurs clients, si elles contribuent à tes objectifs et si tu aimerais qu'elles soient
            davantage visibles sur Google.
          </p>
          <p class="mt-4">
            Imaginons que tu sois consultant indépendant. Tu pourrais sélectionner ta page
            d'accueil, une page présentant ton accompagnement principal et un guide qui répond à une
            question fréquente de tes prospects.
          </p>
          <p class="mt-4">
            Pour chacune, conserve son adresse et note en quelques mots pourquoi elle est
            importante.
          </p>
          <p class="mt-4">
            Si ton site possède moins de trois pages pertinentes, sélectionne simplement celles qui
            existent. L'objectif n'est pas d'inventer de nouvelles pages pour terminer l'exercice.
          </p>
        </section>

        <section class="mt-10" aria-labelledby="practice-step-3">
          <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
            Étape 3 — Identifie une première amélioration
          </h3>
          <p class="mt-4">
            Maintenant que tu as sélectionné tes pages, prends quelques minutes pour les observer
            avec un regard différent.
          </p>
          <p class="mt-4">
            Leur sujet est-il immédiatement compréhensible ? Les informations présentées
            répondent-elles aux attentes des visiteurs ? Peut-on facilement accéder à ces pages
            depuis le reste du site ?
          </p>
          <p class="mt-4">
            Essaie d'identifier une première amélioration possible pour chacune d'elles. Il peut
            s'agir d'un titre trop vague, d'une prestation insuffisamment expliquée ou d'un lien
            manquant depuis une autre page.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink">Tu n'as rien à modifier pour le moment.</strong>
            L'essentiel est de commencer à observer ton site avec méthode et de conserver tes
            premières idées d'amélioration.
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
            Tu disposes maintenant de tes premières pages stratégiques et de quelques pistes pour
            améliorer leur visibilité.
          </p>
          <p class="mt-4">
            Conserve leurs adresses et tes observations : nous les utiliserons dans la suite de la
            formation pour vérifier leur indexation, analyser leurs performances et réaliser tes
            premières optimisations.
          </p>
          <p class="mt-4">
            Dans ton espace Altruisme Learn, ouvre
            <strong class="font-semibold text-ink">« Mon plan d'action »</strong>
            et marque l'action « Identifier les pages stratégiques de mon site » comme terminée.
          </p>
          <p class="mt-4">
            Tu viens de franchir une première étape importante : plutôt que de chercher à optimiser
            tout ton site au hasard, tu sais désormais où concentrer tes premiers efforts.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink">Prochain module : Auditer ton site.</strong>
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-3 border-t border-petrol/15 pt-5">
            <span class="text-sm font-medium text-ink-soft">Statut dans mon plan d'action</span>
            <span
              class="rounded-full border border-petrol/20 bg-mist/70 px-3 py-1 text-xs font-semibold text-petrol-dark"
              role="status"
            >
              {{
                statusLoading
                  ? 'Chargement du statut…'
                  : statusError
                    ? 'Statut indisponible'
                    : statusLabels[status]
              }}
            </span>
            <button
              v-if="statusError"
              type="button"
              class="text-xs font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              @click="refreshStatus"
            >
              Réessayer de charger le statut
            </button>
          </div>
          <div class="mt-5 flex flex-wrap items-center gap-4">
            <RouterLink
              :to="{ name: 'learning-plan', query: { action: actionKey } }"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
            >
              Voir dans mon plan d'action →
            </RouterLink>
            <RouterLink
              :to="{ name: 'seo-lesson', params: { lessonSlug: 'lesson-03' } }"
              class="text-sm font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            >
              Revoir la leçon 03 →
            </RouterLink>
          </div>
        </section>
      </article>
    </div>
  </BaseContainer>
</template>
