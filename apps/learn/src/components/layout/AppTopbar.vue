<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const initials = computed(() => {
  const email = authStore.user?.email

  if (!email) {
    return 'U'
  }

  const username = email.split('@')[0] ?? ''

  if (!username) {
    return 'U'
  }

  const parts = username.split(/[._-]/).filter(Boolean)

  if (parts.length >= 2) {
    const firstInitial = parts[0]?.[0] ?? ''
    const secondInitial = parts[1]?.[0] ?? ''

    return `${firstInitial}${secondInitial}`.toUpperCase() || 'U'
  }

  return username.slice(0, 2).toUpperCase() || 'U'
})

async function handleLogout() {
  try {
    await authStore.logout()
    await router.push('/login')
  } catch (error) {
    console.error('Erreur lors de la déconnexion :', error)
  }
}
</script>

<template>
  <header
    class="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 sm:px-6 lg:px-8"
  >
    <div>
      <p class="text-sm font-medium text-zinc-500">Plateforme e-learning</p>
    </div>

    <div class="flex items-center gap-3">
      <div
        class="flex size-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white"
        aria-hidden="true"
      >
        {{ initials }}
      </div>

      <button
        type="button"
        class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
        @click="handleLogout"
      >
        Se déconnecter
      </button>
    </div>
  </header>
</template>
