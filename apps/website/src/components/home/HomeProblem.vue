<template>
  <section class="relative overflow-hidden bg-sand-light py-20 sm:py-24 lg:py-28">
    <div
      class="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-petrol/8 blur-[130px]"
    />

    <BaseContainer>
      <div class="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div class="max-w-xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">
            Pourquoi ça bloque
          </p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Tu as l’expertise.
            <span class="text-ink-soft">Mais pas toujours les opportunités qui vont avec.</span>
          </h2>

          <p class="mt-6 text-base leading-7 text-muted sm:text-lg">
            Le problème n’est pas forcément ton niveau de compétence. C’est surtout la manière dont
            ton expertise est comprise, ciblée et transformée en opportunités.
          </p>

          <div class="mt-10 border-l-2 border-petrol/30 pl-5">
            <p class="text-sm font-semibold text-petrol">Le vrai problème</p>
            <p class="mt-2 text-lg font-semibold leading-7 text-ink">
              On t’a appris à chercher un emploi.
              <span class="text-petrol">Pas à vendre une expertise.</span>
            </p>
          </div>
        </div>

        <div class="divide-y divide-petrol/15 border-y border-petrol/15">
          <article
            v-for="problem in problems"
            :key="problem.number"
            class="group grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-petrol/8 text-sm font-semibold text-petrol"
            >
              {{ problem.number }}
            </span>

            <div>
              <h3 class="text-lg font-semibold text-ink transition group-hover:text-petrol">
                {{ problem.title }}
              </h3>
              <p class="mt-2 max-w-xl text-sm leading-6 text-muted">
                {{ problem.description }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col gap-5 border-t border-petrol/15 pt-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <p class="max-w-3xl text-lg font-medium leading-8 text-ink-soft">
          En freelance, il faut savoir
          <span class="text-ink">se positionner, devenir visible, créer des opportunités</span>
          et les transformer en mission.
        </p>

        <a
          href="#methode"
          class="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-petrol transition hover:text-petrol-light"
        >
          Voir la méthode
          <span aria-hidden="true" class="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const problems = [
  {
    number: '01',
    title: 'Tu dépends trop du marché',
    description:
      'Malt, ESN, recruteurs, réseau… tu attends souvent que la bonne opportunité vienne à toi.',
  },
  {
    number: '02',
    title: 'Ton expertise manque de lisibilité',
    description:
      'Ton profil est complet, mais un client ne comprend pas toujours immédiatement pourquoi il devrait te choisir.',
  },
  {
    number: '03',
    title: 'Ton acquisition manque de système',
    description:
      'Tu cherches surtout quand ta mission se termine, sans stratégie vraiment régulière.',
  },
]
</script>
