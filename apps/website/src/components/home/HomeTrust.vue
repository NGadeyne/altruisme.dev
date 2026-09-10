<template>
  <section class="relative overflow-hidden bg-sand-light py-20 sm:py-24 lg:py-28">
    <BaseContainer>
      <div class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div class="max-w-xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Pourquoi moi</p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Je connais le terrain.
            <span class="text-ink-soft">Parce que je suis freelance moi aussi.</span>
          </h2>

          <p class="mt-6 text-base leading-7 text-muted sm:text-lg">
            Je suis Product Manager freelance depuis plus de 7 ans. J’ai connu les plateformes, les
            ESN, les clients finaux, les périodes de mission… et celles où il faut retrouver la suivante.
          </p>

          <p class="mt-4 text-base leading-7 text-muted">
            Aujourd’hui, j’accompagne des freelances IT & Tech à clarifier leur positionnement,
            mieux présenter leur expertise et construire une acquisition plus régulière.
          </p>

          <div class="mt-9 border-l-2 border-petrol/30 pl-5">
            <p class="text-sm font-semibold text-petrol">Ma philosophie</p>
            <p class="mt-2 text-base font-medium leading-7 text-ink-soft">
              Mon objectif n’est pas de te transformer en commercial.
              <span class="text-ink">
                C’est de rendre ton expertise plus facile à comprendre, à trouver et à acheter.
              </span>
            </p>
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold text-ink-soft">Quelques accompagnements</p>

          <div class="mt-5 divide-y divide-petrol/15 border-y border-petrol/15">
            <article v-for="client in clients" :key="client.title" class="py-6 sm:py-7">
              <div class="flex flex-wrap items-center gap-3">
                <span class="rounded-full border border-petrol/15 bg-white/45 px-3 py-1 text-xs font-semibold text-ink-soft">
                  {{ client.profile }}
                </span>
                <span class="text-xs text-muted-light">{{ client.context }}</span>
              </div>

              <h3 class="mt-4 text-lg font-semibold text-ink">{{ client.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-muted">{{ client.description }}</p>

              <div class="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                <span v-for="result in client.results" :key="result" class="inline-flex items-center gap-2 text-xs font-medium text-petrol">
                  <span class="h-1.5 w-1.5 rounded-full bg-petrol" />
                  {{ result }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const clients = [
  {
    profile: 'Développeur',
    context: 'Profil technique niché',
    title: 'Repositionner une expertise difficile à vendre',
    description:
      'Clarification du positionnement, réécriture du profil Malt et structuration des expériences pour mieux parler aux ESN et clients finaux.',
    results: ['Positionnement clarifié', 'Profil Malt optimisé', 'Mots-clés ciblés'],
  },
  {
    profile: 'SIRH',
    context: 'Profil senior',
    title: 'Transformer un parcours riche en offre lisible',
    description:
      'Travail sur le titre, les expériences et les compétences pour rendre immédiatement visible la valeur d’un profil très expérimenté.',
    results: ['Expertise mieux lisible', 'Expériences retravaillées', '45 compétences ciblées'],
  },
  {
    profile: 'IT / Product',
    context: 'Recherche de mission',
    title: 'Construire une acquisition plus structurée',
    description:
      'Positionnement, optimisation des supports et mise en place d’une stratégie combinant plateformes, ESN, prospection et contenu.',
    results: ['Ciblage structuré', 'Acquisition multicanale', 'Routine claire'],
  },
]
</script>
