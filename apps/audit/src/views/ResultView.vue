<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import AppShell from '@/components/AppShell.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import ScoreBar from '@/components/ScoreBar.vue'

import { saveLead } from '@/lib/lead'

import type {
  AuditAnswers,
  AuditResult,
  Dimension,
} from '@/types/audit'

const router = useRouter()

const result = ref<AuditResult | null>(null)
const answers = ref<AuditAnswers>({})

const email = ref('')
const newsletterConsent = ref(false)

const sent = ref(false)
const submitting = ref(false)

const coachingUrl = 'https://altruisme.dev'

const dimensionLabels: Record<Dimension, string> = {
  positionnement: 'Positionnement',
  offre: 'Offre',
  visibilite: 'Visibilité',
  prospection: 'Prospection',
  conversion: 'Conversion',
}

const priorityLabel = computed(() =>
  result.value
    ? dimensionLabels[result.value.priority]
    : '',
)

onMounted(() => {
  const storedResult = sessionStorage.getItem('audit-result')
  const storedAnswers = sessionStorage.getItem('audit-answers')

  if (!storedResult) {
    router.replace('/diagnostic')
    return
  }

  result.value = JSON.parse(storedResult)

  if (storedAnswers) {
    answers.value = JSON.parse(storedAnswers)
  }
})

async function submitLead() {
  if (!result.value || !email.value) return

  submitting.value = true

  try {
    await saveLead({
      email: email.value,
      newsletterConsent: newsletterConsent.value,
      answers: answers.value,
      result: result.value,
    })

    sent.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <AppShell>
    <section
      v-if="result"
      class="relative isolate overflow-hidden bg-sand py-12 sm:py-16 lg:py-20"
    >
      <div
        class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(120deg,#f7f2e9_0%,#f4efe7_42%,#e7eeeb_100%)]"
      />

      <div
        class="pointer-events-none absolute -right-[240px] top-[4%] -z-10 h-[650px] w-[650px] rounded-full bg-petrol/16 blur-[180px]"
      />

      <div
        class="pointer-events-none absolute -bottom-[320px] -left-[200px] -z-10 h-[720px] w-[720px] rounded-full bg-sand-warm/35 blur-[180px]"
      />

      <BaseContainer size="large">
        <div
          class="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_360px]"
        >
          <div class="grid gap-5">
            <!-- Diagnostic principal -->
            <div
              class="overflow-hidden rounded-[2rem] border border-petrol/15 bg-white/62 p-7 shadow-2xl shadow-petrol-dark/8 backdrop-blur-xl sm:p-9"
            >
              <div
                class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <p
                    class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
                  >
                    Ton diagnostic
                  </p>

                  <div
                    class="mt-4 text-7xl font-bold tracking-[-0.06em] text-ink sm:text-8xl"
                  >
                    {{ result.globalScore }}

                    <span
                      class="ml-1 text-xl font-semibold tracking-normal text-muted-light"
                    >
                      /100
                    </span>
                  </div>
                </div>

                <div
                  class="w-fit rounded-full border border-petrol/15 bg-mist/80 px-4 py-2 text-sm font-semibold text-petrol-dark"
                >
                  Priorité : {{ priorityLabel }}
                </div>
              </div>

              <h1
                class="mt-7 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
              >
                Ton principal frein :
                <span class="text-petrol">
                  {{ priorityLabel }}
                </span>
              </h1>

              <p
                class="mt-5 max-w-3xl text-base leading-7 text-ink-soft sm:text-lg"
              >
                {{ result.summary }}
              </p>
            </div>

            <!-- Scores -->
            <div
              class="rounded-[2rem] border border-petrol/12 bg-white/68 p-7 shadow-xl shadow-petrol-dark/5 backdrop-blur-lg sm:p-8"
            >
              <p
                class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
              >
                Vue d’ensemble
              </p>

              <h2
                class="mt-3 text-2xl font-bold tracking-tight text-ink"
              >
                Tes scores
              </h2>

              <div class="mt-6 grid gap-5">
                <ScoreBar
                  v-for="(score, dimension) in result.scores"
                  :key="dimension"
                  :label="dimensionLabels[dimension as Dimension]"
                  :score="score"
                />
              </div>
            </div>

            <!-- Analyse + plan -->
            <div class="grid gap-5 md:grid-cols-2">
              <div
                class="rounded-[2rem] border border-petrol/12 bg-white/68 p-7 shadow-xl shadow-petrol-dark/5 backdrop-blur-lg sm:p-8"
              >
                <p
                  class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
                >
                  Analyse
                </p>

                <h2
                  class="mt-3 text-2xl font-bold tracking-tight text-ink"
                >
                  Pourquoi ce diagnostic ?
                </h2>

                <ul class="mt-5 grid gap-4">
                  <li
                    v-for="item in result.why"
                    :key="item"
                    class="flex gap-3 text-sm leading-6 text-ink-soft sm:text-base"
                  >
                    <span
                      class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol"
                    />

                    <span>
                      {{ item }}
                    </span>
                  </li>
                </ul>
              </div>

              <div
                class="rounded-[2rem] border border-petrol/12 bg-mist/75 p-7 shadow-xl shadow-petrol-dark/5 backdrop-blur-lg sm:p-8"
              >
                <p
                  class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
                >
                  Plan d’action
                </p>

                <h2
                  class="mt-3 text-2xl font-bold tracking-tight text-ink"
                >
                  Tes 3 priorités
                </h2>

                <ol class="mt-5 grid gap-4">
                  <li
                    v-for="(item, idx) in result.priorities"
                    :key="item"
                    class="flex gap-4 text-sm leading-6 text-ink-soft sm:text-base"
                  >
                    <span
                      class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-petrol text-xs font-bold text-white"
                    >
                      {{ idx + 1 }}
                    </span>

                    <span>
                      {{ item }}
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <!-- Stop doing -->
            <div
              class="rounded-[2rem] border border-sand-warm bg-sand-light/85 p-7 sm:p-8"
            >
              <p
                class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
              >
                Garde ton énergie
              </p>

              <h2
                class="mt-3 text-2xl font-bold tracking-tight text-ink"
              >
                Ce que tu peux arrêter de faire pour le moment
              </h2>

              <ul class="mt-5 grid gap-3">
                <li
                  v-for="item in result.stopDoing"
                  :key="item"
                  class="flex gap-3 text-sm leading-6 text-ink-soft sm:text-base"
                >
                  <span
                    class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light"
                  />

                  <span>
                    {{ item }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="grid gap-5 lg:sticky lg:top-24">
            <!-- CTA -->
            <div
              class="relative isolate overflow-hidden rounded-[2rem] border border-petrol/20 bg-petrol-dark p-7 shadow-2xl shadow-petrol-dark/10"
            >
              <div
                class="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-petrol-light/35 blur-[100px]"
              />

              <p
                class="text-sm font-semibold uppercase tracking-[0.18em] text-mist-deep"
              >
                Passer à l’action
              </p>

              <h2
                class="mt-3 text-2xl font-bold tracking-tight text-sand-light"
              >
                Tu sais maintenant où agir.
              </h2>

              <p
                class="mt-4 text-sm leading-6 text-[#dce8e4]"
              >
                La prochaine étape est de transformer ce diagnostic en actions
                concrètes.
              </p>

              <p
                class="mt-3 text-sm leading-6 text-[#dce8e4]"
              >
                Si tu veux, on peut regarder ensemble ta situation, identifier
                les priorités et voir comment accélérer ta recherche de mission.
              </p>

              <BaseButton
                :href="coachingUrl"
                variant="secondary"
                class="mt-6 w-full"
              >
                Prendre rendez-vous
              </BaseButton>
            </div>

            <!-- Email -->
            <div
              class="rounded-[2rem] border border-petrol/12 bg-white/72 p-7 shadow-xl shadow-petrol-dark/5 backdrop-blur-lg"
            >
              <template v-if="!sent">
                <p
                  class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
                >
                  Par email
                </p>

                <h2
                  class="mt-3 text-2xl font-bold tracking-tight text-ink"
                >
                  Garde ton diagnostic
                </h2>

                <p
                  class="mt-3 text-sm leading-6 text-ink-soft"
                >
                  Reçois ton résultat par email, avec quelques ressources
                  adaptées à ta situation.
                </p>

                <form
                  class="mt-6"
                  @submit.prevent="submitLead"
                >
                  <input
                    v-model="email"
                    type="email"
                    required
                    placeholder="ton@email.com"
                    class="h-13 w-full rounded-xl border border-petrol/15 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-muted-light focus:border-petrol/40 focus:ring-4 focus:ring-petrol/10"
                  />

                  <label
                    class="mt-4 flex items-start gap-3 text-xs leading-5 text-muted"
                  >
                    <input
                      v-model="newsletterConsent"
                      type="checkbox"
                      class="mt-1 accent-[#4f7774]"
                    />

                    <span>
                      Je souhaite aussi recevoir les prochains conseils et
                      ressources pour signer une mission freelance.
                    </span>
                  </label>

                  <BaseButton
                    type="submit"
                    :disabled="submitting"
                    class="mt-5 w-full"
                  >
                    {{
                      submitting
                        ? 'Envoi…'
                        : 'M’envoyer mon diagnostic'
                    }}
                  </BaseButton>
                </form>

                <p
                  class="mt-4 text-xs leading-5 text-muted-light"
                >
                  Ton email est utilisé pour t’envoyer ce diagnostic. La
                  newsletter reste optionnelle.
                </p>
              </template>

              <template v-else>
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-petrol"
                >
                  ✓
                </div>

                <p
                  class="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
                >
                  C’est enregistré
                </p>

                <h2
                  class="mt-2 text-2xl font-bold tracking-tight text-ink"
                >
                  Diagnostic sauvegardé.
                </h2>

                <p
                  class="mt-3 text-sm leading-6 text-ink-soft"
                >
                  Tu peux maintenant continuer avec les recommandations
                  ci-dessus.
                </p>
              </template>
            </div>
          </aside>
        </div>
      </BaseContainer>
    </section>
  </AppShell>
</template>
