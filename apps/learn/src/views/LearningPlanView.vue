<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import PlanActionItem, {
  type DisplayPlanAction,
} from '@/components/learningPlan/PlanActionItem.vue'
import { isSeoLessonAvailable } from '@/config/features'
import { getLearningPlanCourse } from '@/data/learningPlanCourses'
import {
  createPersonalAction,
  deletePersonalAction,
  loadLearningPlan,
  updatePersonalAction,
  savePresetStatus,
} from '@/services/learningPlan'
import { useAuthStore } from '@/stores/auth'
import type { PersonalPlanAction, PlanStatus } from '@/types/learningPlan'

type PlanFilter = 'all' | PlanStatus

const route = useRoute()
const authStore = useAuthStore()
const course = computed(() => getLearningPlanCourse(String(route.meta.courseSlug)))
const newActionCount = computed(
  () => course.value?.actions.filter((action) => action.isNew).length ?? 0,
)

const loading = ref(true)
const loadError = ref('')
const saveError = ref('')
const feedback = ref('')
const presetStatuses = ref<Record<string, PlanStatus>>({})
const personalActions = ref<PersonalPlanAction[]>([])
const pendingIds = ref<string[]>([])
const activeFilter = ref<PlanFilter>('all')
const showForm = ref(false)
const formBusy = ref(false)
const editingId = ref<string | null>(null)
const form = reactive({ title: '', description: '', moduleId: '' })
let loadSequence = 0

const actions = computed<DisplayPlanAction[]>(() => {
  const presets: DisplayPlanAction[] = (course.value?.actions ?? [])
    .map((action) => ({
      id: action.key,
      title: action.title,
      description: action.description,
      completionCriterion: action.completionCriterion,
      lessonId: action.lessonId,
      status: presetStatuses.value[action.key] ?? 'todo',
      personal: false,
      isNew: Boolean(action.isNew),
      order: action.order,
      moduleId: action.moduleId,
    }))
    .sort((a, b) => a.order - b.order)

  const personal: DisplayPlanAction[] = personalActions.value.map((action, index) => ({
    id: action.id,
    title: action.title,
    description: action.description,
    completionCriterion: null,
    lessonId: null,
    status: action.status,
    personal: true,
    isNew: false,
    order: presets.length + index + 1,
    moduleId: action.moduleId,
  }))

  return [...presets, ...personal]
})

const counts = computed(() => ({
  all: actions.value.length,
  todo: actions.value.filter((action) => action.status === 'todo').length,
  in_progress: actions.value.filter((action) => action.status === 'in_progress').length,
  done: actions.value.filter((action) => action.status === 'done').length,
}))

const percentage = computed(() =>
  counts.value.all ? Math.round((counts.value.done / counts.value.all) * 100) : 0,
)

const filters: { value: PlanFilter; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'todo', label: 'À faire' },
  { value: 'in_progress', label: 'En cours' },
  { value: 'done', label: 'Terminées' },
]

const visibleActions = computed(() =>
  activeFilter.value === 'all'
    ? actions.value
    : actions.value.filter((action) => action.status === activeFilter.value),
)

const groups = computed(() => {
  const moduleGroups = (course.value?.modules ?? []).map((module) => ({
    id: module.id,
    title: module.title,
    number: module.number,
    actions: visibleActions.value.filter((action) => action.moduleId === module.id),
  }))

  const knownModuleIds = new Set((course.value?.modules ?? []).map((module) => module.id))
  const withoutModule = visibleActions.value.filter(
    (action) => !action.moduleId || !knownModuleIds.has(action.moduleId),
  )
  if (withoutModule.length) {
    moduleGroups.push({
      id: 'personal',
      title: 'Mes autres actions',
      number: 0,
      actions: withoutModule,
    })
  }

  return moduleGroups.filter((group) => group.actions.length)
})

async function load() {
  const currentCourse = course.value
  const userId = authStore.user?.id
  const sequence = ++loadSequence

  if (!currentCourse || !userId) {
    loading.value = false
    loadError.value = 'Cette formation est indisponible.'
    return
  }

  loading.value = true
  loadError.value = ''
  saveError.value = ''
  feedback.value = ''
  pendingIds.value = []
  formBusy.value = false
  resetForm()
  try {
    const snapshot = await loadLearningPlan(userId, currentCourse.slug)
    if (sequence !== loadSequence) return
    presetStatuses.value = snapshot.statuses
    personalActions.value = snapshot.personalActions
  } catch {
    if (sequence !== loadSequence) return
    loadError.value = "Impossible de charger ton plan d'action. Réessaie dans un instant."
  } finally {
    if (sequence === loadSequence) loading.value = false
  }
}

watch([course, () => authStore.user?.id], load, { immediate: true })

watch(
  [loading, () => route.query.action],
  async ([isLoading, actionKey]) => {
    if (isLoading || typeof actionKey !== 'string' || !actionKey) return
    activeFilter.value = 'all'
    await nextTick()
    document.getElementById(`plan-action-${actionKey}`)?.scrollIntoView({ block: 'center' })
  },
  { immediate: true },
)

async function changeStatus(action: DisplayPlanAction, status: PlanStatus) {
  const currentCourse = course.value
  const userId = authStore.user?.id
  if (
    !currentCourse ||
    !userId ||
    action.status === status ||
    pendingIds.value.includes(action.id)
  ) {
    return
  }

  const previousStatus = action.status
  const sequence = loadSequence
  saveError.value = ''
  feedback.value = ''
  pendingIds.value = [...pendingIds.value, action.id]

  if (action.personal) {
    personalActions.value = personalActions.value.map((item) =>
      item.id === action.id ? { ...item, status } : item,
    )
  } else {
    presetStatuses.value = { ...presetStatuses.value, [action.id]: status }
  }

  try {
    if (action.personal) {
      const saved = await updatePersonalAction(userId, currentCourse.slug, action.id, { status })
      if (sequence !== loadSequence) return
      personalActions.value = personalActions.value.map((item) =>
        item.id === action.id ? saved : item,
      )
    } else {
      await savePresetStatus(userId, currentCourse.slug, action.id, status)
      if (sequence !== loadSequence) return
    }
    feedback.value = 'Statut enregistré.'
  } catch {
    if (sequence !== loadSequence) return
    if (action.personal) {
      personalActions.value = personalActions.value.map((item) =>
        item.id === action.id ? { ...item, status: previousStatus } : item,
      )
    } else {
      presetStatuses.value = { ...presetStatuses.value, [action.id]: previousStatus }
    }
    saveError.value = "Le statut n'a pas été enregistré. Réessaie."
  } finally {
    if (sequence === loadSequence) {
      pendingIds.value = pendingIds.value.filter((id) => id !== action.id)
    }
  }
}

function resetForm() {
  showForm.value = false
  editingId.value = null
  form.title = ''
  form.description = ''
  form.moduleId = ''
}

function openNewForm() {
  resetForm()
  saveError.value = ''
  showForm.value = true
  nextTick(() => document.getElementById('personal-action-title')?.focus())
}

function openEditForm(action: DisplayPlanAction) {
  if (!action.personal) return
  editingId.value = action.id
  form.title = action.title
  form.description = action.description ?? ''
  form.moduleId = action.moduleId ?? ''
  saveError.value = ''
  showForm.value = true
  nextTick(() => document.getElementById('personal-action-title')?.focus())
}

async function submitForm() {
  const currentCourse = course.value
  const userId = authStore.user?.id
  if (!currentCourse || !userId || formBusy.value) return

  const title = form.title.trim()
  if (!title) {
    saveError.value = 'Indique un titre pour ton action.'
    return
  }

  const input = {
    title,
    description: form.description.trim() || null,
    moduleId: form.moduleId || null,
  }

  formBusy.value = true
  const sequence = loadSequence
  saveError.value = ''
  feedback.value = ''
  try {
    if (editingId.value) {
      const saved = await updatePersonalAction(userId, currentCourse.slug, editingId.value, input)
      if (sequence !== loadSequence) return
      personalActions.value = personalActions.value.map((item) =>
        item.id === saved.id ? saved : item,
      )
      feedback.value = 'Action modifiée.'
    } else {
      const created = await createPersonalAction(userId, currentCourse.slug, input)
      if (sequence !== loadSequence) return
      personalActions.value = [...personalActions.value, created]
      feedback.value = 'Action ajoutée.'
    }
    resetForm()
  } catch {
    if (sequence !== loadSequence) return
    saveError.value = "L'action n'a pas été enregistrée. Réessaie."
  } finally {
    if (sequence === loadSequence) formBusy.value = false
  }
}

async function removeAction(action: DisplayPlanAction) {
  const currentCourse = course.value
  const userId = authStore.user?.id
  if (!action.personal || !currentCourse || !userId || pendingIds.value.includes(action.id)) return

  pendingIds.value = [...pendingIds.value, action.id]
  const sequence = loadSequence
  saveError.value = ''
  feedback.value = ''
  try {
    await deletePersonalAction(userId, currentCourse.slug, action.id)
    if (sequence !== loadSequence) return
    personalActions.value = personalActions.value.filter((item) => item.id !== action.id)
    feedback.value = 'Action supprimée.'
  } catch {
    if (sequence !== loadSequence) return
    saveError.value = "L'action n'a pas pu être supprimée. Réessaie."
  } finally {
    if (sequence === loadSequence) {
      pendingIds.value = pendingIds.value.filter((id) => id !== action.id)
    }
  }
}
</script>

<template>
  <BaseContainer>
    <div class="mx-auto max-w-5xl">
      <header
        class="rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Altruisme Learn / {{ course?.title }}
        </p>
        <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Mon plan d'action
        </h1>
        <p class="mt-4 max-w-3xl text-sm leading-7 text-ink-soft sm:text-base">
          {{ course?.planDescription }}
        </p>
        <div
          class="mt-8 grid gap-2 sm:gap-3"
          :class="newActionCount ? 'grid-cols-3' : 'grid-cols-2'"
        >
          <div class="rounded-2xl border border-white/80 bg-white/70 p-3 sm:p-5">
            <p class="text-2xl font-semibold text-[#315960] sm:text-3xl">
              {{ course?.modules.length ?? 0 }}
            </p>
            <p class="mt-1 text-xs font-medium text-muted sm:text-sm">Modules</p>
          </div>
          <div class="rounded-2xl border border-white/80 bg-white/70 p-3 sm:p-5">
            <p class="text-2xl font-semibold text-[#315960] sm:text-3xl">
              {{ course?.actions.length ?? 0 }}
            </p>
            <p class="mt-1 text-xs font-medium text-muted sm:text-sm">Actions</p>
          </div>
          <div
            v-if="newActionCount"
            class="rounded-2xl border border-white/80 bg-white/70 p-3 sm:p-5"
          >
            <p class="text-2xl font-semibold text-[#315960] sm:text-3xl">{{ newActionCount }}</p>
            <p class="mt-1 text-xs font-medium text-muted sm:text-sm">Nouvelles actions</p>
          </div>
        </div>
      </header>

      <div
        v-if="loading"
        class="mt-8 rounded-2xl border border-petrol/15 bg-white p-8 text-muted"
        role="status"
      >
        Chargement de ton plan d'action…
      </div>

      <div v-else-if="loadError" class="mt-8 rounded-2xl border border-petrol/15 bg-white p-8">
        <p role="alert" class="text-ink-soft">{{ loadError }}</p>
        <button
          type="button"
          class="learn-button-primary mt-4 rounded-xl px-4 py-2.5 text-sm font-semibold"
          @click="load"
        >
          Réessayer
        </button>
      </div>

      <template v-else>
        <section
          class="mt-8 rounded-2xl border border-petrol/15 bg-white p-6 shadow-sm sm:p-8"
          aria-label="Progression du plan"
        >
          <div class="flex items-baseline justify-between gap-4">
            <p class="text-lg font-semibold text-ink">
              {{ counts.done }} action{{ counts.done > 1 ? 's' : '' }} terminée{{
                counts.done > 1 ? 's' : ''
              }}
              sur {{ counts.all }}
            </p>
            <span class="text-sm font-semibold text-petrol-dark">{{ percentage }} %</span>
          </div>
          <div
            class="mt-4 h-2 overflow-hidden rounded-full bg-mist"
            role="progressbar"
            :aria-valuenow="counts.done"
            aria-valuemin="0"
            :aria-valuemax="counts.all"
            aria-label="Actions terminées"
          >
            <div
              class="h-full rounded-full bg-petrol transition-all"
              :style="{ width: `${percentage}%` }"
            />
          </div>
          <p class="mt-3 text-xs leading-5 text-muted">
            Les actions personnelles comptent aussi dans cette progression. Les leçons et les
            actions avancent séparément.
          </p>
          <p
            v-if="counts.all && counts.done === counts.all"
            class="mt-3 text-sm font-medium text-petrol-dark"
          >
            Bravo ! Tu as terminé toutes les actions de ce plan.
          </p>
        </section>

        <div class="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrer les actions">
            <button
              v-for="filter in filters"
              :key="filter.value"
              type="button"
              :aria-pressed="activeFilter === filter.value"
              class="rounded-xl border px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-petrol"
              :class="
                activeFilter === filter.value
                  ? 'border-petrol/30 bg-mist text-petrol-dark'
                  : 'border-petrol/15 bg-white text-muted hover:border-petrol/30'
              "
              @click="activeFilter = filter.value"
            >
              {{ filter.label }} <span class="ml-1 text-xs">{{ counts[filter.value] }}</span>
            </button>
          </div>
          <button
            type="button"
            class="learn-button-primary w-fit rounded-xl px-5 py-3 text-sm font-semibold"
            @click="openNewForm"
          >
            + Ajouter une action
          </button>
        </div>

        <p v-if="saveError" class="mt-4 text-sm text-rose-700" role="alert">{{ saveError }}</p>
        <p v-if="feedback" class="mt-4 text-sm text-petrol-dark" role="status">{{ feedback }}</p>

        <form
          v-if="showForm"
          class="mt-6 space-y-5 rounded-2xl border border-petrol/20 bg-white p-6 shadow-sm"
          @submit.prevent="submitForm"
        >
          <h2 class="text-xl font-semibold text-ink">
            {{ editingId ? 'Modifier mon action' : 'Ajouter une action' }}
          </h2>
          <div>
            <label for="personal-action-title" class="mb-2 block text-sm font-medium text-ink"
              >Titre <span aria-hidden="true">*</span></label
            >
            <input
              id="personal-action-title"
              v-model="form.title"
              required
              maxlength="200"
              type="text"
              class="w-full rounded-xl border border-petrol/20 bg-sand-light px-4 py-3 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-petrol"
            />
          </div>
          <div>
            <label for="personal-action-description" class="mb-2 block text-sm font-medium text-ink"
              >Description <span class="text-muted">(facultative)</span></label
            >
            <textarea
              id="personal-action-description"
              v-model="form.description"
              maxlength="4000"
              rows="3"
              class="w-full rounded-xl border border-petrol/20 bg-sand-light px-4 py-3 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-petrol"
            />
          </div>
          <div>
            <label for="personal-action-module" class="mb-2 block text-sm font-medium text-ink"
              >Module <span class="text-muted">(facultatif)</span></label
            >
            <select
              id="personal-action-module"
              v-model="form.moduleId"
              class="w-full rounded-xl border border-petrol/20 bg-sand-light px-4 py-3 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-petrol"
            >
              <option value="">Sans module</option>
              <option v-for="module in course?.modules" :key="module.id" :value="module.id">
                {{ String(module.number).padStart(2, '0') }} — {{ module.title }}
              </option>
            </select>
          </div>
          <div class="flex flex-wrap gap-3">
            <button
              type="submit"
              :disabled="formBusy"
              class="learn-button-primary rounded-xl px-5 py-3 text-sm font-semibold disabled:opacity-60"
            >
              {{
                formBusy
                  ? 'Enregistrement…'
                  : editingId
                    ? 'Enregistrer les modifications'
                    : 'Ajouter l’action'
              }}
            </button>
            <button
              type="button"
              class="rounded-xl border border-petrol/20 px-5 py-3 text-sm font-medium text-petrol-dark hover:bg-mist"
              @click="resetForm"
            >
              Annuler
            </button>
          </div>
        </form>

        <p
          v-if="!counts.all"
          class="mt-8 rounded-2xl border border-petrol/15 bg-white p-8 text-muted"
        >
          Ton plan d'action est encore vide.
        </p>
        <p
          v-else-if="!visibleActions.length"
          class="mt-8 rounded-2xl border border-petrol/15 bg-white p-8 text-muted"
        >
          Aucune action à afficher pour le moment.
        </p>

        <section
          v-for="group in groups"
          :key="group.id"
          class="mt-10"
          :aria-labelledby="`plan-module-${group.id}`"
        >
          <div class="mb-4 flex flex-wrap items-baseline gap-3">
            <span v-if="group.number" class="text-2xl font-semibold text-[#3d6970]">{{
              String(group.number).padStart(2, '0')
            }}</span>
            <h2
              :id="`plan-module-${group.id}`"
              class="text-xl font-semibold tracking-tight text-ink"
            >
              {{ group.title }}
            </h2>
            <span class="text-sm text-muted"
              >{{ group.actions.length }} action{{ group.actions.length > 1 ? 's' : '' }}</span
            >
          </div>
          <div class="grid gap-3">
            <PlanActionItem
              v-for="action in group.actions"
              :key="action.id"
              :action="action"
              :course-slug="course?.slug ?? ''"
              :busy="pendingIds.includes(action.id)"
              :highlighted="route.query.action === action.id"
              :lesson-available="Boolean(action.lessonId && isSeoLessonAvailable(action.lessonId))"
              @status-change="changeStatus(action, $event)"
              @edit="openEditForm(action)"
              @delete="removeAction(action)"
            />
          </div>
        </section>
      </template>
    </div>
  </BaseContainer>
</template>
