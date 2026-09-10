<template>
  <section class="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
    <div
      class="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-petrol/8 blur-[140px]"
    />

    <BaseContainer>
      <div class="relative">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">La transformation</p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Arrête de subir ta recherche de mission.
            <span class="text-ink-soft">Construis un système qui travaille avec toi.</span>
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            L’objectif n’est pas de multiplier les actions. C’est de savoir lesquelles comptent vraiment.
          </p>
        </div>

        <div class="mt-14 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
          <article class="border-y border-petrol/15 py-8 lg:py-10">
            <p class="text-sm font-semibold text-muted-light">Avant</p>
            <h3 class="mt-3 text-2xl font-semibold text-ink">Une recherche dispersée.</h3>

            <ul class="mt-6 space-y-4">
              <li v-for="item in before" :key="item" class="flex items-start gap-3 text-sm leading-6 text-muted">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <div class="hidden items-center justify-center lg:flex" aria-hidden="true">
            <div class="flex h-11 w-11 items-center justify-center rounded-full border border-petrol/20 bg-sand text-petrol">→</div>
          </div>

          <article class="relative border-y border-petrol/25 py-8 lg:py-10">
            <p class="text-sm font-semibold text-petrol">Après</p>
            <h3 class="mt-3 text-2xl font-semibold text-ink">Une stratégie claire et maîtrisée.</h3>

            <ul class="mt-6 space-y-4">
              <li v-for="item in after" :key="item" class="flex items-start gap-3 text-sm leading-6 text-ink-soft">
                <span
                  class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-petrol/10 text-xs font-bold text-petrol"
                >
                  ✓
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>

        <div class="mt-14 grid gap-10 border-t border-petrol/15 pt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p class="text-sm font-semibold text-petrol">C’est pour toi si…</p>
            <ul class="mt-5 space-y-3">
              <li v-for="item in forYou" :key="item" class="flex items-start gap-3 text-sm leading-6 text-ink-soft">
                <span class="mt-1 text-petrol">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold text-ink-soft">Ce n’est probablement pas pour toi si…</p>
            <ul class="mt-5 space-y-3">
              <li v-for="item in notForYou" :key="item" class="flex items-start gap-3 text-sm leading-6 text-muted">
                <span class="mt-1 text-muted-light">—</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const before = [
  'Tu comptes surtout sur Malt, les ESN ou ton réseau.',
  'Tu ne sais pas toujours quelles actions prioriser.',
  'Tu prospectes surtout quand la fin de mission approche.',
  'Tes supports présentent tes compétences sans vraiment vendre ta valeur.',
]

const after = [
  'Ton positionnement est clair et facile à comprendre.',
  'Tes profils racontent tous la même histoire.',
  'Tu sais où trouver les bonnes opportunités.',
  'Tu avances avec une routine simple et régulière.',
]

const forYou = [
  'Tu es freelance ou consultant dans l’IT / la Tech.',
  'Tu as déjà une vraie expertise métier ou technique.',
  'Tu veux générer plus d’opportunités sans prospecter au hasard.',
  'Tu es prêt à appliquer la méthode et passer à l’action.',
]

const notForYou = [
  'Tu cherches une méthode miracle sans rien changer.',
  'Tu veux envoyer des centaines de messages automatisés.',
  'Tu refuses totalement de travailler ton positionnement.',
  'Tu attends qu’une mission arrive sans créer d’opportunités.',
]
</script>
