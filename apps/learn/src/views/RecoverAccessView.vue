<script setup lang="ts">
import EmailCodeAccess from '@/components/courses/EmailCodeAccess.vue'
</script>

<template>
  <main
    class="flex min-h-screen items-center justify-center bg-[linear-gradient(153deg,#faf7f0_4%,#eef1ec_53%,#d6e5e1_100%)] px-6 py-12"
  >
    <div class="w-full max-w-md">
      <RouterLink to="/" class="text-sm font-bold tracking-tight text-ink"
        >Altruisme Learn</RouterLink
      >
      <section class="mt-8 rounded-3xl border border-petrol/15 bg-white/85 p-7 shadow-sm sm:p-9">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-petrol-dark">
          Formation SEO
        </p>
        <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink">Retrouver mon accès</h1>
        <p class="mt-5 text-sm leading-7 text-ink-soft">
          Saisis l’adresse e-mail utilisée lors de ton achat. Tu recevras un code pour vérifier
          cette adresse et choisir ton mot de passe.
        </p>
        <EmailCodeAccess />
        <RouterLink
          to="/login"
          class="mt-7 block text-sm font-semibold text-petrol-dark underline underline-offset-4"
          >Retour à la connexion</RouterLink
        >
      </section>
    </div>
  </main>
</template>
