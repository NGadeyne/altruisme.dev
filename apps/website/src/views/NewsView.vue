<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'

const stories = [
  { category: 'Sélection hebdo', title: 'Les actualités tech de la semaine', description: 'Chaque semaine, une sélection courte des annonces et mouvements qui méritent vraiment d’être suivis.', status: 'Prochaine édition' },
  { category: 'Produit & SaaS', title: 'Ce qui change pour les produits tech', description: 'Nouveaux usages, modèles, acquisitions et signaux marché remis dans leur contexte.', status: 'À venir' },
  { category: 'IA & automatisation', title: 'Des usages avant les effets d’annonce', description: 'Les nouveautés qui changent réellement la façon de construire, travailler ou opérer.', status: 'À venir' },
  { category: 'Freelance & ESN', title: 'Le marché du travail tech en mouvement', description: 'Missions, recrutement, modèles ESN et évolution des pratiques côté indépendants.', status: 'À venir' },
]
</script>

<template>
  <main class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24"><div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_50%,#e4ece8_100%)]"/><BaseContainer><div class="mx-auto max-w-4xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Actualités</p><h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">Les actualités tech de la semaine, <span class="text-petrol">triées et expliquées.</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Une sélection éditoriale hebdomadaire sur le produit, le SaaS, l’IA, l’automatisation, le freelancing et les entreprises tech.</p></div></BaseContainer></section>
    <section class="pb-24"><BaseContainer><div class="grid gap-5 md:grid-cols-2"><article v-for="story in stories" :key="story.title" class="rounded-3xl border border-petrol/15 bg-white/40 p-7 sm:p-8"><div class="flex items-center justify-between gap-4"><span class="text-xs font-semibold uppercase tracking-[0.15em] text-petrol">{{ story.category }}</span><span class="rounded-full bg-petrol/8 px-3 py-1 text-xs font-semibold text-petrol">{{ story.status }}</span></div><h2 class="mt-5 text-2xl font-bold leading-8 text-ink">{{ story.title }}</h2><p class="mt-4 text-sm leading-6 text-muted">{{ story.description }}</p></article></div><div class="mx-auto mt-12 max-w-3xl border-l-2 border-petrol/30 pl-6"><p class="text-sm font-semibold text-petrol">Principe éditorial</p><p class="mt-2 text-lg font-semibold leading-8 text-ink">Mieux vaut cinq sujets compris que cinquante titres survolés. La page Actualités est pensée comme un rendez-vous hebdomadaire, pas comme un fil continu.</p></div></BaseContainer></section>
  </main>
</template>
