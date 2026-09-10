<template>
  <section id="vsl" class="relative overflow-hidden bg-[#edf3f0] py-20 sm:py-24 lg:py-28">
    <!-- Glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f7774]/10 blur-[140px]"
    />

    <BaseContainer>
      <div class="relative mx-auto max-w-5xl">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7774]">
            La méthode en quelques minutes
          </p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl lg:text-5xl">
            Comprends comment
            <span class="text-[#4f7774]"> signer ta prochaine mission. </span>
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64706c] sm:text-lg">
            Je t’explique comment structurer ta recherche de mission, créer plus d’opportunités et
            avancer avec une méthode claire.
          </p>
        </div>

        <!-- Video -->
        <div
          class="relative mt-12 overflow-hidden rounded-3xl border border-[#4f7774]/15 bg-[#e9e2d7] shadow-xl shadow-[#31413f]/10"
        >
          <div class="aspect-video">
            <iframe
              class="h-full w-full"
              src="https://www.youtube.com/embed/TON_ID_YOUTUBE"
              title="Comment signer sa prochaine mission freelance"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              allowfullscreen
            />
          </div>
        </div>

        <!-- Reassurance -->
        <div
          class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#78827e]"
        >
          <span>Une méthode complète</span>

          <span class="hidden text-[#a0aaa5] sm:inline"> • </span>

          <span>Sans prospection agressive</span>

          <span class="hidden text-[#a0aaa5] sm:inline"> • </span>

          <span>Pensée pour les freelances IT & Tech</span>
        </div>

        <!-- CTA -->
        <div class="mt-8 text-center">
          <BaseButton href="#offres" size="large"> Choisir mon accompagnement </BaseButton>

          <p class="mt-4 text-sm text-[#78827e]">
            Accompagnement personnalisé ou formation en ligne.
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>
