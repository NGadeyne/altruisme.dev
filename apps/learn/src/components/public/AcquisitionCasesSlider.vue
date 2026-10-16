<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { BaseContainer } from '@altruisme/ui'

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    eyebrow?: string
    sectionHeading?: string
    sectionIntro?: string
    fictional?: boolean
  }>(),
  {
    ariaLabel: 'Cas clients liés aux formations du pack Acquisition clients',
    eyebrow: 'Cas clients',
    fictional: false,
  },
)

const examples = [
  {
    name: 'Freelance IT',
    formation: 'Prospection & LinkedIn',
    title:
      'Transformer LinkedIn en véritable canal d’acquisition pour développer son activité de consultant indépendant.',
    context:
      'Un consultant informatique indépendant disposait d’un réseau LinkedIn actif, mais peinait à transformer ses connexions en opportunités commerciales. Sa prospection reposait principalement sur des prises de contact occasionnelles.',
    intervention:
      'Clarification du positionnement, optimisation du profil LinkedIn, identification des prospects pertinents et construction d’une séquence de prospection personnalisée.',
    result:
      'Une démarche commerciale plus structurée, des messages mieux ciblés et un processus reproductible pour développer son réseau et générer des conversations qualifiées.',
  },
  {
    name: 'SaaS B2B',
    formation: 'SEO',
    title:
      'Développer un canal d’acquisition organique pour attirer des utilisateurs à la recherche d’une solution SaaS.',
    context:
      'Une jeune entreprise SaaS dépendait essentiellement de la prospection et de quelques campagnes publicitaires. Son site présentait le produit, mais exploitait peu les recherches de ses clients potentiels.',
    intervention:
      'Recherche de mots-clés, identification des intentions de recherche, optimisation des pages commerciales et construction d’une stratégie de contenus répondant aux problématiques des utilisateurs.',
    result:
      'Une architecture SEO plus cohérente, des contenus alignés sur les besoins des prospects et une stratégie d’acquisition organique structurée pour le long terme.',
  },
  {
    name: 'Consultant indépendant',
    formation: 'Copywriting',
    title: 'Clarifier son discours commercial pour mieux communiquer la valeur de ses prestations.',
    context:
      'Un consultant proposait des services spécialisés, mais son site et ses communications restaient très techniques. Ses prospects avaient du mal à comprendre rapidement les bénéfices concrets de son accompagnement.',
    intervention:
      'Travail sur la proposition de valeur, reformulation des messages commerciaux, hiérarchisation des bénéfices et amélioration des appels à l’action.',
    result:
      'Un discours plus accessible, une offre mieux comprise et des messages commerciaux davantage centrés sur les problématiques des clients potentiels.',
  },
  {
    name: 'TPE de services',
    formation: 'Landing Pages & Conversion',
    title: 'Transformer les visites d’un site vitrine en demandes de contact qualifiées.',
    context:
      'Une petite entreprise de services disposait d’un site internet générant des visites, mais peu de demandes de devis. Les prestations étaient présentées sans parcours clair vers la prise de contact.',
    intervention:
      'Refonte de la structure de la landing page, clarification de l’offre, amélioration des appels à l’action et simplification du formulaire de contact.',
    result:
      'Un parcours utilisateur plus fluide, une proposition commerciale plus lisible et une page mieux conçue pour accompagner les visiteurs jusqu’à la demande de devis.',
  },
  {
    name: 'Entrepreneur indépendant',
    formation: 'Email Marketing',
    title:
      'Construire une relation durable avec ses prospects grâce à une stratégie d’email marketing.',
    context:
      'Un entrepreneur disposait d’une petite audience acquise via son site et les réseaux sociaux, mais ne possédait aucun dispositif pour entretenir la relation avec les personnes intéressées par ses services.',
    intervention:
      'Création d’un lead magnet, mise en place d’une séquence d’emails automatisée, segmentation des contacts et rédaction de contenus adaptés aux différentes étapes du parcours client.',
    result:
      'Un dispositif de communication automatisé, une relation plus régulière avec les prospects et un parcours permettant de les accompagner progressivement vers une prise de contact ou un achat.',
  },
] as const

const stages = [
  { key: 'context', label: 'Le contexte' },
  { key: 'intervention', label: 'L’intervention' },
  { key: 'result', label: 'Le résultat' },
] as const

const activeIndex = ref(0)
const activeExample = computed(() => examples[activeIndex.value] ?? examples[0])
const section = ref<HTMLElement | null>(null)
const isPaused = ref(false)
const prefersReducedMotion = ref(false)
const announcement = ref('')
let visibilityObserver: IntersectionObserver | undefined
let motionQuery: MediaQueryList | undefined
let timer: number | undefined
let isVisible = false
let isHovered = false
let isFocused = false

function scheduleAutoplay() {
  if (timer !== undefined) window.clearTimeout(timer)
  timer = undefined
  if (
    !isVisible ||
    isHovered ||
    isFocused ||
    isPaused.value ||
    prefersReducedMotion.value ||
    document.hidden
  )
    return

  timer = window.setTimeout(() => {
    activeIndex.value = (activeIndex.value + 1) % examples.length
    scheduleAutoplay()
  }, 12_000)
}

function onMotionPreferenceChange(event: MediaQueryListEvent) {
  prefersReducedMotion.value = event.matches
  scheduleAutoplay()
}

function onPointerEnter(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  isHovered = true
  scheduleAutoplay()
}

function onPointerLeave(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  isHovered = false
  scheduleAutoplay()
}

function onFocusIn() {
  isFocused = true
  scheduleAutoplay()
}

function onFocusOut(event: FocusEvent) {
  isFocused = event.relatedTarget instanceof Node && !!section.value?.contains(event.relatedTarget)
  scheduleAutoplay()
}

function changeExample(direction: -1 | 1) {
  activeIndex.value = (activeIndex.value + direction + examples.length) % examples.length
  announcement.value = `${props.fictional ? 'Mise en situation' : 'Cas client'} ${activeIndex.value + 1} sur ${examples.length} : ${activeExample.value.name}`
  scheduleAutoplay()
}

function toggleAutoplay() {
  isPaused.value = !isPaused.value
  scheduleAutoplay()
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = motionQuery.matches
  motionQuery.addEventListener('change', onMotionPreferenceChange)
  document.addEventListener('visibilitychange', scheduleAutoplay)

  if (!section.value || !('IntersectionObserver' in window)) return
  visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry?.isIntersecting ?? false
      scheduleAutoplay()
    },
    { rootMargin: '0px 0px -25% 0px', threshold: 0 },
  )
  visibilityObserver.observe(section.value)
})

onBeforeUnmount(() => {
  visibilityObserver?.disconnect()
  motionQuery?.removeEventListener('change', onMotionPreferenceChange)
  document.removeEventListener('visibilitychange', scheduleAutoplay)
  if (timer !== undefined) window.clearTimeout(timer)
})
</script>

<template>
  <section
    ref="section"
    class="acquisition-examples py-20 text-white sm:py-28"
    :aria-label="ariaLabel"
    @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <BaseContainer>
      <div class="mb-10 flex flex-wrap items-start justify-between gap-4 lg:mb-14">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[.18em] text-[#b8d0ca]">
            {{ eyebrow }}
          </p>
          <h2
            v-if="sectionHeading"
            class="mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-.04em] sm:text-5xl"
          >
            {{ sectionHeading }}
          </h2>
          <p v-if="sectionIntro" class="mt-5 max-w-2xl text-lg leading-8 text-[#d1dfd9]">
            {{ sectionIntro }}
          </p>
          <p v-if="fictional" class="mt-4 max-w-2xl text-sm leading-6 text-[#b8d0ca]">
            Exemples fictifs à visée pédagogique : ils ne décrivent pas des missions réalisées ni
            des résultats obtenus.
          </p>
        </div>
        <p class="text-sm text-[#c8ddd5]">{{ String(activeIndex + 1).padStart(2, '0') }} / 05</p>
      </div>
      <article>
        <div class="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20">
          <div class="min-w-0">
            <component
              :is="sectionHeading ? 'h3' : 'h2'"
              class="case-copy-stack case-name break-words font-semibold leading-[1.04] tracking-[-.055em]"
            >
              <span
                v-for="(example, index) in examples"
                :key="example.name"
                class="case-copy-item"
                :class="{ 'case-copy-item--active': activeIndex === index }"
                :aria-hidden="activeIndex !== index"
                >{{ example.name }}</span
              >
            </component>
            <p class="case-copy-stack mt-4 text-sm font-medium text-[#b8d0ca]">
              <span
                v-for="(example, index) in examples"
                :key="example.name"
                class="case-copy-item"
                :class="{ 'case-copy-item--active': activeIndex === index }"
                :aria-hidden="activeIndex !== index"
                >{{ example.formation }}</span
              >
            </p>
          </div>
          <p
            class="case-copy-stack max-w-xl text-xl leading-8 tracking-tight text-[#dbe8e4] sm:text-2xl sm:leading-9"
          >
            <span
              v-for="(example, index) in examples"
              :key="example.name"
              class="case-copy-item"
              :class="{ 'case-copy-item--active': activeIndex === index }"
              :aria-hidden="activeIndex !== index"
              >{{ example.title }}</span
            >
          </p>
        </div>
        <div class="case-track mt-12 grid gap-9 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          <div v-for="stage in stages" :key="stage.key" class="case-stage">
            <span class="case-marker" aria-hidden="true" />
            <component
              :is="sectionHeading ? 'h4' : 'h3'"
              class="text-xl font-semibold tracking-tight text-white"
            >
              {{ stage.label }}
            </component>
            <p class="case-copy-stack mt-4 max-w-[19rem] leading-7 text-[#d1dfd9]">
              <span
                v-for="(example, index) in examples"
                :key="example.name"
                class="case-copy-item"
                :class="{ 'case-copy-item--active': activeIndex === index }"
                :aria-hidden="activeIndex !== index"
                >{{ example[stage.key] }}</span
              >
            </p>
          </div>
        </div>
      </article>
      <nav
        class="mt-8 flex items-center justify-end gap-2"
        :aria-label="fictional ? 'Parcourir les mises en situation' : 'Parcourir les cas clients'"
      >
        <button
          v-if="!prefersReducedMotion"
          type="button"
          class="case-arrow"
          :aria-label="
            isPaused
              ? 'Reprendre le défilement automatique'
              : 'Mettre en pause le défilement automatique'
          "
          :aria-pressed="isPaused"
          @click="toggleAutoplay"
        >
          <span aria-hidden="true">{{ isPaused ? '▶' : 'Ⅱ' }}</span>
        </button>
        <button
          type="button"
          class="case-arrow"
          aria-label="Cas précédent"
          @click="changeExample(-1)"
        >
          ←
        </button>
        <button type="button" class="case-arrow" aria-label="Cas suivant" @click="changeExample(1)">
          →
        </button>
      </nav>
      <span class="sr-only" aria-live="polite">{{ announcement }}</span>
    </BaseContainer>
  </section>
</template>

<style scoped>
.acquisition-examples {
  background:
    radial-gradient(ellipse 65% 65% at 78% 18%, rgb(101 150 154 / 0.21), transparent 76%),
    linear-gradient(130deg, #263b40 0%, #26474d 56%, #21383d 100%);
}

.case-name {
  font-size: clamp(2.4rem, 4.2vw, 4.1rem);
}

.case-copy-stack {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.case-copy-item {
  grid-area: 1 / 1;
  min-width: 0;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 180ms ease,
    visibility 0s linear 180ms;
}

.case-copy-item--active {
  opacity: 1;
  visibility: visible;
  transition:
    opacity 320ms ease 180ms,
    visibility 0s;
}

.case-track {
  position: relative;
  border-top: 1px solid rgb(209 238 228 / 0.25);
}

.case-stage {
  position: relative;
  padding-top: 1.8rem;
}

.case-marker {
  position: absolute;
  top: -0.32rem;
  left: 0;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: #83a7a3;
  box-shadow: 0 0 0 0.35rem rgb(188 221 209 / 0.1);
}

.case-arrow {
  display: inline-flex;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(209 238 228 / 0.3);
  border-radius: 50%;
  background: rgb(255 255 255 / 0.08);
  color: #f7f7f1;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  transition:
    background 260ms ease,
    border-color 260ms ease,
    transform 260ms ease;
}

.case-arrow:focus-visible {
  outline: 2px solid #c8ddd5;
  outline-offset: 3px;
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .case-arrow:hover {
    transform: translateY(-2px);
    border-color: rgb(209 238 228 / 0.65);
    background: rgb(255 255 255 / 0.16);
  }
}

@media (max-width: 1023px) {
  .case-track {
    margin-left: 0.3rem;
    border-top: 0;
    border-left: 1px solid rgb(209 238 228 / 0.25);
  }

  .case-stage {
    padding: 0 0 0 1.75rem;
  }

  .case-marker {
    top: 0.4rem;
    left: -0.32rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .case-copy-item,
  .case-copy-item--active,
  .case-arrow {
    transition-duration: 0.01ms;
  }
}
</style>
