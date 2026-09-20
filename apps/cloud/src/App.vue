<script setup lang="ts">
import CookieConsent from '@/components/CookieConsent.vue'
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/composables/useCookieConsent'

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
  <div class="flex min-h-screen flex-col bg-[#f4efe7] text-[#222826]">
    <main class="relative flex flex-1 items-center overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_48%,#e4ece8_100%)]"
      />
      <div
        class="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#4f7774]/15 blur-[100px]"
      />
      <div class="relative mx-auto w-full max-w-5xl">
        <div class="max-w-3xl">
          <a
            href="https://altruisme.dev"
            class="inline-flex items-center gap-3 text-sm font-semibold text-[#31413f]"
            ><span
              class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4f7774]/20 bg-[#4f7774]/10"
              >A.</span
            >Altruisme.DEV</a
          >
          <p class="mt-16 text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7774]">
            Cloud
          </p>
          <h1 class="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
            Hébergez vos SaaS, sans détour.
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-[#52605c] sm:text-xl">
            Une plateforme simple et fiable pour déployer les produits que vous avez construits, les
            faire évoluer et les garder disponibles.
          </p>
          <div class="mt-10 flex flex-wrap gap-3">
            <span
              class="rounded-full border border-[#4f7774]/20 bg-white/55 px-4 py-2 text-sm font-semibold text-[#31413f]"
              >Bientôt disponible</span
            ><a
              href="mailto:contact@altruisme.dev?subject=Cloud"
              class="rounded-full bg-[#31413f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#222826]"
              >Être tenu informé</a
            >
          </div>
        </div>
      </div>
    </main>
    <footer class="border-t border-white/10 bg-[#31413f] px-5 py-7 sm:px-8">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-[#aebfba]">© 2026 Altruisme.DEV. Tous droits réservés.</p>
        <nav aria-label="Liens légaux">
          <ul class="flex flex-wrap gap-x-5 gap-y-2">
            <li v-for="link in legalLinks" :key="link.href">
              <a :href="link.href" class="text-[#b9cac5] transition hover:text-white">{{
                link.label
              }}</a>
            </li>
            <li>
              <button
                class="text-[#b9cac5] transition hover:text-white"
                type="button"
                @click="openCookieSettings"
              >
                Gérer mes cookies
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
    <CookieConsent />
  </div>
</template>
