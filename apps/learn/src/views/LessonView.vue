<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import BaseContainer from '@/components/ui/BaseContainer.vue'

import { getLessonBySlug, getLessonSection, lessons } from '@/data/training'

import { useTrainingProgress } from '@/composables/useTrainingProgress'

const route = useRoute()

const { isCompleted, toggleCompleted, setLastLesson } = useTrainingProgress()

const lesson = computed(() => {
  const slug = route.params.lessonSlug as string

  return getLessonBySlug(slug)
})

const section = computed(() => {
  if (!lesson.value) {
    return undefined
  }

  return getLessonSection(lesson.value.id)
})

const lessonIndex = computed(() => {
  if (!lesson.value) {
    return -1
  }

  return lessons.findIndex((item) => item.id === lesson.value?.id)
})

const previousLesson = computed(() => {
  if (lessonIndex.value <= 0) {
    return undefined
  }

  return lessons[lessonIndex.value - 1]
})

const nextLesson = computed(() => {
  if (lessonIndex.value === -1 || lessonIndex.value >= lessons.length - 1) {
    return undefined
  }

  return lessons[lessonIndex.value + 1]
})

const sectionLessonIndex = computed(() => {
  if (!lesson.value || !section.value) {
    return -1
  }

  return section.value.lessons.findIndex((item) => item.id === lesson.value?.id)
})

const completed = computed(() => {
  if (!lesson.value) {
    return false
  }

  return isCompleted(lesson.value.id)
})

watch(
  lesson,
  (currentLesson) => {
    if (currentLesson) {
      setLastLesson(currentLesson.slug)
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <BaseContainer>
    <!-- Not found -->
    <div v-if="!lesson" class="mx-auto max-w-2xl py-20 text-center">
      <p class="text-sm font-semibold text-fuchsia-600">Leçon introuvable</p>

      <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950">
        Cette leçon n’existe pas.
      </h1>

      <RouterLink
        to="/"
        class="mt-6 inline-flex rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white"
      >
        Retour à la formation
      </RouterLink>
    </div>

    <!-- Lesson -->
    <div v-else class="mx-auto max-w-4xl">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
      >
        ← Formation
      </RouterLink>

      <!-- Header -->
      <header class="mt-8 border-b border-zinc-200 pb-8">
        <div v-if="section" class="flex flex-wrap items-center gap-2 text-sm">
          <span class="font-semibold text-fuchsia-600">
            {{ section.title }}
          </span>

          <span class="text-zinc-300"> / </span>

          <span class="text-zinc-500">
            Leçon {{ sectionLessonIndex + 1 }} sur {{ section.lessons.length }}
          </span>
        </div>

        <h1 class="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {{ lesson.title }}
        </h1>

        <p v-if="lesson.description" class="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
          {{ lesson.description }}
        </p>
      </header>

      <!-- Content -->
      <main class="py-10">
        <div
          v-if="lesson.type === 'video' && lesson.videoUrl"
          class="mb-10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950"
        >
          <iframe :src="lesson.videoUrl" class="aspect-video w-full" allowfullscreen />
        </div>

        <article v-if="lesson.content" class="lesson-content" v-html="lesson.content" />

        <div
          v-else
          class="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center"
        >
          <p class="font-semibold text-zinc-700">Contenu à venir</p>

          <p class="mt-1 text-sm text-zinc-500">Cette leçon n’a pas encore été remplie.</p>
        </div>

        <!-- Complete -->
        <div class="mt-8 flex justify-center border-t border-zinc-200 pt-8">
          <button
            type="button"
            :class="[
              'rounded-xl px-5 py-3 text-sm font-semibold transition',
              completed
                ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                : 'bg-fuchsia-600 text-white hover:bg-fuchsia-700',
            ]"
            @click="toggleCompleted(lesson.id)"
          >
            <span v-if="completed"> ✓ Leçon terminée </span>

            <span v-else> Marquer comme terminée </span>
          </button>
        </div>
      </main>

      <!-- Navigation -->
      <footer class="grid gap-4 border-t border-zinc-200 py-8 sm:grid-cols-2">
        <RouterLink
          v-if="previousLesson"
          :to="{
            name: 'lesson',
            params: {
              lessonSlug: previousLesson.slug,
            },
          }"
          class="group rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:shadow-sm"
        >
          <p class="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            ← Leçon précédente
          </p>

          <p class="mt-2 font-semibold text-zinc-800">
            {{ previousLesson.title }}
          </p>
        </RouterLink>

        <div v-else />

        <RouterLink
          v-if="nextLesson"
          :to="{
            name: 'lesson',
            params: {
              lessonSlug: nextLesson.slug,
            },
          }"
          class="group rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5 text-right transition hover:border-fuchsia-300 hover:shadow-sm"
        >
          <p class="text-xs font-semibold uppercase tracking-wide text-fuchsia-600">
            Leçon suivante →
          </p>

          <p class="mt-2 font-semibold text-zinc-900">
            {{ nextLesson.title }}
          </p>
        </RouterLink>

        <RouterLink
          v-else
          to="/"
          class="rounded-2xl bg-zinc-950 p-5 text-right text-white transition hover:bg-zinc-800"
        >
          <p class="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            Formation terminée
          </p>

          <p class="mt-2 font-semibold">Retour à la formation →</p>
        </RouterLink>
      </footer>
    </div>
  </BaseContainer>
</template>

<style scoped>
.lesson-content {
  color: #3f3f46;
  font-size: 1rem;
  line-height: 1.8;
}

.lesson-content :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #18181b;
  font-size: 1.5rem;
  font-weight: 700;
}

.lesson-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #18181b;
  font-size: 1.25rem;
  font-weight: 600;
}

.lesson-content :deep(p) {
  margin-top: 1rem;
}

.lesson-content :deep(ul),
.lesson-content :deep(ol) {
  margin-top: 1rem;
  margin-left: 1.5rem;
}

.lesson-content :deep(ul) {
  list-style-type: disc;
}

.lesson-content :deep(ol) {
  list-style-type: decimal;
}

.lesson-content :deep(li) {
  margin-top: 0.5rem;
}

.lesson-content :deep(strong) {
  color: #18181b;
  font-weight: 600;
}

.lesson-content :deep(a) {
  color: #a21caf;
  font-weight: 500;
  text-decoration: underline;
}
</style>
