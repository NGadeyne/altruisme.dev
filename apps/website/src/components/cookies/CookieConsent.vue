<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  useCookieConsent,
  type CookiePreferences,
} from '@/composables/useCookieConsent'

const { hasConsent, loadPreferences, preferences, savePreferences } = useCookieConsent()
const isVisible = ref(false)
const showSettings = ref(false)
const draftPreferences = ref<CookiePreferences>({ external: false })

function openBanner(settings = false) {
  draftPreferences.value = { ...preferences.value }
  showSettings.value = settings
  isVisible.value = true
}

function save() {
  savePreferences(draftPreferences.value)
  isVisible.value = false
  showSettings.value = false
}

function acceptExternalContent() {
  draftPreferences.value.external = true
  save()
}

function rejectOptionalContent() {
  draftPreferences.value.external = false
  save()
}

function handleOpenSettings() {
  loadPreferences()
  openBanner(true)
}

onMounted(() => {
  loadPreferences()
  if (!hasConsent.value) openBanner()
  window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings)
})

onBeforeUnmount(() => {
  window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings)
})
</script>

<template>
  <Teleport to="body">
    <section
      v-if="isVisible"
      class="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
      aria-labelledby="cookie-consent-title"
      role="dialog"
    >
      <div class="mx-auto max-w-4xl rounded-3xl border border-[#4f7774]/20 bg-[#f4efe7] shadow-lg">
        <div
          v-if="!showSettings"
          class="grid gap-6 p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p id="cookie-consent-title" class="text-base font-semibold text-[#222826]">
              Ton choix, tes cookies.
            </p>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-[#46504d]">
              Les contenus externes, comme YouTube ou Calendly, ne sont chargés qu’avec ton accord.
              Les éléments nécessaires au fonctionnement du site restent actifs.
            </p>
            <RouterLink
              to="/cookies"
              class="mt-3 inline-flex text-sm font-semibold !text-[#31413f] underline decoration-[#4f7774]/50 underline-offset-4 transition hover:!text-[#222826]"
            >
              En savoir plus
            </RouterLink>
          </div>
          <div class="flex flex-col gap-2 sm:flex-row lg:justify-end">
            <button type="button" class="cookie-secondary-button" @click="rejectOptionalContent">
              Tout refuser
            </button>
            <button type="button" class="cookie-secondary-button" @click="showSettings = true">
              Personnaliser
            </button>
            <button type="button" class="cookie-primary-button" @click="acceptExternalContent">
              Autoriser les contenus externes
            </button>
          </div>
        </div>

        <div v-else class="p-6 sm:p-7">
          <div class="flex items-start justify-between gap-6">
            <div>
              <p id="cookie-consent-title" class="text-lg font-semibold text-[#222826]">
                Gérer mes préférences
              </p>
              <p class="mt-2 text-sm leading-6 text-[#46504d]">
                Tu peux modifier ton choix à tout moment.
              </p>
            </div>
            <button
              type="button"
              class="text-sm font-semibold !text-[#31413f] underline decoration-[#4f7774]/50 underline-offset-4 transition hover:!text-[#222826]"
              @click="showSettings = false"
            >
              Retour
            </button>
          </div>

          <div class="mt-7 space-y-3">
            <div
              class="flex items-center justify-between gap-6 rounded-2xl border border-[#4f7774]/15 bg-white/50 p-5"
            >
              <div>
                <p class="text-sm font-semibold text-[#222826]">Éléments nécessaires</p>
                <p class="mt-1 text-sm leading-6 text-[#46504d]">
                  Ils assurent le fonctionnement du site et conservent ton choix.
                </p>
              </div>
              <span
                class="shrink-0 rounded-full bg-[#31413f] px-3 py-1 text-xs font-semibold text-white"
                >Toujours actifs</span
              >
            </div>

            <label
              class="flex cursor-pointer items-center justify-between gap-6 rounded-2xl border border-[#4f7774]/15 bg-white/50 p-5"
            >
              <span>
                <span class="block text-sm font-semibold text-[#222826]">Contenus externes</span>
                <span class="mt-1 block text-sm leading-6 text-[#46504d]"
                  >Autorise le chargement de services comme YouTube et Calendly.</span
                >
              </span>
              <input
                v-model="draftPreferences.external"
                type="checkbox"
                class="h-5 w-5 shrink-0 accent-[#31413f]"
              />
            </label>
          </div>

          <div class="mt-7 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button type="button" class="cookie-secondary-button" @click="rejectOptionalContent">
              Tout refuser
            </button>
            <button type="button" class="cookie-primary-button" @click="save">
              Enregistrer mes choix
            </button>
          </div>
        </div>
      </div>
    </section>
  </Teleport>
</template>
