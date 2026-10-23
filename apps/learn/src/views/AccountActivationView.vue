<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

const status = ref<'checking' | 'ready' | 'invalid'>('checking')
const password = ref('')
const passwordConfirmation = ref('')
const saving = ref(false)
const errorMessage = ref('')

onMounted(async () => {
  const callbackError =
    route.query.error ||
    route.query.error_code ||
    new URLSearchParams(window.location.hash.slice(1)).get('error')

  if (callbackError) {
    status.value = 'invalid'
    return
  }

  try {
    if (authStore.loading) await authStore.initialize()
    if (!authStore.user) {
      status.value = 'invalid'
      return
    }

    if (!authStore.user.invited_at) {
      const access = await authStore.refreshSeoAccess()
      await router.replace({ name: access === 'granted' ? 'dashboard' : 'access-pending' })
      return
    }

    status.value = 'ready'
  } catch {
    status.value = 'invalid'
  }
})

async function activateAccount() {
  errorMessage.value = ''
  if (password.value.length < 8) {
    errorMessage.value = 'Choisis un mot de passe d’au moins 8 caractères.'
    return
  }
  if (password.value !== passwordConfirmation.value) {
    errorMessage.value = 'Les mots de passe ne correspondent pas.'
    return
  }
  if (!authStore.user) {
    status.value = 'invalid'
    return
  }

  saving.value = true
  try {
    await authStore.setPassword(password.value)
    password.value = ''
    passwordConfirmation.value = ''
    const access = await authStore.refreshSeoAccess(true)
    await router.replace({ name: access === 'granted' ? 'dashboard' : 'access-pending' })
  } catch (error) {
    errorMessage.value =
      error instanceof Error && error.message.includes('New password should be different')
        ? 'Ce mot de passe est déjà utilisé pour ce compte. Choisis-en un autre ou connecte-toi avec celui-ci.'
        : 'Impossible d’enregistrer ton mot de passe. Réessaie dans un instant.'
  } finally {
    saving.value = false
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
          Formation SEO · Activation du compte
        </p>

        <template v-if="status === 'checking'">
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">Vérification du lien</h1>
          <p class="mt-4 text-sm leading-7 text-ink-soft" role="status">
            Nous vérifions ton accès sécurisé.
          </p>
        </template>

        <template v-else-if="status === 'invalid'">
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">
            Ce lien n'est plus valide
          </h1>
          <p class="mt-4 text-sm leading-7 text-ink-soft" role="alert">
            Le lien d'activation est invalide ou a expiré. Demande un nouveau lien à l'équipe Learn.
          </p>
          <div class="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="mailto:contact@altruisme.dev?subject=Activation%20Altruisme%20Learn"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
            >
              Demander un nouveau lien
            </a>
            <RouterLink
              to="/login"
              class="text-sm font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            >
              Se connecter
            </RouterLink>
          </div>
        </template>

        <template v-else>
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">
            Choisis ton mot de passe
          </h1>
          <p class="mt-4 text-sm leading-7 text-ink-soft">
            Ton adresse e-mail est vérifiée. Définis ton mot de passe pour accéder à la formation.
          </p>
          <p v-if="authStore.user?.email" class="mt-3 text-sm font-medium text-ink">
            {{ authStore.user.email }}
          </p>

          <form class="mt-7 space-y-5" @submit.prevent="activateAccount">
            <div>
              <label for="activation-password" class="mb-2 block text-sm font-medium text-ink">
                Mot de passe
              </label>
              <input
                id="activation-password"
                v-model="password"
                type="password"
                autocomplete="new-password"
                minlength="8"
                required
                aria-describedby="activation-password-hint"
                class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-petrol focus:ring-2 focus:ring-mist-deep"
              />
              <p id="activation-password-hint" class="mt-2 text-xs text-muted">
                Au moins 8 caractères.
              </p>
            </div>

            <div>
              <label
                for="activation-password-confirmation"
                class="mb-2 block text-sm font-medium text-ink"
              >
                Confirmer le mot de passe
              </label>
              <input
                id="activation-password-confirmation"
                v-model="passwordConfirmation"
                type="password"
                autocomplete="new-password"
                required
                class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-petrol focus:ring-2 focus:ring-mist-deep"
              />
            </div>

            <p v-if="errorMessage" class="text-sm text-red-700" role="alert">
              {{ errorMessage }}
            </p>

            <button
              type="submit"
              :disabled="saving"
              class="learn-button-primary flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ saving ? 'Activation…' : 'Activer mon accès' }}
            </button>
          </form>
        </template>
      </section>
    </div>
  </main>
</template>
