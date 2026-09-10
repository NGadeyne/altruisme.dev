<template>
  <section
    class="relative overflow-hidden bg-sand-light py-20 sm:py-24 lg:py-28"
  >
    <div
      class="pointer-events-none absolute left-0 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/8 blur-[120px]"
    />

    <BaseContainer>
      <div
        class="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20"
      >
        <!-- Left -->
        <div class="max-w-xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            Mon parcours
          </p>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Avant d’accompagner des freelances,

            <span class="text-ink-soft">
              j’ai commencé par vivre leurs problèmes.
            </span>
          </h2>

          <p
            class="mt-6 text-base leading-7 text-muted sm:text-lg"
          >
            Trouver une mission, défendre son TJM, se rendre visible,
            choisir les bons interlocuteurs, relancer sans devenir lourd…
            je suis passé par les mêmes questions.
          </p>

          <div class="mt-10 border-l-2 border-petrol/30 pl-5">
            <p
              class="text-sm font-semibold text-petrol"
            >
              Ce que j’ai appris
            </p>

            <p
              class="mt-2 text-lg font-semibold leading-7 text-ink"
            >
              Être bon dans son métier ne suffit pas toujours.

              <span class="text-petrol">
                Encore faut-il que le marché comprenne pourquoi te choisir.
              </span>
            </p>
          </div>
        </div>

        <!-- Journey -->
        <div
          class="divide-y divide-petrol/15 border-y border-petrol/15"
        >
          <article
            v-for="step in journey"
            :key="step.number"
            class="grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <div>
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-petrol/8 text-sm font-semibold text-petrol"
              >
                {{ step.number }}
              </span>
            </div>

            <div>
              <h3
                class="text-lg font-semibold text-ink"
              >
                {{ step.title }}
              </h3>

              <p
                class="mt-2 max-w-xl text-sm leading-6 text-muted"
              >
                {{ step.description }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- Why -->
      <div
        class="mt-14 flex flex-col gap-5 border-t border-petrol/15 pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
      >
        <p
          class="max-w-3xl text-lg font-medium leading-8 text-ink-soft"
        >
          C’est ce parcours qui m’a progressivement amené à accompagner
          d’autres freelances.

          <span class="text-ink">
            Pas avec une recette universelle, mais avec une méthode structurée
            autour de leur réalité.
          </span>
        </p>

        <RouterLink
          to="/#offres"
          class="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-petrol transition hover:text-petrol-light"
        >
          Découvrir l’accompagnement

          <span
            aria-hidden="true"
            class="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </RouterLink>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const journey = [
  {
    number: '01',
    title: 'Construire des produits',
    description:
      'J’ai commencé côté développement avant d’évoluer vers le Product Management, la UX et le Delivery, au croisement de la tech et du business.',
  },
  {
    number: '02',
    title: 'Devenir freelance',
    description:
      'Pendant 7 ans, j’ai enchaîné plus de 10 missions et travaillé avec des ESN, des plateformes et des clients finaux.',
  },
  {
    number: '03',
    title: 'Structurer ma propre acquisition',
    description:
      'Avec le temps, j’ai appris à mieux travailler mon positionnement, mes profils, mon ciblage, ma prospection et ma visibilité.',
  },
  {
    number: '04',
    title: 'Accompagner à mon tour',
    description:
      'Aujourd’hui, je transforme cette expérience terrain en méthode concrète pour aider d’autres freelances IT & Tech à trouver leurs prochaines missions.',
  },
]
</script>
