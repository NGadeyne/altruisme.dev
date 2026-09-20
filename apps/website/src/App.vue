<script setup lang="ts">
import CookieConsent from '@/components/cookies/CookieConsent.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView />
    <CookieConsent />
  </DefaultLayout>
</template>
