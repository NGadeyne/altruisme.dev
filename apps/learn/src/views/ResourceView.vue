<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getResourceBySlug } from '@/data/resources'

const route = useRoute()
const router = useRouter()

const resource = computed(() => getResourceBySlug(String(route.params.resourceSlug)))

function goBack() {
  router.push('/resources')
}
</script>

<template>
  <BaseContainer>
    <!-- Ressource introuvable -->
    <div v-if="!resource" class="mx-auto max-w-3xl py-12">
      <p class="text-sm font-semibold text-petrol-dark">Ressource</p>

      <h1 class="mt-2 text-3xl font-bold tracking-tight text-ink">Ressource introuvable</h1>

      <p class="mt-4 text-base leading-7 text-muted">
        Cette ressource n'existe pas ou n'est plus disponible.
      </p>

      <button
        type="button"
        class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-petrol-dark transition hover:text-ink"
        @click="goBack"
      >
        <span aria-hidden="true">←</span>
        Retour aux ressources
      </button>
    </div>

    <!-- Ressource -->
    <div v-else class="mx-auto max-w-4xl py-4 sm:py-8">
      <!-- Retour -->
      <button
        type="button"
        class="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-petrol-dark"
        @click="goBack"
      >
        <span aria-hidden="true">←</span>
        Retour aux ressources
      </button>

      <!-- Header -->
      <header class="mt-8 max-w-3xl">
        <div class="flex items-center gap-3">
          <span
            class="inline-flex items-center rounded-full bg-mist px-3 py-1 text-xs font-semibold text-petrol-dark"
          >
            Bonus
          </span>

          <span class="text-sm text-muted-light"> Ressource </span>
        </div>

        <h1 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {{ resource.title }}
        </h1>

        <p v-if="resource.description" class="mt-4 text-base leading-7 text-muted">
          {{ resource.description }}
        </p>
      </header>

      <!-- Séparateur -->
      <div class="my-10 border-t border-petrol/20" />

      <!-- Contenu -->
      <article class="resource-content" v-html="resource.content" />

      <!-- Footer -->
      <div class="mt-16 border-t border-petrol/20 pt-8">
        <button
          type="button"
          class="inline-flex items-center gap-2 text-sm font-semibold text-petrol-dark transition hover:text-ink"
          @click="goBack"
        >
          <span aria-hidden="true">←</span>
          Retour aux ressources
        </button>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
.resource-content {
  color: #46504d;
  font-size: 1rem;
  line-height: 1.75;
}

.resource-content :deep(h2) {
  margin-top: 3.5rem;
  margin-bottom: 1.25rem;
  color: #222826;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.resource-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #222826;
  font-size: 1.125rem;
  font-weight: 650;
  line-height: 1.5;
}

.resource-content :deep(p) {
  margin-top: 1rem;
}

.resource-content :deep(p:first-child) {
  margin-top: 0;
}

.resource-content :deep(ul),
.resource-content :deep(ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.resource-content :deep(ul) {
  list-style-type: disc;
}

.resource-content :deep(ol) {
  list-style-type: decimal;
}

.resource-content :deep(li) {
  margin-top: 0.4rem;
  padding-left: 0.25rem;
}

.resource-content :deep(strong) {
  color: #222826;
  font-weight: 650;
}

.resource-content :deep(blockquote) {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border-left: 3px solid #4f7774;
  border-radius: 0 0.75rem 0.75rem 0;
  background: #f7f2e9;
  padding: 1rem 1.25rem;
  color: #46504d;
}

.resource-content :deep(blockquote p) {
  margin: 0;
}

.resource-content :deep(a) {
  color: #31413f;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #8ca69b;
  text-underline-offset: 3px;
}

.resource-content :deep(a:hover) {
  color: #222826;
}

.resource-content :deep(.lesson-callout) {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #dce8e4;
  border-radius: 1rem;
  background: #f7f2e9;
  padding: 1.25rem 1.5rem;
}

.resource-content :deep(.lesson-callout p) {
  margin-top: 0.5rem;
}

.resource-content :deep(.lesson-callout--strong) {
  border-color: #b8cabd;
  background: #edf3f0;
}

.resource-content :deep(.lesson-callout--strong strong) {
  color: #31413f;
}
</style>
