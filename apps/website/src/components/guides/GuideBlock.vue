<script setup lang="ts">
import type { GuideBlock } from '@/types/guide'
import { renderInline } from '@/lib/guide'
withDefaults(defineProps<{ block: GuideBlock; questionLevel?: 'h3' | 'h4' }>(), {
  questionLevel: 'h4',
})
</script>

<template>
  <component
    :is="questionLevel"
    v-if="block.type === 'question'"
    class="pt-4 text-xl font-bold leading-7 text-ink"
    >{{ block.text }}</component
  >
  <p v-else-if="block.type === 'paragraph'" v-html="renderInline(block.text)" />
  <component
    :is="block.ordered ? 'ol' : 'ul'"
    v-else-if="block.type === 'list'"
    class="space-y-2 pl-6"
    :class="block.ordered ? 'list-decimal' : 'list-disc'"
  >
    <li v-for="(item, index) in block.items" :key="index" v-html="renderInline(item)" />
  </component>
  <aside
    v-else-if="block.type === 'callout'"
    class="rounded-2xl border border-petrol/15 bg-mist p-6"
  >
    <p class="mb-3 font-semibold text-ink">{{ block.title }}</p>
    <p v-html="renderInline(block.text)" />
  </aside>
  <blockquote v-else-if="block.type === 'quote'" class="border-l-4 border-petrol pl-5">
    <p v-html="renderInline(block.text)" />
    <cite v-if="block.attribution" class="mt-3 block text-sm">{{ block.attribution }}</cite>
  </blockquote>
  <div
    v-else-if="block.type === 'table'"
    class="overflow-x-auto"
    tabindex="0"
    role="region"
    :aria-label="block.caption"
  >
    <table class="w-full border-collapse text-left text-base">
      <caption class="mb-3 text-left font-semibold text-ink">
        {{
          block.caption
        }}
      </caption>
      <thead>
        <tr>
          <th
            v-for="(header, index) in block.headers"
            :key="index"
            scope="col"
            class="border-b border-petrol/20 p-3"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in block.rows" :key="index">
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="border-b border-petrol/10 p-3"
            v-html="renderInline(cell)"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>
