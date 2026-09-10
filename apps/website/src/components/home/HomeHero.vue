<template>
  <section class="relative isolate overflow-hidden bg-[#f4efe7]">
    <!-- Fond principal : sable -> brume -> océan -->
    <div
      class="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(120deg,#f7f2e9_0%,#f3ede3_34%,#e7eeeb_68%,#cbdcd8_100%)]"
    />

    <!-- Grande lumière naturelle au centre -->
    <div
      class="pointer-events-none absolute -top-[360px] left-1/2 -z-10 h-[820px] w-[1200px] -translate-x-1/2 rounded-full bg-white/65 blur-[180px]"
    />

    <!-- Océan / pétrole sur la droite -->
    <div
      class="pointer-events-none absolute -right-[260px] top-[5%] -z-10 h-[700px] w-[700px] rounded-full bg-[#4f7774]/24 blur-[180px]"
    />

    <!-- Sable chaud en bas à gauche -->
    <div
      class="pointer-events-none absolute -bottom-[300px] -left-[220px] -z-10 h-[720px] w-[720px] rounded-full bg-[#cdb28d]/28 blur-[175px]"
    />

    <!-- Horizon brumeux -->
    <div
      class="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[260px] w-[1100px] -translate-x-1/2 rounded-[100%] bg-[#dce8e4]/40 blur-[100px]"
    />

    <!-- Petite lumière chaude -->
    <div
      class="pointer-events-none absolute left-[15%] top-[20%] -z-10 h-[300px] w-[300px] rounded-full bg-[#ead7ba]/25 blur-[120px]"
    />

    <!-- Voile global -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,transparent_42%,rgba(255,255,255,0.08)_100%)]"
    />

    <!-- Ligne d'horizon à peine perceptible -->
    <div
      class="pointer-events-none absolute inset-x-[12%] bottom-[15%] -z-10 h-px bg-gradient-to-r from-transparent via-[#4f7774]/10 to-transparent"
    />

    <BaseContainer>
      <div class="relative mx-auto max-w-4xl py-24 text-center sm:py-32 lg:py-36">
        <div
          class="inline-flex items-center rounded-full border border-[#4f7774]/20 bg-white/45 px-4 py-2 text-sm font-medium text-[#4f7774] shadow-sm shadow-[#4f7774]/5 backdrop-blur-md"
        >
          SPRINT MISSION
        </div>

        <h1 class="mt-8 text-4xl font-bold tracking-tight text-[#222826] sm:text-5xl lg:text-6xl">
          Signons ensemble ta
          <span class="text-[#4f7774]">prochaine mission</span>
          freelance !
        </h1>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#46504d] sm:text-xl">
          Une méthode complète pour clarifier ton positionnement, valoriser ton expertise, créer
          plus d’opportunités et les transformer en mission.
        </p>

        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6c7672]">
          Accompagnement personnalisé ou formation en ligne : choisis le niveau d’aide dont tu as
          besoin.
        </p>

        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BaseButton href="#vsl" size="large">Trouver ma prochaine mission</BaseButton>
          <BaseButton href="#offres" variant="secondary" size="large" class="sm:px-5">
            Choisir mon accompagnement
          </BaseButton>
        </div>

        <p class="mx-auto mt-8 max-w-3xl text-sm leading-6 text-[#78827e]">
          Positionnement · Malt · LinkedIn · CV · Acquisition · Prospection · Contenu · Signature
        </p>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>
