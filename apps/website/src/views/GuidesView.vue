<script setup lang="ts">
import { computed, ref } from 'vue'

import BaseContainer from '@/components/ui/BaseContainer.vue'

type Category = 'Fondations' | 'Accélération' | 'Signature'
type Filter = 'Tous' | Category

type Guide = {
  category: Category
  topic: string
  title: string
  description: string
  readingTime: string
  status: 'available' | 'soon'
  to?: string
}

const filters: Filter[] = [
  'Tous',
  'Fondations',
  'Accélération',
  'Signature',
]

const activeFilter = ref<Filter>('Tous')

const guides: Guide[] = [
  // Fondations
  {
    category: 'Fondations',
    topic: 'Positionnement',
    title: 'Comment trouver un positionnement freelance clair et différenciant',
    description:
      'Une méthode simple pour arrêter de présenter une liste de compétences et rendre ta valeur immédiatement compréhensible.',
    readingTime: '8 min',
    status: 'available',
    to: '/guides/positionnement-freelance',
  },
  {
    category: 'Fondations',
    topic: 'Malt',
    title: 'Comment optimiser son profil Malt pour générer plus d’opportunités',
    description:
      'Titre, description, expériences, mots-clés et TJM : les éléments qui font réellement la différence sur ton profil.',
    readingTime: '10 min',
    status: 'available',
    to: '/guides/optimiser-profil-malt',
  },
  {
    category: 'Fondations',
    topic: 'LinkedIn',
    title: 'Transformer son profil LinkedIn en vitrine freelance',
    description:
      'Construis un profil cohérent avec ton positionnement et donne aux prospects une vraie raison de te contacter.',
    readingTime: '9 min',
    status: 'available',
    to: '/guides/profil-linkedin-freelance',
  },
  {
    category: 'Fondations',
    topic: 'CV freelance IT',
    title: 'CV freelance IT : modèle, exemples et guide complet',
    description:
      'Structure, expériences, compétences et exemples : construis un CV pensé pour les missions IT et les ESN.',
    readingTime: '10 min',
    status: 'soon',
  },
  {
    category: 'Fondations',
    topic: 'Portfolio',
    title: 'Comment créer un portfolio freelance IT qui rassure les clients',
    description:
      'Sélectionne les bons projets et transforme ton portfolio en preuve concrète de ton expertise.',
    readingTime: '9 min',
    status: 'soon',
  },
  {
    category: 'Fondations',
    topic: 'TJM',
    title: 'TJM freelance : comment calculer, fixer et négocier son tarif',
    description:
      'Construis un TJM cohérent avec ton expérience, ton marché, tes charges et la valeur de ton expertise.',
    readingTime: '11 min',
    status: 'soon',
  },

  // Accélération
  {
    category: 'Accélération',
    topic: 'Prospection',
    title: 'Prospecter des ESN et des clients finaux sans spammer',
    description:
      'Comment choisir tes cibles, trouver les bons interlocuteurs et lancer des conversations naturelles.',
    readingTime: '10 min',
    status: 'available',
    to: '/guides/prospection-esn-clients-finaux',
  },
  {
    category: 'Accélération',
    topic: 'Contenu',
    title: 'Créer du contenu LinkedIn quand on est freelance IT',
    description:
      'Expertise ou visibilité : deux stratégies complémentaires pour te faire connaître et rassurer tes futurs clients.',
    readingTime: '9 min',
    status: 'available',
    to: '/guides/contenu-linkedin-freelance',
  },
  {
    category: 'Accélération',
    topic: 'Mission freelance IT',
    title: 'Comment trouver une mission freelance IT en 2026',
    description:
      'Plateformes, ESN, clients finaux, réseau et prospection : construis une stratégie complète pour trouver ta prochaine mission.',
    readingTime: '12 min',
    status: 'soon',
  },
  {
    category: 'Accélération',
    topic: 'Clients',
    title: 'Comment trouver des clients quand on est freelance IT',
    description:
      'Les principaux canaux d’acquisition pour créer des opportunités régulières sans dépendre d’une seule plateforme.',
    readingTime: '11 min',
    status: 'soon',
  },
  {
    category: 'Accélération',
    topic: 'ESN',
    title: 'Freelance et ESN : comment trouver des missions et bien négocier',
    description:
      'Comprendre le fonctionnement des ESN, identifier les bons interlocuteurs et mieux négocier tes missions.',
    readingTime: '10 min',
    status: 'soon',
  },
  {
    category: 'Accélération',
    topic: 'Plateformes',
    title: 'Meilleures plateformes freelance IT : Malt, LeHibou, Free-Work, Collective…',
    description:
      'Compare les principales plateformes IT et choisis celles qui correspondent réellement à ton profil.',
    readingTime: '12 min',
    status: 'soon',
  },

  // Signature
  {
    category: 'Signature',
    topic: 'Qualification',
    title: 'Comment qualifier une mission avant de dire oui',
    description:
      'TJM, contexte, management, périmètre et conditions : les questions essentielles à poser avant de t’engager.',
    readingTime: '8 min',
    status: 'available',
    to: '/guides/qualifier-mission-freelance',
  },
  {
    category: 'Signature',
    topic: 'Entretien',
    title: 'Comment réussir un entretien freelance et décrocher la mission',
    description:
      'Prépare ton échange, présente ton expertise avec impact et transforme l’entretien en discussion entre partenaires.',
    readingTime: '10 min',
    status: 'soon',
  },
  {
    category: 'Signature',
    topic: 'Négociation',
    title: 'Comment négocier son TJM, son contrat et ses conditions de mission',
    description:
      'TJM, télétravail, durée, paiement et périmètre : apprends à défendre tes conditions sans bloquer la discussion.',
    readingTime: '10 min',
    status: 'soon',
  },
]

const filteredGuides = computed(() => {
  if (activeFilter.value === 'Tous') {
    return guides
  }

  return guides.filter((guide) => guide.category === activeFilter.value)
})

const availableCount = computed(
  () => guides.filter((guide) => guide.status === 'available').length,
)

const soonCount = computed(
  () => guides.filter((guide) => guide.status === 'soon').length,
)
</script>

<template>
  <main class="min-h-screen bg-sand">
    <!-- Hero -->
    <section
      class="relative isolate overflow-hidden bg-sand py-20 sm:py-24 lg:py-28"
    >
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
            Guides gratuits
          </p>

          <h1
            class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Des ressources concrètes pour
            <span class="text-ink-soft">
              mieux trouver ta prochaine mission.
            </span>
          </h1>

          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted"
          >
            Positionnement, profils, prospection, contenu, qualification et négociation :
            des guides pratiques pour t’aider à avancer à chaque étape de ta recherche de mission.
          </p>

          <div
            class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-light"
          >
            <span>100 % gratuit</span>
            <span class="hidden text-petrol/30 sm:inline">•</span>
            <span>Sans inscription</span>
            <span class="hidden text-petrol/30 sm:inline">•</span>
            <span>Pensé pour les freelances IT & Tech</span>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Library -->
    <section class="bg-sand-light pb-20 pt-4 sm:pb-24 lg:pb-28">
      <BaseContainer>
        <!-- Library header -->
        <div
          class="mb-10 flex flex-col gap-6 border-b border-petrol/15 pb-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-sm font-semibold text-ink">
              La bibliothèque
            </p>

            <p class="mt-1 text-sm text-muted-light">
              {{ availableCount }} guides disponibles ·
              {{ soonCount }} bientôt disponibles
            </p>
          </div>

          <!-- Filters -->
          <div
            class="flex w-fit flex-wrap gap-1 rounded-xl border border-petrol/15 bg-white/45 p-1 backdrop-blur-sm"
          >
            <button
              v-for="filter in filters"
              :key="filter"
              type="button"
              class="rounded-lg px-3.5 py-2 text-sm font-medium transition"
              :class="
                activeFilter === filter
                  ? 'bg-petrol/12 text-petrol'
                  : 'text-muted hover:bg-white/70 hover:text-ink'
              "
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <!-- Guides -->
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <template
            v-for="guide in filteredGuides"
            :key="guide.title"
          >
            <!-- Available -->
            <RouterLink
              v-if="guide.status === 'available' && guide.to"
              :to="guide.to"
              class="group flex min-h-[320px] flex-col rounded-3xl border border-petrol/15 bg-white/55 p-6 transition duration-200 hover:-translate-y-1 hover:border-petrol/25 hover:bg-white/75 hover:shadow-lg hover:shadow-petrol/5"
            >
              <div class="flex items-center justify-between gap-4">
                <span
                  class="rounded-full border border-petrol/15 bg-petrol/8 px-3 py-1 text-xs font-semibold text-petrol"
                >
                  {{ guide.topic }}
                </span>

                <span class="text-xs text-muted-light">
                  {{ guide.readingTime }}
                </span>
              </div>

              <h2
                class="mt-6 text-xl font-semibold leading-7 tracking-tight text-ink"
              >
                {{ guide.title }}
              </h2>

              <p
                class="mt-3 flex-1 text-sm leading-6 text-muted"
              >
                {{ guide.description }}
              </p>

              <div
                class="mt-7 flex items-center justify-between border-t border-petrol/10 pt-5"
              >
                <span
                  class="text-sm font-semibold text-petrol transition group-hover:text-petrol-light"
                >
                  Lire le guide
                </span>

                <span
                  aria-hidden="true"
                  class="text-petrol transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </RouterLink>

            <!-- Soon -->
            <article
              v-else
              class="flex min-h-[320px] flex-col rounded-3xl border border-petrol/10 bg-white/30 p-6"
            >
              <div class="flex items-center justify-between gap-4">
                <span
                  class="rounded-full border border-petrol/10 bg-white/45 px-3 py-1 text-xs font-semibold text-ink-soft"
                >
                  {{ guide.topic }}
                </span>

                <span class="text-xs text-muted-light">
                  {{ guide.readingTime }}
                </span>
              </div>

              <h2
                class="mt-6 text-xl font-semibold leading-7 tracking-tight text-ink-soft"
              >
                {{ guide.title }}
              </h2>

              <p
                class="mt-3 flex-1 text-sm leading-6 text-muted-light"
              >
                {{ guide.description }}
              </p>

              <div
                class="mt-7 flex items-center justify-between border-t border-petrol/10 pt-5"
              >
                <span
                  class="inline-flex items-center gap-2 text-sm font-medium text-muted"
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full bg-petrol/55"
                  />

                  Bientôt disponible
                </span>

                <span
                  class="rounded-full border border-petrol/10 bg-white/35 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-light"
                >
                  {{ guide.category }}
                </span>
              </div>
            </article>
          </template>
        </div>

        <!-- CTA -->
        <div
          class="relative mt-16 overflow-hidden rounded-3xl border border-petrol/15 bg-mist px-6 py-10 text-center sm:px-10 sm:py-12"
        >
          <div
            class="pointer-events-none absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/12 blur-[90px]"
          />

          <div class="relative">
            <p
              class="text-sm font-semibold uppercase tracking-[0.16em] text-petrol"
            >
              Tu veux aller plus loin ?
            </p>

            <h2
              class="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Les guides t’aident sur un sujet.
              <span class="text-ink-soft">
                L’accompagnement relie toutes les étapes.
              </span>
            </h2>

            <p
              class="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted"
            >
              Positionnement, profils, prospection, opportunités et signature :
              si tu veux être accompagné pour travailler tout ça dans le bon ordre,
              on peut faire le point ensemble.
            </p>

            <a
              href="/#offres"
              class="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-petrol transition hover:text-petrol-light"
            >
              Découvrir l’accompagnement

              <span
                aria-hidden="true"
                class="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>
