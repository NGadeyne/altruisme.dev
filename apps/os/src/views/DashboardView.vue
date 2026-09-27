<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import ProspectCard from '@/components/prospects/ProspectCard.vue'
import ClientCard from '@/components/clients/ClientCard.vue'

import { useProspectsStore } from '@/stores/prospects'
import { useClientsStore } from '@/stores/clients'
import { formatDateTime } from '@/utils/date'

const prospectsStore = useProspectsStore()
const clientsStore = useClientsStore()

const { prospects, loading: prospectsLoading } = storeToRefs(prospectsStore)
const { clients, loading: clientsLoading } = storeToRefs(clientsStore)

onMounted(async () => {
  try {
    await Promise.all([
      prospectsStore.loaded ? Promise.resolve() : prospectsStore.loadProspects(),
      clientsStore.loaded ? Promise.resolve() : clientsStore.loadClients(),
    ])
  } catch (error) {
    console.error('Erreur lors du chargement du dashboard :', error)
  }
})

const loading = computed(() => prospectsLoading.value || clientsLoading.value)

const activeProspects = computed(() =>
  prospects.value.filter(
    (prospect) =>
      prospect.status !== 'lost' &&
      prospect.status !== 'canceled' &&
      prospect.qualification !== 'not-qualified',
  ),
)

const totalActiveProspects = computed(() => activeProspects.value.length)
const totalClients = computed(() => clients.value.length)
const signedClients = computed(() => clients.value.filter((client) => client.missionSigned).length)

const signatureRate = computed(() => {
  if (totalClients.value === 0) return 0
  return Math.round((signedClients.value / totalClients.value) * 100)
})

const upcomingMeetings = computed(() => {
  const now = Date.now()

  return prospects.value
    .filter((prospect) => {
      if (prospect.status !== 'meeting' || !prospect.meetingAt) return false
      const timestamp = new Date(prospect.meetingAt).getTime()
      return !Number.isNaN(timestamp) && timestamp >= now
    })
    .sort((a, b) => new Date(a.meetingAt!).getTime() - new Date(b.meetingAt!).getTime())
    .slice(0, 3)
})

const recentClients = computed(() => clients.value.slice(0, 3))
</script>

<template>
  <BaseContainer size="large">
    <header class="border-b border-zinc-200 pb-8">
      <p class="text-sm font-semibold text-fuchsia-600">Coaching</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950">Dashboard</h1>
      <p class="mt-2 max-w-2xl text-zinc-600">
        Une vue rapide de ton acquisition et des résultats de tes accompagnements.
      </p>
    </header>

    <section class="mt-8">
      <div v-if="loading" class="grid gap-4 md:grid-cols-3">
        <div v-for="index in 3" :key="index" class="h-36 animate-pulse rounded-2xl border border-zinc-200 bg-white p-6">
          <div class="h-4 w-28 rounded bg-zinc-200" />
          <div class="mt-4 h-10 w-20 rounded bg-zinc-200" />
          <div class="mt-4 h-3 w-40 rounded bg-zinc-100" />
        </div>
      </div>

      <div v-else class="grid gap-4 md:grid-cols-3">
        <RouterLink to="/prospects" class="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-fuchsia-200 hover:shadow-sm">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-medium text-zinc-500">Prospects actifs</p>
              <p class="mt-3 text-4xl font-bold tracking-tight text-zinc-950">{{ totalActiveProspects }}</p>
            </div>
            <span class="text-lg text-zinc-300 transition group-hover:text-fuchsia-600">→</span>
          </div>
          <p class="mt-3 text-xs text-zinc-500">personnes actuellement dans le pipeline</p>
        </RouterLink>

        <RouterLink to="/clients" class="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-fuchsia-200 hover:shadow-sm">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-medium text-zinc-500">Clients accompagnés</p>
              <p class="mt-3 text-4xl font-bold tracking-tight text-zinc-950">{{ totalClients }}</p>
            </div>
            <span class="text-lg text-zinc-300 transition group-hover:text-fuchsia-600">→</span>
          </div>
          <p class="mt-3 text-xs text-zinc-500">clients enregistrés dans l'accompagnement</p>
        </RouterLink>

        <RouterLink to="/clients" class="group rounded-2xl border border-fuchsia-200 bg-fuchsia-50/50 p-6 transition hover:border-fuchsia-300 hover:shadow-sm">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-medium text-zinc-600">Taux de signature</p>
              <p class="mt-3 text-4xl font-bold tracking-tight text-fuchsia-600">{{ signatureRate }} %</p>
            </div>
            <span class="text-lg text-fuchsia-300 transition group-hover:text-fuchsia-600">→</span>
          </div>
          <p class="mt-3 text-xs text-zinc-500">
            {{ signedClients }} mission{{ signedClients > 1 ? 's' : '' }} signée{{ signedClients > 1 ? 's' : '' }} sur
            {{ totalClients }} client{{ totalClients > 1 ? 's' : '' }}
          </p>
        </RouterLink>
      </div>
    </section>

    <section class="mt-12">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-sm font-semibold text-fuchsia-600">À venir</p>
          <h2 class="mt-1 text-xl font-semibold text-zinc-950">Prochains rendez-vous</h2>
        </div>
        <RouterLink to="/prospects" class="text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500">
          Voir tous les prospects →
        </RouterLink>
      </div>

      <div v-if="prospectsLoading" class="mt-6 grid gap-4 lg:grid-cols-3">
        <div v-for="index in 3" :key="index" class="h-40 animate-pulse rounded-2xl border border-zinc-200 bg-white p-5">
          <div class="h-4 w-36 rounded bg-zinc-200" />
          <div class="mt-4 h-3 w-28 rounded bg-zinc-100" />
          <div class="mt-8 h-4 w-44 rounded bg-zinc-100" />
        </div>
      </div>

      <div v-else-if="upcomingMeetings.length" class="mt-6 grid gap-4 lg:grid-cols-3">
        <div v-for="prospect in upcomingMeetings" :key="prospect.id" class="space-y-2">
          <p class="px-1 text-xs font-semibold capitalize text-fuchsia-600">{{ formatDateTime(prospect.meetingAt) }}</p>
          <ProspectCard :prospect="prospect" />
        </div>
      </div>

      <div v-else class="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-10 text-center">
        <p class="font-medium text-zinc-700">Aucun rendez-vous à venir.</p>
        <RouterLink to="/prospects/new" class="mt-2 inline-flex text-sm font-semibold text-fuchsia-600">Ajouter un prospect</RouterLink>
      </div>
    </section>

    <section class="mt-12">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-sm font-semibold text-fuchsia-600">Accompagnement</p>
          <h2 class="mt-1 text-xl font-semibold text-zinc-950">Clients récents</h2>
        </div>
        <RouterLink to="/clients" class="text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500">Voir tous les clients →</RouterLink>
      </div>

      <div v-if="clientsLoading" class="mt-6 grid gap-4 lg:grid-cols-3">
        <div v-for="index in 3" :key="index" class="h-40 animate-pulse rounded-2xl border border-zinc-200 bg-white p-5" />
      </div>
      <div v-else-if="recentClients.length" class="mt-6 grid gap-4 lg:grid-cols-3">
        <ClientCard v-for="client in recentClients" :key="client.id" :client="client" />
      </div>
      <div v-else class="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-10 text-center">
        <p class="font-medium text-zinc-700">Aucun client pour le moment.</p>
        <RouterLink to="/clients/new" class="mt-2 inline-flex text-sm font-semibold text-fuchsia-600">Ajouter un client</RouterLink>
      </div>
    </section>
  </BaseContainer>
</template>
