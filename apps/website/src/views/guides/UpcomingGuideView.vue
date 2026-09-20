<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { GuideMetadata } from '@/types/guide'
defineProps<{ guide: GuideMetadata }>()
</script>
<template>
  <div class="bg-sand py-20 sm:py-24">
    <BaseContainer>
      <div class="mx-auto max-w-4xl">
        <p class="text-sm font-semibold uppercase tracking-widest text-petrol">
          Guide de référence · {{ guide.label }}
        </p>
        <h1 class="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
          {{ guide.title }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-muted">{{ guide.description }}</p>
        <p class="mt-10 font-semibold text-petrol">Ce guide est en préparation.</p>
        <BaseButton to="/guides" class="mt-6">Explorer les guides disponibles</BaseButton>
      </div>
    </BaseContainer>
  </div>
</template>
