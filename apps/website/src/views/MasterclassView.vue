<script setup lang="ts">
import HomeCredibility from '@/components/home/HomeCredibility.vue'

import MasterclassHero from '@/components/masterclass/MasterclassHero.vue'
import MasterclassLearnings from '@/components/masterclass/MasterclassLearnings.vue'
import MasterclassAudience from '@/components/masterclass/MasterclassAudience.vue'
import MasterclassFaq from '@/components/masterclass/MasterclassFaq.vue'
</script>

<template>
  <main class="min-h-screen bg-[#f4efe7]">
    <!--
      Hero :
      - Promesse
      - Date / heure
      - Informations du live
      - Formulaire d'inscription
    -->
    <MasterclassHero />

    <!-- Crédibilité -->
    <HomeCredibility />

    <!-- Ce que tu vas apprendre -->
    <MasterclassLearnings />

    <!-- Pour qui est la masterclass -->
    <MasterclassAudience />

    <!-- FAQ + CTA retour vers l'inscription -->
    <MasterclassFaq />
  </main>
</template>
