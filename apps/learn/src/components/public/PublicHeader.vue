<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import PublicNavigation from '@/components/public/PublicNavigation.vue'
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-petrol/10 bg-sand-light/90 backdrop-blur-xl">
    <BaseContainer size="large" class="flex h-16 items-center justify-between gap-4">
      <RouterLink
        to="/"
        class="group flex shrink-0 items-center gap-3"
        aria-label="Altruisme Learn, accueil"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl border border-petrol/20 bg-petrol/8 transition group-hover:border-petrol/30 group-hover:bg-petrol/12"
        >
          <span class="text-sm font-bold tracking-tight text-petrol">A.</span>
        </span>
        <span class="leading-tight">
          <span
            class="block text-sm font-bold tracking-tight text-ink transition group-hover:text-petrol"
            >Altruisme Learn</span
          >
          <span class="mt-0.5 hidden text-xs text-muted-light sm:block">Formation SEO</span>
        </span>
      </RouterLink>
      <PublicNavigation />
    </BaseContainer>
  </header>
</template>
