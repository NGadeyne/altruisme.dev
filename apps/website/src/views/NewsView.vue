<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import PageHero from '@/components/PageHero.vue'
import { week39 } from '@/content/news/week39Metadata'
import { week40 } from '@/content/news/week40Metadata'
import { week41 } from '@/content/news/week41Metadata'
import { week42 } from '@/content/news/week42Metadata'
import { week43 } from '@/content/news/week43Metadata'
import { week44 } from '@/content/news/week44Metadata'

const week44Path = `/actualites/${week44.slug}`
const week43Path = `/actualites/${week43.slug}`
const week42Path = `/actualites/${week42.slug}`
const week41Path = `/actualites/${week41.slug}`
const week40Path = `/actualites/${week40.slug}`
const week39Path = `/actualites/${week39.slug}`
</script>

<template>
  <main class="min-h-screen bg-sand">
    <PageHero title-id="news-title">
      <template #eyebrow>Actualités</template>
      <template #title>Actu Tech <span>de la semaine</span></template>
    </PageHero>
    <section class="py-20 sm:py-28" aria-labelledby="news-title">
      <BaseContainer>
        <div class="mx-auto max-w-5xl">
          <article
            class="grid gap-6 border-t border-petrol/25 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-petrol">Édition #44</p>
            <div class="max-w-3xl">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {{ week44.title }}
              </h2>
              <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {{ week44.excerpt }}
              </p>
              <RouterLink
                :to="week44Path"
                class="mt-8 inline-flex border-b border-petrol/50 pb-1 text-sm font-semibold text-petrol transition-colors hover:border-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
                >Lire l’édition <span aria-hidden="true" class="ml-3">↗</span></RouterLink
              >
            </div>
          </article>
          <article
            class="mt-14 grid gap-6 border-t border-petrol/25 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-petrol">Édition #43</p>
            <div class="max-w-3xl">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {{ week43.title }}
              </h2>
              <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {{ week43.excerpt }}
              </p>
              <RouterLink
                :to="week43Path"
                class="mt-8 inline-flex border-b border-petrol/50 pb-1 text-sm font-semibold text-petrol transition-colors hover:border-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
                >Lire l’édition <span aria-hidden="true" class="ml-3">↗</span></RouterLink
              >
            </div>
          </article>
          <article
            class="mt-14 grid gap-6 border-t border-petrol/25 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-petrol">Édition #42</p>
            <div class="max-w-3xl">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {{ week42.title }}
              </h2>
              <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {{ week42.excerpt }}
              </p>
              <RouterLink
                :to="week42Path"
                class="mt-8 inline-flex border-b border-petrol/50 pb-1 text-sm font-semibold text-petrol transition-colors hover:border-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
                >Lire l’édition <span aria-hidden="true" class="ml-3">↗</span></RouterLink
              >
            </div>
          </article>
          <article
            class="mt-14 grid gap-6 border-t border-petrol/25 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-petrol">Édition #41</p>
            <div class="max-w-3xl">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {{ week41.title }}
              </h2>
              <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {{ week41.excerpt }}
              </p>
              <RouterLink
                :to="week41Path"
                class="mt-8 inline-flex border-b border-petrol/50 pb-1 text-sm font-semibold text-petrol transition-colors hover:border-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
                >Lire l’édition <span aria-hidden="true" class="ml-3">↗</span></RouterLink
              >
            </div>
          </article>
          <article
            class="mt-14 grid gap-6 border-t border-petrol/25 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-petrol">Édition #40</p>
            <div class="max-w-3xl">
              <h2 class="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {{ week40.title }}
              </h2>
              <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {{ week40.excerpt }}
              </p>
              <RouterLink
                :to="week40Path"
                class="mt-8 inline-flex border-b border-petrol/50 pb-1 text-sm font-semibold text-petrol transition-colors hover:border-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
                >Lire l’édition <span aria-hidden="true" class="ml-3">↗</span></RouterLink
              >
            </div>
          </article>
          <article
            class="mt-14 grid gap-6 border-t border-petrol/25 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-[10rem_minmax(0,1fr)]"
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
    </section>
  </main>
</template>
