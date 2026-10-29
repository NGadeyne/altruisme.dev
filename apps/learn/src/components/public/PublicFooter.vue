<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/composables/useCookieConsent'

const currentYear = new Date().getFullYear()
const legalLinks = [
  { label: 'Mentions légales', href: 'https://altruisme.dev/mentions-legales' },
  {
    label: 'Politique de confidentialité',
    href: 'https://altruisme.dev/politique-de-confidentialite',
  },
  { label: 'Gestion des cookies', href: 'https://altruisme.dev/cookies' },
]

function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}
</script>

<template>
  <footer class="border-t border-white/10 bg-[#31413f]">
    <BaseContainer size="large" class="py-12 sm:py-14">
      <div class="grid gap-10 sm:grid-cols-2 sm:gap-16">
        <div>
          <RouterLink to="/" class="group inline-flex items-center gap-3">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10"
            >
              <span class="font-bold !text-[#d8e7e3]">A.</span>
            </span>
            <span class="leading-tight">
              <span class="block text-sm font-bold tracking-tight !text-white"
                >Altruisme Learn</span
              >
              <span class="mt-0.5 block text-xs !text-[#b9cac5]">Formation SEO</span>
            </span>
          </RouterLink>
          <p class="mt-5 max-w-md text-sm leading-6 text-[#c8d5d1]">
            Apprends à développer la visibilité de ton site grâce au référencement naturel.
          </p>
        </div>
        <div>
          <p class="text-sm font-semibold !text-white">Espace apprenant</p>
          <p class="mt-4 text-sm leading-6 text-[#c8d5d1]">
            Retrouve ta formation et tes outils depuis ton espace.
          </p>
          <RouterLink
            to="/formations/seo"
            class="mt-5 inline-flex items-center gap-2 text-sm font-semibold !text-[#d8e7e3] transition hover:!text-white"
            >Accéder à mon espace <span aria-hidden="true">→</span></RouterLink
          >
        </div>
      </div>
      <div
        class="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-[#aebfba]">
          © {{ currentYear }} Altruisme.DEV. Tous droits réservés.
        </p>
        <nav aria-label="Liens de pied de page">
          <ul class="flex flex-wrap gap-x-5 gap-y-2">
            <li v-for="link in legalLinks" :key="link.href">
              <a :href="link.href" class="text-sm !text-[#b9cac5] transition hover:!text-white">{{
                link.label
              }}</a>
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
