<script setup lang="ts">
import ProspectStatusBadge from '@/components/prospects/ProspectStatusBadge.vue'
import { formatDateTime } from '@/utils/date'
import type { Prospect } from '@/types/prospect'

defineProps<{
  prospect: Prospect
}>()
</script>

<template>
  <article class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md">
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <h2 class="truncate font-semibold text-zinc-950">
          {{ prospect.firstName }} {{ prospect.lastName }}
        </h2>

        <p v-if="prospect.company" class="mt-1 truncate text-sm text-zinc-500">
          {{ prospect.company }}
        </p>
      </div>

      <ProspectStatusBadge :status="prospect.status" />
    </div>

    <div v-if="prospect.jobTarget || prospect.meetingAt" class="mt-4 space-y-1.5 text-sm">
      <p v-if="prospect.jobTarget" class="text-zinc-700">
        <span class="font-medium">{{ prospect.jobTarget }}</span>
      </p>
      <p v-if="prospect.meetingAt" class="capitalize text-zinc-500">
        {{ formatDateTime(prospect.meetingAt) }}
      </p>
    </div>

    <p v-if="prospect.notes" class="mt-4 line-clamp-2 text-sm leading-6 text-zinc-600">
      {{ prospect.notes }}
    </p>

    <RouterLink
      :to="`/prospects/${prospect.id}`"
      class="mt-5 inline-flex text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-500"
    >
      Voir la fiche →
    </RouterLink>
  </article>
</template>
