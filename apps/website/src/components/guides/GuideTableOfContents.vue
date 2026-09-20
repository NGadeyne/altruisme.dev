<script setup lang="ts">
import { ref } from 'vue'
import type { GuideSection } from '@/types/guide'
defineProps<{ sections: GuideSection[]; activeId: string }>()
const expanded = ref(false)
</script>

<template>
  <aside id="sommaire" class="sticky top-20 z-20 self-start scroll-mt-28 lg:top-24">
    <div class="rounded-2xl border border-petrol/15 bg-mist p-4 lg:p-5">
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 text-left font-semibold text-petrol lg:hidden"
        :aria-expanded="expanded"
        aria-controls="guide-toc"
        @click="expanded = !expanded"
      >
        Sommaire · {{ sections.length }} sections
        <span aria-hidden="true">{{ expanded ? '−' : '+' }}</span>
      </button>
      <p class="hidden text-xs font-semibold uppercase tracking-widest text-petrol lg:block">
        Sommaire · {{ sections.length }} sections
      </p>
      <nav
        id="guide-toc"
        aria-label="Sommaire du guide"
        class="mt-4 max-h-[60dvh] space-y-1 overflow-y-auto overscroll-contain lg:max-h-[calc(100dvh-12rem)]"
        :class="expanded ? 'block' : 'hidden lg:block'"
      >
        <div v-for="section in sections" :key="section.id">
          <a
            :href="`#${section.id}`"
            :aria-current="activeId === section.id ? 'location' : undefined"
            class="block rounded-lg px-2 py-2 text-sm leading-5 hover:bg-sand"
            :class="activeId === section.id ? 'bg-sand font-semibold text-petrol' : 'text-muted'"
            @click="expanded = false"
          >
            <span v-if="section.number" class="mr-1 font-semibold">{{ section.number }}.</span>
            {{ section.title }}
          </a>
          <ul
            v-if="activeId === section.id && section.subsections.length"
            class="ml-3 border-l border-petrol/20 pl-2"
          >
            <li v-for="subsection in section.subsections" :key="subsection.id">
              <a
                :href="`#${subsection.id}`"
                class="block px-2 py-1.5 text-xs leading-5 text-muted hover:text-petrol"
                @click="expanded = false"
                >{{ subsection.title }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>
