<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

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
      <p class="text-sm font-medium text-zinc-500">Espace coaching</p>
    </div>

    <div class="flex items-center gap-3">
      <div
        class="flex size-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white"
      >
        NG
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
