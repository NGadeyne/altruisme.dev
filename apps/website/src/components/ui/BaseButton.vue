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

const sizes = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-5 py-3 text-sm',
  large: 'px-6 py-3.5 text-base',
}

const baseClasses = [
  'base-button',
  'inline-flex',
  'items-center',
  'justify-center',
  'rounded-xl',
  'font-semibold',
  'leading-none',
  'transition-all',
  'duration-200',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-[#4f7774]/35',
  'focus-visible:ring-offset-2',
  'focus-visible:ring-offset-[#f4efe7]',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
].join(' ')
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[
      baseClasses,
      `base-button--${variant}`,
      sizes[size],
    ]"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="href"
    :href="href"
    :class="[
      baseClasses,
      `base-button--${variant}`,
      sizes[size],
    ]"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[
      baseClasses,
      `base-button--${variant}`,
      sizes[size],
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
/* =========================================================
   BASE
   ========================================================= */

.base-button {
  cursor: pointer;
  text-decoration: none;
  transform: translateY(0);
}

/* Le contenu du slot garde toujours la couleur du bouton */
.base-button,
.base-button :deep(*) {
  color: inherit !important;
}

/* =========================================================
   PRIMARY
   Petrol + white
   ========================================================= */

.base-button--primary {
  background-color: #4f7774 !important;
  color: #ffffff !important;

  box-shadow:
    0 4px 6px -1px rgb(79 119 116 / 0.15),
    0 2px 4px -2px rgb(79 119 116 / 0.15);
}

.base-button--primary:hover {
  background-color: #456b68 !important;
  color: #ffffff !important;

  transform: translateY(-2px);

  box-shadow:
    0 10px 15px -3px rgb(79 119 116 / 0.18),
    0 4px 6px -4px rgb(79 119 116 / 0.18);
}

/* =========================================================
   SECONDARY
   Light background + dark petrol
   ========================================================= */

.base-button--secondary {
  border: 1px solid rgb(79 119 116 / 0.25);

  background-color: rgb(255 255 255 / 0.72) !important;
  color: #31413f !important;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.base-button--secondary:hover {
  border-color: rgb(79 119 116 / 0.4);

  background-color: #ffffff !important;
  color: #222826 !important;

  transform: translateY(-2px);
}

/* =========================================================
   GHOST
   ========================================================= */

.base-button--ghost {
  background-color: transparent !important;
  color: #64706c !important;
}

.base-button--ghost:hover {
  background-color: rgb(79 119 116 / 0.08) !important;
  color: #222826 !important;

  transform: translateY(-2px);
}

/* =========================================================
   DISABLED
   ========================================================= */

.base-button[aria-disabled='true'],
.base-button:disabled {
  cursor: not-allowed;
  transform: none;
}
</style>
