<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import portraitOcean from '@/assets/portrait-ocean.webp'
import { OPEN_COOKIE_SETTINGS_EVENT, useCookieConsent } from '@/composables/useCookieConsent'

const props = defineProps<{ actionHref: string; actionLabel: string }>()
const footerYear = new Date().getFullYear()
const showVideo = ref(false)
const { preferences } = useCookieConsent()
const openFaq = ref<number | null>(null)
const landingRoot = ref<HTMLElement | null>(null)
let revealObserver: IntersectionObserver | undefined

onMounted(() => {
  if (!landingRoot.value || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const elements = landingRoot.value.querySelectorAll<HTMLElement>('[data-builder-reveal], [data-builder-sequence]')
  const revealLine = window.innerHeight * 0.65
  revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.remove('builder-reveal-pending')
      entry.target.classList.remove('builder-sequence-pending')
      observer.unobserve(entry.target)
    }
  }, { rootMargin: '0px 0px -35% 0px', threshold: 0 })

  for (const element of elements) {
    if (element.getBoundingClientRect().top > revealLine) {
      element.classList.add(element.hasAttribute('data-builder-sequence') ? 'builder-sequence-pending' : 'builder-reveal-pending')
    }
    revealObserver.observe(element)
  }
})

onBeforeUnmount(() => revealObserver?.disconnect())

function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}

function playVideo() {
  if (!preferences.value.external) {
    openCookieSettings()
    return
  }
  showVideo.value = true
}

const seoSignals = [
  { title: 'Peu visible', text: 'Tes pages importantes restent trop loin dans les résultats.' },
  { title: 'Peu clair', text: 'Tu ne sais pas quelles requêtes ou quelles pages prioriser.' },
  { title: 'Peu actif', text: 'Ton site présente bien ton activité, mais génère peu de demandes.' },
]

const diagnosticAxes = [
  { title: 'Positionnement', text: 'Google comprend mal ce que tu proposes.' },
  { title: 'Contenu', text: 'Tes pages ne répondent pas aux bonnes intentions.' },
  { title: 'Structure', text: 'Les pages importantes ne sont pas assez mises en avant.' },
  { title: 'Technique', text: 'Certains freins limitent l’indexation ou la performance.' },
  { title: 'Conversion', text: 'Le trafic existe parfois, sans vraiment devenir une opportunité.' },
]
const methodSteps = [
  { title: 'Comprendre', text: 'Ton activité, ton marché, tes clients — et le rôle que ton site doit réellement jouer.' },
  { title: 'Diagnostiquer', text: 'Repérer les freins et les opportunités qui méritent vraiment ton attention.' },
  { title: 'Prioriser', text: 'Transformer l’analyse en actions concrètes, classées selon leur impact et leur effort.' },
]
const caseStudies = [
  {
    client: 'PIXID',
    nameClass: 'text-[4.5rem] sm:text-[7rem]',
    title: 'Structurer le SEO d’un SaaS B2B pour mieux répondre aux intentions de recherche.',
    context: 'Des pages et contenus liés aux solutions digitales de PIXID, avec une visibilité organique à renforcer.',
    intervention: 'Audit technique et sémantique, intentions B2B, cocons, optimisation des pages et maillage interne.',
    result: 'Plusieurs pages mieux positionnées, une meilleure couverture des intentions et une structure SEO plus cohérente.',
  },
  {
    client: 'SAP Concur',
    nameClass: 'text-[3rem] sm:text-[clamp(3.25rem,5vw,4.5rem)]',
    title: 'Renforcer la visibilité de contenus B2B stratégiques grâce à une structure SEO plus claire.',
    context: 'Des contenus et pages stratégiques B2B à mieux structurer pour renforcer leur visibilité organique.',
    intervention: 'Audit technique et sémantique, analyse des opportunités de mots-clés, structuration de cocons, optimisation On-Page et maillage interne.',
    result: 'Plusieurs contenus mieux positionnés, une meilleure organisation autour des intentions de recherche et des opportunités SEO plus clairement priorisées.',
  },
  {
    client: 'PRAMEX International',
    nameClass: 'text-[2.15rem] sm:text-[clamp(2.5rem,3.7vw,3.25rem)]',
    title: 'Structurer des contenus à forte valeur pour mieux capter les recherches liées au développement international.',
    context: 'Des contenus et pages stratégiques à mieux structurer pour soutenir la visibilité organique autour des enjeux de développement international.',
    intervention: 'Audit technique et sémantique, analyse des mots-clés, création de cocons, optimisation des pages et recommandations éditoriales priorisées.',
    result: 'Des contenus mieux positionnés, une structure sémantique plus cohérente et les principaux leviers SEO mieux identifiés.',
  },
  {
    client: 'Business France',
    nameClass: 'text-[clamp(2.5rem,4.5vw,4.25rem)]',
    title: 'Construire une stratégie SEO cohérente à l’échelle de plusieurs plateformes institutionnelles.',
    context: 'Plusieurs plateformes institutionnelles avec un objectif commun : développer durablement leur visibilité organique.',
    intervention: 'Stratégie SEO, travail sur les contenus et optimisation de la performance organique des différentes plateformes.',
    result: 'Le travail a permis de structurer une approche SEO plus cohérente autour de plusieurs plateformes et de leurs enjeux de visibilité.',
  },
  {
    client: 'E-Santé Occitanie',
    nameClass: 'text-[clamp(2.5rem,4.5vw,4.25rem)]',
    title: 'Clarifier l’architecture et les contenus d’un écosystème complexe pour mieux guider moteurs et utilisateurs.',
    context: 'Un écosystème de contenus complexe à rendre plus lisible, plus accessible et plus compréhensible pour les moteurs comme pour les utilisateurs.',
    intervention: 'Travail sur l’architecture, la sémantique et les contenus pour mieux organiser l’information.',
    result: 'Une structure plus claire, une meilleure compréhension des contenus et une base plus solide pour développer la visibilité organique.',
  },
] as const
const activeCaseIndex = ref(0)
const activeCase = computed(() => caseStudies[activeCaseIndex.value] ?? caseStudies[0])
const caseSection = ref<HTMLElement | null>(null)
const isCasePaused = ref(false)
const prefersReducedMotion = ref(false)
const caseAnnouncement = ref('')
let caseVisibilityObserver: IntersectionObserver | undefined
let reducedMotionQuery: MediaQueryList | undefined
let caseTimer: number | undefined
let isCaseVisible = false
let isCaseHovered = false
let isCaseFocused = false

function scheduleCaseAutoplay() {
  if (caseTimer !== undefined) window.clearTimeout(caseTimer)
  caseTimer = undefined
  if (!isCaseVisible || isCaseHovered || isCaseFocused || isCasePaused.value || prefersReducedMotion.value || document.hidden) return

  caseTimer = window.setTimeout(() => {
    activeCaseIndex.value = (activeCaseIndex.value + 1) % caseStudies.length
    scheduleCaseAutoplay()
  }, 12_000)
}

function onCasePointerEnter(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  isCaseHovered = true
  scheduleCaseAutoplay()
}

function onCasePointerLeave(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  isCaseHovered = false
  scheduleCaseAutoplay()
}

function onCaseFocusIn(event: FocusEvent) {
  if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('builder-case-arrow--manual')) return
  isCaseFocused = true
  scheduleCaseAutoplay()
}

function onCaseFocusOut(event: FocusEvent) {
  isCaseFocused = event.relatedTarget instanceof HTMLElement && event.relatedTarget.classList.contains('builder-case-arrow--manual')
  scheduleCaseAutoplay()
}

onMounted(() => {
  reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = reducedMotionQuery.matches
  reducedMotionQuery.addEventListener('change', onMotionPreferenceChange)
  document.addEventListener('visibilitychange', scheduleCaseAutoplay)

  if (!caseSection.value || !('IntersectionObserver' in window)) return
  caseVisibilityObserver = new IntersectionObserver(([entry]) => {
    isCaseVisible = entry?.isIntersecting ?? false
    scheduleCaseAutoplay()
  }, { rootMargin: '0px 0px -25% 0px', threshold: 0 })
  caseVisibilityObserver.observe(caseSection.value)
})

onBeforeUnmount(() => {
  caseVisibilityObserver?.disconnect()
  reducedMotionQuery?.removeEventListener('change', onMotionPreferenceChange)
  document.removeEventListener('visibilitychange', scheduleCaseAutoplay)
  if (caseTimer !== undefined) window.clearTimeout(caseTimer)
})

function onMotionPreferenceChange(event: MediaQueryListEvent) {
  prefersReducedMotion.value = event.matches
  scheduleCaseAutoplay()
}

function changeCase(direction: -1 | 1) {
  activeCaseIndex.value = (activeCaseIndex.value + direction + caseStudies.length) % caseStudies.length
  caseAnnouncement.value = `Cas client : ${activeCase.value.client}`
  scheduleCaseAutoplay()
}

function toggleCaseAutoplay() {
  isCasePaused.value = !isCasePaused.value
  scheduleCaseAutoplay()
}

const faqs = [
  { question: 'Est-ce que j’ai vraiment besoin d’un audit SEO ?', answer: 'Pas forcément. Le premier échange sert justement à voir si le problème vient du SEO, de la structure du site, du contenu, de la technique… ou d’autre chose.' },
  { question: 'Est-ce que tu peux directement modifier mon site ?', answer: 'Oui. Si les priorités sont déjà claires, on peut passer directement à l’implémentation. Sinon, le Sprint SEO permet d’abord de savoir quoi traiter.' },
  { question: 'Est-ce que je vais repartir avec 80 recommandations impossibles à appliquer ?', answer: 'Non. L’objectif est justement l’inverse : identifier quelques priorités réellement utiles, les classer, et construire une roadmap claire.' },
  { question: 'Combien de temps faut-il pour voir des résultats ?', answer: 'Ça dépend du site, de son historique et des actions mises en place. Certaines optimisations peuvent produire des effets rapidement, d’autres demandent plusieurs semaines ou plusieurs mois.' },
  { question: 'Est-ce que tu peux garantir une première position sur Google ?', answer: 'Non. Et personne de sérieux ne devrait le faire. Je peux en revanche t’aider à prendre de meilleures décisions SEO et à concentrer les efforts là où ils ont le plus de sens.' },
  { question: 'Et si je veux simplement un avis sur mon site ?', answer: 'C’est très bien aussi. Le premier échange sert d’abord à faire le point. Tu n’as pas besoin d’arriver avec un besoin parfaitement défini.' },
  { question: 'Est-ce que je suis obligé de te confier l’implémentation ensuite ?', answer: 'Non. Tu peux appliquer les recommandations toi-même, les transmettre à ton équipe ou me confier tout ou partie de l’exécution.' },
  { question: 'Est-ce adapté à un petit site ?', answer: 'Oui. Le sujet n’est pas la taille du site, mais le potentiel et les priorités. Un site de 10 pages peut avoir autant besoin de clarté qu’un site de 300 pages.' },
]
</script>

<template>
  <div ref="landingRoot" class="builder-landing min-h-screen text-ink">
    <header class="builder-learn-header">
      <BaseContainer class="flex items-center justify-between gap-4 py-4">
        <a href="/" class="text-sm font-semibold tracking-tight text-[#254e54] sm:text-base">Altruisme Learn</a>
        <a href="/app" class="builder-learn-access">Accéder à mon espace <span aria-hidden="true">↗</span></a>
      </BaseContainer>
    </header>
    <main>
      <section class="builder-hero relative isolate overflow-hidden border-b border-petrol/10">
        <BaseContainer>
          <div class="mx-auto max-w-4xl py-16 text-center sm:py-20 lg:py-[6.5rem]">
            <div class="builder-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[.17em] text-petrol">
              <span class="h-1.5 w-1.5 rounded-full bg-petrol" />SPRINT SEO
            </div>
            <h1 class="mx-auto mt-7 max-w-[52rem] text-[2.45rem] font-semibold leading-[1.12] tracking-[-0.045em] text-ink sm:text-[3.35rem] lg:text-[3.85rem] lg:leading-[1.08]">
              Ton site ne devrait pas simplement exister.
              <span class="mt-1 block text-petrol sm:mt-2">Il devrait t’apporter des clients.</span>
            </h1>
            <div class="builder-player-wrap relative mx-auto mt-10 max-w-3xl sm:mt-11">
              <div class="builder-player-shell rounded-[1.35rem] p-1 sm:rounded-[1.7rem] sm:p-1.5">
                <div class="relative aspect-video overflow-hidden rounded-[1rem] bg-[#203b40] sm:rounded-[1.35rem]">
                  <button v-if="!showVideo" type="button" class="group absolute inset-0 flex items-center justify-center overflow-hidden text-sand-light focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-sand" aria-label="Lire la vidéo" @click="playVideo">
                    <span class="builder-video-poster pointer-events-none absolute inset-0" />
                    <span class="pointer-events-none relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-[#f2f6f0]/95 text-[#2b5358] shadow-[0_12px_36px_rgba(8,31,37,.25)] transition-colors duration-300 group-hover:bg-white sm:h-18 sm:w-18">
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
              <a :href="props.actionHref" class="builder-button builder-button--primary">{{ props.actionLabel }}<span class="ml-2" aria-hidden="true">↗</span></a>
              <a href="#sprint-seo" class="builder-button builder-button--secondary">Découvrir le Sprint SEO</a>
            </div>
            <p class="mt-7 text-sm font-medium text-muted-light">Audit SEO <span class="mx-2 font-bold text-petrol/80">·</span> Stratégie SEO <span class="mx-2 font-bold text-petrol/80">·</span> Backlinks SEO</p>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--cool border-b border-petrol/10 py-8 sm:py-11" aria-label="Quelques résultats en chiffres">
        <BaseContainer>
          <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">100+</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">pages auditées, restructurées ou optimisées</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">10+</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">cocons sémantiques construits</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">300+</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">mots-clés analysés et priorisés</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.45rem] font-semibold leading-tight tracking-tight text-[#315d61] sm:text-[1.85rem]">Des dizaines</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">de positions gagnées sur des contenus stratégiques</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-signals-section builder-wash relative overflow-hidden py-20 sm:py-28 lg:py-36">
        <BaseContainer>
          <div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <div class="max-w-xl lg:sticky lg:top-20 lg:self-start">
              <h2 class="text-3xl font-semibold leading-[1.14] tracking-[-0.04em] text-ink sm:text-[3.25rem]">
                Ton site a probablement <span class="text-petrol">plus de potentiel qu’il n’en exprime aujourd’hui</span>
              </h2>
            </div>
            <div class="builder-signals" aria-label="Trois signaux à reconnaître">
              <div v-for="(signal, index) in seoSignals" :key="signal.title" data-builder-reveal class="builder-reveal builder-signal">
                <span class="builder-signal-index" aria-hidden="true">0{{ index + 1 }}</span>
                <div class="builder-signal-copy">
                  <h3 class="text-xl font-semibold tracking-tight text-[#2f5b60] sm:text-2xl">{{ signal.title }}</h3>
                  <p class="mt-2 max-w-sm text-base leading-7 text-muted">{{ signal.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Le problème n’est pas toujours <span class="text-petrol">là où on le pense</span></h2>
            <p class="mt-6 text-lg leading-8 text-muted">Un site peut être bien construit et pourtant rester invisible. Souvent, plusieurs dimensions se croisent.</p>
          </div>
          <div class="builder-diagnostic-grid mx-auto mt-12 max-w-6xl sm:mt-16">
            <div v-for="axis in diagnosticAxes" :key="axis.title" data-builder-reveal class="builder-reveal builder-diagnostic-card">
              <h3 class="text-xl font-semibold tracking-tight text-[#315d61]">{{ axis.title }}</h3>
              <p class="mt-3 max-w-xs leading-7 text-muted">{{ axis.text }}</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-belief builder-deep relative overflow-hidden py-24 sm:py-32">
        <BaseContainer>
          <div class="relative">
            <div class="max-w-2xl">
              <h2 class="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">Le trafic seul ne suffit pas</h2>
              <p class="mt-5 max-w-lg text-lg leading-8 text-[#d8e7e2]">Le bon référencement crée un chemin, pas seulement une visite.</p>
            </div>
            <ol data-builder-sequence class="builder-journey mt-16 sm:mt-20">
              <li data-builder-reveal class="builder-reveal builder-journey-step">
                <span class="builder-journey-dot" aria-hidden="true" />
                <span class="text-xs font-medium tracking-[.2em] text-[#b6cdc7]">01</span>
                <h3>Être trouvé</h3>
                <p>Apparaître là où tes clients cherchent.</p>
              </li>
              <li data-builder-reveal class="builder-reveal builder-journey-step">
                <span class="builder-journey-dot" aria-hidden="true" />
                <span class="text-xs font-medium tracking-[.2em] text-[#b6cdc7]">02</span>
                <h3>Être compris</h3>
                <p>Rendre ton offre évidente sur la bonne page.</p>
              </li>
              <li data-builder-reveal class="builder-reveal builder-journey-step">
                <span class="builder-journey-dot" aria-hidden="true" />
                <span class="text-xs font-medium tracking-[.2em] text-[#b6cdc7]">03</span>
                <h3>Être choisi</h3>
                <p>Donner envie de passer à l’action.</p>
              </li>
            </ol>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div class="max-w-xl lg:flex lg:items-center">
              <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Une méthode simple : <span class="text-petrol">comprendre, diagnostiquer, prioriser</span></h2>
            </div>
            <ol class="builder-method-steps">
              <li v-for="(step, index) in methodSteps" :key="step.title" data-builder-reveal class="builder-reveal builder-method-step">
                <span class="builder-method-number" aria-hidden="true">0{{ index + 1 }}</span>
                <div>
                  <h3 class="text-2xl font-semibold tracking-tight text-ink">{{ step.title }}</h3>
                  <p class="mt-2 max-w-md leading-7 text-muted">{{ step.text }}</p>
                </div>
              </li>
            </ol>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--cool py-20 sm:py-28">
        <BaseContainer>
          <div class="max-w-3xl">
            <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Passer du flou à <span class="text-petrol">un plan clair</span></h2>
          </div>
          <div class="builder-transformation mt-12 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:gap-16">
            <div class="max-w-md px-8 py-8 lg:px-0 lg:py-10">
              <h3 class="text-sm font-medium tracking-[.16em] text-muted">Aujourd’hui</h3>
              <p class="mt-8 text-2xl font-medium leading-snug tracking-tight text-[#637674] sm:text-3xl">Des données partout.<br>Des idées de contenus.<br>Des pages à reprendre.</p>
              <p class="mt-7 text-lg leading-8 text-muted">Et trop de possibilités pour savoir où commencer.</p>
            </div>
            <div class="builder-transformation-after relative overflow-hidden rounded-[1.75rem] p-8 sm:p-11">
              <h3 class="text-sm font-medium tracking-[.16em] text-[#527779]">Après le diagnostic</h3>
              <p class="mt-8 text-2xl font-semibold leading-snug tracking-tight text-[#2b555b] sm:text-3xl">Les bonnes pages.<br>Les bons sujets.<br>Les corrections utiles.</p>
              <p class="mt-7 max-w-md text-lg leading-8 text-muted">Une roadmap claire pour les prochaines semaines, dans le bon ordre.</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-personal builder-wash--ivory overflow-hidden py-20 sm:py-28">
        <BaseContainer>
          <div class="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div data-builder-reveal class="builder-reveal builder-portrait-wrap relative mx-auto w-full max-w-[32rem] lg:mx-0">
              <img :src="portraitOcean" alt="Portrait de Nicolas Gadeyne au bord de l’océan" width="1023" height="1537" loading="lazy" decoding="async" class="builder-portrait h-auto w-full rounded-[1.4rem] object-cover" />
            </div>
            <div data-builder-reveal class="builder-reveal builder-personal-copy max-w-xl">
              <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Je regarde ton site <span class="text-petrol">dans son ensemble</span></h2>
              <p class="mt-8 text-lg leading-8 text-muted">Je travaille le SEO depuis 2019. Avant ça, et toujours aujourd’hui, je construis aussi des sites et des produits web.</p>
              <p class="mt-5 text-lg leading-8 text-muted">Cette double lecture change le diagnostic : je vois les contenus, mais aussi la structure, la technique, l’offre et ce qui transforme une visite en demande.</p>
              <p class="mt-8 max-w-md border-l-2 border-[#6c9291]/45 pl-5 text-xl font-medium leading-8 text-[#315d61]">Pas une couche de SEO ajoutée au site. Une direction cohérente pour le faire progresser.</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section ref="caseSection" class="builder-case-section builder-wash py-20 sm:py-28" @pointerenter="onCasePointerEnter" @pointerleave="onCasePointerLeave" @focusin="onCaseFocusIn" @focusout="onCaseFocusOut">
        <BaseContainer>
          <article>
            <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
              <h2 class="builder-case-copy-stack min-w-0 break-words font-semibold leading-none tracking-[-0.065em] text-[#2c565a]">
                <span v-for="(study, index) in caseStudies" :key="study.client" class="builder-case-copy-item" :class="[study.nameClass, { 'builder-case-copy-item--active': activeCaseIndex === index }]" :aria-hidden="activeCaseIndex !== index">{{ study.client }}<span class="text-[#8ba9a2]">.</span></span>
              </h2>
              <p class="builder-case-copy-stack max-w-xl text-xl leading-8 tracking-tight text-ink sm:text-2xl sm:leading-9">
                <span v-for="(study, index) in caseStudies" :key="study.client" class="builder-case-copy-item" :class="{ 'builder-case-copy-item--active': activeCaseIndex === index }" :aria-hidden="activeCaseIndex !== index">{{ study.title }}</span>
              </p>
            </div>
            <div class="builder-case-track mt-12 grid gap-9 lg:mt-16 lg:grid-cols-3 lg:gap-10">
              <div data-builder-reveal class="builder-reveal builder-case-stage">
                <span class="builder-case-marker" aria-hidden="true" />
                <h3>Le contexte</h3>
                <p class="builder-case-copy-stack"><span v-for="(study, index) in caseStudies" :key="study.client" class="builder-case-copy-item" :class="{ 'builder-case-copy-item--active': activeCaseIndex === index }" :aria-hidden="activeCaseIndex !== index">{{ study.context }}</span></p>
              </div>
              <div data-builder-reveal class="builder-reveal builder-case-stage">
                <span class="builder-case-marker" aria-hidden="true" />
                <h3>L’intervention</h3>
                <p class="builder-case-copy-stack"><span v-for="(study, index) in caseStudies" :key="study.client" class="builder-case-copy-item" :class="{ 'builder-case-copy-item--active': activeCaseIndex === index }" :aria-hidden="activeCaseIndex !== index">{{ study.intervention }}</span></p>
              </div>
              <div data-builder-reveal class="builder-reveal builder-case-stage">
                <span class="builder-case-marker" aria-hidden="true" />
                <h3>Le résultat</h3>
                <p class="builder-case-copy-stack"><span v-for="(study, index) in caseStudies" :key="study.client" class="builder-case-copy-item" :class="{ 'builder-case-copy-item--active': activeCaseIndex === index }" :aria-hidden="activeCaseIndex !== index">{{ study.result }}</span></p>
              </div>
            </div>
            <p class="mt-12 max-w-2xl text-lg font-medium leading-8 text-[#315d61] lg:ml-auto lg:mt-16">Pas de recette magique : une stratégie mieux structurée et des actions mieux ciblées.</p>
          </article>
          <nav class="builder-case-navigation mt-8 flex justify-end gap-2" aria-label="Parcourir les cas clients">
            <button v-if="!prefersReducedMotion" type="button" class="builder-case-arrow" :aria-label="isCasePaused ? 'Reprendre le défilement automatique' : 'Mettre en pause le défilement automatique'" :aria-pressed="isCasePaused" @click="toggleCaseAutoplay">
              <svg v-if="isCasePaused" class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 2.5a.75.75 0 0 1 1.15-.64l7.5 4.75a.75.75 0 0 1 0 1.27l-7.5 4.75A.75.75 0 0 1 5 12V2.5Z" /></svg>
              <svg v-else class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="4" y="3" width="2.5" height="10" rx=".65" /><rect x="9.5" y="3" width="2.5" height="10" rx=".65" /></svg>
            </button>
            <button type="button" class="builder-case-arrow builder-case-arrow--manual" aria-label="Cas précédent" @click="changeCase(-1)">←</button>
            <button type="button" class="builder-case-arrow builder-case-arrow--manual" aria-label="Cas suivant" @click="changeCase(1)">→</button>
          </nav>
          <span class="sr-only" aria-live="polite">{{ caseAnnouncement }}</span>
        </BaseContainer>
      </section>

      <section class="builder-fit py-16 sm:py-20" aria-labelledby="builder-fit-title">
        <BaseContainer>
          <h2 id="builder-fit-title" class="sr-only">Pour qui cet accompagnement a du sens</h2>
          <div class="grid gap-10 md:grid-cols-2 md:gap-20">
            <div class="builder-fit-territory">
              <h3 class="text-2xl font-semibold tracking-tight text-[#315d61]">Pour toi, si…</h3>
              <p class="mt-4 max-w-md text-lg leading-8 text-muted">Tu es freelance, consultant ou tu développes une activité B2B avec un site déjà en ligne. Tu veux savoir où concentrer tes efforts SEO.</p>
            </div>
            <div class="builder-fit-territory builder-fit-territory--quiet">
              <h3 class="text-2xl font-semibold tracking-tight text-ink">Moins adapté, si…</h3>
              <p class="mt-4 max-w-md text-lg leading-8 text-muted">Tu cherches une position Google garantie ou des optimisations sans prendre le temps de comprendre ce qui bloque.</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section id="sprint-seo" class="builder-offers-section builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="max-w-3xl">
            <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Deux façons d’avancer. <span class="text-petrol">La bonne dépend de ton site</span></h2>
          </div>
          <div class="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
            <article data-builder-reveal class="builder-reveal builder-offer-primary flex flex-col rounded-[1.75rem] p-7 sm:p-10 lg:min-h-[27rem]">
              <p class="text-sm font-medium text-[#597e80]">Sprint SEO</p>
              <h3 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#254e54] sm:text-4xl">Faire le point</h3>
              <p class="mt-6 max-w-md text-lg leading-8 text-muted">Comprendre ce qui bloque, prioriser et repartir avec une roadmap claire.</p>
              <p class="builder-offer-scope mt-8 max-w-md text-sm leading-7 text-[#547174]">Audit technique et sémantique <span>·</span> Priorités page par page <span>·</span> Roadmap 90 jours <span>·</span> Restitution</p>
              <p class="mt-auto pt-10 text-sm font-medium text-[#315d61]">À partir de 990 € HT</p>
            </article>
            <article data-builder-reveal class="builder-reveal builder-offer-secondary flex flex-col rounded-[1.75rem] p-7 sm:p-10 lg:min-h-[27rem]">
              <p class="text-sm font-medium text-[#597e80]">Implémentation SEO</p>
              <h3 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#254e54] sm:text-4xl">Passer à l’action</h3>
              <p class="mt-6 max-w-md text-lg leading-8 text-muted">Me confier tout ou partie des optimisations identifiées, directement dans le CMS ou le code.</p>
              <p class="builder-offer-scope mt-8 max-w-md text-sm leading-7 text-[#547174]">Pages et contenus <span>·</span> Structure et maillage <span>·</span> Technique et conversion</p>
              <p class="mt-auto pt-10 text-sm font-medium text-[#315d61]">Sur devis, selon le périmètre</p>
            </article>
          </div>
          <div class="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <p class="max-w-lg leading-7 text-muted">Pas besoin de choisir maintenant. Le premier échange sert justement à voir ce qui a du sens.</p>
            <a :href="props.actionHref" class="builder-button builder-button--primary shrink-0">{{ props.actionLabel }} <span class="ml-2" aria-hidden="true">↗</span></a>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-first-call builder-wash--cool py-20 sm:py-28">
        <BaseContainer>
          <div class="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-center lg:gap-24">
            <div class="builder-first-call-time" aria-label="45 minutes">
              <span class="text-[5.5rem] font-light leading-none tracking-[-0.08em] text-[#315d61] sm:text-[7rem]">45</span>
              <span class="ml-2 text-sm font-medium text-[#597e80]">minutes</span>
            </div>
            <div class="max-w-2xl">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">D’abord, comprendre ton site</h2>
              <p class="mt-6 text-lg leading-8 text-muted">On parle de ton site, de tes objectifs, des blocages possibles et des prochaines actions utiles. Pas besoin d’arriver avec un cahier des charges.</p>
              <p class="mt-5 text-lg leading-8 text-muted">La suite peut être un Sprint, une implémentation directe… ou aucune mission si le SEO n’est pas ta priorité.</p>
              <p class="mt-6 text-sm font-medium text-[#53777a]">Sans engagement. Sans tunnel commercial.</p>
              <a :href="props.actionHref" class="builder-button builder-button--primary mt-8">{{ props.actionLabel }} <span class="ml-2" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div class="max-w-md">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Les questions que tu te poses <span class="text-petrol">sûrement</span></h2>
            </div>
            <div class="border-t border-petrol/20">
              <div v-for="(faq, index) in faqs" :key="faq.question" class="builder-faq-item border-b border-petrol/20">
                <h3>
                  <button type="button" class="builder-faq-trigger flex w-full items-start justify-between gap-4 py-6 text-left text-base font-medium sm:py-7 sm:text-lg" :aria-expanded="openFaq === index" :aria-controls="`builder-faq-answer-${index}`" @click="openFaq = openFaq === index ? null : index">
                    <span>{{ faq.question }}</span>
                    <span class="builder-faq-icon shrink-0" :class="{ 'builder-faq-icon--open': openFaq === index }" aria-hidden="true" />
                  </button>
                </h3>
                <div :id="`builder-faq-answer-${index}`" class="builder-faq-panel" :class="{ 'builder-faq-panel--open': openFaq === index }" :aria-hidden="openFaq !== index">
                  <div class="min-h-0 overflow-hidden"><p class="max-w-2xl pb-6 leading-7 text-muted">{{ faq.answer }}</p></div>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </section>
      <section data-builder-sequence class="builder-final relative isolate overflow-hidden py-24 sm:py-36">
        <span class="builder-final-light" aria-hidden="true" />
        <BaseContainer>
          <div data-builder-reveal class="builder-reveal relative mx-auto max-w-4xl text-center">
            <h2 class="mx-auto max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">Et si on commençait simplement par regarder ton site&nbsp;?</h2>
            <p class="mx-auto mt-6 max-w-lg text-lg leading-8 text-[#dbe8e4]">On verra ensemble ce qui mérite vraiment ton attention.</p>
            <a :href="props.actionHref" class="builder-button builder-button--inverse mt-9">{{ props.actionLabel }} <span class="ml-2" aria-hidden="true">↗</span></a>
            <p class="mt-5 text-sm text-[#bdd1c9]">45 min · sans engagement</p>
          </div>
        </BaseContainer>
      </section>
    </main>
    <footer class="builder-footer">
      <BaseContainer class="py-10 sm:py-12">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div class="shrink-0">
            <p class="text-base font-semibold tracking-tight text-[#f3f3ec]">Altruisme Learn</p>
            <p class="mt-2 text-sm tracking-[.04em] text-[#bdcec7]">SEO · Produit · Technique</p>
          </div>
          <nav aria-label="Liens légaux et réglages des cookies">
            <ul class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#c2d0ca] sm:justify-end">
              <li><a href="https://altruisme.dev/mentions-legales" class="builder-footer-link">Mentions légales</a></li>
              <li><a href="https://altruisme.dev/politique-de-confidentialite" class="builder-footer-link">Politique de confidentialité</a></li>
              <li><a href="https://altruisme.dev/cookies" class="builder-footer-link">Gestion des cookies</a></li>
              <li><a href="/app" class="builder-footer-link">Mon espace</a></li>
              <li><button type="button" class="builder-footer-link" @click="openCookieSettings">Réglages des cookies</button></li>
            </ul>
          </nav>
        </div>
        <div class="builder-footer-bottom mt-8 pt-5 sm:mt-10">
          <p class="text-xs text-[#9eafa8]">© {{ footerYear }} Altruisme.DEV. Tous droits réservés.</p>
        </div>
      </BaseContainer>
    </footer>
  </div>
</template>
