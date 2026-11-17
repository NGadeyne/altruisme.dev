<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const props = withDefaults(
  defineProps<{
    initialEmail?: string
    autoSend?: boolean
  }>(),
  { initialEmail: '', autoSend: false },
)

const authStore = useAuthStore()
const router = useRouter()
const email = ref(props.initialEmail)
const code = ref('')
const password = ref('')
const confirmation = ref('')
const stage = ref<'email' | 'code' | 'password'>('email')
const busy = ref(false)
const errorMessage = ref('')

async function sendCode() {
  if (busy.value || !email.value.trim()) return
  busy.value = true
  errorMessage.value = ''
  try {
    email.value = email.value.trim().toLowerCase()
    await authStore.sendEmailCode(email.value)
    stage.value = 'code'
  } catch {
    errorMessage.value = 'Impossible d’envoyer le code. Réessaie dans un instant.'
  } finally {
    busy.value = false
  }
}

async function verifyCode() {
  if (busy.value || !code.value.trim()) return
  busy.value = true
  errorMessage.value = ''
  try {
    await authStore.verifyEmailCode(email.value, code.value.trim())
    stage.value = 'password'
  } catch {
    errorMessage.value = 'Code invalide ou expiré. Vérifie ton e-mail et réessaie.'
  } finally {
    busy.value = false
  }
}

async function finish() {
  if (busy.value) return
  errorMessage.value = ''
  if (password.value.length < 8) {
    errorMessage.value = 'Choisis un mot de passe d’au moins 8 caractères.'
    return
  }
  if (password.value !== confirmation.value) {
    errorMessage.value = 'Les mots de passe ne correspondent pas.'
    return
  }
  busy.value = true
  try {
    await authStore.setPassword(password.value)
    password.value = ''
    confirmation.value = ''
    const access = await authStore.refreshSeoAccess(true)
    await router.replace({ name: access === 'granted' ? 'dashboard' : 'access-pending' })
  } catch {
    errorMessage.value = 'Impossible de finaliser ton accès. Réessaie dans un instant.'
  } finally {
    busy.value = false
  }
}

onMounted(() => {
  if (props.autoSend && email.value) void sendCode()
})
</script>

<template>
  <div>
    <form v-if="stage === 'email'" class="mt-7 space-y-5" @submit.prevent="sendCode">
      <div>
        <label for="access-email" class="mb-2 block text-sm font-medium text-ink"
          >Adresse e-mail</label
        >
        <input
          id="access-email"
          v-model="email"
          type="email"
          autocomplete="email"
          required
          :readonly="Boolean(initialEmail)"
          class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-petrol focus:ring-2 focus:ring-mist-deep"
        />
      </div>
      <button
        type="submit"
        :disabled="busy"
        class="learn-button-primary w-full rounded-xl px-5 py-3 text-sm font-semibold disabled:opacity-60"
      >
        {{ busy ? 'Envoi du code…' : 'Recevoir un code par e-mail' }}
      </button>
    </form>

    <form v-else-if="stage === 'code'" class="mt-7 space-y-5" @submit.prevent="verifyCode">
      <p class="text-sm leading-6 text-ink-soft">
        Saisis le code envoyé à <strong class="text-ink">{{ email }}</strong
        >. Vérifie aussi tes courriers indésirables.
      </p>
      <div>
        <label for="access-code" class="mb-2 block text-sm font-medium text-ink">Code e-mail</label>
        <input
          id="access-code"
          v-model="code"
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          required
          class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm tracking-widest text-ink outline-none focus:border-petrol focus:ring-2 focus:ring-mist-deep"
        />
      </div>
      <button
        type="submit"
        :disabled="busy"
        class="learn-button-primary w-full rounded-xl px-5 py-3 text-sm font-semibold disabled:opacity-60"
      >
        {{ busy ? 'Vérification…' : 'Vérifier le code' }}
      </button>
      <button
        type="button"
        :disabled="busy"
        class="text-sm font-semibold text-petrol-dark underline underline-offset-4 disabled:opacity-60"
        @click="sendCode"
      >
        Renvoyer un code
      </button>
    </form>

    <form v-else class="mt-7 space-y-5" @submit.prevent="finish">
      <p class="text-sm leading-6 text-ink-soft">
        Adresse vérifiée. Choisis un mot de passe pour ouvrir la formation.
      </p>
      <div>
        <label for="access-password" class="mb-2 block text-sm font-medium text-ink"
          >Mot de passe</label
        >
        <input
          id="access-password"
          v-model="password"
          type="password"
          autocomplete="new-password"
          minlength="8"
          required
          class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-petrol focus:ring-2 focus:ring-mist-deep"
        />
      </div>
      <div>
        <label for="access-confirmation" class="mb-2 block text-sm font-medium text-ink"
          >Confirmer le mot de passe</label
        >
        <input
          id="access-confirmation"
          v-model="confirmation"
          type="password"
          autocomplete="new-password"
          minlength="8"
          required
          class="w-full rounded-xl border border-petrol/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-petrol focus:ring-2 focus:ring-mist-deep"
        />
      </div>
      <button
        type="submit"
        :disabled="busy"
        class="learn-button-primary w-full rounded-xl px-5 py-3 text-sm font-semibold disabled:opacity-60"
      >
        {{ busy ? 'Ouverture de la formation…' : 'Accéder à la formation' }}
      </button>
    </form>

    <p v-if="errorMessage" class="mt-4 text-sm text-red-700" role="alert">{{ errorMessage }}</p>
  </div>
</template>
