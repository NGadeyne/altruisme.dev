import { createClient } from 'npm:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!

const secretKeys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}')

const supabaseSecretKey = secretKeys.default
const ownerId = Deno.env.get('COACHING_OWNER_ID')!

if (!supabaseSecretKey) {
  throw new Error('Supabase secret key unavailable.')
}

if (!ownerId) {
  throw new Error('COACHING_OWNER_ID unavailable.')
}

const supabase = createClient(supabaseUrl, supabaseSecretKey)

type CalendlyQuestionAnswer = {
  question?: string
  answer?: string
}

type CalendlyWebhook = {
  event: string

  payload: {
    uri?: string
    name?: string
    email?: string

    scheduled_event?: {
      uri?: string
      start_time?: string
    }

    questions_and_answers?: CalendlyQuestionAnswer[]
  }
}

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)

  return {
    firstName: parts[0] ?? 'Prospect',
    lastName: parts.slice(1).join(' '),
  }
}

function createId(firstName: string, lastName: string, email: string) {
  const emailName = email.split('@')[0] ?? ''

  return `${firstName}-${lastName}-${emailName}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function normalizeQuestion(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .trim()
}

function getAnswer(questions: CalendlyQuestionAnswer[] | undefined, expectedQuestion: string) {
  if (!questions?.length) {
    return null
  }

  const normalizedExpected = normalizeQuestion(expectedQuestion)

  const result = questions.find((item) => {
    const question = normalizeQuestion(item.question ?? '')

    return question === normalizedExpected
  })

  return result?.answer?.trim() || null
}

function parseDailyRate(value: string | null) {
  if (!value) {
    return null
  }

  const match = value.match(/\d+/)

  if (!match) {
    return null
  }

  const dailyRate = Number(match[0])

  return Number.isFinite(dailyRate) ? dailyRate : null
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return Response.json(
      {
        error: 'Method not allowed',
      },
      {
        status: 405,
      },
    )
  }

  try {
    const body = (await req.json()) as CalendlyWebhook

    // =========================
    // Annulation
    // =========================

    if (body.event === 'invitee.canceled') {
      const inviteeUri = body.payload.uri

      if (!inviteeUri) {
        return Response.json(
          {
            error: 'Missing invitee URI',
          },
          {
            status: 400,
          },
        )
      }

      const { error } = await supabase
        .from('prospects')
        .update({
          status: 'canceled',
        })
        .eq('calendly_invitee_uri', inviteeUri)

      if (error) {
        console.error('Calendly cancellation error:', error)

        return Response.json(
          {
            error: error.message,
          },
          {
            status: 500,
          },
        )
      }

      return Response.json({
        success: true,
        event: 'invitee.canceled',
      })
    }

    // =========================
    // Nouvelle réservation
    // =========================

    if (body.event === 'invitee.created') {
      const inviteeUri = body.payload.uri

      const email = body.payload.email?.trim() ?? ''

      const fullName = body.payload.name?.trim() ?? ''

      const calendlyEventUri = body.payload.scheduled_event?.uri ?? null

      const meetingAt = body.payload.scheduled_event?.start_time ?? null

      if (!inviteeUri || !email) {
        return Response.json(
          {
            error: 'Missing invitee data',
          },
          {
            status: 400,
          },
        )
      }

      const { firstName, lastName } = splitName(fullName)

      const id = createId(firstName, lastName, email)

      const questions = body.payload.questions_and_answers

      const jobTarget = getAnswer(questions, 'Quel est ton métier / expertise ?')

      const searchDuration = getAnswer(
        questions,
        'Depuis combien de temps cherches-tu une mission ?',
      )

      const mainBlocker = getAnswer(questions, 'Quel est ton principal blocage aujourd’hui ?')

      const dailyRateAnswer = getAnswer(questions, 'Quel est ton TJM actuel ?')

      const linkedinUrl = getAnswer(questions, 'Quel est le lien de ton profil LinkedIn ?')

      const additionalContext = getAnswer(
        questions,
        'Facultatif : contexte / précision supplémentaire.',
      )

      const dailyRate = parseDailyRate(dailyRateAnswer)

      const currentSituation = searchDuration ? `Recherche de mission : ${searchDuration}` : null

      const notes = additionalContext || null

      const { error } = await supabase.from('prospects').upsert(
        {
          id,

          owner_id: ownerId,

          first_name: firstName,
          last_name: lastName,
          email,
          linkedin_url: linkedinUrl,

          status: 'meeting',
          qualification: null,
          urgency: 'medium',

          meeting_at: meetingAt,

          job_target: jobTarget,
          current_situation: currentSituation,
          main_blocker: mainBlocker,
          daily_rate: dailyRate,
          notes,

          calendly_invitee_uri: inviteeUri,

          calendly_event_uri: calendlyEventUri,
        },
        {
          onConflict: 'calendly_invitee_uri',
        },
      )

      if (error) {
        console.error('Calendly creation error:', error)

        return Response.json(
          {
            error: error.message,
          },
          {
            status: 500,
          },
        )
      }

      return Response.json({
        success: true,
        event: 'invitee.created',
      })
    }

    // =========================
    // Événement ignoré
    // =========================

    return Response.json({
      ignored: true,
      event: body.event,
    })
  } catch (error) {
    console.error('Unexpected Calendly webhook error:', error)

    return Response.json(
      {
        error: 'Unexpected error',
      },
      {
        status: 500,
      },
    )
  }
})
