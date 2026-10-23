<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'

import SeoChatMessages from '@/components/assistant/SeoChatMessages.vue'
import { useSeoConversation } from '@/composables/useSeoConversation'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const {
  messages,
  isSending,
  streamingAnswer,
  error,
  storageError,
  saveOnDevice,
  hasMessages,
  setUser,
  setSaveOnDevice,
  newConversation,
  sendQuestion,
  retryLastQuestion,
} = useSeoConversation()

const draft = ref('')
const textarea = ref<HTMLTextAreaElement | null>(null)
const localSaving = computed({
  get: () => saveOnDevice.value,
  set: setSaveOnDevice,
})

watch(
  () => authStore.user?.id ?? null,
  (id) => setUser(id),
  { immediate: true },
)

function sendDraft() {
  if (isSending.value) return
  const question = draft.value.trim()
  if (!question) return
  draft.value = ''
  void sendQuestion(question)
}

function sendSuggestion(question: string) {
  if (isSending.value) return
  void sendQuestion(question)
}

async function startNewConversation() {
  newConversation()
  draft.value = ''
  await nextTick()
  textarea.value?.focus()
}
</script>

<template>
  <BaseContainer size="default">
    <header
      class="rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-8"
    >
      <div class="flex flex-wrap items-start justify-between gap-5">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d6970]">
            Altruisme Learn · Formation SEO
          </p>
          <h1 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Assistant
          </h1>
          <p class="mt-3 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
            Ton compagnon d'apprentissage pour comprendre le SEO et passer à l'action, une question
            à la fois.
          </p>
        </div>
        <BaseButton
          variant="secondary"
          size="small"
          :disabled="!hasMessages && !isSending"
          @click="startNewConversation"
        >
          Nouvelle conversation
        </BaseButton>
      </div>
    </header>

    <section
      class="mt-5 flex h-[min(72dvh,56rem)] min-h-[32rem] flex-col overflow-hidden rounded-3xl border border-petrol/15 bg-white shadow-[0_18px_55px_-45px_rgba(27,69,69,0.5)] sm:h-[min(78dvh,60rem)]"
      aria-label="Assistant conversationnel"
    >
      <SeoChatMessages
        :messages="messages"
        :is-sending="isSending"
        :streaming-answer="streamingAnswer"
        :error="error"
        @suggest="sendSuggestion"
        @retry="retryLastQuestion"
      />

      <div class="shrink-0 border-t border-petrol/10 bg-white px-4 py-4 sm:px-6">
        <form class="mx-auto max-w-3xl" @submit.prevent="sendDraft">
          <label for="seo-question" class="sr-only">Pose ta question sur le SEO</label>
          <div
            class="flex items-end gap-2 rounded-2xl border border-petrol/20 bg-sand-light/50 p-2 transition-colors focus-within:border-petrol/60 sm:gap-3"
          >
            <textarea
              id="seo-question"
              ref="textarea"
              v-model="draft"
              rows="2"
              maxlength="2000"
              :disabled="isSending"
              placeholder="Pose ta question sur le SEO…"
              class="max-h-32 min-h-12 flex-1 resize-y border-0 bg-transparent px-2 py-2 text-sm leading-6 text-ink outline-none placeholder:text-muted disabled:opacity-60 sm:text-base"
              @keydown.enter.exact.prevent="sendDraft"
            />
            <BaseButton type="submit" size="small" :disabled="isSending || !draft.trim()">
              Envoyer
            </BaseButton>
          </div>
          <div
            class="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-muted"
          >
            <span>Entrée pour envoyer · Maj + Entrée pour une nouvelle ligne</span>
            <span>{{ draft.length }}/2 000</span>
          </div>
        </form>
      </div>
    </section>

    <div
      class="mt-4 flex flex-wrap items-start justify-between gap-x-6 gap-y-3 px-1 text-xs leading-5 text-muted"
    >
      <p class="max-w-xl">
        L'IA peut se tromper : vérifie ses recommandations. L'assistant tient compte des échanges
        récents de cette conversation.
      </p>
      <label class="flex cursor-pointer items-center gap-2 text-ink-soft">
        <input v-model="localSaving" type="checkbox" class="size-4 accent-[#315960]" />
        Conserver cette conversation sur cet appareil
      </label>
      <p v-if="storageError" class="w-full text-[#794734]" role="status">{{ storageError }}</p>
      <p v-else-if="localSaving" class="w-full text-right">
        Jusqu'à 40 messages sont enregistrés pour ce compte dans ce navigateur. Désactive cette
        option pour les effacer.
      </p>
    </div>
  </BaseContainer>
</template>
