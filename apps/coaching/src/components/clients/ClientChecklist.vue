<script setup lang="ts">
import type { ClientChecklist } from '@/types/client'

defineProps<{
  checklist: ClientChecklist
}>()

const labels: Record<keyof ClientChecklist, string> = {
  positioningOffer: 'Positionnement & offre',
  maltProfile: 'Profil Malt',
  linkedinProfile: 'Profil LinkedIn',
  skillsPortfolio: 'Dossier de compétences',
  prospecting: 'Prospection',
  content: 'Création de contenu',
  interview: 'Entretiens',
  negotiation: 'Négociation',
}
</script>

<template>
  <ul class="space-y-3">
    <li
      v-for="(completed, key) in checklist"
      :key="key"
      class="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3"
    >
      <span class="text-sm font-medium text-zinc-700">
        {{ labels[key] }}
      </span>

      <span
        class="flex size-6 items-center justify-center rounded-full text-xs font-bold"
        :class="completed ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-200 text-zinc-500'"
      >
        {{ completed ? '✓' : '–' }}
      </span>
    </li>
  </ul>
</template>
