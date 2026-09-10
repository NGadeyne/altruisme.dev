export type Dimension = 'positionnement' | 'offre' | 'visibilite' | 'prospection' | 'conversion'

export type AnswerOption = {
  label: string
  value: string
  score?: number
}

export type Question = {
  id: string
  label: string
  helper?: string
  dimension?: Dimension
  weight?: number
  type?: 'choice' | 'number' | 'text'
  answers?: AnswerOption[]
  required?: boolean
  scored?: boolean
}

export type AuditAnswers = Record<string, string | number>

export type DimensionScores = Record<Dimension, number>

export type DiagnosticFlag =
  | 'acquisition_inactive'
  | 'low_prospecting_volume'
  | 'irregular_prospecting'
  | 'weak_positioning'
  | 'weak_offer'
  | 'weak_visibility'
  | 'weak_conversion'
  | 'high_urgency'

export type AuditResult = {
  globalScore: number
  scores: DimensionScores
  priority: Dimension
  secondaryPriority: Dimension
  flags: DiagnosticFlag[]
  strengths: Dimension[]
  summary: string
  why: string[]
  priorities: string[]
  stopDoing: string[]
}
