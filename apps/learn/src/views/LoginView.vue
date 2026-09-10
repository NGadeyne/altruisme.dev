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

    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/'

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
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 py-12"
  >
    <!-- Glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]"
    />

    <div class="relative w-full max-w-md">
      <!-- Logo / Brand -->
      <div class="mb-8 text-center">
        <div
          class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10"
        >
          <span class="text-xl font-bold text-fuchsia-400"> A </span>
        </div>

        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-400">
          Acquisition
        </p>

        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white">Ton espace membre</h1>

        <p class="mt-3 text-sm leading-6 text-zinc-400">
          Connecte-toi pour accéder à ta formation et à tes outils.
        </p>
      </div>

      <!-- Card -->
      <div
        class="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8"
      >
        <form class="space-y-5" @submit.prevent="handleLogin">
          <!-- Email -->
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-zinc-200"> Email </label>

            <input
              id="email"
              v-model="email"
              type="email"
              autocomplete="email"
              placeholder="ton@email.com"
              class="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-fuchsia-500/60 focus:ring-2 focus:ring-fuchsia-500/10"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-zinc-200">
              Mot de passe
            </label>

            <input
              id="password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              placeholder="••••••••"
              class="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-fuchsia-500/60 focus:ring-2 focus:ring-fuchsia-500/10"
            />
          </div>

          <!-- Error -->
          <div
            v-if="errorMessage"
            class="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            {{ errorMessage }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="flex w-full items-center justify-center rounded-xl bg-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span v-if="loading"> Connexion... </span>

            <span v-else> Se connecter </span>
          </button>
        </form>

        <div class="mt-6 border-t border-white/10 pt-6 text-center">
          <p class="text-xs leading-5 text-zinc-500">
            Ton accès est créé manuellement après ton inscription à l'accompagnement.
          </p>
        </div>
      </div>

      <p class="mt-6 text-center text-xs text-zinc-600">
        Un problème avec ton accès ? Contacte-nous directement.
      </p>
    </div>
  </main>
</template>
