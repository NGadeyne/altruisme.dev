<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    href?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
)

const variants = {
  primary: 'learn-button-primary',
  secondary:
    'border border-petrol/20 bg-white text-[#315960] hover:bg-mist focus-visible:outline-petrol',
  ghost: 'bg-transparent text-[#3d6970] hover:bg-mist focus-visible:outline-petrol',
}

const sizes = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-5 py-3 text-sm',
  large: 'px-6 py-3.5 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="[baseClasses, variants[variant], sizes[size]]">
    <slot />
  </RouterLink>

  <a v-else-if="href" :href="href" :class="[baseClasses, variants[variant], sizes[size]]">
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[baseClasses, variants[variant], sizes[size]]"
  >
    <slot />
  </button>
</template>
