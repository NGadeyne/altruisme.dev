<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const status = ref<'checking' | 'login_required' | 'error'>('checking')
const email = ref('')
const resending = ref(false)
const resendMessage = ref('')

const callbackError =
  route.query.error || new URLSearchParams(window.location.hash.slice(1)).get('error')

onMounted(async () => {
  if (callbackError) {
    status.value = 'error'
    return
  }

  try {
    if (authStore.loading) await authStore.initialize()
    if (!authStore.user) {
      status.value = 'login_required'
      return
    }

    const access = await authStore.refreshSeoAccess()
    await router.replace({ name: access === 'granted' ? 'dashboard' : 'access-pending' })
  } catch {
    status.value = 'error'
  }
})

async function resendEmail() {
  resending.value = true
  resendMessage.value = ''
  try {
    await authStore.resendConfirmation(email.value.trim())
    resendMessage.value = 'Si cette adresse doit être confirmée, un nouvel e-mail a été envoyé.'
  } catch {
    resendMessage.value = 'Impossible de renvoyer l’e-mail pour le moment. Réessaie plus tard.'
  } finally {
    resending.value = false
  }
}
</script>

<template>
  <main
    class="flex min-h-screen items-center justify-center bg-[linear-gradient(153deg,#faf7f0_4%,#eef1ec_53%,#d6e5e1_100%)] px-6 py-12"
  >
    <div class="w-full max-w-md">
      <RouterLink to="/" class="text-sm font-bold tracking-tight text-ink">
        Altruisme Learn
      </RouterLink>

      <section class="mt-8 rounded-3xl border border-petrol/15 bg-white/85 p-7 shadow-sm sm:p-9">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-petrol-dark">
          Confirmation de l’adresse e-mail
        </p>

        <template v-if="status === 'checking'">
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">Vérification en cours</h1>
          <p class="mt-4 text-sm leading-7 text-ink-soft" role="status">
            Nous vérifions le lien de confirmation.
          </p>
        </template>

        <template v-else>
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">
            {{ status === 'error' ? 'Lien non confirmé' : 'Connecte-toi pour continuer' }}
          </h1>
          <p
            class="mt-4 text-sm leading-7 text-ink-soft"
            :role="status === 'error' ? 'alert' : undefined"
          >
            {{
              status === 'error'
                ? 'Ce lien est invalide ou a expiré. Tu peux demander un nouvel e-mail de confirmation.'
                : 'Si tu as déjà confirmé ton adresse, connecte-toi pour accéder à ton compte Learn.'
            }}
          </p>
          <form v-if="status === 'error'" class="mt-6 space-y-3" @submit.prevent="resendEmail">
            <label for="confirmation-email" class="block text-sm font-medium text-ink">
              Adresse e-mail du compte
            </label>
            <input
              id="confirmation-email"
              v-model="email"
              type="email"
              autocomplete="email"
              required
              class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-petrol focus:ring-2 focus:ring-mist-deep"
            />
            <button
              type="submit"
              :disabled="resending"
              class="learn-button-primary rounded-xl px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ resending ? 'Envoi…' : 'Renvoyer le lien' }}
            </button>
            <p v-if="resendMessage" class="text-sm text-ink-soft" role="status">
              {{ resendMessage }}
            </p>
          </form>
          <div class="mt-7 flex flex-wrap gap-4">
            <RouterLink
              to="/login"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
            >
              Se connecter
            </RouterLink>
          </div>
        </template>
      </section>
    </div>
  </main>
</template>
