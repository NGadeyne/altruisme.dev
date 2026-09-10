<template>
  <section class="relative overflow-hidden bg-sand-light py-20 sm:py-24 lg:py-28">
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-petrol-dark/5" />

    <BaseContainer>
      <div
        class="relative isolate overflow-hidden rounded-[2rem] border border-petrol/20 bg-petrol-dark px-6 py-14 text-center shadow-2xl shadow-petrol-dark/10 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        <div
          class="pointer-events-none absolute left-1/2 top-[-280px] -z-10 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-petrol-light/30 blur-[150px]"
        />
        <div
          class="pointer-events-none absolute -bottom-[240px] -left-[120px] -z-10 h-[520px] w-[520px] rounded-full bg-sand-warm/15 blur-[140px]"
        />

        <div class="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-mist-deep backdrop-blur-sm">
          Ta prochaine mission commence ici
        </div>

        <h2 class="mx-auto mt-6 max-w-4xl text-3xl font-bold tracking-tight text-sand-light sm:text-4xl lg:text-5xl">
          Tu as déjà l’expertise.
          <span class="text-[#c5d7d3]">Construisons maintenant les opportunités qui vont avec.</span>
        </h2>

        <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#e0e8e5] sm:text-lg">
          Choisis simplement la manière dont tu veux avancer : accompagné personnellement ou en
          autonomie avec la méthode complète.
        </p>

        <div class="mt-9 flex justify-center">
          <BaseButton to="/contact" variant="secondary" size="large">
            Trouver ma prochaine mission
          </BaseButton>
        </div>

        <p class="mt-7 text-sm leading-6 text-[#bdcbc7]">
          Pas de vente forcée · Un premier échange pour faire le point · Une méthode pensée pour les
          freelances IT & Tech
        </p>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>
