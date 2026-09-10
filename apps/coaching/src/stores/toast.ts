import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ToastType = 'success' | 'error' | 'info'

export const useToastStore = defineStore('toast', () => {
  const message = ref('')
  const type = ref<ToastType>('success')
  const visible = ref(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  function show(nextMessage: string, nextType: ToastType = 'success') {
    message.value = nextMessage
    type.value = nextType
    visible.value = true

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      visible.value = false
    }, 3200)
  }

  function hide() {
    visible.value = false
    if (timer) clearTimeout(timer)
  }

  return { message, type, visible, show, hide }
})
