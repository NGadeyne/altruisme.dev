<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'

import SeoCourseRoadmap from '@/components/courses/SeoCourseRoadmap.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import UnavailableLinkIcon from '@/components/ui/UnavailableLinkIcon.vue'
import { useSeoModuleProgress } from '@/composables/useSeoModuleProgress'
import { isSeoLessonAvailable } from '@/config/features'
import {
  estimateSeoMinutes,
  formatSeoMinutes,
  getSeoLessonSlug,
  seoProgram,
  type SeoProgramModule,
} from '@/data/seoProgram'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const userId = computed(() => authStore.user?.id)
const {
  completedModuleIds,
  loading: progressLoading,
  error: progressError,
  isCompleted,
  isSaving,
  reload: reloadProgress,
  toggleCompleted,
} = useSeoModuleProgress(userId)
const openedModuleNumber = ref<number | null>(null)

function toggleModule(number: number) {
  openedModuleNumber.value = openedModuleNumber.value === number ? null : number
}

function isModuleOpen(number: number) {
  return openedModuleNumber.value === number
}

function openModule(number: number) {
  openedModuleNumber.value = number
  void nextTick(() => {
    document.getElementById(`module-${number}`)?.scrollIntoView?.({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

onMounted(() => {
  const match = /^#module-(\d+)$/.exec(window.location.hash)
  if (match) {
    const number = Number(match[1])
    if (seoProgram.some((module) => module.number === number)) openModule(number)
  }
})

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
    <SeoCourseRoadmap
      class="mb-8"
      :completed-module-ids="completedModuleIds"
      :loading="progressLoading"
      :error="progressError"
      @retry="reloadProgress"
      @select-module="openModule"
    />

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
              class="scroll-mt-36 text-xl font-semibold tracking-tight text-ink sm:text-2xl"
            >
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 text-left focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol sm:hidden"
                :aria-expanded="isModuleOpen(module.number)"
                :aria-controls="`module-content-${module.number}`"
                @click="toggleModule(module.number)"
              >
                <span>{{ module.title }}</span>
                <svg
                  class="size-5 shrink-0 transition-transform"
                  :class="isModuleOpen(module.number) ? 'rotate-180' : ''"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <span class="hidden sm:inline">{{ module.title }}</span>
            </h2>
            <p class="mt-1 text-sm font-medium text-[#3d6970]">
              {{ module.lessons.length }} leçons · {{ formatSeoMinutes(moduleMinutes(module)) }} de
              lecture
            </p>
          </div>
        </div>

        <div
          :id="`module-content-${module.number}`"
          class="flex-1 flex-col"
          :class="isModuleOpen(module.number) ? 'flex' : 'hidden sm:flex'"
        >
          <p class="mt-3 text-sm leading-6 text-muted">{{ module.description }}</p>
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
        </div>
      </article>
    </section>
  </BaseContainer>
</template>
