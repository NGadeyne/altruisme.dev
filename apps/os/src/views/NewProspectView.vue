<script setup lang="ts">
import { computed, reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useUnsavedChanges } from '@/composables/useUnsavedChanges'

import { useProspectsStore } from '@/stores/prospects'
import { useToastStore } from '@/stores/toast'
import type { Prospect } from '@/types/prospect'

const router = useRouter()
const prospectsStore = useProspectsStore()
const toastStore = useToastStore()

const saving = ref(false)
const errorMessage = ref('')

const today = new Date().toISOString().slice(0, 10)

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

  meetingAt: today,
  nextAction: '',
  nextActionAt: '',

  notes: '',
  createdAt: today,
})

const initialSnapshot = JSON.stringify(toRaw(form))
const allowNavigation = ref(false)
const isDirty = computed(() => JSON.stringify(toRaw(form)) !== initialSnapshot && !allowNavigation.value)
useUnsavedChanges(isDirty)

function createSlug() {
  return `${form.firstName}-${form.lastName}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function saveProspect() {
  if (!form.firstName.trim() || !form.lastName.trim() || saving.value) {
    return
  }

  saving.value = true
  errorMessage.value = ''

  try {
    form.id = createSlug()

    await prospectsStore.addProspect(structuredClone(toRaw(form)))
    allowNavigation.value = true
    toastStore.show('Prospect ajouté ✓')

    await router.push({
      name: 'prospects',
    })
  } catch (error) {
    console.error('Erreur lors de la création du prospect :', error)

    errorMessage.value = 'Impossible d’ajouter le prospect. Réessaie dans un instant.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <BaseContainer size="default">
    <RouterLink to="/prospects" class="text-sm font-semibold text-fuchsia-600">
      ← Retour aux prospects
    </RouterLink>

    <header class="mt-8 border-b border-zinc-200 pb-8">
      <p class="text-sm font-semibold text-fuchsia-600">Nouveau prospect</p>

      <h1 class="mt-2 text-3xl font-bold text-zinc-950">Ajouter un prospect</h1>

      <p class="mt-2 text-zinc-600">Ajoute une personne ayant réservé un rendez-vous.</p>
    </header>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">
      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Coordonnées</h2>

        <div class="mt-6 space-y-5">
          <input
            v-model="form.firstName"
            type="text"
            placeholder="Prénom *"
            class="w-full rounded-xl border border-zinc-300 px-4 py-3"
          />

          <input
            v-model="form.lastName"
            type="text"
            placeholder="Nom *"
            class="w-full rounded-xl border border-zinc-300 px-4 py-3"
          />

          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full rounded-xl border border-zinc-300 px-4 py-3"
          />

          <input
            v-model="form.company"
            type="text"
            placeholder="Entreprise"
            class="w-full rounded-xl border border-zinc-300 px-4 py-3"
          />

          <input
            v-model="form.linkedinUrl"
            type="url"
            placeholder="URL LinkedIn"
            class="w-full rounded-xl border border-zinc-300 px-4 py-3"
          />
        </div>
      </section>

      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Recherche de mission</h2>

        <div class="mt-6 space-y-5">
          <div>
            <label class="text-sm font-medium text-zinc-700"> Mission recherchée </label>

            <input
              v-model="form.jobTarget"
              type="text"
              placeholder="Ex : DevOps, Product Manager..."
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
            <label class="text-sm font-medium text-zinc-700"> TJM actuel </label>

            <input
              v-model.number="form.dailyRate"
              type="number"
              min="0"
              step="10"
              placeholder="Ex : 550"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Situation actuelle </label>

            <textarea
              v-model="form.currentSituation"
              rows="3"
              placeholder="Ex : fin de mission, intercontrat..."
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Plus gros blocage </label>

            <textarea
              v-model="form.mainBlocker"
              rows="3"
              placeholder="Ex : peu de réponses, mauvais positionnement..."
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Qualification</h2>

        <div class="mt-6 space-y-5">
          <div>
            <label class="text-sm font-medium text-zinc-700"> Orientation </label>

            <select
              v-model="form.qualification"
              class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3"
            >
              <option :value="undefined">À qualifier</option>

              <option value="coaching">Accompagnement</option>

              <option value="online-training">Formation en ligne</option>

              <option value="later">À recontacter plus tard</option>

              <option value="not-qualified">Non qualifié</option>
            </select>
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Urgence </label>

            <select
              v-model="form.urgency"
              class="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3"
            >
              <option value="low">Faible</option>
              <option value="medium">Moyenne</option>
              <option value="high">Forte</option>
            </select>
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Frein / objection </label>

            <textarea
              v-model="form.salesObjection"
              rows="3"
              placeholder="Prix, timing, hésitation..."
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 class="text-lg font-semibold text-zinc-950">Suivi</h2>

        <div class="mt-6 space-y-5">
          <div>
            <label class="text-sm font-medium text-zinc-700"> Date du rendez-vous </label>

            <input
              v-model="form.meetingAt"
              type="date"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Prochaine action </label>

            <input
              v-model="form.nextAction"
              type="text"
              placeholder="Ex : relancer après ses vacances"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Date de prochaine action </label>

            <input
              v-model="form.nextActionAt"
              type="date"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-zinc-700"> Notes du rendez-vous </label>

            <textarea
              v-model="form.notes"
              rows="6"
              class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
            />
          </div>
        </div>
      </section>
    </div>

    <div
      v-if="errorMessage"
      class="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
    >
      {{ errorMessage }}
    </div>

    <div class="mt-8 flex justify-end">
      <BaseButton :disabled="saving" @click="saveProspect">
        {{ saving ? 'Ajout…' : 'Ajouter le prospect' }}
      </BaseButton>
    </div>
  </BaseContainer>
</template>
