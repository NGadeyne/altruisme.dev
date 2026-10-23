<script setup lang="ts">
import { useRoute } from 'vue-router'
import { pilotageAvailable, workshopsAvailable } from '@/config/features'

const route = useRoute()
const consultingUrl = 'https://consulting.altruisme.dev/'
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-petrol/15 bg-sand-light md:flex md:flex-col"
  >
    <!-- Logo -->
    <div class="flex h-16 shrink-0 items-center border-b border-petrol/15 px-5">
      <RouterLink
        to="/formations"
        class="flex items-center gap-3"
        aria-label="Altruisme Learn, formations"
      >
        <span
          class="flex size-9 items-center justify-center rounded-xl border border-petrol/20 bg-petrol/8 text-sm font-bold text-petrol"
          >A.</span
        >
        <span class="leading-tight">
          <span class="block text-sm font-bold tracking-tight text-ink">Altruisme Learn</span>
          <span class="mt-0.5 block text-xs text-muted-light">Espace apprenant</span>
        </span>
      </RouterLink>
    </div>

    <div class="flex min-h-0 flex-1 flex-col">
      <!-- Navigation -->
      <nav class="space-y-1 p-4" aria-label="Navigation principale">
        <!-- Formation -->
        <RouterLink
          to="/formations"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-mist hover:text-ink"
          :class="route.path.startsWith('/formations') ? 'bg-mist text-petrol-dark' : 'text-muted'"
        >
          <svg
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 5.5A2.5 2.5 0 0 1 6.5 8H20"
            />
          </svg>

          Formations
        </RouterLink>

        <RouterLink
          :to="{ name: 'learning-plan' }"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-mist hover:text-ink"
          active-class="bg-mist text-petrol-dark"
        >
          <svg
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M9 4h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1" />
            <path d="m3 8 2 2 4-4M11 9h6M3 15l2 2 4-4M11 16h6" />
          </svg>
          Mon plan d'action
        </RouterLink>

        <!-- Ateliers -->
        <RouterLink
          v-if="workshopsAvailable"
          to="/ateliers"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-mist hover:text-ink"
          active-class="bg-mist text-petrol-dark"
        >
          <svg
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />

            <path stroke-linecap="round" stroke-linejoin="round" d="m10 9 5 3-5 3V9Z" />
          </svg>

          Ateliers
        </RouterLink>

        <!-- Ressources -->
        <RouterLink
          to="/resources"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-mist hover:text-ink"
          :class="route.path.startsWith('/resources') ? 'bg-mist text-petrol-dark' : 'text-muted'"
        >
          <svg
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 3.5h7l4 4V20H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z"
            />
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 3.5V8h4M9 12h6M9 16h6" />
          </svg>

          Ressources
        </RouterLink>

        <RouterLink
          :to="{ name: 'seo-assistant' }"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-mist hover:text-ink"
          active-class="bg-mist text-petrol-dark"
        >
          <svg
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v9a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4.5A2.5 2.5 0 0 1 2.5 14V8A2.5 2.5 0 0 1 5 5.5Z"
            />
            <path d="m11 7 .8 2.2L14 10l-2.2.8L11 13l-.8-2.2L8 10l2.2-.8L11 7Z" />
          </svg>
          Assistant
        </RouterLink>

        <!-- Pilotage -->
        <RouterLink
          v-if="pilotageAvailable"
          to="/pilotage"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-mist hover:text-ink"
          active-class="bg-mist text-petrol-dark"
        >
          <svg
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 19V10" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19V5" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 19v-7" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M22 19V8" />
          </svg>

          Pilotage
        </RouterLink>
      </nav>

      <!-- Accompagnement -->
      <div class="mt-auto border-t border-petrol/20 p-4">
        <p class="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-light">
          Accompagnement
        </p>

        <a
          :href="consultingUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="learn-button-primary group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold"
        >
          <svg
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path stroke-linecap="round" d="M8 3v4M16 3v4M3 10h18" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v4M10 16h4" />
          </svg>

          <span class="flex-1">Faire le point sur mon SEO</span>
          <span aria-hidden="true"> ↗ </span>
        </a>
      </div>
    </div>
  </aside>
</template>
