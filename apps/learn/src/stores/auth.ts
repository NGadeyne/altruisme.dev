import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@supabase/supabase-js'

import { supabase } from '@/lib/supabase'
import { hasCourseAccess } from '@/services/courseAccess'

type SeoAccessStatus = 'unknown' | 'granted' | 'denied' | 'error'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(true)
  const seoAccessStatus = ref<SeoAccessStatus>('unknown')
  const learnerState = computed(() => {
    if (!user.value) return 'visitor'
    if (seoAccessStatus.value === 'granted') return 'learner'
    if (seoAccessStatus.value === 'denied') return 'account_without_access'
    if (seoAccessStatus.value === 'error') return 'access_error'
    return 'checking'
  })
  let checkedUserId: string | null = null
  let pendingAccessCheck: Promise<SeoAccessStatus> | null = null

  function setUser(nextUser: User | null) {
    if (user.value?.id !== nextUser?.id) {
      seoAccessStatus.value = 'unknown'
      checkedUserId = null
      pendingAccessCheck = null
    }
    user.value = nextUser
  }

  async function refreshSeoAccess(force = false): Promise<SeoAccessStatus> {
    const userId = user.value?.id
    if (!userId) return 'unknown'
    if (pendingAccessCheck && checkedUserId === userId) return pendingAccessCheck
    if (
      !force &&
      checkedUserId === userId &&
      (seoAccessStatus.value === 'granted' || seoAccessStatus.value === 'denied')
    ) {
      return seoAccessStatus.value
    }

    checkedUserId = userId
    seoAccessStatus.value = 'unknown'
    const request = (async (): Promise<SeoAccessStatus> => {
      try {
        const granted = await hasCourseAccess(userId, 'seo')
        if (user.value?.id !== userId) return 'unknown'
        seoAccessStatus.value = granted ? 'granted' : 'denied'
      } catch {
        if (user.value?.id !== userId) return 'unknown'
        seoAccessStatus.value = 'error'
      }
      return seoAccessStatus.value
    })()
    pendingAccessCheck = request
    try {
      return await request
    } finally {
      if (pendingAccessCheck === request) pendingAccessCheck = null
    }
  }

  async function initialize() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession()

    if (error) {
      console.error('Erreur lors de la récupération de la session :', error)
    }

    setUser(session?.user ?? null)
    loading.value = false

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
  }

  async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    setUser(data.user)

    return data.user
  }

  async function logout() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error
    }

    setUser(null)
  }

  return {
    user,
    loading,
    seoAccessStatus,
    learnerState,
    initialize,
    login,
    logout,
    refreshSeoAccess,
  }
})
