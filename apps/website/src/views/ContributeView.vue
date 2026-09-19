<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteLinks } from '@/data/site'
</script>

<template>
  <main class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24"><div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_50%,#e4ece8_100%)]"/><BaseContainer><div class="mx-auto max-w-4xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Contribuer</p><h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">Altruisme.DEV ne doit pas avoir <span class="text-petrol">une seule voix.</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Tu as une expérience concrète, une analyse, une idée de guide, un sujet d’actualité ou une personne à inviter ? Les contributions font partie du projet.</p></div></BaseContainer></section>
    <section class="pb-24"><BaseContainer><div class="mx-auto grid max-w-5xl gap-5 md:grid-cols-2"><article v-for="item in [{t:'Écrire',d:'Article de fond, retour d’expérience, analyse technique, produit ou business.'},{t:'Suggérer',d:'Un sujet d’actualité, un angle à creuser ou une ressource qui mérite d’être expliquée.'},{t:'Participer au podcast',d:'Proposer un invité, une trajectoire ou un sujet de conversation utile.'},{t:'Aider le média',d:'Relire, challenger, partager une expertise ou contribuer à un futur guide de référence.'}]" :key="item.t" class="rounded-3xl border border-petrol/15 bg-white/40 p-7"><h2 class="text-xl font-bold text-ink">{{ item.t }}</h2><p class="mt-3 text-sm leading-6 text-muted">{{ item.d }}</p></article></div><div class="mx-auto mt-10 max-w-3xl text-center"><BaseButton :href="siteLinks.email" size="large">Proposer une contribution</BaseButton></div></BaseContainer></section>
  </main>
</template>
