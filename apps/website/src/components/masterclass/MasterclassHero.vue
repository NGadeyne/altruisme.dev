<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { masterclass } from '@/data/masterclass'

const registrationUrl =
  'https://calendly.com/nicolas-gadeyne/masterclass'
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-sand py-16 sm:py-20 lg:py-24"
  >
    <!-- Fond sable -> brume -> océan -->
    <div
      class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(118deg,#f7f2e9_0%,#efe7db_48%,#dce8e4_100%)]"
    />

    <!-- Lumière centrale -->
    <div
      class="pointer-events-none absolute left-[18%] top-[-260px] -z-10 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-white/55 blur-[170px]"
    />

    <!-- Océan / pétrole -->
    <div
      class="pointer-events-none absolute -right-[220px] top-[8%] -z-10 h-[600px] w-[600px] rounded-full bg-petrol/20 blur-[160px]"
    />

    <!-- Sable chaud -->
    <div
      class="pointer-events-none absolute -bottom-[260px] -left-[180px] -z-10 h-[560px] w-[560px] rounded-full bg-sand-warm/25 blur-[150px]"
    />

    <BaseContainer size="large">
      <div
        class="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
      >
        <!-- Content -->
        <div class="max-w-2xl">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-petrol/20 bg-white/45 px-4 py-2 text-sm font-medium text-petrol shadow-sm shadow-petrol/5 backdrop-blur-md"
          >
            <span class="h-2 w-2 rounded-full bg-petrol" />

            Masterclass gratuite · En live
          </div>

          <!-- Title -->
          <h1
            class="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Tu as loupé la rentrée de septembre ?

            <span class="text-petrol">
              Relance maintenant ta recherche de mission.
            </span>
          </h1>

          <!-- Description -->
          <p
            class="mt-6 max-w-xl text-lg leading-8 text-ink-soft"
          >
            Une masterclass d’une heure pour comprendre pourquoi ta recherche
            bloque encore et savoir où concentrer tes efforts pour créer
            de nouvelles opportunités.
          </p>

          <!-- Urgency -->
          <div
            class="mt-8 border-l-2 border-petrol/30 pl-5"
          >
            <p class="text-sm font-semibold text-petrol">
              Le 22 septembre à 11h · 50 places maximum
            </p>

            <p
              class="mt-2 text-base font-medium leading-7 text-ink"
            >
              Septembre est déjà bien entamé.

              <span class="text-ink-soft">
                Si les opportunités ne sont pas arrivées comme prévu,
                c’est le bon moment pour changer de stratégie.
              </span>
            </p>
          </div>

          <!-- Event info -->
          <div
            class="mt-8 grid max-w-xl gap-4 sm:grid-cols-3"
          >
            <div class="border-t border-petrol/20 pt-4">
              <p
                class="text-xs font-medium uppercase tracking-wider text-muted-light"
              >
                Date
              </p>

              <p class="mt-1 text-sm font-semibold text-ink">
                22 septembre
              </p>
            </div>

            <div class="border-t border-petrol/20 pt-4">
              <p
                class="text-xs font-medium uppercase tracking-wider text-muted-light"
              >
                Heure
              </p>

              <p class="mt-1 text-sm font-semibold text-ink">
                11h00
              </p>
            </div>

            <div class="border-t border-petrol/20 pt-4">
              <p
                class="text-xs font-medium uppercase tracking-wider text-muted-light"
              >
                Durée
              </p>

              <p class="mt-1 text-sm font-semibold text-ink">
                {{ masterclass.duration }}
              </p>
            </div>
          </div>

          <!-- Highlights -->
          <div
            class="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
          >
            <span
              v-for="highlight in masterclass.highlights"
              :key="highlight"
              class="flex items-center gap-2"
            >
              <span class="font-semibold text-petrol">
                ✓
              </span>

              {{ highlight }}
            </span>
          </div>
        </div>

        <!-- Signup card -->
        <div
          id="inscription"
          class="relative overflow-hidden rounded-3xl border border-petrol/20 bg-mist/80 p-6 shadow-xl shadow-petrol-dark/8 sm:p-8"
        >
          <!-- Glow -->
          <div
            class="pointer-events-none absolute right-0 top-0 h-52 w-52 translate-x-1/3 -translate-y-1/3 rounded-full bg-petrol/12 blur-[80px]"
          />

          <div class="relative">
            <p
              class="text-sm font-semibold uppercase tracking-[0.16em] text-petrol"
            >
              Prochaine session
            </p>

            <h2
              class="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Ne laisse pas encore un mois passer.
            </h2>

            <p
              class="mt-3 text-sm leading-6 text-muted"
            >
              Réserve ta place gratuitement et rejoins la session en direct
              pour remettre ta recherche de mission sur les bons rails.
            </p>

            <!-- Event reminder -->
            <div
              class="mt-6 border-y border-petrol/15 py-5"
            >
              <p class="text-sm font-semibold text-ink">
                22 septembre · 11h00
              </p>

              <p class="mt-1 text-sm text-muted">
                {{ masterclass.duration }} · {{ masterclass.format }}
              </p>
            </div>

            <!-- CTA -->
            <div class="mt-6">
              <BaseButton
                :href="registrationUrl"
                size="large"
                class="w-full"
              >
                Réserver ma place gratuitement
              </BaseButton>
            </div>

            <!-- Scarcity -->
            <p
              class="mt-4 text-center text-xs leading-5 text-muted-light"
            >
              Gratuit · En direct · 50 places maximum pour garder
              un format humain et qualitatif
            </p>

            <!-- Attendance note -->
            <div
              class="mt-6 border-t border-petrol/10 pt-5"
            >
              <p class="text-sm leading-6 text-muted">
                <span class="font-medium text-ink">
                  Tu sais déjà que tu ne pourras pas être présent ?
                </span>

                La session est volontairement limitée à 50 personnes
                pour garder un vrai temps d’échange. Dans ce cas,
                laisse simplement ta place à quelqu’un qui pourra
                participer au live.

                Si un replay est proposé, je le partagerai ensuite
                par email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
