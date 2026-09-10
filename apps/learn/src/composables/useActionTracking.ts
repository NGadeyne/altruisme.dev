import { computed, ref } from 'vue'

import type { ActionType, DailyActionLog } from '@/types/actionTracking'

const STORAGE_KEY = 'acquisition-learn-action-tracking'

function getLocalDate(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function createEmptyLog(date: string): DailyActionLog {
  return {
    date,
    prospecting: 0,
    followUps: 0,
    applications: 0,
    content: 0,
    conversations: 0,
    updatedAt: new Date().toISOString(),
  }
}

function loadLogs(): DailyActionLog[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      return []
    }

    const parsed = JSON.parse(stored)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const logs = ref<DailyActionLog[]>(loadLogs())

function saveLogs() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs.value))
}

function getOrCreateLog(date: string) {
  let log = logs.value.find((item) => item.date === date)

  if (!log) {
    log = createEmptyLog(date)
    logs.value.push(log)
  }

  return log
}

export function useActionTracking() {
  const today = computed(() => getLocalDate())

  const todayLog = computed(() => {
    return logs.value.find((item) => item.date === today.value) ?? createEmptyLog(today.value)
  })

  function incrementAction(type: ActionType, date = today.value) {
    const log = getOrCreateLog(date)
    log[type] += 1
    log.updatedAt = new Date().toISOString()
    saveLogs()
  }

  function decrementAction(type: ActionType, date = today.value) {
    const log = getOrCreateLog(date)
    log[type] = Math.max(0, log[type] - 1)
    log.updatedAt = new Date().toISOString()
    saveLogs()
  }

  function setActionCount(type: ActionType, value: number, date = today.value) {
    const log = getOrCreateLog(date)
    log[type] = Math.max(0, Math.round(value || 0))
    log.updatedAt = new Date().toISOString()
    saveLogs()
  }

  function setNote(note: string, date = today.value) {
    const log = getOrCreateLog(date)
    log.note = note.trim() || undefined
    log.updatedAt = new Date().toISOString()
    saveLogs()
  }

  function getLog(date: string) {
    return logs.value.find((item) => item.date === date) ?? createEmptyLog(date)
  }

  return {
    logs,
    today,
    todayLog,
    incrementAction,
    decrementAction,
    setActionCount,
    setNote,
    getLog,
  }
}
