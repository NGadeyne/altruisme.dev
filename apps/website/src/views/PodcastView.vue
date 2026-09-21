<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'
import { siteLinks } from '@/data/site'
</script>

<template>
  <main class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"><div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_48%,#e4ece8_100%)]"/><BaseContainer><div class="mx-auto max-w-4xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Podcast Altruisme.DEV</p><h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">Des conversations longues avec <span class="text-petrol">ceux qui construisent.</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Produit, code, SaaS, IA, indépendance, entrepreneuriat et carrière : le podcast prend le temps d’aller derrière les décisions et les trajectoires.</p><div class="mt-9"><BaseButton v-if="siteLinks.podcast" :href="siteLinks.podcast" size="large">Écouter le podcast</BaseButton><span v-else class="inline-flex rounded-xl bg-petrol/10 px-5 py-3 text-sm font-semibold text-petrol">Premier épisode bientôt disponible</span></div></div></BaseContainer></section>
    <section class="pb-24"><BaseContainer><div class="mx-auto max-w-5xl rounded-[2rem] border border-petrol/15 bg-mist p-8 sm:p-12"><p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">La ligne éditoriale</p><h2 class="mt-4 text-3xl font-bold tracking-tight text-ink">Pas d’interview promo déguisée.</h2><p class="mt-5 max-w-3xl text-base leading-8 text-muted">L’idée est de discuter des choix, des erreurs, des contraintes et des apprentissages. Comprendre comment une personne pense et construit vaut souvent plus qu’une liste de conseils sortis de leur contexte.</p><BaseButton to="/contribuer" variant="secondary" class="mt-7">Proposer un invité ou un sujet</BaseButton></div></BaseContainer></section>
  </main>
</template>
