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
          Passer à l’action
        </p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Le guide s’arrête ici.
          <span class="text-petrol">Ton projet peut commencer.</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Une idée à clarifier ou un premier projet à lancer ? La checklist Lance-toi t’aide à
          avancer étape par étape, de l’idée aux premiers retours.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <BaseButton to="/lancement" size="large">Découvrir Lance-toi</BaseButton>
          <BaseButton to="/guides" variant="secondary" size="large"
            >Explorer les autres guides</BaseButton
          >
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
