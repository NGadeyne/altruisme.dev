<script setup lang="ts">
import { computed, defineAsyncComponent, type Component } from 'vue'
import { useRoute } from 'vue-router'

import BaseContainer from '@/components/ui/BaseContainer.vue'
import SeoLessonVideo from '@/components/courses/SeoLessonVideo.vue'
import { isSeoLessonAvailable } from '@/config/features'
import { seoActions } from '@/data/seoActions'
import {
  estimateSeoMinutes,
  getSeoLessonBySlug,
  getSeoLessonSlug,
  seoProgram,
} from '@/data/seoProgram'

const lessonContents: Record<string, Component> = {
  'seo-lesson-01': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson01Content.vue'),
  ),
  'seo-lesson-02': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson02Content.vue'),
  ),
  'seo-lesson-03': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson03Content.vue'),
  ),
  'seo-lesson-04': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson04Content.vue'),
  ),
  'seo-lesson-05': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson05Content.vue'),
  ),
  'seo-lesson-06': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson06Content.vue'),
  ),
  'seo-lesson-07': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson07Content.vue'),
  ),
  'seo-lesson-08': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson08Content.vue'),
  ),
  'seo-lesson-09': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson09Content.vue'),
  ),
  'seo-lesson-10': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson10Content.vue'),
  ),
  'seo-lesson-11': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson11Content.vue'),
  ),
  'seo-lesson-12': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson12Content.vue'),
  ),
  'seo-lesson-13': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson13Content.vue'),
  ),
  'seo-lesson-14': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson14Content.vue'),
  ),
  'seo-lesson-15': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson15Content.vue'),
  ),
  'seo-lesson-16': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson16Content.vue'),
  ),
  'seo-lesson-17': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson17Content.vue'),
  ),
  'seo-lesson-18': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson18Content.vue'),
  ),
  'seo-lesson-19': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson19Content.vue'),
  ),
  'seo-lesson-20': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson20Content.vue'),
  ),
  'seo-lesson-21': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson21Content.vue'),
  ),
  'seo-lesson-22': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson22Content.vue'),
  ),
  'seo-lesson-23': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson23Content.vue'),
  ),
  'seo-lesson-24': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson24Content.vue'),
  ),
  'seo-lesson-25': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson25Content.vue'),
  ),
  'seo-lesson-26': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson26Content.vue'),
  ),
  'seo-lesson-27': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson27Content.vue'),
  ),
  'seo-lesson-28': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson28Content.vue'),
  ),
  'seo-lesson-29': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson29Content.vue'),
  ),
  'seo-lesson-30': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson30Content.vue'),
  ),
  'seo-lesson-31': defineAsyncComponent(
    () => import('@/components/courses/SeoLesson31Content.vue'),
  ),
}

const lessonDetails: Record<string, { objective: string; videoId: string }> = {
  'seo-lesson-01': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre à quoi sert le référencement naturel, comment il peut contribuer au développement d'une activité et apprendre à observer les résultats Google du point de vue d'un futur client.",
  },
  'seo-lesson-02': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Comprendre les trois grandes étapes du fonctionnement de Google — exploration, indexation et classement — et apprendre à distinguer une page accessible sur Internet, une page indexée et une page réellement visible sur les recherches pertinentes.',
  },
  'seo-lesson-03': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Comprendre les principales dimensions du référencement naturel — pertinence, contenu, structure, technique et réputation — et apprendre à identifier les pages les plus importantes de son site pour concentrer ses premières actions SEO.',
  },
  'seo-lesson-04': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre à quoi sert Google Search Console, apprendre à connecter son site à cet outil gratuit et découvrir les principaux rapports permettant d'observer sa visibilité sur Google.",
  },
  'seo-lesson-05': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre les principaux états d'indexation dans Google Search Console, apprendre à vérifier si ses pages stratégiques sont indexées et savoir distinguer une situation normale d'un problème nécessitant une investigation.",
  },
  'seo-lesson-06': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à interpréter les principaux indicateurs de Google Search Console, identifier les pages et les recherches qui génèrent de la visibilité, et repérer les premières opportunités d'amélioration pour orienter ses prochaines actions SEO.",
  },
  'seo-lesson-07': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre ce qu'est une intention de recherche, distinguer les principaux types d'intentions et apprendre à identifier les besoins auxquels ses pages doivent répondre pour attirer des visiteurs pertinents.",
  },
  'seo-lesson-08': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à trouver des expressions pertinentes pour son activité à l'aide de Google, de Search Console et de Google Trends, puis constituer une première liste de mots-clés sans abonnement à un outil SEO professionnel.",
  },
  'seo-lesson-09': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à sélectionner les mots-clés les plus pertinents pour son activité, à regrouper les expressions qui répondent à une même intention et à les associer aux bonnes pages, pour construire ses premières priorités d'optimisation.",
  },
  'seo-lesson-10': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre le rôle du title, de la meta description, de l'URL et des titres H1, H2 et H3, puis apprendre à optimiser ces éléments sur une page stratégique en fonction de son intention de recherche principale.",
  },
  'seo-lesson-11': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à analyser et améliorer le contenu d'une page pour qu'il réponde réellement à l'intention de recherche ciblée, apporte des informations utiles et aide les visiteurs à atteindre leur objectif.",
  },
  'seo-lesson-12': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre comment les pages d'un site sont organisées et reliées entre elles, apprendre à créer des liens internes pertinents et améliorer la navigation vers les contenus stratégiques, sans multiplier les liens artificiellement.",
  },
  'seo-lesson-13': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre les principaux problèmes techniques qui peuvent freiner l'exploration et l'indexation d'un site, savoir les reconnaître dans Google Search Console et identifier les premières corrections adaptées, sans intervenir à l'aveugle sur sa configuration.",
  },
  'seo-lesson-14': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre le rôle de l'architecture des URL, reconnaître les principales redirections et apprendre à sécuriser les changements d'adresse pour préserver l'accès aux contenus importants et faciliter leur découverte par les moteurs de recherche.",
  },
  'seo-lesson-15': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre le rôle du fichier robots.txt, du sitemap XML et des balises canoniques, apprendre à vérifier leur configuration et reconnaître les incohérences qui peuvent perturber l'exploration ou l'indexation des pages importantes.",
  },
  'seo-lesson-16': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre les principaux indicateurs de performance d'un site, apprendre à utiliser PageSpeed Insights pour analyser l'expérience mobile, identifier les problèmes liés au chargement, à la réactivité et à la stabilité visuelle, puis sélectionner des optimisations pertinentes sans chercher à obtenir artificiellement un score parfait.",
  },
  'seo-lesson-17': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à identifier des opportunités de contenu pertinentes pour son activité, à repérer les questions et besoins de ses futurs clients, puis à sélectionner les sujets qui méritent d'être créés ou améliorés en priorité, sans se limiter aux volumes de recherche.",
  },
  'seo-lesson-18': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Apprendre à transformer un sujet pertinent en un contenu structuré et réellement utile, en définissant son intention de recherche, en préparant un plan éditorial, en réunissant des informations fiables et en identifiant les éléments qui apporteront une véritable valeur au lecteur.',
  },
  'seo-lesson-19': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Apprendre à organiser ses contenus autour des besoins de son public et des objectifs de son activité, construire un calendrier éditorial réaliste, équilibrer créations et optimisations, puis mettre en place une méthode simple pour publier, suivre et actualiser ses contenus dans la durée.',
  },
  'seo-lesson-20': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre ce qu'est un backlink, découvrir comment les liens provenant d'autres sites peuvent contribuer à la découverte, à la notoriété et au référencement d'un contenu, apprendre à distinguer la pertinence d'un lien de sa simple quantité et comprendre les limites des indicateurs d'autorité comme le Domain Rating, le Domain Authority et le Trust Flow.",
  },
  'seo-lesson-21': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Apprendre à identifier des opportunités de backlinks adaptées à son activité, comprendre comment les contenus utiles, les partenariats et les relations professionnelles peuvent favoriser les mentions et les liens entrants, puis construire une première démarche de prospection respectueuse des règles de Google.',
  },
  'seo-lesson-22': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Apprendre à examiner les liens entrants de son site, reconnaître les backlinks pertinents et les situations suspectes, comprendre les pratiques de netlinking contraires aux recommandations de Google et savoir quand intervenir — ou ne rien faire — face à un lien de mauvaise qualité.',
  },
  'seo-lesson-23': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre le fonctionnement du référencement local dans Google Search et Google Maps, découvrir le rôle de la fiche d'établissement Google, distinguer les résultats locaux des résultats naturels classiques et identifier les trois principaux critères de classement local : pertinence, distance et notoriété.",
  },
  'seo-lesson-24': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à créer ou revendiquer une fiche d'établissement Google, comprendre les étapes de validation et renseigner les informations essentielles — catégorie, nom, adresse, zone desservie, prestations, coordonnées et photographies — afin de présenter son entreprise de manière fiable et conforme aux règles de Google.",
  },
  'seo-lesson-25': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à développer durablement sa visibilité locale grâce aux avis clients, aux contenus géographiques pertinents et aux références professionnelles, puis mesurer les interactions générées par sa fiche d'établissement Google et son site internet pour identifier trois améliorations prioritaires.",
  },
  'seo-lesson-26': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre comment les assistants et moteurs de recherche utilisant l'intelligence artificielle peuvent produire des réponses à partir de leurs connaissances et de sources externes, distinguer une mention d'une citation et identifier les premiers enjeux de visibilité pour un site, sans confondre GEO, référencement naturel et entraînement des modèles.",
  },
  'seo-lesson-27': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Comprendre les conditions qui permettent aux moteurs de recherche et assistants IA d'accéder aux contenus d'un site, apprendre à vérifier les principales restrictions techniques et identifier les améliorations éditoriales qui rendent les informations plus claires, fiables et faciles à citer, sans recourir à des optimisations GEO non démontrées.",
  },
  'seo-lesson-28': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Apprendre à mesurer les premières formes de visibilité de son entreprise dans les moteurs IA, distinguer les mentions de marque, les citations de sources et les visites réellement générées, puis construire un tableau de suivi simple pour comparer les résultats dans le temps, sans confondre observations ponctuelles et indicateurs fiables de performance.',
  },
  'seo-lesson-29': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à sélectionner et interpréter les indicateurs essentiels pour suivre son référencement naturel, distinguer la visibilité dans Google, les visites sur son site et les résultats pour son activité, puis construire un tableau de bord SEO simple permettant de mesurer les progrès et d'orienter les prochaines optimisations.",
  },
  'seo-lesson-30': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      "Apprendre à transformer les données de son audit et de son tableau de bord SEO en opportunités d'amélioration, distinguer les problèmes avérés des hypothèses, puis hiérarchiser les actions selon leur impact potentiel, leur urgence, leur niveau de confiance et l'effort nécessaire pour les réaliser.",
  },
  'seo-lesson-31': {
    videoId: 'aqz-KE-bpKQ',
    objective:
      'Apprendre à transformer les observations et les priorités identifiées pendant la formation en un plan SEO réalisable sur 90 jours, organiser les actions dans un ordre logique, définir des échéances et des critères de réussite, puis mettre en place un rythme de suivi permettant de progresser durablement en autonomie.',
  },
}

const route = useRoute()
const lesson = computed(() => getSeoLessonBySlug(String(route.params.lessonSlug)))
const lessonDetail = computed(() => (lesson.value ? lessonDetails[lesson.value.id] : undefined))
const lessonContent = computed(() => (lesson.value ? lessonContents[lesson.value.id] : undefined))
const module = computed(() =>
  seoProgram.find((item) => item.lessons.some((entry) => entry.id === lesson.value?.id)),
)
const relatedAction = computed(() =>
  seoActions.find(
    (action) =>
      action.lessonId === lesson.value?.id ||
      (['seo-lesson-14', 'seo-lesson-15', 'seo-lesson-16'].includes(lesson.value?.id ?? '') &&
        action.key === 'seo_technical_checks') ||
      (['seo-lesson-20', 'seo-lesson-22'].includes(lesson.value?.id ?? '') &&
        action.key === 'seo_backlink_opportunities') ||
      (['seo-lesson-26', 'seo-lesson-27'].includes(lesson.value?.id ?? '') &&
        action.key === 'seo_geo_visibility') ||
      (lesson.value?.id === 'seo-lesson-30' && action.key === 'seo_90_day_plan'),
  ),
)
const practiceRoute = computed(() => {
  if (lesson.value?.id === 'seo-lesson-03') return 'seo-practice-01'
  if (lesson.value?.id === 'seo-lesson-06') return 'seo-practice-02'
  if (lesson.value?.id === 'seo-lesson-09') return 'seo-practice-03'
  if (lesson.value?.id === 'seo-lesson-12') return 'seo-practice-04'
  if (lesson.value?.id === 'seo-lesson-16') return 'seo-practice-05'
  if (lesson.value?.id === 'seo-lesson-19') return 'seo-practice-06'
  if (lesson.value?.id === 'seo-lesson-22') return 'seo-practice-07'
  if (lesson.value?.id === 'seo-lesson-25') return 'seo-practice-08'
  if (lesson.value?.id === 'seo-lesson-28') return 'seo-practice-09'
  if (lesson.value?.id === 'seo-lesson-31') return 'seo-practice-10'
  return null
})
const availableLessons = seoProgram
  .flatMap((item) => item.lessons)
  .filter((item) => isSeoLessonAvailable(item.id))
const lessonIndex = computed(() =>
  availableLessons.findIndex((item) => item.id === lesson.value?.id),
)
const previousLesson = computed(() => {
  const previous = availableLessons[lessonIndex.value - 1]
  return previous?.number === (lesson.value?.number ?? 0) - 1 ? previous : undefined
})
const nextLesson = computed(() => {
  const next = availableLessons[lessonIndex.value + 1]
  return next?.number === (lesson.value?.number ?? 0) + 1 ? next : undefined
})
</script>

<template>
  <BaseContainer>
    <div class="mx-auto max-w-3xl">
      <RouterLink
        to="/formations/seo"
        class="text-sm font-medium text-petrol-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        >← Formation SEO</RouterLink
      >
      <header
        v-if="lesson && lessonDetail"
        class="mt-8 rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Altruisme Learn · Formation SEO
        </p>
        <h1 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {{ String(lesson.number).padStart(2, '0') }} — {{ lesson.title }}
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">
          Module {{ module?.number }} · {{ module?.title }}
        </p>
        <div class="mt-5 flex flex-wrap gap-2 text-sm text-ink-soft">
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5">
            Lecture : environ {{ estimateSeoMinutes(lesson.readingMinutes) }} min
          </span>
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5">
            Débutant
          </span>
        </div>
        <div class="mt-7 border-t border-petrol/15 pt-6">
          <h2 class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
            Objectif pédagogique
          </h2>
          <p class="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
            {{ lessonDetail.objective }}
          </p>
        </div>
      </header>
      <header v-else class="mt-8 border-b border-petrol/20 pb-8">
        <h1 class="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {{ lesson?.title ?? 'Leçon introuvable' }}
        </h1>
      </header>
      <SeoLessonVideo
        v-if="lesson && lessonDetail"
        :key="lesson.id"
        :lesson-number="lesson.number"
        :lesson-title="lesson.title"
        :video-id="lessonDetail.videoId"
      />
      <component :is="lessonContent" v-if="lessonContent" :key="lesson?.id" />
      <p v-else class="mt-8 text-muted">Le contenu de cette leçon est en préparation.</p>
      <section
        v-if="relatedAction"
        class="mt-10 rounded-2xl border border-petrol/15 bg-white p-6 shadow-sm"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
          À mettre en pratique
        </p>
        <h2 class="mt-2 text-lg font-semibold text-ink">{{ relatedAction.title }}</h2>
        <p class="mt-2 text-sm leading-6 text-muted">{{ relatedAction.description }}</p>
        <div class="mt-5 flex flex-wrap items-center gap-4">
          <RouterLink
            v-if="practiceRoute"
            :to="{ name: practiceRoute }"
            class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Faire la mise en pratique
          </RouterLink>
          <RouterLink
            :to="{
              name: 'learning-plan',
              query: { action: relatedAction.key },
            }"
            :class="
              practiceRoute
                ? 'text-sm font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol'
                : 'learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold'
            "
          >
            Voir dans mon plan d'action
          </RouterLink>
        </div>
      </section>
      <section
        v-else-if="practiceRoute && module?.exercise"
        class="mt-10 rounded-2xl border border-petrol/15 bg-white p-6 shadow-sm"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
          À mettre en pratique
        </p>
        <h2 class="mt-2 text-lg font-semibold text-ink">{{ module.exercise }}</h2>
        <RouterLink
          :to="{ name: practiceRoute }"
          class="learn-button-primary mt-5 inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
        >
          Faire la mise en pratique
        </RouterLink>
      </section>
      <nav
        v-if="previousLesson || nextLesson"
        aria-label="Navigation entre les leçons"
        class="mt-12 grid gap-3 border-t border-petrol/15 pt-8 sm:grid-cols-2"
      >
        <RouterLink
          v-if="previousLesson"
          :to="{ name: 'seo-lesson', params: { lessonSlug: getSeoLessonSlug(previousLesson.id) } }"
          class="rounded-2xl border border-petrol/15 bg-white p-5 transition hover:border-petrol/35 hover:bg-mist/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        >
          <span class="text-xs font-semibold uppercase tracking-wide text-[#3d6970]">
            ← Leçon précédente
          </span>
          <span class="mt-2 block text-sm font-semibold text-ink">{{ previousLesson.title }}</span>
        </RouterLink>
        <div v-else />
        <RouterLink
          v-if="nextLesson"
          :to="{ name: 'seo-lesson', params: { lessonSlug: getSeoLessonSlug(nextLesson.id) } }"
          class="rounded-2xl border border-petrol/15 bg-white p-5 text-right transition hover:border-petrol/35 hover:bg-mist/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        >
          <span class="text-xs font-semibold uppercase tracking-wide text-[#3d6970]">
            Leçon suivante →
          </span>
          <span class="mt-2 block text-sm font-semibold text-ink">{{ nextLesson.title }}</span>
        </RouterLink>
      </nav>
    </div>
  </BaseContainer>
</template>
