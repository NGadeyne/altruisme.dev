<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  lessonNumber: number
  lessonTitle: string
  videoId: string
}>()

const isPlaying = ref(false)
</script>

<template>
  <section class="mt-8" aria-label="Vidéo de la leçon">
    <div
      class="rounded-[1.5rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.8),rgba(218,238,231,.45))] p-1.5 shadow-[0_28px_65px_-38px_rgba(26,63,66,.45)] sm:rounded-[1.8rem] sm:p-2"
    >
      <div class="relative aspect-video overflow-hidden rounded-[1.15rem] bg-[#17363b] sm:rounded-[1.4rem]">
        <button
          v-if="!isPlaying"
          type="button"
          class="video-poster group absolute inset-0 flex w-full flex-col justify-between p-5 text-left text-white focus-visible:outline-3 focus-visible:outline-offset-[-6px] focus-visible:outline-white sm:p-8"
          :aria-label="`Lire la vidéo de démonstration : ${lessonTitle}`"
          @click="isPlaying = true"
        >
          <span
            class="relative z-10 self-start rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm sm:text-xs"
          >
            Altruisme Learn · Leçon {{ String(lessonNumber).padStart(2, '0') }}
          </span>
          <span
            class="relative z-10 flex h-16 w-16 self-center items-center justify-center rounded-full border border-white/60 bg-[#f2f6f0] text-[#2b5358] shadow-[0_12px_36px_rgba(8,31,37,.3)] transition duration-200 group-hover:scale-105 group-hover:bg-white group-focus-visible:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]"
            aria-hidden="true"
          >
            <svg class="ml-1 h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M7 4.7a1 1 0 0 1 1.52-.85l11 7.3a1 1 0 0 1 0 1.7l-11 7.3A1 1 0 0 1 7 19.3V4.7Z"
              />
            </svg>
          </span>
          <span class="relative z-10 block max-w-[90%]">
            <span class="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#bcd5cf] sm:text-xs">
              Vidéo de démonstration
            </span>
            <span class="mt-1.5 block text-base font-semibold leading-snug sm:text-xl">
              {{ lessonTitle }}
            </span>
          </span>
        </button>
        <iframe
          v-else
          class="absolute inset-0 h-full w-full border-0"
          :src="`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`"
          :title="`Vidéo de démonstration : ${lessonTitle}`"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <p class="mt-3 text-center text-xs text-muted">
      Vidéo provisoire · Le contenu de cette leçon arrive bientôt en vidéo.
    </p>
  </section>
</template>

<style scoped>
.video-poster {
  background:
    radial-gradient(circle at 70% 26%, rgb(144 194 181 / 0.28), transparent 37%),
    linear-gradient(145deg, #244b50 4%, #17363b 58%, #102a30 100%);
}

.video-poster::before {
  position: absolute;
  inset: 12% -12%;
  border: 1px solid rgb(219 241 233 / 0.16);
  border-radius: 50%;
  content: '';
  pointer-events: none;
  transform: rotate(-19deg);
}
</style>
