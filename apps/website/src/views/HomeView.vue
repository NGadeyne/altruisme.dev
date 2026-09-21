<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'
import { featuredGuides } from '@/data/site'

const editorialStats = [
  { value: '2', label: 'guides de référence publiés' },
  { value: '5', label: 'grands guides en préparation' },
  { value: '1× / semaine', label: 'une sélection d’actualités utile' },
  { value: '100 %', label: 'indépendant dans la ligne éditoriale' },
]

const weeklyStories = [
  {
    category: 'Produit & SaaS',
    title: 'Ce qu’il faut vraiment retenir cette semaine côté produit',
    description:
      'Les annonces passent vite. Les changements de fond beaucoup moins. On trie les signaux qui méritent ton attention.',
  },
  {
    category: 'IA & automatisation',
    title: 'Les usages qui avancent plus vite que les effets d’annonce',
    description:
      'Outils, agents, automatisations et nouveaux workflows : ce qui commence réellement à changer la façon de construire et de travailler.',
  },
  {
    category: 'Freelance & ESN',
    title: 'Le marché tech vu depuis le terrain',
    description:
      'Missions, recrutement, indépendance, ESN : comprendre les mouvements derrière les discours et les chiffres.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Moins de bruit.',
    text: 'Pas besoin de publier vingt fois par jour. On préfère sélectionner, vérifier, contextualiser et expliquer.',
  },
  {
    number: '02',
    title: 'Plus de fond.',
    text: 'Des guides longs et structurés pour comprendre un sujet jusqu’au bout, pas seulement récupérer trois astuces.',
  },
  {
    number: '03',
    title: 'Du terrain.',
    text: 'Produit, code, business, carrière : la tech racontée par celles et ceux qui la construisent et la vivent.',
  },
]

const topics = ['Produit', 'SaaS', 'IA', 'Automatisation', 'Freelance', 'ESN', 'E-commerce', 'Marketplace']
</script>

<template>
  <main class="min-h-screen bg-sand">
    <!-- HERO / UNE -->
<!-- HERO / UNE -->
<section class="relative isolate overflow-hidden border-b border-petrol/10">
  <div
    class="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_34%,#e7eeeb_68%,#cbdcd8_100%)]"
  />

  <div
    class="pointer-events-none absolute left-[28%] top-[8%] -z-20 h-[420px] w-[520px] rounded-full bg-white/55 blur-[120px]"
  />

  <div
    class="pointer-events-none absolute -right-28 -top-28 -z-20 h-[560px] w-[560px] rounded-full bg-[#4f7774]/18 blur-[145px]"
  />

  <div
    class="pointer-events-none absolute -bottom-52 -left-24 -z-20 h-[520px] w-[520px] rounded-full bg-[#d6b98f]/32 blur-[135px]"
  />

  <BaseContainer>
    <div
      class="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:py-28"
    >
      <div class="max-w-3xl">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-petrol/15 bg-white/40 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-petrol backdrop-blur-sm"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-petrol" />
          Média tech indépendant
        </div>

        <h1
          class="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.7rem] lg:leading-[1.01]"
        >
          La tech mérite mieux
          <span class="block text-petrol">
            que du bruit.
          </span>
        </h1>

        <p class="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:text-xl">
          Altruisme.DEV décrypte les produits, les modèles et les métiers qui façonnent la tech.

          Des
          <strong class="font-semibold text-ink">
            guides de fond
          </strong>,
          une
          <strong class="font-semibold text-ink">
            actualité contextualisée
          </strong>,
          des
          <strong class="font-semibold text-ink">
            conversations utiles
          </strong>
          et une communauté de gens qui construisent.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <BaseButton to="/actualites" size="large">
            Lire l’édition de la semaine
          </BaseButton>

          <BaseButton to="/guides" variant="secondary" size="large">
            Explorer les guides
          </BaseButton>
        </div>

        <div class="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-light">
          <span
            v-for="topic in topics.slice(0, 5)"
            :key="topic"
            class="inline-flex items-center gap-2"
          >
            <span class="h-1 w-1 rounded-full bg-petrol/60" />
            {{ topic }}
          </span>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute -inset-5 -z-10 rounded-[2.4rem] bg-petrol/7 blur-2xl"
        />

        <article
          class="overflow-hidden rounded-[2rem] border border-petrol/15 bg-[#31413f] shadow-2xl shadow-[#31413f]/10"
        >
          <div class="border-b border-white/10 px-7 py-5 sm:px-8">
            <div class="flex items-center justify-between gap-4">
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9c1bd]"
              >
                À la une
              </p>

              <span
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#d8e1de]"
              >
                Cette semaine
              </span>
            </div>
          </div>

          <div class="p-7 sm:p-8 lg:p-9">
            <p class="text-sm font-semibold text-[#a9c1bd]">
              Édition hebdomadaire
            </p>

            <h2
              class="mt-4 text-2xl font-bold leading-tight !text-[#f7f2e9] sm:text-3xl"
            >
              Les actualités tech de la semaine, triées et expliquées.
            </h2>

            <p class="mt-5 text-sm leading-7 !text-[#d8e1de] sm:text-base">
              Une sélection courte sur le SaaS, l’IA, le produit, l’automatisation et le marché tech.
              L’objectif : comprendre ce qui compte, pas collectionner les notifications.
            </p>

            <div class="mt-7 divide-y divide-white/10 border-y border-white/10">
              <div
                v-for="story in weeklyStories"
                :key="story.category"
                class="flex items-start gap-4 py-4"
              >
                <span
                  class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9ab8b4]"
                />

                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.12em] text-[#9ab8b4]"
                  >
                    {{ story.category }}
                  </p>

                  <p
                    class="mt-1 text-sm font-medium leading-6 !text-[#edf3f0]"
                  >
                    {{ story.title }}
                  </p>
                </div>
              </div>
            </div>

            <RouterLink
              to="/actualites"
              class="group mt-7 inline-flex items-center gap-2 text-sm font-semibold !text-[#f7f2e9]"
            >
              Ouvrir l’édition
              <span
                class="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </BaseContainer>
</section>

    <!-- CHIFFRES / PROMESSE -->
    <section class="border-b border-petrol/10 bg-mist/80">
      <BaseContainer>
        <div class="grid grid-cols-2 divide-x divide-y divide-petrol/12 lg:grid-cols-4 lg:divide-y-0">
          <div v-for="stat in editorialStats" :key="stat.label" class="px-4 py-7 text-center sm:px-6 sm:py-9">
            <p class="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{{ stat.value }}</p>
            <p class="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-muted sm:text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- ACTUALITES -->
    <section class="py-20 sm:py-24 lg:py-28">
      <BaseContainer>
        <div class="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div class="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Le rendez-vous hebdo</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Comprendre l’actualité.
              <span class="text-ink-soft">Pas la subir.</span>
            </h2>
            <p class="mt-6 text-base leading-7 text-muted sm:text-lg">
              Chaque semaine, Altruisme.DEV sélectionne les sujets qui méritent vraiment quelques minutes
              de ton attention. Pas de course au clic : du tri, du contexte et un point de vue assumé sur ce
              qui change réellement.
            </p>
            <BaseButton to="/actualites" variant="secondary" class="mt-8">Voir toutes les actualités</BaseButton>
          </div>

          <div class="divide-y divide-petrol/15 border-y border-petrol/15">
            <article v-for="(story, index) in weeklyStories" :key="story.title" class="group py-7 sm:py-8">
              <div class="grid gap-4 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-6">
                <span class="text-sm font-semibold text-muted-light">0{{ index + 1 }}</span>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.14em] text-petrol">{{ story.category }}</p>
                  <h3 class="mt-2 text-xl font-bold leading-7 text-ink sm:text-2xl">{{ story.title }}</h3>
                  <p class="mt-3 max-w-2xl text-sm leading-6 text-muted">{{ story.description }}</p>
                </div>
                <RouterLink to="/actualites" class="hidden h-10 w-10 items-center justify-center rounded-full border border-petrol/15 text-petrol transition group-hover:border-petrol/35 group-hover:bg-petrol/5 sm:flex" aria-label="Lire l’actualité">
                  →
                </RouterLink>
              </div>
            </article>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- GUIDES -->
    <section class="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
      <div class="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full bg-petrol/10 blur-[120px]" />
      <BaseContainer>
        <div class="relative">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-3xl">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Guides de référence</p>
              <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Des sujets complexes.
                <span class="text-ink-soft">Enfin traités en profondeur.</span>
              </h2>
              <p class="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Pensés comme des ressources à garder sous la main : complets, structurés, lisibles et mis à jour.
              </p>
            </div>
            <BaseButton to="/guides" variant="secondary">Voir la bibliothèque</BaseButton>
          </div>

          <div class="mt-12 grid gap-5 lg:grid-cols-2">
            <article
              v-for="(guide, index) in featuredGuides.slice(0, 2)"
              :key="guide.title"
              class="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[2rem] border border-petrol/15 p-7 sm:p-9"
              :class="index === 0 ? 'bg-[#31413f]' : 'bg-sand/90'"
            >
              <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-petrol/10" :class="index === 0 ? 'border-white/10' : ''" />
              <div class="absolute -right-7 -top-7 h-28 w-28 rounded-full border border-petrol/10" :class="index === 0 ? 'border-white/10' : ''" />

              <div class="relative flex items-center justify-between gap-4">
                <span class="text-xs font-semibold uppercase tracking-[0.16em]" :class="index === 0 ? 'text-[#a9c1bd]' : 'text-petrol'">{{ guide.label }}</span>
                <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="index === 0 ? 'bg-white/8 text-[#d8e1de]' : 'bg-petrol/8 text-petrol'">{{ guide.status === 'available' ? 'Publié' : 'Bientôt disponible' }}</span>
              </div>

              <div class="relative mt-auto pt-20">
                <h3 class="text-2xl font-bold leading-tight sm:text-3xl" :class="index === 0 ? '!text-[#f7f2e9]' : 'text-ink'">{{ guide.title }}</h3>
                <p class="mt-4 max-w-xl text-sm leading-7 sm:text-base" :class="index === 0 ? '!text-[#d8e1de]' : 'text-muted'">{{ guide.description }}</p>
                <RouterLink v-if="guide.to" :to="guide.to" class="mt-7 inline-flex items-center gap-2 text-sm font-semibold" :class="index === 0 ? '!text-[#f7f2e9]' : 'text-petrol'">
                  Lire le guide <span class="transition-transform group-hover:translate-x-1">→</span>
                </RouterLink>
              </div>
            </article>
          </div>

          <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <article v-for="guide in featuredGuides.slice(2)" :key="guide.title" class="rounded-2xl border border-petrol/12 bg-sand/65 p-5">
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs font-semibold uppercase tracking-[0.12em] text-petrol">{{ guide.label }}</span>
                <span class="h-2 w-2 rounded-full bg-petrol/25" />
              </div>
              <h3 class="mt-4 text-sm font-bold leading-6 text-ink">{{ guide.title }}</h3>
              <p class="mt-4 text-xs font-semibold text-muted-light">Bientôt disponible</p>
            </article>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- MANIFESTE -->
    <section class="py-20 sm:py-24 lg:py-28">
      <BaseContainer>
        <div class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div class="max-w-xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">La ligne éditoriale</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Un média pensé pour
              <span class="text-ink-soft">les gens qui font.</span>
            </h2>
            <p class="mt-6 text-base leading-7 text-muted sm:text-lg">
              Altruisme.DEV ne cherche pas à couvrir toute la tech. Il cherche à mieux couvrir les sujets qui
              touchent directement ceux qui créent des produits, des entreprises et des carrières dans la tech.
            </p>
            <RouterLink to="/apropos" class="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-petrol">
              Découvrir l’histoire d’Altruisme.DEV
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </RouterLink>
          </div>

          <div class="overflow-hidden rounded-3xl border border-petrol/15 bg-sand-light">
            <article v-for="principle in principles" :key="principle.number" class="grid gap-4 border-b border-petrol/12 p-6 last:border-b-0 sm:grid-cols-[56px_1fr] sm:gap-6 sm:p-8">
              <span class="text-sm font-semibold text-petrol">{{ principle.number }}</span>
              <div>
                <h3 class="text-xl font-bold text-ink">{{ principle.title }}</h3>
                <p class="mt-2 text-sm leading-7 text-muted">{{ principle.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- PODCAST -->
    <section class="relative overflow-hidden bg-[#31413f] py-20 sm:py-24 lg:py-28">
      <div class="pointer-events-none absolute -right-32 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-[#668c89]/20 blur-[120px]" />
      <BaseContainer>
        <div class="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.17em] !text-[#bfd0cd]">
              <span class="h-1.5 w-1.5 rounded-full bg-[#bfd0cd]" />
              Le podcast Altruisme.DEV
            </div>
            <h2 class="mt-6 text-3xl font-bold tracking-tight !text-[#f7f2e9] sm:text-5xl lg:text-6xl">
              Un CTO. Un jeu indé.<br />
              <span class="!text-[#bfd0cd]">Et aucune langue de bois.</span>
            </h2>
            <p class="mt-6 max-w-xl text-base leading-8 !text-[#d8e1de] sm:text-lg">
              J’invite des CTO et des figures de la tech française à venir jouer en live à un jeu vidéo indépendant.
              Entre deux parties, on parle produit, équipe, architecture, management, carrière, erreurs et quotidien réel.
            </p>
            <p class="mt-4 max-w-xl text-base leading-8 !text-[#d8e1de] sm:text-lg">
              Pas un interrogatoire. Pas une conférence. Une conversation détendue, un peu drôle, parfois chaotique — comme une bonne soirée entre gens de la tech.
            </p>
            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <BaseButton to="/podcast" size="large" class="!bg-[#f4efe7] !text-[#31413f] hover:!bg-white">Découvrir le podcast</BaseButton>
              <BaseButton to="/communaute" variant="secondary" size="large" class="!border-white/20 !bg-white/5 !text-[#f7f2e9] hover:!bg-white/10">Voir les prochains lives</BaseButton>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-6 -z-10 rounded-[2.5rem] bg-white/5 blur-2xl" />
            <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-[#263532] shadow-2xl shadow-black/10">
              <div class="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4 sm:px-8">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span class="text-xs font-semibold uppercase tracking-[0.14em] !text-[#d8e1de]">Live</span>
                </div>
                <span class="text-xs !text-[#9fb4b0]">Altruisme.DEV — Session #01</span>
              </div>
              <div class="grid min-h-[360px] place-items-center p-8 sm:min-h-[420px] sm:p-10">
                <div class="max-w-md text-center">
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-3xl">🎮</div>
                  <p class="mt-7 text-xs font-semibold uppercase tracking-[0.18em] !text-[#9fb4b0]">Le format</p>
                  <h3 class="mt-3 text-2xl font-bold !text-[#f7f2e9] sm:text-3xl">On joue. On discute. On oublie les slides.</h3>
                  <div class="mt-7 grid grid-cols-3 gap-3 text-center">
                    <div class="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                      <p class="text-lg font-bold !text-[#f7f2e9]">1</p>
                      <p class="mt-1 text-xs !text-[#9fb4b0]">CTO</p>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                      <p class="text-lg font-bold !text-[#f7f2e9]">1</p>
                      <p class="mt-1 text-xs !text-[#9fb4b0]">jeu indé</p>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                      <p class="text-lg font-bold !text-[#f7f2e9]">Live</p>
                      <p class="mt-1 text-xs !text-[#9fb4b0]">sans filtre</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- CONTRIBUER -->
    <section class="relative overflow-hidden bg-sand py-20 sm:py-24 lg:py-28">
      <BaseContainer>
        <div class="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Contribuer à Altruisme.DEV</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Les meilleures histoires tech
              <span class="text-ink-soft">ne viennent pas toujours des médias.</span>
            </h2>
          </div>

          <div class="rounded-[2rem] border border-petrol/15 bg-mist p-8 sm:p-10 lg:p-12">
            <p class="text-base leading-8 text-muted sm:text-lg">
              Tu as construit quelque chose, cassé quelque chose, appris quelque chose ou simplement développé un point de vue qui mérite d’être lu ?
              Altruisme.DEV est aussi là pour faire circuler les retours d’expérience de celles et ceux qui font vraiment la tech.
            </p>
            <div class="mt-7 grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-petrol/10 bg-sand/70 p-4 text-sm font-medium text-ink">Retour d’expérience</div>
              <div class="rounded-2xl border border-petrol/10 bg-sand/70 p-4 text-sm font-medium text-ink">Analyse & opinion argumentée</div>
              <div class="rounded-2xl border border-petrol/10 bg-sand/70 p-4 text-sm font-medium text-ink">Étude de cas produit / tech</div>
              <div class="rounded-2xl border border-petrol/10 bg-sand/70 p-4 text-sm font-medium text-ink">Idée de sujet ou témoignage</div>
            </div>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BaseButton to="/contribuer" size="large">Proposer une contribution</BaseButton>
              <p class="text-xs leading-5 text-muted-light">Pas besoin d’être “créateur de contenu”.<br />Il faut surtout avoir quelque chose à raconter.</p>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- COMMUNAUTE -->
    <section class="relative overflow-hidden border-y border-petrol/10 bg-mist py-20 sm:py-24 lg:py-28">
      <div class="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-petrol/10 blur-[120px]" />
      <BaseContainer>
        <div class="relative mx-auto max-w-5xl text-center">
          <div class="mx-auto inline-flex items-center gap-2 rounded-full border border-petrol/15 bg-sand/65 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-petrol">
            <span class="h-1.5 w-1.5 rounded-full bg-petrol" />
            La communauté Altruisme.DEV
          </div>
          <h2 class="mx-auto mt-6 max-w-4xl text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Le média est le point de départ.<br />
            <span class="text-ink-soft">La communauté, c’est là où ça continue.</span>
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Rejoins le Discord pour discuter des actualités, prolonger les guides, suivre les prochains lives,
            proposer des sujets, partager tes projets et rencontrer d’autres personnes qui construisent dans la tech.
          </p>

          <div class="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-2xl border border-petrol/12 bg-sand/70 p-4">
              <p class="text-sm font-bold text-ink">Actualités</p>
              <p class="mt-1 text-xs leading-5 text-muted">Débattre sans le bruit des réseaux.</p>
            </div>
            <div class="rounded-2xl border border-petrol/12 bg-sand/70 p-4">
              <p class="text-sm font-bold text-ink">Lives</p>
              <p class="mt-1 text-xs leading-5 text-muted">Suivre les prochains épisodes.</p>
            </div>
            <div class="rounded-2xl border border-petrol/12 bg-sand/70 p-4">
              <p class="text-sm font-bold text-ink">Entraide</p>
              <p class="mt-1 text-xs leading-5 text-muted">Produit, dev, business, carrière.</p>
            </div>
            <div class="rounded-2xl border border-petrol/12 bg-sand/70 p-4">
              <p class="text-sm font-bold text-ink">Contributions</p>
              <p class="mt-1 text-xs leading-5 text-muted">Faire vivre le média ensemble.</p>
            </div>
          </div>

          <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BaseButton to="/communaute" size="large">Rejoindre la communauté</BaseButton>
            <BaseButton to="/contribuer" variant="secondary" size="large">Contribuer au média</BaseButton>
          </div>
        </div>
      </BaseContainer>
    </section>


  </main>
</template>
