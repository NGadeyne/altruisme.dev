import type {
  AuditAnswers,
  AuditResult,
} from '@/types/audit'

const API_URL =
  'https://altruisme-audit-api.contact-b08.workers.dev'

type SaveLeadPayload = {
  email: string
  newsletterConsent: boolean
  answers: AuditAnswers
  result: AuditResult
}

export async function saveLead(
  payload: SaveLeadPayload,
) {
  const url = `${API_URL}/send-diagnostic`

  console.log('Audit API URL:', url)

  const response = await fetch(url, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      email: payload.email,
      newsletterConsent:
        payload.newsletterConsent,
      answers: payload.answers,
      result: payload.result,
    }),
  })

  const responseText = await response.text()

  console.log('Audit API status:', response.status)
  console.log('Audit API response:', responseText)

  if (!response.ok) {
    throw new Error(
      `Unable to send diagnostic (${response.status}): ${responseText}`,
    )
  }

  return responseText
    ? JSON.parse(responseText)
    : null
}
