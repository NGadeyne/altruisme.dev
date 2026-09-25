<script setup lang="ts">
import { ref } from 'vue'
import { BaseContainer, PublicFooter } from '@altruisme/ui'

const props = defineProps<{ actionHref: string; actionLabel: string }>()
const showVideo = ref(false)

const seoObstacles = [
  'ton trafic SEO reste limité ;',
  'certaines pages sont visibles… mais trop loin dans Google ;',
  'tu ne sais pas quels mots-clés prioriser ;',
  'tu publies sans toujours savoir quoi viser ;',
  'ton site génère peu de demandes entrantes ;',
  'tu hésites entre revoir le contenu, la structure ou la technique.',
]
const angles = [
  { title: 'SEO', text: 'Pour que les bonnes personnes puissent te trouver.' },
  { title: 'Produit & conversion', text: 'Pour qu’elles comprennent rapidement ce que tu proposes et pourquoi ça peut les aider.' },
  { title: 'Technique', text: 'Pour identifier les problèmes qui empêchent ton site de performer correctement.' },
]
const audit = [
  { title: 'Positionnement', text: 'Est-ce que Google comprend réellement ce que tu proposes ? Est-ce que tes pages ciblent les bonnes intentions de recherche ? Ton positionnement est-il suffisamment précis pour être identifiable ?' },
  { title: 'Contenu', text: 'Quelles pages méritent d’être retravaillées ? Quels sujets peuvent réellement générer du trafic qualifié ? Quels contenus manquent aujourd’hui ?' },
  { title: 'Structure', text: 'Ton architecture permet-elle aux moteurs de recherche et aux utilisateurs de comprendre facilement ton site ? Le maillage interne soutient-il tes pages importantes ?' },
  { title: 'Technique', text: 'Indexation, performances, balises, erreurs importantes, structure HTML, expérience mobile… Je cherche les problèmes qui ont réellement un impact.' },
  { title: 'Conversion', text: 'Quand quelqu’un arrive sur ton site, comprend-il rapidement qui tu aides, ce que tu proposes, pourquoi il devrait te faire confiance et quelle est la prochaine étape ?' },
]
const deliverables = ['Un diagnostic clair de la situation actuelle.', 'Les principaux freins identifiés.', 'Les opportunités SEO prioritaires.', 'Les pages à retravailler.', 'Les nouveaux contenus à envisager.', 'Les améliorations techniques importantes.', 'Des recommandations concrètes.', 'Une roadmap priorisée sur les 90 prochains jours.']
const before = ['Je sais qu’il faut travailler mon SEO, mais je ne sais pas vraiment quoi faire.', 'Je publie un peu au hasard.', 'Je ne sais pas quelles pages améliorer.', 'Mon site génère très peu de demandes.', 'J’ai plein de données mais aucune priorité.']
const after = ['Tu connais les pages importantes.', 'Tu sais quelles recherches cibler.', 'Tu comprends les principales faiblesses du site.', 'Tu sais quels contenus créer.']
</script>

<template>
  <div class="min-h-screen bg-sand text-ink">
    <main>
      <section class="relative isolate overflow-hidden border-b border-petrol/10">
        <div class="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(155deg,#f7f2e9_0%,#f3f0e8_42%,#e1ece8_100%)]" />
        <div class="pointer-events-none absolute left-1/2 top-0 -z-20 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-white/55 blur-[100px]" />
        <div class="pointer-events-none absolute -right-40 top-1/4 -z-20 h-[32rem] w-[32rem] rounded-full bg-petrol/10 blur-[130px]" />
        <div class="pointer-events-none absolute -bottom-48 -left-32 -z-20 h-[28rem] w-[28rem] rounded-full bg-[#d6b98f]/20 blur-[120px]" />
        <BaseContainer>
          <div class="mx-auto max-w-4xl py-16 text-center sm:py-20 lg:py-24">
            <div class="inline-flex items-center gap-2 rounded-full border border-petrol/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[.17em] text-petrol shadow-sm shadow-petrol/5">
              <span class="h-1.5 w-1.5 rounded-full bg-petrol" />SPRINT SEO
            </div>
            <h1 class="mx-auto mt-7 max-w-[52rem] text-[2.45rem] font-bold leading-[1.12] tracking-[-0.045em] text-ink sm:text-[3.35rem] lg:text-[4rem] lg:leading-[1.08]">
              Ton site ne devrait pas simplement exister.
              <span class="mt-1 block text-petrol sm:mt-2">Il devrait t’apporter des clients.</span>
            </h1>
            <div class="relative mx-auto mt-10 max-w-3xl sm:mt-11">
              <div class="absolute -inset-3 -z-10 rounded-[2rem] bg-petrol/10 blur-2xl sm:-inset-4" />
              <div class="overflow-hidden rounded-[1.4rem] border border-white/60 bg-white/25 p-[3px] shadow-[0_22px_55px_-24px_rgba(49,65,63,0.3)] sm:rounded-[1.65rem] sm:p-1">
                <div class="relative aspect-video overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#203532] sm:rounded-[1.4rem]">
                  <button v-if="!showVideo" type="button" class="group absolute inset-0 flex items-center justify-center overflow-hidden text-sand-light focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-sand" aria-label="Lire la vidéo" @click="showVideo = true">
                    <span class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#547a73_0%,#2f4b45_42%,#182c29_100%)]" />
                    <span class="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/10 sm:h-[26rem] sm:w-[26rem]" />
                    <span class="pointer-events-none absolute -right-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/10 sm:h-[26rem] sm:w-[26rem]" />
                    <span class="pointer-events-none absolute left-[10%] top-[19%] hidden w-[27%] -rotate-6 rounded-xl border border-white/15 bg-white/5 p-4 text-left shadow-lg backdrop-blur-sm sm:block" aria-hidden="true">
                      <span class="block h-1.5 w-1/3 rounded-full bg-[#9ab8b4]/65" /><span class="mt-4 block h-2 w-full rounded-full bg-white/30" /><span class="mt-2 block h-2 w-4/5 rounded-full bg-white/15" /><span class="mt-4 block h-10 rounded-md border border-white/10 bg-white/5" />
                    </span>
                    <span class="pointer-events-none absolute bottom-[15%] right-[10%] hidden w-[24%] rotate-6 rounded-xl border border-white/15 bg-white/5 p-4 shadow-lg backdrop-blur-sm sm:block" aria-hidden="true">
                      <span class="flex h-16 items-end gap-1.5"><span class="h-1/3 flex-1 rounded-t bg-[#9ab8b4]/40" /><span class="h-1/2 flex-1 rounded-t bg-[#9ab8b4]/55" /><span class="h-3/4 flex-1 rounded-t bg-[#9ab8b4]/70" /><span class="h-full flex-1 rounded-t bg-[#9ab8b4]/90" /></span>
                    </span>
                    <span class="pointer-events-none absolute h-28 w-28 rounded-full border border-white/20 transition duration-300 group-hover:scale-110 sm:h-36 sm:w-36" />
                    <span class="pointer-events-none relative flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-sand text-petrol shadow-[0_12px_40px_rgba(0,0,0,.3)] transition duration-300 group-hover:scale-110 group-hover:bg-white sm:h-20 sm:w-20">
                      <svg class="ml-1 h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.7a1 1 0 0 1 1.52-.85l11 7.3a1 1 0 0 1 0 1.7l-11 7.3A1 1 0 0 1 7 19.3V4.7Z" /></svg>
                    </span>
                  </button>
                  <iframe v-else class="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0" title="Vidéo de présentation SEO" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen />
                </div>
              </div>
            </div>
            <p class="mx-auto mt-8 max-w-[41rem] text-base leading-7 text-muted sm:text-lg sm:leading-8">
              J’identifie ce qui bloque, je t’aide à savoir quoi améliorer en priorité et, si besoin, je l’implémente.
            </p>
            <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a :href="props.actionHref" class="inline-flex items-center justify-center rounded-xl bg-petrol px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-petrol/20 transition hover:-translate-y-0.5 hover:bg-petrol-hover">{{ props.actionLabel }}<span class="ml-2" aria-hidden="true">↗</span></a>
              <a href="#sprint-seo" class="inline-flex items-center justify-center rounded-xl border border-petrol/20 bg-white/70 px-6 py-3.5 text-sm font-semibold text-petrol shadow-sm transition hover:-translate-y-0.5 hover:bg-white">Découvrir le Sprint SEO</a>
            </div>
            <p class="mt-7 text-sm font-medium text-muted-light">Audit SEO <span class="mx-2 font-bold text-petrol/80">·</span> Stratégie SEO <span class="mx-2 font-bold text-petrol/80">·</span> Backlinks SEO</p>
          </div>
        </BaseContainer>
      </section>

      <section class="border-b border-petrol/10 bg-mist/80" aria-label="Quelques résultats en chiffres">
        <BaseContainer>
          <div class="grid grid-cols-2 lg:grid-cols-4">
            <div class="flex min-h-36 flex-col items-center justify-center px-4 py-7 text-center sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-bold tracking-tight text-ink sm:text-[2.15rem]">100+</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">pages auditées, restructurées ou optimisées</p>
            </div>
            <div class="flex min-h-36 flex-col items-center justify-center border-l border-petrol/10 px-4 py-7 text-center sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-bold tracking-tight text-ink sm:text-[2.15rem]">10+</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">cocons sémantiques construits</p>
            </div>
            <div class="flex min-h-36 flex-col items-center justify-center border-t border-petrol/10 px-4 py-7 text-center sm:px-6 sm:py-9 lg:border-l lg:border-t-0">
              <p class="text-[1.8rem] font-bold tracking-tight text-ink sm:text-[2.15rem]">300+</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">mots-clés analysés et priorisés</p>
            </div>
            <div class="flex min-h-36 flex-col items-center justify-center border-l border-t border-petrol/10 px-4 py-7 text-center sm:px-6 sm:py-9 lg:border-t-0">
              <p class="text-[1.45rem] font-bold leading-tight tracking-tight text-ink sm:text-[1.85rem]">Des dizaines</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">de positions gagnées sur des contenus stratégiques</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="relative isolate overflow-hidden border-b border-petrol/10 py-16 sm:py-20">
        <div class="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(155deg,#f7f2e9_0%,#f3f0e8_48%,#e5eeea_100%)]" />
        <div class="pointer-events-none absolute -right-40 -top-52 -z-20 h-[34rem] w-[34rem] rounded-full bg-petrol/10 blur-[130px]" />
        <div class="pointer-events-none absolute -bottom-56 -left-40 -z-20 h-[30rem] w-[30rem] rounded-full bg-[#d6b98f]/20 blur-[120px]" />
        <BaseContainer>
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="mx-auto max-w-[48rem] text-3xl font-bold leading-[1.14] tracking-[-0.04em] text-ink sm:text-[3.25rem]">
              Ton site existe.
              <span class="mt-1 block text-petrol">Mais il ne travaille pas encore autant qu’il pourrait.</span>
            </h2>
            <p class="mt-5 text-base leading-7 text-muted sm:text-lg">Tu te reconnais sûrement dans certaines de ces situations :</p>
          </div>

          <ul class="mx-auto mt-9 grid max-w-5xl gap-x-12 md:grid-cols-2">
            <li v-for="(obstacle, index) in seoObstacles" :key="obstacle" class="flex gap-4 border-t border-petrol/15 py-4 sm:py-5">
              <span class="mt-1 shrink-0 text-xs font-semibold tracking-wider text-petrol/70">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="text-base leading-7 text-ink/85">{{ obstacle }}</span>
            </li>
          </ul>

          <div class="mx-auto mt-9 max-w-4xl text-center sm:mt-11">
            <h3 class="text-xs font-semibold uppercase tracking-[.2em] text-petrol">Le point commun</h3>
            <p class="mx-auto mt-3 max-w-3xl text-xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.85rem]">tu sens qu’il y a un potentiel à débloquer, <span class="text-petrol">sans savoir exactement quoi traiter en premier.</span></p>
          </div>
        </BaseContainer>
      </section>


      <section class="py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Une approche complète</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">SEO, produit et technique.</h2><p class="mt-7 text-lg leading-8 text-muted">Je ne viens pas uniquement regarder tes mots-clés.</p></div><div class="mt-12 grid gap-5 md:grid-cols-3"><article v-for="angle in angles" :key="angle.title" class="rounded-3xl border border-petrol/15 bg-white/55 p-7"><h3 class="text-2xl font-bold">{{ angle.title }}</h3><p class="mt-3 leading-7 text-muted">{{ angle.text }}</p></article></div><p class="mt-10 max-w-3xl text-lg leading-8 text-muted">L’objectif n’est pas d’obtenir un rapport SEO de 80 pages.<br /><strong class="text-ink">L’objectif est de savoir quoi faire maintenant.</strong></p></BaseContainer></section>


      <section class="py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><h2 class="text-3xl font-bold tracking-tight sm:text-5xl">Le SEO n’est pas uniquement une histoire de mots-clés.</h2><p class="mt-7 text-lg leading-8 text-muted">Un site peut être parfaitement indexé… et ne générer aucune opportunité.</p><p class="mt-6 text-lg leading-8 text-muted">Parce qu’un bon référencement repose sur plusieurs choses qui fonctionnent ensemble :</p><div class="mt-8 space-y-3 text-2xl font-bold text-petrol"><p>Être trouvé.</p><p>Être compris.</p><p>Donner envie d’aller plus loin.</p></div><p class="mt-8 text-lg leading-8 text-muted">C’est pour ça que je ne regarde jamais le SEO isolément.</p></div></BaseContainer></section>

      <section class="bg-sand-light py-20 sm:py-28"><BaseContainer><div class="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-start"><div><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Le coût de l’inaction</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Continuer sans stratégie coûte plus cher qu’on ne le pense.</h2><p class="mt-7 text-lg leading-8 text-muted">Le risque n’est pas uniquement de perdre quelques positions sur Google. C’est de continuer à publier les mauvais contenus, retravailler les mauvaises pages, viser des requêtes que personne ne recherche et laisser passer chaque mois des prospects qui cherchent déjà ce que tu proposes.</p></div><div class="rounded-[2rem] border border-petrol/15 bg-white/60 p-8"><p class="text-xl font-bold">Le SEO prend du temps.</p><p class="mt-4 text-lg leading-8 text-muted">Autant investir ce temps au bon endroit.</p></div></div></BaseContainer></section>

      <section class="py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Une autre façon d’auditer</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Pourquoi les audits SEO classiques finissent souvent dans un dossier Drive.</h2><p class="mt-7 text-lg leading-8 text-muted">127 erreurs détectées. 43 pages à optimiser. 26 Core Web Vitals. 18 backlinks suspects. Puis une énorme checklist.</p><p class="mt-8 text-2xl font-bold">« Très bien. Je commence par quoi lundi matin ? »</p><p class="mt-8 text-lg leading-8 text-muted">C’est précisément le problème que mon Sprint SEO cherche à résoudre.</p><h3 class="mt-14 text-3xl font-bold">Moins de recommandations. Plus de priorités.</h3><p class="mt-5 text-lg leading-8 text-muted">Je préfère identifier <strong class="text-ink">5 actions importantes</strong> que te donner une liste de 75 optimisations que tu ne feras jamais.</p></div><div class="mt-12 grid gap-5 md:grid-cols-3"><article v-for="(step, index) in [{title:'Comprendre',text:'Ton activité, tes clients, ton marché et le rôle que ton site doit réellement jouer.'},{title:'Diagnostiquer',text:'Identifier les freins SEO, éditoriaux, techniques et de conversion.'},{title:'Prioriser',text:'Transformer l’analyse en plan d’action réaliste : quoi faire, pourquoi et dans quel ordre.'}]" :key="step.title" class="rounded-3xl border border-petrol/15 bg-mist p-7"><p class="text-sm font-semibold text-petrol">0{{ index + 1 }}</p><h3 class="mt-5 text-2xl font-bold">{{ step.title }}</h3><p class="mt-3 leading-7 text-muted">{{ step.text }}</p></article></div></BaseContainer></section>

      <section id="sprint-seo" class="bg-mist py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Le Sprint SEO</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Une analyse complète de ton site pour savoir exactement où concentrer tes efforts.</h2><p class="mt-7 text-lg leading-8 text-muted">Pendant le Sprint, j’analyse ton site sous plusieurs angles.</p></div><div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"><article v-for="item in audit" :key="item.title" class="rounded-3xl border border-petrol/15 bg-white/60 p-7"><h3 class="text-2xl font-bold">{{ item.title }}</h3><p class="mt-4 leading-7 text-muted">{{ item.text }}</p></article></div></BaseContainer></section>

      <section class="py-20 sm:py-28"><BaseContainer><div class="grid gap-12 lg:grid-cols-[.8fr_1fr]"><div><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Le résultat</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">À la fin du Sprint, tu repars avec…</h2><p class="mt-7 text-xl font-semibold leading-8">Et surtout : une vision claire de ce que tu dois faire ensuite.</p></div><ul class="space-y-3 text-lg text-muted"><li v-for="item in deliverables" :key="item" class="flex gap-3"><span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />{{ item }}</li></ul></div></BaseContainer></section>

      <section class="bg-sand-light py-20 sm:py-28"><BaseContainer><div class="max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[.18em] text-petrol">Avant / après</p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Passer du flou à un plan d’action.</h2></div><div class="mt-12 grid gap-6 lg:grid-cols-2"><div class="rounded-[2rem] border border-petrol/15 bg-white/60 p-8"><h3 class="text-2xl font-bold">Aujourd’hui</h3><ul class="mt-6 space-y-4 text-lg leading-7 text-muted"><li v-for="item in before" :key="item">« {{ item }} »</li></ul></div><div class="rounded-[2rem] bg-petrol-dark p-8 text-sand-light"><h3 class="text-2xl font-bold">Après le Sprint</h3><ul class="mt-6 space-y-4 text-lg leading-7 text-[#d8e1de]"><li v-for="item in after" :key="item" class="flex gap-3"><span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9c1bd]" />{{ item }}</li></ul></div></div></BaseContainer></section>

      <section class="bg-petrol-dark py-20 text-center sm:py-28"><BaseContainer><h2 class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-sand-light sm:text-5xl">Ton site peut devenir un vrai canal d’acquisition.</h2><p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8e1de]">Commence par comprendre ce qui bloque et concentre tes efforts là où ils auront le plus d’impact.</p><a :href="props.actionHref" class="mt-9 inline-flex rounded-xl bg-sand px-6 py-3.5 text-sm font-semibold text-petrol-dark transition hover:bg-white">{{ props.actionLabel }}</a></BaseContainer></section>
    </main>
    <PublicFooter tagline="Altruisme Builder — SEO, produit et technique pour transformer ton site en canal d’acquisition." legal-links cookie-event-name="builder:open-cookie-settings" borderless />
  </div>
</template>
