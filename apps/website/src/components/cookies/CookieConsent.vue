<script setup lang="ts">
import { onMounted, ref } from 'vue'

type CookiePreferences = {
  external: boolean
}

const STORAGE_KEY = 'acquisition-cookie-consent'

const isVisible = ref(false)
const showSettings = ref(false)

const preferences = ref<CookiePreferences>({
  external: false,
})

function savePreferences() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      version: 1,
      external: preferences.value.external,
      updatedAt: new Date().toISOString(),
    }),
  )

  isVisible.value = false
  showSettings.value = false

  window.dispatchEvent(
    new CustomEvent('cookie-consent-updated', {
      detail: preferences.value,
    }),
  )
}

function acceptAll() {
  preferences.value.external = true
  savePreferences()
}

function rejectAll() {
  preferences.value.external = false
  savePreferences()
}

function openSettings() {
  showSettings.value = true
}

function loadPreferences() {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    isVisible.value = true
    return
  }

  try {
    const parsed = JSON.parse(stored)

    preferences.value.external = Boolean(parsed.external)
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    isVisible.value = true
  }
}

onMounted(() => {
  loadPreferences()

  window.addEventListener('open-cookie-settings', () => {
    isVisible.value = true
    showSettings.value = true
  })
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" class="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6">
      <div
        class="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#4f7774]/15 bg-[#f4efe7]/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        <!-- Main -->
        <div
          v-if="!showSettings"
          class="grid gap-6 p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p class="text-base font-semibold text-[#222826]">Ton choix, tes cookies.</p>

            <p class="mt-2 max-w-2xl text-sm leading-6 text-[#64706c]">
              Nous utilisons des services externes, comme YouTube ou Calendly, uniquement avec ton
              accord. Les cookies strictement nécessaires restent toujours actifs.
            </p>

            <RouterLink
              to="/cookies"
              class="mt-3 inline-flex text-sm font-medium !text-[#4f7774] transition hover:!text-[#668c89]"
            >
              En savoir plus
            </RouterLink>
          </div>

          <div class="flex flex-col gap-2 sm:flex-row lg:justify-end">
            <button
              type="button"
              class="rounded-xl border border-[#4f7774]/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-[#222826] transition hover:bg-white/75"
              @click="rejectAll"
            >
              Tout refuser
            </button>

            <button
              type="button"
              class="rounded-xl border border-[#4f7774]/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-[#222826] transition hover:bg-white/75"
              @click="openSettings"
            >
              Personnaliser
            </button>

            <button
              type="button"
              class="rounded-xl bg-[#4f7774] px-4 py-2.5 text-sm font-semibold text-[#222826] transition hover:bg-[#4f7774]"
              @click="acceptAll"
            >
              Tout accepter
            </button>
          </div>
        </div>

        <!-- Settings -->
        <div v-else class="p-6 sm:p-7">
          <div class="flex items-start justify-between gap-6">
            <div>
              <p class="text-lg font-semibold text-[#222826]">Gérer mes préférences</p>

              <p class="mt-2 text-sm leading-6 text-[#64706c]">
                Tu peux modifier ton choix à tout moment.
              </p>
            </div>

            <button
              type="button"
              class="text-sm !text-[#78827e] transition hover:!text-[#222826]"
              @click="showSettings = false"
            >
              Fermer
            </button>
          </div>

          <div class="mt-7 space-y-3">
            <!-- Necessary -->
            <div
              class="flex items-center justify-between gap-6 rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5"
            >
              <div>
                <p class="text-sm font-semibold text-[#222826]">Cookies nécessaires</p>

                <p class="mt-1 text-sm leading-6 text-[#78827e]">
                  Nécessaires au fonctionnement du site et à la conservation de ton choix.
                </p>
              </div>

              <span
                class="shrink-0 rounded-full bg-[#4f7774]/10 px-3 py-1 text-xs font-semibold text-[#668c89]"
              >
                Toujours actifs
              </span>
            </div>

            <!-- External -->
            <label
              class="flex cursor-pointer items-center justify-between gap-6 rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5"
            >
              <div>
                <p class="text-sm font-semibold text-[#222826]">Contenus externes</p>

                <p class="mt-1 text-sm leading-6 text-[#78827e]">
                  Permet le chargement de services comme YouTube et Calendly.
                </p>
              </div>

              <input
                v-model="preferences.external"
                type="checkbox"
                class="h-5 w-5 accent-[#4f7774]"
              />
            </label>
          </div>

          <div class="mt-7 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              class="rounded-xl border border-[#4f7774]/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-[#222826] transition hover:bg-white/75"
              @click="rejectAll"
            >
              Tout refuser
            </button>

            <button
              type="button"
              class="rounded-xl bg-[#4f7774] px-4 py-2.5 text-sm font-semibold text-[#222826] transition hover:bg-[#4f7774]"
              @click="savePreferences"
            >
              Enregistrer mes choix
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
