<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import ProspectCard from '@/components/prospects/ProspectCard.vue'

import { useProspectsStore } from '@/stores/prospects'

const prospectsStore = useProspectsStore()
const { prospects, loading } = storeToRefs(prospectsStore)

onMounted(async () => {
  if (prospectsStore.loaded) {
    return
  }

  try {
    await prospectsStore.loadProspects()
  } catch (error) {
    console.error('Erreur lors du chargement des prospects :', error)
  }
})

const search = ref('')

const qualificationFilter = ref<
  'all' | 'unqualified' | 'coaching' | 'online-training' | 'later' | 'not-qualified'
>('all')

const statusFilter = ref<'all' | 'meeting' | 'done' | 'won' | 'lost' | 'canceled'>('all')

const urgencyFilter = ref<'all' | 'low' | 'medium' | 'high'>('all')

const sortBy = ref<'recent' | 'oldest' | 'name' | 'next-action'>('recent')

const totalProspects = computed(() => {
  return prospects.value.length
})

const unqualifiedProspects = computed(() => {
  return prospects.value.filter((prospect) => !prospect.qualification).length
})

const coachingProspects = computed(() => {
  return prospects.value.filter((prospect) => prospect.qualification === 'coaching').length
})

const trainingProspects = computed(() => {
  return prospects.value.filter((prospect) => prospect.qualification === 'online-training').length
})

const laterProspects = computed(() => {
  return prospects.value.filter((prospect) => prospect.qualification === 'later').length
})

const notQualifiedProspects = computed(() => {
  return prospects.value.filter((prospect) => prospect.qualification === 'not-qualified').length
})

const canceledProspects = computed(() => {
  return prospects.value.filter((prospect) => prospect.status === 'canceled').length
})

const qualifiedProspects = computed(() => {
  return (
    coachingProspects.value +
    trainingProspects.value +
    laterProspects.value +
    notQualifiedProspects.value
  )
})

const coachingQualificationRate = computed(() => {
  if (qualifiedProspects.value === 0) {
    return 0
  }

  return Math.round((coachingProspects.value / qualifiedProspects.value) * 100)
})

const highUrgencyProspects = computed(() => {
  return prospects.value.filter(
    (prospect) => prospect.urgency === 'high' && prospect.status !== 'canceled',
  ).length
})

const filteredProspects = computed(() => {
  const query = search.value.trim().toLowerCase()

  const result = prospects.value.filter((prospect) => {
    const searchableContent = [
      prospect.firstName,
      prospect.lastName,
      prospect.email,
      prospect.company,
      prospect.jobTarget,
      prospect.currentSituation,
      prospect.mainBlocker,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    const matchesSearch = !query || searchableContent.includes(query)

    const matchesQualification =
      qualificationFilter.value === 'all' ||
      (qualificationFilter.value === 'unqualified' && !prospect.qualification) ||
      prospect.qualification === qualificationFilter.value

    const matchesStatus = statusFilter.value === 'all' || prospect.status === statusFilter.value

    const matchesUrgency = urgencyFilter.value === 'all' || prospect.urgency === urgencyFilter.value

    return matchesSearch && matchesQualification && matchesStatus && matchesUrgency
  })

  return [...result].sort((a, b) => {
    if (sortBy.value === 'name') {
      return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`, 'fr')
    }

    if (sortBy.value === 'next-action') {
      const aDate = a.nextActionAt ? new Date(a.nextActionAt).getTime() : Number.MAX_SAFE_INTEGER

      const bDate = b.nextActionAt ? new Date(b.nextActionAt).getTime() : Number.MAX_SAFE_INTEGER

      return aDate - bDate
    }

    const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0

    const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0

    if (sortBy.value === 'oldest') {
      return aDate - bDate
    }

    return bDate - aDate
  })
})

const hasActiveFilters = computed(() => {
  return (
    search.value.trim() !== '' ||
    qualificationFilter.value !== 'all' ||
    statusFilter.value !== 'all' ||
    urgencyFilter.value !== 'all'
  )
})

function resetFilters() {
  search.value = ''
  qualificationFilter.value = 'all'
  statusFilter.value = 'all'
  urgencyFilter.value = 'all'
  sortBy.value = 'recent'
}
</script>

<template>
  <BaseContainer size="large">
    <header
      class="flex flex-col gap-5 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p class="text-sm font-semibold text-fuchsia-600">Acquisition</p>

        <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950">Prospects</h1>

        <p class="mt-2 max-w-2xl text-zinc-600">
          Suis tes rendez-vous, qualifie les besoins et identifie les prospects à accompagner.
        </p>
      </div>

      <BaseButton to="/prospects/new"> Ajouter un prospect </BaseButton>
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
          <p class="text-sm font-medium text-zinc-500">Prospects</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ totalProspects }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">rendez-vous enregistrés</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">À qualifier</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ unqualifiedProspects }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">orientation à déterminer</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Accompagnement</p>

          <p class="mt-2 text-3xl font-bold text-fuchsia-600">
            {{ coachingProspects }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">prospects qualifiés coaching</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Formation en ligne</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ trainingProspects }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">préfèrent avancer seuls</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">À recontacter</p>

          <p class="mt-2 text-3xl font-bold text-zinc-950">
            {{ laterProspects }}
          </p>

          <p class="mt-1 text-xs text-zinc-500">potentiel futur</p>
        </div>

        <div class="rounded-2xl border border-zinc-200 bg-white p-5">
          <p class="text-sm font-medium text-zinc-500">Qualification coaching</p>

          <p class="mt-2 text-3xl font-bold text-fuchsia-600">{{ coachingQualificationRate }} %</p>

          <p class="mt-1 text-xs text-zinc-500">des prospects qualifiés</p>
        </div>
      </div>

      <div v-if="totalProspects > 0" class="mt-5 flex flex-wrap gap-3">
        <div class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
          <span class="font-semibold text-zinc-950">
            {{ highUrgencyProspects }}
          </span>

          urgence{{ highUrgencyProspects > 1 ? 's' : '' }} forte{{
            highUrgencyProspects > 1 ? 's' : ''
          }}
        </div>

        <div class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
          <span class="font-semibold text-zinc-950">
            {{ notQualifiedProspects }}
          </span>

          non qualifié{{ notQualifiedProspects > 1 ? 's' : '' }}
        </div>

        <div
          v-if="canceledProspects > 0"
          class="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-500"
        >
          <span class="font-semibold text-zinc-700">
            {{ canceledProspects }}
          </span>

          RDV annulé{{ canceledProspects > 1 ? 's' : '' }}
        </div>
      </div>
    </section>

    <section class="mt-10 rounded-2xl border border-zinc-200 bg-white p-5">
      <div>
        <label for="prospect-search" class="text-sm font-medium text-zinc-700"> Rechercher </label>

        <input
          id="prospect-search"
          v-model="search"
          type="search"
          placeholder="Nom, email, entreprise, mission, blocage..."
          class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
        />
      </div>

      <div class="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <label for="qualification-filter" class="text-sm font-medium text-zinc-700">
            Orientation
          </label>

          <select
            id="qualification-filter"
            v-model="qualificationFilter"
            class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none"
          >
            <option value="all">Toutes</option>
            <option value="unqualified">À qualifier</option>
            <option value="coaching">Accompagnement</option>
            <option value="online-training">Formation en ligne</option>
            <option value="later">À recontacter</option>
            <option value="not-qualified">Non qualifié</option>
          </select>
        </div>

        <div>
          <label for="status-filter" class="text-sm font-medium text-zinc-700"> Statut </label>

          <select
            id="status-filter"
            v-model="statusFilter"
            class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none"
          >
            <option value="all">Tous</option>
            <option value="meeting">RDV prévu</option>
            <option value="done">RDV réalisé</option>
            <option value="won">Gagné</option>
            <option value="lost">Perdu</option>
            <option value="canceled">Annulé</option>
          </select>
        </div>

        <div>
          <label for="urgency-filter" class="text-sm font-medium text-zinc-700"> Urgence </label>

          <select
            id="urgency-filter"
            v-model="urgencyFilter"
            class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none"
          >
            <option value="all">Toutes</option>
            <option value="high">Forte</option>
            <option value="medium">Moyenne</option>
            <option value="low">Faible</option>
          </select>
        </div>

        <div>
          <label for="sort-filter" class="text-sm font-medium text-zinc-700"> Trier par </label>

          <select
            id="sort-filter"
            v-model="sortBy"
            class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none"
          >
            <option value="recent">Plus récents</option>
            <option value="oldest">Plus anciens</option>
            <option value="name">Nom</option>
            <option value="next-action">Prochaine action</option>
          </select>
        </div>
      </div>

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p class="text-sm text-zinc-500">
          <span class="font-semibold text-zinc-950">
            {{ filteredProspects.length }}
          </span>

          résultat{{ filteredProspects.length > 1 ? 's' : '' }}

          <span v-if="hasActiveFilters"> sur {{ totalProspects }} </span>
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
      <h2 class="text-xl font-semibold text-zinc-950">Tous les prospects</h2>

      <p class="mt-1 text-sm text-zinc-500">
        {{ filteredProspects.length }}
        prospect{{ filteredProspects.length > 1 ? 's' : '' }} affiché{{
          filteredProspects.length > 1 ? 's' : ''
        }}.
      </p>

      <div v-if="filteredProspects.length" class="mt-6 grid gap-4 lg:grid-cols-2">
        <ProspectCard
          v-for="prospect in filteredProspects"
          :key="prospect.id"
          :prospect="prospect"
        />
      </div>

      <div
        v-else-if="prospects.length"
        class="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-14 text-center"
      >
        <p class="text-lg font-semibold text-zinc-950">Aucun prospect trouvé</p>

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
        <p class="text-lg font-semibold text-zinc-950">Aucun prospect pour le moment</p>

        <p class="mt-2 text-sm text-zinc-500">
          Ajoute une personne dès qu'elle réserve un rendez-vous avec toi.
        </p>

        <div class="mt-6">
          <BaseButton to="/prospects/new"> Ajouter un prospect </BaseButton>
        </div>
      </div>
    </section>
    </template>
  </BaseContainer>
</template>
