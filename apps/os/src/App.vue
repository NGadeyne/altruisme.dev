<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'

const route = useRoute()

const isAuthPage = computed(() => route.meta.layout === 'auth')
</script>

<template>
  <RouterView v-if="isAuthPage" />

  <AppLayout v-else>
    <RouterView />
  </AppLayout>
</template>
