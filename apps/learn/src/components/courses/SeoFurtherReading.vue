<script setup lang="ts">
import { computed } from 'vue'

import { seoExternalResources } from '@/data/seoExternalResources'

const props = defineProps<{ moduleNumber: number }>()
const resources = computed(() => seoExternalResources[props.moduleNumber] ?? [])
</script>

<template>
  <section
    :aria-labelledby="`further-reading-${moduleNumber}`"
    class="mt-12 rounded-2xl border border-petrol/15 bg-white p-6 sm:p-8"
  >
    <h2 :id="`further-reading-${moduleNumber}`" class="text-xl font-semibold text-ink sm:text-2xl">
      Pour aller plus loin
    </h2>
    <ul class="mt-5 space-y-5">
      <li v-for="resource in resources" :key="resource.url">
        <a
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        >
          {{ resource.title }} <span aria-hidden="true">↗</span>
        </a>
        <p class="mt-1 text-sm leading-6 text-muted">{{ resource.description }}</p>
      </li>
    </ul>
  </section>
</template>
