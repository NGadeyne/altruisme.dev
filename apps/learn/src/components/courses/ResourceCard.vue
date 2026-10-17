<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title: string
  description?: string
  slug: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="{
      name: 'resource',
      params: {
        resourceSlug: slug,
      },
    }"
    class="group flex h-full flex-col rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-petrol/25 hover:shadow-md"
  >
    <div class="flex items-start justify-between gap-4">
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-petrol-dark"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-5 w-5"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 3.75h6.879c.398 0 .78.158 1.061.439l3.371 3.371c.281.281.439.663.439 1.061V19.5A1.5 1.5 0 0 1 17.75 21h-10.5a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 3.75V7.5a1.5 1.5 0 0 0 1.5 1.5h3.75"
          />
        </svg>
      </div>

      <span
        class="text-petrol/35 transition group-hover:translate-x-1 group-hover:text-petrol-dark"
        aria-hidden="true"
      >
        →
      </span>
    </div>

    <div class="mt-5">
      <p class="text-xs font-semibold uppercase tracking-wide text-petrol-dark">Ressource</p>

      <h3 class="mt-2 text-base font-semibold leading-6 text-ink">
        {{ title }}
      </h3>

      <p v-if="description" class="mt-2 text-sm leading-6 text-muted">
        {{ description }}
      </p>
    </div>

    <div class="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-petrol-dark">
      Consulter la ressource

      <span class="transition group-hover:translate-x-1" aria-hidden="true"> → </span>
    </div>
  </RouterLink>
</template>
