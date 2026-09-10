<script setup lang="ts">
import { computed } from 'vue'

import type { OpportunityStatus } from '@/types/opportunity'

const props = defineProps<{
  status: OpportunityStatus
}>()

const statuses: Record<
  OpportunityStatus,
  { label: string; classes: string }
> = {
  'to-contact': {
    label: 'À contacter',
    classes: 'bg-zinc-100 text-zinc-700',
  },
  contacted: {
    label: 'Contacté',
    classes: 'bg-sky-50 text-sky-700',
  },
  conversation: {
    label: 'Échange en cours',
    classes: 'bg-violet-50 text-violet-700',
  },
  interview: {
    label: 'Entretien / RDV',
    classes: 'bg-amber-50 text-amber-700',
  },
  won: {
    label: 'Gagné',
    classes: 'bg-emerald-50 text-emerald-700',
  },
  lost: {
    label: 'Perdu',
    classes: 'bg-rose-50 text-rose-700',
  },
}

const currentStatus = computed(() => statuses[props.status])
</script>

<template>
  <span
    :class="[
      'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold',
      currentStatus.classes,
    ]"
  >
    {{ currentStatus.label }}
  </span>
</template>
