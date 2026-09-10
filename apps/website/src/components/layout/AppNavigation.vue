<script setup lang="ts">
import { ref } from 'vue'

import BaseButton from '@/components/ui/BaseButton.vue'

const isOpen = ref(false)

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/apropos' },
  { label: 'Guides', to: '/guides' },
  { label: 'Contact', to: '/contact' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <nav aria-label="Navigation principale" class="relative">
    <!-- Desktop -->
    <div class="hidden items-center gap-3 md:flex">
      <ul
        class="flex items-center gap-1 rounded-xl border border-petrol/12 bg-white/35 p-1 backdrop-blur-sm"
      >
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="block rounded-lg px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-petrol/8 hover:text-ink"
            active-class="!bg-petrol/12 !text-petrol"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <BaseButton
        href="/#vsl"
        variant="primary"
        size="small"
      >
        Trouver ma mission
      </BaseButton>
    </div>

    <!-- Mobile button -->
    <button
      type="button"
      class="flex h-10 w-10 items-center justify-center rounded-xl border border-petrol/15 bg-white/45 text-petrol-dark transition hover:bg-white/70 md:hidden"
      :aria-expanded="isOpen"
      :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      @click="isOpen = !isOpen"
    >
      <!-- Burger -->
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        class="h-5 w-5"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          d="M4 7h16M4 12h16M4 17h16"
        />
      </svg>

      <!-- Close -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        class="h-5 w-5"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      </svg>
    </button>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-petrol/10 bg-sand-light/95 p-4 shadow-xl shadow-petrol/10 backdrop-blur-xl md:hidden"
    >
      <ul class="space-y-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="block rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-petrol/8 hover:text-ink"
            active-class="!bg-petrol/12 !text-petrol"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <BaseButton
        href="/#vsl"
        variant="primary"
        size="medium"
        class="mt-4 w-full"
        @click="closeMenu"
      >
        Trouver ma mission
      </BaseButton>
    </div>
  </nav>
</template>
