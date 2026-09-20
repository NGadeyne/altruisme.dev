<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CookieConsent from '@/components/cookies/CookieConsent.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <DefaultLayout>
    <RouterView />
    <CookieConsent v-if="isMounted" />
  </DefaultLayout>
</template>
