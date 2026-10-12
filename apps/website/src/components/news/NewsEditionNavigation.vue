<script setup lang="ts">
import { computed } from 'vue'
import { publishedEditions } from '@/content/news/publishedEditions'

const props = defineProps<{ currentSlug: string }>()

const currentIndex = computed(() =>
  publishedEditions.findIndex((edition) => edition.slug === props.currentSlug),
)
const previous = computed(() =>
  currentIndex.value > 0 ? publishedEditions[currentIndex.value - 1] : undefined,
)
const next = computed(() =>
  currentIndex.value >= 0 ? publishedEditions[currentIndex.value + 1] : undefined,
)
</script>

<template>
  <nav
    v-if="previous || next"
    aria-label="Navigation entre les éditions"
    class="mx-auto mt-14 grid max-w-[72ch] gap-4 border-t border-petrol/20 pt-8 sm:mt-20 sm:grid-cols-2"
  >
    <RouterLink
      v-if="previous"
      :to="`/actualites/${previous.slug}`"
      class="group rounded-2xl border border-petrol/15 bg-white/50 px-5 py-4 transition-colors hover:border-petrol/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
    >
      <span class="block text-xs font-semibold uppercase tracking-[0.15em] text-petrol">
        ← Édition précédente
      </span>
      <span class="mt-2 block font-semibold leading-snug text-ink">{{ previous.editorialTitle }}</span>
    </RouterLink>
    <RouterLink
      v-if="next"
      :to="`/actualites/${next.slug}`"
      class="group rounded-2xl border border-petrol/15 bg-white/50 px-5 py-4 transition-colors hover:border-petrol/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol sm:col-start-2 sm:text-right"
    >
      <span class="block text-xs font-semibold uppercase tracking-[0.15em] text-petrol">
        Édition suivante →
      </span>
      <span class="mt-2 block font-semibold leading-snug text-ink">{{ next.editorialTitle }}</span>
    </RouterLink>
  </nav>
</template>
