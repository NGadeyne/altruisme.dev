<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'
</script>
<template>
  <section class="relative overflow-hidden border-t border-petrol/10 bg-mist py-16 sm:py-20">
    <div
      class="pointer-events-none absolute -right-20 -top-32 h-[360px] w-[360px] rounded-full bg-petrol/10 blur-[110px]"
    />
    <BaseContainer>
      <div class="relative mx-auto max-w-4xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.17em] text-petrol">
          Continuer la discussion
        </p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Le guide s’arrête ici.
          <span class="text-petrol">La communauté continue.</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Questions, retours d’expérience, désaccords, idées à approfondir : rejoins la communauté
          Altruisme.DEV pour prolonger les sujets du guide avec d’autres personnes qui construisent
          dans la tech.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <BaseButton to="/communaute" size="large">Rejoindre la communauté</BaseButton>
          <BaseButton to="/guides" variant="secondary" size="large"
            >Explorer les autres guides</BaseButton
          >
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
