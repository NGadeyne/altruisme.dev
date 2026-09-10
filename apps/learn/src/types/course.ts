export type LessonType = 'text' | 'video'

export interface Lesson {
  id: string
  slug: string
  title: string
  description?: string
  type: LessonType
  durationInMinutes?: number
  content?: string
  videoUrl?: string
}

export interface LearningSection {
  id: string
  title: string
  description?: string
  lessons: Lesson[]
}

export interface Resource {
  id: string
  slug: string
  title: string
  description?: string
}
