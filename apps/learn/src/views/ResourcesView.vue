<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import UnavailableLinkIcon from '@/components/ui/UnavailableLinkIcon.vue'
import { seoResources } from '@/data/seoResources'

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
            Cinq outils pratiques pour accompagner les exercices de la formation et passer à
            l'action sur ton site.
          </p>
        </div>
        <span
          class="w-fit shrink-0 rounded-full border border-petrol/20 bg-white/70 px-4 py-2 text-xs font-semibold text-petrol-dark"
        >
          Ressources en préparation
        </span>
      </div>
    </header>

    <section class="mt-10" aria-labelledby="resources-heading">
      <h2 id="resources-heading" class="sr-only">Les cinq ressources du programme SEO</h2>
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
              <button
                type="button"
                title="Bientôt disponible"
                class="text-left underline-offset-4 transition hover:text-petrol-dark hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              >
                {{ resource.title }}
              </button>
            </h3>
          </div>
          <div class="mt-3 flex items-start justify-between gap-4 sm:mt-0">
            <p class="text-sm leading-7 text-muted sm:text-base">
              {{ resource.description }}
            </p>
            <UnavailableLinkIcon label="Ressource bientôt disponible" />
          </div>
        </li>
      </ol>
    </section>
  </BaseContainer>
</template>
