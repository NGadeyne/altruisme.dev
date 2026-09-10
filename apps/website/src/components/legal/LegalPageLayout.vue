<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

defineProps<{
  title: string
  description?: string
  updatedAt?: string
}>()
</script>

<template>
  <main class="min-h-screen bg-[#f4efe7]">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-[#4f7774]/10 py-16 sm:py-20 lg:py-24">
      <div
        class="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[#4f7774]/10 blur-[140px]"
      />

      <BaseContainer>
        <div class="relative mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7774]">
            Informations légales
          </p>

          <h1 class="mt-4 text-4xl font-bold tracking-tight text-[#222826] sm:text-5xl">
            {{ title }}
          </h1>

          <p
            v-if="description"
            class="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64706c] sm:text-lg"
          >
            {{ description }}
          </p>

          <p v-if="updatedAt" class="mt-5 text-sm text-[#8d9692]">
            Dernière mise à jour : {{ updatedAt }}
          </p>
        </div>
      </BaseContainer>
    </section>

    <!-- Content -->
    <section class="py-16 sm:py-20">
      <BaseContainer>
        <div class="mx-auto max-w-3xl">
          <div
            class="space-y-12 text-base leading-7 text-[#64706c] [&_a]:!text-[#4f7774] [&_a:hover]:!text-[#668c89] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[#222826] [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#222826] [&_li]:leading-7 [&_strong]:font-semibold [&_strong]:text-[#31413f]"
          >
            <slot />
          </div>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>
