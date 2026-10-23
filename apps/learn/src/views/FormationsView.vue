<script setup lang="ts">
import AcquisitionRoadmap from '@/components/courses/AcquisitionRoadmap.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { formatSeoMinutes, seoProgram, seoReadingMinutes } from '@/data/seoProgram'

const lessonCount = seoProgram.reduce((total, module) => total + module.lessons.length, 0)
</script>

<template>
  <BaseContainer>
    <header
      class="overflow-hidden rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10 lg:p-12"
    >
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d6970]">Altruisme Learn</p>
      <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">Formations</h1>
      <p class="mt-4 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
        Explore le parcours Acquisition clients, puis avance dans les formations disponibles à ton
        rythme.
      </p>
    </header>

    <AcquisitionRoadmap class="mt-9" />

    <section class="mt-10" aria-labelledby="formations-heading">
      <div class="mb-5">
        <h2
          id="formations-heading"
          class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Contenu de la formation
        </h2>
        <p class="mt-2 text-sm text-muted">Modules, leçons et exercices</p>
      </div>
      <RouterLink
        :to="{ name: 'dashboard' }"
        class="group block rounded-3xl border border-petrol/15 bg-white p-6 shadow-sm transition hover:border-petrol/35 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol sm:p-8"
      >
        <div class="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[#3d6970]">
              Parcours disponible
            </p>
            <h3 class="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Formation SEO
            </h3>
            <p class="mt-3 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
              Comprendre le référencement naturel, améliorer ton site et développer ta visibilité
              étape par étape.
            </p>
          </div>
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-full border border-petrol/20 bg-mist text-xl text-petrol-dark transition group-hover:translate-x-1"
            aria-hidden="true"
            >↗</span
          >
        </div>

        <p class="mt-7 text-sm font-medium text-petrol-dark">
          {{ seoProgram.length }} modules · {{ lessonCount }} leçons ·
          {{ formatSeoMinutes(seoReadingMinutes) }} de lecture
        </p>
      </RouterLink>
    </section>
  </BaseContainer>
</template>
