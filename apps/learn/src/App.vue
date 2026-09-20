<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'

const route = useRoute()

const usesStandaloneLayout = computed(
  () => route.meta.layout === 'auth' || route.meta.layout === 'landing',
)
</script>

<template>
  <RouterView v-if="usesStandaloneLayout" />

  <AppLayout v-else>
    <RouterView />
  </AppLayout>
</template>
