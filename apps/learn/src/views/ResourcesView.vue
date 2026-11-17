<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { seoResources, seoResourcesSheetUrl } from '@/data/seoResources'

function formatNumber(number: number) {
  return String(number).padStart(2, '0')
}
</script>

<template>
  <BaseContainer>
    <header
      class="overflow-hidden rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10 lg:p-12"
    >
      <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d6970]">
            Altruisme Learn
          </p>
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Ressources SEO
          </h1>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
            Les cinq ressources pratiques sont réunies dans un même document Google Sheets. Ouvre
            le document complet ou accède directement à l'onglet qui t'intéresse.
          </p>
        </div>
        <a
          :href="seoResourcesSheetUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="learn-button-primary inline-flex w-fit shrink-0 items-center rounded-xl px-5 py-3 text-sm font-semibold"
        >
          Ouvrir le document complet <span class="ml-2" aria-hidden="true">↗</span>
        </a>
      </div>
    </header>

    <section class="mt-10" aria-labelledby="resources-heading">
      <h2 id="resources-heading" class="sr-only">Les cinq ressources du programme SEO</h2>
      <p class="mb-6 text-sm leading-6 text-muted">
        Le document est en lecture seule. Crée ta propre copie dans Google Sheets pour compléter les
        tableaux.
      </p>
      <div
        class="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-8 px-6 pb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3d6970] sm:grid sm:px-8"
      >
        <span>Ressource</span>
        <span>Contenu et résultat</span>
      </div>
      <ol class="grid gap-3">
        <li
          v-for="resource in seoResources"
          :key="resource.number"
          class="rounded-2xl border border-petrol/15 bg-white p-6 shadow-sm sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:gap-8 sm:p-8"
        >
          <div class="flex items-start gap-4">
            <span class="text-xl font-semibold tracking-tight text-[#3d6970]">
              {{ formatNumber(resource.number) }}.
            </span>
            <h3 class="text-lg font-semibold leading-7 tracking-tight text-ink">
              <a
                :href="resource.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-left underline-offset-4 transition hover:text-petrol-dark hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              >
                {{ resource.title }} <span class="text-base" aria-hidden="true">↗</span>
              </a>
            </h3>
          </div>
          <div class="mt-3 sm:mt-0">
            <p class="text-sm leading-7 text-muted sm:text-base">
              {{ resource.description }}
            </p>
          </div>
        </li>
      </ol>
    </section>
  </BaseContainer>
</template>
