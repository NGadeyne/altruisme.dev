<script setup lang="ts">
defineProps<{ label: string; score: number }>()
</script>

<template>
  <div class="grid gap-2.5">
    <div class="flex items-center justify-between gap-5 text-sm">
      <span class="font-semibold text-ink-soft">{{ label }}</span>
      <strong class="font-bold text-petrol-dark">{{ score }}/100</strong>
    </div>
    <div class="h-2.5 overflow-hidden rounded-full bg-mist-deep/70">
      <div
        class="h-full rounded-full bg-gradient-to-r from-petrol-light to-petrol transition-[width] duration-500"
        :style="{ width: `${score}%` }"
      />
    </div>
  </div>
</template>
