export interface ClientChecklist {
  positioningOffer: boolean
  maltProfile: boolean
  linkedinProfile: boolean
  skillsPortfolio: boolean
  prospecting: boolean
  content: boolean
  interview: boolean
  negotiation: boolean
}

export interface Client {
  id: string

  firstName: string
  lastName: string
  email?: string
  company?: string
  notes?: string

  linkedinUrl?: string
  maltUrl?: string
  workDocUrl?: string

  jobTarget?: string
  jobSearchStartedAt?: string
  initialDailyRate?: number
  signedDailyRate?: number
  mainBlocker?: string
  currentSituation?: string

  startedAt?: string
  missionSignedAt?: string

  coachingMeetingsCount: number
  opportunitiesCount: number
  missionSigned: boolean

  checklist: ClientChecklist
}
