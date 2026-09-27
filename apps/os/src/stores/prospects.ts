import { defineStore } from 'pinia'
import { ref } from 'vue'

import { supabase } from '@/lib/supabase'

import type { Prospect } from '@/types/prospect'

type ProspectRow = {
  id: string

  first_name: string
  last_name: string
  email: string | null
  company: string | null
  linkedin_url: string | null

  status: Prospect['status']
  qualification: Prospect['qualification'] | null

  job_target: string | null
  job_search_started_at: string | null
  daily_rate: number | null
  main_blocker: string | null
  current_situation: string | null
  urgency: Prospect['urgency'] | null
  sales_objection: string | null

  meeting_at: string | null
  next_action: string | null
  next_action_at: string | null

  notes: string | null
  created_at: string
}

function fromRow(row: ProspectRow): Prospect {
  return {
    id: row.id,

    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email ?? '',
    company: row.company ?? '',
    linkedinUrl: row.linkedin_url ?? '',

    status: row.status,
    qualification: row.qualification ?? undefined,

    jobTarget: row.job_target ?? '',
    jobSearchStartedAt: row.job_search_started_at ?? '',
    dailyRate: row.daily_rate ?? undefined,
    mainBlocker: row.main_blocker ?? '',
    currentSituation: row.current_situation ?? '',
    urgency: row.urgency ?? undefined,
    salesObjection: row.sales_objection ?? '',

    meetingAt: row.meeting_at ?? '',
    nextAction: row.next_action ?? '',
    nextActionAt: row.next_action_at ?? '',

    notes: row.notes ?? '',
    createdAt: row.created_at,
  }
}

function toRow(prospect: Prospect) {
  return {
    id: prospect.id,

    first_name: prospect.firstName,
    last_name: prospect.lastName,
    email: prospect.email || null,
    company: prospect.company || null,
    linkedin_url: prospect.linkedinUrl || null,

    status: prospect.status,
    qualification: prospect.qualification ?? null,

    job_target: prospect.jobTarget || null,
    job_search_started_at: prospect.jobSearchStartedAt || null,
    daily_rate: prospect.dailyRate ?? null,
    main_blocker: prospect.mainBlocker || null,
    current_situation: prospect.currentSituation || null,
    urgency: prospect.urgency ?? null,
    sales_objection: prospect.salesObjection || null,

    meeting_at: prospect.meetingAt || null,
    next_action: prospect.nextAction || null,
    next_action_at: prospect.nextActionAt || null,

    notes: prospect.notes || null,
    created_at: prospect.createdAt,
  }
}

export const useProspectsStore = defineStore('prospects', () => {
  const prospects = ref<Prospect[]>([])
  const loading = ref(false)
  const loaded = ref(false)

  function getProspectById(id: string) {
    return prospects.value.find((prospect) => prospect.id === id)
  }

  async function loadProspects() {
    if (loading.value) {
      return
    }

    loading.value = true

    try {
      const { data, error } = await supabase.from('prospects').select('*').order('created_at', {
        ascending: false,
      })

      if (error) {
        throw error
      }

      prospects.value = (data as ProspectRow[]).map(fromRow)
      loaded.value = true
    } finally {
      loading.value = false
    }
  }

  async function addProspect(prospect: Prospect) {
    const { data, error } = await supabase
      .from('prospects')
      .insert(toRow(prospect))
      .select()
      .single()

    if (error) {
      throw error
    }

    prospects.value.unshift(fromRow(data as ProspectRow))
  }

  async function updateProspect(updatedProspect: Prospect) {
    const { data, error } = await supabase
      .from('prospects')
      .update(toRow(updatedProspect))
      .eq('id', updatedProspect.id)
      .select()
      .single()

    if (error) {
      throw error
    }

    const index = prospects.value.findIndex((prospect) => prospect.id === updatedProspect.id)

    if (index !== -1) {
      prospects.value[index] = fromRow(data as ProspectRow)
    }
  }

  async function deleteProspect(id: string) {
    const { error } = await supabase.from('prospects').delete().eq('id', id)

    if (error) {
      throw error
    }

    prospects.value = prospects.value.filter((prospect) => prospect.id !== id)
  }

  return {
    prospects,
    loading,
    loaded,

    getProspectById,

    loadProspects,
    addProspect,
    updateProspect,
    deleteProspect,
  }
})
