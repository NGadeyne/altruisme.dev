<script setup lang="ts">
import { ref } from 'vue'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const isPlaying = ref(false)

const youtubeId = 'TON_ID_YOUTUBE'

const playVideo = () => {
  isPlaying.value = true
}
</script>

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
          <div class="relative aspect-video">
            <!-- YouTube n'est chargé qu'après le clic -->
            <iframe
              v-if="isPlaying"
              class="h-full w-full"
              :src="`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`"
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

            <!-- Preview légère -->
            <button
              v-else
              type="button"
              class="group absolute inset-0 flex h-full w-full items-center justify-center bg-[#dfe9e5] transition hover:bg-[#d9e5e0]"
              aria-label="Lire la vidéo"
              @click="playVideo"
            >
              <!-- Décoration -->
              <div
                class="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f7774]/10 blur-3xl"
              />

              <div class="relative flex flex-col items-center gap-5 px-6 text-center">
                <!-- Play button -->
                <span
                  class="flex h-20 w-20 items-center justify-center rounded-full bg-[#4f7774] shadow-lg shadow-[#31413f]/20 transition duration-300 group-hover:scale-105"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="ml-1 h-8 w-8 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                <div>
                  <p class="text-lg font-semibold text-[#222826]">
                    Découvrir la méthode
                  </p>

                  <p class="mt-1 text-sm text-[#64706c]">
                    Lance la vidéo pour comprendre les étapes.
                  </p>
                </div>
              </div>
            </button>
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
          <BaseButton href="#offres" size="large">
            Choisir mon accompagnement
          </BaseButton>

          <p class="mt-4 text-sm text-[#78827e]">
            Accompagnement personnalisé ou formation en ligne.
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
