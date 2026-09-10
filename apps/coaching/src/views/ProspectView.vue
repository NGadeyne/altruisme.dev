<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRaw, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

import { useClientsStore } from '@/stores/clients'
import { useProspectsStore } from '@/stores/prospects'

import type { Client } from '@/types/client'

import type {
  Prospect,
  ProspectQualification,
  ProspectStatus,
  ProspectUrgency,
} from '@/types/prospect'

const route = useRoute()
const router = useRouter()

const prospectsStore = useProspectsStore()

const clientsStore = useClientsStore()

const showConversionModal = ref(false)

const showDeleteModal = ref(false)

onMounted(async () => {
  try {
    await Promise.all([
      prospectsStore.loaded ? Promise.resolve() : prospectsStore.loadProspects(),

      clientsStore.loaded ? Promise.resolve() : clientsStore.loadClients(),
    ])
  } catch (error) {
    console.error('Erreur lors du chargement du prospect :', error)
  }
})

const prospect = computed<Prospect | undefined>(() => {
  return prospectsStore.getProspectById(String(route.params.prospectId))
})

const form = reactive<Prospect>({
  id: '',

  firstName: '',
  lastName: '',
  email: '',
  company: '',
  linkedinUrl: '',

  status: 'meeting',
  qualification: undefined,

  jobTarget: '',
  jobSearchStartedAt: '',

  dailyRate: undefined,

  mainBlocker: '',
  currentSituation: '',

  urgency: 'medium',
  salesObjection: '',

  meetingAt: '',
  nextAction: '',
  nextActionAt: '',

  notes: '',
  createdAt: '',
})

watch(
  prospect,
  (value) => {
    if (!value) {
      return
    }

    const savedProspect = structuredClone(toRaw(value))

    Object.assign(form, {
      ...savedProspect,

      email: savedProspect.email ?? '',

      company: savedProspect.company ?? '',

      linkedinUrl: savedProspect.linkedinUrl ?? '',

      qualification: savedProspect.qualification ?? undefined,

      jobTarget: savedProspect.jobTarget ?? '',

      jobSearchStartedAt: savedProspect.jobSearchStartedAt ?? '',

      dailyRate: savedProspect.dailyRate ?? undefined,

      mainBlocker: savedProspect.mainBlocker ?? '',

      currentSituation: savedProspect.currentSituation ?? '',

      urgency: savedProspect.urgency ?? 'medium',

      salesObjection: savedProspect.salesObjection ?? '',

      meetingAt: savedProspect.meetingAt ?? '',

      nextAction: savedProspect.nextAction ?? '',

      nextActionAt: savedProspect.nextActionAt ?? '',

      notes: savedProspect.notes ?? '',
    })
  },
  {
    immediate: true,
  },
)

const statuses: {
  value: ProspectStatus
  label: string
}[] = [
  {
    value: 'meeting',
    label: 'RDV prévu',
  },
  {
    value: 'done',
    label: 'RDV réalisé',
  },
  {
    value: 'won',
    label: 'Gagné',
  },
  {
    value: 'lost',
    label: 'Perdu',
  },
  {
    value: 'canceled',
    label: 'Annulé',
  },
]

const qualifications: {
  value: ProspectQualification
  label: string
}[] = [
  {
    value: 'coaching',
    label: 'Accompagnement',
  },
  {
    value: 'online-training',
    label: 'Formation en ligne',
  },
  {
    value: 'later',
    label: 'À recontacter plus tard',
  },
  {
    value: 'not-qualified',
    label: 'Non qualifié',
  },
]

const urgencies: {
  value: ProspectUrgency
  label: string
}[] = [
  {
    value: 'low',
    label: 'Faible',
  },
  {
    value: 'medium',
    label: 'Moyenne',
  },
  {
    value: 'high',
    label: 'Forte',
  },
]

async function saveProspect() {
  try {
    await prospectsStore.updateProspect(structuredClone(toRaw(form)))

    await router.push({
      name: 'prospects',
    })
  } catch (error) {
    console.error('Erreur lors de la mise à jour du prospect :', error)
  }
}

function openConversionModal() {
  showConversionModal.value = true
}

function closeConversionModal() {
  showConversionModal.value = false
}

async function convertToClient() {
  const prospectId = String(route.params.prospectId)

  const existingClient = clientsStore.getClientById(prospectId)

  if (existingClient) {
    showConversionModal.value = false

    await router.push({
      name: 'client',

      params: {
        clientId: existingClient.id,
      },
    })

    return
  }

  const today = new Date().toISOString().slice(0, 10)

  const newClient: Client = {
    id: prospectId,

    firstName: form.firstName,

    lastName: form.lastName,

    email: form.email,

    company: form.company,

    // Le LinkedIn du prospect
    // est automatiquement conservé.
    linkedinUrl: form.linkedinUrl,

    // Ces deux liens seront
    // renseignés ensuite côté client.
    maltUrl: '',
    workDocUrl: '',

    jobTarget: form.jobTarget,

    jobSearchStartedAt: form.jobSearchStartedAt,

    initialDailyRate: form.dailyRate,

    signedDailyRate: undefined,

    mainBlocker: form.mainBlocker,

    currentSituation: form.currentSituation,

    notes: form.notes,

    startedAt: today,

    missionSignedAt: '',

    coachingMeetingsCount: 0,

    opportunitiesCount: 0,

    missionSigned: false,

    checklist: {
      positioningOffer: false,
      maltProfile: false,
      linkedinProfile: false,
      skillsPortfolio: false,
      prospecting: false,
      content: false,
      interview: false,
      negotiation: false,
    },
  }

  try {
    await clientsStore.addClient(structuredClone(newClient))

    await prospectsStore.deleteProspect(prospectId)

    showConversionModal.value = false

    await router.push({
      name: 'client',

      params: {
        clientId: newClient.id,
      },
    })
  } catch (error) {
    console.error('Erreur lors de la conversion du prospect :', error)
  }
}

function openDeleteModal() {
  showDeleteModal.value = true
}

function closeDeleteModal() {
  showDeleteModal.value = false
}

async function deleteProspect() {
  const prospectId = String(route.params.prospectId)

  try {
    await prospectsStore.deleteProspect(prospectId)

    showDeleteModal.value = false

    await router.push({
      name: 'prospects',
    })
  } catch (error) {
    console.error('Erreur lors de la suppression du prospect :', error)
  }
}
</script>

<template>
  <BaseContainer size="default">
    <div v-if="prospect">
      <RouterLink
        to="/prospects"
        class="text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500"
      >
        ← Retour aux prospects
      </RouterLink>

      <header class="mt-8 border-b border-zinc-200 pb-8">
        <p class="text-sm font-semibold text-fuchsia-600">Qualification prospect</p>

        <div class="mt-2 flex flex-wrap items-center gap-3">
          <h1 class="text-3xl font-bold tracking-tight text-zinc-950">
            {{ form.firstName }}
            {{ form.lastName }}
          </h1>

          <span
            v-if="form.status === 'canceled'"
            class="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500 ring-1 ring-inset ring-zinc-500/20"
          >
            RDV annulé
          </span>
        </div>

        <p v-if="form.jobTarget" class="mt-2 text-zinc-600">
          {{ form.jobTarget }}
        </p>
      </header>

      <!-- Résumé avant rendez-vous -->
      <section class="mt-8 rounded-2xl border border-fuchsia-100 bg-fuchsia-50/40 p-6">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p class="text-sm font-semibold text-fuchsia-600">Avant le rendez-vous</p>

            <h2 class="mt-1 text-xl font-semibold text-zinc-950">
              Les infos importantes en un coup d'œil
            </h2>
          </div>

          <a
            v-if="form.linkedinUrl"
            :href="form.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex shrink-0 items-center justify-center rounded-xl border border-fuchsia-200 bg-white px-4 py-2.5 text-sm font-semibold text-fuchsia-700 transition hover:border-fuchsia-300 hover:bg-fuchsia-50"
          >
            Ouvrir LinkedIn ↗
          </a>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div class="rounded-xl border border-fuchsia-100 bg-white p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Métier / expertise
            </p>

            <p class="mt-2 text-sm font-semibold text-zinc-900">
              {{ form.jobTarget || 'Non renseigné' }}
            </p>
          </div>

          <div class="rounded-xl border border-fuchsia-100 bg-white p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-zinc-400">Recherche</p>

            <p class="mt-2 text-sm font-semibold text-zinc-900">
              {{ form.currentSituation || 'Non renseigné' }}
            </p>
          </div>

          <div class="rounded-xl border border-fuchsia-100 bg-white p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-zinc-400">TJM actuel</p>

            <p class="mt-2 text-sm font-semibold text-zinc-900">
              {{ form.dailyRate ? `${form.dailyRate} €` : 'Non renseigné' }}
            </p>
          </div>

          <div class="rounded-xl border border-fuchsia-100 bg-white p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Blocage principal
            </p>

            <p class="mt-2 text-sm font-semibold text-zinc-900">
              {{ form.mainBlocker || 'Non renseigné' }}
            </p>
          </div>
        </div>

        <div v-if="form.notes" class="mt-4 rounded-xl border border-fuchsia-100 bg-white p-4">
          <p class="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            Contexte complémentaire
          </p>

          <p class="mt-2 text-sm leading-6 text-zinc-700">
            {{ form.notes }}
          </p>
        </div>
      </section>

      <div class="mt-8 grid gap-6 lg:grid-cols-2">
        <!-- Coordonnées -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Coordonnées</h2>

          <div class="mt-6 space-y-5">
            <div>
              <label for="first-name" class="text-sm font-medium text-zinc-700"> Prénom </label>

              <input
                id="first-name"
                v-model="form.firstName"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="last-name" class="text-sm font-medium text-zinc-700"> Nom </label>

              <input
                id="last-name"
                v-model="form.lastName"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="email" class="text-sm font-medium text-zinc-700"> Email </label>

              <input
                id="email"
                v-model="form.email"
                type="email"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="company" class="text-sm font-medium text-zinc-700"> Entreprise </label>

              <input
                id="company"
                v-model="form.company"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="linkedin-url" class="text-sm font-medium text-zinc-700">
                Profil LinkedIn
              </label>

              <div class="mt-2 flex gap-2">
                <input
                  id="linkedin-url"
                  v-model="form.linkedinUrl"
                  type="url"
                  placeholder="https://www.linkedin.com/in/..."
                  class="min-w-0 flex-1 rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
                />

                <a
                  v-if="form.linkedinUrl"
                  :href="form.linkedinUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
                >
                  Ouvrir ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Recherche -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Recherche de mission</h2>

          <div class="mt-6 space-y-5">
            <div>
              <label for="job-target" class="text-sm font-medium text-zinc-700">
                Métier / expertise
              </label>

              <input
                id="job-target"
                v-model="form.jobTarget"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="job-search-started-at" class="text-sm font-medium text-zinc-700">
                Recherche depuis
              </label>

              <input
                id="job-search-started-at"
                v-model="form.jobSearchStartedAt"
                type="date"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />

              <p v-if="form.currentSituation" class="mt-2 text-sm text-zinc-500">
                Calendly :
                {{ form.currentSituation }}
              </p>
            </div>

            <div>
              <label for="daily-rate" class="text-sm font-medium text-zinc-700"> TJM actuel </label>

              <div class="relative mt-2">
                <input
                  id="daily-rate"
                  v-model.number="form.dailyRate"
                  type="number"
                  min="0"
                  step="10"
                  class="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 pr-12 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
                />

                <span
                  class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-zinc-400"
                >
                  €
                </span>
              </div>
            </div>

            <div>
              <label for="current-situation" class="text-sm font-medium text-zinc-700">
                Situation actuelle
              </label>

              <textarea
                id="current-situation"
                v-model="form.currentSituation"
                rows="3"
                class="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="main-blocker" class="text-sm font-medium text-zinc-700">
                Principal blocage
              </label>

              <textarea
                id="main-blocker"
                v-model="form.mainBlocker"
                rows="3"
                class="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>
          </div>
        </section>

        <!-- Qualification -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Qualification</h2>

          <div class="mt-6 space-y-5">
            <div>
              <label for="status" class="text-sm font-medium text-zinc-700"> Statut </label>

              <select
                id="status"
                v-model="form.status"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              >
                <option v-for="status in statuses" :key="status.value" :value="status.value">
                  {{ status.label }}
                </option>
              </select>
            </div>

            <div>
              <label for="qualification" class="text-sm font-medium text-zinc-700">
                Orientation
              </label>

              <select
                id="qualification"
                v-model="form.qualification"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              >
                <option :value="undefined">À qualifier</option>

                <option
                  v-for="qualification in qualifications"
                  :key="qualification.value"
                  :value="qualification.value"
                >
                  {{ qualification.label }}
                </option>
              </select>
            </div>

            <div>
              <label for="urgency" class="text-sm font-medium text-zinc-700"> Urgence </label>

              <select
                id="urgency"
                v-model="form.urgency"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              >
                <option v-for="urgency in urgencies" :key="urgency.value" :value="urgency.value">
                  {{ urgency.label }}
                </option>
              </select>
            </div>

            <div>
              <label for="sales-objection" class="text-sm font-medium text-zinc-700">
                Frein / objection
              </label>

              <textarea
                id="sales-objection"
                v-model="form.salesObjection"
                rows="3"
                class="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>
          </div>
        </section>

        <!-- Suivi -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Suivi</h2>

          <div class="mt-6 space-y-5">
            <div>
              <label for="meeting-at" class="text-sm font-medium text-zinc-700">
                Rendez-vous
              </label>

              <input
                id="meeting-at"
                v-model="form.meetingAt"
                type="datetime-local"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="next-action" class="text-sm font-medium text-zinc-700">
                Prochaine action
              </label>

              <input
                id="next-action"
                v-model="form.nextAction"
                type="text"
                placeholder="Relancer, envoyer une proposition..."
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="next-action-at" class="text-sm font-medium text-zinc-700">
                Date de prochaine action
              </label>

              <input
                id="next-action-at"
                v-model="form.nextActionAt"
                type="datetime-local"
                class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <div>
              <label for="notes" class="text-sm font-medium text-zinc-700"> Notes </label>

              <textarea
                id="notes"
                v-model="form.notes"
                rows="6"
                placeholder="Informations utiles, contexte, compte-rendu du rendez-vous..."
                class="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>
          </div>
        </section>
      </div>

      <div
        class="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-8"
      >
        <button
          type="button"
          class="text-sm font-semibold text-red-600 transition hover:text-red-500"
          @click="openDeleteModal"
        >
          Supprimer le prospect
        </button>

        <div class="flex flex-wrap gap-3">
          <BaseButton
            v-if="form.status !== 'canceled'"
            variant="secondary"
            @click="openConversionModal"
          >
            Convertir en client
          </BaseButton>

          <BaseButton @click="saveProspect"> Enregistrer </BaseButton>
        </div>
      </div>
    </div>

    <div
      v-else
      class="rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center"
    >
      <p class="text-lg font-semibold text-zinc-950">Prospect introuvable</p>

      <p class="mt-2 text-sm text-zinc-500">Cette fiche n'existe pas ou a été supprimée.</p>

      <RouterLink to="/prospects" class="mt-5 inline-flex text-sm font-semibold text-fuchsia-600">
        Retour aux prospects
      </RouterLink>
    </div>
  </BaseContainer>

  <!-- Conversion -->
  <Teleport to="body">
    <div v-if="showConversionModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        class="absolute inset-0 bg-black/40"
        aria-label="Fermer"
        @click="closeConversionModal"
      />

      <div class="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <p class="text-sm font-semibold text-fuchsia-600">Conversion</p>

        <h2 class="mt-2 text-xl font-bold text-zinc-950">
          Convertir
          {{ form.firstName }}
          {{ form.lastName }}
          en client ?
        </h2>

        <p class="mt-3 text-sm leading-6 text-zinc-600">
          Les informations déjà collectées sur le prospect seront automatiquement conservées, y
          compris son profil LinkedIn.
        </p>

        <div class="mt-6 flex justify-end gap-3">
          <BaseButton variant="ghost" @click="closeConversionModal"> Annuler </BaseButton>

          <BaseButton @click="convertToClient"> Confirmer </BaseButton>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- Suppression -->
  <Teleport to="body">
    <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        class="absolute inset-0 bg-black/40"
        aria-label="Fermer"
        @click="closeDeleteModal"
      />

      <div class="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 class="text-xl font-bold text-zinc-950">
          Supprimer
          {{ form.firstName }}
          {{ form.lastName }} ?
        </h2>

        <p class="mt-3 text-sm text-zinc-600">Cette action est irréversible.</p>

        <div class="mt-6 flex justify-end gap-3">
          <BaseButton variant="ghost" @click="closeDeleteModal"> Annuler </BaseButton>

          <button
            type="button"
            class="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
            @click="deleteProspect"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
