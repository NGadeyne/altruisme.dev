<script setup lang="ts">
import GuideArticleLayout from '@/components/guides/GuideArticleLayout.vue'

const checklist = [
  'Ton titre contient ton métier et tes mots-clés principaux.',
  'Ton introduction explique rapidement ta valeur.',
  'Tes expériences sont structurées autour du contexte, des missions et des résultats.',
  'Tes compétences correspondent réellement aux recherches de tes clients.',
  'Ton TJM est cohérent avec ton niveau et ton marché.',
  'Ton profil raconte la même histoire que ton LinkedIn et ton CV.',
]
</script>

<template>
  <GuideArticleLayout
    category="Malt"
    title="Comment optimiser son profil Malt pour générer plus d’opportunités"
    description="Titre, description, expériences, mots-clés et TJM : les éléments essentiels pour rendre ton profil plus visible et plus convaincant."
    reading-time="10 min"
    updated-at="en août 2026"
  >
    <template #toc>
      <a href="#objectif" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Le rôle de ton profil Malt
      </a>
      <a href="#titre" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Le titre
      </a>
      <a href="#description" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La description
      </a>
      <a href="#experiences" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les expériences
      </a>
      <a href="#mots-cles" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les mots-clés
      </a>
      <a href="#tjm" class="block !text-[#78827e] transition hover:!text-[#668c89]"> Le TJM </a>
      <a href="#checklist" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Checklist
      </a>
    </template>

    <div class="space-y-6 text-base leading-8 text-[#64706c]">
      <p class="text-lg text-[#46504d]">
        Ton profil Malt ne doit pas simplement raconter ton parcours. Il doit aider un prospect à
        comprendre rapidement pourquoi il devrait te contacter.
      </p>

      <div class="rounded-2xl border border-[#4f7774]/15 bg-[#4f7774]/[0.05] p-6">
        <p class="font-medium text-[#222826]">Un bon profil Malt combine visibilité et conversion.</p>

        <p class="mt-2">
          Être trouvé ne suffit pas. Encore faut-il donner envie de cliquer, lire ton profil et te
          contacter.
        </p>
      </div>
    </div>

    <section id="objectif" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        01 — Comprendre
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ton profil Malt est une page de vente.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Il doit présenter ton expertise, rassurer sur ton expérience et faciliter la décision du
        prospect.
      </p>
    </section>

    <section id="titre" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        02 — Le titre
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Commence par être compris.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Ton titre doit contenir ton métier, ton niveau de spécialisation et les mots-clés que tes
        prospects utilisent réellement.
      </p>
    </section>

    <section id="description" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        03 — La description
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Explique ta valeur avant de raconter ton parcours.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Les premières lignes doivent expliquer qui tu aides, sur quels sujets et pourquoi ton
        expérience est pertinente.
      </p>
    </section>

    <section id="experiences" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        04 — Les expériences
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Transforme tes expériences en preuves.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Une bonne structure consiste à présenter le contexte, tes missions, les résultats obtenus et
        l’environnement utilisé.
      </p>
    </section>

    <section id="mots-cles" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        05 — Les mots-clés
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Pense comme ton prospect.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Les bons mots-clés sont ceux utilisés dans les missions et recherches associées à ton
        expertise.
      </p>
    </section>

    <section id="tjm" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">06 — Le TJM</p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ton TJM est aussi un signal de positionnement.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Il doit être cohérent avec ton expérience, ton marché et la valeur perçue de ton profil.
      </p>
    </section>

    <section id="checklist" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        07 — Checklist
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ton profil est-il prêt ?
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
