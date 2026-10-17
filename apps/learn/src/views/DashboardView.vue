<script setup lang="ts">
import { RouterLink } from 'vue-router'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import LessonCard from '@/components/courses/LessonCard.vue'

import { trainingSections } from '@/data/training'

import { useTrainingProgress } from '@/composables/useTrainingProgress'

const { completedCount, totalLessons, percentage, lastLesson, isCompleted, getSectionProgress } =
  useTrainingProgress()
</script>

<template>
  <BaseContainer>
    <header>
      <p class="text-sm font-semibold text-petrol-dark">Espace de formation</p>

      <h1 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Ta formation</h1>

      <p class="mt-3 max-w-2xl text-base leading-7 text-muted">
        Avance simplement dans l’ordre, une étape après l’autre. Chaque leçon est là pour te
        rapprocher de ta prochaine mission.
      </p>
    </header>

    <!-- Progress -->
    <section class="mt-8 rounded-2xl border border-petrol/20 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-medium text-muted">Progression</p>

          <div class="mt-1 flex items-baseline gap-2">
            <p class="text-2xl font-bold text-ink">{{ percentage }} %</p>

            <p class="text-sm text-muted">{{ completedCount }} / {{ totalLessons }} leçons</p>
          </div>
        </div>

        <RouterLink
          v-if="lastLesson"
          :to="{
            name: 'lesson',
            params: {
              lessonSlug: lastLesson.slug,
            },
          }"
          class="inline-flex items-center justify-center rounded-xl bg-petrol-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
        >
          Continuer la formation →
        </RouterLink>

        <RouterLink
          v-else-if="trainingSections[0]?.lessons[0]"
          :to="{
            name: 'lesson',
            params: {
              lessonSlug: trainingSections[0].lessons[0].slug,
            },
          }"
          class="inline-flex items-center justify-center rounded-xl bg-petrol-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
        >
          Commencer la formation →
        </RouterLink>
      </div>

      <!-- Progress bar -->
      <div class="mt-5 h-2 overflow-hidden rounded-full bg-mist">
        <div
          class="h-full rounded-full bg-petrol-dark transition-all duration-300"
          :style="{
            width: `${percentage}%`,
          }"
        />
      </div>
    </section>

    <!-- Training -->
    <div class="mt-14 space-y-16">
      <section v-for="(section, sectionIndex) in trainingSections" :key="section.id">
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="flex items-start gap-4">
            <div
              class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white"
            >
              {{ String(sectionIndex + 1).padStart(2, '0') }}
            </div>

            <div>
              <h2 class="text-2xl font-semibold tracking-tight text-ink">
                {{ section.title }}
              </h2>

              <p v-if="section.description" class="mt-1 max-w-2xl text-sm leading-6 text-muted">
                {{ section.description }}
              </p>
            </div>
          </div>

          <!-- Section progress -->
          <p class="pl-14 text-sm font-medium text-muted sm:pl-0 sm:pt-2">
            {{ getSectionProgress(section.id).completed }}
            /
            {{ getSectionProgress(section.id).total }}
            terminées
          </p>
        </div>

        <div class="grid gap-3 lg:grid-cols-2">
          <LessonCard
            v-for="(lesson, lessonIndex) in section.lessons"
            :key="lesson.id"
            :number="lessonIndex + 1"
            :title="lesson.title"
            :slug="lesson.slug"
            :status="isCompleted(lesson.id) ? 'completed' : 'available'"
          />
        </div>
      </section>
    </div>
  </BaseContainer>
</template>
