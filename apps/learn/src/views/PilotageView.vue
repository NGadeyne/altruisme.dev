<script setup lang="ts">
import { computed } from 'vue'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useActionTracking } from '@/composables/useActionTracking'
import { useOpportunities } from '@/composables/useOpportunities'

const { opportunities, activeOpportunities, conversationCount, interviewCount, wonCount } =
  useOpportunities()

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
      <p class="text-sm font-semibold text-petrol-dark">Pilotage</p>

      <h1 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Pilote ta recherche de mission.
      </h1>

      <p class="mt-3 max-w-2xl text-base leading-7 text-muted">
        Suis tes opportunités, ton activité et tes résultats au même endroit pour savoir où tu en es
        et ajuster tes efforts sans te disperser.
      </p>
    </header>

    <!-- Situation actuelle -->
    <section class="mt-10">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-petrol-dark">
            Situation actuelle
          </p>
          <h2 class="mt-2 text-xl font-semibold tracking-tight text-ink">
            Où en est ta recherche ?
          </h2>
        </div>

        <RouterLink
          :to="{ name: 'opportunities' }"
          class="hidden text-sm font-semibold text-petrol-dark transition hover:text-ink sm:inline"
        >
          Voir le pipeline →
        </RouterLink>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-ink">
            {{ activeOpportunities.length }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Opportunités actives</p>
        </div>

        <div class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-ink">
            {{ conversationCount }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Échanges en cours</p>
        </div>

        <div class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-ink">
            {{ interviewCount }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Entretiens / RDV</p>
        </div>

        <div class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
          <p class="text-3xl font-bold tracking-tight text-ink">
            {{ wonCount }}
          </p>
          <p class="mt-1 text-sm font-medium text-muted">Missions gagnées</p>
        </div>
      </div>
    </section>

    <!-- Activité 7 jours -->
    <section class="mt-10 rounded-2xl border border-petrol/20 bg-white p-6 shadow-sm sm:p-7">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-petrol-dark">Ton activité</p>
          <h2 class="mt-2 text-xl font-semibold tracking-tight text-ink">7 derniers jours</h2>
          <p class="mt-1 text-sm leading-6 text-muted">
            Regarde ton rythme global plutôt qu’une seule journée isolée.
          </p>
        </div>

        <div class="rounded-xl bg-sand-light px-4 py-3 sm:text-right">
          <p class="text-2xl font-bold tracking-tight text-ink">{{ totalActions }}</p>
          <p class="text-xs font-medium text-muted">actions réalisées</p>
        </div>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="action in activityTotals"
          :key="action.key"
          class="rounded-xl border border-petrol/20 bg-sand-light p-4"
        >
          <p class="text-2xl font-bold tracking-tight text-ink">{{ action.total }}</p>
          <p class="mt-1 text-sm text-muted">{{ action.label }}</p>
        </div>
      </div>

      <div
        class="mt-5 flex flex-col gap-3 border-t border-mist pt-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-muted">
          <strong class="font-semibold text-ink">{{ activeDays }}/7 jours actifs</strong>
          sur la période.
        </p>

        <RouterLink
          :to="{ name: 'actions' }"
          class="text-sm font-semibold text-petrol-dark transition hover:text-ink"
        >
          Voir le suivi des actions →
        </RouterLink>
      </div>
    </section>

    <!-- Résultats -->
    <section class="mt-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-petrol-dark">Résultats</p>
        <h2 class="mt-2 text-xl font-semibold tracking-tight text-ink">
          Comprends ce que tes actions produisent.
        </h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-muted">
          Ces indicateurs sont calculés automatiquement à partir de ton pipeline. Ils servent
          surtout à repérer où tes opportunités avancent — ou se bloquent.
        </p>
      </div>

      <div class="mt-5 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
        <div class="rounded-2xl border border-petrol/20 bg-white p-6 shadow-sm">
          <p class="text-sm font-semibold text-ink">Ton funnel</p>

          <div class="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div class="rounded-xl bg-sand-light p-4">
              <p class="text-2xl font-bold text-ink">{{ contactedOrFurtherCount }}</p>
              <p class="mt-1 text-sm text-muted">Contacts engagés</p>
            </div>

            <div class="rounded-xl bg-sand-light p-4">
              <p class="text-2xl font-bold text-ink">{{ engagedCount }}</p>
              <p class="mt-1 text-sm text-muted">Échanges qualifiés</p>
            </div>

            <div class="rounded-xl bg-sand-light p-4">
              <p class="text-2xl font-bold text-ink">{{ interviewCount }}</p>
              <p class="mt-1 text-sm text-muted">Entretiens / RDV</p>
            </div>

            <div class="rounded-xl bg-sand-light p-4">
              <p class="text-2xl font-bold text-ink">{{ wonCount }}</p>
              <p class="mt-1 text-sm text-muted">Missions gagnées</p>
            </div>
          </div>

          <div class="mt-6 grid gap-4 border-t border-mist pt-6 sm:grid-cols-3">
            <div>
              <p class="text-xl font-bold text-ink">
                {{ formatRate(engagedCount, contactedOrFurtherCount) }}
              </p>
              <p class="mt-1 text-xs leading-5 text-muted">Contacts → échanges</p>
            </div>

            <div>
              <p class="text-xl font-bold text-ink">
                {{ formatRate(interviewCount, engagedCount) }}
              </p>
              <p class="mt-1 text-xs leading-5 text-muted">Échanges → entretiens</p>
            </div>

            <div>
              <p class="text-xl font-bold text-ink">
                {{ formatRate(wonCount, closedCount) }}
              </p>
              <p class="mt-1 text-xs leading-5 text-muted">Opportunités closes gagnées</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-mist-deep bg-mist/70 p-6">
          <p class="text-sm font-semibold text-ink">À retenir</p>

          <p class="mt-3 text-3xl font-bold tracking-tight text-ink">{{ activeDays }}/7</p>
          <p class="mt-1 text-sm font-medium text-ink-soft">jours actifs cette semaine</p>

          <p class="mt-5 text-sm leading-6 text-muted">
            L’objectif n’est pas d’accumuler les actions. Cherche surtout à maintenir un rythme
            régulier et à faire progresser tes opportunités vers des échanges puis des entretiens.
          </p>
        </div>
      </div>
    </section>

    <!-- Outils -->
    <section class="mt-10 border-t border-petrol/20 pt-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-muted">Tes outils</p>
        <h2 class="mt-2 text-xl font-semibold tracking-tight text-ink">
          Passe au détail quand tu en as besoin.
        </h2>
      </div>

      <div class="mt-5 grid gap-5 lg:grid-cols-2">
        <RouterLink
          v-for="tool in tools"
          :key="tool.title"
          :to="{ name: tool.routeName }"
          class="group flex min-h-48 flex-col rounded-2xl border border-petrol/20 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-petrol/25 hover:shadow-md"
        >
          <p class="text-xs font-semibold uppercase tracking-wide text-petrol-dark">
            {{ tool.eyebrow }}
          </p>

          <h3 class="mt-3 text-xl font-semibold tracking-tight text-ink">
            {{ tool.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-muted">
            {{ tool.description }}
          </p>

          <div class="mt-auto pt-8">
            <span class="text-sm font-semibold text-petrol-dark transition group-hover:text-ink">
              {{ tool.actionLabel }}
            </span>
          </div>
        </RouterLink>
      </div>
    </section>
  </BaseContainer>
</template>
