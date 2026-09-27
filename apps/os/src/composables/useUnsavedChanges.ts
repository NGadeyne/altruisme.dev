import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export function useUnsavedChanges(isDirty: Ref<boolean>) {
  const message = 'Tu as des modifications non enregistrées. Quitter quand même ?'

  function beforeUnload(event: BeforeUnloadEvent) {
    if (!isDirty.value) return
    event.preventDefault()
    event.returnValue = ''
  }

  onMounted(() => window.addEventListener('beforeunload', beforeUnload))
  onBeforeUnmount(() => window.removeEventListener('beforeunload', beforeUnload))

  onBeforeRouteLeave(() => {
    if (!isDirty.value) return true
    return window.confirm(message)
  })
}
