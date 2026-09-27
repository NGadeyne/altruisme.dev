<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useToastStore } from '@/stores/toast'

const toastStore = useToastStore()
const { message, type, visible } = storeToRefs(toastStore)

const classes = computed(() => ({
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  error: 'border-red-200 bg-red-50 text-red-800',
  info: 'border-zinc-200 bg-white text-zinc-800',
}[type.value]))
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-2 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-2 opacity-0"
  >
    <div
      v-if="visible"
      class="fixed bottom-5 right-5 z-[70] flex max-w-sm items-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-lg"
      :class="classes"
      role="status"
      aria-live="polite"
    >
      <span>{{ message }}</span>
      <button type="button" class="ml-auto opacity-60 hover:opacity-100" aria-label="Fermer" @click="toastStore.hide()">
        ×
      </button>
    </div>
  </Transition>
</template>
