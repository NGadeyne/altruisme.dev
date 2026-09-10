<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

defineProps<{
  category: string
  title: string
  description: string
  readingTime?: string
  updatedAt?: string
}>()
</script>

<template>
  <article class="min-h-screen bg-sand">
    <!-- Hero -->
    <header
      class="relative isolate overflow-hidden border-b border-petrol/10 bg-sand py-16 sm:py-20 lg:py-24"
    >
      <!-- Background -->
      <div
        class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_45%,#e4ece8_100%)]"
      />

      <!-- Glow -->
      <div
        class="pointer-events-none absolute left-1/2 top-[-120px] -z-10 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-petrol/12 blur-[150px]"
      />

      <BaseContainer>
        <div class="relative mx-auto max-w-4xl text-center">
          <!-- Category -->
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            {{ category }}
          </p>

          <!-- Title -->
          <h1
            class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {{ title }}
          </h1>

          <!-- Description -->
          <p
            class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted"
          >
            {{ description }}
          </p>

          <!-- Meta -->
          <div
            v-if="readingTime || updatedAt"
            class="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-light"
          >
            <span v-if="readingTime">
              {{ readingTime }} de lecture
            </span>

            <span
              v-if="readingTime && updatedAt"
              class="text-petrol/30"
            >
              •
            </span>

            <span v-if="updatedAt">
              Mis à jour {{ updatedAt }}
            </span>
          </div>
        </div>
      </BaseContainer>
    </header>

    <!-- Content -->
    <section class="bg-sand-light">
      <BaseContainer>
        <div
          class="mx-auto grid max-w-6xl gap-12 py-16 lg:grid-cols-[220px_minmax(0,720px)] lg:justify-center lg:py-20"
        >
          <!-- Table of contents -->
          <aside class="hidden lg:block">
            <div class="sticky top-24">
              <p
                class="text-xs font-semibold uppercase tracking-[0.16em] text-petrol"
              >
                Dans ce guide
              </p>

              <div
                class="mt-4 border-l border-petrol/20 pl-4 text-sm leading-7 text-muted"
              >
                <slot name="toc" />
              </div>
            </div>
          </aside>

          <!-- Guide content -->
          <div class="min-w-0">
            <slot />
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- CTA -->
    <section
      class="border-t border-petrol/10 bg-sand py-16 sm:py-20"
    >
      <BaseContainer>
        <div
          class="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-petrol/15 bg-mist px-6 py-12 text-center sm:px-10 sm:py-14"
        >
          <!-- Glow -->
          <div
            class="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/12 blur-[100px]"
          />

          <div class="relative">
            <p
              class="text-sm font-semibold uppercase tracking-[0.16em] text-petrol"
            >
              Tu veux aller plus loin ?
            </p>

            <h2
              class="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Un guide peut débloquer un sujet.
              <span class="text-ink-soft">
                L’accompagnement permet de travailler l’ensemble.
              </span>
            </h2>

            <p
              class="mx-auto mt-5 max-w-xl text-base leading-7 text-muted"
            >
              Positionnement, profils, prospection, opportunités et signature :
              si tu veux travailler ta recherche de mission dans le bon ordre,
              on peut faire le point ensemble.
            </p>

            <div
              class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <BaseButton
                href="/#offres"
                variant="primary"
                size="large"
              >
                Découvrir l’accompagnement
              </BaseButton>

              <BaseButton
                href="/#vsl"
                variant="secondary"
                size="large"
              >
                Voir la méthode
              </BaseButton>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>
  </article>
</template>
