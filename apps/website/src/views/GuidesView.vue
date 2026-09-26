<script setup lang="ts">
import { computed, ref } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import { featuredGuides } from '@/data/site'
import type { GuideCategory } from '@/types/guide'

type GuideFilter = GuideCategory | 'all'

const filters: { label: string; value: GuideFilter }[] = [
  { label: 'Tous', value: 'all' },
  { label: 'Entreprendre', value: 'entreprendre' },
  { label: 'Construire', value: 'construire' },
  { label: 'Acquérir', value: 'acquerir' },
]
const activeFilter = ref<GuideFilter>('all')
const visibleGuides = computed(() =>
  activeFilter.value === 'all'
    ? featuredGuides
    : featuredGuides.filter((guide) => guide.category === activeFilter.value),
)
</script>

<template>
  <div class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24">
      <div
        class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_50%,#e4ece8_100%)]" />
      <BaseContainer>
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Guides Altruisme.DEV</p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">Des guides complets pour <span
              class="text-petrol">comprendre et construire.</span></h1>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Chaque guide est conçu comme une
            ressource de référence : long format, concret, structuré et mis à jour avec le temps.</p>
        </div>
      </BaseContainer>
    </section>
    <section class="pb-24">
      <BaseContainer>
        <div class="mb-8 flex flex-col gap-5 border-b border-petrol/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-petrol">Explorer les guides</p>
            <p class="mt-2 text-sm text-muted">Choisis le sujet qui t’aide à avancer.</p>
          </div>
          <div role="group" aria-label="Filtrer les guides" class="flex flex-wrap gap-2">
            <button
              v-for="filter in filters"
              :key="filter.value"
              type="button"
              :aria-pressed="activeFilter === filter.value"
              :class="[
                'rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol',
                activeFilter === filter.value
                  ? 'border-petrol bg-petrol text-white'
                  : 'border-petrol/20 bg-white/45 text-petrol hover:border-petrol/45 hover:bg-white/75',
              ]"
              @click="activeFilter = filter.value"
            >{{ filter.label }}</button>
          </div>
        </div>
        <div v-if="visibleGuides.length" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="guide in visibleGuides" :key="guide.title"
            class="flex min-h-[300px] flex-col rounded-3xl border border-petrol/15 bg-white/40 p-7">
            <div class="flex items-center justify-between gap-4"><span
                class="text-xs font-semibold uppercase tracking-[0.15em] text-petrol">{{ guide.label }}</span><span
                :class="['rounded-full px-3 py-1 text-xs font-semibold', guide.status === 'available' ? 'bg-petrol/10 text-petrol' : 'bg-sand-warm text-muted']">{{
                  guide.status === 'available' ? 'Disponible' : 'Bientôt disponible' }}</span></div>
            <h2 class="mt-5 text-2xl font-bold leading-8 text-ink">{{ guide.title }}</h2>
            <p class="mt-4 flex-1 text-sm leading-6 text-muted">{{ guide.description }}</p>
            <RouterLink v-if="guide.to" :to="guide.to" class="mt-7 inline-flex text-sm font-semibold text-petrol">Lire
              le guide →</RouterLink>
            <p v-else class="mt-7 text-sm font-semibold text-muted-light">Publication à venir</p>
          </article>
        </div>
        <div v-else class="rounded-3xl border border-petrol/15 bg-white/40 px-7 py-12 text-center" role="status">
          <p class="text-lg font-semibold text-ink">Aucun guide dans cette catégorie pour le moment.</p>
          <p class="mt-2 text-sm text-muted">Les prochains guides apparaîtront ici.</p>
          <button type="button" class="mt-6 text-sm font-semibold text-petrol underline underline-offset-4" @click="activeFilter = 'all'">Voir tous les guides</button>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>
