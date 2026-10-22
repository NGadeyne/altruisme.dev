<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const checking = ref(false)

async function checkAccess() {
  checking.value = true
  try {
    if ((await authStore.refreshSeoAccess(true)) === 'granted') {
      await router.replace({ name: 'dashboard' })
    }
  } finally {
    checking.value = false
  }
}

async function logout() {
  await authStore.logout()
  await router.replace({ name: 'login' })
}
</script>

<template>
  <main
    class="flex min-h-screen items-center justify-center bg-[linear-gradient(153deg,#faf7f0_4%,#eef1ec_53%,#d6e5e1_100%)] px-6 py-12"
  >
    <div class="w-full max-w-xl">
      <RouterLink to="/" class="text-sm font-bold tracking-tight text-ink">
        Altruisme Learn
      </RouterLink>

      <section class="mt-8 rounded-3xl border border-petrol/15 bg-white/85 p-7 shadow-sm sm:p-10">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-petrol-dark">
          Formation SEO
        </p>
        <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ton compte Learn est prêt
        </h1>
        <p
          v-if="authStore.seoAccessStatus === 'error'"
          class="mt-5 text-sm leading-7 text-ink-soft"
          role="alert"
        >
          Nous n'arrivons pas à vérifier ton accès pour le moment. Réessaie dans quelques instants.
        </p>
        <p v-else class="mt-5 text-sm leading-7 text-ink-soft">
          L'accès à la formation SEO n'est pas encore activé pour ce compte. Tu pourras la retrouver
          ici dès que ton accès aura été confirmé.
        </p>

        <p v-if="authStore.user?.email" class="mt-5 text-sm text-muted">
          Compte connecté : <span class="font-medium text-ink">{{ authStore.user.email }}</span>
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            :disabled="checking"
            class="learn-button-primary rounded-xl px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
            @click="checkAccess"
          >
            {{ checking ? 'Vérification…' : 'Vérifier mon accès' }}
          </button>
          <RouterLink
            to="/"
            class="rounded-xl border border-petrol/20 px-5 py-3 text-sm font-semibold text-petrol-dark transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            Découvrir la formation
          </RouterLink>
        </div>
      </section>

      <button
        type="button"
        class="mt-6 text-sm font-medium text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        @click="logout"
      >
        Se déconnecter
      </button>
    </div>
  </main>
</template>
