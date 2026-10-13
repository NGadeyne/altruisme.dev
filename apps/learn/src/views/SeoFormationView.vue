<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
</script>

<template>
  <main>
    <section class="learn-hero learn-hero--detail learn-hero--seo">
      <BaseContainer class="learn-detail-hero"
        ><div>
          <p class="learn-eyebrow">FORMATION / SEO</p>
          <h1>Apprendre à voir <em>ce qui compte.</em></h1>
          <p class="learn-lead">
            Le SEO devient plus lisible quand on relie les recherches des personnes, la structure
            d’un site et la qualité de ses contenus.
          </p>
          <div class="learn-actions">
            <a
              class="learn-button learn-button--primary"
              href="mailto:contact@altruisme.dev?subject=Formation%20SEO%20Learn"
              >Échanger sur la formation <span aria-hidden="true">↗</span></a
            ><RouterLink class="learn-text-link" to="/formations"
              >Voir tous les parcours <span aria-hidden="true">→</span></RouterLink
            >
          </div>
        </div>
        <div class="learn-detail-visual" aria-hidden="true">
          <span>SEO / 01</span><strong>Search<br />is a way<br /><i>to listen.</i></strong
          ><span>INTENTION — CONTENU — STRUCTURE</span>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section">
      <BaseContainer class="learn-split"
        ><div>
          <p class="learn-eyebrow">L’INTENTION</p>
          <h2>Comprendre avant d’optimiser.</h2>
        </div>
        <div class="learn-split-copy">
          <p>
            Une bonne décision SEO commence par une question simple : que cherche réellement la
            personne, et quelle réponse le site lui apporte-t-il ? La formation pose ce cadre avant
            d’aborder les leviers de visibilité.
          </p>
          <p>Le programme détaillé sera précisé au fil de sa construction.</p>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section learn-section--mist">
      <BaseContainer
        ><p class="learn-eyebrow">LES GRANDS AXES</p>
        <h2 class="learn-section-title">Une lecture complète du sujet.</h2>
        <div class="learn-feature-grid">
          <div class="learn-feature">
            <span>01 /</span>
            <h3>Intentions de recherche</h3>
            <p>Comprendre les besoins derrière les requêtes et choisir les sujets pertinents.</p>
          </div>
          <div class="learn-feature">
            <span>02 /</span>
            <h3>Contenus et structure</h3>
            <p>Organiser les pages et leurs liens pour rendre le parcours plus clair.</p>
          </div>
          <div class="learn-feature">
            <span>03 /</span>
            <h3>Priorisation</h3>
            <p>Identifier les freins techniques et éditoriaux, puis décider par quoi commencer.</p>
          </div>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section">
      <BaseContainer class="learn-cta-panel"
        ><div>
          <p class="learn-eyebrow">ALLER PLUS LOIN</p>
          <h2>Parlons de ton contexte SEO.</h2>
          <p>Un échange permet de vérifier si ce parcours correspond à ton besoin.</p>
        </div>
        <a
          class="learn-button learn-button--light"
          href="mailto:contact@altruisme.dev?subject=Formation%20SEO%20Learn"
          >Prendre contact <span aria-hidden="true">↗</span></a
        ></BaseContainer
      >
    </section>
  </main>
</template>
