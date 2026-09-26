<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import { week39 } from '@/content/news/week39Metadata'

const week39Path = `/actualites/${week39.slug}`
</script>

<template>
  <main class="min-h-screen bg-sand">
    <section class="relative isolate overflow-hidden py-20 sm:py-24">
      <div
        class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_50%,#e4ece8_100%)]"
      />
      <BaseContainer>
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Actualités</p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            Les actualités tech de la semaine,
            <span class="text-petrol">triées et expliquées.</span>
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Une sélection éditoriale hebdomadaire sur le produit, le SaaS, l’IA, l’automatisation,
            le freelancing et les entreprises tech.
          </p>
        </div>
      </BaseContainer>
    </section>
    <section class="pb-24">
      <BaseContainer>
        <div class="grid gap-5 md:grid-cols-2">
          <article
            class="overflow-hidden rounded-3xl border border-petrol/15 bg-white/60 md:col-span-2 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
          >
            <RouterLink
              :to="week39Path"
              :aria-label="`Lire ${week39.editorialTitle}`"
              class="block overflow-hidden"
            >
              <img
                :src="week39.image"
                :alt="week39.imageAlt"
                width="1731"
                height="909"
                class="h-full w-full object-cover"
              />
            </RouterLink>
            <div class="flex flex-col justify-center p-7 sm:p-9">
              <p class="text-xs font-semibold uppercase tracking-[0.15em] text-petrol">
                {{ week39.format }}
              </p>
              <h2 class="mt-5 text-3xl font-bold leading-tight text-ink">
                {{ week39.editorialTitle }}
              </h2>
              <p class="mt-2 text-lg font-medium text-petrol">Claude sort de l’écran</p>
              <p class="mt-5 text-sm leading-7 text-muted">{{ week39.excerpt }}</p>
              <RouterLink
                :to="week39Path"
                class="mt-7 self-start text-sm font-semibold text-petrol underline-offset-4 hover:underline"
                >Lire l’actualité →</RouterLink
              >
            </div>
          </article>
        </div>
        <div class="mx-auto mt-12 max-w-3xl border-l-2 border-petrol/30 pl-6">
          <p class="text-sm font-semibold text-petrol">Principe éditorial</p>
          <p class="mt-2 text-lg font-semibold leading-8 text-ink">
            Mieux vaut cinq sujets compris que cinquante titres survolés. La page Actualités est
            pensée comme un rendez-vous hebdomadaire, pas comme un fil continu.
          </p>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>
