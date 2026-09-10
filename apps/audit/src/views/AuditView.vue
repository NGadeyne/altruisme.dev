<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppShell from '@/components/AppShell.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { questions } from '@/data/questions'
import { calculateDiagnostic } from '@/lib/diagnostic'
import type { AuditAnswers, Dimension } from '@/types/audit'

const router = useRouter()
const answers = ref<AuditAnswers>({})
const index = ref(0)
const current = computed(() => questions[index.value])
const progress = computed(() => Math.round(((index.value + 1) / questions.length) * 100))

const dimensionLabels: Record<Dimension, string> = {
  positionnement: 'Positionnement',
  offre: 'Offre',
  visibilite: 'Visibilité',
  prospection: 'Prospection',
  conversion: 'Conversion',
}

const currentAnswered = computed(() => {
  const value = answers.value[current.value.id]
  return !current.value.required || (value !== undefined && value !== '')
})

function next() {
  if (!currentAnswered.value) return
  if (index.value < questions.length - 1) index.value += 1
  else finish()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function previous() {
  if (index.value > 0) index.value -= 1
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function choose(value: string) {
  answers.value[current.value.id] = value
}

function finish() {
  const result = calculateDiagnostic(answers.value)
  sessionStorage.setItem('audit-answers', JSON.stringify(answers.value))
  sessionStorage.setItem('audit-result', JSON.stringify(result))
  router.push('/resultat')
}
</script>

<template>
  <AppShell>
    <section class="relative isolate min-h-[calc(100vh-64px)] overflow-hidden bg-sand py-10 sm:py-14 lg:py-16">
      <div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(120deg,#f7f2e9_0%,#f4efe7_45%,#edf3f0_100%)]" />
      <div class="pointer-events-none absolute -right-[260px] top-[5%] -z-10 h-[620px] w-[620px] rounded-full bg-petrol/16 blur-[170px]" />
      <div class="pointer-events-none absolute -bottom-[260px] -left-[180px] -z-10 h-[600px] w-[600px] rounded-full bg-sand-warm/40 blur-[160px]" />

      <BaseContainer size="small">
        <div class="mb-5 flex items-center justify-between gap-4 text-sm font-semibold text-muted">
          <span>Question {{ index + 1 }} / {{ questions.length }}</span>
          <span>{{ progress }}%</span>
        </div>

        <div class="h-2 overflow-hidden rounded-full bg-white/65 shadow-inner shadow-petrol/5">
          <div
            class="h-full rounded-full bg-gradient-to-r from-petrol-light to-petrol transition-[width] duration-300"
            :style="{ width: `${progress}%` }"
          />
        </div>

        <div class="mt-6 overflow-hidden rounded-[2rem] border border-petrol/15 bg-white/62 p-6 shadow-2xl shadow-petrol-dark/8 backdrop-blur-xl sm:p-9 lg:p-11">
          <div class="max-w-3xl">
            <p v-if="current.dimension" class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">
              {{ dimensionLabels[current.dimension] }}
            </p>
            <p v-else class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Ton contexte</p>

            <h1 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.7rem] lg:leading-[1.08]">
              {{ current.label }}
            </h1>
            <p v-if="current.helper" class="mt-4 max-w-2xl text-base leading-7 text-muted">
              {{ current.helper }}
            </p>
          </div>

          <div v-if="current.type === 'choice'" class="mt-8 grid gap-3">
            <button
              v-for="answer in current.answers"
              :key="answer.value"
              type="button"
              class="group flex w-full items-center justify-between gap-5 rounded-2xl border px-5 py-4 text-left transition duration-200"
              :class="answers[current.id] === answer.value
                ? 'border-petrol/45 bg-mist/90 shadow-sm shadow-petrol/8'
                : 'border-petrol/10 bg-white/72 hover:-translate-y-0.5 hover:border-petrol/25 hover:bg-white'"
              @click="choose(answer.value)"
            >
              <span class="text-[15px] font-medium leading-6 text-ink-soft sm:text-base">{{ answer.label }}</span>
              <span
                class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition"
                :class="answers[current.id] === answer.value ? 'border-petrol' : 'border-petrol/25 group-hover:border-petrol/45'"
              >
                <span v-if="answers[current.id] === answer.value" class="h-2.5 w-2.5 rounded-full bg-petrol" />
              </span>
            </button>
          </div>

          <input
            v-else-if="current.type === 'number'"
            v-model.number="answers[current.id]"
            type="number"
            min="0"
            class="mt-8 h-14 w-full rounded-2xl border border-petrol/15 bg-white/80 px-5 text-base text-ink outline-none transition placeholder:text-muted-light focus:border-petrol/40 focus:ring-4 focus:ring-petrol/10"
            placeholder="Ex. 550"
          />

          <input
            v-else
            v-model="answers[current.id]"
            type="text"
            class="mt-8 h-14 w-full rounded-2xl border border-petrol/15 bg-white/80 px-5 text-base text-ink outline-none transition placeholder:text-muted-light focus:border-petrol/40 focus:ring-4 focus:ring-petrol/10"
          />

          <div class="mt-8 flex flex-col-reverse gap-3 border-t border-petrol/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <BaseButton variant="secondary" :disabled="index === 0" @click="previous">Retour</BaseButton>
            <BaseButton :disabled="!currentAnswered" @click="next">
              {{ index === questions.length - 1 ? 'Voir mon diagnostic' : 'Continuer' }}
            </BaseButton>
          </div>
        </div>

        <p class="mt-5 text-center text-xs leading-5 text-muted-light">Tes réponses restent dans ton navigateur jusqu’à l’affichage du résultat.</p>
      </BaseContainer>
    </section>
  </AppShell>
</template>
