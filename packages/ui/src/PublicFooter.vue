<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'

const props = defineProps<{ tagline: string; legalLinks?: boolean; cookieEventName?: string; borderless?: boolean }>()
const year = new Date().getFullYear()

function openCookieSettings() {
  if (props.cookieEventName) window.dispatchEvent(new Event(props.cookieEventName))
}
</script>

<template>
  <footer :class="[props.borderless ? '' : 'border-t border-white/10', 'bg-petrol-dark']">
    <BaseContainer class="py-10 sm:py-12">
      <div v-if="!props.legalLinks" class="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div><a href="https://altruisme.dev" class="inline-flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 font-bold text-[#d8e7e3]">A.</span><span><span class="block text-sm font-bold text-white">Altruisme.DEV</span><span class="mt-0.5 block text-xs text-[#b9cac5]">{{ tagline }}</span></span></a></div>
        <nav aria-label="Liens Altruisme"><ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#c6ded8]"><li><a href="https://altruisme.dev" class="hover:text-white">Altruisme.dev</a></li><li><a href="https://builder.altruisme.dev" class="hover:text-white">Builder</a></li><li><a href="https://learn.altruisme.dev" class="hover:text-white">Learn</a></li><li><a href="https://cloud.altruisme.dev" class="hover:text-white">Cloud</a></li></ul></nav>
      </div>
      <div v-if="props.legalLinks" class="flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-[#aebfba]">© {{ year }} Altruisme.DEV. Tous droits réservés.</p>
        <nav aria-label="Liens légaux"><ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#b9cac5]"><li><a href="https://altruisme.dev/mentions-legales" class="hover:text-white">Mentions légales</a></li><li><a href="https://altruisme.dev/politique-de-confidentialite" class="hover:text-white">Politique de confidentialité</a></li><li><a href="https://altruisme.dev/cookies" class="hover:text-white">Gestion des cookies</a></li><li><button type="button" class="hover:text-white" @click="openCookieSettings">Gérer mes cookies</button></li></ul></nav>
      </div>
      <p v-else class="mt-8 border-t border-white/10 pt-5 text-xs text-[#aebfba]">© {{ year }} Altruisme.DEV. Tous droits réservés.</p>
    </BaseContainer>
  </footer>
</template>
