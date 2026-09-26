<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/composables/useCookieConsent'
import { siteLinks } from '@/data/site'
const currentYear = new Date().getFullYear()
const navigationLinks = [
  { label: 'Actualités', to: '/actualites' },
  { label: 'Guides', to: '/guides' },
  { label: 'Podcast', to: '/podcast' },
  { label: 'Communauté', to: '/communaute' },
  { label: 'Contribuer', to: '/contribuer' },
  { label: 'Écosystème', to: '/apropos' },
]
const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/politique-de-confidentialite' },
  { label: 'Gestion des cookies', to: '/cookies' },
]

function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}
</script>

<template>
  <footer class="border-t border-white/10 bg-[#31413f]">
    <BaseContainer class="py-12 sm:py-14">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <RouterLink to="/" class="group inline-flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10"
            >
              <span class="font-bold !text-[#d8e7e3]">A.</span>
            </div>
            <div class="leading-tight">
              <p class="text-sm font-bold tracking-tight !text-white">Altruisme.DEV</p>
              <p class="mt-0.5 text-xs !text-[#b9cac5]">Média tech indépendant</p>
            </div>
          </RouterLink>
          <p class="mt-5 max-w-md text-sm leading-6 text-[#c8d5d1]">
            Des guides de fond, des actualités expliquées, des conversations utiles et une
            communauté pour mieux comprendre et construire la tech.
          </p>
        </div>
        <div>
          <p class="text-sm font-semibold !text-white">Explorer</p>
          <ul class="mt-4 space-y-2.5">
            <li v-for="link in navigationLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm font-medium !text-[#c6ded8] transition hover:!text-white"
                >{{ link.label }}</RouterLink
              >
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-semibold !text-white">Suivre Altruisme.DEV</p>
          <p class="mt-4 text-sm leading-6 text-[#c8d5d1]">
            Le média se construit publiquement, avec celles et ceux qui fabriquent la tech au
            quotidien.
          </p>
          <a
            :href="siteLinks.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-5 inline-flex items-center gap-2 text-sm font-semibold !text-[#d8e7e3] transition hover:!text-white"
            >LinkedIn <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
      <div
        class="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-[#aebfba]">
          © {{ currentYear }} Altruisme.DEV. Tous droits réservés.
        </p>
        <nav aria-label="Liens légaux">
          <ul class="flex flex-wrap gap-x-5 gap-y-2">
            <li v-for="link in legalLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm !text-[#b9cac5] transition hover:!text-white"
                >{{ link.label }}</RouterLink
              >
            </li>
            <li>
              <button
                type="button"
                class="text-sm !text-[#b9cac5] transition hover:!text-white"
                @click="openCookieSettings"
              >
                Gérer mes cookies
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </BaseContainer>
  </footer>
</template>
