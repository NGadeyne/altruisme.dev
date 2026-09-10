<!-- apps/learn/src/views/NotFoundView.vue -->
<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <BaseContainer>
    <div class="py-20 text-center">
      <h1 class="text-4xl font-bold text-zinc-950">Page introuvable</h1>

      <RouterLink to="/" class="mt-6 inline-flex font-semibold text-fuchsia-600">
        Retour au tableau de bord
      </RouterLink>
    </div>
  </BaseContainer>
</template>
