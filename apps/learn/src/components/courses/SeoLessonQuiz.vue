<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'

import type { QuizChoice, QuizQuestion } from '@/types/quiz'

const props = defineProps<{ questions: QuizQuestion[]; intro: string }>()

const answers = ref<Record<number, QuizChoice | undefined>>({})
const submitted = ref(false)
const formElement = ref<HTMLFormElement | null>(null)

const answeredCount = computed(
  () => props.questions.filter((question) => answers.value[question.id] !== undefined).length,
)
const score = computed(
  () =>
    props.questions.filter((question) => answers.value[question.id] === question.correct).length,
)

function checkAnswers() {
  if (answeredCount.value === props.questions.length) submitted.value = true
}

async function retry() {
  answers.value = {}
  submitted.value = false
  await nextTick()
  formElement.value?.querySelector<HTMLInputElement>('input[type="radio"]')?.focus()
}
</script>

<template>
  <section
    id="verifie-tes-connaissances"
    aria-labelledby="quiz-title"
    class="mt-14 rounded-3xl border border-petrol/15 bg-white p-6 shadow-sm sm:p-8"
  >
    <h2 id="quiz-title" class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
      Vérifie tes connaissances
    </h2>
    <p class="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
      {{ props.intro }}
    </p>

    <form ref="formElement" class="mt-8 space-y-8" @submit.prevent="checkAnswers">
      <fieldset v-for="question in props.questions" :key="question.id" class="min-w-0">
        <legend class="text-base font-semibold leading-7 text-ink">
          Question {{ question.id }} — {{ question.prompt }}
        </legend>
        <div class="mt-4 grid gap-2">
          <label
            v-for="option in question.options"
            :key="option.letter"
            class="flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-6 transition focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-petrol"
            :class="
              submitted && option.letter === question.correct
                ? 'border-petrol/40 bg-mist text-ink'
                : submitted && answers[question.id] === option.letter
                  ? 'border-rose-300 bg-rose-50 text-ink'
                  : answers[question.id] === option.letter
                    ? 'border-petrol/40 bg-mist/70 text-ink'
                    : 'border-petrol/15 bg-white text-ink-soft hover:border-petrol/35'
            "
          >
            <input
              v-model="answers[question.id]"
              type="radio"
              :name="`quiz-question-${question.id}`"
              :value="option.letter"
              :disabled="submitted"
              required
              class="mt-1 size-4 shrink-0 accent-[#315960]"
            />
            <span
              ><strong class="font-semibold">{{ option.letter }}.</strong> {{ option.text }}</span
            >
          </label>
        </div>
        <p v-if="submitted" class="mt-3 text-sm font-semibold text-petrol-dark">
          {{ answers[question.id] === question.correct ? 'Bonne réponse.' : 'À revoir.' }}
        </p>
      </fieldset>

      <div class="flex flex-wrap items-center gap-4 border-t border-petrol/15 pt-6">
        <button
          v-if="!submitted"
          type="submit"
          :disabled="answeredCount !== props.questions.length"
          class="learn-button-primary rounded-xl px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        >
          Vérifier mes réponses
        </button>
        <button
          v-else
          type="button"
          class="rounded-xl border border-petrol/25 bg-white px-5 py-3 text-sm font-semibold text-petrol-dark transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          @click="retry"
        >
          Réessayer
        </button>
        <p v-if="!submitted" class="text-sm text-muted">
          {{ answeredCount }} / {{ props.questions.length }} réponses
        </p>
        <p v-else class="text-sm font-semibold text-petrol-dark" role="status">
          {{ score }} bonne{{ score > 1 ? 's' : '' }} réponse{{ score > 1 ? 's' : '' }} sur
          {{ props.questions.length }}.
        </p>
      </div>
    </form>

    <div v-if="submitted" class="mt-8 rounded-2xl border border-petrol/15 bg-mist/60 p-5 sm:p-6">
      <h3 class="text-lg font-semibold text-ink">Correction</h3>
      <ol class="mt-4 space-y-4 text-sm leading-7 text-ink-soft">
        <li v-for="question in props.questions" :key="question.id">
          <strong class="font-semibold text-ink"
            >Question {{ question.id }} : {{ question.correct }}.</strong
          >
          {{ question.explanation }}
        </li>
      </ol>
    </div>
  </section>
</template>
