import { computed, ref, watch, type Ref } from 'vue'

import { seoProgram } from '@/data/seoProgram'

const storagePrefix = 'altruisme-learn-seo-modules'
const knownModuleIds = new Set(seoProgram.map((module) => module.id))

function storageKey(userId: string) {
  return `${storagePrefix}:${userId}`
}

function loadCompletedModules(userId: string): string[] {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey(userId)) ?? '[]') as unknown
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

  watch(
    userId,
    (id) => {
      completedModuleIds.value = id ? loadCompletedModules(id) : []
    },
    { immediate: true },
  )

  const completedCount = computed(() => completedModuleIds.value.length)
  const percentage = computed(() => Math.round((completedCount.value / seoProgram.length) * 100))

  function isCompleted(moduleId: string) {
    return completedModuleIds.value.includes(moduleId)
  }

  function toggleCompleted(moduleId: string): boolean {
    const id = userId.value
    if (!id || !knownModuleIds.has(moduleId)) return false

    const updated = isCompleted(moduleId)
      ? completedModuleIds.value.filter((item) => item !== moduleId)
      : [...completedModuleIds.value, moduleId]

    try {
      localStorage.setItem(storageKey(id), JSON.stringify(updated))
      completedModuleIds.value = updated
      return true
    } catch {
      return false
    }
  }

  return { completedCount, percentage, isCompleted, toggleCompleted }
}
