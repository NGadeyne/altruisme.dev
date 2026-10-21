<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

import SeoMarkdown from '@/components/assistant/SeoMarkdown.vue'
import type { SeoMessage } from '@/composables/useSeoConversation'

const props = defineProps<{
  messages: SeoMessage[]
  isSending: boolean
  error: { message: string; canRetry: boolean } | null
}>()

const emit = defineEmits<{
  suggest: [question: string]
  retry: []
}>()

const suggestions = [
  'Comment trouver les bons mots-clés ?',
  "Pourquoi mon site n'apparaît pas sur Google ?",
  'Comment optimiser une page pour le SEO ?',
  'Comment améliorer mon maillage interne ?',
]

const scrollArea = ref<HTMLElement | null>(null)
const copiedIndex = ref<number | null>(null)
const copyErrorIndex = ref<number | null>(null)

watch(
  () => [props.messages.length, props.isSending, props.error?.message],
  async () => {
    await nextTick()
    if (scrollArea.value) scrollArea.value.scrollTop = scrollArea.value.scrollHeight
    if (props.messages.length === 0) {
      copiedIndex.value = null
      copyErrorIndex.value = null
    }
  },
  { immediate: true },
)

async function copyAnswer(content: string, index: number) {
  try {
    await navigator.clipboard.writeText(content)
    copiedIndex.value = index
    copyErrorIndex.value = null
  } catch {
    copyErrorIndex.value = index
  }
}
</script>

<template>
  <div
    ref="scrollArea"
    class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-8 sm:py-8"
    role="log"
    aria-label="Conversation avec l'assistant SEO"
    aria-live="polite"
    aria-relevant="additions"
  >
    <div
      v-if="messages.length === 0"
      class="mx-auto flex h-full max-w-2xl flex-col justify-center py-6"
    >
      <div
        class="mb-6 flex size-12 items-center justify-center rounded-2xl border border-petrol/20 bg-mist text-lg font-semibold text-petrol-dark"
        aria-hidden="true"
      >
        SEO
      </div>
      <h2 class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Une question sur le SEO ?
      </h2>
      <p class="mt-3 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
        Comprends les fondamentaux du référencement naturel, trouve des réponses à tes questions et
        avance concrètement sur ton site grâce à ton assistant pédagogique.
      </p>
      <div class="mt-8 grid gap-2 sm:grid-cols-2" aria-label="Questions suggérées">
        <button
          v-for="suggestion in suggestions"
          :key="suggestion"
          type="button"
          :disabled="isSending"
          class="rounded-xl border border-petrol/15 bg-white px-4 py-3 text-left text-sm font-medium leading-6 text-petrol-dark transition hover:border-petrol/40 hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol disabled:opacity-50"
          @click="emit('suggest', suggestion)"
        >
          {{ suggestion }}
        </button>
      </div>
      <p v-if="error" class="mt-5 text-sm text-[#794734]" role="alert">{{ error.message }}</p>
    </div>

    <ol v-else class="mx-auto max-w-3xl space-y-6">
      <li
        v-for="(message, index) in messages"
        :key="index"
        :class="message.role === 'user' ? 'flex justify-end' : 'flex justify-start'"
      >
        <div
          v-if="message.role === 'user'"
          class="max-w-[90%] whitespace-pre-wrap break-words rounded-2xl rounded-br-md bg-petrol-dark px-4 py-3 text-sm leading-6 text-white sm:max-w-[78%]"
        >
          {{ message.content }}
        </div>

        <div
          v-else
          class="min-w-0 max-w-full rounded-2xl rounded-bl-md border border-petrol/10 bg-sand-light/60 px-4 py-4 sm:px-6"
        >
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#3d6970]">
            Assistant SEO
          </p>
          <SeoMarkdown :content="message.content" />
          <div
            v-if="message.resources?.length"
            class="mt-5 rounded-xl border border-petrol/15 bg-white/70 px-4 py-3"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
              Pour aller plus loin
            </p>
            <ul class="mt-2 space-y-3">
              <li v-for="resource in message.resources" :key="resource.id">
                <p class="text-xs text-ink-soft">{{ resource.moduleTitle }}</p>
                <p class="text-sm font-medium leading-6 text-ink">
                  Leçon {{ resource.number }} — {{ resource.title }}
                </p>
                <RouterLink
                  :to="resource.url"
                  class="text-sm font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                >
                  Découvrir la leçon
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="mt-4 flex items-center gap-3 border-t border-petrol/10 pt-3">
            <button
              type="button"
              class="rounded-md text-xs font-semibold text-petrol-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              :aria-label="copiedIndex === index ? 'Réponse copiée' : 'Copier la réponse'"
              @click="copyAnswer(message.content, index)"
            >
              {{ copiedIndex === index ? 'Copié' : 'Copier la réponse' }}
            </button>
            <span v-if="copyErrorIndex === index" class="text-xs text-muted" role="status"
              >Copie indisponible.</span
            >
          </div>
        </div>
      </li>

      <li
        v-if="isSending"
        class="flex justify-start"
        role="status"
        aria-label="L'assistant prépare sa réponse"
      >
        <div
          class="rounded-2xl border border-petrol/10 bg-sand-light/60 px-5 py-4 text-sm text-ink-soft"
        >
          <span class="mr-2 inline-flex gap-1" aria-hidden="true">
            <span class="size-1.5 rounded-full bg-petrol motion-safe:animate-pulse" />
            <span class="size-1.5 rounded-full bg-petrol motion-safe:animate-pulse" />
            <span class="size-1.5 rounded-full bg-petrol motion-safe:animate-pulse" />
          </span>
          L'assistant prépare sa réponse…
        </div>
      </li>

      <li
        v-if="error"
        class="rounded-xl border border-[#b67052]/25 bg-[#fff8f3] px-4 py-3 text-sm text-[#794734]"
        role="alert"
      >
        <p>{{ error.message }}</p>
        <button
          v-if="error.canRetry && !isSending"
          type="button"
          class="mt-2 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
          @click="emit('retry')"
        >
          Réessayer cette question
        </button>
      </li>
    </ol>
  </div>
</template>
