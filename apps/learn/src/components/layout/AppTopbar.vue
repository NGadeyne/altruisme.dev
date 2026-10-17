<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
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
  <header class="sticky top-0 z-20 border-b border-petrol/15 bg-sand-light/95 backdrop-blur-xl">
    <div class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <RouterLink to="/app" class="text-sm font-semibold tracking-tight text-ink md:hidden"
        >Altruisme Learn</RouterLink
      >
      <p class="hidden text-sm font-medium text-muted md:block">Espace apprenant</p>

      <div class="flex items-center gap-3">
        <div
          class="flex size-9 items-center justify-center rounded-full bg-petrol-dark text-xs font-semibold text-white sm:size-10 sm:text-sm"
          aria-hidden="true"
        >
          {{ initials }}
        </div>

        <button
          type="button"
          class="learn-button-text rounded-lg px-2 py-2 text-xs font-medium transition hover:bg-mist sm:px-3 sm:text-sm"
          @click="handleLogout"
        >
          Se déconnecter
        </button>
      </div>
    </div>
    <nav
      class="flex gap-1 overflow-x-auto border-t border-petrol/10 px-3 py-2 md:hidden"
      aria-label="Navigation principale"
    >
      <RouterLink
        to="/app"
        class="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-muted"
        active-class="bg-mist text-petrol-dark"
        >Formation</RouterLink
      >
      <RouterLink
        to="/ateliers"
        class="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-muted"
        active-class="bg-mist text-petrol-dark"
        >Ateliers</RouterLink
      >
      <RouterLink
        to="/resources"
        class="shrink-0 rounded-lg px-3 py-2 text-sm font-medium"
        :class="route.path.startsWith('/resources') ? 'bg-mist text-petrol-dark' : 'text-muted'"
        >Ressources</RouterLink
      >
      <RouterLink
        to="/pilotage"
        class="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-muted"
        active-class="bg-mist text-petrol-dark"
        >Pilotage</RouterLink
      >
    </nav>
  </header>
</template>
