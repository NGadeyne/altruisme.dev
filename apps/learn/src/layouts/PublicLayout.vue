<script setup lang="ts">
import CookieConsent from '@/components/CookieConsent.vue'
import PublicFooter from '@/components/public/PublicFooter.vue'
import PublicHeader from '@/components/public/PublicHeader.vue'
</script>

<template>
  <div class="learn-public">
    <PublicHeader />
    <slot />
    <PublicFooter />
    <CookieConsent />
  </div>
</template>
