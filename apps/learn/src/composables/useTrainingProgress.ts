import { computed, ref } from 'vue'

import { lessons, trainingSections } from '@/data/training'

const STORAGE_KEY = 'acquisition-learn-progress'

interface TrainingProgress {
  completedLessonIds: string[]
  lastLessonSlug?: string
}

function loadProgress(): TrainingProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      return {
        completedLessonIds: [],
      }
    }

    return JSON.parse(stored)
  } catch {
    return {
      completedLessonIds: [],
    }
  }
}

const progress = ref<TrainingProgress>(loadProgress())

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress.value))
}

export function useTrainingProgress() {
  const completedLessonIds = computed(() => progress.value.completedLessonIds)

  const completedCount = computed(() => completedLessonIds.value.length)

  const totalLessons = computed(() => lessons.length)

  const percentage = computed(() => {
    if (!totalLessons.value) {
      return 0
    }

    return Math.round((completedCount.value / totalLessons.value) * 100)
  })

  const lastLesson = computed(() => {
    if (!progress.value.lastLessonSlug) {
      return undefined
    }

    return lessons.find((lesson) => lesson.slug === progress.value.lastLessonSlug)
  })

  function isCompleted(lessonId: string) {
    return completedLessonIds.value.includes(lessonId)
  }

  function markAsCompleted(lessonId: string) {
    if (isCompleted(lessonId)) {
      return
    }

    progress.value.completedLessonIds.push(lessonId)

    saveProgress()
  }

  function markAsIncomplete(lessonId: string) {
    progress.value.completedLessonIds = progress.value.completedLessonIds.filter(
      (id) => id !== lessonId,
    )

    saveProgress()
  }

  function toggleCompleted(lessonId: string) {
    if (isCompleted(lessonId)) {
      markAsIncomplete(lessonId)
    } else {
      markAsCompleted(lessonId)
    }
  }

  function setLastLesson(slug: string) {
    progress.value.lastLessonSlug = slug

    saveProgress()
  }

  function getSectionProgress(sectionId: string) {
    const section = trainingSections.find((item) => item.id === sectionId)

    if (!section) {
      return {
        completed: 0,
        total: 0,
        percentage: 0,
      }
    }

    const completed = section.lessons.filter((lesson) => isCompleted(lesson.id)).length

    return {
      completed,
      total: section.lessons.length,
      percentage: Math.round((completed / section.lessons.length) * 100),
    }
  }

  return {
    completedLessonIds,
    completedCount,
    totalLessons,
    percentage,
    lastLesson,

    isCompleted,
    markAsCompleted,
    markAsIncomplete,
    toggleCompleted,
    setLastLesson,
    getSectionProgress,
  }
}
