<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    size?: 'small' | 'default' | 'large' | 'full'
  }>(),
  {
    as: 'div',
    size: 'default',
  },
)

const sizes = {
  small: 'max-w-4xl',
  default: 'max-w-6xl',
  large: 'max-w-7xl',
  full: 'max-w-none',
}
</script>

<template>
  <component :is="as" :class="['mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size]]">
    <slot />
  </component>
</template>
