import { nextTick } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { expect, it } from 'vitest'
import { useCookieConsent } from '@/composables/useCookieConsent'
import { startGoogleTagManager } from '@/lib/googleTagManager'

it('loads Tag Manager only after analytics consent and reports SPA navigation', async () => {
  localStorage.clear()

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: {} },
      { path: '/guides', component: {} },
    ],
  })
  await router.push('/')
  await router.isReady()

  startGoogleTagManager(router)
  const { savePreferences } = useCookieConsent()
  const scripts = () => document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]')

  expect(scripts()).toHaveLength(0)
  savePreferences({ external: false, marketing: false, analytics: false })
  await nextTick()
  expect(scripts()).toHaveLength(0)

  savePreferences({ external: false, marketing: false, analytics: true })
  await nextTick()
  expect(scripts()).toHaveLength(1)
  expect(scripts()[0]?.getAttribute('src')).toContain('id=GTM-MCQNDCD8')

  await router.push('/guides')
  const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer
  expect(dataLayer).toEqual(
    expect.arrayContaining([expect.objectContaining({ event: 'virtual_page_view', page_path: '/guides' })]),
  )
})
