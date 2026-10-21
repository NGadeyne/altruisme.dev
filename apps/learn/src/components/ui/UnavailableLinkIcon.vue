<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    role="img"
    :aria-label="label"
    title="Bientôt disponible"
    class="flex size-9 shrink-0 items-center justify-center rounded-full border border-petrol/15 bg-mist text-petrol-dark"
  >
    <svg
      class="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  </span>
</template>
