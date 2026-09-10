<script setup lang="ts">
const calendlyUrl = 'TON_LIEN_CALENDLY'
const whatsappUrl = 'TON_LIEN_WHATSAPP'
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-zinc-200 bg-white md:flex md:flex-col"
  >
    <!-- Logo -->
    <div class="flex h-16 shrink-0 items-center border-b border-zinc-200 px-6">
      <RouterLink to="/" class="text-lg font-bold tracking-tight text-zinc-950">
        Acquisition Learn
      </RouterLink>
    </div>

    <div class="flex min-h-0 flex-1 flex-col">
      <!-- Navigation -->
      <nav class="space-y-1 p-4" aria-label="Navigation principale">
        <!-- Formation -->
        <RouterLink
          to="/"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
          active-class="bg-fuchsia-50 text-fuchsia-700"
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

          Formation
        </RouterLink>

        <!-- Ateliers -->
        <RouterLink
          to="/ateliers"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
          active-class="bg-fuchsia-50 text-fuchsia-700"
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

        <!-- Pilotage -->
        <RouterLink
          to="/pilotage"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
          active-class="bg-fuchsia-50 text-fuchsia-700"
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
      <div class="mt-auto border-t border-zinc-200 p-4">
        <p class="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Accompagnement
        </p>

        <div class="space-y-2">
          <a
            :href="calendlyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-center gap-3 rounded-xl bg-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-700"
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

            <span class="flex-1"> Prendre rendez-vous </span>

            <span aria-hidden="true"> ↗ </span>
          </a>

          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-center gap-3 rounded-xl bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-200 hover:text-zinc-950"
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
                d="M21 11.5a8.5 8.5 0 0 1-12.6 7.44L3 21l2.07-5.18A8.5 8.5 0 1 1 21 11.5Z"
              />

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.5 9.5c.7 2.4 2.6 4.3 5 5"
              />
            </svg>

            <span class="flex-1"> Communauté WhatsApp </span>

            <span aria-hidden="true"> ↗ </span>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>
