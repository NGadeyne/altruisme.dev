import { ref } from 'vue'

export type CookiePreferences = {
  external: boolean
}

type StoredCookiePreferences = CookiePreferences & {
  version: number
  updatedAt: string
}

export const COOKIE_CONSENT_EVENT = 'cookie-consent-updated'
export const OPEN_COOKIE_SETTINGS_EVENT = 'open-cookie-settings'

const STORAGE_KEY = 'acquisition-cookie-consent'
const CONSENT_VERSION = 1
const CONSENT_DURATION_MS = 6 * 30 * 24 * 60 * 60 * 1000

const preferences = ref<CookiePreferences>({ external: false })
const hasConsent = ref(false)
const isLoaded = ref(false)

function isStoredPreference(value: unknown): value is StoredCookiePreferences {
  if (!value || typeof value !== 'object') return false

  const stored = value as Partial<StoredCookiePreferences>
  const updatedAt = typeof stored.updatedAt === 'string' ? Date.parse(stored.updatedAt) : Number.NaN

  return (
    stored.version === CONSENT_VERSION &&
    typeof stored.external === 'boolean' &&
    Number.isFinite(updatedAt) &&
    Date.now() - updatedAt >= 0 &&
    Date.now() - updatedAt < CONSENT_DURATION_MS
  )
}

export function useCookieConsent() {
  function loadPreferences() {
    if (isLoaded.value || typeof window === 'undefined') return

    isLoaded.value = true

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return

      const parsed: unknown = JSON.parse(stored)
      if (!isStoredPreference(parsed)) {
        localStorage.removeItem(STORAGE_KEY)
        return
      }

      preferences.value = { external: parsed.external }
      hasConsent.value = true
    } catch {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // Storage can be unavailable in private or restricted browser contexts.
      }
    }
  }

  function savePreferences(nextPreferences: CookiePreferences) {
    preferences.value = { external: nextPreferences.external }
    hasConsent.value = true
    if (typeof window === 'undefined') return

    const storedPreferences: StoredCookiePreferences = {
      version: CONSENT_VERSION,
      external: preferences.value.external,
      updatedAt: new Date().toISOString(),
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storedPreferences))
    } catch {
      // The current session still respects the visitor's choice if storage is unavailable.
    }

    window.dispatchEvent(
      new CustomEvent<CookiePreferences>(COOKIE_CONSENT_EVENT, { detail: preferences.value }),
    )
  }

  return { hasConsent, loadPreferences, preferences, savePreferences }
}
