<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'
</script>
<template>
  <section
    data-checklist-cta
    class="relative overflow-hidden border-t border-petrol/10 bg-mist py-16 sm:py-20"
  >
    <div
      class="pointer-events-none absolute -right-20 -top-32 h-[360px] w-[360px] rounded-full bg-petrol/10 blur-[110px]"
    />
    <BaseContainer>
      <div class="relative mx-auto max-w-4xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.17em] text-petrol">
          Ressource gratuite
        </p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Et si ton site méritait
          <span class="text-petrol">plus de visibilité ?</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Découvre notre checklist SEO gratuite : 9 points essentiels pour améliorer ton
          référencement sur Google et les moteurs IA.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <BaseButton to="/checklist" size="large">Recevoir la checklist SEO</BaseButton>
          <BaseButton to="/guides" variant="secondary" size="large"
            >Explorer les autres guides</BaseButton
          >
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
