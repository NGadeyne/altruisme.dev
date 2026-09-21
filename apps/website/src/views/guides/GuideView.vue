<script setup lang="ts">
import { computed } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import GuideHeader from '@/components/guides/GuideHeader.vue'
import GuideTableOfContents from '@/components/guides/GuideTableOfContents.vue'
import GuideSection from '@/components/guides/GuideSection.vue'
import GuideFooter from '@/components/guides/GuideFooter.vue'
import { useGuideNavigation } from '@/composables/useGuideNavigation'
import { readingMinutes } from '@/lib/guide'
import type { GuideMetadata, GuideSection as Section } from '@/types/guide'
const props = defineProps<{ guide: GuideMetadata; sections: Section[] }>()
const { activeId } = useGuideNavigation(props.sections)
const chapterCount = computed(
  () => props.sections.filter((section) => section.kind === 'chapter').length,
)
const estimatedReadingMinutes = computed(() => readingMinutes(props.sections))
</script>

<template>
  <div class="guide-page min-h-screen bg-sand">
    <GuideHeader
      :guide="guide"
      :chapter-count="chapterCount"
      :reading-minutes="estimatedReadingMinutes"
      :first-section-id="sections[0]?.id ?? 'sommaire'"
    />
    <section class="py-10 sm:py-16">
      <BaseContainer>
        <div
          class="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16"
        >
          <GuideTableOfContents :sections="sections" :active-id="activeId" />
          <article
            v-once
            class="guide-content min-w-0 max-w-[72ch] text-base leading-8 text-muted sm:text-lg"
          >
            <GuideSection
              v-for="(section, index) in sections"
              :key="section.id"
              :section="section"
              :previous="sections[index - 1]"
              :next="sections[index + 1]"
            />
          </article>
        </div>
      </BaseContainer>
    </section>
    <GuideFooter />
  </div>
</template>

<style scoped>
/* Keep the editorial palette while meeting contrast on sand and mist surfaces. */
.guide-page {
  --color-petrol: #3e6461;
  --color-muted: #52605c;
}

.guide-content :deep(.guide-link) {
  color: var(--color-petrol);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.guide-content :deep(.guide-link:hover) {
  color: var(--color-petrol-dark);
}
</style>
