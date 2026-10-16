<script setup lang="ts">
import { computed } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import { availabilityLabels, categories, type Offer } from '@/data/catalog'
import { formationDiagnosticContent } from '@/data/formationDiagnosticContent'
import { type FormationLandingContent } from '@/data/formationLandingContent'
import { formationTransformationContent } from '@/data/formationTransformationContent'
import AcquisitionCasesSlider from './AcquisitionCasesSlider.vue'

const props = defineProps<{
  offer: Offer
  content: FormationLandingContent
}>()

const diagnostic = computed(() => formationDiagnosticContent[props.offer.slug])
const transformation = computed(() => formationTransformationContent[props.offer.slug])

const faqs = computed(() => [
  {
    question: `Que couvre la formation ${props.offer.title} ?`,
    answer: props.offer.description,
  },
  {
    question: 'Le programme détaillé est-il disponible ?',
    answer: 'Pas encore. Les thèmes présentés ici donnent une première direction à la formation.',
  },
  {
    question: 'Quand sera-t-elle disponible ?',
    answer: 'Aucune date d’ouverture n’est annoncée pour le moment.',
  },
])
</script>

<template>
  <main class="program-landing min-h-screen text-ink">
    <section class="program-hero relative isolate overflow-hidden border-b border-petrol/10">
      <BaseContainer>
        <div class="mx-auto max-w-4xl py-16 text-center sm:py-20 lg:py-[6.5rem]">
          <p
            class="program-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[.17em] text-petrol"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-petrol" aria-hidden="true" />
            Formation {{ offer.title }}
          </p>
          <h1
            class="mx-auto mt-7 max-w-[52rem] text-[2.45rem] font-semibold leading-[1.12] tracking-[-0.045em] sm:text-[3.35rem] lg:text-[3.85rem] lg:leading-[1.08]"
          >
            {{ offer.title }}
            <span class="mt-1 block text-petrol sm:mt-2">{{ content.tagline }}</span>
          </h1>

          <figure class="mx-auto mt-10 max-w-6xl sm:mt-11">
            <img
              src="/images/formation-seo-immersive.webp"
              alt="Illustration de la formation SEO avec une vidéo, un suivi de progression et un exercice pratique"
              width="1672"
              height="941"
              fetchpriority="high"
              decoding="async"
              class="block h-auto w-full rounded-[1.25rem] shadow-[0_32px_80px_-40px_rgba(13,58,62,0.5)] sm:rounded-[1.75rem]"
            />
            <figcaption class="mt-3 text-center text-xs text-muted-light">
              Illustration du parcours de formation SEO
            </figcaption>
          </figure>

          <p
            class="mx-auto mt-8 max-w-[41rem] text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            {{ offer.description }}
          </p>
          <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a class="program-button program-button--primary" href="#themes-de-la-formation">
              Découvrir les thèmes <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p class="mt-7 text-sm font-medium text-muted-light">
            <template v-for="(theme, index) in content.themes" :key="theme.title">
              <span v-if="index" class="mx-2 font-bold text-petrol/80">·</span>{{ theme.title }}
            </template>
          </p>
        </div>
      </BaseContainer>
    </section>

    <section
      class="program-wash-cool border-b border-petrol/10 py-8 sm:py-11"
      aria-label="Repères de la formation"
    >
      <BaseContainer>
        <div class="grid gap-3 sm:grid-cols-3 sm:gap-4">
          <div
            class="program-glass flex min-h-36 flex-col items-center justify-center rounded-2xl px-5 py-7 text-center"
          >
            <p class="text-xl font-semibold tracking-tight text-[#315d61]">Un sujet</p>
            <p class="mt-2 text-sm leading-6 text-muted">Une formation indépendante</p>
          </div>
          <div
            class="program-glass flex min-h-36 flex-col items-center justify-center rounded-2xl px-5 py-7 text-center"
          >
            <p class="text-xl font-semibold tracking-tight text-[#315d61]">
              {{ categories[offer.category].title }}
            </p>
            <p class="mt-2 text-sm leading-6 text-muted">Une catégorie Altruisme Learn</p>
          </div>
          <div
            class="program-glass flex min-h-36 flex-col items-center justify-center rounded-2xl px-5 py-7 text-center"
          >
            <p class="text-xl font-semibold tracking-tight text-[#315d61]">À venir</p>
            <p class="mt-2 text-sm leading-6 text-muted">La formation est en préparation</p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section
      id="themes-de-la-formation"
      class="program-signals-section relative scroll-mt-20 overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <BaseContainer>
        <div class="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20">
          <div class="max-w-xl">
            <p class="text-xs font-semibold uppercase tracking-[.18em] text-petrol">Le sujet</p>
            <h2
              class="mt-5 text-3xl font-semibold leading-[1.14] tracking-[-0.04em] sm:text-[3.25rem]"
            >
              Trois angles pour aborder <span class="text-petrol">{{ offer.title }}</span>
            </h2>
            <p class="mt-6 max-w-md text-lg leading-8 text-muted">
              Une première lecture des questions que cette formation permettra d’explorer. Le
              programme détaillé viendra plus tard.
            </p>
          </div>
          <ol class="program-signals" aria-label="Trois thèmes de la formation">
            <li v-for="(theme, index) in content.themes" :key="theme.title" class="program-signal">
              <span class="program-signal-index" aria-hidden="true">0{{ index + 1 }}</span>
              <div>
                <h3 class="text-xl font-semibold tracking-tight text-[#2f5b60] sm:text-2xl">
                  {{ theme.title }}
                </h3>
                <p class="mt-2 max-w-sm text-base leading-7 text-muted">{{ theme.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </BaseContainer>
    </section>

    <section v-if="diagnostic" class="program-diagnostic program-wash-ivory py-20 sm:py-28">
      <BaseContainer>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">
            {{ diagnostic.title.lead }}
            <span class="text-petrol">{{ diagnostic.title.accent }}</span>
          </h2>
          <p class="mt-6 text-lg leading-8 text-muted">{{ diagnostic.intro }}</p>
        </div>
        <div class="program-diagnostic-grid mx-auto mt-12 max-w-6xl sm:mt-16">
          <article
            v-for="axis in diagnostic.axes"
            :key="axis.title"
            class="program-diagnostic-card"
          >
            <h3 class="text-xl font-semibold tracking-tight text-[#315d61]">{{ axis.title }}</h3>
            <p class="mt-3 max-w-xs leading-7 text-muted">{{ axis.description }}</p>
          </article>
        </div>
      </BaseContainer>
    </section>

    <section v-if="transformation" class="program-wash-cool py-20 sm:py-28">
      <BaseContainer>
        <div class="max-w-3xl">
          <h2 class="text-3xl font-semibold leading-[1.13] tracking-[-0.04em] sm:text-5xl">
            {{ transformation.title.lead }}
            <span class="text-petrol">{{ transformation.title.accent }}</span>
          </h2>
        </div>
        <div class="mt-12 grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-stretch lg:gap-16">
          <div class="max-w-md px-8 py-8 lg:px-0 lg:py-10">
            <h3 class="text-sm font-medium tracking-[.16em] text-muted">Aujourd’hui</h3>
            <p
              class="mt-8 text-2xl font-medium leading-snug tracking-tight text-[#637674] sm:text-3xl"
            >
              <template v-for="(line, index) in transformation.before.lines" :key="line">
                {{ line }}<br v-if="index < transformation.before.lines.length - 1" />
              </template>
            </p>
            <p class="mt-7 text-lg leading-8 text-muted">
              {{ transformation.before.description }}
            </p>
          </div>
          <div
            class="program-transformation-after relative overflow-hidden rounded-[1.75rem] p-8 sm:p-11"
          >
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h3 class="text-sm font-medium tracking-[.16em] text-[#527779]">Dans la formation</h3>
              <span class="text-xs font-medium text-muted">{{
                availabilityLabels[offer.availability]
              }}</span>
            </div>
            <p
              class="mt-8 text-2xl font-semibold leading-snug tracking-tight text-[#2b555b] sm:text-3xl"
            >
              <template v-for="(theme, index) in content.themes" :key="theme.title">
                {{ theme.title }}<br v-if="index < content.themes.length - 1" />
              </template>
            </p>
            <p class="mt-7 max-w-md text-lg leading-8 text-muted">
              {{ transformation.afterDescription }}
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <AcquisitionCasesSlider aria-label="Cas clients" />

    <section class="program-pricing program-wash-ivory py-20 sm:py-28">
      <BaseContainer>
        <div class="max-w-3xl">
          <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Deux modalités de <span class="text-petrol">paiements</span>
          </h2>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Choisis la modalité qui te convient pour la formation {{ offer.title }}.
          </p>
        </div>
        <div class="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
          <article
            class="program-price-card program-price-card--primary flex flex-col rounded-[1.75rem] p-7 sm:p-10 lg:min-h-[23rem]"
          >
            <p class="text-sm font-medium text-[#597e80]">Paiement en une fois</p>
            <h3
              class="mt-5 text-[clamp(2.7rem,5vw,4rem)] font-semibold leading-none tracking-[-.06em] text-[#254e54]"
            >
              97 €
            </h3>
            <p class="mt-6 max-w-md text-lg leading-8 text-muted">
              Un seul règlement pour cette formation.
            </p>
            <p class="mt-8 text-sm leading-7 text-[#547174]">Formation {{ offer.title }}</p>
            <p class="mt-auto pt-10 text-sm font-semibold text-[#315d61]">
              Achat bientôt disponible
            </p>
          </article>
          <article
            class="program-price-card program-price-card--secondary flex flex-col rounded-[1.75rem] p-7 sm:p-10 lg:min-h-[23rem]"
          >
            <p class="text-sm font-medium text-[#597e80]">Paiement en trois fois</p>
            <h3
              class="mt-5 text-[clamp(2.7rem,5vw,4rem)] font-semibold leading-none tracking-[-.06em] text-[#254e54]"
            >
              3 × 33 €
            </h3>
            <p class="mt-6 max-w-md text-lg leading-8 text-muted">
              Trois règlements de 33 €, soit 99 € au total.
            </p>
            <p class="mt-8 text-sm leading-7 text-[#547174]">Formation {{ offer.title }}</p>
            <p class="mt-auto pt-10 text-sm font-semibold text-[#315d61]">
              Achat bientôt disponible
            </p>
          </article>
        </div>
        <p class="mt-10 max-w-2xl leading-7 text-muted">
          La formation est en préparation. L’achat n’est pas encore ouvert.
        </p>
      </BaseContainer>
    </section>

    <section class="program-wash-cool py-20 sm:py-28">
      <BaseContainer>
        <div class="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-16">
          <div class="max-w-md">
            <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Les questions que tu te poses <span class="text-petrol">sûrement</span>
            </h2>
          </div>
          <div class="border-t border-petrol/20">
            <details
              v-for="faq in faqs"
              :key="faq.question"
              class="program-faq-item border-b border-petrol/20"
            >
              <summary
                class="program-faq-trigger flex cursor-pointer items-start justify-between gap-4 py-6 text-left text-base font-medium sm:py-7 sm:text-lg"
              >
                <span>{{ faq.question }}</span>
                <span class="program-faq-icon shrink-0" aria-hidden="true" />
              </summary>
              <p class="max-w-2xl pb-6 leading-7 text-muted">{{ faq.answer }}</p>
            </details>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="program-final py-24 text-center text-white sm:py-32">
      <BaseContainer>
        <div class="mx-auto max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[.18em] text-[#b8d0ca]">
            Bientôt disponible
          </p>
          <h2 class="mt-6 text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">
            La formation prend forme
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#dbe8e4]">
            Le programme détaillé et la date d’ouverture seront précisés avant l’achat. En
            attendant, découvre les thèmes de la formation ci-dessus.
          </p>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<style src="./OfferLanding.css"></style>
