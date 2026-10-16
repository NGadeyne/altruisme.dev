<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import infographicSprintSeo from '@/assets/infographie-sprint-seo.webp'
import portraitOcean from '@/assets/portrait-ocean.webp'
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/composables/useCookieConsent'

const props = defineProps<{ actionHref: string; actionLabel: string }>()
const footerYear = new Date().getFullYear()
const openFaq = ref<number | null>(null)
const landingRoot = ref<HTMLElement | null>(null)
let revealObserver: IntersectionObserver | undefined
let calendlyLoad: Promise<void> | undefined

type CalendlyWindow = Window & {
  Calendly?: { initPopupWidget: (options: { url: string }) => void }
}

function loadCalendly() {
  if ((window as CalendlyWindow).Calendly) return Promise.resolve()
  if (calendlyLoad) return calendlyLoad

  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.href = 'https://assets.calendly.com/assets/external/widget.css'

  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true

  calendlyLoad = Promise.all([
    new Promise<void>((resolve, reject) => {
      stylesheet.onload = () => resolve()
      stylesheet.onerror = () => reject(new Error('Calendly stylesheet failed to load'))
      document.head.append(stylesheet)
    }),
    new Promise<void>((resolve, reject) => {
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Calendly script failed to load'))
      document.head.append(script)
    }),
  ]).then(() => undefined).catch((error: unknown) => {
    stylesheet.remove()
    script.remove()
    calendlyLoad = undefined
    throw error
  })

  return calendlyLoad
}

async function openCalendly() {
  try {
    await loadCalendly()
    const calendly = (window as CalendlyWindow).Calendly
    if (!calendly) throw new Error('Calendly popup is unavailable')
    calendly.initPopupWidget({ url: props.actionHref })
  } catch {
    window.location.assign(props.actionHref)
  }
}

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

const seoSignals = [
  { title: 'Invisible sur Google', text: 'Tes pages stratégiques peinent à se positionner, même sur des recherches importantes pour ton activité.' },
  { title: 'Difficile de savoir quoi améliorer', text: 'Tu publies, tu optimises, tu testes… mais tu ne sais pas quelles actions peuvent réellement faire la différence.' },
  { title: 'Du trafic, mais peu de résultats', text: 'Ton site attire des visiteurs, mais trop peu deviennent des prospects ou des clients.' },
]

const diagnosticAxes = [
  { title: 'Positionnement', text: 'Ton offre manque de clarté ou tu ne cibles pas les recherches qui attirent les bons prospects.' },
  { title: 'Contenu', text: 'Tes pages existent, mais ne répondent pas suffisamment aux attentes de ceux qui te cherchent.' },
  { title: 'Structure', text: 'Tes pages stratégiques sont mal reliées, peu mises en valeur ou difficiles à découvrir.' },
  { title: 'Technique', text: 'Des problèmes d’exploration, d’indexation ou de performance freinent la visibilité de ton site.' },
  { title: 'Conversion', text: 'Tu attires des visiteurs, mais ton site ne les incite pas suffisamment à passer à l’action.' },
]
const methodSteps = [
  { title: 'Comprendre', text: 'Analyser ton site, ton marché et tes objectifs pour identifier ce qui freine réellement ta visibilité.' },
  { title: 'Prioriser', text: 'Identifier les opportunités à fort potentiel et définir les actions à mener, selon leur impact et leur effort.' },
  { title: 'Agir', text: 'Passer des recommandations aux corrections concrètes : contenus, structure, maillage et optimisations techniques.' },
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
  { question: 'Est-ce que j’ai vraiment besoin d’un audit SEO ?', answer: 'Pas forcément. Si tu connais déjà les problèmes à corriger, on peut directement travailler sur leur résolution. Le Sprint SEO est surtout utile lorsque les blocages ne sont pas clairement identifiés ou que tu ne sais pas par où commencer.' },
  { question: 'Qu’est-ce que je vais obtenir concrètement ?', answer: 'Pas un PowerPoint de 80 pages. Tu repars avec un diagnostic argumenté, des actions priorisées et des recommandations exploitables. Chaque action précise ce qu’il faut faire, pourquoi et dans quel ordre. L’objectif, c’est de pouvoir passer à l’exécution.' },
  { question: 'Combien coûte une intervention SEO ?', answer: 'Le tarif dépend de ton site, de sa complexité et du travail nécessaire. Après un premier échange, je te propose un périmètre clair, des livrables définis et un devis. Tu sais ce qui est inclus avant de t’engager.' },
  { question: 'Est-ce que tu peux directement modifier mon site ?', answer: 'Oui, c’est même l’un des intérêts de mon approche. Grâce à mon expérience en développement, je peux intervenir directement sur de nombreux CMS et environnements techniques, selon les accès et la technologie utilisée. Tu n’es donc pas obligé de faire appel à un autre prestataire pour toutes les corrections.' },
  { question: 'Combien de temps faut-il pour voir des résultats ?', answer: 'Certaines corrections techniques peuvent être mises en place rapidement, mais leurs effets sur Google prennent généralement plus de temps. Selon le problème et la concurrence, les évolutions peuvent nécessiter plusieurs semaines ou plusieurs mois. Je distingue toujours les actions réalisées des résultats observés.' },
  { question: 'Est-ce que je suis obligé de poursuivre après le Sprint SEO ?', answer: 'Absolument pas. Les recommandations et le plan d’action t’appartiennent. Tu peux les mettre en œuvre avec ton équipe, un autre prestataire ou me confier leur implémentation. Aucune obligation de poursuivre.' },
]
</script>

<template>
  <div ref="landingRoot" class="builder-landing min-h-screen text-ink">
    <main>
      <section class="builder-hero relative isolate overflow-hidden border-b border-petrol/10">
        <BaseContainer>
          <div class="mx-auto max-w-4xl py-16 text-center sm:py-20 lg:py-[6.5rem]">
            <div class="builder-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[.17em] text-petrol">
              <span class="h-1.5 w-1.5 rounded-full bg-petrol" />SPRINT SEO
            </div>
            <h1 class="mx-auto mt-7 max-w-[52rem] text-[2.45rem] font-semibold leading-[1.12] tracking-[-0.045em] text-ink sm:text-[3.35rem] lg:text-[3.85rem] lg:leading-[1.08]">
              Ton site ne devrait pas simplement exister.
              <span class="mt-1 block text-petrol sm:mt-2">Il devrait t’apporter des clients&nbsp;!</span>
            </h1>
            <div class="builder-player-wrap relative mx-auto mt-10 max-w-3xl sm:mt-11">
              <div class="builder-player-shell rounded-[1.35rem] p-1 sm:rounded-[1.7rem] sm:p-1.5">
                <img
                  :src="infographicSprintSeo"
                  alt="Infographie Sprint SEO : diagnostic des problèmes de référencement, priorisation des actions selon leur impact et leur effort, puis implémentation des optimisations techniques et éditoriales."
                  class="block h-auto w-full rounded-[1rem] sm:rounded-[1.35rem]"
                  width="1536"
                  height="1024"
                  decoding="async"
                  fetchpriority="high"
                >
              </div>
            </div>
            <p class="mx-auto mt-8 max-w-[41rem] text-base leading-7 text-muted sm:text-lg sm:leading-8">
              J’identifie ce qui freine ta visibilité sur Google, je priorise les actions qui peuvent réellement faire progresser ton site et, si besoin, je les implémente.
            </p>
            <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a :href="props.actionHref" class="builder-button builder-button--primary" @click.prevent="openCalendly">{{ props.actionLabel }}<span class="ml-2" aria-hidden="true">↗</span></a>
              <a href="#sprint-seo" class="builder-button builder-button--secondary">Découvrir le Sprint SEO</a>
            </div>
            <p class="mt-7 text-sm font-medium text-muted-light">Audit SEO <span class="mx-2 font-bold text-petrol/80">·</span> Stratégie <span class="mx-2 font-bold text-petrol/80">·</span> Contenu <span class="mx-2 font-bold text-petrol/80">·</span> Technique</p>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--cool border-b border-petrol/10 py-8 sm:py-11" aria-label="Quelques résultats en chiffres">
        <BaseContainer>
          <div class="grid gap-3 sm:gap-4 md:grid-cols-3">
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">Clients accompagnés</p>
              <p class="mt-2 max-w-[13rem] text-sm leading-6 text-muted">Sur des projets SEO et digitaux</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">7+</p>
              <p class="mt-2 font-medium text-[#315d61]">Années d’expérience</p>
              <p class="mt-1 max-w-[13rem] text-sm leading-6 text-muted">En développement et projets web</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">800+</p>
              <p class="mt-2 font-medium text-[#315d61]">Pages optimisées</p>
              <p class="mt-1 max-w-[13rem] text-sm leading-6 text-muted">Contenus, structure, maillage et SEO technique</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-signals-section builder-wash relative overflow-hidden py-20 sm:py-28 lg:py-36">
        <BaseContainer>
          <div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <div class="max-w-xl lg:sticky lg:top-20 lg:self-start">
              <h2 class="text-3xl font-semibold leading-[1.14] tracking-[-0.04em] text-ink sm:text-[3.25rem]">
                Ton site pourrait <span class="text-petrol">t’apporter bien plus</span>
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
            <p class="mt-6 text-lg leading-8 text-muted">Un site peut avoir de bons contenus, une belle interface et pourtant ne pas générer les résultats attendus. Souvent, ce n’est pas un seul problème, mais plusieurs freins qui se cumulent.</p>
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
              <h2 class="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">Être visible, c’est bien. Convertir, c’est mieux.</h2>
              <p class="mt-5 max-w-lg text-lg leading-8 text-[#d8e7e2]">Un bon référencement ne consiste pas seulement à attirer des visiteurs. Il doit attirer les bonnes personnes, répondre à leurs attentes et les accompagner jusqu’à ton offre.</p>
            </div>
            <ol data-builder-sequence class="builder-journey mt-16 sm:mt-20">
              <li data-builder-reveal class="builder-reveal builder-journey-step">
                <span class="builder-journey-dot" aria-hidden="true" />
                <span class="text-xs font-medium tracking-[.2em] text-[#b6cdc7]">01</span>
                <h3>Être trouvé</h3>
                <p>Positionner tes pages sur les recherches que font réellement tes futurs clients.</p>
              </li>
              <li data-builder-reveal class="builder-reveal builder-journey-step">
                <span class="builder-journey-dot" aria-hidden="true" />
                <span class="text-xs font-medium tracking-[.2em] text-[#b6cdc7]">02</span>
                <h3>Être compris</h3>
                <p>Présenter une offre claire, pertinente et convaincante dès leur arrivée sur ton site.</p>
              </li>
              <li data-builder-reveal class="builder-reveal builder-journey-step">
                <span class="builder-journey-dot" aria-hidden="true" />
                <span class="text-xs font-medium tracking-[.2em] text-[#b6cdc7]">03</span>
                <h3>Être choisi</h3>
                <p>Transformer leur intérêt en action : une prise de contact, une demande de devis ou un achat.</p>
              </li>
            </ol>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div class="max-w-xl lg:flex lg:flex-col lg:items-start lg:justify-center">
              <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Une méthode simple, <span class="text-petrol">tournée vers l’action</span></h2>
              <p class="mt-6 max-w-lg text-lg leading-8 text-muted">Pas de recommandations à rallonge ni de stratégie déconnectée de ton activité. Chaque étape vise à identifier ce qui compte et à faire avancer ton référencement.</p>
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
            <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Arrêter de chercher. <span class="text-petrol">Savoir quoi faire.</span></h2>
          </div>
          <div class="builder-transformation mt-12 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:gap-16">
            <div class="max-w-md px-8 py-8 lg:px-0 lg:py-10">
              <h3 class="text-sm font-medium tracking-[.16em] text-muted">Aujourd’hui</h3>
              <p class="mt-8 text-2xl font-medium leading-snug tracking-tight text-[#637674] sm:text-3xl">Du trafic qui ne décolle pas.<br>Des pages qui restent invisibles.<br>Des optimisations sans résultats clairs.</p>
              <p class="mt-7 text-lg leading-8 text-muted">Tu sais que ton site pourrait faire mieux. Mais difficile de comprendre ce qui bloque réellement, et encore plus de savoir par où commencer.</p>
            </div>
            <div class="builder-transformation-after relative overflow-hidden rounded-[1.75rem] p-8 sm:p-11">
              <h3 class="text-sm font-medium tracking-[.16em] text-[#527779]">Après le Sprint SEO</h3>
              <p class="mt-8 text-2xl font-semibold leading-snug tracking-tight text-[#2b555b] sm:text-3xl">Les vrais freins identifiés.<br>Les opportunités à fort potentiel.<br>Les corrections classées par priorité.</p>
              <p class="mt-7 max-w-md text-lg leading-8 text-muted">Un plan d’action concret, adapté à ton site, pour concentrer tes efforts là où ils peuvent réellement faire la différence.</p>
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
              <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Le SEO ne s’arrête pas <span class="text-petrol">aux mots-clés</span></h2>
              <p class="mt-8 text-lg leading-8 text-muted">Je travaille le référencement naturel depuis 2019, avec une particularité : je viens aussi du développement et du Product Management.</p>
              <p class="mt-5 text-lg leading-8 text-muted">Cette triple expertise me permet d’aller au-delà des contenus et des positions Google. J’analyse ton site dans son ensemble : sa structure, ses performances techniques, ton offre et le parcours qui transforme un visiteur en client.</p>
              <p class="mt-5 text-lg leading-8 text-muted">L’objectif n’est pas d’accumuler les recommandations, mais d’identifier les actions qui peuvent réellement faire progresser ton site.</p>
              <p class="mt-8 max-w-md border-l-2 border-[#6c9291]/45 pl-5 text-xl font-medium leading-8 text-[#315d61]">Pas du SEO pour cocher des cases. Des décisions concrètes au service de ton activité.</p>
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
              <p class="mt-4 max-w-md text-lg leading-8 text-muted">Ton site peine à gagner en visibilité sur Google, certaines pages ne performent pas et tu ne sais plus quelles optimisations prioriser pour obtenir de meilleurs résultats.</p>
            </div>
            <div class="builder-fit-territory builder-fit-territory--quiet">
              <h3 class="text-2xl font-semibold tracking-tight text-ink">Moins adapté, si…</h3>
              <p class="mt-4 max-w-md text-lg leading-8 text-muted">Tu cherches des positions garanties sur Google ou une solution miracle, sans diagnostic ni travail de fond.</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section id="sprint-seo" class="builder-offers-section builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="max-w-3xl">
            <p class="text-sm font-medium uppercase tracking-[0.16em] text-[#597e80]">Deux façons d’avancer</p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Identifier les priorités. <span class="text-petrol">Passer à l’action.</span></h2>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-muted">Selon la situation de ton site, on commence par comprendre ce qui freine ton référencement ou on intervient directement sur les optimisations à réaliser.</p>
          </div>
          <div class="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
            <article data-builder-reveal class="builder-reveal builder-offer-primary flex flex-col rounded-[1.75rem] p-7 sm:p-10 lg:min-h-[27rem]">
              <p class="text-sm font-medium text-[#597e80]">Sprint SEO</p>
              <h3 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#254e54] sm:text-4xl">Savoir quoi corriger, et dans quel ordre</h3>
              <p class="mt-6 max-w-md text-lg leading-8 text-muted">Identifier les freins à ta visibilité et repartir avec des recommandations concrètes, prêtes à être mises en œuvre.</p>
              <p class="builder-offer-scope mt-8 max-w-md text-sm leading-7 text-[#547174]">Analyse technique et sémantique <span>·</span> Opportunités SEO <span>·</span> Actions priorisées par impact et effort <span>·</span> Roadmap opérationnelle <span>·</span> Restitution 1:1</p>
              <p class="mt-auto pt-10 text-sm font-medium text-[#315d61]">Sur devis, selon le périmètre</p>
            </article>
            <article data-builder-reveal class="builder-reveal builder-offer-secondary flex flex-col rounded-[1.75rem] p-7 sm:p-10 lg:min-h-[27rem]">
              <p class="text-sm font-medium text-[#597e80]">Implémentation SEO</p>
              <h3 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#254e54] sm:text-4xl">Faire les corrections, pas seulement les recommander</h3>
              <p class="mt-6 max-w-md text-lg leading-8 text-muted">Passer du plan d’action aux optimisations concrètes, directement sur ton site, avec des interventions vérifiées.</p>
              <p class="builder-offer-scope mt-8 max-w-md text-sm leading-7 text-[#547174]">Corrections techniques <span>·</span> Structure et maillage interne <span>·</span> Optimisation des pages et contenus <span>·</span> Déploiement et vérification</p>
              <p class="mt-auto pt-10 text-sm font-medium text-[#315d61]">Sur devis, selon le périmètre</p>
            </article>
          </div>
          <div class="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <p class="max-w-lg leading-7 text-muted">Pas besoin de choisir maintenant. On identifie ensemble les priorités et la meilleure façon d’avancer.</p>
            <div class="flex shrink-0 flex-col items-start gap-2 sm:items-center">
              <a :href="props.actionHref" class="builder-button builder-button--primary" @click.prevent="openCalendly">Discuter de mon projet SEO <span class="ml-2" aria-hidden="true">↗</span></a>
              <p class="text-sm text-[#597e80]">Premier échange · 45 minutes</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div class="max-w-md">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Avant de <span class="text-petrol">se lancer</span></h2>
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
            <h2 class="mx-auto max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">Et si on regardait ce qui freine ton référencement&nbsp;?</h2>
            <p class="mx-auto mt-6 max-w-lg text-lg leading-8 text-[#dbe8e4]">En 45 minutes, on échange sur ton site, tes objectifs et les difficultés que tu rencontres. L’occasion de prendre du recul et de voir quelles actions pourraient faire la différence.</p>
            <a :href="props.actionHref" class="builder-button builder-button--inverse mt-9" @click.prevent="openCalendly">Parler de mon projet SEO <span class="ml-2" aria-hidden="true">↗</span></a>
            <p class="mt-5 text-sm text-[#bdd1c9]">Premier échange gratuit · Sans engagement</p>
          </div>
        </BaseContainer>
      </section>
    </main>
    <footer class="builder-footer">
      <BaseContainer class="py-10 sm:py-12">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div class="shrink-0">
            <p class="text-base font-semibold tracking-tight text-[#f3f3ec]">Altruisme Builder</p>
            <p class="mt-2 text-sm tracking-[.04em] text-[#bdcec7]">SEO · Produit · Technique</p>
          </div>
          <nav aria-label="Liens légaux et réglages des cookies">
            <ul class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#c2d0ca] sm:justify-end">
              <li><a href="https://altruisme.dev/mentions-legales" class="builder-footer-link">Mentions légales</a></li>
              <li><a href="https://altruisme.dev/politique-de-confidentialite" class="builder-footer-link">Politique de confidentialité</a></li>
              <li><a href="https://altruisme.dev/cookies" class="builder-footer-link">Gestion des cookies</a></li>
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
