<script setup lang="ts">
import FormationLanding from '@/components/public/FormationLanding.vue'
import { getOffer } from '@/data/catalog'
import { formationLandingContent } from '@/data/formationLandingContent'

const seoOffer = getOffer('formations', 'seo')
if (!seoOffer) throw new Error('La formation SEO est absente du catalogue Learn.')
const seoContent = formationLandingContent.seo
if (!seoContent) throw new Error('La présentation SEO est absente de Learn.')
</script>

<template>
  <FormationLanding :offer="seoOffer" :content="seoContent" />
</template>
