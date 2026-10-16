<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
</script>

<template>
  <main>
    <section class="learn-hero learn-hero--compact">
      <BaseContainer>
        <p class="learn-eyebrow">PAGE INTROUVABLE</p>
        <h1>Cette page n’est plus disponible</h1>
        <p class="learn-lead">Retrouve la formation SEO sur la page d’accueil de Learn.</p>
        <div class="learn-actions">
          <RouterLink class="learn-text-link" to="/">
            Retour à l’accueil <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>
