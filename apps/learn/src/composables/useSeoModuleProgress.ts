import { computed, ref, watch, type Ref } from 'vue'

import { seoProgram } from '@/data/seoProgram'
import {
  completeSeoModule,
  loadSeoModuleProgress,
  reopenSeoModule,
} from '@/services/seoModuleProgress'

const legacyStoragePrefix = 'altruisme-learn-seo-modules'
const knownModuleIds = new Set(seoProgram.map((module) => module.id))

function legacyStorageKey(userId: string) {
  return `${legacyStoragePrefix}:${userId}`
}

function readLegacyProgress(userId: string): string[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(legacyStorageKey(userId)) ?? '[]')
    return Array.isArray(stored)
      ? [
          ...new Set(
            stored.filter((id): id is string => typeof id === 'string' && knownModuleIds.has(id)),
          ),
        ]
      : []
  } catch {
    return []
  }
}

export function useSeoModuleProgress(userId: Readonly<Ref<string | undefined>>) {
  const completedModuleIds = ref<string[]>([])
  const savingModuleIds = ref<string[]>([])
  const loading = ref(false)
  const error = ref('')
  let generation = 0

  async function reload() {
    const id = userId.value
    const currentGeneration = ++generation
    completedModuleIds.value = []
    savingModuleIds.value = []
    error.value = ''
    loading.value = Boolean(id)
    if (!id) return

    try {
      const serverIds = (await loadSeoModuleProgress(id)).filter((moduleId) =>
        knownModuleIds.has(moduleId),
      )
      const legacyIds = readLegacyProgress(id)
      const missingIds = legacyIds.filter((moduleId) => !serverIds.includes(moduleId))
      await Promise.all(missingIds.map((moduleId) => completeSeoModule(id, moduleId)))
      if (currentGeneration !== generation) return

      completedModuleIds.value = [...new Set([...serverIds, ...legacyIds])]
      // Remove the local copy only after every completion has been saved remotely.
      try {
        localStorage.removeItem(legacyStorageKey(id))
      } catch {
        // A blocked browser store must not prevent server-backed progress.
      }
    } catch {
      if (currentGeneration !== generation) return
      error.value = 'Impossible de charger ta progression. Réessaie.'
    } finally {
      if (currentGeneration === generation) loading.value = false
    }
  }

  watch(
    userId,
    () => {
      void reload()
    },
    { immediate: true },
  )

  const completedCount = computed(() => completedModuleIds.value.length)
  const percentage = computed(() => Math.round((completedCount.value / seoProgram.length) * 100))

  function isCompleted(moduleId: string) {
    return completedModuleIds.value.includes(moduleId)
  }

  function isSaving(moduleId: string) {
    return savingModuleIds.value.includes(moduleId)
  }

  async function toggleCompleted(moduleId: string): Promise<boolean> {
    const id = userId.value
    if (!id || loading.value || error.value || !knownModuleIds.has(moduleId) || isSaving(moduleId))
      return false

    const currentGeneration = generation
    const wasCompleted = isCompleted(moduleId)
    savingModuleIds.value = [...savingModuleIds.value, moduleId]
    completedModuleIds.value = wasCompleted
      ? completedModuleIds.value.filter((item) => item !== moduleId)
      : [...completedModuleIds.value, moduleId]

    try {
      if (wasCompleted) await reopenSeoModule(id, moduleId)
      else await completeSeoModule(id, moduleId)
      return true
    } catch {
      if (currentGeneration === generation) {
        completedModuleIds.value = wasCompleted
          ? [...completedModuleIds.value, moduleId]
          : completedModuleIds.value.filter((item) => item !== moduleId)
        error.value = "Impossible d'enregistrer ta progression. Réessaie."
      }
      return false
    } finally {
      if (currentGeneration === generation) {
        savingModuleIds.value = savingModuleIds.value.filter((item) => item !== moduleId)
      }
    }
  }

  return {
    completedModuleIds,
    completedCount,
    percentage,
    loading,
    error,
    isCompleted,
    isSaving,
    reload,
    toggleCompleted,
  }
}
