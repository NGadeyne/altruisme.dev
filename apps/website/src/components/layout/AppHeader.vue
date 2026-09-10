<script setup lang="ts">
import AppNavigation from './AppNavigation.vue'
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-petrol/10 bg-sand-light/90 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <!-- Brand -->
      <RouterLink
        to="/"
        class="group flex shrink-0 items-center gap-3"
        aria-label="Retour à l’accueil"
      >
        <!-- Logo -->
        <div
          class="flex h-9 w-9 items-center justify-center rounded-xl border border-petrol/20 bg-petrol/8 transition duration-200 group-hover:border-petrol/30 group-hover:bg-petrol/12"
        >
          <span
            class="text-sm font-bold tracking-tight text-petrol"
          >
            A
          </span>
        </div>

        <!-- Brand text -->
        <div class="leading-tight">
          <p
            class="text-sm font-bold tracking-tight text-ink transition duration-200 group-hover:text-petrol"
          >
            Altruisme.DEV
          </p>

          <p
            class="mt-0.5 hidden text-xs text-muted-light sm:block"
          >
            Pour les freelances IT & Tech
          </p>
        </div>
      </RouterLink>

      <!-- Navigation -->
      <AppNavigation />
    </div>
  </header>
</template>
