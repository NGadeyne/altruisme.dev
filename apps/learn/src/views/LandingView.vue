<script setup lang="ts">
import '@/assets/consulting-landing.css'
import BuilderLanding from '@/components/consulting/BuilderLanding.vue'
import CookieConsent from '@/components/consulting/CookieConsent.vue'
import PublicHeader from '@/components/public/PublicHeader.vue'
</script>

<template>
  <div class="consulting-home">
    <PublicHeader />
    <BuilderLanding />
    <CookieConsent />
  </div>
</template>
