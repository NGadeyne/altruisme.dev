<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { OPEN_COOKIE_SETTINGS_EVENT, useCookieConsent } from '@/composables/useCookieConsent'

const { hasConsent, loadPreferences, preferences, savePreferences } = useCookieConsent()
const isVisible = ref(false)
const showSettings = ref(false)
const external = ref(false)

function openSettings() {
  external.value = preferences.value.external
  showSettings.value = true
  isVisible.value = true
}

function save() {
  savePreferences({ external: external.value })
  isVisible.value = false
  showSettings.value = false
}

function reject() {
  external.value = false
  save()
}

function accept() {
  external.value = true
  save()
}

onMounted(() => {
  loadPreferences()
  external.value = preferences.value.external
  isVisible.value = !hasConsent.value
  window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
})

onBeforeUnmount(() => {
  window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
})
</script>

<template>
  <section
    v-if="isVisible"
    class="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    aria-labelledby="cookie-consent-title"
    role="dialog"
  >
    <div
      class="mx-auto max-w-3xl rounded-3xl border border-[#4f7774]/20 bg-[#f4efe7] p-6 shadow-lg sm:p-7"
    >
      <div v-if="!showSettings" class="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p id="cookie-consent-title" class="text-base font-semibold text-[#222826]">
            Ton choix, tes cookies.
          </p>
          <p class="mt-2 max-w-xl text-sm leading-6 text-[#46504d]">
            Learn ne charge aucun contenu externe sans ton accord. Les éléments nécessaires au bon
            fonctionnement de l’application restent actifs.
          </p>
        </div>
        <div class="flex flex-col gap-2 sm:items-end">
          <button class="cookie-secondary" type="button" @click="reject">Tout refuser</button>
          <button class="cookie-primary" type="button" @click="accept">Tout accepter</button>
          <button
            class="text-sm font-semibold text-[#31413f] underline underline-offset-4"
            type="button"
            @click="openSettings"
          >
            Personnaliser
          </button>
        </div>
      </div>

      <div v-else>
        <div class="flex items-start justify-between gap-4">
          <div>
            <p id="cookie-consent-title" class="text-lg font-semibold text-[#222826]">
              Gérer mes préférences
            </p>
            <p class="mt-2 text-sm leading-6 text-[#46504d]">
              Tu peux modifier ton choix à tout moment.
            </p>
          </div>
          <button
            class="text-sm font-semibold text-[#31413f] underline underline-offset-4"
            type="button"
            @click="showSettings = false"
          >
            Retour
          </button>
        </div>
        <label
          class="mt-6 flex cursor-pointer items-center justify-between gap-6 rounded-2xl border border-[#4f7774]/15 bg-white/55 p-5"
        >
          <span>
            <span class="block text-sm font-semibold text-[#222826]">Contenus externes</span>
            <span class="mt-1 block text-sm leading-6 text-[#46504d]"
              >Autorise les services tiers qui pourraient être ajoutés à Learn.</span
            >
          </span>
          <input v-model="external" class="h-5 w-5 shrink-0 accent-[#31413f]" type="checkbox" />
        </label>
        <div class="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button class="cookie-secondary" type="button" @click="reject">Tout refuser</button>
          <button class="cookie-primary" type="button" @click="save">Enregistrer mes choix</button>
        </div>
      </div>
    </div>
  </section>
</template>
