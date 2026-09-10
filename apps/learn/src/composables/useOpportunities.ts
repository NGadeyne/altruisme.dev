import { computed, ref } from 'vue'

import type {
  Opportunity,
  OpportunityFormData,
  OpportunityStatus,
} from '@/types/opportunity'

const STORAGE_KEY = 'acquisition-learn-opportunities'

function loadOpportunities(): Opportunity[] {
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

const opportunities = ref<Opportunity[]>(loadOpportunities())

function saveOpportunities() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(opportunities.value))
}

function createId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function useOpportunities() {
  const activeOpportunities = computed(() =>
    opportunities.value.filter(
      (opportunity) => opportunity.status !== 'won' && opportunity.status !== 'lost',
    ),
  )

  const conversationCount = computed(
    () => opportunities.value.filter((opportunity) => opportunity.status === 'conversation').length,
  )

  const interviewCount = computed(
    () => opportunities.value.filter((opportunity) => opportunity.status === 'interview').length,
  )

  const wonCount = computed(
    () => opportunities.value.filter((opportunity) => opportunity.status === 'won').length,
  )

  function addOpportunity(data: OpportunityFormData) {
    const now = new Date().toISOString()

    opportunities.value.unshift({
      id: createId(),
      company: data.company.trim(),
      role: data.role.trim() || undefined,
      source: data.source,
      status: data.status,
      nextAction: data.nextAction.trim() || undefined,
      nextActionDate: data.nextActionDate || undefined,
      notes: data.notes.trim() || undefined,
      createdAt: now,
      updatedAt: now,
    })

    saveOpportunities()
  }

  function updateOpportunity(id: string, data: OpportunityFormData) {
    const opportunity = opportunities.value.find((item) => item.id === id)

    if (!opportunity) {
      return
    }

    opportunity.company = data.company.trim()
    opportunity.role = data.role.trim() || undefined
    opportunity.source = data.source
    opportunity.status = data.status
    opportunity.nextAction = data.nextAction.trim() || undefined
    opportunity.nextActionDate = data.nextActionDate || undefined
    opportunity.notes = data.notes.trim() || undefined
    opportunity.updatedAt = new Date().toISOString()

    saveOpportunities()
  }

  function updateStatus(id: string, status: OpportunityStatus) {
    const opportunity = opportunities.value.find((item) => item.id === id)

    if (!opportunity) {
      return
    }

    opportunity.status = status
    opportunity.updatedAt = new Date().toISOString()
    saveOpportunities()
  }

  function removeOpportunity(id: string) {
    opportunities.value = opportunities.value.filter((item) => item.id !== id)
    saveOpportunities()
  }

  function getOpportunity(id: string) {
    return opportunities.value.find((item) => item.id === id)
  }

  return {
    opportunities,
    activeOpportunities,
    conversationCount,
    interviewCount,
    wonCount,
    addOpportunity,
    updateOpportunity,
    updateStatus,
    removeOpportunity,
    getOpportunity,
  }
}
