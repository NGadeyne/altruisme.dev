<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

interface Workshop {
  id: string
  title: string
  date?: string
  description: string
  duration?: string
  replayUrl?: string
}

const workshops: Workshop[] = [
  {
    id: 'positionnement',
    title: 'Trouver son positionnement en 60 minutes',
    description:
      'Un atelier pratique pour clarifier ta cible, ton expertise et la manière dont tu te présentes sur le marché.',
    duration: '1h',
  },
  {
    id: 'audit-malt',
    title: 'Audit de profils Malt en direct',
    description:
      'Analyse de profils en direct pour identifier ce qui rassure un client, ce qui bloque et ce qu’il faut améliorer.',
    duration: '1h',
  },
  {
    id: 'ciblage-prospects',
    title: 'Construire une liste de 50 prospects qualifiés',
    description:
      'Passe du ciblage théorique à une vraie liste de prospects pertinents que tu peux contacter immédiatement.',
    duration: '1h',
  },
  {
    id: 'messages-prospection',
    title: 'Prospection : écrire des messages qui obtiennent des réponses',
    description:
      'Travaille tes messages de prospection et tes relances pour démarrer davantage de conversations.',
    duration: '1h',
  },
  {
    id: 'contenus-linkedin',
    title: 'LinkedIn : trouver 10 idées de contenus en 30 minutes',
    description:
      'Construis rapidement une réserve de sujets utiles pour publier sans passer des heures à chercher quoi dire.',
    duration: '1h',
  },
  {
    id: 'simulation-esn',
    title: 'Simuler un entretien avec une ESN',
    description:
      'Une mise en situation pour apprendre à présenter ton profil, qualifier la mission et répondre aux questions difficiles.',
    duration: '1h',
  },
  {
    id: 'simulation-client',
    title: 'Simuler un entretien avec un client final',
    description:
      'Entraîne-toi à comprendre le besoin, démontrer ta valeur et transformer un échange en véritable opportunité.',
    duration: '1h',
  },
  {
    id: 'revue-acquisition',
    title: 'Faire le point sur son acquisition et débloquer ce qui coince',
    description:
      'Analyse tes actions, ton pipeline et tes résultats pour identifier précisément le prochain levier à travailler.',
    duration: '1h',
  },
]
</script>

<template>
  <BaseContainer>
    <!-- Header -->
    <header class="max-w-3xl">
      <p class="text-sm font-semibold text-fuchsia-600">Ateliers</p>

      <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
        Replays des ateliers
      </h1>

      <p class="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
        Une sélection des ateliers de groupe les plus utiles à revoir pendant ton accompagnement.
      </p>
    </header>

    <!-- Replays -->
    <section class="mt-12">
      <div class="grid gap-5 lg:grid-cols-2">
        <article
          v-for="workshop in workshops"
          :key="workshop.id"
          class="group flex min-h-60 flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-fuchsia-200 hover:shadow-md"
        >
          <!-- Meta -->
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700"
            >
              Replay
            </span>

            <template v-if="workshop.date">
              <span class="text-sm text-zinc-400">
                {{ workshop.date }}
              </span>
            </template>

            <template v-if="workshop.duration">
              <span v-if="workshop.date" class="text-zinc-300" aria-hidden="true"> · </span>

              <span class="text-sm text-zinc-400">
                {{ workshop.duration }}
              </span>
            </template>
          </div>

          <!-- Content -->
          <div class="mt-5">
            <h2 class="text-xl font-semibold tracking-tight text-zinc-950">
              {{ workshop.title }}
            </h2>

            <p class="mt-2 text-sm leading-6 text-zinc-600">
              {{ workshop.description }}
            </p>
          </div>

          <!-- Action -->
          <div class="mt-auto pt-8">
            <a
              v-if="workshop.replayUrl"
              :href="workshop.replayUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700 transition hover:text-fuchsia-800"
            >
              Voir le replay

              <span class="transition group-hover:translate-x-1" aria-hidden="true"> → </span>
            </a>

            <span v-else class="text-sm font-medium text-zinc-400">
              Replay bientôt disponible
            </span>
          </div>
        </article>
      </div>
    </section>
  </BaseContainer>
</template>
