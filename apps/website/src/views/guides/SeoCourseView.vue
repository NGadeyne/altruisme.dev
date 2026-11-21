<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'
import ChecklistCta from '@/components/ChecklistCta.vue'
import { seoFaq } from '@/content/guides/seo/faq'
import {
  courseModules,
  courseSteps,
  formatSeoMinutes,
  seoReadingMinutes,
  seoResources,
} from '@/content/guides/seo'
import type { GuideMetadata } from '@/types/guide'

defineProps<{ guide: GuideMetadata }>()
const firstModule = courseModules[0]!
const lessonCount = courseSteps.filter((step) => step.lessonNumber).length
const faqEntries = seoFaq.map(({ question, answer, lesson }) => {
  const step = courseSteps.find((item) => item.slug === lesson)
  if (!step) throw new Error(`Leçon introuvable pour la FAQ SEO : ${lesson}`)
  return { question, answer, step }
})
</script>

<template>
  <div class="guide-page bg-sand">
    <section id="introduction" class="border-b border-petrol/15 bg-mist py-12 sm:py-20">
      <BaseContainer>
        <RouterLink to="/guides" class="content-link">← Tous les guides</RouterLink>
        <div class="mt-8 grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <p class="text-sm font-semibold text-petrol-dark">Altruisme Learn · Accès libre</p>
            <h1 class="mt-3 text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
              {{ guide.title }}
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">{{ guide.description }}</p>
            <p class="mt-4 text-sm text-muted">
              {{ courseModules.length }} modules · {{ lessonCount }} leçons ·
              {{ formatSeoMinutes(seoReadingMinutes) }} de lecture
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <BaseButton :to="firstModule.path">Lire le premier module</BaseButton>
              <BaseButton href="#plan-action" variant="secondary"
                >Voir le plan sur 90 jours</BaseButton
              >
            </div>
            <nav aria-label="Dans ce guide" class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href="#sommaire" class="content-link">Les 10 modules</a>
              <a href="#ressources" class="content-link">Modèles à télécharger</a>
              <a href="#faq" class="content-link">Questions fréquentes</a>
            </nav>
          </div>
          <img
            :src="guide.image"
            :srcset="guide.imageSrcset"
            sizes="(min-width: 1024px) 40vw, 100vw"
            alt=""
            class="w-full rounded-3xl"
            width="1672"
            height="941"
          />
        </div>
      </BaseContainer>
    </section>
    <BaseContainer size="small">
      <section
        id="plan-action"
        class="scroll-mt-28 border-b border-petrol/15 py-12 sm:py-16"
        aria-labelledby="plan-title"
      >
        <h2 id="plan-title" class="text-3xl font-bold tracking-tight text-ink">
          Ton plan d’action SEO sur 90 jours
        </h2>
        <p class="mt-4 leading-7 text-ink-soft">
          Prends trois pages importantes pour ton activité. Au fil des trois prochains mois, tu vas
          repérer comment les internautes les trouvent, en améliorer une et mesurer ce qui a changé.
        </p>
        <div class="mt-8 space-y-8">
          <section class="space-y-3 leading-7 text-ink-soft">
            <h3 class="text-xl font-semibold text-ink">
              Jours 1 à 30 · Choisir tes pages et établir ton point de départ
            </h3>
            <p>
              Pour chacune de tes trois pages, note ce que tu attends du visiteur, par exemple une
              prise de rendez-vous. Valide la propriété du site dans Google Search Console et
              inspecte les trois URL. Relève les requêtes, les impressions et les clics sur une
              période datée. Note aussi les demandes ou les ventes que tu peux attribuer à ces
              visites.
            </p>
            <p>
              Tire jusqu’à trois constats de ces données. Si ton site démarre, consigne ce que tu
              pourras vérifier le mois prochain. Pars ensuite de trois questions que tes clients se
              posent. Liste dix expressions qu’ils pourraient chercher et associe les trois plus
              pertinentes à une page existante ou à créer.
            </p>
          </section>
          <section class="space-y-3 leading-7 text-ink-soft">
            <h3 class="text-xl font-semibold text-ink">
              Jours 31 à 60 · Améliorer une page et préparer les suivantes
            </h3>
            <p>
              Choisis une des trois pages. Relis son titre dans les résultats de recherche, son
              titre principal (H1) et sa meta description. Puis réponds dans la page à une question
              encore ouverte, avec un tarif, un exemple ou une explication. Ajoute jusqu’à trois
              liens internes là où ils facilitent la suite de la lecture.
            </p>
            <p>
              Vérifie que la page est accessible, que le fichier robots.txt autorise son exploration
              et que le sitemap contient la bonne URL. Teste-la sur mobile avec PageSpeed Insights
              et traite en premier le problème qui gêne le plus la consultation. À partir des
              questions de tes clients, inscris cinq contenus à créer ou à améliorer dans un
              calendrier, avec une priorité et une date pour chacun.
            </p>
          </section>
          <section class="space-y-3 leading-7 text-ink-soft">
            <h3 class="text-xl font-semibold text-ink">
              Jours 61 à 90 · Faire connaître tes pages et décider de la suite
            </h3>
            <p>
              Repère cinq sites ou partenaires dont les lecteurs pourraient tirer parti de ton
              contenu. Contacte celui pour lequel tu as la proposition la plus précise. Si tu
              travailles localement, teste trois recherches dans ta zone. Si ton activité est
              éligible à une fiche d’établissement Google, compare ses informations à celles de ton
              site et retiens trois améliorations locales.
            </p>
            <p>
              Pour observer ta visibilité dans les moteurs IA, vérifie que tes contenus publics leur
              sont accessibles. Teste trois questions de clients et note les sources citées. Choisis
              une page que tu pourrais rendre plus utile, par exemple en y publiant les chiffres ou
              la méthode que les réponses laissent de côté.
            </p>
            <p>
              Reprends les indicateurs du premier mois sur une période comparable. Quelles pages ont
              gagné des clics sur les recherches visées ? Les demandes ont-elles suivi ? Choisis
              trois à cinq actions pour les 90 jours suivants. Pour chacune, note la prochaine
              étape, son échéance et l’indicateur qui te permettra d’en juger.
            </p>
          </section>
        </div>
        <a href="#ressources" class="content-link mt-5 inline-block"
          >Retrouver le modèle de plan d’action et les feuilles de travail</a
        >
      </section>
      <section id="sommaire" class="scroll-mt-28 py-12 sm:py-16" aria-labelledby="programme-title">
        <h2 id="programme-title" class="text-3xl font-bold tracking-tight text-ink">
          Les 10 modules du guide SEO
        </h2>
        <section
          v-for="module in courseModules"
          :id="`module-${module.number}`"
          :key="module.number"
          class="scroll-mt-28 border-b border-petrol/15 py-8"
        >
          <p class="text-xs font-semibold uppercase tracking-widest text-petrol-dark">
            Module {{ module.number }}
          </p>
          <h3 class="mt-2 text-2xl font-semibold text-ink">
            <RouterLink :to="module.path" class="hover:underline">{{ module.title }}</RouterLink>
          </h3>
          <p class="mt-2 text-ink-soft">{{ module.description }}</p>
          <ol
            class="mt-5 divide-y divide-petrol/10 rounded-2xl border border-petrol/15 bg-white/60 px-4 sm:px-6"
          >
            <li v-for="step in module.steps" :id="step.slug" :key="step.slug" class="scroll-mt-28">
              <RouterLink
                :to="step.path"
                class="group flex items-center justify-between gap-3 py-4 text-ink"
              >
                <span
                  ><span class="block text-xs font-semibold text-muted"
                    >{{ step.label }} · {{ step.minutes }} min</span
                  >
                  <span class="mt-1 block font-medium group-hover:underline">{{
                    step.title
                  }}</span></span
                >
                <span aria-hidden="true" class="text-petrol">→</span>
              </RouterLink>
            </li>
          </ol>
        </section>
      </section>
      <section id="ressources" class="scroll-mt-28 pb-16" aria-labelledby="modeles-title">
        <h2 id="modeles-title" class="text-3xl font-bold tracking-tight text-ink">
          Les modèles pour les exercices
        </h2>
        <p class="mt-3 text-ink-soft">
          Ouvre le modèle dans Google Sheets et fais-en une copie pour travailler sur ton site.
        </p>
        <ul class="mt-5 space-y-3">
          <li v-for="resource in seoResources" :key="resource.number">
            <a :href="resource.url" class="content-link">{{ resource.title }}</a>
          </li>
        </ul>
      </section>
      <section id="faq" class="scroll-mt-28 pb-16" aria-labelledby="questions-title">
        <h2 id="questions-title" class="text-3xl font-bold tracking-tight text-ink">
          Questions fréquentes sur le SEO
        </h2>
        <div class="mt-6 divide-y divide-petrol/15 border-y border-petrol/15">
          <details v-for="entry in faqEntries" :key="entry.step.slug" class="py-4">
            <summary class="cursor-pointer text-lg font-semibold text-ink marker:text-petrol">
              {{ entry.question }}
            </summary>
            <p class="mt-3 leading-7 text-ink-soft">{{ entry.answer }}</p>
            <RouterLink :to="entry.step.path" class="content-link mt-3 inline-block">{{
              entry.step.title
            }}</RouterLink>
          </details>
        </div>
      </section>
    </BaseContainer>
    <ChecklistCta />
  </div>
</template>
