<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useActionTracking } from '@/composables/useActionTracking'
import type { ActionDefinition, ActionType } from '@/types/actionTracking'

const {
  today,
  todayLog,
  incrementAction,
  decrementAction,
  setNote,
  getLog,
} = useActionTracking()

const actionDefinitions: ActionDefinition[] = [
  {
    key: 'prospecting',
    label: 'Prospections',
    shortLabel: 'Prospection',
    description: 'Nouveaux prospects contactés directement.',
  },
  {
    key: 'followUps',
    label: 'Relances',
    shortLabel: 'Relance',
    description: 'Prospects ou opportunités relancés.',
  },
  {
    key: 'applications',
    label: 'Candidatures',
    shortLabel: 'Candidature',
    description: 'Missions auxquelles tu as candidaté.',
  },
  {
    key: 'content',
    label: 'Contenus publiés',
    shortLabel: 'Contenu',
    description: 'Posts ou contenus publiés pour gagner en visibilité.',
  },
  {
    key: 'conversations',
    label: 'Échanges / RDV',
    shortLabel: 'Échange',
    description: 'Échanges qualifiés, appels ou rendez-vous réalisés.',
  },
]

const note = ref(todayLog.value.note ?? '')

watch(
  () => todayLog.value.note,
  (value) => {
    note.value = value ?? ''
  },
)

const lastSevenDays = computed(() => {
  const days = []

  for (let index = 6; index >= 0; index -= 1) {
    const date = new Date()
    date.setHours(12, 0, 0, 0)
    date.setDate(date.getDate() - index)

    const key = formatDateKey(date)
    const log = getLog(key)

    days.push({
      key,
      label: new Intl.DateTimeFormat('fr-FR', { weekday: 'short' }).format(date),
      day: new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short' }).format(date),
      log,
      total: getLogTotal(log),
      isToday: key === today.value,
    })
  }

  return days
})

const weekTotals = computed(() => {
  const totals: Record<ActionType, number> = {
    prospecting: 0,
    followUps: 0,
    applications: 0,
    content: 0,
    conversations: 0,
  }

  for (const day of lastSevenDays.value) {
    for (const action of actionDefinitions) {
      totals[action.key] += day.log[action.key]
    }
  }

  return totals
})

const weekTotal = computed(() =>
  Object.values(weekTotals.value).reduce((sum, value) => sum + value, 0),
)

const activeDays = computed(() =>
  lastSevenDays.value.filter((day) => day.total > 0).length,
)

const todayTotal = computed(() => getLogTotal(todayLog.value))

function getLogTotal(log: {
  prospecting: number
  followUps: number
  applications: number
  content: number
  conversations: number
}) {
  return (
    log.prospecting +
    log.followUps +
    log.applications +
    log.content +
    log.conversations
  )
}

function formatDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function formatToday() {
  const [year, month, day] = today.value.split('-').map(Number)

  if (!year || !month || !day) {
    return today.value
  }

  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date(year, month - 1, day))
}

function saveCurrentNote() {
  setNote(note.value)
}
</script>

<template>
  <BaseContainer>
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <header class="max-w-3xl">
        <RouterLink
          :to="{ name: 'pilotage' }"
          class="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
        >
          ← Pilotage
        </RouterLink>

        <p class="mt-7 text-sm font-semibold text-fuchsia-600">Au quotidien</p>

        <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Suivi des actions
        </h1>

        <p class="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          Suis les actions que tu réalises vraiment et garde un rythme régulier, sans chercher à
          remplir des tableaux pour remplir des tableaux.
        </p>
      </header>
    </div>

    <!-- Aujourd'hui -->
    <section class="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div class="flex flex-col gap-3 border-b border-zinc-200 p-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-fuchsia-600">Aujourd’hui</p>
          <h2 class="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
            {{ formatToday() }}
          </h2>
          <p class="mt-1 text-sm text-zinc-500">
            Ajoute simplement les actions au fur et à mesure de ta journée.
          </p>
        </div>

        <div class="text-left sm:text-right">
          <p class="text-3xl font-bold tracking-tight text-zinc-950">{{ todayTotal }}</p>
          <p class="text-xs font-medium text-zinc-500">
            action{{ todayTotal > 1 ? 's' : '' }} aujourd’hui
          </p>
        </div>
      </div>

      <div class="grid divide-y divide-zinc-100 md:grid-cols-2 md:divide-y-0 xl:grid-cols-5">
        <article
          v-for="(action, index) in actionDefinitions"
          :key="action.key"
          :class="[
            'p-5',
            index > 0 ? 'xl:border-l xl:border-zinc-100' : '',
          ]"
        >
          <p class="text-sm font-semibold text-zinc-950">{{ action.label }}</p>
          <p class="mt-1 min-h-10 text-xs leading-5 text-zinc-500">{{ action.description }}</p>

          <div class="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-lg font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-30"
              :disabled="todayLog[action.key] === 0"
              :aria-label="`Retirer une ${action.shortLabel.toLowerCase()}`"
              @click="decrementAction(action.key)"
            >
              −
            </button>

            <span class="min-w-10 text-center text-3xl font-bold tracking-tight text-zinc-950">
              {{ todayLog[action.key] }}
            </span>

            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-fuchsia-600 text-lg font-semibold text-white transition hover:bg-fuchsia-700"
              :aria-label="`Ajouter une ${action.shortLabel.toLowerCase()}`"
              @click="incrementAction(action.key)"
            >
              +
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- Semaine -->
    <section class="mt-8 grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
      <article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wide text-fuchsia-600">7 derniers jours</p>
            <h2 class="mt-1 text-xl font-semibold tracking-tight text-zinc-950">Ton rythme</h2>
          </div>

          <p class="text-sm text-zinc-500">
            <span class="font-semibold text-zinc-900">{{ activeDays }}/7</span> jours actifs
          </p>
        </div>

        <div class="mt-6 grid grid-cols-7 gap-2">
          <div
            v-for="day in lastSevenDays"
            :key="day.key"
            :class="[
              'rounded-xl border px-2 py-4 text-center',
              day.isToday
                ? 'border-fuchsia-200 bg-fuchsia-50'
                : 'border-zinc-200 bg-zinc-50',
            ]"
          >
            <p class="text-xs font-semibold uppercase text-zinc-500">{{ day.label }}</p>
            <p class="mt-1 text-xs text-zinc-400">{{ day.day }}</p>
            <p class="mt-3 text-2xl font-bold tracking-tight text-zinc-950">{{ day.total }}</p>
          </div>
        </div>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full divide-y divide-zinc-200">
            <thead>
              <tr>
                <th class="py-2 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  Action
                </th>
                <th class="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  7 jours
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-100">
              <tr v-for="action in actionDefinitions" :key="action.key">
                <td class="py-3 pr-4 text-sm font-medium text-zinc-700">{{ action.label }}</td>
                <td class="px-3 py-3 text-right text-sm font-semibold text-zinc-950">
                  {{ weekTotals[action.key] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <div class="space-y-6">
        <article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-medium text-zinc-500">Actions sur 7 jours</p>
          <p class="mt-2 text-4xl font-bold tracking-tight text-zinc-950">{{ weekTotal }}</p>
          <p class="mt-2 text-sm leading-6 text-zinc-500">
            L’objectif n’est pas d’en faire toujours plus, mais de voir si tu avances avec régularité.
          </p>
        </article>

        <article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <label for="daily-note" class="text-sm font-semibold text-zinc-950">
            Note du jour
          </label>
          <p class="mt-1 text-xs leading-5 text-zinc-500">
            Optionnel. Garde une information utile sur ta journée ou ce que tu veux ajuster demain.
          </p>

          <textarea
            id="daily-note"
            v-model="note"
            rows="4"
            placeholder="Ex. : bonnes réponses sur les ESN ciblées, continuer demain."
            class="mt-4 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100"
            @blur="saveCurrentNote"
          />

          <p class="mt-2 text-xs text-zinc-400">Enregistrée automatiquement quand tu quittes le champ.</p>
        </article>
      </div>
    </section>
  </BaseContainer>
</template>
