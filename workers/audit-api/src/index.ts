interface Env {
  BREVO_API_KEY: string
}

type Dimension =
  | 'positionnement'
  | 'offre'
  | 'visibilite'
  | 'prospection'
  | 'conversion'

type DiagnosticPayload = {
  email: string
  newsletterConsent: boolean

  result: {
    globalScore: number
    priority: Dimension

    scores: Record<Dimension, number>

    summary: string
    why: string[]
    priorities: string[]
    stopDoing: string[]
  }
}

const TEMPLATE_ID = 58
const NEWSLETTER_LIST_ID = 2

const dimensionLabels: Record<Dimension, string> = {
  positionnement: 'Positionnement',
  offre: 'Offre',
  visibilite: 'Visibilité',
  prospection: 'Prospection',
  conversion: 'Conversion',
}

function json(
  data: unknown,
  status = 200,
  headers: HeadersInit = {},
) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
}

function getCorsHeaders(origin: string | null): HeadersInit {
  const allowedOrigins = [
    'https://altruisme.dev',
    'https://audit.altruisme.dev',
  ]

  const isLocalhost =
    origin?.startsWith('http://localhost:') ||
    origin?.startsWith('http://127.0.0.1:')

  const isAllowed =
    origin &&
    (allowedOrigins.includes(origin) || isLocalhost)

  return {
    'Access-Control-Allow-Origin': isAllowed
      ? origin
      : 'https://altruisme.dev',

    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',

    'Access-Control-Allow-Headers': 'Content-Type',

    Vary: 'Origin',
  }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isDimension(value: unknown): value is Dimension {
  return (
    value === 'positionnement' ||
    value === 'offre' ||
    value === 'visibilite' ||
    value === 'prospection' ||
    value === 'conversion'
  )
}

function isValidPayload(
  payload: unknown,
): payload is DiagnosticPayload {
  if (!payload || typeof payload !== 'object') {
    return false
  }

  const data = payload as Partial<DiagnosticPayload>

  if (
    !data.email ||
    typeof data.email !== 'string' ||
    !isValidEmail(data.email)
  ) {
    return false
  }

  if (
    typeof data.newsletterConsent !== 'boolean'
  ) {
    return false
  }

  if (!data.result || typeof data.result !== 'object') {
    return false
  }

  if (
    typeof data.result.globalScore !== 'number' ||
    !isDimension(data.result.priority)
  ) {
    return false
  }

  if (
    !data.result.scores ||
    typeof data.result.scores !== 'object'
  ) {
    return false
  }

  const scores = data.result.scores

  if (
    typeof scores.positionnement !== 'number' ||
    typeof scores.offre !== 'number' ||
    typeof scores.visibilite !== 'number' ||
    typeof scores.prospection !== 'number' ||
    typeof scores.conversion !== 'number'
  ) {
    return false
  }

  if (
    typeof data.result.summary !== 'string' ||
    !Array.isArray(data.result.why) ||
    !Array.isArray(data.result.priorities) ||
    !Array.isArray(data.result.stopDoing)
  ) {
    return false
  }

  return true
}

async function sendDiagnosticEmail(
  env: Env,
  payload: DiagnosticPayload,
) {
  const { email, result } = payload

  const priorityLabel =
    dimensionLabels[result.priority]

  const priorityScore =
    result.scores[result.priority]

  const response = await fetch(
    'https://api.brevo.com/v3/smtp/email',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'api-key': env.BREVO_API_KEY,
        accept: 'application/json',
      },

      body: JSON.stringify({
        to: [
          {
            email,
          },
        ],

        templateId: TEMPLATE_ID,

        params: {
          globalScore: result.globalScore,

          priorityLabel,
          priorityScore,

          positionnement:
            result.scores.positionnement,

          offre:
            result.scores.offre,

          visibilite:
            result.scores.visibilite,

          prospection:
            result.scores.prospection,

          conversion:
            result.scores.conversion,

          summary:
            result.summary,

          why1:
            result.why[0] ?? '',

          why2:
            result.why[1] ?? '',

          why3:
            result.why[2] ?? '',

          priority1:
            result.priorities[0] ?? '',

          priority2:
            result.priorities[1] ?? '',

          priority3:
            result.priorities[2] ?? '',

          stop1:
            result.stopDoing[0] ?? '',

          stop2:
            result.stopDoing[1] ?? '',
        },
      }),
    },
  )

  const responseText = await response.text()

  if (!response.ok) {
    console.error('Brevo diagnostic error:', {
      status: response.status,
      body: responseText,
    })

    throw new Error(
      `Brevo ${response.status}: ${responseText}`,
    )
  }

  if (!responseText) {
    return null
  }

  try {
    return JSON.parse(responseText)
  } catch {
    return responseText
  }
}

async function addContactToNewsletter(
  env: Env,
  email: string,
) {
  const response = await fetch(
    'https://api.brevo.com/v3/contacts',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'api-key': env.BREVO_API_KEY,
        accept: 'application/json',
      },

      body: JSON.stringify({
        email,

        listIds: [
          NEWSLETTER_LIST_ID,
        ],

        updateEnabled: true,
      }),
    },
  )

  const responseText = await response.text()

  if (!response.ok) {
    console.error('Brevo newsletter error:', {
      status: response.status,
      body: responseText,
    })

    throw new Error(
      `Brevo contact ${response.status}: ${responseText}`,
    )
  }

  if (!responseText) {
    return null
  }

  try {
    return JSON.parse(responseText)
  } catch {
    return responseText
  }
}

export default {
  async fetch(
    request: Request,
    env: Env,
  ): Promise<Response> {
    const origin =
      request.headers.get('Origin')

    const corsHeaders =
      getCorsHeaders(origin)

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      })
    }

    const url =
      new URL(request.url)

    if (
      url.pathname === '/health' &&
      request.method === 'GET'
    ) {
      return json(
        {
          status: 'ok',
        },
        200,
        corsHeaders,
      )
    }

    if (
      url.pathname !== '/send-diagnostic' ||
      request.method !== 'POST'
    ) {
      return json(
        {
          error: 'Not found',
        },
        404,
        corsHeaders,
      )
    }

    try {
      const payload =
        await request.json()

      if (!isValidPayload(payload)) {
        return json(
          {
            error: 'Invalid payload',
          },
          400,
          corsHeaders,
        )
      }

      const brevoResponse =
        await sendDiagnosticEmail(
          env,
          payload,
        )

      let newsletterSubscribed = false

      if (payload.newsletterConsent) {
        try {
          await addContactToNewsletter(
            env,
            payload.email,
          )

          newsletterSubscribed = true
        } catch (error) {
          console.error(
            'Newsletter subscription failed:',
            error,
          )
        }
      }

      return json(
        {
          success: true,
          brevo: brevoResponse,
          newsletterSubscribed,
        },
        200,
        corsHeaders,
      )
    } catch (error) {
      console.error(
        'Worker error:',
        error,
      )

      const message =
        error instanceof Error
          ? error.message
          : 'Unknown error'

      return json(
        {
          error: message,
        },
        500,
        corsHeaders,
      )
    }
  },
}
