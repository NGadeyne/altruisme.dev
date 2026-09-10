<template>
  <section
    class="relative overflow-hidden bg-sand py-20 sm:py-24 lg:py-28"
  >
    <BaseContainer>
      <div
        class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20"
      >
        <!-- Intro -->
        <div class="max-w-xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            Derrière le travail
          </p>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            J’aime beaucoup travailler.

            <span class="text-ink-soft">
              Mais je n’ai aucune envie que le travail devienne toute ma vie.
            </span>
          </h2>

          <p
            class="mt-6 text-base leading-7 text-muted sm:text-lg"
          >
            C’est aussi ce que le freelancing m’a apporté :
            la possibilité de construire une activité qui laisse de la place
            à d’autres choses importantes.
          </p>

          <p
            class="mt-4 text-base leading-7 text-muted"
          >
            Du sport, de l’écriture, des projets personnels, apprendre,
            passer du temps avec les gens que j’aime… et parfois simplement
            fermer l’ordinateur.
          </p>

          <div
            class="mt-10 border-l-2 border-petrol/30 pl-5"
          >
            <p
              class="text-lg font-semibold leading-7 text-ink"
            >
              Je ne cherche pas à construire la plus grosse activité possible.

              <span class="text-petrol">
                Je préfère construire quelque chose d’utile, libre et durable.
              </span>
            </p>
          </div>
        </div>

        <!-- Interests -->
        <div
          class="divide-y divide-petrol/15 border-y border-petrol/15"
        >
          <article
            v-for="item in interests"
            :key="item.title"
            class="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-petrol/8 text-lg text-petrol"
            >
              {{ item.icon }}
            </div>

            <div>
              <h3
                class="text-lg font-semibold text-ink"
              >
                {{ item.title }}
              </h3>

              <p
                class="mt-2 text-sm leading-6 text-muted"
              >
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const interests = [
  {
    icon: '✦',
    title: 'Construire',
    description:
      'Produits, side projects, plateformes ou outils : j’aime transformer une idée en quelque chose de concret et utile.',
  },
  {
    icon: '✎',
    title: 'Écrire',
    description:
      'J’écris depuis longtemps. Des livres, des histoires, des idées. C’est probablement l’activité qui me permet le plus de prendre du recul.',
  },
  {
    icon: '↗',
    title: 'Bouger',
    description:
      'Tennis, course à pied et sport en général : l’antidote parfait aux journées passées devant un écran.',
  },
  {
    icon: '∞',
    title: 'Apprendre et transmettre',
    description:
      'J’aime comprendre comment les choses fonctionnent, expérimenter, puis rendre ce que j’ai appris plus simple et accessible.',
  },
]
</script>
