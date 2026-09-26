<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'

function printChecklist() {
  window.print()
}

const steps = [
  { title: 'Clarifier l’idée', prompt: 'Décris en une phrase ce que tu veux créer et ce que cela change pour quelqu’un.' },
  { title: 'Identifier le problème', prompt: 'Note un problème concret, sa fréquence et la façon dont il est résolu aujourd’hui.' },
  { title: 'Choisir une cible', prompt: 'Définis un premier groupe de personnes que tu peux réellement contacter.' },
  { title: 'Construire une offre', prompt: 'Formule le résultat proposé, son format et un prix de départ à tester.' },
  { title: 'Valider la demande', prompt: 'Parle à cinq personnes concernées avant de construire davantage.' },
  { title: 'Créer une première version', prompt: 'Liste la plus petite version qui permet de rendre le service promis.' },
  { title: 'Trouver les premiers utilisateurs', prompt: 'Choisis un canal et contacte les personnes qui ont déjà ce problème.' },
  { title: 'Obtenir les premiers retours', prompt: 'Demande ce qui a été utile, ce qui manque et ce qui bloque encore.' },
  { title: 'Faire la première vente', prompt: 'Propose clairement ton offre à une personne intéressée, puis apprends de sa réponse.' },
]
</script>

<template>
  <div class="checklist-page">
    <BaseContainer size="large">
      <div class="checklist-toolbar">
        <RouterLink to="/lancement">← Retour à Lance-toi</RouterLink>
        <BaseButton type="button" variant="secondary" @click="printChecklist">Imprimer / enregistrer en PDF</BaseButton>
      </div>
      <header class="checklist-header">
        <p>Altruisme.DEV / Ressource gratuite</p>
        <h1>Lance-toi<span>.</span></h1>
        <h2>La checklist de l’idée au premier euro.</h2>
        <p>Un premier pas à la fois. Coche ce que tu as fait et note ce qu’il te reste à tester.</p>
      </header>
      <ol class="checklist-steps">
        <li v-for="(step, index) in steps" :key="step.title">
          <label><input type="checkbox" /><span class="checklist-number">{{ String(index + 1).padStart(2, '0') }}</span><span><strong>{{ step.title }}</strong><small>{{ step.prompt }}</small></span></label>
        </li>
      </ol>
      <div class="checklist-note">
        <h2>Mon prochain petit pas</h2>
        <p>Quelle action peux-tu faire cette semaine pour avancer ?</p>
        <div aria-hidden="true" />
        <div aria-hidden="true" />
      </div>
      <p class="checklist-end">Commence petit. Teste. Apprends. Améliore.</p>
    </BaseContainer>
  </div>
</template>

<style scoped src="./LancementChecklistView.css"></style>
