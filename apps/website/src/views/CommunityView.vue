<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteLinks } from '@/data/site'
</script>

<template>
  <main class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      <div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_45%,#e4ece8_100%)]" />
      <BaseContainer>
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Communauté Altruisme.DEV</p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">Un endroit pour parler tech <span class="text-petrol">sans jouer un personnage.</span></h1>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Le Discord d’Altruisme.DEV a vocation à réunir développeurs, profils produit, freelances, fondateurs et curieux autour de discussions utiles, de ressources et de retours d’expérience.</p>
          <div class="mt-9">
            <BaseButton v-if="siteLinks.discord" :href="siteLinks.discord" size="large">Rejoindre le Discord</BaseButton>
            <span v-else class="inline-flex rounded-xl bg-petrol/10 px-5 py-3 text-sm font-semibold text-petrol">Discord bientôt ouvert</span>
          </div>
        </div>
      </BaseContainer>
    </section>
    <section class="pb-24"><BaseContainer><div class="mx-auto grid max-w-5xl gap-5 md:grid-cols-3"><article v-for="item in [{t:'Échanger',d:'Poser une question, partager un point de vue et confronter une idée au terrain.'},{t:'Partager',d:'Ressources, outils, articles, retours d’expérience et apprentissages utiles à la communauté.'},{t:'Construire',d:'Faire émerger des sujets, des invités, des contributions et de nouveaux formats pour le média.'}]" :key="item.t" class="rounded-3xl border border-petrol/15 bg-white/40 p-7"><h2 class="text-xl font-bold text-ink">{{ item.t }}</h2><p class="mt-3 text-sm leading-6 text-muted">{{ item.d }}</p></article></div></BaseContainer></section>
  </main>
</template>
