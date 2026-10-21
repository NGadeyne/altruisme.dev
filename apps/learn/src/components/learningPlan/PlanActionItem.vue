<script setup lang="ts">
import type { PlanStatus } from '@/types/learningPlan'
import { getSeoLessonSlug } from '@/data/seoProgram'

export interface DisplayPlanAction {
  id: string
  title: string
  description: string | null
  completionCriterion: string | null
  lessonId: string | null
  status: PlanStatus
  personal: boolean
  isNew: boolean
  order: number
  moduleId: string | null
}

defineProps<{
  action: DisplayPlanAction
  courseSlug: string
  busy: boolean
  highlighted: boolean
  lessonAvailable: boolean
}>()

const emit = defineEmits<{
  statusChange: [status: PlanStatus]
  edit: []
  delete: []
}>()

const statuses: { value: PlanStatus; label: string }[] = [
  { value: 'todo', label: 'À faire' },
  { value: 'in_progress', label: 'En cours' },
  { value: 'done', label: 'Terminé' },
]

function onStatusChange(event: Event) {
  emit('statusChange', (event.target as HTMLSelectElement).value as PlanStatus)
}
</script>

<template>
  <article
    :id="`plan-action-${action.id}`"
    class="scroll-mt-24 rounded-2xl border bg-white p-5 shadow-sm transition sm:p-6"
    :class="highlighted ? 'border-petrol ring-2 ring-petrol/15' : 'border-petrol/15'"
  >
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div class="min-w-0">
        <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
          {{
            action.personal
              ? 'Action personnelle'
              : `Action ${String(action.order).padStart(2, '0')}`
          }}
        </p>
        <span
          v-if="action.isNew"
          class="mt-2 inline-flex rounded-full border border-petrol/20 bg-mist px-2.5 py-1 text-xs font-semibold text-petrol-dark"
        >
          Nouvelle action
        </span>
        <h3 class="mt-2 text-base font-semibold leading-6 text-ink sm:text-lg">
          {{ action.title }}
        </h3>
      </div>
      <div class="shrink-0">
        <label :for="`status-${action.id}`" class="sr-only">Statut de {{ action.title }}</label>
        <select
          :id="`status-${action.id}`"
          :value="action.status"
          :disabled="busy"
          class="min-h-10 w-full rounded-xl border border-petrol/20 bg-sand-light px-3 py-2 text-sm font-medium text-petrol-dark outline-none focus-visible:ring-2 focus-visible:ring-petrol disabled:opacity-60 sm:w-auto"
          @change="onStatusChange"
        >
          <option v-for="status in statuses" :key="status.value" :value="status.value">
            {{ status.label }}
          </option>
        </select>
        <p v-if="busy" class="mt-1 text-xs text-muted" role="status">Enregistrement…</p>
      </div>
    </div>

    <details :open="highlighted" class="mt-4 border-t border-petrol/10 pt-3">
      <summary
        class="w-fit cursor-pointer text-sm font-medium text-petrol-dark underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
      >
        Voir les détails
      </summary>
      <div class="mt-3 space-y-3 text-sm leading-6 text-muted">
        <p v-if="action.description">{{ action.description }}</p>
        <p v-if="action.completionCriterion">
          <span class="font-semibold text-ink-soft">C'est fait quand :</span>
          {{ action.completionCriterion }}
        </p>
        <RouterLink
          v-if="lessonAvailable && action.lessonId && courseSlug === 'seo'"
          :to="{
            name: 'seo-lesson',
            params: { lessonSlug: getSeoLessonSlug(action.lessonId) },
          }"
          class="inline-flex font-semibold text-petrol-dark underline-offset-4 hover:underline"
        >
          Voir la leçon associée →
        </RouterLink>
        <div v-if="action.personal" class="flex flex-wrap gap-4 pt-1">
          <button
            type="button"
            class="font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-petrol"
            @click="emit('edit')"
          >
            Modifier
          </button>
          <button
            type="button"
            :disabled="busy"
            class="font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-petrol disabled:opacity-50"
            @click="emit('delete')"
          >
            Supprimer
          </button>
        </div>
      </div>
    </details>
  </article>
</template>
