<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { featuredGuides } from '@/data/site'
</script>

<template>
  <main class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24"><div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_50%,#e4ece8_100%)]"/><BaseContainer><div class="mx-auto max-w-4xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Guides Altruisme.DEV</p><h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">Des guides complets pour <span class="text-petrol">comprendre et construire.</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Chaque guide est conçu comme une ressource de référence : long format, concret, structuré et mis à jour avec le temps.</p></div></BaseContainer></section>
    <section class="pb-24"><BaseContainer><div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"><article v-for="guide in featuredGuides" :key="guide.title" class="flex min-h-[300px] flex-col rounded-3xl border border-petrol/15 bg-white/40 p-7"><div class="flex items-center justify-between gap-4"><span class="text-xs font-semibold uppercase tracking-[0.15em] text-petrol">{{ guide.label }}</span><span :class="['rounded-full px-3 py-1 text-xs font-semibold', guide.status === 'available' ? 'bg-petrol/10 text-petrol' : 'bg-sand-warm text-muted']">{{ guide.status === 'available' ? 'Disponible' : 'Bientôt disponible' }}</span></div><h2 class="mt-5 text-2xl font-bold leading-8 text-ink">{{ guide.title }}</h2><p class="mt-4 flex-1 text-sm leading-6 text-muted">{{ guide.description }}</p><RouterLink v-if="guide.to" :to="guide.to" class="mt-7 inline-flex text-sm font-semibold text-petrol">Lire le guide →</RouterLink><p v-else class="mt-7 text-sm font-semibold text-muted-light">Publication à venir</p></article></div></BaseContainer></section>
  </main>
</template>
