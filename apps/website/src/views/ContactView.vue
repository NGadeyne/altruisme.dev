<template>
  <main class="min-h-screen bg-sand">
    <section
      class="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <!-- Background -->
      <div
        class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_45%,#e4ece8_100%)]"
      />

      <div
        class="pointer-events-none absolute left-1/2 top-[-120px] -z-10 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-petrol/12 blur-[150px]"
      />

      <BaseContainer>
        <div class="relative mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            Faire le point
          </p>

          <h1
            class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Parlons de ta recherche de mission.
          </h1>

          <p
            class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            Un échange simple pour comprendre où tu en es, ce qui bloque
            aujourd’hui et voir si un accompagnement peut réellement t’aider.
          </p>

          <!-- CTA -->
          <div class="mt-10">
            <BaseButton
              href="https://calendly.com/nicolas-gadeyne/faire-le-point-sur-ta-situation-freelance"
              size="large"
            >
              Réserver un échange
            </BaseButton>
          </div>

          <p class="mt-4 text-sm text-muted-light">
            30 minutes · Sans engagement
          </p>
        </div>

        <!-- Reassurance -->
        <div
          class="relative mx-auto mt-16 max-w-4xl border-y border-petrol/15"
        >
          <div
            v-for="item in reassurance"
            :key="item.number"
            class="grid gap-4 border-b border-petrol/15 py-7 last:border-b-0 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <div>
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-petrol/8 text-sm font-semibold text-petrol"
              >
                {{ item.number }}
              </span>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-ink">
                {{ item.title }}
              </h2>

              <p class="mt-2 text-sm leading-6 text-muted">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Closing -->
        <div
          class="mx-auto mt-12 max-w-3xl border-l-2 border-petrol/30 pl-5"
        >
          <p class="text-sm font-semibold text-petrol">
            Pas de vente forcée
          </p>

          <p class="mt-2 text-lg font-semibold leading-7 text-ink">
            Si je pense que je ne suis pas la bonne personne pour t’aider,
            <span class="text-ink-soft">
              je te le dirai simplement.
            </span>
          </p>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const reassurance = [
  {
    number: '01',
    title: 'On part de ta situation',
    description:
      'Mission actuelle, recherche, positionnement, prospection, opportunités : on regarde simplement où tu en es aujourd’hui.',
  },
  {
    number: '02',
    title: 'On identifie ce qui bloque',
    description:
      'L’objectif est de comprendre ce qui ralentit réellement ta recherche, plutôt que d’ajouter encore une nouvelle technique.',
  },
  {
    number: '03',
    title: 'On voit si je peux t’aider',
    description:
      'Si l’accompagnement est pertinent pour ta situation, je t’explique comment on peut avancer ensemble. Sinon, on en reste là.',
  },
]
</script>
