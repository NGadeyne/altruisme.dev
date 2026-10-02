<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'
import PageHero from '@/components/PageHero.vue'
import { siteLinks } from '@/data/site'
</script>

<template>
  <main class="min-h-screen bg-sand">
    <PageHero title-id="podcast-title">
      <template #eyebrow>Podcast Altruisme.DEV</template>
      <template #title>Des conversations longues avec <span>ceux qui construisent</span></template>
      <template #lead>Produit, code, SaaS, IA, indépendance, entrepreneuriat et carrière : le podcast prend le temps d’aller derrière les décisions et les trajectoires.</template>
      <template #action>
        <BaseButton v-if="siteLinks.podcast" :href="siteLinks.podcast" size="large">Écouter le podcast</BaseButton>
        <span v-else class="inline-flex rounded-xl bg-petrol/10 px-5 py-3 text-sm font-semibold text-petrol">Premier épisode bientôt disponible</span>
      </template>
    </PageHero>
    <section class="pb-24 pt-20 sm:pt-28"><BaseContainer><div class="mx-auto max-w-5xl rounded-[2rem] border border-petrol/15 bg-mist p-8 sm:p-12"><p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">La ligne éditoriale</p><h2 class="mt-4 text-3xl font-bold tracking-tight text-ink">Pas d’interview promo déguisée</h2><p class="mt-5 max-w-3xl text-base leading-8 text-muted">L’idée est de discuter des choix, des erreurs, des contraintes et des apprentissages. Comprendre comment une personne pense et construit vaut souvent plus qu’une liste de conseils sortis de leur contexte.</p><BaseButton to="/contribuer" variant="secondary" class="mt-7">Proposer un invité ou un sujet</BaseButton></div></BaseContainer></section>
  </main>
</template>
