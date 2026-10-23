<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const checking = ref(false)
const checkMessage = ref('')

async function checkAccess() {
  checkMessage.value = ''
  checking.value = true
  try {
    const access = await authStore.refreshSeoAccess(true)
    if (access === 'granted') {
      await router.replace({ name: 'dashboard' })
    } else if (access === 'denied') {
      checkMessage.value = "Ton accès n'est pas encore confirmé. Réessaie dans quelques instants."
    } else {
      checkMessage.value = "Nous n'arrivons pas à vérifier ton accès. Réessaie dans un instant."
    }
  } catch {
    checkMessage.value = "Nous n'arrivons pas à vérifier ton accès. Réessaie dans un instant."
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
    <div class="w-full max-w-2xl">
      <RouterLink to="/" class="text-sm font-bold tracking-tight text-ink">
        Altruisme Learn
      </RouterLink>

      <section class="mt-8 rounded-3xl border border-petrol/15 bg-white/85 p-7 shadow-sm sm:p-10">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-petrol-dark">
          Altruisme Learn · Formation SEO
        </p>

        <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ton accès à la formation est en cours de vérification
        </h1>
        <p class="mt-5 text-base leading-7 text-ink-soft">
          Si tu viens de payer, la confirmation peut prendre quelques instants. Dès que ton accès
          sera validé, tu pourras retrouver la formation SEO dans ton espace Learn.
        </p>

        <p
          v-if="authStore.seoAccessStatus === 'error'"
          class="mt-5 text-sm leading-7 text-red-700"
          role="alert"
        >
          La vérification est temporairement indisponible. Réessaie dans un instant.
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
        </div>

        <p v-if="checkMessage" class="mt-4 text-sm leading-6 text-ink-soft" role="status">
          {{ checkMessage }}
        </p>

        <p class="mt-8 border-t border-petrol/10 pt-6 text-sm leading-6 text-muted">
          Tu n'as pas encore réglé la formation ?
          <RouterLink
            to="/paiement"
            class="font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            Accéder au paiement
          </RouterLink>
        </p>
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
