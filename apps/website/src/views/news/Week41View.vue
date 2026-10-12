<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import NewsByline from '@/components/news/NewsByline.vue'
import NewsEditionNavigation from '@/components/news/NewsEditionNavigation.vue'
import { inlineParts, week41, week41Sections } from '@/content/news/week41'
</script>

<template>
  <main class="min-h-screen bg-sand pb-20 sm:pb-28">
    <BaseContainer>
      <article class="mx-auto max-w-5xl pt-8 sm:pt-12">
        <RouterLink
          to="/actualites"
          class="text-sm font-semibold text-petrol underline-offset-4 hover:underline"
        >
          ← Actualités
        </RouterLink>
        <header class="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-petrol">
            {{ week41.format }}
          </p>
          <h1 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-6xl">
            {{ week41.title }}
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">{{ week41.excerpt }}</p>
          <NewsByline :published-at="week41.publishedAt" :author="week41.author" />
        </header>
        <img
          :src="week41.image"
          :alt="week41.imageAlt"
          width="1672"
          height="941"
          fetchpriority="high"
          class="mt-10 w-full rounded-2xl border border-petrol/10 sm:mt-14 sm:rounded-3xl"
        />
        <div
          class="news-body mx-auto mt-12 max-w-[72ch] text-base leading-8 text-muted sm:mt-16 sm:text-lg sm:leading-9"
        >
          <section
            v-for="(section, sectionIndex) in week41Sections"
            :key="section.heading || 'introduction'"
            :class="sectionIndex ? 'mt-14 sm:mt-20' : ''"
          >
            <h2
              v-if="section.heading"
              class="mb-6 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl"
            >
              {{ section.heading }}
            </h2>
            <p
              v-for="(paragraph, paragraphIndex) in section.paragraphs"
              :key="paragraphIndex"
              class="mt-5 first:mt-0"
            >
              <template v-for="(part, partIndex) in inlineParts(paragraph)" :key="partIndex"
                ><a
                  v-if="part.href"
                  :href="part.href"
                  :target="part.href.startsWith('/guides/') ? undefined : '_blank'"
                  :rel="part.href.startsWith('/guides/') ? undefined : 'noopener noreferrer'"
                  class="font-medium text-petrol underline decoration-petrol/50 underline-offset-4 hover:decoration-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
                  >{{ part.text }}</a
                ><strong v-else-if="part.strong" class="font-semibold text-ink">{{
                  part.text
                }}</strong
                ><template v-else>{{ part.text }}</template></template
              >
            </p>
          </section>
        </div>
        <NewsEditionNavigation :current-slug="week41.slug" />
      </article>
    </BaseContainer>
  </main>
</template>
