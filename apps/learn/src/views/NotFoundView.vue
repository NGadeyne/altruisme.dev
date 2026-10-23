<!-- apps/learn/src/views/NotFoundView.vue -->
<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <BaseContainer>
    <div class="py-20 text-center">
      <h1 class="text-4xl font-bold text-ink">Page introuvable</h1>

      <RouterLink to="/formations" class="mt-6 inline-flex font-semibold text-petrol-dark">
        Retour au tableau de bord
      </RouterLink>
    </div>
  </BaseContainer>
</template>
