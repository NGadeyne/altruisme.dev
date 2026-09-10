<script setup lang="ts">
import GuideArticleLayout from '@/components/guides/GuideArticleLayout.vue'

const examples = [
  {
    job: 'Product Owner',
    before: 'Product Owner Freelance',
    after:
      'J’aide les équipes produit B2B à transformer leurs besoins métier en fonctionnalités claires, priorisées et réellement livrables.',
  },
  {
    job: 'Développeur PHP',
    before: 'Développeur PHP / Symfony',
    after:
      'J’aide les PME et équipes SaaS à maintenir et faire évoluer leurs applications PHP / Symfony complexes.',
  },
  {
    job: 'DevOps',
    before: 'DevOps / Cloud Engineer',
    after:
      'J’aide les équipes Tech à fiabiliser leurs infrastructures Cloud et automatiser leurs déploiements.',
  },
  {
    job: 'Consultant SIRH',
    before: 'Consultant SIRH Senior',
    after:
      'J’aide les groupes internationaux à faire évoluer leur SI RH et sécuriser l’intégration de leurs applications.',
  },
  {
    job: 'Data',
    before: 'Data Analyst Freelance',
    after:
      'J’aide les équipes métier à transformer leurs données en indicateurs fiables et réellement exploitables.',
  },
]

const checklist = [
  'On comprend ton métier en quelques secondes.',
  'On identifie les problématiques sur lesquelles tu peux intervenir.',
  'Tu mets en avant une valeur ou un résultat, pas seulement des compétences.',
  'Ton positionnement correspond à un marché qui existe réellement.',
  'Ton Malt, ton LinkedIn et ton CV racontent la même histoire.',
  'Un prospect peut facilement comprendre pourquoi il devrait te contacter.',
]
</script>

<template>
  <GuideArticleLayout
    category="Positionnement"
    title="Comment trouver un positionnement freelance clair et différenciant"
    description="Une méthode simple pour rendre ton expertise plus lisible, sortir du profil généraliste et donner aux bons clients une vraie raison de te contacter."
    reading-time="8 min"
    updated-at="en août 2026"
  >
    <!-- TOC -->
    <template #toc>
      <a href="#definition" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Qu’est-ce qu’un positionnement ?
      </a>

      <a href="#probleme" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Pourquoi ça bloque
      </a>

      <a href="#formule" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        La formule simple
      </a>

      <a href="#methode" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Construire ton positionnement
      </a>

      <a href="#exemples" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Exemples
      </a>

      <a href="#erreurs" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Les erreurs à éviter
      </a>

      <a href="#checklist" class="block !text-[#78827e] transition hover:!text-[#668c89]">
        Checklist
      </a>
    </template>

    <!-- INTRO -->
    <div class="space-y-6 text-base leading-8 text-[#64706c]">
      <p class="text-lg leading-8 text-[#46504d]">
        Tu peux avoir 10 ans d’expérience, maîtriser quinze technologies et avoir travaillé pour de
        très belles entreprises.
      </p>

      <p>
        Si un prospect ne comprend pas en quelques secondes
        <strong class="font-semibold text-[#222826]">
          ce que tu fais, sur quels problèmes tu peux l’aider et pourquoi il devrait te contacter,
        </strong>
        une partie de ton expertise reste invisible.
      </p>

      <div class="rounded-2xl border border-[#4f7774]/15 bg-[#4f7774]/[0.05] p-6">
        <p class="font-medium text-[#222826]">
          Un bon positionnement ne consiste pas à réduire tes compétences.
        </p>

        <p class="mt-2 text-[#64706c]">Il consiste à rendre ta valeur plus facile à comprendre.</p>
      </div>
    </div>

    <!-- DEFINITION -->
    <section id="definition" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        01 — Comprendre
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Un positionnement n’est pas un intitulé de poste.
      </h2>

      <div class="mt-6 space-y-5 text-base leading-8 text-[#64706c]">
        <p>
          <strong class="text-[#222826]">Product Owner Freelance</strong>,
          <strong class="text-[#222826]">Développeur PHP</strong> ou
          <strong class="text-[#222826]">Consultant SIRH</strong>
          décrivent ton métier.
        </p>

        <p>
          Mais ils ne permettent pas encore à un client de comprendre pourquoi ton profil est
          particulièrement pertinent pour lui.
        </p>

        <p>
          Ton positionnement ajoute une couche essentielle :
          <strong class="font-semibold text-[#31413f]">
            le contexte dans lequel ton expertise devient particulièrement utile.
          </strong>
        </p>
      </div>
    </section>

    <!-- PROBLEM -->
    <section id="probleme" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        02 — Le problème
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Beaucoup de freelances essaient de
        <span class="text-[#64706c]"> montrer tout ce qu’ils savent faire. </span>
      </h2>

      <div class="mt-6 space-y-5 text-base leading-8 text-[#64706c]">
        <p>
          C’est logique : plus tu as d’expérience, plus tu as accumulé de compétences, de
          technologies, de projets et de responsabilités.
        </p>

        <p>Le réflexe consiste alors à tout mettre en avant.</p>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5">
          <p class="text-sm font-semibold text-[#222826]">Beaucoup de compétences</p>

          <p class="mt-2 text-sm leading-6 text-[#78827e]">
            Mais aucune expertise ne ressort vraiment.
          </p>
        </div>

        <div class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5">
          <p class="text-sm font-semibold text-[#222826]">Beaucoup de cibles</p>

          <p class="mt-2 text-sm leading-6 text-[#78827e]">
            Mais personne ne se sent particulièrement concerné.
          </p>
        </div>

        <div class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5">
          <p class="text-sm font-semibold text-[#222826]">Beaucoup d’informations</p>

          <p class="mt-2 text-sm leading-6 text-[#78827e]">
            Mais ton prospect doit faire lui-même le travail de compréhension.
          </p>
        </div>
      </div>
    </section>

    <!-- FORMULA -->
    <section id="formule" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        03 — La formule
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Commence avec une formule simple.
      </h2>

      <p class="mt-6 text-base leading-8 text-[#64706c]">
        Pas besoin de chercher une punchline parfaite. Tu dois d’abord être compris.
      </p>

      <div
        class="mt-8 rounded-3xl border border-[#4f7774]/20 bg-gradient-to-r from-[#4f7774]/[0.08] to-white/[0.02] p-7 sm:p-8"
      >
        <p class="text-sm font-medium text-[#668c89]">Une bonne base</p>

        <p class="mt-4 text-xl font-semibold leading-8 text-[#222826] sm:text-2xl">
          J’aide
          <span class="text-[#4f7774]">[une cible]</span>
          à
          <span class="text-[#4f7774]">[obtenir un résultat]</span>
          grâce à
          <span class="text-[#4f7774]">[mon expertise]</span>.
        </p>
      </div>

      <p class="mt-6 text-sm leading-7 text-[#78827e]">
        Cette phrase n’a pas forcément vocation à être copiée telle quelle sur ton profil. Elle sert
        surtout à clarifier ta réflexion.
      </p>
    </section>

    <!-- METHOD -->
    <section id="methode" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        04 — Construire
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Construis ton positionnement en 4 étapes.
      </h2>

      <div class="mt-8 space-y-4">
        <div class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6">
          <p class="text-sm font-semibold text-[#4f7774]">01</p>

          <h3 class="mt-2 text-lg font-semibold text-[#222826]">Pars de ton expertise réelle</h3>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            Quelles missions sais-tu réellement mener ? Sur quels sujets as-tu déjà obtenu des
            résultats ?
          </p>
        </div>

        <div class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6">
          <p class="text-sm font-semibold text-[#4f7774]">02</p>

          <h3 class="mt-2 text-lg font-semibold text-[#222826]">
            Identifie les problèmes que tu sais résoudre
          </h3>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            Un client achète rarement une compétence isolée. Il cherche quelqu’un capable de
            résoudre une situation concrète.
          </p>
        </div>

        <div class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6">
          <p class="text-sm font-semibold text-[#4f7774]">03</p>

          <h3 class="mt-2 text-lg font-semibold text-[#222826]">
            Choisis les environnements où cette expertise a le plus de valeur
          </h3>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            Type d’entreprise, secteur, maturité, technologie, organisation ou contexte projet.
          </p>
        </div>

        <div class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6">
          <p class="text-sm font-semibold text-[#4f7774]">04</p>

          <h3 class="mt-2 text-lg font-semibold text-[#222826]">
            Transforme tout ça en une promesse lisible
          </h3>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            Un prospect doit comprendre rapidement ce que tu peux apporter sans avoir besoin de
            décoder ton CV.
          </p>
        </div>
      </div>
    </section>

    <!-- EXAMPLES -->
    <section id="exemples" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        05 — Exemples
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Quelques exemples selon ton métier.
      </h2>

      <div class="mt-8 space-y-4">
        <article
          v-for="example in examples"
          :key="example.job"
          class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-6"
        >
          <p class="text-xs font-semibold uppercase tracking-wider text-[#4f7774]">
            {{ example.job }}
          </p>

          <div class="mt-4 grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p class="text-xs text-[#8d9692]">Trop générique</p>

              <p class="mt-1 text-sm text-[#78827e] line-through">
                {{ example.before }}
              </p>
            </div>

            <div>
              <p class="text-xs text-[#78827e]">Plus lisible</p>

              <p class="mt-1 text-sm font-medium leading-6 text-[#31413f]">
                {{ example.after }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- NICHE -->
    <section class="pt-16">
      <div class="rounded-3xl border border-[#4f7774]/15 bg-[#4f7774]/[0.05] p-7 sm:p-8">
        <p class="text-sm font-semibold text-[#4f7774]">Attention à un piège</p>

        <h2 class="mt-3 text-2xl font-bold text-[#222826]">
          Tu n’as pas besoin de choisir une niche minuscule.
        </h2>

        <p class="mt-4 text-base leading-7 text-[#64706c]">
          Se positionner ne veut pas dire devenir “le développeur PostgreSQL des fintechs lyonnaises
          de 20 à 40 salariés”.
        </p>

        <p class="mt-4 text-base leading-7 text-[#64706c]">
          Ton positionnement doit être
          <strong class="font-semibold text-[#222826]"> suffisamment précis pour être mémorable </strong
          >, mais
          <strong class="font-semibold text-[#222826]">
            suffisamment large pour conserver un vrai marché.
          </strong>
        </p>
      </div>
    </section>

    <!-- ERRORS -->
    <section id="erreurs" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        06 — À éviter
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Les erreurs les plus fréquentes.
      </h2>

      <ul class="mt-8 space-y-4">
        <li class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5">
          <p class="font-semibold text-[#222826]">Vouloir parler à tout le monde</p>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            Plus ton message est universel, moins quelqu’un se sent concerné.
          </p>
        </li>

        <li class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5">
          <p class="font-semibold text-[#222826]">Empiler les technologies</p>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            Tes outils renforcent ton expertise. Ils ne remplacent pas ta proposition de valeur.
          </p>
        </li>

        <li class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5">
          <p class="font-semibold text-[#222826]">Utiliser des promesses vagues</p>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            “Créer de la valeur”, “accompagner la transformation” ou “optimiser la performance” ne
            suffisent pas sans contexte.
          </p>
        </li>

        <li class="rounded-2xl border border-[#4f7774]/15 bg-white/45 p-5">
          <p class="font-semibold text-[#222826]">Croire que se spécialiser t’enferme</p>

          <p class="mt-2 text-sm leading-6 text-[#64706c]">
            Ton positionnement organise ta communication. Il ne t’interdit pas d’accepter d’autres
            missions.
          </p>
        </li>
      </ul>
    </section>

    <!-- CHECKLIST -->
    <section id="checklist" class="scroll-mt-24 pt-16">
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f7774]">
        07 — À toi de jouer
      </p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
        Ton positionnement est-il assez clair ?
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

      <p class="mt-6 text-base font-medium leading-7 text-[#46504d]">
        Si plusieurs cases restent floues, commence par là avant d’augmenter ton volume de
        prospection.
      </p>
    </section>
  </GuideArticleLayout>
</template>
