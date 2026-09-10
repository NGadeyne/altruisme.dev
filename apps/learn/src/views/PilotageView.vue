<script setup lang="ts">
import { computed } from 'vue'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useActionTracking } from '@/composables/useActionTracking'
import { useOpportunities } from '@/composables/useOpportunities'

const {
  opportunities,
  activeOpportunities,
  conversationCount,
  interviewCount,
  wonCount,
} = useOpportunities()

const { logs } = useActionTracking()

const actionDefinitions = [
  { key: 'prospecting', label: 'Prospections' },
  { key: 'followUps', label: 'Relances' },
  { key: 'applications', label: 'Candidatures' },
  { key: 'content', label: 'Contenus publiés' },
  { key: 'conversations', label: 'Échanges / RDV' },
] as const

function getLocalDate(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const last7Dates = computed(() => {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - index))

    return getLocalDate(date)
  })
})

const last7Logs = computed(() => {
  return last7Dates.value.map((date) => {
    return (
      logs.value.find((log) => log.date === date) ?? {
        date,
        prospecting: 0,
        followUps: 0,
        applications: 0,
        content: 0,
        conversations: 0,
        updatedAt: '',
      }
    )
  })
})

const activityTotals = computed(() => {
  return actionDefinitions.map((action) => ({
    ...action,
    total: last7Logs.value.reduce((sum, log) => sum + log[action.key], 0),
  }))
})

const totalActions = computed(() => {
  return activityTotals.value.reduce((sum, action) => sum + action.total, 0)
})

const activeDays = computed(() => {
  return last7Logs.value.filter((log) => {
    return actionDefinitions.some((action) => log[action.key] > 0)
  }).length
})

const contactedOrFurtherCount = computed(() => {
  return opportunities.value.filter((opportunity) => opportunity.status !== 'to-contact').length
})

const engagedCount = computed(() => {
  return opportunities.value.filter((opportunity) =>
    ['conversation', 'interview', 'won'].includes(opportunity.status),
  ).length
})

const closedCount = computed(() => {
  return opportunities.value.filter(
    (opportunity) => opportunity.status === 'won' || opportunity.status === 'lost',
  ).length
})

function formatRate(value: number, total: number) {
  if (total <= 0) {
    return '—'
  }

  return `${Math.round((value / total) * 100)} %`
}

const tools = [
  {
    title: 'Pipeline d’opportunités',
    description:
      'Garde une vision globale de tes opportunités, de leur statut et des prochaines actions.',
    eyebrow: 'Vision globale',
    routeName: 'opportunities',
    actionLabel: 'Ouvrir le pipeline →',
  },
  {
    title: 'Suivi des actions',
    description:
      'Suis simplement les actions réalisées au quotidien pour maintenir un rythme régulier.',
    eyebrow: 'Au quotidien',
    routeName: 'actions',
    actionLabel: 'Suivre mes actions →',
  },
]
</script>

<template>
  <BaseContainer>
    <header class="max-w-3xl">
      <p class="text-sm font-semibold text-fuchsia-600">Pilotage</p>

      <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
        Pilote ta recherche de mission.
      </h1>

      <p class="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
        Suis tes opportunités, ton activité et tes résultats au même endroit pour savoir où tu en es
        et ajuster tes efforts sans te disperser.
      </p>
    </header>

    <!-- Situation actuelle -->
    <section class="mt-10">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-fuchsia-600">
            Situation actuelle
          </p>
          <h2 class="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
            Où en est ta recherche ?
          </h2>
        </div>

        <RouterLink
          :to="{ name: 'opportunities' }"
          class="hidden text-sm font-semibold text-fuchsia-700 transition hover:text-fuchsia-800 sm:inline"
        >
          Voir le pipeline →
        </RouterLink>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-zinc-950">
            {{ activeOpportunities.length }}
          </p>
          <p class="mt-1 text-sm font-medium text-zinc-600">Opportunités actives</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-zinc-950">
            {{ conversationCount }}
          </p>
          <p class="mt-1 text-sm font-medium text-zinc-600">Échanges en cours</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-zinc-950">
            {{ interviewCount }}
          </p>
          <p class="mt-1 text-sm font-medium text-zinc-600">Entretiens / RDV</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-zinc-950">
            {{ wonCount }}
          </p>
          <p class="mt-1 text-sm font-medium text-zinc-600">Missions gagnées</p>
        </div>
      </div>
    </section>

    <!-- Activité 7 jours -->
    <section class="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-fuchsia-600">
            Ton activité
          </p>
          <h2 class="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
            7 derniers jours
          </h2>
          <p class="mt-1 text-sm leading-6 text-zinc-500">
            Regarde ton rythme global plutôt qu’une seule journée isolée.
          </p>
        </div>

        <div class="rounded-xl bg-zinc-50 px-4 py-3 sm:text-right">
          <p class="text-2xl font-bold tracking-tight text-zinc-950">{{ totalActions }}</p>
          <p class="text-xs font-medium text-zinc-500">actions réalisées</p>
        </div>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="action in activityTotals"
          :key="action.key"
          class="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
        >
          <p class="text-2xl font-bold tracking-tight text-zinc-950">{{ action.total }}</p>
          <p class="mt-1 text-sm text-zinc-600">{{ action.label }}</p>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-3 border-t border-zinc-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-zinc-600">
          <strong class="font-semibold text-zinc-950">{{ activeDays }}/7 jours actifs</strong>
          sur la période.
        </p>

        <RouterLink
          :to="{ name: 'actions' }"
          class="text-sm font-semibold text-fuchsia-700 transition hover:text-fuchsia-800"
        >
          Voir le suivi des actions →
        </RouterLink>
      </div>
    </section>

    <!-- Résultats -->
    <section class="mt-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-fuchsia-600">
          Résultats
        </p>
        <h2 class="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
          Comprends ce que tes actions produisent.
        </h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-zinc-500">
          Ces indicateurs sont calculés automatiquement à partir de ton pipeline. Ils servent surtout
          à repérer où tes opportunités avancent — ou se bloquent.
        </p>
      </div>

      <div class="mt-5 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
        <div class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-semibold text-zinc-950">Ton funnel</p>

          <div class="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div class="rounded-xl bg-zinc-50 p-4">
              <p class="text-2xl font-bold text-zinc-950">{{ contactedOrFurtherCount }}</p>
              <p class="mt-1 text-sm text-zinc-600">Contacts engagés</p>
            </div>

            <div class="rounded-xl bg-zinc-50 p-4">
              <p class="text-2xl font-bold text-zinc-950">{{ engagedCount }}</p>
              <p class="mt-1 text-sm text-zinc-600">Échanges qualifiés</p>
            </div>

            <div class="rounded-xl bg-zinc-50 p-4">
              <p class="text-2xl font-bold text-zinc-950">{{ interviewCount }}</p>
              <p class="mt-1 text-sm text-zinc-600">Entretiens / RDV</p>
            </div>

            <div class="rounded-xl bg-zinc-50 p-4">
              <p class="text-2xl font-bold text-zinc-950">{{ wonCount }}</p>
              <p class="mt-1 text-sm text-zinc-600">Missions gagnées</p>
            </div>
          </div>

          <div class="mt-6 grid gap-4 border-t border-zinc-100 pt-6 sm:grid-cols-3">
            <div>
              <p class="text-xl font-bold text-zinc-950">
                {{ formatRate(engagedCount, contactedOrFurtherCount) }}
              </p>
              <p class="mt-1 text-xs leading-5 text-zinc-500">
                Contacts → échanges
              </p>
            </div>

            <div>
              <p class="text-xl font-bold text-zinc-950">
                {{ formatRate(interviewCount, engagedCount) }}
              </p>
              <p class="mt-1 text-xs leading-5 text-zinc-500">
                Échanges → entretiens
              </p>
            </div>

            <div>
              <p class="text-xl font-bold text-zinc-950">
                {{ formatRate(wonCount, closedCount) }}
              </p>
              <p class="mt-1 text-xs leading-5 text-zinc-500">
                Opportunités closes gagnées
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-fuchsia-100 bg-fuchsia-50/50 p-6">
          <p class="text-sm font-semibold text-fuchsia-800">À retenir</p>

          <p class="mt-3 text-3xl font-bold tracking-tight text-zinc-950">
            {{ activeDays }}/7
          </p>
          <p class="mt-1 text-sm font-medium text-zinc-700">jours actifs cette semaine</p>

          <p class="mt-5 text-sm leading-6 text-zinc-600">
            L’objectif n’est pas d’accumuler les actions. Cherche surtout à maintenir un rythme
            régulier et à faire progresser tes opportunités vers des échanges puis des entretiens.
          </p>
        </div>
      </div>
    </section>

    <!-- Outils -->
    <section class="mt-10 border-t border-zinc-200 pt-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-zinc-500">Tes outils</p>
        <h2 class="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
          Passe au détail quand tu en as besoin.
        </h2>
      </div>

      <div class="mt-5 grid gap-5 lg:grid-cols-2">
        <RouterLink
          v-for="tool in tools"
          :key="tool.title"
          :to="{ name: tool.routeName }"
          class="group flex min-h-48 flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-fuchsia-200 hover:shadow-md"
        >
          <p class="text-xs font-semibold uppercase tracking-wide text-fuchsia-600">
            {{ tool.eyebrow }}
          </p>

          <h3 class="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
            {{ tool.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-zinc-600">
            {{ tool.description }}
          </p>

          <div class="mt-auto pt-8">
            <span class="text-sm font-semibold text-fuchsia-700 transition group-hover:text-fuchsia-800">
              {{ tool.actionLabel }}
            </span>
          </div>
        </RouterLink>
      </div>
    </section>
  </BaseContainer>
</template>
