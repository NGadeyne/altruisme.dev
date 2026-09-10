<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const registrationUrl =
  'https://calendly.com/nicolas-gadeyne/masterclass'

const forYou = [
  'Tu es freelance ou consultant dans l’IT ou la Tech.',
  'Tu cherches actuellement ta prochaine mission.',
  'Tu dépends encore beaucoup des plateformes, des ESN ou de ton réseau.',
  'Tu sais que ton expertise est solide mais ton acquisition manque de structure.',
  'Tu veux créer plus d’opportunités sans passer tes journées à prospecter.',
]

const notForYou = [
  'Tu cherches une promesse de mission garantie en quelques jours.',
  'Tu veux uniquement automatiser des centaines de messages de prospection.',
  'Tu ne souhaites pas retravailler ton positionnement ou tes supports.',
  'Tu cherches une solution qui ne demande aucune mise en action.',
]
</script>

<template>
  <section
    class="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28"
  >
    <BaseContainer>
      <div class="relative">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            Est-ce pour toi ?
          </p>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Cette masterclass est faite pour les freelances

            <span class="text-ink-soft">
              qui ne veulent plus attendre leur prochaine mission.
            </span>
          </h2>

          <p
            class="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            Tu n’as pas besoin d’être commercial.
            Mais tu dois pouvoir créer des opportunités sans dépendre
            entièrement des autres.
          </p>
        </div>

        <!-- Audience -->
        <div
          class="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-14"
        >
          <!-- For -->
          <article class="border-t-2 border-petrol/40 pt-6">
            <p class="text-sm font-semibold text-petrol">
              C’est probablement pour toi si…
            </p>

            <ul class="mt-6 space-y-4">
              <li
                v-for="item in forYou"
                :key="item"
                class="flex items-start gap-3 text-sm leading-6 text-ink-soft"
              >
                <span
                  class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-petrol/10 text-xs font-bold text-petrol"
                >
                  ✓
                </span>

                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <!-- Not for -->
          <article class="border-t border-petrol/20 pt-6">
            <p class="text-sm font-semibold text-muted">
              Ce sera probablement moins adapté si…
            </p>

            <ul class="mt-6 space-y-4">
              <li
                v-for="item in notForYou"
                :key="item"
                class="flex items-start gap-3 text-sm leading-6 text-muted"
              >
                <span class="mt-0.5 text-muted-light">
                  —
                </span>

                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>

        <!-- CTA -->
        <div class="mt-12 text-center">
          <BaseButton
            :href="registrationUrl"
            size="large"
          >
            Réserver ma place gratuitement
          </BaseButton>

          <p class="mt-4 text-sm text-muted-light">
            Gratuit · En direct · Questions / réponses
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
