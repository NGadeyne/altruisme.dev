<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'

import { useSeoModuleProgress } from '@/composables/useSeoModuleProgress'
import { seoProgram } from '@/data/seoProgram'
import { useAuthStore } from '@/stores/auth'

const stages = [
  {
    title: 'Offre',
    topics: ['Cible', 'Proposition de valeur'],
    description:
      'Clarifier à qui tu t’adresses, ce que tu apportes et la façon dont tu présentes ton offre.',
  },
  {
    title: 'Acquisition',
    topics: ['SEO', 'Réseaux sociaux', 'Prospection'],
    description:
      'Attirer les bonnes personnes vers ton activité. La formation SEO est la première partie de cette étape disponible dans Learn.',
  },
  {
    title: 'Conversion',
    topics: ['Landing page', 'Vente'],
    description:
      'Aider les personnes intéressées à comprendre ton offre et à passer à l’étape suivante.',
  },
  {
    title: 'Fidélisation',
    topics: ['Satisfaction client', 'Recommandation'],
    description:
      'Tenir la promesse faite au client, recueillir son retour et favoriser les recommandations.',
  },
] as const

const selectedStageIndex = ref(1)
const selectedStage = computed(() => stages[selectedStageIndex.value] ?? stages[1]!)
const detailElement = ref<HTMLElement | null>(null)

const authStore = useAuthStore()
const userId = computed(() => authStore.user?.id)
const { completedCount, percentage, loading, error, isCompleted, reload } =
  useSeoModuleProgress(userId)

function formatNumber(number: number) {
  return String(number).padStart(2, '0')
}

async function selectStage(index: number) {
  selectedStageIndex.value = index
  await nextTick()
  detailElement.value?.scrollIntoView?.({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div>
    <section
      class="overflow-hidden rounded-3xl border border-petrol/15 bg-white shadow-sm"
      aria-labelledby="roadmap-heading"
    >
      <div class="border-b border-petrol/10 px-6 py-6 sm:px-9 sm:py-8">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Parcours Acquisition clients
        </p>
        <h2
          id="roadmap-heading"
          class="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl"
        >
          Vue d’ensemble du parcours
        </h2>
        <p class="mt-2 text-sm text-muted">
          Sélectionne une étape pour voir son rôle dans le parcours.
        </p>
      </div>

      <div class="px-5 pb-8 pt-7 sm:px-8 lg:px-5 lg:pt-10">
        <div class="relative">
          <svg
            class="pointer-events-none absolute inset-x-0 top-3 hidden h-24 w-full lg:block"
            viewBox="0 0 1000 96"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M125 48H875" stroke="#b9d0cb" stroke-width="2" />
            <path
              d="m360 42 12 6-12 6m250-12 12 6-12 6m250-12 12 6-12 6"
              stroke="#3d6970"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div
            class="pointer-events-none absolute bottom-8 left-8 top-8 w-px bg-petrol/25 lg:hidden"
            aria-hidden="true"
          />

          <ol class="relative grid gap-4 lg:grid-cols-4 lg:gap-0">
            <li v-for="(stage, index) in stages" :key="stage.title" class="relative">
              <button
                type="button"
                class="group flex w-full items-center gap-5 rounded-2xl px-1 py-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol lg:flex-col lg:gap-4 lg:px-3 lg:text-center"
                :aria-pressed="selectedStageIndex === index"
                aria-controls="roadmap-detail"
                @click="selectStage(index)"
              >
                <span
                  class="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full p-1 transition-transform group-hover:scale-105 lg:size-24"
                  :class="selectedStageIndex === index ? 'ring-4 ring-petrol/10' : ''"
                  :style="
                    index === 1 && !loading && !error
                      ? { background: `conic-gradient(#3d6970 ${percentage}%, #dce9e5 0)` }
                      : { background: selectedStageIndex === index ? '#3d6970' : '#dce9e5' }
                  "
                >
                  <span
                    class="flex size-full items-center justify-center rounded-full bg-white text-lg font-semibold tracking-tight text-petrol-dark lg:text-2xl"
                  >
                    {{ formatNumber(index + 1) }}
                  </span>
                </span>
                <span class="min-w-0 lg:block">
                  <span
                    class="block text-base font-semibold leading-snug tracking-tight lg:text-lg"
                    :class="selectedStageIndex === index ? 'text-petrol-dark' : 'text-ink'"
                  >
                    {{ stage.title }}
                  </span>
                  <span class="mt-1 block text-sm leading-6 text-muted lg:mt-2">
                    {{ stage.topics.join(' · ') }}
                  </span>
                  <span class="mt-2 block text-xs font-semibold text-petrol-dark lg:mt-3">
                    <template v-if="index === 1 && !loading && !error">
                      {{ completedCount }} / {{ seoProgram.length }} modules SEO suivis
                    </template>
                    <template v-else-if="index === 1 && loading"
                      >Progression en cours de chargement</template
                    >
                    <template v-else-if="index === 1 && error">Progression indisponible</template>
                    <template v-else>Parcours à venir</template>
                  </span>
                </span>
              </button>
            </li>
          </ol>
        </div>

        <div class="mt-5 hidden lg:block" aria-hidden="true">
          <svg class="h-20 w-full" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none">
            <path
              d="M875 0v14c0 37-36 50-92 50H465c-56 0-90-13-90-50V7"
              stroke="#8fb1a9"
              stroke-width="1.5"
              stroke-dasharray="5 7"
            />
            <path
              d="m366 17 9-11 9 11"
              stroke="#3d6970"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          class="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-petrol-dark lg:mt-0"
        >
          <span aria-hidden="true">↶</span> Les recommandations nourrissent une nouvelle acquisition
        </p>
      </div>
    </section>

    <section
      id="roadmap-detail"
      ref="detailElement"
      class="mt-5 scroll-mt-20 rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-9"
      aria-labelledby="roadmap-detail-heading"
    >
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
        Étape {{ formatNumber(selectedStageIndex + 1) }} / 04
      </p>
      <h2
        id="roadmap-detail-heading"
        aria-live="polite"
        class="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        {{ selectedStage.title }}
      </h2>
      <p class="mt-3 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
        {{ selectedStage.description }}
      </p>

      <template v-if="selectedStageIndex === 1">
        <div
          class="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-petrol/15 pt-6"
        >
          <div>
            <p class="text-sm font-semibold text-ink">Formation SEO</p>
            <p v-if="!loading && !error" class="mt-1 text-sm text-muted">
              {{ completedCount }} module{{ completedCount > 1 ? 's' : '' }} suivi{{
                completedCount > 1 ? 's' : ''
              }}
              sur {{ seoProgram.length }} · Progression : {{ percentage }} %
            </p>
            <p v-else-if="loading" class="mt-1 text-sm text-muted" role="status">
              Chargement de ta progression…
            </p>
          </div>
          <RouterLink
            :to="{ name: 'dashboard' }"
            class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Voir la formation <span class="ml-2" aria-hidden="true">↗</span>
          </RouterLink>
        </div>
        <div
          v-if="!loading && !error"
          class="mt-4 h-2 overflow-hidden rounded-full bg-white/80"
          role="progressbar"
          :aria-valuenow="completedCount"
          aria-valuemin="0"
          :aria-valuemax="seoProgram.length"
          aria-label="Modules SEO suivis"
        >
          <div
            class="h-full rounded-full bg-petrol transition-[width] duration-200"
            :style="{ width: `${percentage}%` }"
          />
        </div>
        <div v-if="error" class="mt-4 flex flex-wrap items-center gap-3" role="alert">
          <p class="text-sm text-red-700">{{ error }}</p>
          <button
            type="button"
            class="text-sm font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            @click="reload"
          >
            Réessayer
          </button>
        </div>
        <p class="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#3d6970]">
          Accéder aux modules
        </p>
        <ol class="mt-3 grid gap-2 sm:grid-cols-2">
          <li v-for="module in seoProgram" :key="module.id">
            <RouterLink
              :to="{ name: 'dashboard', hash: `#module-${module.number}` }"
              class="group flex min-h-16 items-center gap-3 rounded-xl border border-petrol/15 bg-white/80 px-4 py-3 transition hover:border-petrol/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              :aria-label="`Voir le module ${module.number} : ${module.title}`"
            >
              <span class="text-sm font-semibold text-petrol-dark">{{
                formatNumber(module.number)
              }}</span>
              <span class="min-w-0 flex-1 text-sm font-medium leading-5 text-ink">{{
                module.title
              }}</span>
              <span
                v-if="!loading && !error && isCompleted(module.id)"
                class="text-xs font-semibold text-petrol-dark"
                aria-label="Module suivi"
                >✓ Suivi</span
              >
              <span
                v-else
                class="text-petrol-dark transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
                >↗</span
              >
            </RouterLink>
          </li>
        </ol>
        <p class="mt-4 text-xs leading-5 text-muted">
          Cette progression concerne les modules SEO marqués comme terminés dans la formation.
        </p>
      </template>
      <div v-else class="mt-7 border-t border-petrol/15 pt-6">
        <p class="text-sm font-medium text-petrol-dark">Modules Learn à venir pour cette étape.</p>
        <p class="mt-1 text-sm leading-6 text-muted">
          La formation SEO est déjà accessible dans l’étape Acquisition.
        </p>
      </div>
    </section>
  </div>
</template>
