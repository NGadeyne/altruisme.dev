<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')

const loading = ref(false)
const errorMessage = ref('')

async function handleLogin() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Renseigne ton email et ton mot de passe.'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    await authStore.login(email.value, password.value)

    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/formation'

    await router.push(redirect)
  } catch (error) {
    console.error(error)

    errorMessage.value = 'Email ou mot de passe incorrect.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(153deg,#faf7f0_4%,#eef1ec_53%,#d6e5e1_100%)] px-6 py-12"
  >
    <div class="relative w-full max-w-md">
      <!-- Logo / Brand -->
      <div class="mb-8 text-center">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-3"
          aria-label="Altruisme Learn, accueil"
        >
          <span
            class="flex size-10 items-center justify-center rounded-xl border border-petrol/20 bg-petrol/8 text-sm font-bold text-petrol"
            >A.</span
          >
          <span class="text-sm font-bold tracking-tight text-ink">Altruisme Learn</span>
        </RouterLink>

        <h1 class="mt-8 text-3xl font-semibold tracking-tight text-ink">Ton espace apprenant</h1>

        <p class="mt-3 text-sm leading-6 text-muted">
          Connecte-toi pour accéder à ton espace et à tes outils.
        </p>
      </div>

      <!-- Card -->
      <div
        class="rounded-3xl border border-white/80 bg-white/75 p-6 shadow-[0_24px_72px_-48px_rgb(34_70_73_/_0.29)] backdrop-blur-xl sm:p-8"
      >
        <form class="space-y-5" @submit.prevent="handleLogin">
          <!-- Email -->
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-ink"> Email </label>

            <input
              id="email"
              v-model="email"
              type="email"
              autocomplete="email"
              placeholder="ton@email.com"
              class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-light focus:border-petrol focus:ring-2 focus:ring-mist-deep"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-ink">
              Mot de passe
            </label>

            <input
              id="password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              placeholder="••••••••"
              class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-light focus:border-petrol focus:ring-2 focus:ring-mist-deep"
            />
          </div>

          <!-- Error -->
          <div
            v-if="errorMessage"
            class="rounded-xl border border-red-500/20 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {{ errorMessage }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="learn-button-primary flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span v-if="loading"> Connexion... </span>

            <span v-else> Se connecter </span>
          </button>
        </form>

        <div class="mt-6 border-t border-petrol/15 pt-6 text-center">
          <p class="text-xs leading-5 text-muted">
            L'accès à la formation est lié à ton compte Learn.
          </p>
        </div>
      </div>

      <p class="mt-6 text-center text-xs text-muted">
        Un problème avec ton accès ? Contacte-nous directement.
      </p>
    </div>
  </main>
</template>
