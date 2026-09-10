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
    class="group flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-fuchsia-200 hover:shadow-md sm:p-5"
  >
    <div
      :class="[
        'flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition',
        status === 'completed'
          ? 'bg-emerald-50 text-emerald-700'
          : status === 'locked'
            ? 'bg-zinc-100 text-zinc-400'
            : 'bg-fuchsia-50 text-fuchsia-700 group-hover:bg-fuchsia-600 group-hover:text-white',
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
          status === 'locked' ? 'text-zinc-400' : 'text-zinc-900',
        ]"
      >
        {{ title }}
      </p>
    </div>

    <div
      :class="[
        'shrink-0 text-lg transition',
        status === 'locked'
          ? 'text-zinc-300'
          : 'text-zinc-400 group-hover:translate-x-1 group-hover:text-fuchsia-600',
      ]"
      aria-hidden="true"
    >
      →
    </div>
  </RouterLink>
</template>
