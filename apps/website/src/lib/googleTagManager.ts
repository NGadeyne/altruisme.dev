import { watch } from 'vue'
import type { Router } from 'vue-router'
import { useCookieConsent } from '@/composables/useCookieConsent'

const CONTAINER_ID = 'GTM-MCQNDCD8'

type TagManagerWindow = Window & {
  dataLayer?: Record<string, unknown>[]
}

export function startGoogleTagManager(router: Router) {
  const { loadPreferences, preferences } = useCookieConsent()
  loadPreferences()

  let loaded = false

  watch(
    () => preferences.value.analytics,
    (allowed, wasAllowed) => {
      if (allowed && !loaded) {
        const tagWindow = window as TagManagerWindow
        const dataLayer = (tagWindow.dataLayer ??= [])
        dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtm.js?id=${CONTAINER_ID}`
        document.head.appendChild(script)
        loaded = true
      } else if (!allowed && wasAllowed && loaded) {
        // A reload clears tags and listeners already installed by the container.
        window.location.reload()
      }
    },
    { immediate: true, flush: 'post' },
  )

  router.afterEach((to, from, failure) => {
    if (failure || !loaded || !preferences.value.analytics || to.fullPath === from.fullPath) return

    const dataLayer = (window as TagManagerWindow).dataLayer
    dataLayer?.push({
      event: 'virtual_page_view',
      page_location: window.location.href,
      page_path: to.fullPath,
      page_title: document.title,
    })
  })
}
