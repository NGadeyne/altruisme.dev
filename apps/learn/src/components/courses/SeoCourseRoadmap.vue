<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'

import {
  formatSeoMinutes,
  seoPracticeMinutes,
  seoProgram,
  seoReadingMinutes,
  type SeoProgramModule,
} from '@/data/seoProgram'

interface RoadmapStage {
  title: string
  topics: string
  description: string
  moduleNumbers: number[]
}

const stages: RoadmapStage[] = [
  {
    title: 'Comprendre et auditer',
    topics: 'Google · Diagnostic',
    description:
      'Découvre comment Google fonctionne, puis observe ce qui se passe réellement sur ton site.',
    moduleNumbers: [1, 2],
  },
  {
    title: 'Choisir et optimiser',
    topics: 'Mots-clés · Pages · Technique',
    description:
      'Choisis les recherches importantes et améliore les pages et les points techniques qui comptent.',
    moduleNumbers: [3, 4, 5],
  },
  {
    title: 'Développer sa visibilité',
    topics: 'Contenu · Liens · Local · IA',
    description:
      'Construis une présence plus large grâce aux contenus, aux liens, au référencement local et aux moteurs IA.',
    moduleNumbers: [6, 7, 8, 9],
  },
  {
    title: 'Mesurer et progresser',
    topics: 'Indicateurs · Plan sur 90 jours',
    description:
      'Mesure les résultats, choisis les prochaines priorités et organise la suite de tes actions SEO.',
    moduleNumbers: [10],
  },
]

const props = defineProps<{
  completedModuleIds: string[]
  loading: boolean
  error: string
}>()
const emit = defineEmits<{ retry: []; selectModule: [number: number] }>()

const lessonCount = seoProgram.reduce((total, module) => total + module.lessons.length, 0)
const totalMinutes = seoReadingMinutes + seoPracticeMinutes
const completedCount = computed(() => props.completedModuleIds.length)
const percentage = computed(() => Math.round((completedCount.value / seoProgram.length) * 100))
const selectedStageIndex = ref(0)
const selectedStage = computed(() => stages[selectedStageIndex.value] ?? stages[0]!)
const selectedModules = computed(() => modulesFor(selectedStage.value))
const detailElement = ref<HTMLElement | null>(null)

function modulesFor(stage: RoadmapStage): SeoProgramModule[] {
  return seoProgram.filter((module) => stage.moduleNumbers.includes(module.number))
}

function completedFor(stage: RoadmapStage): number {
  return modulesFor(stage).filter((module) => props.completedModuleIds.includes(module.id)).length
}

function circleStyle(stage: RoadmapStage) {
  if (props.loading || props.error) {
    return { background: '#dce9e5' }
  }

  const percentage = Math.round((completedFor(stage) / stage.moduleNumbers.length) * 100)
  return { background: `conic-gradient(#3d6970 ${percentage}%, #dce9e5 0)` }
}

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
      aria-labelledby="seo-course-heading"
    >
      <header
        class="border-b border-petrol/10 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] px-6 py-7 sm:px-9 sm:py-9"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Altruisme Learn
        </p>
        <h1
          id="seo-course-heading"
          class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Formation SEO
        </h1>
        <p class="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
          Comprends le référencement naturel, améliore ton site et développe ta visibilité étape par
          étape.
        </p>
        <p class="mt-4 text-sm font-medium text-petrol-dark">
          {{ seoProgram.length }} modules · {{ lessonCount }} leçons · Durée estimée :
          {{ formatSeoMinutes(totalMinutes) }} (lecture et exercices)
        </p>
        <RouterLink
          :to="{ name: 'learning-plan' }"
          class="learn-button-primary mt-5 inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
        >
          Ouvrir mon plan d'action →
        </RouterLink>

        <div class="mt-8 border-t border-petrol/15 pt-5">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h2 class="text-base font-semibold text-ink">Ma progression</h2>
            <p v-if="!loading && !error" class="text-sm font-semibold text-petrol-dark">
              {{ completedCount }} module{{ completedCount > 1 ? 's' : '' }} terminé{{
                completedCount > 1 ? 's' : ''
              }}
              sur {{ seoProgram.length }} · {{ percentage }} %
            </p>
          </div>
          <div
            v-if="!loading && !error"
            class="mt-3 h-2 overflow-hidden rounded-full bg-white/70"
            role="progressbar"
            :aria-valuenow="completedCount"
            aria-valuemin="0"
            :aria-valuemax="seoProgram.length"
            aria-label="Modules terminés"
          >
            <div
              class="h-full rounded-full bg-petrol transition-[width] duration-200"
              :style="{ width: `${percentage}%` }"
            />
          </div>
          <p class="mt-2 text-xs leading-5 text-muted">
            Marque les modules terminés après les avoir suivis. Le plan d'action avance séparément.
          </p>
          <p v-if="loading" class="mt-2 text-sm text-muted" role="status">
            Chargement de ta progression…
          </p>
          <div v-if="error" class="mt-2 flex flex-wrap items-center gap-3" role="alert">
            <p class="text-sm text-red-700">{{ error }}</p>
            <button
              type="button"
              class="text-sm font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              @click="emit('retry')"
            >
              Réessayer
            </button>
          </div>
        </div>
      </header>

      <div class="px-5 pb-7 pt-7 sm:px-8 lg:px-5 lg:pt-9">
        <div class="mb-6 px-1 sm:px-2 lg:text-center">
          <h2
            id="seo-roadmap-heading"
            class="text-xl font-semibold tracking-tight text-ink sm:text-2xl"
          >
            Ton parcours en quatre étapes
          </h2>
          <p class="mt-2 text-sm text-muted">
            Sélectionne une étape pour retrouver les modules correspondants.
          </p>
        </div>
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
                aria-controls="seo-roadmap-detail"
                @click="selectStage(index)"
              >
                <span
                  class="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full p-1 transition-transform group-hover:scale-105 lg:size-24"
                  :class="selectedStageIndex === index ? 'ring-4 ring-petrol/10' : ''"
                  :style="circleStyle(stage)"
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
                    {{ stage.topics }}
                  </span>
                  <span class="mt-2 block text-xs font-semibold text-petrol-dark lg:mt-3">
                    <template v-if="loading">Progression en cours de chargement</template>
                    <template v-else-if="error">Progression indisponible</template>
                    <template v-else>
                      {{ completedFor(stage) }} / {{ stage.moduleNumbers.length }} module{{
                        stage.moduleNumbers.length > 1 ? 's' : ''
                      }}
                      terminé{{ stage.moduleNumbers.length > 1 ? 's' : '' }}
                    </template>
                  </span>
                </span>
              </button>
            </li>
          </ol>
        </div>
      </div>

      <div
        id="seo-roadmap-detail"
        ref="detailElement"
        class="scroll-mt-20 border-t border-petrol/15 bg-mist/50 p-6 sm:p-8"
        aria-labelledby="seo-roadmap-detail-heading"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Étape {{ formatNumber(selectedStageIndex + 1) }} / 04
        </p>
        <h3
          id="seo-roadmap-detail-heading"
          aria-live="polite"
          class="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl"
        >
          {{ selectedStage.title }}
        </h3>
        <p class="mt-2 max-w-2xl text-sm leading-7 text-ink-soft">
          {{ selectedStage.description }}
        </p>
        <ol class="mt-5 grid gap-2 border-t border-petrol/15 pt-5 sm:grid-cols-2">
          <li v-for="module in selectedModules" :key="module.id">
            <RouterLink
              :to="{ name: 'dashboard', hash: `#module-${module.number}` }"
              class="group flex min-h-16 items-center gap-3 rounded-xl border border-petrol/15 bg-white/80 px-4 py-3 transition hover:border-petrol/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              :aria-label="`Voir le module ${module.number} : ${module.title}`"
              @click="emit('selectModule', module.number)"
            >
              <span class="text-sm font-semibold text-petrol-dark">{{
                formatNumber(module.number)
              }}</span>
              <span class="min-w-0 flex-1 text-sm font-medium leading-5 text-ink">{{
                module.title
              }}</span>
              <span
                v-if="!loading && !error && completedModuleIds.includes(module.id)"
                class="text-xs font-semibold text-petrol-dark"
                aria-label="Module terminé"
                >✓ Terminé</span
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
      </div>
    </section>
  </div>
</template>
