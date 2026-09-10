<script setup lang="ts">
import AboutHero from '@/components/about/AboutHero.vue'
import AboutStory from '@/components/about/AboutStory.vue'
import AboutPrinciples from '@/components/about/AboutPrinciples.vue'
import AboutPersonal from '@/components/about/AboutPersonal.vue'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <main class="min-h-screen bg-[#f4efe7]">
    <!-- Hero -->
    <AboutHero />

    <!-- Parcours + pourquoi -->
    <AboutStory />

    <!-- Manière d'accompagner -->
    <AboutPrinciples />

    <!-- Plus personnel -->
    <AboutPersonal />

    <!-- Final CTA -->
    <section class="relative overflow-hidden bg-[#f4efe7] py-20 sm:py-24 lg:py-28">
      <BaseContainer>
        <div
          class="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#4f7774]/20 bg-[#31413f] px-6 py-14 text-center shadow-2xl shadow-[#31413f]/10 sm:px-10 sm:py-16"
        >
          <div class="pointer-events-none absolute left-1/2 top-[-260px] -z-10 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-[#668c89]/30 blur-[140px]" />
          <div class="pointer-events-none absolute -bottom-48 -left-28 -z-10 h-96 w-96 rounded-full bg-[#d6b98f]/12 blur-[120px]" />

          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#a9c1bd]">
            Et maintenant ?
          </p>

          <h2
            class="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-[#f7f2e9] sm:text-4xl lg:text-5xl"
          >
            Si tu cherches ta prochaine mission,
            <span class="text-[#a9c1bd]"> on peut simplement en parler. </span>
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#d8e1de] sm:text-lg">
            On fait le point sur ta situation, ce qui bloque aujourd’hui et les actions qui peuvent
            réellement faire la différence.
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BaseButton
              to="/contact"
              size="large"
              class="!bg-[#f4efe7] !text-[#31413f] hover:!bg-white"
            >
              Échanger avec Nicolas
            </BaseButton>

            <BaseButton
              href="/#vsl"
              variant="secondary"
              size="large"
              class="!border-white/15 !bg-white/8 !text-[#f7f2e9] hover:!bg-white/12"
            >
              Découvrir la méthode
            </BaseButton>
          </div>

          <p class="mt-6 text-sm text-[#aebdb9]">
            Aucun engagement · Pas de vente forcée · Un échange concret
          </p>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>
