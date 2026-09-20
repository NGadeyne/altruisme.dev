<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import type { GuideMetadata } from '@/types/guide'
defineProps<{
  guide: GuideMetadata
  chapterCount: number
  readingMinutes: number
  firstSectionId: string
}>()
const formatDate = (value: string) =>
  new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(value))
</script>
<template>
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
      <div class="mx-auto max-w-5xl py-16 sm:py-20 lg:py-28">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <RouterLink
            to="/guides"
            class="group inline-flex items-center gap-2 text-sm font-semibold text-petrol"
          >
            <span class="transition-transform group-hover:-translate-x-1" aria-hidden="true">
              ←
            </span>
            Tous les guides
          </RouterLink>

          <div
            class="inline-flex items-center gap-2 rounded-full border border-petrol/15 bg-white/40 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-petrol backdrop-blur-sm"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-petrol" />
            Guide de référence · {{ guide.label }}
          </div>
        </div>

        <h1
          class="mt-6 max-w-5xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.8rem] lg:leading-[1.01]"
        >
          {{ guide.title }}
        </h1>

        <p class="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg lg:text-xl">
          {{ guide.description }}
        </p>

        <div class="mt-9 flex flex-wrap gap-3 text-sm">
          <span
            class="rounded-full border border-petrol/15 bg-white/45 px-4 py-2 font-medium text-ink"
            >{{ chapterCount }} parties</span
          >
          <span
            class="rounded-full border border-petrol/15 bg-white/45 px-4 py-2 font-medium text-ink"
            >{{ readingMinutes }} min de lecture</span
          >

          <span
            class="rounded-full border border-petrol/15 bg-white/45 px-4 py-2 font-medium text-ink"
            >Édition {{ guide.edition }}</span
          >
        </div>

        <p class="mt-6 text-sm text-muted">
          <a v-if="guide.author" :href="guide.author.url" class="font-semibold text-petrol">{{
            guide.author.name
          }}</a>
          <span v-if="guide.updatedAt">
            · Mis à jour le
            <time :datetime="guide.updatedAt">{{ formatDate(guide.updatedAt) }}</time></span
          >
        </p>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <BaseButton :href="`#${firstSectionId}`" size="large">Commencer la lecture</BaseButton>
          <BaseButton href="#sommaire" variant="secondary" size="large"
            >Voir le sommaire</BaseButton
          >
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- INTRO / MODE D'EMPLOI -->
  <section class="border-b border-petrol/10 bg-mist/75 py-10 sm:py-12">
    <BaseContainer>
      <div class="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-petrol">
            Un guide à utiliser comme une carte
          </p>
          <p class="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            Tu n’as pas besoin de tout lire d’une traite. Commence par la partie qui correspond à
            ton problème actuel, puis reviens au guide à mesure que ton activité évolue.
          </p>
        </div>
        <a
          href="#sommaire"
          class="inline-flex items-center gap-2 text-sm font-semibold text-petrol"
        >
          Aller au sommaire <span aria-hidden="true">↓</span>
        </a>
      </div>

      <figure v-if="guide.image" class="mx-auto mt-10 max-w-5xl sm:mt-12">
        <img
          :src="guide.image"
          :alt="`Couverture : ${guide.title}`"
          width="1200"
          height="630"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          class="aspect-[40/21] w-full rounded-2xl border border-petrol/10 object-cover shadow-[0_20px_60px_rgba(34,40,38,0.08)] sm:rounded-3xl"
        />
      </figure>
    </BaseContainer>
  </section>
</template>
