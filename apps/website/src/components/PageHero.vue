<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'

defineProps<{ titleId: string }>()
</script>

<template>
  <section class="page-hero" :aria-labelledby="titleId">
    <BaseContainer size="large">
      <div class="page-hero-content">
        <p class="page-hero-eyebrow">
          <span class="page-hero-dot" aria-hidden="true" />
          <slot name="eyebrow" />
        </p>
        <h1 :id="titleId" class="page-hero-title"><slot name="title" /></h1>
        <p v-if="$slots.lead" class="page-hero-lead"><slot name="lead" /></p>
        <div v-if="$slots.action" class="page-hero-action"><slot name="action" /></div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(5.25rem, 9vw, 9rem) 0;
  background:
    radial-gradient(ellipse 57% 42% at 86% 25%, rgb(111 155 151 / 0.22), transparent 80%),
    radial-gradient(ellipse 45% 35% at 12% 5%, rgb(255 255 255 / 0.95), transparent 82%),
    linear-gradient(153deg, #faf7f0 2%, #f0f2ec 49%, #dceae5 100%);
  color: var(--color-ink);
}

.page-hero::before,
.page-hero::after {
  position: absolute;
  z-index: -1;
  width: min(65rem, 90vw);
  aspect-ratio: 1.6;
  border: 1px solid rgb(72 119 116 / 0.1);
  border-radius: 50%;
  content: '';
  pointer-events: none;
}

.page-hero::before {
  top: -30rem;
  right: -24rem;
  transform: rotate(-17deg);
}

.page-hero::after {
  right: -34rem;
  bottom: -28rem;
  transform: rotate(13deg);
}

.page-hero-content {
  max-width: 73rem;
}

.page-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin: 0;
  border: 1px solid rgb(255 255 255 / 0.75);
  border-radius: 100px;
  padding: 0.65rem 0.95rem;
  background: linear-gradient(145deg, rgb(255 255 255 / 0.73), rgb(247 251 247 / 0.41));
  box-shadow:
    0 20px 52px -43px rgb(33 73 75 / 0.3),
    inset 0 1px rgb(255 255 255 / 0.7);
  backdrop-filter: blur(8px);
  color: var(--color-petrol);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  line-height: 1.5;
  text-transform: uppercase;
}

.page-hero-dot {
  width: 0.4rem;
  height: 0.4rem;
  flex: none;
  border-radius: 50%;
  background: currentColor;
}

.page-hero-title {
  max-width: 69rem;
  margin: 1.7rem 0 0;
  font-size: clamp(3.25rem, 7.2vw, 7.2rem);
  font-weight: 600;
  letter-spacing: -0.048em;
  line-height: 1.02;
  overflow-wrap: break-word;
  text-wrap: balance;
}

.page-hero-title :deep(span) {
  display: block;
  color: #315d61;
}

.page-hero-lead {
  max-width: 42rem;
  margin: clamp(2.2rem, 5vw, 4.6rem) 0 0;
  color: #5d6e69;
  font-size: clamp(1.05rem, 1.75vw, 1.35rem);
  line-height: 1.7;
  overflow-wrap: break-word;
}

.page-hero-action {
  margin-top: 2rem;
}

@media (max-width: 767px) {
  .page-hero {
    padding-top: 5rem;
  }
}

@media (max-width: 479px) {
  .page-hero-title {
    font-size: clamp(2.95rem, 13vw, 3.5rem);
    letter-spacing: -0.025em;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .page-hero-content {
    animation: page-hero-arrive 850ms cubic-bezier(0.22, 0.7, 0.2, 1) both;
  }
}

@keyframes page-hero-arrive {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
