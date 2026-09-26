<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import { week39 } from '@/content/news/week39Metadata'

const week39Path = `/actualites/${week39.slug}`
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-sand py-20 sm:py-28">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,#dceae5_0%,transparent_45%),linear-gradient(145deg,#f8f5ed_0%,#f1f2eb_100%)]"
    />
    <BaseContainer>
      <div class="relative mx-auto max-w-5xl">
        <header class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-petrol">Actualités</p>
          <h1 class="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {{ week39.format }}
          </h1>
        </header>
        <article
          class="mt-14 grid gap-6 border-t border-petrol/25 pt-8 sm:mt-20 sm:gap-10 sm:pt-10 md:grid-cols-[10rem_minmax(0,1fr)]"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.15em] text-petrol">Édition #39</p>
          <div class="max-w-3xl">
            <h2 class="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {{ week39.title }}
            </h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {{ week39.excerpt }}
            </p>
            <RouterLink
              :to="week39Path"
              class="mt-8 inline-flex border-b border-petrol/50 pb-1 text-sm font-semibold text-petrol transition-colors hover:border-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
              >Lire l’édition <span aria-hidden="true" class="ml-3">↗</span></RouterLink
            >
          </div>
        </article>
      </div>
    </BaseContainer>
  </main>
</template>
