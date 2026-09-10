<script setup lang="ts">
import ClientProgress from '@/components/clients/ClientProgress.vue'
import type { Client } from '@/types/client'

defineProps<{
  client: Client
}>()
</script>

<template>
  <article class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
    <div>
      <h2 class="font-semibold text-zinc-950">{{ client.firstName }} {{ client.lastName }}</h2>

      <p v-if="client.company" class="mt-1 text-sm text-zinc-500">
        {{ client.company }}
      </p>
    </div>

    <div class="mt-6">
      <ClientProgress :checklist="client.checklist" />
    </div>

    <RouterLink
      :to="`/clients/${client.id}`"
      class="mt-5 inline-flex text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-500"
    >
      Voir le suivi →
    </RouterLink>
  </article>
</template>
