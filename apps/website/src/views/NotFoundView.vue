<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="bg-sand py-24 sm:py-32">
    <BaseContainer>
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-petrol">Erreur 404</p>
        <h1 class="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Page introuvable
        </h1>
        <p class="mt-6 text-lg leading-8 text-muted">
          Cette page n’existe pas ou n’est plus disponible.
        </p>
        <div class="mt-9 flex flex-wrap justify-center gap-3">
          <BaseButton to="/">Retour à l’accueil</BaseButton>
          <BaseButton to="/guides" variant="secondary">Explorer les guides</BaseButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
