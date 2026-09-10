<script setup lang="ts">
import { computed, reactive, ref, toRaw, watch } from 'vue'
import { useRouter } from 'vue-router'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useUnsavedChanges } from '@/composables/useUnsavedChanges'

import { useClientsStore } from '@/stores/clients'
import { useToastStore } from '@/stores/toast'
import type { Client } from '@/types/client'

const router = useRouter()
const clientsStore = useClientsStore()
const toastStore = useToastStore()
const saving = ref(false)
const errorMessage = ref('')

const today = new Date().toISOString().slice(0, 10)

const form = reactive<Client>({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  notes: '',

  jobTarget: '',
  jobSearchStartedAt: '',
  initialDailyRate: undefined,
  signedDailyRate: undefined,
  mainBlocker: '',
  currentSituation: '',

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
})

const initialSnapshot = JSON.stringify(toRaw(form))
const allowNavigation = ref(false)
const isDirty = computed(() => JSON.stringify(toRaw(form)) !== initialSnapshot && !allowNavigation.value)
useUnsavedChanges(isDirty)

watch(
  () => form.missionSigned,
  (signed) => {
    if (!signed) {
      form.missionSignedAt = ''
      form.signedDailyRate = undefined
    }
  },
)

function createSlug() {
  return `${form.firstName}-${form.lastName}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function saveClient() {
  if (!form.firstName.trim() || !form.lastName.trim() || saving.value) return

  saving.value = true
  errorMessage.value = ''
  form.id = createSlug()

  try {
    await clientsStore.addClient(structuredClone(toRaw(form)))
    allowNavigation.value = true
    toastStore.show('Client ajouté ✓')
    await router.push({ name: 'clients' })
  } catch (error) {
    console.error('Erreur lors de la création du client :', error)
    errorMessage.value = 'Impossible d’ajouter le client. Réessaie dans un instant.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <BaseContainer size="default">
    <RouterLink to="/clients" class="text-sm font-semibold text-fuchsia-600">
      ← Retour aux clients
    </RouterLink>

    <header class="mt-8 border-b border-zinc-200 pb-8">
      <p class="text-sm font-semibold text-fuchsia-600">Nouveau client</p>

      <h1 class="mt-2 text-3xl font-bold text-zinc-950">Ajouter un client</h1>

      <p class="mt-2 text-zinc-600">Ajoute un nouveau client à ton suivi.</p>
    </header>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">
      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Informations</h2>

        <div class="mt-6 space-y-5">
          <div>
            <label class="text-sm font-medium text-zinc-700"> Prénom * </label>

            <input
              v-model="form.firstName"
              type="text"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Nom * </label>

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

      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Situation initiale</h2>

        <div class="mt-6 space-y-5">
          <div>
            <label class="text-sm font-medium text-zinc-700"> Mission recherchée </label>

            <input
              v-model="form.jobTarget"
              type="text"
              placeholder="Ex : DevOps"
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

      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Accompagnement</h2>

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
            <label class="text-sm font-medium text-zinc-700">
              Nombre de rendez-vous coaching
            </label>

            <input
              v-model.number="form.coachingMeetingsCount"
              type="number"
              min="0"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Nombre d'opportunités </label>

            <input
              v-model.number="form.opportunitiesCount"
              type="number"
              min="0"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Résultat</h2>

        <div class="mt-6 space-y-5">
          <label class="flex items-center gap-3 rounded-xl border border-zinc-200 p-4">
            <input v-model="form.missionSigned" type="checkbox" class="size-4 accent-fuchsia-600" />

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

    <section class="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 class="text-lg font-semibold text-zinc-950">Checklist</h2>

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

    <div
      v-if="errorMessage"
      class="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
    >
      {{ errorMessage }}
    </div>

    <div class="mt-8 flex justify-end">
      <BaseButton :disabled="saving" @click="saveClient">
        {{ saving ? 'Ajout…' : 'Ajouter le client' }}
      </BaseButton>
    </div>
  </BaseContainer>
</template>
