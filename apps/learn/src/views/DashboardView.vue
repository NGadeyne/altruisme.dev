<script setup lang="ts">
import { computed } from 'vue'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import UnavailableLinkIcon from '@/components/ui/UnavailableLinkIcon.vue'
import { useSeoModuleProgress } from '@/composables/useSeoModuleProgress'
import { isSeoLessonAvailable } from '@/config/features'
import {
  estimateSeoMinutes,
  formatSeoMinutes,
  getSeoLessonSlug,
  seoPracticeMinutes,
  seoProgram,
  seoReadingMinutes,
  type SeoProgramModule,
} from '@/data/seoProgram'
import { seoResources } from '@/data/seoResources'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const userId = computed(() => authStore.user?.id)
const {
  completedCount,
  percentage,
  loading: progressLoading,
  error: progressError,
  isCompleted,
  isSaving,
  reload: reloadProgress,
  toggleCompleted,
} = useSeoModuleProgress(userId)
const lessonCount = seoProgram.reduce((total, module) => total + module.lessons.length, 0)
const totalMinutes = seoReadingMinutes + seoPracticeMinutes

function moduleMinutes(module: SeoProgramModule) {
  return module.lessons.reduce(
    (total, lesson) => total + estimateSeoMinutes(lesson.readingMinutes),
    0,
  )
}

function formatNumber(number: number) {
  return String(number).padStart(2, '0')
}

function practiceRoute(number: number) {
  return `seo-practice-${formatNumber(number)}`
}
</script>

<template>
  <BaseContainer>
    <RouterLink
      :to="{ name: 'formations' }"
      class="mb-6 inline-flex text-sm font-medium text-petrol-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
    >
      ← Toutes les formations
    </RouterLink>
    <header
      class="overflow-hidden rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10 lg:p-12"
    >
      <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d6970]">
            Altruisme Learn
          </p>
          <h1
            class="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl"
          >
            Formation SEO <span class="text-petrol-dark">— Programme V1</span>
          </h1>
        </div>
        <span
          class="w-fit shrink-0 rounded-full border border-petrol/20 bg-white/70 px-4 py-2 text-xs font-semibold text-petrol-dark"
        >
          {{ lessonCount }} leçons au programme
        </span>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div class="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm sm:p-5">
          <p class="text-3xl font-semibold tracking-tight text-[#315960] sm:text-4xl">
            {{ lessonCount }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Leçons</p>
        </div>
        <div class="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm sm:p-5">
          <p class="text-3xl font-semibold tracking-tight text-[#315960] sm:text-4xl">
            {{ seoProgram.length }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Modules</p>
        </div>
        <div class="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm sm:p-5">
          <p class="text-3xl font-semibold tracking-tight text-[#315960] sm:text-4xl">
            {{ formatSeoMinutes(seoReadingMinutes) }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Lecture estimée</p>
        </div>
        <div class="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm sm:p-5">
          <p class="text-3xl font-semibold tracking-tight text-[#315960] sm:text-4xl">
            {{ seoResources.length }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Ressources</p>
        </div>
      </div>

      <p class="mt-6 max-w-3xl text-sm leading-7 text-ink-soft">
        Les dix mises en pratique représentent environ {{ formatSeoMinutes(seoPracticeMinutes) }}
        d'exercices guidés. Avec la lecture des leçons, prévois environ
        {{ formatSeoMinutes(totalMinutes) }} pour l'ensemble de la formation. La durée des vidéos
        sera précisée lorsqu'elles seront disponibles.
      </p>
      <RouterLink
        :to="{ name: 'learning-plan' }"
        class="learn-button-primary mt-6 inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
      >
        Ouvrir mon plan d'action →
      </RouterLink>
    </header>

    <section
      class="mt-8 rounded-2xl border border-petrol/15 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="course-progress-heading"
    >
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="course-progress-heading" class="text-lg font-semibold text-ink">Ma progression</h2>
        <p v-if="!progressLoading" class="text-sm font-semibold text-petrol-dark">
          {{ completedCount }} module{{ completedCount > 1 ? 's' : '' }} terminé{{
            completedCount > 1 ? 's' : ''
          }}
          sur {{ seoProgram.length }} · {{ percentage }} %
        </p>
      </div>
      <div
        v-if="!progressLoading"
        class="mt-4 h-2.5 overflow-hidden rounded-full bg-mist"
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
      <p class="mt-3 text-sm text-muted">
        Marque chaque module comme terminé lorsque tu l'as suivi. Ton plan d'action avance
        séparément.
      </p>
      <p v-if="progressLoading" class="mt-2 text-sm text-muted" role="status">
        Chargement de ta progression…
      </p>
      <div v-if="progressError" class="mt-2 flex flex-wrap items-center gap-3" role="alert">
        <p class="text-sm text-red-700">{{ progressError }}</p>
        <button
          type="button"
          class="text-sm font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          @click="reloadProgress"
        >
          Réessayer
        </button>
      </div>
    </section>

    <section class="mt-10 grid gap-5 lg:grid-cols-2" aria-label="Modules de la formation">
      <article
        v-for="module in seoProgram"
        :key="module.number"
        class="flex h-full flex-col rounded-3xl border border-petrol/15 bg-white p-6 shadow-sm sm:p-8"
        :aria-labelledby="`module-${module.number}`"
      >
        <div class="flex items-start gap-4">
          <span class="text-3xl font-semibold tracking-tight text-[#3d6970]">
            {{ formatNumber(module.number) }}
          </span>
          <div class="min-w-0 flex-1">
            <h2
              :id="`module-${module.number}`"
              class="scroll-mt-24 text-xl font-semibold tracking-tight text-ink sm:text-2xl"
            >
              {{ module.title }}
            </h2>
            <p class="mt-1 text-sm font-medium text-[#3d6970]">
              {{ module.lessons.length }} leçons · {{ formatSeoMinutes(moduleMinutes(module)) }} de
              lecture
            </p>
            <p class="mt-3 text-sm leading-6 text-muted">{{ module.description }}</p>
          </div>
        </div>

        <ol class="mt-6 divide-y divide-petrol/10 border-t border-petrol/10">
          <li
            v-for="lesson in module.lessons"
            :key="lesson.number"
            class="grid grid-cols-[2rem_minmax(0,1fr)_auto_auto] items-start gap-3 py-3.5 sm:gap-4"
          >
            <span class="text-sm font-semibold text-[#3d6970]">{{
              formatNumber(lesson.number)
            }}</span>
            <RouterLink
              v-if="isSeoLessonAvailable(lesson.id)"
              :to="{ name: 'seo-lesson', params: { lessonSlug: getSeoLessonSlug(lesson.id) } }"
              class="w-fit text-left text-sm font-medium leading-6 text-ink underline-offset-4 transition hover:text-petrol-dark hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            >
              {{ lesson.title }}
            </RouterLink>
            <button
              v-else
              type="button"
              title="Bientôt disponible"
              class="w-fit text-left text-sm font-medium leading-6 text-ink underline-offset-4 transition hover:text-petrol-dark hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            >
              {{ lesson.title }}
            </button>
            <span class="whitespace-nowrap text-sm text-muted"
              >{{ estimateSeoMinutes(lesson.readingMinutes) }} min</span
            >
            <RouterLink
              v-if="isSeoLessonAvailable(lesson.id)"
              :to="{ name: 'seo-lesson', params: { lessonSlug: getSeoLessonSlug(lesson.id) } }"
              :aria-label="`Lire la leçon : ${lesson.title}`"
              class="flex size-9 shrink-0 items-center justify-center rounded-full border border-petrol/20 bg-mist text-petrol-dark transition hover:border-petrol/40 hover:bg-petrol/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            >
              <svg
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0-7.07 7.07l1.71-1.71" />
              </svg>
            </RouterLink>
            <UnavailableLinkIcon v-else label="Leçon bientôt disponible" />
          </li>
        </ol>

        <div v-if="module.exercise" class="mt-auto pt-6">
          <div class="rounded-2xl border-l-2 border-petrol/50 bg-mist/70 px-4 py-4">
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#315960]">
              Mise en pratique
            </p>
            <div class="mt-2 flex items-start justify-between gap-4">
              <RouterLink
                :to="{ name: practiceRoute(module.number) }"
                class="w-fit text-left text-sm leading-6 text-ink-soft underline-offset-4 transition hover:text-petrol-dark hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              >
                {{ module.exercise }}
              </RouterLink>
              <RouterLink
                :to="{ name: practiceRoute(module.number) }"
                :aria-label="`Ouvrir la mise en pratique du module ${module.number}`"
                class="flex size-9 shrink-0 items-center justify-center rounded-full border border-petrol/20 bg-white text-petrol-dark transition hover:border-petrol/40 hover:bg-petrol/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              >
                <svg
                  class="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0-7.07 7.07l1.71-1.71" />
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="mt-5 w-fit rounded-lg border border-petrol/25 px-4 py-2.5 text-sm font-semibold text-petrol-dark transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          :aria-pressed="isCompleted(module.id)"
          :disabled="
            progressLoading ||
            Boolean(progressError) ||
            isSaving(module.id) ||
            module.lessons.some((lesson) => !isSeoLessonAvailable(lesson.id))
          "
          @click="toggleCompleted(module.id)"
        >
          {{
            module.lessons.some((lesson) => !isSeoLessonAvailable(lesson.id))
              ? 'Leçons en préparation'
              : isSaving(module.id)
                ? 'Enregistrement…'
                : isCompleted(module.id)
                  ? '✓ Module terminé · Annuler'
                  : 'Marquer le module comme terminé'
          }}
        </button>
      </article>
    </section>
  </BaseContainer>
</template>
