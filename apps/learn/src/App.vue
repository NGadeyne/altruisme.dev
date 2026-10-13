<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

const route = useRoute()

const usesStandaloneLayout = computed(() => route.meta.layout === 'auth')
</script>

<template>
  <RouterView v-if="usesStandaloneLayout" />

  <PublicLayout v-else-if="route.meta.layout === 'public'">
    <RouterView />
  </PublicLayout>

  <AppLayout v-else>
    <RouterView />
  </AppLayout>
</template>
