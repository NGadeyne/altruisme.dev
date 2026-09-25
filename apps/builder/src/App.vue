<script setup lang="ts">
import BuilderLanding from '@/components/BuilderLanding.vue'
import CookieConsent from '@/components/CookieConsent.vue'
const mailto = 'mailto:contact@altruisme.dev?subject=Projet%20Altruisme%20Builder'
</script>
<template><BuilderLanding :action-href="mailto" action-label="Analyser mon site" /><CookieConsent /></template>
