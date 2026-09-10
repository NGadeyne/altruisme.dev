<template>
  <section
    class="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28"
  >
    <div
      class="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-petrol/10 blur-[120px]"
    />

    <BaseContainer>
      <div class="relative">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            Ma façon d’accompagner
          </p>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Je ne suis pas là pour te donner une liste de conseils.

            <span class="text-ink-soft">
              On travaille directement sur ta recherche de mission.
            </span>
          </h2>

          <p
            class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            Ton positionnement, tes profils, tes messages, tes opportunités :
            chaque échange doit t’aider à avancer concrètement.
          </p>
        </div>

        <!-- Principles -->
        <div
          class="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2"
        >
          <article
            v-for="principle in principles"
            :key="principle.number"
            class="border-t border-petrol/20 pt-6"
          >
            <div
              class="flex items-center gap-4"
            >
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-petrol/8 text-sm font-semibold text-petrol"
              >
                {{ principle.number }}
              </span>

              <h3
                class="text-lg font-semibold text-ink"
              >
                {{ principle.title }}
              </h3>
            </div>

            <p
              class="mt-4 text-sm leading-6 text-muted"
            >
              {{ principle.description }}
            </p>
          </article>
        </div>

        <!-- Closing -->
        <div
          class="mt-14 flex flex-col gap-5 border-t border-petrol/15 pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
        >
          <p
            class="max-w-3xl text-lg font-medium leading-8 text-ink-soft"
          >
            Mon objectif n’est pas que tu deviennes dépendant de moi.

            <span class="text-ink">
              C’est qu’à la prochaine recherche de mission,
              tu saches exactement quoi faire.
            </span>
          </p>

          <p
            class="shrink-0 text-sm font-semibold text-petrol"
          >
            Simple. Humain. Actionnable.
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const principles = [
  {
    number: '01',
    title: 'On part de ta réalité',
    description:
      'Ton métier, ton expérience, ton marché et tes objectifs déterminent la stratégie. Un développeur C++, un Product Owner et un consultant SIRH ne cherchent pas une mission de la même manière.',
  },
  {
    number: '02',
    title: 'On travaille sur du concret',
    description:
      'On ne passe pas des heures à parler de théorie. On retravaille directement ton positionnement, tes profils, tes messages et les opportunités que tu as devant toi.',
  },
  {
    number: '03',
    title: 'Je te challenge quand c’est nécessaire',
    description:
      'Mon rôle n’est pas uniquement de te rassurer. Si ton positionnement est trop flou, ton message trop générique ou une opportunité mauvaise, je te le dirai.',
  },
  {
    number: '04',
    title: 'Tu gardes une méthode après l’accompagnement',
    description:
      'Le but est que tu comprennes pourquoi les actions fonctionnent afin de pouvoir reproduire le système seul lors de tes prochaines recherches.',
  },
]
</script>
