<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { startSeoCheckout } from '@/services/checkout'

const route = useRoute()
const submitting = ref(false)
const errorMessage = ref('')

async function continueToPayment() {
  if (submitting.value) return
  submitting.value = true
  errorMessage.value = ''
  try {
    await startSeoCheckout()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Impossible d’ouvrir le paiement.'
    submitting.value = false
  }
}
</script>

<template>
  <main
    class="flex min-h-screen items-center justify-center bg-[linear-gradient(153deg,#faf7f0_4%,#eef1ec_53%,#d6e5e1_100%)] px-6 py-12"
  >
    <div class="w-full max-w-2xl">
      <RouterLink to="/" class="text-sm font-bold tracking-tight text-ink">
        Altruisme Learn
      </RouterLink>

      <section class="mt-8 rounded-3xl border border-petrol/15 bg-white/85 p-7 shadow-sm sm:p-10">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-petrol-dark">
          Formation SEO
        </p>
        <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Récapitulatif de ta commande
        </h1>
        <p class="mt-5 text-base leading-7 text-ink-soft">
          Apprends à analyser ton site, à améliorer tes pages et à construire une méthode SEO que tu
          pourras appliquer à ton rythme.
        </p>

        <div class="mt-8 rounded-2xl border border-petrol/15 bg-mist/50 p-5 sm:p-6">
          <div class="flex flex-wrap items-baseline justify-between gap-3">
            <h2 class="text-lg font-semibold text-ink">Formation SEO</h2>
            <p class="text-2xl font-semibold tracking-tight text-ink">27 € TTC</p>
          </div>
          <ul
            class="mt-5 grid gap-2 border-t border-petrol/15 pt-5 text-sm leading-6 text-ink-soft sm:grid-cols-2"
          >
            <li>10 modules · 31 leçons au programme</li>
            <li>10 mises en pratique</li>
            <li>5 ressources pratiques</li>
            <li>Un plan d'action personnel</li>
          </ul>
        </div>

        <p class="mt-7 text-sm leading-6 text-ink-soft">
          Après le paiement, tu recevras un code par e-mail à saisir sur Learn. Tu pourras ensuite choisir ton mot de passe et ouvrir la formation.
          Si tu as déjà un compte Learn avec la même adresse e-mail, connecte-toi avec ton mot de
          passe habituel.
        </p>

        <p v-if="route.query.annule" class="mt-5 text-sm text-ink-soft" role="status">
          Paiement annulé. Tu peux réessayer quand tu le souhaites.
        </p>
        <p v-if="errorMessage" class="mt-5 text-sm text-red-700" role="alert">
          {{ errorMessage }}
        </p>

        <button
          type="button"
          :disabled="submitting"
          class="learn-button-primary mt-7 rounded-xl px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
          @click="continueToPayment"
        >
          {{ submitting ? 'Redirection…' : 'Passer au paiement' }}
        </button>

        <p class="mt-7 border-t border-petrol/15 pt-6 text-sm text-muted">
          Tu as déjà accès à la formation ?
          <RouterLink
            to="/login"
            class="font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            Se connecter
          </RouterLink>
        </p>
      </section>

      <RouterLink
        to="/"
        class="mt-6 inline-block text-sm font-medium text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
      >
        Retour à la formation
      </RouterLink>
    </div>
  </main>
</template>
