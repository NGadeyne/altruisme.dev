<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <BaseContainer>
    <header
      class="rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10 lg:p-12"
    >
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d6970]">
        Altruisme Learn · Formation SEO
      </p>
      <h1 class="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">Assistant SEO</h1>
      <p class="mt-4 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
        Un espace pour t'accompagner dans la mise en pratique de ta formation.
      </p>
    </header>

    <section class="mt-10 rounded-2xl border border-petrol/15 bg-white p-6 sm:p-8">
      <h2 class="text-lg font-semibold text-ink">En préparation</h2>
      <p class="mt-2 max-w-2xl text-sm leading-7 text-muted sm:text-base">
        L'assistant SEO n'est pas encore disponible. En attendant, retrouve les exercices et les
        actions de ta formation dans « Mon plan d'action ».
      </p>
      <RouterLink
        :to="{ name: 'learning-plan' }"
        class="mt-5 inline-flex rounded-sm text-sm font-semibold text-petrol-dark underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
      >
        Ouvrir mon plan d'action →
      </RouterLink>
    </section>
  </BaseContainer>
</template>
