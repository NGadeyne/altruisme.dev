<script setup lang="ts">
import GuideArticleLayout from '@/components/guides/GuideArticleLayout.vue'

const strategies = [
  {
    title: 'Contenu expertise',
    goal: 'Rassurer',
    description:
      'Montre comment tu réfléchis, comment tu résous un problème et ce que ton expérience t’a appris.',
  },
  {
    title: 'Contenu visibilité',
    goal: 'Être découvert',
    description:
      'Utilise des sujets plus accessibles, des opinions ou des expériences qui peuvent toucher un public plus large.',
  },
]

const checklist = [
  'Tu sais si ton post cherche à rassurer ou à générer de la visibilité.',
  'Ton hook donne une vraie raison de continuer à lire.',
  'Ton contenu reste connecté à ton positionnement.',
  'Tu apportes une idée utile, pas uniquement une opinion.',
  'Tu privilégies la régularité à la quantité.',
  'Tu assumes ton ton et ta manière de communiquer.',
]
</script>

<template>
  <GuideArticleLayout
    category="Contenu"
    title="Créer du contenu LinkedIn quand on est freelance IT"
    description="Expertise ou visibilité : deux stratégies complémentaires pour te faire connaître et rassurer tes futurs clients."
    reading-time="9 min"
    updated-at="en août 2026"
  >
    <template #toc>
      <a href="#pourquoi" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Pourquoi créer du contenu
      </a>
      <a href="#strategies" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les deux stratégies
      </a>
      <a href="#expertise" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Contenu expertise
      </a>
      <a href="#visibilite" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Contenu visibilité
      </a>
      <a href="#hooks" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les hooks
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
        Tu n’as pas besoin de devenir créateur de contenu. Tu as surtout besoin d’être suffisamment
        visible et crédible pour que les bonnes personnes pensent à toi.
      </p>
    </div>

    <section id="pourquoi" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        01 — Pourquoi
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Le contenu crée de la familiarité.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Plus un prospect voit régulièrement ta façon de réfléchir, plus il peut comprendre ton
        expertise avant même le premier échange.
      </p>
    </section>

    <section id="strategies" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        02 — Les stratégies
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Tous les contenus n’ont pas le même objectif.
      </h2>

      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <div
          v-for="strategy in strategies"
          :key="strategy.title"
          class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6"
        >
          <p class="text-xs font-semibold uppercase tracking-wider text-[#4f7774]">
            {{ strategy.goal }}
          </p>

          <h3 class="mt-2 text-lg font-semibold text-[#222826]">
            {{ strategy.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            {{ strategy.description }}
          </p>
        </div>
      </div>
    </section>

    <section id="expertise" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        03 — Expertise
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Montre comment tu travailles.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Retours d’expérience, erreurs, choix techniques, méthodes, cas concrets : le contenu
        expertise sert surtout à rassurer.
      </p>
    </section>

    <section id="visibilite" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        04 — Visibilité
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Donne envie aux gens de te découvrir.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Les contenus plus accessibles, personnels ou opinionés peuvent générer davantage de portée
        et attirer de nouvelles personnes.
      </p>
    </section>

    <section id="hooks" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        05 — Les hooks
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ta première phrase doit créer une tension.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Une contradiction, une erreur fréquente, une expérience, une opinion forte ou un résultat
        peuvent donner envie de lire la suite.
      </p>
    </section>

    <section id="routine" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">06 — Routine</p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Tu n’as pas besoin de publier tous les jours.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Une fréquence que tu peux tenir pendant plusieurs mois est plus utile qu’un gros volume
        abandonné après deux semaines.
      </p>
    </section>

    <section id="checklist" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        07 — Checklist
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ton contenu sert-il ton acquisition ?
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
