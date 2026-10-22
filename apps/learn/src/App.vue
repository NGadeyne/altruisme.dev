<script setup lang="ts">
import { computed, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const usesStandaloneLayout = computed(() => route.meta.layout === 'auth')

watch(
  () => authStore.user?.id,
  (userId, previousUserId) => {
    if (!userId && route.meta.requiresAuth) {
      void router.replace({ name: 'login', query: { redirect: route.fullPath } })
    } else if (userId && previousUserId && userId !== previousUserId && route.meta.requiresAuth) {
      void router.replace({ name: 'dashboard' })
    }
  },
)
</script>

<template>
  <RouterView v-if="usesStandaloneLayout" />

  <RouterView v-else-if="route.meta.layout === 'consulting'" />

  <PublicLayout v-else-if="route.meta.layout === 'public'">
    <RouterView />
  </PublicLayout>

  <AppLayout v-else-if="authStore.learnerState === 'learner'">
    <RouterView />
  </AppLayout>

  <div
    v-else
    class="min-h-screen bg-sand-light"
    role="status"
    aria-label="Vérification de l'accès"
  />
</template>
