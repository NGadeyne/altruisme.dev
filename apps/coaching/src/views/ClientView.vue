<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRaw, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

import { useClientsStore } from '@/stores/clients'

import type { Client } from '@/types/client'

const route = useRoute()
const router = useRouter()

const clientsStore = useClientsStore()

const showDeleteModal = ref(false)

onMounted(async () => {
  if (clientsStore.loaded) {
    return
  }

  try {
    await clientsStore.loadClients()
  } catch (error) {
    console.error('Erreur lors du chargement du client :', error)
  }
})

const client = computed<Client | undefined>(() => {
  return clientsStore.getClientById(String(route.params.clientId))
})

const form = reactive<Client>({
  id: '',

  firstName: '',
  lastName: '',
  email: '',
  company: '',
  notes: '',

  linkedinUrl: '',
  maltUrl: '',
  workDocUrl: '',

  jobTarget: '',
  jobSearchStartedAt: '',

  initialDailyRate: undefined,
  signedDailyRate: undefined,

  mainBlocker: '',
  currentSituation: '',

  startedAt: '',
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
})

watch(
  client,
  (value) => {
    if (!value) {
      return
    }

    const savedClient = structuredClone(toRaw(value))

    Object.assign(form, {
      ...savedClient,

      email: savedClient.email ?? '',

      company: savedClient.company ?? '',

      notes: savedClient.notes ?? '',

      linkedinUrl: savedClient.linkedinUrl ?? '',

      maltUrl: savedClient.maltUrl ?? '',

      workDocUrl: savedClient.workDocUrl ?? '',

      jobTarget: savedClient.jobTarget ?? '',

      jobSearchStartedAt: savedClient.jobSearchStartedAt ?? '',

      initialDailyRate: savedClient.initialDailyRate ?? undefined,

      signedDailyRate: savedClient.signedDailyRate ?? undefined,

      mainBlocker: savedClient.mainBlocker ?? '',

      currentSituation: savedClient.currentSituation ?? '',

      startedAt: savedClient.startedAt ?? '',

      missionSignedAt: savedClient.missionSignedAt ?? '',

      coachingMeetingsCount: savedClient.coachingMeetingsCount ?? 0,

      opportunitiesCount: savedClient.opportunitiesCount ?? 0,

      missionSigned: savedClient.missionSigned ?? false,

      checklist: {
        positioningOffer: savedClient.checklist?.positioningOffer ?? false,

        maltProfile: savedClient.checklist?.maltProfile ?? false,

        linkedinProfile: savedClient.checklist?.linkedinProfile ?? false,

        skillsPortfolio: savedClient.checklist?.skillsPortfolio ?? false,

        prospecting: savedClient.checklist?.prospecting ?? false,

        content: savedClient.checklist?.content ?? false,

        interview: savedClient.checklist?.interview ?? false,

        negotiation: savedClient.checklist?.negotiation ?? false,
      },
    })
  },
  {
    immediate: true,
  },
)

watch(
  () => form.missionSigned,
  (signed) => {
    if (!signed) {
      form.missionSignedAt = ''
      form.signedDailyRate = undefined
    }
  },
)

const completedSteps = computed(() => {
  return Object.values(form.checklist).filter(Boolean).length
})

const totalSteps = computed(() => {
  return Object.values(form.checklist).length
})

const progress = computed(() => {
  if (totalSteps.value === 0) {
    return 0
  }

  return Math.round((completedSteps.value / totalSteps.value) * 100)
})

const daysToMission = computed(() => {
  if (!form.startedAt || !form.missionSignedAt) {
    return null
  }

  const start = new Date(`${form.startedAt}T00:00:00`)

  const signed = new Date(`${form.missionSignedAt}T00:00:00`)

  const difference = signed.getTime() - start.getTime()

  if (difference < 0) {
    return null
  }

  return Math.round(difference / (1000 * 60 * 60 * 24))
})

async function saveClient() {
  try {
    await clientsStore.updateClient(structuredClone(toRaw(form)))

    await router.push({
      name: 'clients',
    })
  } catch (error) {
    console.error('Erreur lors de la mise à jour du client :', error)
  }
}

function openDeleteModal() {
  showDeleteModal.value = true
}

function closeDeleteModal() {
  showDeleteModal.value = false
}

async function deleteClient() {
  const clientId = String(route.params.clientId)

  try {
    await clientsStore.deleteClient(clientId)

    showDeleteModal.value = false

    await router.push({
      name: 'clients',
    })
  } catch (error) {
    console.error('Erreur lors de la suppression du client :', error)
  }
}
</script>

<template>
  <BaseContainer size="default">
    <div v-if="client">
      <RouterLink
        to="/clients"
        class="text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500"
      >
        ← Retour aux clients
      </RouterLink>

      <header class="mt-8 border-b border-zinc-200 pb-8">
        <p class="text-sm font-semibold text-fuchsia-600">Suivi client</p>

        <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950">
          {{ form.firstName }}
          {{ form.lastName }}
        </h1>

        <p v-if="form.jobTarget" class="mt-2 text-zinc-600">
          {{ form.jobTarget }}
        </p>

        <div class="mt-6 max-w-xl">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-zinc-700"> Progression </span>

            <span class="text-sm font-semibold text-zinc-950"> {{ progress }} % </span>
          </div>

          <div class="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200">
            <div
              class="h-full rounded-full bg-fuchsia-600 transition-all"
              :style="{
                width: `${progress}%`,
              }"
            />
          </div>

          <p class="mt-2 text-xs text-zinc-500">
            {{ completedSteps }} /
            {{ totalSteps }}
            étapes terminées
          </p>
        </div>
      </header>

      <!-- Métriques -->
      <section class="mt-8">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-2xl border border-zinc-200 bg-white p-5">
            <p class="text-sm font-medium text-zinc-500">Opportunités</p>

            <p class="mt-2 text-3xl font-bold text-zinc-950">
              {{ form.opportunitiesCount }}
            </p>
          </div>

          <div class="rounded-2xl border border-zinc-200 bg-white p-5">
            <p class="text-sm font-medium text-zinc-500">RDV coaching</p>

            <p class="mt-2 text-3xl font-bold text-zinc-950">
              {{ form.coachingMeetingsCount }}
            </p>
          </div>

          <div class="rounded-2xl border border-zinc-200 bg-white p-5">
            <p class="text-sm font-medium text-zinc-500">Mission</p>

            <p
              class="mt-2 text-lg font-bold"
              :class="form.missionSigned ? 'text-emerald-600' : 'text-zinc-950'"
            >
              {{ form.missionSigned ? 'Signée' : 'Pas encore' }}
            </p>
          </div>

          <div class="rounded-2xl border border-zinc-200 bg-white p-5">
            <p class="text-sm font-medium text-zinc-500">Temps avant mission</p>

            <p v-if="daysToMission !== null" class="mt-2 text-3xl font-bold text-zinc-950">
              {{ daysToMission }}

              <span class="text-base font-medium text-zinc-500"> jours </span>
            </p>

            <p v-else class="mt-2 text-lg font-semibold text-zinc-400">—</p>
          </div>
        </div>
      </section>

      <!-- Liens utiles -->
      <section class="mt-6 rounded-2xl border border-fuchsia-100 bg-fuchsia-50/40 p-6">
        <div>
          <p class="text-sm font-semibold text-fuchsia-600">Accès rapide</p>

          <h2 class="mt-1 text-lg font-semibold text-zinc-950">Liens utiles</h2>

          <p class="mt-1 text-sm text-zinc-500">
            Les espaces que tu utilises pendant l'accompagnement.
          </p>
        </div>

        <div class="mt-6 grid gap-5 lg:grid-cols-3">
          <!-- LinkedIn -->
          <div class="rounded-xl border border-fuchsia-100 bg-white p-4">
            <label for="linkedin-url" class="text-sm font-semibold text-zinc-800"> LinkedIn </label>

            <input
              id="linkedin-url"
              v-model="form.linkedinUrl"
              type="url"
              placeholder="https://www.linkedin.com/in/..."
              class="mt-3 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
            />

            <a
              v-if="form.linkedinUrl"
              :href="form.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500"
            >
              Ouvrir LinkedIn ↗
            </a>
          </div>

          <!-- Malt -->
          <div class="rounded-xl border border-fuchsia-100 bg-white p-4">
            <label for="malt-url" class="text-sm font-semibold text-zinc-800"> Profil Malt </label>

            <input
              id="malt-url"
              v-model="form.maltUrl"
              type="url"
              placeholder="https://www.malt.fr/profile/..."
              class="mt-3 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
            />

            <a
              v-if="form.maltUrl"
              :href="form.maltUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500"
            >
              Ouvrir Malt ↗
            </a>
          </div>

          <!-- Google Docs -->
          <div class="rounded-xl border border-fuchsia-100 bg-white p-4">
            <label for="work-doc-url" class="text-sm font-semibold text-zinc-800">
              Google Docs
            </label>

            <input
              id="work-doc-url"
              v-model="form.workDocUrl"
              type="url"
              placeholder="https://docs.google.com/document/d/..."
              class="mt-3 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100"
            />

            <a
              v-if="form.workDocUrl"
              :href="form.workDocUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-500"
            >
              Ouvrir le document ↗
            </a>
          </div>
        </div>
      </section>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <!-- Informations -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Informations</h2>

          <div class="mt-6 space-y-5">
            <div>
              <label class="text-sm font-medium text-zinc-700"> Prénom </label>

              <input
                v-model="form.firstName"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Nom </label>

              <input
                v-model="form.lastName"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Email </label>

              <input
                v-model="form.email"
                type="email"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Entreprise </label>

              <input
                v-model="form.company"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Notes </label>

              <textarea
                v-model="form.notes"
                rows="5"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>
          </div>
        </section>

        <!-- Situation initiale -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Situation initiale</h2>

          <div class="mt-6 space-y-5">
            <div>
              <label class="text-sm font-medium text-zinc-700"> Mission recherchée </label>

              <input
                v-model="form.jobTarget"
                type="text"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Recherche depuis </label>

              <input
                v-model="form.jobSearchStartedAt"
                type="date"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> TJM initial </label>

              <input
                v-model.number="form.initialDailyRate"
                type="number"
                min="0"
                step="10"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Situation actuelle </label>

              <textarea
                v-model="form.currentSituation"
                rows="3"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Blocage principal </label>

              <textarea
                v-model="form.mainBlocker"
                rows="3"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>
          </div>
        </section>

        <!-- Suivi -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Suivi</h2>

          <div class="mt-6 space-y-5">
            <div>
              <label class="text-sm font-medium text-zinc-700"> Date de début </label>

              <input
                v-model="form.startedAt"
                type="date"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Rendez-vous coaching </label>

              <input
                v-model.number="form.coachingMeetingsCount"
                type="number"
                min="0"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-zinc-700"> Opportunités </label>

              <input
                v-model.number="form.opportunitiesCount"
                type="number"
                min="0"
                class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
              />
            </div>
          </div>
        </section>

        <!-- Résultat -->
        <section class="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 class="text-lg font-semibold text-zinc-950">Résultat</h2>

          <div class="mt-6 space-y-5">
            <label class="flex items-center gap-3 rounded-xl border border-zinc-200 p-4">
              <input
                v-model="form.missionSigned"
                type="checkbox"
                class="size-4 accent-fuchsia-600"
              />

              <span class="text-sm font-medium text-zinc-700"> Mission signée </span>
            </label>

            <template v-if="form.missionSigned">
              <div>
                <label class="text-sm font-medium text-zinc-700"> Date de signature </label>

                <input
                  v-model="form.missionSignedAt"
                  type="date"
                  class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                />
              </div>

              <div>
                <label class="text-sm font-medium text-zinc-700"> TJM signé </label>

                <input
                  v-model.number="form.signedDailyRate"
                  type="number"
                  min="0"
                  step="10"
                  class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                />
              </div>
            </template>
          </div>
        </section>
      </div>

      <!-- Checklist -->
      <section class="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Checklist d'accompagnement</h2>

        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.positioningOffer"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Positionnement / offre </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.maltProfile"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Profil Malt </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.linkedinProfile"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Profil LinkedIn </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.skillsPortfolio"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Dossier de compétences </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.prospecting"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Prospection </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.content"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Contenu </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.interview"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Entretien </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              v-model="form.checklist.negotiation"
              type="checkbox"
              class="size-4 accent-fuchsia-600"
            />

            <span class="text-sm text-zinc-700"> Négociation </span>
          </label>
        </div>
      </section>

      <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
        <button type="button" class="text-sm font-semibold text-red-600" @click="openDeleteModal">
          Supprimer le client
        </button>

        <BaseButton @click="saveClient"> Enregistrer </BaseButton>
      </div>
    </div>
  </BaseContainer>

  <Teleport to="body">
    <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button type="button" class="absolute inset-0 bg-black/40" @click="closeDeleteModal" />

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
            class="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white"
            @click="deleteClient"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
