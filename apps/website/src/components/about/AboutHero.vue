<template>
  <section
    class="relative isolate overflow-hidden bg-sand py-20 sm:py-24 lg:py-28"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(125deg,#f7f2e9_0%,#f3ede3_42%,#e4ece8_100%)]"
    />

    <div
      class="pointer-events-none absolute -right-[220px] top-[-100px] -z-10 h-[620px] w-[620px] rounded-full bg-petrol/18 blur-[160px]"
    />

    <div
      class="pointer-events-none absolute -left-[180px] bottom-[-240px] -z-10 h-[560px] w-[560px] rounded-full bg-sand-warm/30 blur-[150px]"
    />

    <BaseContainer>
      <div
        class="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16"
      >
        <!-- Content -->
        <div class="max-w-2xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol"
          >
            À propos
          </p>

          <h1
            class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Je suis Nicolas.

            <span class="text-ink-soft">
              J’ai été freelance dans l’IT pendant 7 ans.
            </span>
          </h1>

          <p
            class="mt-6 text-lg leading-8 text-muted"
          >
            Product Manager de métier, j’ai passé ces années entre produit,
            tech, delivery et clients.
          </p>

          <p
            class="mt-4 text-base leading-7 text-muted sm:text-lg"
          >
            J’ai connu les plateformes, les ESN, les clients finaux,
            les missions qui s’enchaînent… mais aussi les périodes où
            la question devient beaucoup plus simple :
          </p>

          <p
            class="mt-6 text-2xl font-semibold tracking-tight text-ink"
          >
            “Comment je trouve la prochaine mission ?”
          </p>

          <p
            class="mt-6 max-w-xl text-base leading-7 text-muted"
          >
            Aujourd’hui, j’accompagne des freelances IT & Tech pour qu’ils
            n’aient plus à dépendre uniquement d’une plateforme,
            d’un recruteur ou du hasard pour trouver leurs prochaines opportunités.
          </p>

          <!-- Stats -->
          <div
            class="mt-10 grid max-w-xl grid-cols-3 divide-x divide-petrol/15 border-y border-petrol/15 py-5"
          >
            <div class="pr-4">
              <p class="text-2xl font-bold text-ink">
                7+
              </p>

              <p class="mt-1 text-xs leading-5 text-muted-light">
                ans comme freelance
              </p>
            </div>

            <div class="px-4">
              <p class="text-2xl font-bold text-ink">
                25+
              </p>

              <p class="mt-1 text-xs leading-5 text-muted-light">
                freelances accompagnés
              </p>
            </div>

            <div class="pl-4">
              <p class="text-2xl font-bold text-ink">
                10+
              </p>

              <p class="mt-1 text-xs leading-5 text-muted-light">
                métiers IT & Tech
              </p>
            </div>
          </div>
        </div>

        <!-- Visual -->
        <div class="relative">
          <div
            class="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-petrol/15 bg-white/45 p-2"
          >
            <div
              class="aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-sand-warm"
            >
              <img
                src="/src/assets/nico.png"
                alt="Nicolas Gadeyne"
                class="h-full w-full object-cover"
              />
            </div>

            <!-- Floating note -->
            <div
              class="absolute bottom-6 left-6 right-6 rounded-2xl border border-petrol/15 bg-sand/90 p-4 backdrop-blur-xl"
            >
              <p
                class="text-sm font-semibold text-ink"
              >
                Le terrain avant les recettes.
              </p>

              <p
                class="mt-1 text-xs leading-5 text-muted"
              >
                Ce que je transmets aujourd’hui vient d’abord de ce que
                j’ai vécu en freelance, puis de dizaines d’accompagnements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>
