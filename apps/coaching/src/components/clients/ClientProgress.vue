<script setup lang="ts">
import { computed } from 'vue'

import type { ClientChecklist } from '@/types/client'

const props = defineProps<{
  checklist: ClientChecklist
}>()

const progress = computed(() => {
  const values = Object.values(props.checklist)
  const completed = values.filter(Boolean).length

  return Math.round((completed / values.length) * 100)
})
</script>

<template>
  <div>
    <div class="mb-2 flex justify-between text-sm text-zinc-500">
      <span>Progression</span>

      <span class="font-medium text-zinc-700"> {{ progress }} % </span>
    </div>

    <div class="h-2 overflow-hidden rounded-full bg-zinc-200">
      <div
        class="h-full rounded-full bg-fuchsia-600 transition-[width]"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </div>
</template>
