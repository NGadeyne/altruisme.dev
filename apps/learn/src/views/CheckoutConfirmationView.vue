<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import EmailCodeAccess from '@/components/courses/EmailCodeAccess.vue'
import { checkCheckoutAccess, clearCheckoutClaim } from '@/services/checkout'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const sessionId = typeof route.query.session_id === 'string' ? route.query.session_id : ''
const status = ref<'checking' | 'new' | 'existing' | 'unavailable'>('checking')
const email = ref('')
const errorMessage = ref('')

async function checkAccess() {
  if (!sessionId) {
    status.value = 'unavailable'
    return
  }
  status.value = 'checking'
  errorMessage.value = ''
  try {
    if (authStore.loading) await authStore.initialize()
    const result = await checkCheckoutAccess(sessionId)
    email.value = result.email
    status.value = result.status
    clearCheckoutClaim(sessionId)
    if (
      result.status === 'existing' &&
      authStore.user?.email?.toLowerCase() === result.email.trim().toLowerCase() &&
      (await authStore.refreshSeoAccess(true)) === 'granted'
    ) {
      await router.replace({ name: 'dashboard' })
    }
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Impossible de vérifier le paiement.'
    status.value = 'unavailable'
  }
}

onMounted(checkAccess)
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
          Formation SEO
        </p>

        <template v-if="status === 'checking'">
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">
            Vérification du paiement
          </h1>
          <p class="mt-5 text-sm leading-7 text-ink-soft" role="status">
            Nous préparons ton accès à la formation…
          </p>
        </template>

        <template v-else-if="status === 'new'">
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">
            Confirme ton adresse e-mail
          </h1>
          <p class="mt-5 text-sm leading-7 text-ink-soft">
            Ton paiement est confirmé. Saisis le code reçu par e-mail, puis choisis ton mot de passe
            ici pour ouvrir la formation.
          </p>
          <EmailCodeAccess :initial-email="email" auto-send />
        </template>

        <template v-else-if="status === 'existing'">
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">
            Ta formation est prête
          </h1>
          <p class="mt-5 text-sm leading-7 text-ink-soft">
            Ton achat est associé à ton compte Learn. Connecte-toi avec ton mot de passe habituel
            pour ouvrir la formation.
          </p>
          <p v-if="email" class="mt-3 text-sm font-medium text-ink">{{ email }}</p>
          <p v-if="errorMessage" class="mt-4 text-sm text-red-700" role="alert">
            {{ errorMessage }}
          </p>
          <RouterLink
            to="/login?redirect=/formations/seo"
            class="learn-button-primary mt-7 inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Se connecter
          </RouterLink>
          <RouterLink
            to="/recuperer-acces"
            class="mt-4 block text-sm font-semibold text-petrol-dark underline underline-offset-4"
          >
            Mot de passe oublié ?
          </RouterLink>
        </template>

        <template v-else>
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">Vérifions ton accès</h1>
          <p class="mt-5 text-sm leading-7 text-ink-soft">
            Nous ne pouvons pas vérifier cette page automatiquement. Ton paiement n'est pas perdu.
          </p>
          <p v-if="errorMessage" class="mt-4 text-sm text-red-700" role="alert">
            {{ errorMessage }}
          </p>
          <button
            v-if="sessionId"
            type="button"
            class="learn-button-primary mt-7 rounded-xl px-5 py-3 text-sm font-semibold"
            @click="checkAccess"
          >
            Réessayer
          </button>
          <RouterLink
            v-else
            to="/recuperer-acces"
            class="learn-button-primary mt-7 inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Retrouver mon accès
          </RouterLink>
          <RouterLink
            v-if="sessionId"
            to="/recuperer-acces"
            class="mt-4 block text-sm font-semibold text-petrol-dark underline underline-offset-4"
          >
            Retrouver mon accès par e-mail
          </RouterLink>
        </template>

        <p class="mt-6 text-sm text-muted">
          Un problème d'accès ? Écris-nous à
          <a
            class="font-semibold text-petrol-dark underline underline-offset-4"
            href="mailto:contact@altruisme.dev?subject=Acc%C3%A8s%20Altruisme%20Learn"
            >contact@altruisme.dev</a
          >.
        </p>
      </section>
    </div>
  </main>
</template>
