<template>
  <section class="border-y border-[#4f7774]/10 bg-[#eef2ef]">
    <BaseContainer>
      <div class="grid grid-cols-2 divide-x divide-y divide-[#4f7774]/15 sm:divide-y-0 lg:grid-cols-4">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="px-4 py-8 text-center sm:px-6 lg:px-8"
          :class="{
            'lg:border-l lg:border-[#4f7774]/15': index > 0,
          }"
        >
          <p class="text-3xl font-bold tracking-tight text-[#222826] sm:text-4xl">
            {{ stat.value }}
          </p>

          <p class="mx-auto mt-2 max-w-[180px] text-sm leading-6 text-[#64706c]">
            {{ stat.label }}
          </p>
        </div>
      </div>

      <p class="border-t border-[#4f7774]/10 py-4 text-center text-xs leading-5 text-[#8d9692]">
        * Délai moyen constaté auprès des freelances accompagnés ayant signé une mission.
      </p>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'

const stats = [
  {
    value: '25+',
    label: 'Freelances accompagnés',
  },
  {
    value: '≈ 40 jours',
    label: 'Pour trouver une mission',
  },
  {
    value: '7+ ans',
    label: 'D’expérience en freelance',
  },
  {
    value: '10+',
    label: 'Métiers IT & Tech accompagnés',
  },
]
</script>
