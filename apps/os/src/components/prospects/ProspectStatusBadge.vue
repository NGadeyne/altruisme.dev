<script setup lang="ts">
import { computed } from 'vue'
import type { ProspectStatus } from '@/types/prospect'

const props = defineProps<{
  status: ProspectStatus
}>()

const statusConfig = computed(() => {
  const configs: Record<
    ProspectStatus,
    {
      label: string
      classes: string
    }
  > = {
    meeting: {
      label: 'RDV prévu',
      classes: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    },

    done: {
      label: 'RDV réalisé',
      classes: 'bg-violet-50 text-violet-700 ring-violet-600/20',
    },

    won: {
      label: 'Gagné',
      classes: 'bg-green-50 text-green-700 ring-green-600/20',
    },

    lost: {
      label: 'Perdu',
      classes: 'bg-red-50 text-red-700 ring-red-600/20',
    },

    canceled: {
      label: 'Annulé',
      classes: 'bg-zinc-100 text-zinc-600 ring-zinc-500/20',
    },
  }

  return configs[props.status]
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset"
    :class="statusConfig.classes"
  >
    {{ statusConfig.label }}
  </span>
</template>
