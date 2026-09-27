import { defineStore } from 'pinia'
import { ref } from 'vue'

import { supabase } from '@/lib/supabase'

import type { Client, ClientChecklist } from '@/types/client'

type ClientRow = {
  id: string

  first_name: string
  last_name: string
  email: string | null
  company: string | null
  notes: string | null

  linkedin_url: string | null
  malt_url: string | null
  work_doc_url: string | null

  job_target: string | null
  job_search_started_at: string | null

  initial_daily_rate: number | null
  signed_daily_rate: number | null

  main_blocker: string | null
  current_situation: string | null

  started_at: string | null
  mission_signed_at: string | null

  coaching_meetings_count: number
  opportunities_count: number

  mission_signed: boolean

  checklist: ClientChecklist

  created_at: string
}

function fromRow(row: ClientRow): Client {
  return {
    id: row.id,

    firstName: row.first_name,
    lastName: row.last_name,

    email: row.email ?? '',
    company: row.company ?? '',
    notes: row.notes ?? '',

    linkedinUrl: row.linkedin_url ?? '',

    maltUrl: row.malt_url ?? '',

    workDocUrl: row.work_doc_url ?? '',

    jobTarget: row.job_target ?? '',

    jobSearchStartedAt: row.job_search_started_at ?? '',

    initialDailyRate: row.initial_daily_rate ?? undefined,

    signedDailyRate: row.signed_daily_rate ?? undefined,

    mainBlocker: row.main_blocker ?? '',

    currentSituation: row.current_situation ?? '',

    startedAt: row.started_at ?? '',

    missionSignedAt: row.mission_signed_at ?? '',

    coachingMeetingsCount: row.coaching_meetings_count ?? 0,

    opportunitiesCount: row.opportunities_count ?? 0,

    missionSigned: row.mission_signed ?? false,

    checklist: {
      positioningOffer: row.checklist?.positioningOffer ?? false,

      maltProfile: row.checklist?.maltProfile ?? false,

      linkedinProfile: row.checklist?.linkedinProfile ?? false,

      skillsPortfolio: row.checklist?.skillsPortfolio ?? false,

      prospecting: row.checklist?.prospecting ?? false,

      content: row.checklist?.content ?? false,

      interview: row.checklist?.interview ?? false,

      negotiation: row.checklist?.negotiation ?? false,
    },
  }
}

function toRow(client: Client) {
  return {
    id: client.id,

    first_name: client.firstName,

    last_name: client.lastName,

    email: client.email || null,

    company: client.company || null,

    notes: client.notes || null,

    linkedin_url: client.linkedinUrl || null,

    malt_url: client.maltUrl || null,

    work_doc_url: client.workDocUrl || null,

    job_target: client.jobTarget || null,

    job_search_started_at: client.jobSearchStartedAt || null,

    initial_daily_rate: client.initialDailyRate ?? null,

    signed_daily_rate: client.signedDailyRate ?? null,

    main_blocker: client.mainBlocker || null,

    current_situation: client.currentSituation || null,

    started_at: client.startedAt || null,

    mission_signed_at: client.missionSignedAt || null,

    coaching_meetings_count: client.coachingMeetingsCount ?? 0,

    opportunities_count: client.opportunitiesCount ?? 0,

    mission_signed: client.missionSigned ?? false,

    checklist: client.checklist,
  }
}

export const useClientsStore = defineStore('clients', () => {
  const clients = ref<Client[]>([])

  const loading = ref(false)
  const loaded = ref(false)

  function getClientById(id: string) {
    return clients.value.find((client) => client.id === id)
  }

  async function loadClients() {
    if (loading.value) {
      return
    }

    loading.value = true

    try {
      const { data, error } = await supabase.from('clients').select('*').order('created_at', {
        ascending: false,
      })

      if (error) {
        throw error
      }

      clients.value = (data as ClientRow[]).map(fromRow)

      loaded.value = true
    } finally {
      loading.value = false
    }
  }

  async function addClient(client: Client) {
    const { data, error } = await supabase.from('clients').insert(toRow(client)).select().single()

    if (error) {
      throw error
    }

    clients.value.unshift(fromRow(data as ClientRow))
  }

  async function updateClient(updatedClient: Client) {
    const { data, error } = await supabase
      .from('clients')
      .update(toRow(updatedClient))
      .eq('id', updatedClient.id)
      .select()
      .single()

    if (error) {
      throw error
    }

    const index = clients.value.findIndex((client) => client.id === updatedClient.id)

    if (index !== -1) {
      clients.value[index] = fromRow(data as ClientRow)
    }
  }

  async function deleteClient(id: string) {
    const { error } = await supabase.from('clients').delete().eq('id', id)

    if (error) {
      throw error
    }

    clients.value = clients.value.filter((client) => client.id !== id)
  }

  return {
    clients,
    loading,
    loaded,

    getClientById,

    loadClients,
    addClient,
    updateClient,
    deleteClient,
  }
})
