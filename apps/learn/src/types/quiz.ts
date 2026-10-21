export type QuizChoice = 'A' | 'B' | 'C'

export interface QuizQuestion {
  id: number
  prompt: string
  options: { letter: QuizChoice; text: string }[]
  correct: QuizChoice
  explanation: string
}
