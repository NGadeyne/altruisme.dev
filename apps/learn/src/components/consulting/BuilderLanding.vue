<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import portraitOcean from '@/assets/portrait-ocean.webp'
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/composables/useCookieConsent'
import { formatSeoMinutes, seoPracticeMinutes, seoProgram, seoReadingMinutes } from '@/data/seoProgram'
import { seoResourcePreviews } from '@/data/seoResourcePreviews'

const footerYear = new Date().getFullYear()
const totalTrainingMinutes = seoReadingMinutes + seoPracticeMinutes
const lessonCount = seoProgram.reduce((total, module) => total + module.lessons.length, 0)
const actionCount = 18
const openFaq = ref<number | null>(null)
const landingRoot = ref<HTMLElement | null>(null)
let revealObserver: IntersectionObserver | undefined
onMounted(() => {
  if (!landingRoot.value || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const elements = landingRoot.value.querySelectorAll<HTMLElement>('[data-builder-reveal], [data-builder-sequence]')
  revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.remove('builder-reveal-pending')
      entry.target.classList.remove('builder-sequence-pending')
      observer.unobserve(entry.target)
    }
  }, { rootMargin: '0px 0px -35% 0px', threshold: 0 })

  for (const element of elements) {
    element.classList.add(element.hasAttribute('data-builder-sequence') ? 'builder-sequence-pending' : 'builder-reveal-pending')
    revealObserver.observe(element)
  }
})

onBeforeUnmount(() => revealObserver?.disconnect())

function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}

const acquisitionChallenges = [
  { title: 'Toujours prospecter pour trouver des clients', text: 'Tu passes du temps à envoyer des messages, relancer des prospects ou entretenir ton réseau. Et dès que tu ralentis, tu crains de manquer de nouvelles opportunités.' },
  { title: 'Difficile de compter sur la publicité', text: "Les publicités peuvent attirer des prospects, mais elles demandent un budget régulier. Tu aimerais développer un autre canal d'acquisition, sans devoir payer pour chaque visite." },
  { title: 'Un site qui ne génère presque aucun contact', text: 'Tu as investi dans un site pour présenter ton activité. Pourtant, il reçoit peu de visites qualifiées et génère rarement des demandes de devis ou des prises de contact.' },
]

const diagnosticAxes = [
  { title: 'Positionnement', text: 'Ton offre manque de clarté ou tu ne cibles pas les recherches qui attirent les bons prospects.' },
  { title: 'Contenu', text: 'Tes pages existent, mais ne répondent pas suffisamment aux attentes de ceux qui te cherchent.' },
  { title: 'Structure', text: 'Tes pages stratégiques sont mal reliées, peu mises en valeur ou difficiles à découvrir.' },
  { title: 'Technique', text: 'Des problèmes d’exploration, d’indexation ou de performance freinent la visibilité de ton site.' },
  { title: 'Conversion', text: 'Tu attires des visiteurs, mais ton site ne les incite pas suffisamment à passer à l’action.' },
]
const methodSteps = [
  { title: 'Comprendre et auditer', text: 'Découvre comment Google trouve tes pages, puis utilise Search Console pour repérer les premiers freins à leur visibilité.' },
  { title: 'Choisir les bonnes recherches', text: 'Identifie les questions de tes futurs clients et associe les mots-clés prioritaires aux pages qui peuvent y répondre.' },
  { title: 'Améliorer tes pages et ton site', text: 'Travaille tes titres, tes contenus et ton maillage interne, puis vérifie les points techniques essentiels.' },
  { title: 'Développer ta visibilité', text: 'Construis ta stratégie de contenu et explore les backlinks, le référencement local et la visibilité dans les moteurs IA.' },
  { title: 'Mesurer et prioriser', text: "Suis les indicateurs utiles et transforme tes constats en un plan d'action SEO réaliste sur 90 jours." },
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
  { question: 'Je pars de zéro en SEO. Est-ce que je vais réussir à suivre ?', answer: "Oui, c'est justement pour ça que cette formation existe. On reprend les fondamentaux, sans supposer que tu connais déjà le référencement naturel. Chaque notion est expliquée simplement, illustrée par des exemples et accompagnée d'exercices pour avancer progressivement. L'objectif n'est pas de faire de toi un expert SEO, mais de te rendre capable d'améliorer ton propre site. Disposer d'un site sur lequel pratiquer est recommandé pour profiter pleinement des exercices." },
  { question: 'Je ne sais pas coder. Est-ce que je pourrai vraiment appliquer les conseils ?', answer: "Oui. Tu n'as pas besoin d'être développeur pour comprendre les intentions de recherche, travailler tes contenus, structurer tes pages ou analyser tes performances. Certaines optimisations techniques peuvent demander une intervention spécifique selon ton site ou ton CMS. La formation t'apprend aussi à les identifier et à comprendre ce qui mérite ton attention." },
  { question: "Pourquoi payer 27 € alors qu'il existe des centaines de tutoriels gratuits ?", answer: "Parce que trouver de l'information n'est pas forcément le problème. Savoir quoi en faire, dans quel ordre et comment l'appliquer à son activité, c'est une autre histoire. Ici, tu suis un parcours structuré avec des démonstrations, des exercices, un plan d'action pour suivre tes priorités et un assistant SEO pour éclaircir tes questions." },
  { question: "J'ai déjà essayé d'améliorer mon SEO sans résultat. Qu'est-ce qui sera différent ?", answer: "Publier des articles ou modifier quelques balises ne suffit pas toujours. Encore faut-il savoir si tes pages sont indexées, si tu cibles les bonnes recherches et si tes contenus répondent aux attentes de tes visiteurs. La formation t'aide à prendre du recul, à comprendre ce qui mérite d'être amélioré et à prioriser tes actions plutôt que de multiplier les optimisations au hasard." },
  { question: 'Je manque de temps. Est-ce que je vais vraiment pouvoir m\'y mettre ?', answer: "La formation est conçue pour avancer à ton rythme, avec des leçons courtes et des exercices applicables directement sur ton site. Tu n'as pas besoin de tout refaire en une semaine. L'idée est de commencer par les actions prioritaires, puis de construire progressivement une routine SEO compatible avec ton activité." },
  { question: 'Est-ce que cette formation va réellement m\'apporter des visiteurs et des clients ?', answer: "Elle t'apprendra à identifier des opportunités de visibilité, à optimiser tes pages et à suivre tes performances. Ce sont des compétences utiles pour développer ton acquisition organique. En revanche, personne ne peut te garantir un nombre de visiteurs, de clients ou une position sur Google. Les résultats dépendent de ton marché, de ton site, de la concurrence et des actions mises en œuvre. Ce que tu peux obtenir, c'est une méthode concrète pour avancer avec davantage d'autonomie." },
  { question: "Comment l'assistant SEO m'aide-t-il pendant la formation ?", answer: "Tu peux lui poser une question quand une notion ou une étape te bloque. Il t'aide à clarifier le sujet et peut te renvoyer vers les leçons pertinentes du programme. Ses réponses restent des pistes à vérifier avant de modifier ton site." },
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
              Trouve tes prochains clients
              <span class="mt-1 block text-petrol sm:mt-2">grâce au SEO.</span>
            </h1>
            <div class="builder-player-wrap relative mx-auto mt-10 max-w-3xl sm:mt-11">
              <div class="builder-player-shell rounded-[1.35rem] p-1 sm:rounded-[1.7rem] sm:p-1.5">
                <picture class="block">
                  <img
                    src="/images/formation-seo-immersive.webp"
                    alt="Aperçu illustré de la plateforme de formation SEO Altruisme Learn, avec leçons vidéo, progression et exercices pratiques."
                    class="block h-auto w-full rounded-[1rem] sm:rounded-[1.35rem]"
                    width="1672"
                    height="941"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                  >
                </picture>
              </div>
            </div>
            <div class="mx-auto mt-8 max-w-[41rem] space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>Apprends à attirer sur ton site des personnes qui recherchent déjà tes services sur Google. Sans dépendre uniquement de la prospection ou des publicités payantes.</p>
              <p>Une formation pratique pour comprendre le référencement naturel, optimiser ton site et construire un canal d'acquisition durable. À ton rythme, même si tu pars de zéro.</p>
            </div>
            <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <RouterLink to="/paiement" class="builder-button builder-button--primary">Acheter la formation <span class="ml-2" aria-hidden="true">↗</span></RouterLink>
              <a href="#methode-pedagogique" class="builder-button builder-button--secondary">Découvrir le programme</a>
            </div>
            <p class="mt-7 text-sm font-medium text-muted-light">Niveau débutant <span class="mx-2 font-bold text-petrol/80">·</span> Environ {{ formatSeoMinutes(totalTrainingMinutes) }} de lecture et d'exercices <span class="mx-2 font-bold text-petrol/80">·</span> À ton rythme <span class="mx-2 font-bold text-petrol/80">·</span> Assistant SEO intégré</p>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-wash--cool border-b border-petrol/10 py-8 sm:py-11" aria-label="Ce que comprend la formation">
        <BaseContainer>
          <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">{{ lessonCount }}</p>
              <p class="mt-2 font-medium text-[#315d61]">Leçons</p>
              <p class="mt-1 max-w-[13rem] text-sm leading-6 text-muted">Des explications accessibles, des exemples et des démonstrations concrètes.</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">{{ actionCount }}</p>
              <p class="mt-2 font-medium text-[#315d61]">Plan d'action</p>
              <p class="mt-1 max-w-[13rem] text-sm leading-6 text-muted">Des actions à suivre sur ton site, avec la liberté d'ajouter les tiennes.</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">{{ seoResourcePreviews.length }}</p>
              <p class="mt-2 font-medium text-[#315d61]">Ressources pratiques</p>
              <p class="mt-1 max-w-[13rem] text-sm leading-6 text-muted">Pour analyser, optimiser et organiser ton référencement.</p>
            </div>
            <div data-builder-reveal class="builder-reveal builder-proof-card flex min-h-36 flex-col items-center justify-center rounded-2xl px-3 py-7 text-center sm:min-h-44 sm:px-6 sm:py-9">
              <p class="text-[1.8rem] font-semibold tracking-tight text-[#315d61] sm:text-[2.15rem]">IA</p>
              <p class="mt-2 font-medium text-[#315d61]">Assistant SEO</p>
              <p class="mt-1 max-w-[13rem] text-sm leading-6 text-muted">Pour poser tes questions et retrouver les leçons utiles.</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section class="builder-signals-section builder-wash relative overflow-hidden py-20 sm:py-28 lg:py-36">
        <BaseContainer>
          <div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <div class="max-w-xl lg:self-center">
              <h2 class="text-3xl font-semibold leading-[1.14] tracking-[-0.04em] text-ink sm:text-[3.25rem]">
                Trouver des clients <span class="text-petrol">ne devrait pas dépendre uniquement de tes efforts commerciaux.</span>
              </h2>
            </div>
            <div class="builder-signals" aria-label="Trois freins à l'acquisition de clients">
              <div v-for="(signal, index) in acquisitionChallenges" :key="signal.title" data-builder-reveal class="builder-reveal builder-signal">
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
              <h2 class="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">Être visible, c’est bien. Convertir, c’est mieux</h2>
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

      <section id="methode-pedagogique" class="builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div class="max-w-xl lg:flex lg:flex-col lg:items-start lg:justify-center">
              <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Une formation pensée pour <span class="text-petrol">faire, pas seulement comprendre</span></h2>
              <p class="mt-6 max-w-lg text-lg leading-8 text-muted">Pas de théorie interminable ni de jargon inutile. Chaque module associe des explications accessibles, des démonstrations concrètes et des exercices pour appliquer les notions directement sur ton site. Tu avances à ton rythme, avec une méthode progressive qui te permet de construire tes compétences sans te disperser.</p>
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
            <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Arrêter de deviner. <span class="text-petrol">Savoir quoi faire</span></h2>
          </div>
          <div class="builder-transformation mt-12 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:gap-16">
            <div class="max-w-md px-8 py-8 lg:px-0 lg:py-10">
              <h3 class="text-sm font-medium tracking-[.16em] text-muted">Aujourd'hui</h3>
              <p class="mt-8 text-2xl font-medium leading-snug tracking-tight text-[#637674] sm:text-3xl">Des pages qui restent invisibles.<br>Des mots-clés choisis sans véritable stratégie.<br>Des optimisations dont tu ne comprends pas les résultats.</p>
              <p class="mt-7 text-lg leading-8 text-muted">Tu avances à l'aveugle. Tu sais que ton site pourrait faire mieux. Mais entre les conseils contradictoires, les outils et les termes techniques, difficile de comprendre ce qui bloque réellement et de savoir par où commencer.</p>
            </div>
            <div class="builder-transformation-after relative overflow-hidden rounded-[1.75rem] p-8 sm:p-11">
              <h3 class="text-sm font-medium tracking-[.16em] text-[#527779]">Après la formation</h3>
              <p class="mt-8 text-2xl font-semibold leading-snug tracking-tight text-[#2b555b] sm:text-3xl">Les fondamentaux du référencement compris.<br>Les opportunités de ton site identifiées.<br>Tes premières optimisations réalisées.</p>
              <p class="mt-7 max-w-md text-lg leading-8 text-muted">Tu sais quoi faire, et dans quel ordre. Tu disposes d'une méthode pour analyser ton site, améliorer tes pages et organiser tes prochaines actions SEO, sans multiplier les efforts au hasard.</p>
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
              <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">Le SEO, expliqué par quelqu'un <span class="text-petrol">qui construit aussi des sites</span></h2>
              <p class="mt-8 text-lg leading-8 text-muted">Je travaille sur le référencement naturel depuis 2019, avec une particularité : je viens aussi du développement web et du Product Management.</p>
              <p class="mt-5 text-lg leading-8 text-muted">Cette triple expérience m'a appris une chose : le SEO ne se résume pas aux mots-clés ou aux positions sur Google. Pour comprendre pourquoi un site fonctionne, il faut aussi s'intéresser à sa structure, à ses contenus, à son offre et à l'expérience de ceux qui le visitent.</p>
              <p class="mt-5 text-lg leading-8 text-muted">Au fil de mes projets, j'ai appris à relier ces différentes dimensions pour identifier les problèmes, prioriser les actions et améliorer concrètement les sites sur lesquels je travaille. C'est cette approche que je veux transmettre dans cette formation. Pas besoin de connaître tous les termes techniques ni de maîtriser des dizaines d'outils. L'essentiel est de comprendre les fondamentaux, de savoir poser les bonnes questions et de disposer d'une méthode pour avancer.</p>
              <p class="mt-8 max-w-md border-l-2 border-[#6c9291]/45 pl-5 text-xl font-medium leading-8 text-[#315d61]">Pas du SEO pour devenir expert. Du SEO pour faire avancer ton activité.</p>
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
              <p class="mt-4 max-w-md text-lg leading-8 text-muted">Tu veux attirer davantage de prospects grâce à ton site, sans dépendre uniquement de la prospection ou de la publicité. Mais tu ne sais pas comment améliorer ton référencement ni quelles actions prioriser pour obtenir des résultats.</p>
            </div>
            <div class="builder-fit-territory builder-fit-territory--quiet">
              <h3 class="text-2xl font-semibold tracking-tight text-ink">Moins adapté, si…</h3>
              <p class="mt-4 max-w-md text-lg leading-8 text-muted">Tu cherches des positions garanties sur Google ou une solution miracle, sans diagnostic ni travail de fond.</p>
            </div>
          </div>
        </BaseContainer>
      </section>

      <section id="formation-seo" class="builder-offers-section builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="max-w-3xl">
            <p class="text-sm font-medium uppercase tracking-[0.16em] text-[#597e80]">Une formation pour passer à l'action</p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Fais de ton site un véritable <span class="text-petrol">levier d'acquisition</span></h2>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-muted">Ton site peut faire plus que présenter ton activité. Apprends à attirer les bonnes personnes depuis Google, à identifier les opportunités pour ton entreprise et à construire une stratégie SEO concrète, sans dépendre uniquement de la prospection ou de la publicité.</p>
          </div>
          <article data-builder-reveal class="builder-reveal builder-offer-primary mt-12 max-w-5xl rounded-[1.75rem] p-7 sm:p-10 lg:p-14">
            <p class="text-sm font-medium text-[#597e80]">Altruisme Learn · Formation SEO</p>
            <h3 class="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#254e54] sm:text-4xl">Apprends à attirer tes futurs clients grâce à Google</h3>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-muted">De l'analyse de ton site à ton plan d'action sur 90 jours, découvre comment améliorer ton référencement pour attirer des visiteurs réellement intéressés par tes services. Une méthode progressive, des exercices pratiques et un assistant SEO pour avancer en autonomie, même si tu débutes.</p>
            <div class="mt-10 grid gap-8 border-t border-petrol/15 pt-8 sm:gap-10 lg:grid-cols-2">
              <div>
                <h4 class="font-semibold text-[#254e54]">Le programme</h4>
                <ul class="mt-3 list-disc space-y-1 pl-5 leading-7 text-muted marker:text-petrol">
                  <li>{{ seoProgram.length }} modules</li>
                  <li>{{ lessonCount }} leçons pratiques</li>
                  <li>Environ {{ formatSeoMinutes(seoReadingMinutes) }} de lecture</li>
                  <li>Accessible aux débutants</li>
                  <li>À ton rythme</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-[#254e54]">Les ressources pratiques</h4>
                <ul class="mt-3 list-disc space-y-1 pl-5 leading-7 text-muted marker:text-petrol">
                  <li v-for="resource in seoResourcePreviews" :key="resource.number">{{ resource.title }}</li>
                </ul>
                <p class="mt-3 text-sm text-muted">Cinq outils réunis dans un Google Sheets pour passer de la théorie à l'application sur ton propre site.</p>
              </div>
            </div>
            <div class="mt-8 grid gap-6 border-t border-petrol/15 pt-8 sm:grid-cols-2">
              <div>
                <h4 class="font-semibold text-[#254e54]">Un plan d'action pour avancer concrètement</h4>
                <p class="mt-3 leading-7 text-muted">{{ actionCount }} actions pour identifier tes priorités, améliorer ton site et suivre ta progression. Tu peux également ajouter tes propres objectifs pour construire une stratégie adaptée à ton activité.</p>
              </div>
              <div>
                <h4 class="font-semibold text-[#254e54]">Un assistant SEO pour ne pas rester bloqué</h4>
                <p class="mt-3 leading-7 text-muted">Une question sur un concept, une optimisation ou une étape de la formation ? Ton assistant SEO t'aide à comprendre les notions et à retrouver les leçons pertinentes pour continuer à avancer.</p>
              </div>
            </div>
            <div class="mt-8 border-t border-petrol/15 pt-8">
              <h4 class="font-semibold text-[#254e54]">À la fin de la formation</h4>
              <p class="mt-3 max-w-3xl leading-7 text-muted">Tu sais identifier les recherches de tes futurs clients, optimiser les pages importantes de ton site et suivre les indicateurs qui comptent. Tu repars avec une méthode claire et un plan d'action sur 90 jours pour développer progressivement ton acquisition grâce au SEO.</p>
            </div>
            <div class="mt-10 flex flex-col gap-6 border-t border-petrol/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p class="text-4xl font-semibold tracking-tight text-[#254e54]">27 € TTC</p>
                <p class="mt-1 text-sm italic text-[#597e80]">Tarif de lancement · Accès à la formation complète</p>
              </div>
              <div class="flex flex-col items-start gap-2 sm:items-end">
                <RouterLink to="/paiement" class="builder-button builder-button--primary">Acheter la formation <span class="ml-2" aria-hidden="true">↗</span></RouterLink>
              </div>
            </div>
          </article>
          <p class="mt-10 max-w-3xl text-lg leading-8 text-muted"><strong class="font-semibold text-ink">Pas besoin de devenir expert SEO pour développer ton activité.</strong> L'objectif : savoir quoi faire, dans quel ordre, et avancer avec une méthode adaptée à ton site.</p>
        </BaseContainer>
      </section>

      <section class="builder-wash--ivory py-20 sm:py-28">
        <BaseContainer>
          <div class="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div class="max-w-md lg:self-center">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Tu hésites <span class="text-petrol">encore ?</span></h2>
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
            <h2 class="mx-auto max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">Et si tu prenais enfin ton SEO en main ?</h2>
            <p class="mx-auto mt-6 max-w-lg text-lg leading-8 text-[#dbe8e4]">Ton site mérite mieux que des optimisations au hasard. Apprends à comprendre son référencement, à identifier les bonnes opportunités et à construire une méthode pour améliorer progressivement ta visibilité. Une formation concrète, des exercices pratiques et les fondamentaux nécessaires pour avancer en autonomie.</p>
            <RouterLink to="/paiement" class="builder-button builder-button--inverse mt-9">Acheter la formation <span class="ml-2" aria-hidden="true">↗</span></RouterLink>
            <p class="mt-5 text-sm text-[#bdd1c9]">{{ seoProgram.length }} modules · {{ lessonCount }} leçons · {{ seoResourcePreviews.length }} ressources pratiques · Plan d'action · Assistant SEO</p>
          </div>
        </BaseContainer>
      </section>
    </main>
    <footer class="builder-footer">
      <BaseContainer class="py-10 sm:py-12">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div class="shrink-0">
            <p class="text-base font-semibold tracking-tight text-[#f3f3ec]">Altruisme Learn</p>
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
