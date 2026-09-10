export type OpportunityStatus =
  | 'to-contact'
  | 'contacted'
  | 'conversation'
  | 'interview'
  | 'won'
  | 'lost'

export type OpportunitySource =
  | 'LinkedIn'
  | 'Malt'
  | 'LeHibou'
  | 'Collective'
  | 'ESN'
  | 'Réseau'
  | 'Inbound'
  | 'Autre'

export interface Opportunity {
  id: string
  company: string
  role?: string
  source: OpportunitySource
  status: OpportunityStatus
  nextAction?: string
  nextActionDate?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface OpportunityFormData {
  company: string
  role: string
  source: OpportunitySource
  status: OpportunityStatus
  nextAction: string
  nextActionDate: string
  notes: string
}
