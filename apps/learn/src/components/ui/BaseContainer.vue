<!-- apps/learn/src/components/ui/BaseContainer.vue -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    size?: 'small' | 'default' | 'large' | 'full'
  }>(),
  {
    as: 'div',
    size: 'large',
  },
)

const sizes = {
  small: 'max-w-3xl',
  default: 'max-w-5xl',
  large: 'max-w-7xl',
  full: 'max-w-none',
}
</script>

<template>
  <component :is="as" :class="['mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size]]">
    <slot />
  </component>
</template>
