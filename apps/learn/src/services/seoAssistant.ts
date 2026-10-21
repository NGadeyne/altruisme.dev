import { supabase } from '@/lib/supabase'

export type SeoAssistantErrorKind =
  | 'configuration'
  | 'authentication'
  | 'rate-limit'
  | 'timeout'
  | 'network'
  | 'invalid-response'
  | 'server'

export class SeoAssistantError extends Error {
  constructor(
    readonly kind: SeoAssistantErrorKind,
    message: string,
  ) {
    super(message)
    this.name = 'SeoAssistantError'
  }
}

function chatUrl(): URL {
  const base =
    import.meta.env.VITE_LEARN_AI_API_URL?.trim() ||
    (import.meta.env.DEV ? 'http://localhost:8787' : '')

  if (!base) {
    throw new SeoAssistantError('configuration', "L'assistant n'est pas encore configuré.")
  }

  try {
    const url = new URL('chat', `${base.replace(/\/+$/, '')}/`)
    const localHttp =
      import.meta.env.DEV &&
      url.protocol === 'http:' &&
      ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
    if (url.protocol !== 'https:' && !localHttp) {
      throw new Error('Invalid protocol')
    }
    return url
  } catch {
    throw new SeoAssistantError('configuration', "L'adresse de l'assistant est invalide.")
  }
}

async function accessToken(): Promise<string> {
  const { data, error } = await supabase.auth.getSession()
  if (error || !data.session?.access_token) {
    throw new SeoAssistantError('authentication', 'Reconnecte-toi pour utiliser l’assistant.')
  }
  return data.session.access_token
}

async function requestAnswer(url: URL, message: string, token: string, signal?: AbortSignal) {
  const timeoutSignal = AbortSignal.timeout(35_000)
  let response: Response
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
      cache: 'no-store',
      signal: signal ? AbortSignal.any([signal, timeoutSignal]) : timeoutSignal,
    })
  } catch (error) {
    if (signal?.aborted) throw error
    if (timeoutSignal.aborted) {
      throw new SeoAssistantError('timeout', 'La réponse prend trop de temps. Réessaie.')
    }
    throw new SeoAssistantError('network', 'Connexion impossible avec l’assistant. Réessaie.')
  }
  return response
}

export async function askSeoAssistant(message: string, signal?: AbortSignal): Promise<string> {
  const url = chatUrl()
  let token = await accessToken()
  let response = await requestAnswer(url, message, token, signal)

  if (response.status === 401) {
    try {
      const { data, error } = await supabase.auth.refreshSession()
      if (error || !data.session?.access_token) {
        throw new Error('Session unavailable')
      }
      token = data.session.access_token
    } catch {
      throw new SeoAssistantError('authentication', 'Ta session a expiré. Reconnecte-toi.')
    }
    response = await requestAnswer(url, message, token, signal)
  }

  if (response.status === 401 || response.status === 403) {
    throw new SeoAssistantError('authentication', 'Ta session a expiré. Reconnecte-toi.')
  }
  if (response.status === 429) {
    throw new SeoAssistantError(
      'rate-limit',
      'Trop de questions pour le moment. Réessaie dans une minute.',
    )
  }
  if (response.status === 404) {
    throw new SeoAssistantError(
      'configuration',
      "L'assistant n'est pas disponible à cette adresse.",
    )
  }
  if (!response.ok) {
    let message = 'L’assistant est momentanément indisponible. Réessaie.'
    try {
      const data: unknown = await response.json()
      if (
        typeof data === 'object' &&
        data !== null &&
        'error' in data &&
        (data.error === 'Service indisponible.' ||
          data.error === 'Le service de réponse est indisponible.' ||
          data.error === 'Aucune réponse disponible pour le moment.')
      ) {
        message = data.error
      }
    } catch {
      // Keep the generic message for non-JSON proxy errors.
    }
    throw new SeoAssistantError('server', message)
  }

  try {
    const data: unknown = await response.json()
    if (
      typeof data === 'object' &&
      data !== null &&
      'answer' in data &&
      typeof data.answer === 'string' &&
      data.answer.trim()
    ) {
      return data.answer.trim()
    }
  } catch {
    // An invalid JSON response is handled below.
  }
  throw new SeoAssistantError('invalid-response', 'Réponse inattendue de l’assistant. Réessaie.')
}
