<script setup lang="ts">
import type { Component } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import {
  courseModules,
  coursePath,
  formatSeoMinutes,
  seoExternalResources,
  type CourseModule,
  type CourseStep,
} from '@/content/guides/seo'
import { guides } from '@/data/guides'

const props = defineProps<{
  module: CourseModule
  sections: (CourseStep & { body: Component })[]
}>()
const guide = guides.find((item) => item.format === 'course')!
const index = courseModules.indexOf(props.module)
const previous = courseModules[index - 1]
const next = courseModules[index + 1]
const minutes = props.sections.reduce((total, step) => total + step.minutes, 0)
</script>

<template>
  <div class="bg-sand">
    <header class="border-b border-petrol/15 bg-mist py-10 sm:py-16">
      <BaseContainer>
        <nav
          aria-label="Fil d’Ariane"
          class="flex flex-wrap items-baseline gap-x-2 text-sm text-muted"
        >
          <RouterLink to="/guides" class="content-link">Guides</RouterLink
          ><span aria-hidden="true">/</span>
          <RouterLink :to="coursePath" class="content-link">{{ guide.title }}</RouterLink
          ><span aria-hidden="true">/</span>
          <span aria-current="page">Module {{ module.number }}</span>
        </nav>
        <h1 class="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {{ module.title }}
        </h1>
        <p class="mt-5 max-w-[65ch] text-lg leading-8 text-ink-soft">{{ module.description }}</p>
        <p class="mt-5 text-sm text-muted">
          <a v-if="guide.author" :href="guide.author.url" class="content-link">{{
            guide.author.name
          }}</a>
          · {{ formatSeoMinutes(minutes) }} avec l’exercice
        </p>
      </BaseContainer>
    </header>
    <BaseContainer>
      <div
        class="grid items-start gap-8 py-10 sm:py-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14"
      >
        <nav
          id="sommaire"
          aria-labelledby="sommaire-title"
          class="scroll-mt-28 rounded-2xl border border-petrol/15 bg-white/60 p-5 lg:sticky lg:top-28"
        >
          <h2 id="sommaire-title" class="font-semibold text-ink">Dans ce module</h2>
          <ol class="mt-4 space-y-4">
            <li v-for="step in sections" :key="step.slug">
              <a :href="`#${step.slug}`" class="group block text-sm leading-5 text-ink">
                <span class="block text-xs text-muted">{{ step.label }}</span>
                <span class="group-hover:underline">{{ step.title }}</span>
              </a>
            </li>
          </ol>
        </nav>
        <div class="min-w-0 max-w-[72ch]">
          <section
            v-for="step in sections"
            :id="step.slug"
            :key="step.slug"
            :aria-labelledby="`${step.slug}-titre`"
            class="scroll-mt-28 border-b border-petrol/15 pb-10 mb-12"
          >
            <p class="text-sm font-semibold text-petrol-dark">
              {{ step.label }} · {{ step.minutes }} min
            </p>
            <h2
              :id="`${step.slug}-titre`"
              class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              {{ step.title }}
            </h2>
            <p class="mt-4 text-lg leading-8 text-ink-soft">{{ step.objective }}</p>
            <div class="course-body mt-8 text-base leading-8 text-ink-soft">
              <component
                :is="step.body"
                :public-edition="true"
                v-bind="step.lessonNumber ? {} : { practiceMinutes: step.minutes }"
              />
            </div>
            <a href="#sommaire" class="content-link mt-6 inline-block text-sm"
              >Revenir au sommaire du module ↑</a
            >
          </section>
          <aside class="rounded-2xl bg-mist p-6">
            <h2 class="text-xl font-semibold text-ink">Pour aller plus loin</h2>
            <ul class="mt-4 space-y-3">
              <li>
                <RouterLink :to="`${coursePath}#ressources`" class="content-link"
                  >Les modèles du guide</RouterLink
                >
              </li>
              <li v-for="resource in seoExternalResources[module.number]" :key="resource.url">
                <a :href="resource.url" class="content-link">{{ resource.title }}</a>
              </li>
            </ul>
          </aside>
          <nav aria-label="Parcourir le guide" class="mt-8 grid gap-5 sm:grid-cols-2">
            <RouterLink v-if="previous" :to="previous.path" class="content-link">
              <span class="block text-xs text-muted">← Module précédent</span>{{ previous.title }}
            </RouterLink>
            <RouterLink
              v-if="next"
              :to="next.path"
              class="content-link sm:col-start-2 sm:text-right"
            >
              <span class="block text-xs text-muted">Module suivant →</span>{{ next.title }}
            </RouterLink>
            <RouterLink v-else :to="coursePath" class="content-link sm:text-right"
              >Revenir au sommaire du guide</RouterLink
            >
          </nav>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<style scoped>
.course-body {
  overflow-wrap: anywhere;
}
.course-body :deep(.learn-button-primary) {
  background: var(--color-petrol-dark);
  color: white;
}
</style>
