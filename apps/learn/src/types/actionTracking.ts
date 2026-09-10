export type ActionType =
  | 'prospecting'
  | 'followUps'
  | 'applications'
  | 'content'
  | 'conversations'

export interface DailyActionLog {
  date: string
  prospecting: number
  followUps: number
  applications: number
  content: number
  conversations: number
  note?: string
  updatedAt: string
}

export interface ActionDefinition {
  key: ActionType
  label: string
  shortLabel: string
  description: string
}
