<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
</script>

<template>
  <main>
    <section class="learn-hero learn-hero--detail learn-hero--freelance">
      <BaseContainer class="learn-detail-hero"
        ><div>
          <p class="learn-eyebrow">BOOTCAMP / FREELANCE</p>
          <h1>Une activité freelance <em>qui se construit.</em></h1>
          <p class="learn-lead">
            Un parcours pour clarifier ce que tu proposes, créer des conversations utiles et mieux
            conduire les opportunités qui se présentent.
          </p>
          <div class="learn-actions">
            <a
              class="learn-button learn-button--primary"
              href="mailto:contact@altruisme.dev?subject=Bootcamp%20Freelance%20Learn"
              >Parler du bootcamp <span aria-hidden="true">↗</span></a
            ><RouterLink class="learn-text-link" to="/formations"
              >Voir tous les parcours <span aria-hidden="true">→</span></RouterLink
            >
          </div>
        </div>
        <div class="learn-detail-visual learn-detail-visual--freelance" aria-hidden="true">
          <span>FREELANCE / 02</span><strong>Clarté.<br />Rythme.<br /><i>Relation.</i></strong
          ><span>DE L’OFFRE À LA MISSION</span>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section">
      <BaseContainer class="learn-split"
        ><div>
          <p class="learn-eyebrow">LE PARCOURS</p>
          <h2>Avancer dans le bon ordre.</h2>
        </div>
        <div class="learn-split-copy">
          <p>
            Le bootcamp suit une progression simple : poser les fondations de ton activité, mettre
            en place des actions régulières, puis apprendre à faire avancer les échanges
            commerciaux.
          </p>
          <p>Les modalités et le programme détaillé seront précisés progressivement.</p>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section learn-section--mist">
      <BaseContainer
        ><p class="learn-eyebrow">TROIS TEMPS</p>
        <h2 class="learn-section-title">Une méthode à mettre en pratique.</h2>
        <div class="learn-feature-grid">
          <div class="learn-feature">
            <span>01 /</span>
            <h3>Fondations</h3>
            <p>Clarifier son positionnement, son offre et la manière de présenter sa valeur.</p>
          </div>
          <div class="learn-feature">
            <span>02 /</span>
            <h3>Accélération</h3>
            <p>Choisir ses interlocuteurs et construire une routine de création d’opportunités.</p>
          </div>
          <div class="learn-feature">
            <span>03 /</span>
            <h3>Signature</h3>
            <p>
              Qualifier les échanges, cadrer une mission et rendre les prochaines étapes explicites.
            </p>
          </div>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section">
      <BaseContainer class="learn-cta-panel"
        ><div>
          <p class="learn-eyebrow">ÉCHANGER</p>
          <h2>Un cadre adapté à ton point de départ ?</h2>
          <p>Écris-nous pour discuter du bootcamp et de ta situation.</p>
        </div>
        <a
          class="learn-button learn-button--light"
          href="mailto:contact@altruisme.dev?subject=Bootcamp%20Freelance%20Learn"
          >Prendre contact <span aria-hidden="true">↗</span></a
        ></BaseContainer
      >
    </section>
  </main>
</template>
