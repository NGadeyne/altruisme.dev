<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import ResourceCard from '@/components/courses/ResourceCard.vue'
import { resources } from '@/data/resources'
</script>

<template>
  <BaseContainer>
    <header class="max-w-3xl">
      <p class="text-sm font-semibold text-petrol-dark">Ressources</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Tes ressources</h1>
      <p class="mt-3 max-w-2xl text-base leading-7 text-muted">
        Des ressources pratiques à utiliser quand tu en as besoin pendant l’accompagnement.
      </p>
    </header>

    <section
      class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      aria-label="Toutes les ressources"
    >
      <ResourceCard
        v-for="resource in resources"
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :slug="resource.slug"
      />
    </section>
  </BaseContainer>
</template>
