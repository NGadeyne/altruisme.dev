<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'
import FaqList from './FaqList.vue'
import PublicFooter from './PublicFooter.vue'
import PublicHeader from './PublicHeader.vue'

type Card = { title: string; text: string }
type Offer = {
  title: string
  intro: string
  sections: Array<{ title: string; items: string[] }>
  price: string
  priceNote?: string[]
}
defineProps<{
  product: 'Builder' | 'Cloud' | 'Learn'
  actionHref: string
  actionLabel: string
  tagline: string
  title: string
  subtitle: string
  intro: string
  promise: string
  contextTitle: string
  context: string
  contextPoints: string[]
  riskTitle: string
  risk: string
  methodTitle: string
  method: Card[]
  capabilityTitle: string
  capabilities: Card[]
  philosophyTitle: string
  philosophy: string
  offerTitle: string
  offer: string
  offers?: Offer[]
  ownership: string
  audience: string[]
  faq: Array<{ question: string; answer: string }>
  finalTitle: string
  finalText: string
}>()
</script>

<template>
  <div class="min-h-screen bg-sand text-ink">
    <PublicHeader :product="product" :action-href="actionHref" :action-label="actionLabel" />
    <main>
      <section class="relative isolate overflow-hidden py-20 sm:py-28 lg:py-36"><div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_46%,#e4ece8_100%)]" /><div class="pointer-events-none absolute -right-28 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-petrol/14 blur-[145px]" /><BaseContainer><div class="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Altruisme {{ product }}</p><h1 class="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">{{ title }}</h1><p class="mt-5 text-2xl font-medium text-petrol">{{ subtitle }}</p><p class="mt-7 max-w-2xl text-lg leading-8 text-muted">{{ intro }}</p><a :href="actionHref" class="mt-10 inline-flex rounded-xl bg-petrol px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-petrol/20 transition hover:-translate-y-0.5 hover:bg-petrol-hover">{{ actionLabel }}</a></div><div class="rounded-[2rem] border border-petrol/15 bg-white/55 p-8 sm:p-10"><p class="text-2xl font-bold leading-tight text-ink">{{ promise }}</p></div></div></BaseContainer></section>
      <section class="py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Le besoin réel</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{{ contextTitle }}</h2><p class="mt-7 text-lg leading-8 text-muted">{{ context }}</p><ul class="mt-8 grid gap-3 sm:grid-cols-2"><li v-for="item in contextPoints" :key="item" class="rounded-2xl border border-petrol/12 bg-white/55 px-5 py-4 text-base font-semibold text-ink">{{ item }}</li></ul></div></BaseContainer></section>
      <section class="bg-petrol-dark py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-[#a9c1bd]">Une conviction simple</p><h2 class="mt-4 text-3xl font-bold tracking-tight text-sand-light sm:text-5xl">{{ riskTitle }}</h2><p class="mt-6 text-lg leading-8 text-[#d8e1de]">{{ risk }}</p></div></BaseContainer></section>
      <section class="bg-mist py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">La méthode</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{{ methodTitle }}</h2></div><div class="mt-12 grid gap-5 md:grid-cols-3"><article v-for="(item,index) in method" :key="item.title" class="rounded-3xl border border-petrol/15 bg-white/60 p-7"><p class="text-sm font-semibold text-petrol">0{{index + 1}}</p><h3 class="mt-6 text-2xl font-bold">{{ item.title }}</h3><p class="mt-3 leading-7 text-muted">{{ item.text }}</p></article></div></BaseContainer></section>
      <section id="formations" class="py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Ce qui compte</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{{ capabilityTitle }}</h2></div><div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><article v-for="item in capabilities" :key="item.title" class="rounded-3xl border border-petrol/15 bg-white/45 p-7"><h3 class="text-xl font-bold">{{ item.title }}</h3><p class="mt-3 leading-7 text-muted">{{ item.text }}</p></article></div></BaseContainer></section>
      <section class="bg-sand-light py-20 sm:py-28"><BaseContainer><div class="grid gap-10 lg:grid-cols-2"><div><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Philosophie</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{{ philosophyTitle }}</h2><p class="mt-6 text-lg leading-8 text-muted">{{ philosophy }}</p></div><div class="rounded-[2rem] border border-petrol/15 bg-white/60 p-8"><p class="text-sm font-semibold text-petrol">Avant</p><p class="mt-3 text-xl font-bold">Une situation difficile à faire avancer, à comprendre ou à exploiter.</p><div class="my-6 h-px bg-petrol/15"/><p class="text-sm font-semibold text-petrol">Après</p><p class="mt-3 text-xl font-bold">Un résultat concret, des repères et la capacité de poursuivre.</p></div></div></BaseContainer></section>
      <section class="py-20 sm:py-28"><BaseContainer><div v-if="offers?.length" class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Les offres</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Des offres claires pour avancer.</h2></div><div v-if="offers?.length" class="mt-12 grid gap-6 lg:grid-cols-2"><article v-for="item in offers" :key="item.title" class="flex flex-col rounded-[2rem] border border-petrol/15 bg-white/60 p-7 sm:p-9"><h3 class="text-3xl font-bold tracking-tight">{{ item.title }}</h3><p class="mt-5 text-lg leading-8 text-muted">{{ item.intro }}</p><div v-for="section in item.sections" :key="section.title" class="mt-7"><h4 class="text-sm font-semibold uppercase tracking-[.14em] text-petrol">{{ section.title }}</h4><ul class="mt-3 space-y-2 text-muted"><li v-for="entry in section.items" :key="entry" class="flex gap-3 leading-7"><span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />{{ entry }}</li></ul></div><div class="mt-8 border-t border-petrol/15 pt-6"><p class="text-sm font-semibold uppercase tracking-[.14em] text-petrol">Tarif</p><p class="mt-2 text-2xl font-bold">{{ item.price }}</p><p v-for="note in item.priceNote" :key="note" class="mt-2 leading-7 text-muted">{{ note }}</p></div></article></div><div v-else class="grid gap-10 lg:grid-cols-[1fr_.8fr]"><div><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">{{ product }}</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{{ offerTitle }}</h2><p class="mt-6 text-lg leading-8 text-muted">{{ offer }}</p></div><div class="rounded-[2rem] border border-petrol/15 bg-mist p-8"><p class="text-lg font-bold">Votre autonomie compte.</p><p class="mt-4 leading-7 text-muted">{{ ownership }}</p></div></div></BaseContainer></section>
      <section class="bg-sand-light py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Pour qui</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{{ product }} est fait pour vous si…</h2><ul class="mt-8 grid gap-3 text-lg text-muted sm:grid-cols-2"><li v-for="item in audience" :key="item" class="rounded-2xl border border-petrol/12 bg-white/55 px-5 py-4">{{ item }}</li></ul></div></BaseContainer></section>
      <section class="py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">FAQ</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Questions fréquentes.</h2></div><FaqList class="mt-10" :items="faq" /></BaseContainer></section>
      <section class="bg-petrol-dark py-20 text-center sm:py-28"><BaseContainer><h2 class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-sand-light sm:text-5xl">{{ finalTitle }}</h2><p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8e1de]">{{ finalText }}</p><a :href="actionHref" class="mt-9 inline-flex rounded-xl bg-sand px-6 py-3.5 text-sm font-semibold text-petrol-dark transition hover:bg-white">{{ actionLabel }}</a></BaseContainer></section>
    </main>
    <PublicFooter :tagline="tagline" />
  </div>
</template>
