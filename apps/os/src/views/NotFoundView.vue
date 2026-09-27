<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <BaseContainer>
    <div class="py-24 text-center">
      <p class="text-sm font-semibold text-fuchsia-600">404</p>

      <h1 class="mt-3 text-4xl font-bold text-zinc-950">Page introuvable</h1>

      <RouterLink to="/" class="mt-6 inline-flex font-semibold text-fuchsia-600">
        Retour au tableau de bord
      </RouterLink>
    </div>
  </BaseContainer>
</template>
