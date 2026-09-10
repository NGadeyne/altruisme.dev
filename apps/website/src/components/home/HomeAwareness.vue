<template>
  <section class="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
    <div
      class="pointer-events-none absolute left-0 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[120px]"
    />

    <BaseContainer>
      <div class="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div class="max-w-xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Changer de logique</p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Tu ne cherches plus un emploi.
            <span class="text-ink-soft">Tu construis une activité freelance.</span>
          </h2>

          <p class="mt-6 text-base leading-7 text-muted sm:text-lg">
            Et ça change tout : la façon dont tu te présentes, les personnes que tu cibles et la
            manière dont tu crées tes opportunités.
          </p>

          <div class="mt-10 border-l-2 border-petrol/30 pl-5">
            <p class="text-sm font-semibold text-petrol">Le changement clé</p>
            <p class="mt-2 text-lg font-semibold leading-7 text-ink">
              Passer d’une recherche ponctuelle
              <span class="text-petrol">à une acquisition maîtrisée.</span>
            </p>
          </div>
        </div>

        <div class="overflow-hidden rounded-3xl border border-petrol/15 bg-sand/70">
          <article
            v-for="item in shifts"
            :key="item.from"
            class="grid gap-4 border-b border-petrol/12 p-6 last:border-b-0 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:p-7"
          >
            <p class="text-sm font-medium leading-6 text-muted-light line-through decoration-petrol/30">
              {{ item.from }}
            </p>

            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-petrol/10 text-sm font-bold text-petrol"
              aria-hidden="true"
            >
              →
            </div>

            <p class="font-semibold leading-6 text-ink">{{ item.to }}</p>
          </article>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col gap-5 border-t border-petrol/15 pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
      >
        <p class="max-w-3xl text-lg font-medium leading-8 text-ink-soft">
          L’objectif n’est pas de devenir commercial.
          <span class="text-ink">
            C’est de construire un système simple qui fait comprendre ta valeur aux bonnes personnes.
          </span>
        </p>

        <a
          href="#methode"
          class="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-petrol transition hover:text-petrol-light"
        >
          Découvrir la méthode
          <span aria-hidden="true" class="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const shifts = [
  { from: 'Répondre à toutes les offres', to: 'Cibler les bonnes opportunités' },
  { from: 'Lister tes compétences', to: 'Rendre ta valeur évidente' },
  { from: 'Attendre qu’on te contacte', to: 'Créer tes propres opportunités' },
  { from: 'Chercher quand ça devient urgent', to: 'Construire une acquisition régulière' },
]
</script>
