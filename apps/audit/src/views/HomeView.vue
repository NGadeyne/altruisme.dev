<script setup lang="ts">
import AppShell from '@/components/AppShell.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <AppShell>
    <section class="relative isolate overflow-hidden bg-sand">
      <div class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(120deg,#f7f2e9_0%,#f3ede3_34%,#e7eeeb_68%,#cbdcd8_100%)]" />
      <div class="pointer-events-none absolute -top-[360px] left-1/2 -z-10 h-[820px] w-[1200px] -translate-x-1/2 rounded-full bg-white/65 blur-[180px]" />
      <div class="pointer-events-none absolute -right-[260px] top-[5%] -z-10 h-[700px] w-[700px] rounded-full bg-petrol/24 blur-[180px]" />
      <div class="pointer-events-none absolute -bottom-[300px] -left-[220px] -z-10 h-[720px] w-[720px] rounded-full bg-[#cdb28d]/28 blur-[175px]" />
      <div class="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[260px] w-[1100px] -translate-x-1/2 rounded-[100%] bg-mist-deep/40 blur-[100px]" />
      <div class="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,transparent_42%,rgba(255,255,255,0.08)_100%)]" />

      <BaseContainer size="large">
        <div class="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-32">
          <div>
            <div class="inline-flex items-center rounded-full border border-petrol/20 bg-white/45 px-4 py-2 text-sm font-medium text-petrol shadow-sm shadow-petrol/5 backdrop-blur-md">
              DIAGNOSTIC FREELANCE IT & TECH
            </div>

            <h1 class="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Pourquoi tu ne signes pas encore ta
              <span class="text-petrol">prochaine mission ?</span>
            </h1>

            <p class="mt-6 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">
              En quelques minutes, identifie le maillon qui bloque réellement ton acquisition : positionnement, offre, visibilité, prospection ou conversion.
            </p>

            <div class="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BaseButton to="/diagnostic" size="large">Faire mon diagnostic</BaseButton>
              <p class="text-sm font-medium text-muted-light">Résultat complet immédiat · Gratuit · Sans inscription</p>
            </div>

            <p class="mt-8 text-sm leading-6 text-muted-light">
              30 questions · environ 5 minutes · recommandations personnalisées
            </p>
          </div>

          <div class="relative">
            <div class="absolute -inset-5 rounded-[2.5rem] bg-white/25 blur-2xl" />
            <div class="relative overflow-hidden rounded-[2rem] border border-petrol/15 bg-white/58 p-7 shadow-2xl shadow-petrol-dark/10 backdrop-blur-xl sm:p-9">
              <div class="flex items-start justify-between gap-6">
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.18em] text-petrol">Exemple de diagnostic</p>
                  <p class="mt-2 text-sm text-muted">Score global</p>
                </div>
                <span class="rounded-full border border-petrol/15 bg-mist/80 px-3 py-1.5 text-xs font-semibold text-petrol-dark">Priorité détectée</span>
              </div>

              <div class="mt-5 text-6xl font-bold tracking-[-0.06em] text-ink sm:text-7xl">
                58<span class="ml-1 text-xl font-semibold tracking-normal text-muted-light">/100</span>
              </div>

              <div class="mt-6 rounded-2xl border border-petrol/15 bg-sand-light/70 p-5">
                <p class="text-sm font-semibold text-muted">Ton principal frein</p>
                <h2 class="mt-1 text-2xl font-bold tracking-tight text-ink">La prospection</h2>
                <p class="mt-3 text-sm leading-6 text-ink-soft">
                  Ton positionnement est suffisamment solide. Ta priorité est maintenant de générer davantage de conversations qualifiées.
                </p>
              </div>

              <div class="mt-6 grid gap-3">
                <div class="flex items-center justify-between rounded-xl border border-petrol/10 bg-white/55 px-4 py-3 text-sm">
                  <span class="font-medium text-ink-soft">Positionnement</span><strong class="text-petrol-dark">72/100</strong>
                </div>
                <div class="flex items-center justify-between rounded-xl border border-petrol/15 bg-mist/75 px-4 py-3 text-sm">
                  <span class="font-semibold text-ink">Prospection</span><strong class="text-petrol-dark">32/100</strong>
                </div>
                <div class="flex items-center justify-between rounded-xl border border-petrol/10 bg-white/55 px-4 py-3 text-sm">
                  <span class="font-medium text-ink-soft">Conversion</span><strong class="text-petrol-dark">55/100</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="bg-sand-light py-16 sm:py-20">
      <BaseContainer>
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Pas un quiz gadget</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Un diagnostic construit comme un funnel.</h2>
          <p class="mt-5 text-base leading-7 text-ink-soft sm:text-lg">
            L’outil ne se contente pas de chercher ta plus mauvaise note. Il identifie le premier maillon qui limite réellement ta recherche de mission, puis te donne les actions prioritaires.
          </p>
        </div>
      </BaseContainer>
    </section>
  </AppShell>
</template>
