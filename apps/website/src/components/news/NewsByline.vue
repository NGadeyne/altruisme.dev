<script setup lang="ts">
defineProps<{
  publishedAt: string
  author: string
}>()

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(value))
</script>

<template>
  <p class="mt-5 text-sm text-muted">
    Publié le <time :datetime="publishedAt">{{ formatDate(publishedAt) }}</time> · Par {{ author }}
  </p>
</template>
