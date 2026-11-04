import { watch } from 'vue'
import type { Router } from 'vue-router'
import { useCookieConsent } from '@/composables/useCookieConsent'

const PIXEL_ID = '1421402045721548'

type MetaPixel = ((...args: string[]) => void) & {
  callMethod?: (...args: string[]) => void
  queue: string[][]
  loaded: boolean
  version: string
  push: (...args: string[]) => void
}

type MetaWindow = Window & {
  fbq?: MetaPixel
  _fbq?: MetaPixel
}

function loadPixel() {
  const metaWindow = window as MetaWindow
  if (metaWindow.fbq) {
    metaWindow.fbq('consent', 'grant')
    return
  }

  const fbq = ((...args: string[]) => {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  }) as MetaPixel
  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.push = fbq
  metaWindow.fbq = fbq
  metaWindow._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  fbq('init', PIXEL_ID)
}

export function startMetaPixel(router: Router) {
  const { loadPreferences, preferences } = useCookieConsent()
  loadPreferences()

  watch(
    () => preferences.value.marketing,
    (allowed) => {
      const pixel = (window as MetaWindow).fbq
      if (allowed) {
        loadPixel()
        const activePixel = (window as MetaWindow).fbq
        activePixel?.('track', 'PageView')
      } else if (pixel) {
        // A visitor may withdraw consent before the asynchronously loaded script runs.
        if (!pixel.callMethod) {
          pixel.queue = pixel.queue.filter(([command]) => command !== 'track')
          pixel.queue.unshift(['consent', 'revoke'])
        } else {
          pixel('consent', 'revoke')
        }
      }
    },
    { immediate: true, flush: 'sync' },
  )

  router.afterEach((to, from, failure) => {
    if (!failure && to.path !== from.path && preferences.value.marketing) {
      const pixel = (window as MetaWindow).fbq
      pixel?.('track', 'PageView')
    }
  })
}

export function trackChecklistRegistration() {
  const { preferences } = useCookieConsent()
  if (!preferences.value.marketing) return

  const pixel = (window as MetaWindow).fbq
  pixel?.('track', 'CompleteRegistration')
}
