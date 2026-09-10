<script setup lang="ts">
import { RouterLink } from 'vue-router'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import LessonCard from '@/components/courses/LessonCard.vue'
import ResourceCard from '@/components/courses/ResourceCard.vue'

import { trainingSections } from '@/data/training'
import { resources } from '@/data/resources'

import { useTrainingProgress } from '@/composables/useTrainingProgress'

const { completedCount, totalLessons, percentage, lastLesson, isCompleted, getSectionProgress } =
  useTrainingProgress()
</script>

<template>
  <BaseContainer>
    <header>
      <p class="text-sm font-semibold text-fuchsia-600">Espace de formation</p>

      <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Ta formation</h1>

      <p class="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
        Avance simplement dans l’ordre, une étape après l’autre. Chaque leçon est là pour te
        rapprocher de ta prochaine mission.
      </p>
    </header>

    <!-- Progress -->
    <section class="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-medium text-zinc-500">Progression</p>

          <div class="mt-1 flex items-baseline gap-2">
            <p class="text-2xl font-bold text-zinc-950">{{ percentage }} %</p>

            <p class="text-sm text-zinc-500">{{ completedCount }} / {{ totalLessons }} leçons</p>
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
          class="inline-flex items-center justify-center rounded-xl bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-700"
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
          class="inline-flex items-center justify-center rounded-xl bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-700"
        >
          Commencer la formation →
        </RouterLink>
      </div>

      <!-- Progress bar -->
      <div class="mt-5 h-2 overflow-hidden rounded-full bg-zinc-100">
        <div
          class="h-full rounded-full bg-fuchsia-600 transition-all duration-300"
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
              class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white"
            >
              {{ String(sectionIndex + 1).padStart(2, '0') }}
            </div>

            <div>
              <h2 class="text-2xl font-semibold tracking-tight text-zinc-950">
                {{ section.title }}
              </h2>

              <p v-if="section.description" class="mt-1 max-w-2xl text-sm leading-6 text-zinc-500">
                {{ section.description }}
              </p>
            </div>
          </div>

          <!-- Section progress -->
          <p class="pl-14 text-sm font-medium text-zinc-500 sm:pl-0 sm:pt-2">
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

    <!-- Bonus -->
    <section class="mt-20 border-t border-zinc-200 pt-12">
      <div>
        <p class="text-sm font-semibold text-fuchsia-600">Bonus</p>

        <h2 class="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Tes ressources</h2>

        <p class="mt-2 max-w-2xl text-zinc-600">
          Des ressources pratiques à utiliser quand tu en as besoin pendant l’accompagnement.
        </p>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ResourceCard
          v-for="resource in resources"
          :key="resource.id"
          :title="resource.title"
          :description="resource.description"
          :slug="resource.slug"
        />
      </div>
    </section>
  </BaseContainer>
</template>
