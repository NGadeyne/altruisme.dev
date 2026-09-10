<template>
  <section id="methode" class="relative overflow-hidden bg-sand-light py-20 sm:py-24 lg:py-28">
    <div
      class="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-petrol/8 blur-[120px]"
    />

    <BaseContainer>
      <div class="relative">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">La méthode</p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Une méthode complète.
            <span class="text-ink-soft">De ton positionnement à la signature.</span>
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            On avance dans le bon ordre : construire des fondations solides, créer davantage
            d’opportunités puis apprendre à les transformer en mission.
          </p>
        </div>

        <div class="mt-14 border-y border-petrol/15">
          <article
            v-for="step in steps"
            :key="step.number"
            class="grid gap-6 border-b border-petrol/15 py-8 last:border-b-0 lg:grid-cols-[120px_0.85fr_1.15fr] lg:items-start lg:gap-10 lg:py-10"
          >
            <div class="flex items-center gap-3 lg:block">
              <span class="text-4xl font-bold tracking-tight text-petrol/25 lg:text-5xl">
                {{ step.number }}
              </span>
              <span
                class="rounded-full border border-petrol/20 bg-petrol/8 px-3 py-1 text-xs font-semibold text-petrol lg:mt-4 lg:inline-flex"
              >
                {{ step.label }}
              </span>
            </div>

            <div>
              <h3 class="text-2xl font-semibold tracking-tight text-ink">{{ step.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-muted">{{ step.description }}</p>
            </div>

            <ul class="grid gap-3 sm:grid-cols-2">
              <li
                v-for="item in step.items"
                :key="item"
                class="flex items-start gap-3 text-sm leading-6 text-ink-soft"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>

        <div
          class="mt-10 flex flex-col gap-6 rounded-3xl border border-petrol/15 bg-mist/80 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p class="text-sm font-semibold text-petrol">Le résultat</p>
            <p class="mt-2 max-w-2xl text-lg font-medium leading-8 text-ink">
              Une stratégie claire pour savoir
              <span class="text-petrol">quoi faire, qui cibler et comment signer.</span>
            </p>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Pas une accumulation de conseils : un chemin simple à suivre, étape après étape,
              jusqu’à ta prochaine mission.
            </p>
          </div>

          <BaseButton href="#accompagnement" variant="secondary" size="large">
            Voir comment on l’applique
          </BaseButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const steps = [
  {
    number: '01',
    label: 'Fondations',
    title: 'Rends ton expertise évidente',
    description:
      'On clarifie ce que tu apportes, à qui tu t’adresses et comment présenter ta valeur pour donner envie de te contacter.',
    items: ['Positionnement & offre', 'Malt, LinkedIn & plateformes', 'CV & dossier de compétences', 'Crédibilité & légitimité'],
  },
  {
    number: '02',
    label: 'Accélération',
    title: 'Crée plus d’opportunités',
    description:
      'On choisit les bons canaux et on construit une acquisition simple, régulière et adaptée à ton métier.',
    items: ['Ciblage ESN & clients finaux', 'Prospection', 'Création de contenu', 'Routine d’acquisition'],
  },
  {
    number: '03',
    label: 'Signature',
    title: 'Transforme les opportunités en mission',
    description:
      'On apprend à qualifier les missions, réussir les échanges et défendre ta valeur sans accepter n’importe quelle opportunité.',
    items: ['Qualification des missions', 'Entretiens & rendez-vous', 'TJM & négociation', 'Choix de la bonne mission'],
  },
]
</script>
