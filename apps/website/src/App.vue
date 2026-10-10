<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ChecklistCta from '@/components/ChecklistCta.vue'
import CookieConsent from '@/components/cookies/CookieConsent.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const isMounted = ref(false)
const route = useRoute()
const isNewsArticle = computed(
  () => route.path.startsWith('/actualites/') && route.meta.article === true,
)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <DefaultLayout>
    <RouterView />
    <ChecklistCta v-if="isNewsArticle" />
    <CookieConsent v-if="isMounted" />
  </DefaultLayout>
</template>
