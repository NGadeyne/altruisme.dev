<script setup lang="ts">
import GuideArticleLayout from '@/components/guides/GuideArticleLayout.vue'

const channels = [
  {
    title: 'ESN',
    description:
      'Identifie les ESN qui recrutent régulièrement ton type de profil et construis une relation avec les bons Business Managers.',
  },
  {
    title: 'Clients finaux',
    description:
      'Cible les entreprises où ton expertise répond à une problématique concrète et contacte les décideurs concernés.',
  },
]

const checklist = [
  'Tu sais précisément qui tu veux contacter.',
  'Ton message est adapté au type de cible.',
  'Tu donnes une raison concrète de te répondre.',
  'Tu évites les messages copiés-collés trop génériques.',
  'Tu relances de manière raisonnable.',
  'Tu suis tes échanges dans un pipeline simple.',
]
</script>

<template>
  <GuideArticleLayout
    category="Prospection"
    title="Prospecter des ESN et des clients finaux sans spammer"
    description="Comment choisir tes cibles, trouver les bons interlocuteurs et lancer des conversations naturelles autour de ton expertise."
    reading-time="10 min"
    updated-at="en août 2026"
  >
    <template #toc>
      <a href="#principe" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Le principe
      </a>
      <a href="#ciblage" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Le ciblage
      </a>
      <a href="#canaux" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        ESN ou client final
      </a>
      <a href="#message" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Le message
      </a>
      <a href="#relance" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La relance
      </a>
      <a href="#routine" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La routine
      </a>
      <a href="#checklist" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Checklist
      </a>
    </template>

    <div class="space-y-6 text-base leading-8 text-[#64706c]">
      <p class="text-lg text-[#46504d]">
        Prospecter ne veut pas dire envoyer 100 messages génériques par jour. Une prospection
        efficace commence par un bon ciblage.
      </p>
    </div>

    <section id="principe" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        01 — Le principe
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Moins de volume. Plus de pertinence.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        L’objectif est d’ouvrir des conversations avec des entreprises qui ont réellement une raison
        de travailler avec toi.
      </p>
    </section>

    <section id="ciblage" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">02 — Ciblage</p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Commence par choisir les bonnes entreprises.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Taille, secteur, stack, localisation, maturité ou type de projet : définis les critères qui
        rendent une cible intéressante.
      </p>
    </section>

    <section id="canaux" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        03 — Les canaux
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        ESN et clients finaux ne se prospectent pas de la même manière.
      </h2>

      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <div
          v-for="channel in channels"
          :key="channel.title"
          class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6"
        >
          <p class="font-semibold text-[#222826]">
            {{ channel.title }}
          </p>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            {{ channel.description }}
          </p>
        </div>
      </div>
    </section>

    <section id="message" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        04 — Le message
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Donne une raison simple de répondre.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Ton message doit montrer rapidement pourquoi tu contactes cette personne et en quoi ton
        profil peut être pertinent.
      </p>
    </section>

    <section id="relance" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        05 — La relance
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Relancer n’est pas harceler.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Beaucoup de conversations commencent après une relance. Reste simple, poli et raisonnable
        dans la fréquence.
      </p>
    </section>

    <section id="routine" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        06 — La routine
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        La régularité vaut mieux qu’un sprint de panique.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Une petite routine chaque semaine évite de repartir de zéro à chaque fin de mission.
      </p>
    </section>

    <section id="checklist" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        07 — Checklist
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ta prospection est-elle suffisamment ciblée ?
      </h2>

      <div class="mt-8 rounded-3xl border border-[#4f7774]/15 bg-white/45 p-6 sm:p-8">
        <ul class="space-y-4">
          <li v-for="item in checklist" :key="item" class="flex items-start gap-3">
            <span
              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#4f7774]/30 bg-[#4f7774]/10 text-xs text-[#4f7774]"
            >
              ✓
            </span>

            <span class="text-sm leading-6 text-[#46504d]">
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </section>
  </GuideArticleLayout>
</template>
