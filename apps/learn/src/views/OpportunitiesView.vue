<script setup lang="ts">
import { computed, ref } from 'vue'

import OpportunityForm from '@/components/pilotage/OpportunityForm.vue'
import OpportunityStatusBadge from '@/components/pilotage/OpportunityStatusBadge.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useOpportunities } from '@/composables/useOpportunities'
import type { Opportunity, OpportunityFormData, OpportunityStatus } from '@/types/opportunity'

const {
  opportunities,
  activeOpportunities,
  conversationCount,
  interviewCount,
  wonCount,
  addOpportunity,
  updateOpportunity,
  removeOpportunity,
} = useOpportunities()

const showForm = ref(false)
const editingOpportunity = ref<Opportunity>()
const statusFilter = ref<'all' | OpportunityStatus>('all')
const search = ref('')

const statusOptions: { value: 'all' | OpportunityStatus; label: string }[] = [
  { value: 'all', label: 'Tous les statuts' },
  { value: 'to-contact', label: 'À contacter' },
  { value: 'contacted', label: 'Contacté' },
  { value: 'conversation', label: 'Échange en cours' },
  { value: 'interview', label: 'Entretien / RDV' },
  { value: 'won', label: 'Gagné' },
  { value: 'lost', label: 'Perdu' },
]

const filteredOpportunities = computed(() => {
  const query = search.value.trim().toLowerCase()

  return [...opportunities.value]
    .filter((opportunity) => {
      if (statusFilter.value !== 'all' && opportunity.status !== statusFilter.value) {
        return false
      }

      if (!query) {
        return true
      }

      return [opportunity.company, opportunity.role, opportunity.source, opportunity.nextAction]
        .filter(Boolean)
        .some((value) => value?.toLowerCase().includes(query))
    })
    .sort((a, b) => {
      if (!a.nextActionDate && !b.nextActionDate) {
        return b.updatedAt.localeCompare(a.updatedAt)
      }

      if (!a.nextActionDate) {
        return 1
      }

      if (!b.nextActionDate) {
        return -1
      }

      return a.nextActionDate.localeCompare(b.nextActionDate)
    })
})

const actionableOpportunities = computed(() =>
  opportunities.value
    .filter(
      (opportunity) =>
        opportunity.status !== 'won' &&
        opportunity.status !== 'lost' &&
        opportunity.nextAction &&
        opportunity.nextActionDate,
    )
    .sort((a, b) => (a.nextActionDate ?? '').localeCompare(b.nextActionDate ?? '')),
)

const overdueActions = computed(() => {
  const today = getToday()

  return actionableOpportunities.value.filter(
    (opportunity) => (opportunity.nextActionDate ?? '') < today,
  )
})

const upcomingActions = computed(() => {
  const today = getToday()

  return actionableOpportunities.value
    .filter((opportunity) => (opportunity.nextActionDate ?? '') >= today)
    .slice(0, 5)
})

function getToday() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function formatDate(date?: string) {
  if (!date) {
    return '—'
  }

  const [year, month, day] = date.split('-').map(Number)

  if (!year || !month || !day) {
    return date
  }

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(year, month - 1, day))
}

function isOverdue(date?: string) {
  return Boolean(date && date < getToday())
}

function openCreateForm() {
  editingOpportunity.value = undefined
  showForm.value = true
}

function openEditForm(opportunity: Opportunity) {
  editingOpportunity.value = opportunity
  showForm.value = true
}

function closeForm() {
  showForm.value = false
  editingOpportunity.value = undefined
}

function saveForm(data: OpportunityFormData) {
  if (editingOpportunity.value) {
    updateOpportunity(editingOpportunity.value.id, data)
  } else {
    addOpportunity(data)
  }

  closeForm()
}

function confirmDelete(opportunity: Opportunity) {
  if (!window.confirm(`Supprimer l’opportunité ${opportunity.company} ?`)) {
    return
  }

  removeOpportunity(opportunity.id)
}
</script>

<template>
  <BaseContainer>
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <header class="max-w-3xl">
        <RouterLink
          :to="{ name: 'pilotage' }"
          class="text-sm font-medium text-muted transition hover:text-ink"
        >
          ← Pilotage
        </RouterLink>

        <p class="mt-7 text-sm font-semibold text-petrol-dark">Vision globale</p>

        <h1 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Pipeline d’opportunités
        </h1>

        <p class="mt-3 max-w-2xl text-base leading-7 text-muted">
          Garde une vue claire sur tes opportunités et, surtout, sur la prochaine action à réaliser.
        </p>
      </header>

      <button
        type="button"
        class="inline-flex w-fit items-center justify-center rounded-xl bg-petrol-dark px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ink"
        @click="openCreateForm"
      >
        + Ajouter une opportunité
      </button>
    </div>

    <!-- KPIs -->
    <section class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-muted">Opportunités actives</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-ink">
          {{ activeOpportunities.length }}
        </p>
      </article>

      <article class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-muted">Échanges en cours</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-ink">
          {{ conversationCount }}
        </p>
      </article>

      <article class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-muted">Entretiens / RDV</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-ink">
          {{ interviewCount }}
        </p>
      </article>

      <article class="rounded-2xl border border-petrol/20 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-muted">Missions gagnées</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-ink">
          {{ wonCount }}
        </p>
      </article>
    </section>

    <!-- Next actions -->
    <section
      v-if="overdueActions.length || upcomingActions.length"
      class="mt-8 rounded-2xl border border-petrol/20 bg-white p-6 shadow-sm"
    >
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-petrol-dark">À faire</p>
        <h2 class="mt-1 text-xl font-semibold tracking-tight text-ink">Tes prochaines actions</h2>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <div v-if="overdueActions.length">
          <p class="text-sm font-semibold text-rose-700">En retard</p>

          <div class="mt-3 space-y-2">
            <button
              v-for="opportunity in overdueActions"
              :key="opportunity.id"
              type="button"
              class="flex w-full items-start justify-between gap-4 rounded-xl bg-rose-50 px-4 py-3 text-left transition hover:bg-rose-100"
              @click="openEditForm(opportunity)"
            >
              <span>
                <span class="block text-sm font-semibold text-petrol-dark">
                  {{ opportunity.nextAction }}
                </span>
                <span class="mt-0.5 block text-xs text-muted">
                  {{ opportunity.company }}
                </span>
              </span>

              <span class="shrink-0 text-xs font-semibold text-rose-700">
                {{ formatDate(opportunity.nextActionDate) }}
              </span>
            </button>
          </div>
        </div>

        <div v-if="upcomingActions.length">
          <p class="text-sm font-semibold text-ink-soft">À venir</p>

          <div class="mt-3 space-y-2">
            <button
              v-for="opportunity in upcomingActions"
              :key="opportunity.id"
              type="button"
              class="flex w-full items-start justify-between gap-4 rounded-xl bg-sand-light px-4 py-3 text-left transition hover:bg-mist"
              @click="openEditForm(opportunity)"
            >
              <span>
                <span class="block text-sm font-semibold text-petrol-dark">
                  {{ opportunity.nextAction }}
                </span>
                <span class="mt-0.5 block text-xs text-muted">
                  {{ opportunity.company }}
                </span>
              </span>

              <span class="shrink-0 text-xs font-semibold text-muted">
                {{ formatDate(opportunity.nextActionDate) }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pipeline -->
    <section class="mt-8 overflow-hidden rounded-2xl border border-petrol/20 bg-white shadow-sm">
      <div
        class="flex flex-col gap-4 border-b border-petrol/20 p-5 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 class="text-lg font-semibold text-ink">Toutes les opportunités</h2>
          <p class="mt-1 text-sm text-muted">
            {{ opportunities.length }} opportunité{{
              opportunities.length > 1 ? 's' : ''
            }}
            enregistrée{{ opportunities.length > 1 ? 's' : '' }}.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <input
            v-model="search"
            type="search"
            placeholder="Rechercher…"
            class="rounded-xl border border-petrol/20 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-light focus:border-petrol focus:ring-4 focus:ring-mist-deep"
          />

          <select
            v-model="statusFilter"
            class="rounded-xl border border-petrol/20 bg-white px-4 py-2.5 text-sm text-ink-soft outline-none transition focus:border-petrol focus:ring-4 focus:ring-mist-deep"
          >
            <option v-for="status in statusOptions" :key="status.value" :value="status.value">
              {{ status.label }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="filteredOpportunities.length" class="overflow-x-auto">
        <table class="min-w-full divide-y divide-petrol/20">
          <thead class="bg-sand-light">
            <tr>
              <th
                class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Entreprise
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Source
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Statut
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Prochaine action
              </th>
              <th
                class="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-mist bg-white">
            <tr
              v-for="opportunity in filteredOpportunities"
              :key="opportunity.id"
              class="transition hover:bg-sand-light"
            >
              <td class="px-5 py-4 align-top">
                <button type="button" class="text-left" @click="openEditForm(opportunity)">
                  <span class="block text-sm font-semibold text-ink">
                    {{ opportunity.company }}
                  </span>
                  <span v-if="opportunity.role" class="mt-1 block text-sm text-muted">
                    {{ opportunity.role }}
                  </span>
                </button>
              </td>

              <td class="px-5 py-4 align-top text-sm text-muted">
                {{ opportunity.source }}
              </td>

              <td class="px-5 py-4 align-top">
                <OpportunityStatusBadge :status="opportunity.status" />
              </td>

              <td class="px-5 py-4 align-top">
                <template v-if="opportunity.nextAction">
                  <p class="max-w-xs text-sm font-medium text-ink-soft">
                    {{ opportunity.nextAction }}
                  </p>
                  <p
                    v-if="opportunity.nextActionDate"
                    :class="[
                      'mt-1 text-xs font-medium',
                      isOverdue(opportunity.nextActionDate) ? 'text-rose-600' : 'text-muted',
                    ]"
                  >
                    {{ formatDate(opportunity.nextActionDate) }}
                    <span v-if="isOverdue(opportunity.nextActionDate)"> · en retard</span>
                  </p>
                </template>
                <span v-else class="text-sm text-muted-light">Aucune action prévue</span>
              </td>

              <td class="px-5 py-4 align-top text-right">
                <div class="flex justify-end gap-2">
                  <button
                    type="button"
                    class="rounded-lg px-3 py-2 text-xs font-semibold text-muted transition hover:bg-mist hover:text-ink"
                    @click="openEditForm(opportunity)"
                  >
                    Modifier
                  </button>

                  <button
                    type="button"
                    class="rounded-lg px-3 py-2 text-xs font-semibold text-muted-light transition hover:bg-rose-50 hover:text-rose-700"
                    @click="confirmDelete(opportunity)"
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="opportunities.length" class="px-6 py-16 text-center">
        <p class="font-semibold text-ink-soft">Aucun résultat</p>
        <p class="mt-1 text-sm text-muted">Essaie un autre filtre ou une autre recherche.</p>
      </div>

      <div v-else class="px-6 py-16 text-center">
        <div class="mx-auto max-w-md">
          <p class="text-lg font-semibold text-ink">Ton pipeline est vide</p>
          <p class="mt-2 text-sm leading-6 text-muted">
            Ajoute ta première opportunité pour commencer à suivre tes échanges et tes prochaines
            actions.
          </p>
          <button
            type="button"
            class="mt-6 rounded-xl bg-petrol-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            @click="openCreateForm"
          >
            + Ajouter ma première opportunité
          </button>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="showForm"
        class="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        @click.self="closeForm"
      >
        <section
          class="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-w-2xl sm:rounded-3xl sm:p-8"
        >
          <div class="mb-6 flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-petrol-dark">
                {{ editingOpportunity ? 'Modifier' : 'Nouvelle opportunité' }}
              </p>
              <h2 class="mt-1 text-2xl font-bold tracking-tight text-ink">
                {{ editingOpportunity ? editingOpportunity.company : 'Ajouter une opportunité' }}
              </h2>
            </div>

            <button
              type="button"
              aria-label="Fermer"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-mist text-lg text-muted transition hover:bg-petrol/20 hover:text-ink"
              @click="closeForm"
            >
              ×
            </button>
          </div>

          <OpportunityForm :opportunity="editingOpportunity" @save="saveForm" @cancel="closeForm" />
        </section>
      </div>
    </Teleport>
  </BaseContainer>
</template>
