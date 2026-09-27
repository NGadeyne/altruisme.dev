<script setup lang="ts">
defineProps<{ items: Array<{ question: string; answer: string }> }>()
</script>

<template>
  <div class="divide-y divide-petrol/12 rounded-3xl border border-petrol/15 bg-white/45 px-6 sm:px-8">
    <details v-for="item in items" :key="item.question" class="group py-5"><summary class="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-ink"><span>{{ item.question }}</span><span class="text-xl font-normal text-petrol transition group-open:rotate-45">+</span></summary><p class="mt-3 max-w-3xl pr-8 text-sm leading-7 text-muted">{{ item.answer }}</p></details>
  </div>
</template>
