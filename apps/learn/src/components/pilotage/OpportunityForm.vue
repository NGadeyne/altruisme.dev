<script setup lang="ts">
import { reactive, watch } from 'vue'

import type {
  Opportunity,
  OpportunityFormData,
  OpportunitySource,
  OpportunityStatus,
} from '@/types/opportunity'

const props = defineProps<{
  opportunity?: Opportunity
}>()

const emit = defineEmits<{
  save: [data: OpportunityFormData]
  cancel: []
}>()

const sources: OpportunitySource[] = [
  'LinkedIn',
  'Malt',
  'LeHibou',
  'Collective',
  'ESN',
  'Réseau',
  'Inbound',
  'Autre',
]

const statuses: { value: OpportunityStatus; label: string }[] = [
  { value: 'to-contact', label: 'À contacter' },
  { value: 'contacted', label: 'Contacté' },
  { value: 'conversation', label: 'Échange en cours' },
  { value: 'interview', label: 'Entretien / RDV' },
  { value: 'won', label: 'Gagné' },
  { value: 'lost', label: 'Perdu' },
]

const form = reactive<OpportunityFormData>({
  company: '',
  role: '',
  source: 'LinkedIn',
  status: 'to-contact',
  nextAction: '',
  nextActionDate: '',
  notes: '',
})

function fillForm(opportunity?: Opportunity) {
  form.company = opportunity?.company ?? ''
  form.role = opportunity?.role ?? ''
  form.source = opportunity?.source ?? 'LinkedIn'
  form.status = opportunity?.status ?? 'to-contact'
  form.nextAction = opportunity?.nextAction ?? ''
  form.nextActionDate = opportunity?.nextActionDate ?? ''
  form.notes = opportunity?.notes ?? ''
}

watch(
  () => props.opportunity,
  (opportunity) => fillForm(opportunity),
  { immediate: true },
)

function submit() {
  if (!form.company.trim()) {
    return
  }

  emit('save', { ...form })
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="submit">
    <div>
      <label for="company" class="text-sm font-semibold text-zinc-800">
        Entreprise <span class="text-fuchsia-600">*</span>
      </label>
      <input
        id="company"
        v-model="form.company"
        type="text"
        required
        autofocus
        placeholder="Ex. Doctolib"
        class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
      />
    </div>

    <div>
      <label for="role" class="text-sm font-semibold text-zinc-800">Mission / poste</label>
      <input
        id="role"
        v-model="form.role"
        type="text"
        placeholder="Ex. Product Manager Freelance"
        class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
      />
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <label for="source" class="text-sm font-semibold text-zinc-800">Source</label>
        <select
          id="source"
          v-model="form.source"
          class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
        >
          <option v-for="source in sources" :key="source" :value="source">
            {{ source }}
          </option>
        </select>
      </div>

      <div>
        <label for="status" class="text-sm font-semibold text-zinc-800">Statut</label>
        <select
          id="status"
          v-model="form.status"
          class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
        >
          <option v-for="status in statuses" :key="status.value" :value="status.value">
            {{ status.label }}
          </option>
        </select>
      </div>
    </div>

    <div>
      <label for="next-action" class="text-sm font-semibold text-zinc-800">Prochaine action</label>
      <input
        id="next-action"
        v-model="form.nextAction"
        type="text"
        placeholder="Ex. Relancer Marie après notre échange"
        class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
      />
    </div>

    <div>
      <label for="next-action-date" class="text-sm font-semibold text-zinc-800">Date de prochaine action</label>
      <input
        id="next-action-date"
        v-model="form.nextActionDate"
        type="date"
        class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
      />
    </div>

    <div>
      <label for="notes" class="text-sm font-semibold text-zinc-800">Notes</label>
      <textarea
        id="notes"
        v-model="form.notes"
        rows="4"
        placeholder="Contexte, contact, informations utiles…"
        class="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm leading-6 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
      />
    </div>

    <div class="flex justify-end gap-3 border-t border-zinc-100 pt-5">
      <button
        type="button"
        class="rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
        @click="emit('cancel')"
      >
        Annuler
      </button>

      <button
        type="submit"
        class="rounded-xl bg-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-700"
      >
        {{ opportunity ? 'Enregistrer' : 'Ajouter l’opportunité' }}
      </button>
    </div>
  </form>
</template>
