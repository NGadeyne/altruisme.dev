<template>
  <section id="offres" class="relative overflow-hidden bg-sand-light py-20 sm:py-24 lg:py-28">
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-petrol/8 blur-[140px]"
    />

    <BaseContainer size="large">
      <div class="relative">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Deux façons d’avancer</p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Une seule méthode.
            <span class="text-ink-soft">Choisis le niveau d’accompagnement qui te convient.</span>
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Même méthode, mêmes fondations, même objectif : signer ta prochaine mission freelance.
          </p>
        </div>

        <div class="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-3xl border border-petrol/30 bg-gradient-to-b from-mist to-sand-light p-7 sm:p-8"
          >
            <div
              class="pointer-events-none absolute right-0 top-0 h-52 w-52 translate-x-1/3 -translate-y-1/3 rounded-full bg-petrol/15 blur-[80px]"
            />

            <div class="relative flex h-full flex-col">
              <div class="flex flex-wrap items-center gap-3">
                <span class="rounded-full border border-petrol/20 bg-petrol/10 px-3 py-1 text-xs font-semibold text-petrol">
                  Accompagnement complet
                </span>
                <span class="rounded-full bg-petrol px-3 py-1 text-xs font-semibold text-white">Recommandé</span>
              </div>

              <h3 class="mt-6 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                On construit ta stratégie ensemble.
              </h3>
              <p class="mt-4 max-w-xl text-base leading-7 text-muted">
                Pour les freelances qui veulent être accompagnés personnellement, challengés et
                aidés à passer à l’action jusqu’à leur prochaine mission.
              </p>

              <div class="mt-8">
                <p class="text-sm text-muted-light">Investissement</p>
                <p class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">1 800 € TTC</p>
                <p class="mt-2 text-sm font-medium text-petrol-light">ou 3 × 600 €</p>
              </div>

              <ul class="mt-8 space-y-4">
                <li v-for="item in coachingFeatures" :key="item" class="flex items-start gap-3 text-sm leading-6 text-ink-soft">
                  <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-petrol/10 text-xs font-bold text-petrol">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="mt-auto pt-8">
                <div class="rounded-2xl border border-petrol/15 bg-petrol/5 p-5">
                  <p class="text-sm font-semibold text-ink">Pas de vente forcée.</p>
                  <p class="mt-2 text-sm leading-6 text-muted">
                    On commence par un échange pour faire le point sur ta situation. Si je pense que
                    l’accompagnement n’est pas adapté, je te le dirai simplement.
                  </p>
                </div>

                <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <BaseButton
                    href="https://calendly.com/nicolas-gadeyne/faire-le-point-sur-ta-situation-freelance"
                    size="large"
                    class="w-full shrink-0 sm:w-auto"
                  >
                    Échanger avec Nicolas
                  </BaseButton>

                  <a
                    href="https://docs.google.com/document/d/1qKP2oBU13OI_6yvOstJL3Dgyl9NgSv79Vlm7f58stFQ/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex items-center gap-1 text-sm font-medium text-petrol transition hover:text-petrol-light"
                  >
                    Voir le détail complet
                    <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>

                <p class="mt-4 text-xs leading-5 text-muted-light">
                  Un appel préalable permet de vérifier que l’accompagnement correspond réellement à ta situation.
                </p>
              </div>
            </div>
          </article>

          <article class="relative flex h-full flex-col overflow-hidden rounded-3xl border border-petrol/15 bg-white/45 p-7 sm:p-8">
            <div class="flex h-full flex-col">
              <div>
                <span class="inline-flex rounded-full border border-petrol/15 bg-white/55 px-3 py-1 text-xs font-semibold text-ink-soft">
                  Formation en ligne
                </span>
              </div>

              <h3 class="mt-6 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Applique la méthode à ton rythme.
              </h3>
              <p class="mt-4 max-w-xl text-base leading-7 text-muted">
                Pour les freelances autonomes qui veulent une méthode structurée, des ressources
                concrètes et un plan clair à appliquer seuls.
              </p>

              <div class="mt-8">
                <p class="text-sm text-muted-light">Investissement</p>
                <p class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">697 € TTC</p>
                <p class="mt-2 text-sm font-medium text-petrol-light">ou 3 × 232,33 €</p>
              </div>

              <ul class="mt-8 space-y-4">
                <li v-for="item in courseFeatures" :key="item" class="flex items-start gap-3 text-sm leading-6 text-ink-soft">
                  <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/55 text-xs font-bold text-muted">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="mt-auto pt-8">
                <div class="rounded-2xl border border-petrol/15 bg-petrol/5 p-5">
                  <p class="text-sm font-semibold text-ink">Toute la méthode, sans accompagnement individuel.</p>
                  <p class="mt-2 text-sm leading-6 text-muted">
                    Tu avances étape par étape, à ton rythme, avec les ressources, templates et outils
                    utilisés dans l’accompagnement complet.
                  </p>
                </div>

                <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <BaseButton
                    href="https://calendly.com/nicolas-gadeyne/faire-le-point-sur-ta-situation-freelance"
                    variant="secondary"
                    size="large"
                    class="w-full shrink-0 sm:w-auto"
                  >
                    Échanger avec Nicolas
                  </BaseButton>

                  <a
                    href="https://docs.google.com/document/d/1B0ECqFgdlq7hLRDHuDKbtrfnmKdUViFrQCIln3BirQU/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex items-center gap-1 text-sm font-medium text-petrol transition hover:text-petrol-light"
                  >
                    Voir le programme détaillé
                    <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>

                <p class="mt-4 text-xs leading-5 text-muted-light">
                  Accès à la formation, aux ressources, aux templates et aux replays des ateliers.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div
          class="mt-8 flex flex-col gap-4 rounded-2xl border border-petrol/15 bg-white/35 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="text-sm leading-6 text-muted">
            Tu hésites entre les deux ?
            <span class="font-medium text-ink">Commence simplement par un échange.</span>
            Je t’aiderai à choisir l’option la plus adaptée à ta situation.
          </p>

          <a
            href="https://calendly.com/nicolas-gadeyne/faire-le-point-sur-ta-situation-freelance"
            class="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-petrol transition hover:text-petrol-light"
          >
            Faire le point
            <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const coachingFeatures = [
  'Accès à toute la formation',
  'Rendez-vous individuels avec Nicolas',
  'Ateliers collectifs en direct',
  'Groupe WhatsApp privé',
  'Templates & ressources',
  'Suivi des actions et opportunités',
]

const courseFeatures = [
  'Méthode complète Fondations → Accélération → Signature',
  'Formation accessible à ton rythme',
  'Templates & ressources',
  'Replays des ateliers',
  'Outils de pilotage',
  'Accès en autonomie',
]
</script>
