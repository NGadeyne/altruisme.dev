<script setup lang="ts">
import GuideArticleLayout from '@/components/guides/GuideArticleLayout.vue'

const checklist = [
  'Ton titre explique clairement ton positionnement.',
  'Ta bannière renforce ta promesse.',
  'La section Infos parle aux prospects, pas uniquement aux recruteurs.',
  'Tes expériences sont orientées contexte, missions et résultats.',
  'Tes compétences principales sont cohérentes avec ton positionnement.',
  'Ton profil donne une action évidente à la personne qui le visite.',
]
</script>

<template>
  <GuideArticleLayout
    category="LinkedIn"
    title="Transformer son profil LinkedIn en vitrine freelance"
    description="Construis un profil cohérent avec ton positionnement et donne aux prospects une vraie raison de te contacter."
    reading-time="9 min"
    updated-at="en août 2026"
  >
    <template #toc>
      <a href="#objectif" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Le rôle du profil
      </a>
      <a href="#titre" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Le titre
      </a>
      <a href="#banniere" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La bannière
      </a>
      <a href="#infos" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La section Infos
      </a>
      <a href="#experiences" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les expériences
      </a>
      <a href="#coherence" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La cohérence
      </a>
      <a href="#checklist" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Checklist
      </a>
    </template>

    <div class="space-y-6 text-base leading-8 text-[#64706c]">
      <p class="text-lg text-[#46504d]">
        LinkedIn n’est pas seulement un CV en ligne. Pour un freelance, c’est aussi une page de
        crédibilité et d’acquisition.
      </p>
    </div>

    <section id="objectif" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        01 — Comprendre
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ton profil doit rassurer avant même le premier échange.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Quand un prospect clique sur ton profil, il doit rapidement comprendre ton expertise, ton
        expérience et ta valeur.
      </p>
    </section>

    <section id="titre" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        02 — Le titre
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ne te limite pas à ton intitulé de poste.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Ton titre peut combiner ton métier, ta spécialisation, ton marché et le résultat que tu
        aides à obtenir.
      </p>
    </section>

    <section id="banniere" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        03 — La bannière
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Utilise ta bannière comme espace de positionnement.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Une phrase simple peut suffire pour rappeler ton expertise et renforcer la cohérence du
        profil.
      </p>
    </section>

    <section id="infos" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        04 — La section Infos
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Parle d’abord du problème que tu résous.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Commence par la valeur apportée, puis utilise ton parcours et tes compétences comme preuves.
      </p>
    </section>

    <section id="experiences" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        05 — Les expériences
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Montre ce que tu as réellement produit.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Contexte, responsabilités, résultats, environnement : transforme tes expériences en preuves
        concrètes.
      </p>
    </section>

    <section id="coherence" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        06 — Cohérence
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Malt, CV et LinkedIn doivent raconter la même histoire.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Les formats peuvent changer. Ton positionnement principal, lui, doit rester cohérent.
      </p>
    </section>

    <section id="checklist" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        07 — Checklist
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ton profil travaille-t-il vraiment pour toi ?
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
