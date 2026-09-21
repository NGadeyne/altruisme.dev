<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'

defineProps<{ product: 'Builder' | 'Cloud' | 'Learn'; actionHref: string; actionLabel: string }>()

const products = [
  { label: 'Builder', href: 'https://builder.altruisme.dev' },
  { label: 'Learn', href: 'https://learn.altruisme.dev' },
  { label: 'Cloud', href: 'https://cloud.altruisme.dev' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-petrol/10 bg-sand-light/90 backdrop-blur-xl">
    <BaseContainer class="flex h-16 items-center justify-between">
      <a href="https://altruisme.dev" class="group flex shrink-0 items-center gap-3" aria-label="Retour à Altruisme.dev">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl border border-petrol/20 bg-petrol/8 text-sm font-bold tracking-tight text-petrol transition group-hover:bg-petrol/12">A.</span>
        <span class="leading-tight"><span class="block text-sm font-bold tracking-tight text-ink">Altruisme.DEV</span><span class="mt-0.5 hidden text-xs text-muted-light sm:block">{{ product }}</span></span>
      </a>
      <nav class="hidden items-center gap-1 rounded-2xl border border-petrol/10 bg-white/50 p-1 sm:flex" aria-label="Produits Altruisme">
        <a v-for="item in products" :key="item.label" :href="item.href" :class="['rounded-xl px-3 py-2 text-sm font-medium transition', item.label === product ? 'bg-petrol/10 text-petrol' : 'text-ink hover:bg-petrol/6']">{{ item.label }}</a>
      </nav>
      <a :href="actionHref" class="rounded-xl bg-petrol px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-petrol/20 transition hover:bg-petrol-hover">{{ actionLabel }}</a>
    </BaseContainer>
  </header>
</template>
