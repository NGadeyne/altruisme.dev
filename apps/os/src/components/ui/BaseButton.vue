<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'ghost'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    variant: 'primary',
    disabled: false,
  },
)

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2'

  const variants = {
    primary: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700',
    secondary: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50',
    ghost: 'bg-transparent text-zinc-700 hover:bg-zinc-100',
  }

  const disabled = props.disabled ? 'cursor-not-allowed opacity-50' : ''

  return [base, variants[props.variant], disabled]
})
</script>

<template>
  <RouterLink v-if="to && !disabled" :to="to" :class="classes">
    <slot />
  </RouterLink>

  <span v-else-if="to" :class="classes" aria-disabled="true">
    <slot />
  </span>

  <button v-else :type="type" :disabled="disabled" :class="classes">
    <slot />
  </button>
</template>
