<script setup lang="ts">
withDefaults(
  defineProps<{
    number: number
    title: string
    slug: string
    status?: 'available' | 'completed' | 'locked'
  }>(),
  {
    status: 'available',
  },
)
</script>

<template>
  <RouterLink
    :to="{
      name: 'lesson',
      params: {
        lessonSlug: slug,
      },
    }"
    class="group flex w-full items-center gap-4 rounded-2xl border border-petrol/20 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-petrol/25 hover:shadow-md sm:p-5"
  >
    <div
      :class="[
        'flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition',
        status === 'completed'
          ? 'bg-emerald-50 text-emerald-700'
          : status === 'locked'
            ? 'bg-mist text-muted-light'
            : 'bg-mist text-petrol-dark group-hover:bg-petrol-dark group-hover:text-white',
      ]"
    >
      <span v-if="status === 'completed'"> ✓ </span>

      <span v-else>
        {{ String(number).padStart(2, '0') }}
      </span>
    </div>

    <div class="min-w-0 flex-1">
      <p
        :class="[
          'font-semibold leading-6',
          status === 'locked' ? 'text-muted-light' : 'text-petrol-dark',
        ]"
      >
        {{ title }}
      </p>
    </div>

    <div
      :class="[
        'shrink-0 text-lg transition',
        status === 'locked'
          ? 'text-petrol/35'
          : 'text-muted-light group-hover:translate-x-1 group-hover:text-petrol-dark',
      ]"
      aria-hidden="true"
    >
      →
    </div>
  </RouterLink>
</template>
