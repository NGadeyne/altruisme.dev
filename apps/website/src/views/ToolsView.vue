<script setup lang="ts">
import { computed, ref } from 'vue'
import { BaseContainer } from '@altruisme/ui'

type ToolCategory = 'acquerir' | 'construire' | 'gerer'

const filters: { label: string; value: ToolCategory }[] = [
  { label: 'Acquérir', value: 'acquerir' },
  { label: 'Construire', value: 'construire' },
  { label: 'Gérer', value: 'gerer' },
]

const tools: { label: string; title: string; description: string; category: ToolCategory }[] = [
  {
    label: 'Semrush',
    title: 'Semrush 2026 : Guide complet',
    description: 'Comprendre Semrush pour analyser sa visibilité, trouver des mots-clés et piloter sa stratégie SEO.',
    category: 'acquerir',
  },
  {
    label: 'Brevo',
    title: 'Brevo 2026 : Guide complet',
    description: 'Découvrir Brevo pour organiser ses contacts, ses campagnes email et ses automatisations.',
    category: 'acquerir',
  },
  {
    label: 'Supabase',
    title: 'Supabase 2026 : Guide complet',
    description: 'Prendre en main Supabase pour créer un backend, gérer les données et l’authentification.',
    category: 'construire',
  },
  {
    label: 'Cloudflare',
    title: 'Cloudflare 2026 : Guide complet',
    description: 'Comprendre Cloudflare pour déployer, accélérer et sécuriser ses projets web.',
    category: 'construire',
  },
  {
    label: 'Payfit',
    title: 'Payfit 2026 : Guide complet',
    description: 'Découvrir Payfit pour gérer la paie et les opérations RH de son entreprise.',
    category: 'gerer',
  },
  {
    label: 'Revolut',
    title: 'Revolut 2026 : Guide complet',
    description: 'Comprendre Revolut pour organiser ses comptes, ses paiements et ses dépenses professionnelles.',
    category: 'gerer',
  },
]

const activeFilter = ref<ToolCategory>('acquerir')
const visibleTools = computed(() => tools.filter((tool) => tool.category === activeFilter.value))
</script>

<template>
  <div class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24">
      <div
        class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_50%,#e4ece8_100%)]" />
      <BaseContainer>
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Outils Altruisme.DEV</p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">Des guides complets pour <span
              class="text-petrol">choisir et maîtriser ses outils.</span></h1>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Des ressources pour comprendre les outils, les choisir avec méthode et les utiliser dans des projets concrets.</p>
        </div>
      </BaseContainer>
    </section>
    <section class="pb-24">
      <BaseContainer>
        <div class="mb-8 flex flex-col gap-5 border-b border-petrol/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-petrol">Explorer les outils</p>
            <p class="mt-2 text-sm text-muted">Choisis le sujet qui t’aide à avancer.</p>
          </div>
          <div role="group" aria-label="Filtrer les outils" class="flex flex-wrap gap-2">
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
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="tool in visibleTools" :key="tool.label"
            class="flex min-h-[300px] flex-col rounded-3xl border border-petrol/15 bg-white/40 p-7">
            <div class="flex items-center justify-between gap-4"><span
                class="text-xs font-semibold uppercase tracking-[0.15em] text-petrol">{{ tool.label }}</span><span
                class="rounded-full bg-sand-warm px-3 py-1 text-xs font-semibold text-muted">Bientôt disponible</span></div>
            <h2 class="mt-5 text-2xl font-bold leading-8 text-ink">{{ tool.title }}</h2>
            <p class="mt-4 flex-1 text-sm leading-6 text-muted">{{ tool.description }}</p>
            <p class="mt-7 text-sm font-semibold text-muted-light">Publication à venir</p>
          </article>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>
