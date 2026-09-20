<script setup lang="ts">
import GuideBlock from './GuideBlock.vue'
import type { GuideSection } from '@/types/guide'
defineProps<{ section: GuideSection; previous?: GuideSection; next?: GuideSection }>()
const labels = {
  introduction: 'Commencer ici',
  chapter: 'Partie',
  conclusion: 'Pour terminer',
  faq: 'Questions fréquentes',
}
</script>

<template>
  <section
    :id="section.id"
    :aria-labelledby="`${section.id}-title`"
    class="guide-section scroll-mt-44 border-b border-petrol/12 py-14 first:pt-0 last:border-0 lg:scroll-mt-28"
  >
    <header class="mb-8">
      <p class="text-xs font-semibold uppercase tracking-[0.17em] text-petrol">
        {{ labels[section.kind] }} <span v-if="section.number">{{ section.number }}</span>
      </p>
      <h2
        :id="`${section.id}-title`"
        class="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
      >
        {{ section.title }}
      </h2>
    </header>
    <div v-if="section.intro.length" class="space-y-5">
      <GuideBlock
        v-for="(block, index) in section.intro"
        :key="index"
        :block="block"
        question-level="h3"
      />
    </div>
    <section
      v-for="subsection in section.subsections"
      :id="subsection.id"
      :key="subsection.id"
      :aria-labelledby="`${subsection.id}-title`"
      class="mt-12 scroll-mt-44 lg:scroll-mt-28"
      :class="
        subsection.kind === 'takeaway'
          ? 'rounded-3xl border border-petrol/15 bg-mist p-6 sm:p-8'
          : ''
      "
    >
      <h3 :id="`${subsection.id}-title`" class="text-2xl font-bold tracking-tight text-ink">
        <a
          :href="`#${subsection.id}`"
          class="hover:underline"
          :aria-label="`Lien vers : ${subsection.title}`"
          >{{ subsection.title }}</a
        >
      </h3>
      <div class="mt-5 space-y-5">
        <GuideBlock v-for="(block, index) in subsection.blocks" :key="index" :block="block" />
      </div>
    </section>
    <nav
      v-if="previous || next"
      aria-label="Navigation entre les chapitres"
      class="mt-12 flex flex-wrap justify-between gap-6 border-t border-petrol/10 pt-6 text-sm font-semibold text-petrol"
    >
      <a v-if="previous" :href="`#${previous.id}`" class="max-w-[45%]">← {{ previous.title }}</a>
      <a v-if="next" :href="`#${next.id}`" class="ml-auto max-w-[45%] text-right"
        >{{ next.title }} →</a
      >
    </nav>
  </section>
</template>
