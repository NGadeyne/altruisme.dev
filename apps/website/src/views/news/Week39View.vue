<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
import { externalLinks, week39, week39Sections } from '@/content/news/week39'

function linkedParts(heading: string, paragraph: string) {
  const link = externalLinks[heading]
  if (!link) return { before: paragraph, anchor: '', after: '', href: '' }
  const index = paragraph.indexOf(link.anchor)
  if (index < 0) return { before: paragraph, anchor: '', after: '', href: '' }
  return {
    before: paragraph.slice(0, index),
    anchor: link.anchor,
    after: paragraph.slice(index + link.anchor.length),
    href: link.href,
  }
}
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
            {{ week39.format }}
          </p>
          <h1 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-6xl">
            {{ week39.title }}
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">{{ week39.excerpt }}</p>
        </header>
        <img
          :src="week39.image"
          :alt="week39.imageAlt"
          width="1731"
          height="909"
          fetchpriority="high"
          class="mt-10 w-full rounded-2xl border border-petrol/10 sm:mt-14 sm:rounded-3xl"
        />
        <div
          class="news-body mx-auto mt-12 max-w-[72ch] text-base leading-8 text-muted sm:mt-16 sm:text-lg sm:leading-9"
        >
          <section
            v-for="(section, sectionIndex) in week39Sections"
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
              {{ linkedParts(section.heading, paragraph).before
              }}<a
                v-if="linkedParts(section.heading, paragraph).href"
                :href="linkedParts(section.heading, paragraph).href"
                class="font-medium text-petrol underline decoration-petrol/50 underline-offset-4 hover:decoration-petrol focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-petrol"
                >{{ linkedParts(section.heading, paragraph).anchor }}</a
              >{{ linkedParts(section.heading, paragraph).after }}
            </p>
          </section>
        </div>
      </article>
    </BaseContainer>
  </main>
</template>
