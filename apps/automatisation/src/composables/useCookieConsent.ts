import { ref } from 'vue'

export const OPEN_COOKIE_SETTINGS_EVENT = 'automatisation:open-cookie-settings'

type CookiePreferences = { external: boolean }
type StoredPreferences = CookiePreferences & { version: number; updatedAt: string }

const storageKey = 'altruisme-automatisation-cookie-consent'
const consentDurationMs = 6 * 30 * 24 * 60 * 60 * 1000
const preferences = ref<CookiePreferences>({ external: false })
const hasConsent = ref(false)

function isValidPreference(value: unknown): value is StoredPreferences {
  if (!value || typeof value !== 'object') return false
  const stored = value as Partial<StoredPreferences>
  const updatedAt = typeof stored.updatedAt === 'string' ? Date.parse(stored.updatedAt) : Number.NaN
  const age = Date.now() - updatedAt
  return (
    stored.version === 1 &&
    typeof stored.external === 'boolean' &&
    age >= 0 &&
    age < consentDurationMs
  )
}

export function useCookieConsent() {
  function loadPreferences() {
    try {
      const stored = localStorage.getItem(storageKey)
      if (!stored) return
      const parsed: unknown = JSON.parse(stored)
      if (!isValidPreference(parsed)) {
        localStorage.removeItem(storageKey)
        return
      }
      preferences.value = { external: parsed.external }
      hasConsent.value = true
    } catch {
      // The banner remains available when browser storage is unavailable.
    }
  }

  function savePreferences(nextPreferences: CookiePreferences) {
    preferences.value = { external: nextPreferences.external }
    hasConsent.value = true
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          version: 1,
          external: preferences.value.external,
          updatedAt: new Date().toISOString(),
        }),
      )
    } catch {
      // The current session still respects the visitor's choice.
    }
  }

  return { hasConsent, loadPreferences, preferences, savePreferences }
}
