<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const learnings = [
  {
    number: '01',
    title: 'Rendre ton expertise plus lisible',
    description:
      'Clarifier ce que tu apportes réellement et donner aux entreprises une raison claire de te choisir plutôt qu’un autre profil.',
    items: [
      'Positionnement',
      'Malt & LinkedIn',
      'CV & dossier de compétences',
    ],
  },
  {
    number: '02',
    title: 'Créer plus d’opportunités',
    description:
      'Choisir les bons canaux et construire une acquisition régulière sans attendre qu’une plateforme ou une ESN pense à toi.',
    items: [
      'ESN & clients finaux',
      'Prospection',
      'Contenu & réseau',
    ],
  },
  {
    number: '03',
    title: 'Transformer une opportunité en mission',
    description:
      'Mieux qualifier les opportunités, réussir les échanges et défendre tes conditions jusqu’à la signature.',
    items: [
      'Qualification',
      'Entretien',
      'TJM & négociation',
    ],
  },
]
</script>

<template>
  <section
    class="relative overflow-hidden bg-sand-light py-20 sm:py-24 lg:py-28"
  >
    <div
      class="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/8 blur-[120px]"
    />

    <BaseContainer>
      <div
        class="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20"
      >
        <!-- Left -->
        <div class="max-w-xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            Au programme
          </p>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Une heure pour comprendre

            <span class="text-ink-soft">
              où concentrer tes efforts maintenant.
            </span>
          </h2>

          <p
            class="mt-6 text-base leading-7 text-muted sm:text-lg"
          >
            Pas une liste de hacks à tester pendant trois jours.
            L’objectif est de te donner une vue claire du système complet
            qui permet de trouver une mission.
          </p>

          <div
            class="mt-10 border-l-2 border-petrol/30 pl-5"
          >
            <p class="text-sm font-semibold text-petrol">
              À la fin
            </p>

            <p
              class="mt-2 text-lg font-semibold leading-7 text-ink"
            >
              Tu dois savoir ce qui bloque aujourd’hui

              <span class="text-ink-soft">
                et quelle action mérite réellement ton énergie.
              </span>
            </p>
          </div>
        </div>

        <!-- Steps -->
        <div
          class="divide-y divide-petrol/15 border-y border-petrol/15"
        >
          <article
            v-for="learning in learnings"
            :key="learning.number"
            class="grid gap-5 py-7 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-petrol/8 text-sm font-semibold text-petrol"
            >
              {{ learning.number }}
            </span>

            <div>
              <h3 class="text-xl font-semibold text-ink">
                {{ learning.title }}
              </h3>

              <p class="mt-2 text-sm leading-6 text-muted">
                {{ learning.description }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="item in learning.items"
                  :key="item"
                  class="rounded-full border border-petrol/12 bg-white/45 px-3 py-1 text-xs font-medium text-ink-soft"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
