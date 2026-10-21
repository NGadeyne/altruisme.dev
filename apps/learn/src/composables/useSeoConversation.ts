import { computed, ref } from 'vue'

import { askSeoAssistant, SeoAssistantError } from '@/services/seoAssistant'

export interface SeoMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ConversationError {
  message: string
  canRetry: boolean
}

const MAX_SAVED_MESSAGES = 40
const STORAGE_PREFIX = 'altruisme:learn:seo-assistant:v1:'

// Module state keeps the current exchange when the user navigates away and back.
const messages = ref<SeoMessage[]>([])
const isSending = ref(false)
const error = ref<ConversationError | null>(null)
const storageError = ref('')
const saveOnDevice = ref(false)
const hasMessages = computed(() => messages.value.length > 0)

let userId: string | null = null
let activeRequest: AbortController | null = null
let requestSequence = 0

function storageKey(id: string): string {
  return `${STORAGE_PREFIX}${id}`
}

function save(): void {
  if (!userId || !saveOnDevice.value) return
  try {
    localStorage.setItem(
      storageKey(userId),
      JSON.stringify({ messages: messages.value.slice(-MAX_SAVED_MESSAGES) }),
    )
    storageError.value = ''
  } catch {
    saveOnDevice.value = false
    storageError.value = "L'historique ne peut pas être enregistré sur cet appareil."
  }
}

function load(id: string): void {
  try {
    const raw = localStorage.getItem(storageKey(id))
    if (!raw || raw.length > 200_000) return
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null || !('messages' in parsed)) return
    if (!Array.isArray(parsed.messages)) return

    messages.value = parsed.messages
      .filter(
        (item): item is SeoMessage =>
          typeof item === 'object' &&
          item !== null &&
          (item.role === 'user' || item.role === 'assistant') &&
          typeof item.content === 'string' &&
          item.content.length > 0 &&
          item.content.length <= 16_000,
      )
      .slice(-MAX_SAVED_MESSAGES)
    saveOnDevice.value = true
    if (messages.value.at(-1)?.role === 'user') {
      error.value = { message: "La dernière question n'a pas reçu de réponse.", canRetry: true }
    }
  } catch {
    storageError.value = "L'historique enregistré n'a pas pu être relu."
  }
}

function setUser(id: string | null): void {
  if (id === userId) return
  activeRequest?.abort()
  activeRequest = null
  requestSequence += 1
  userId = id
  messages.value = []
  isSending.value = false
  error.value = null
  storageError.value = ''
  saveOnDevice.value = false
  if (id) load(id)
}

function setSaveOnDevice(enabled: boolean): void {
  if (!userId) return
  saveOnDevice.value = enabled
  storageError.value = ''
  if (enabled) {
    save()
  } else {
    try {
      localStorage.removeItem(storageKey(userId))
    } catch {
      storageError.value = "L'historique enregistré n'a pas pu être supprimé."
    }
  }
}

function newConversation(): void {
  activeRequest?.abort()
  activeRequest = null
  requestSequence += 1
  messages.value = []
  isSending.value = false
  error.value = null
  save()
}

async function generate(question: string, appendQuestion: boolean): Promise<void> {
  if (isSending.value || !userId) return
  const text = question.trim()
  if (!text || text.length > 2_000) {
    error.value = {
      message: 'Ta question doit contenir au maximum 2 000 caractères.',
      canRetry: false,
    }
    return
  }

  if (appendQuestion) messages.value = [...messages.value, { role: 'user', content: text }]
  error.value = null
  isSending.value = true
  save()

  const sequence = ++requestSequence
  const controller = new AbortController()
  activeRequest = controller
  try {
    const answer = await askSeoAssistant(text, controller.signal)
    if (sequence !== requestSequence) return
    messages.value = [...messages.value, { role: 'assistant', content: answer }]
    save()
  } catch (cause) {
    if (sequence !== requestSequence) return
    error.value =
      cause instanceof SeoAssistantError
        ? {
            message: cause.message,
            canRetry: cause.kind !== 'configuration' && cause.kind !== 'authentication',
          }
        : { message: "Une erreur inattendue s'est produite. Réessaie.", canRetry: true }
  } finally {
    if (sequence === requestSequence) {
      isSending.value = false
      activeRequest = null
    }
  }
}

function sendQuestion(question: string): Promise<void> {
  return generate(question, true)
}

function retryLastQuestion(): Promise<void> {
  const lastMessage = messages.value.at(-1)
  if (!lastMessage || lastMessage.role !== 'user') return Promise.resolve()
  return generate(lastMessage.content, false)
}

export function useSeoConversation() {
  return {
    messages,
    isSending,
    error,
    storageError,
    saveOnDevice,
    hasMessages,
    setUser,
    setSaveOnDevice,
    newConversation,
    sendQuestion,
    retryLastQuestion,
  }
}
