<script setup lang="ts">
import GuideArticleLayout from '@/components/guides/GuideArticleLayout.vue'

const criteria = [
  {
    title: 'Le besoin',
    description:
      'Pourquoi le client cherche-t-il un freelance maintenant ? Quel problème doit être résolu ?',
  },
  {
    title: 'Le périmètre',
    description: 'Quel sera réellement ton rôle ? Quelles responsabilités et quelles attentes ?',
  },
  {
    title: 'Les conditions',
    description: 'TJM, durée, rythme, télétravail, localisation et délai de paiement.',
  },
  {
    title: 'L’environnement',
    description:
      'Équipe, management, niveau de maturité, organisation et principaux interlocuteurs.',
  },
]

const checklist = [
  'Tu comprends pourquoi le client recrute.',
  'Le périmètre de la mission est suffisamment clair.',
  'Le TJM et les conditions te conviennent.',
  'Tu sais avec qui tu vas travailler.',
  'Tu as identifié les principaux risques ou zones floues.',
  'Tu choisis la mission autant qu’elle te choisit.',
]
</script>

<template>
  <GuideArticleLayout
    category="Signature"
    title="Comment qualifier une mission avant de dire oui"
    description="TJM, contexte, management, périmètre et conditions : les questions essentielles à poser avant de t’engager."
    reading-time="8 min"
    updated-at="en août 2026"
  >
    <template #toc>
      <a href="#enjeu" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Pourquoi qualifier
      </a>
      <a href="#criteres" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les critères
      </a>
      <a href="#questions" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les bonnes questions
      </a>
      <a href="#tjm" class="block !text-[#78827e] transition hover:!text-[#668c89]"> Le TJM </a>
      <a href="#redflags" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les red flags
      </a>
      <a href="#decision" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La décision
      </a>
      <a href="#checklist" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Checklist
      </a>
    </template>

    <div class="space-y-6 text-base leading-8 text-[#64706c]">
      <p class="text-lg text-[#46504d]">
        Trouver une mission n’est pas le seul objectif. Encore faut-il trouver une mission que tu as
        réellement intérêt à accepter.
      </p>
    </div>

    <section id="enjeu" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">01 — L’enjeu</p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Une opportunité n’est pas forcément une bonne mission.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Quand la recherche dure, il est tentant de dire oui rapidement. Prendre quelques minutes
        pour qualifier la mission peut éviter plusieurs mois compliqués.
      </p>
    </section>

    <section id="criteres" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        02 — Les critères
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Quatre dimensions à clarifier.
      </h2>

      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <div
          v-for="criterion in criteria"
          :key="criterion.title"
          class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6"
        >
          <h3 class="font-semibold text-[#222826]">
            {{ criterion.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            {{ criterion.description }}
          </p>
        </div>
      </div>
    </section>

    <section id="questions" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        03 — Les questions
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Fais parler le contexte avant de parler de toi.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Pourquoi maintenant ? Qu’est-ce qui bloque ? À quoi ressemblera une mission réussie ? Ces
        réponses valent souvent plus qu’une fiche de poste.
      </p>
    </section>

    <section id="tjm" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">04 — Le TJM</p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Le prix n’est qu’une partie de l’équation.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Un bon TJM avec trois jours de transport ou des délais de paiement très longs n’a pas la
        même valeur qu’une mission plus simple à vivre.
      </p>
    </section>

    <section id="redflags" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        05 — Les red flags
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Les zones floues sont aussi des informations.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Un périmètre impossible à expliquer, des interlocuteurs contradictoires, une urgence
        permanente ou des conditions qui changent à chaque échange méritent ton attention.
      </p>
    </section>

    <section id="decision" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        06 — La décision
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Tu choisis aussi ton client.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        La qualification sert autant à convaincre le client qu’à déterminer si tu veux réellement
        travailler avec lui.
      </p>
    </section>

    <section id="checklist" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        07 — Checklist
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Avant de dire oui.
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
