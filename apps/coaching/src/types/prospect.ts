export type ProspectStatus = 'meeting' | 'done' | 'won' | 'lost' | 'canceled'

export type ProspectQualification = 'coaching' | 'online-training' | 'later' | 'not-qualified'

export type ProspectUrgency = 'low' | 'medium' | 'high'

export interface Prospect {
  id: string

  firstName: string
  lastName: string

  email?: string
  company?: string
  linkedinUrl?: string

  status: ProspectStatus
  qualification?: ProspectQualification

  jobTarget?: string
  jobSearchStartedAt?: string
  dailyRate?: number

  mainBlocker?: string
  currentSituation?: string

  urgency?: ProspectUrgency
  salesObjection?: string

  meetingAt?: string

  nextAction?: string
  nextActionAt?: string

  notes?: string

  createdAt: string
}
