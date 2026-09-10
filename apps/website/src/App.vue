<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CookieConsent from './components/cookies/CookieConsent.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView />
    <CookieConsent />
  </DefaultLayout>
</template>
