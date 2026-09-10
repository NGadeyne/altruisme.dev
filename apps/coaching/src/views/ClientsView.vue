<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import ClientCard from '@/components/clients/ClientCard.vue'

import { useClientsStore } from '@/stores/clients'

const clientsStore = useClientsStore()
const { clients, loading } = storeToRefs(clientsStore)

onMounted(async () => {
  if (clientsStore.loaded) {
    return
  }

  try {
    await clientsStore.loadClients()
  } catch (error) {
    console.error('Erreur lors du chargement des clients :', error)
  }
})

const search = ref('')
const missionFilter = ref<'all' | 'signed' | 'unsigned'>('all')
const sortBy = ref<'recent' | 'oldest' | 'name'>('recent')

const totalClients = computed(() => {
  return clients.value.length
})

const signedClients = computed(() => {
  return clients.value.filter((client) => client.missionSigned).length
})

const signatureRate = computed(() => {
  if (totalClients.value === 0) {
    return 0
  }

  return Math.round((signedClients.value / totalClients.value) * 100)
})

const totalOpportunities = computed(() => {
  return clients.value.reduce((total, client) => total + (client.opportunitiesCount ?? 0), 0)
})

const averageOpportunities = computed(() => {
  if (totalClients.value === 0) {
    return '0'
  }

  return (totalOpportunities.value / totalClients.value).toFixed(1)
})

const totalCoachingMeetings = computed(() => {
  return clients.value.reduce((total, client) => total + (client.coachingMeetingsCount ?? 0), 0)
})

const averageCoachingMeetings = computed(() => {
  if (totalClients.value === 0) {
    return '0'
  }

  return (totalCoachingMeetings.value / totalClients.value).toFixed(1)
})

const averageDaysToMission = computed(() => {
  const durations = clients.value
    .filter((client) => client.missionSigned && client.startedAt && client.missionSignedAt)
    .map((client) => {
      const start = new Date(`${client.startedAt}T00:00:00`)
      const signed = new Date(`${client.missionSignedAt}T00:00:00`)

      return Math.round((signed.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    })
    .filter((days) => days >= 0)

  if (durations.length === 0) {
    return null
  }

  const total = durations.reduce((sum, days) => sum + days, 0)

  return Math.round(total / durations.length)
})

const filteredClients = computed(() => {
  const query = search.value.trim().toLowerCase()

  const result = clients.value.filter((client) => {
    const searchableContent = [
      client.firstName,
      client.lastName,
      client.email,
      client.company,
      client.jobTarget,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    const matchesSearch = !query || searchableContent.includes(query)

    const matchesMission =
      missionFilter.value === 'all' ||
      (missionFilter.value === 'signed' && client.missionSigned) ||
      (missionFilter.value === 'unsigned' && !client.missionSigned)

    return matchesSearch && matchesMission
  })

  return [...result].sort((a, b) => {
    if (sortBy.value === 'name') {
      return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`, 'fr')
    }

    const aDate = a.startedAt ? new Date(a.startedAt).getTime() : 0

    const bDate = b.startedAt ? new Date(b.startedAt).getTime() : 0

    if (sortBy.value === 'oldest') {
      return aDate - bDate
    }

    return bDate - aDate
  })
})

const hasActiveFilters = computed(() => {
  return search.value.trim() !== '' || missionFilter.value !== 'all'
})

function resetFilters() {
  search.value = ''
  missionFilter.value = 'all'
  sortBy.value = 'recent'
}
</script>

<template>
  <BaseContainer size="large">
    <header
      class="flex flex-col gap-5 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p class="text-sm font-semibold text-fuchsia-600">Accompagnement</p>

        <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950">Clients</h1>

        <p class="mt-2 max-w-2xl text-zinc-600">
          Suis tes clients, leur progression et les résultats obtenus pendant l'accompagnement.
        </p>
      </div>

      <BaseButton to="/clients/new"> Ajouter un client </BaseButton>
    </header>

    <div v-if="loading" class="mt-8 space-y-4">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="index in 6" :key="index" class="h-28 animate-pulse rounded-2xl border border-zinc-200 bg-white" />
      </div>
      <div class="h-36 animate-pulse rounded-2xl border border-zinc-200 bg-white" />
      <div class="grid gap-4 lg:grid-cols-2">
        <div v-for="index in 4" :key="index" class="h-36 animate-pulse rounded-2xl border border-zinc-200 bg-white" />
      </div>
    </div>

    <template v-else>
      <section class="mt-8">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Clients accompagnés</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ totalClients }}
          </p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Missions signées</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ signedClients }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">sur {{ totalClients }} clients</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Taux de signature</p>

          <p class="mt-2 text-3xl font-bold text-fuchsia-600">{{ signatureRate }} %</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Temps moyen avant mission</p>

          <p v-if="averageDaysToMission !== null" class="mt-2 text-3xl font-bold text-zinc-950">
            {{ averageDaysToMission }}

            <span class="text-base font-medium text-zinc-500"> jours </span>
          </p>

          <p v-else class="mt-2 text-lg font-semibold text-zinc-400">—</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Opportunités / client</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ averageOpportunities }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">{{ totalOpportunities }} au total</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">RDV coaching / client</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ averageCoachingMeetings }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">{{ totalCoachingMeetings }} au total</p>
        </div>
      </div>
    </section>

    <section class="mt-10 rounded-2xl border border-zinc-200 bg-white p-5">
      <div class="grid gap-4 lg:grid-cols-[1fr_auto_auto]">
        <div>
          <label for="client-search" class="text-sm font-medium text-zinc-700"> Rechercher </label>

          <input
            id="client-search"
            v-model="search"
            type="search"
            placeholder="Nom, email, entreprise, mission..."
            class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
          />
        </div>

        <div class="lg:min-w-48">
          <label for="mission-filter" class="text-sm font-medium text-zinc-700"> Mission </label>

          <select
            id="mission-filter"
            v-model="missionFilter"
            class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none"
          >
            <option value="all">Toutes</option>
            <option value="signed">Mission signée</option>
            <option value="unsigned">Sans mission</option>
          </select>
        </div>

        <div class="lg:min-w-48">
          <label for="sort" class="text-sm font-medium text-zinc-700"> Trier par </label>

          <select
            id="sort"
            v-model="sortBy"
            class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none"
          >
            <option value="recent">Plus récents</option>
            <option value="oldest">Plus anciens</option>
            <option value="name">Nom</option>
          </select>
        </div>
      </div>

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p class="text-sm text-zinc-500">
          <span class="font-semibold text-zinc-950">
            {{ filteredClients.length }}
          </span>

          résultat{{ filteredClients.length > 1 ? 's' : '' }}

          <span v-if="hasActiveFilters"> sur {{ totalClients }} </span>
        </p>

        <button
          v-if="hasActiveFilters"
          type="button"
          class="text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500"
          @click="resetFilters"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </section>

    <section class="mt-10">
      <h2 class="text-xl font-semibold text-zinc-950">Tous les clients</h2>

      <div v-if="filteredClients.length" class="mt-6 grid gap-4 lg:grid-cols-2">
        <ClientCard v-for="client in filteredClients" :key="client.id" :client="client" />
      </div>

      <div
        v-else-if="clients.length"
        class="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-14 text-center"
      >
        <p class="text-lg font-semibold text-zinc-950">Aucun client trouvé</p>

        <p class="mt-2 text-sm text-zinc-500">Essaie de modifier ta recherche ou tes filtres.</p>

        <button
          type="button"
          class="mt-5 text-sm font-semibold text-fuchsia-600"
          @click="resetFilters"
        >
          Réinitialiser les filtres
        </button>
      </div>

      <div
        v-else
        class="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center"
      >
        <p class="text-lg font-semibold text-zinc-950">Aucun client pour le moment</p>

        <p class="mt-2 text-sm text-zinc-500">
          Ajoute ton premier client ou convertis un prospect.
        </p>

        <div class="mt-6">
          <BaseButton to="/clients/new"> Ajouter un client </BaseButton>
        </div>
      </div>
    </section>
    </template>
  </BaseContainer>
</template>
