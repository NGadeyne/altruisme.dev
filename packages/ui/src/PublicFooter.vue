<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'

defineProps<{ tagline: string }>()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-petrol-dark">
    <BaseContainer class="py-10 sm:py-12">
      <div class="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div><a href="https://altruisme.dev" class="inline-flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 font-bold text-[#d8e7e3]">A.</span><span><span class="block text-sm font-bold text-white">Altruisme.DEV</span><span class="mt-0.5 block text-xs text-[#b9cac5]">{{ tagline }}</span></span></a></div>
        <nav aria-label="Liens Altruisme"><ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#c6ded8]"><li><a href="https://altruisme.dev" class="hover:text-white">Altruisme.dev</a></li><li><a href="https://builder.altruisme.dev" class="hover:text-white">Builder</a></li><li><a href="https://learn.altruisme.dev" class="hover:text-white">Learn</a></li><li><a href="https://cloud.altruisme.dev" class="hover:text-white">Cloud</a></li></ul></nav>
      </div>
      <p class="mt-8 border-t border-white/10 pt-5 text-xs text-[#aebfba]">© {{ year }} Altruisme.DEV. Tous droits réservés.</p>
    </BaseContainer>
  </footer>
</template>
