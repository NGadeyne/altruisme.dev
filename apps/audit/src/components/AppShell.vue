<template>
  <div class="min-h-screen bg-sand text-ink">
    <header class="sticky top-0 z-50 w-full border-b border-petrol/10 bg-sand-light/90 backdrop-blur-xl">
      <BaseContainer size="large" class="flex h-16 items-center justify-between">
        <RouterLink to="/" class="group flex shrink-0 items-center gap-3" aria-label="Retour à l’accueil du diagnostic">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl border border-petrol/20 bg-petrol/8 transition duration-200 group-hover:border-petrol/30 group-hover:bg-petrol/12">
            <span class="text-sm font-bold tracking-tight text-petrol">A</span>
          </div>

          <div class="leading-tight">
            <p class="text-sm font-bold tracking-tight text-ink transition duration-200 group-hover:text-petrol">
              Altruisme.DEV
            </p>
            <p class="mt-0.5 hidden text-xs text-muted-light sm:block">Diagnostic freelance IT & Tech</p>
          </div>
        </RouterLink>

        <a
          href="https://altruisme.dev"
          class="rounded-xl px-3 py-2 text-sm font-semibold text-muted transition hover:bg-petrol/8 hover:text-ink"
        >
          Retour au site
        </a>
      </BaseContainer>
    </header>

    <main><slot /></main>

    <footer class="border-t border-petrol/10 bg-sand-light py-8">
      <BaseContainer size="large" class="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Altruisme.DEV · Pour les freelances IT & Tech</p>
        <a href="https://altruisme.dev" class="font-medium transition hover:text-petrol">altruisme.dev</a>
      </BaseContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>
