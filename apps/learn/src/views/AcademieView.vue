<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
</script>

<template>
  <main>
    <section class="learn-hero learn-hero--compact">
      <BaseContainer
        ><p class="learn-eyebrow">L’ACADÉMIE</p>
        <h1>Le savoir prend forme <em>dans l’action.</em></h1>
        <p class="learn-lead">
          Learn est un espace pour relier compréhension, pratique et prise de recul. Une pédagogie
          conçue pour faire progresser le travail réel.
        </p>
        <div class="learn-actions">
          <RouterLink class="learn-button learn-button--primary" to="/formations"
            >Explorer les parcours <span aria-hidden="true">↗</span></RouterLink
          >
        </div></BaseContainer
      >
    </section>
    <section class="learn-section">
      <BaseContainer class="learn-split"
        ><div>
          <p class="learn-eyebrow">NOTRE VISION</p>
          <h2>Apprendre, c’est gagner en autonomie.</h2>
        </div>
        <div class="learn-split-copy">
          <p>
            On retient mieux ce qu’on peut expliquer, essayer et ajuster. Nos parcours cherchent à
            rendre les sujets accessibles sans gommer leur complexité, pour aider chacun à prendre
            de meilleures décisions dans son contexte.
          </p>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section learn-section--mist">
      <BaseContainer
        ><p class="learn-eyebrow">L’APPROCHE</p>
        <h2 class="learn-section-title">Trois repères pédagogiques.</h2>
        <div class="learn-feature-grid">
          <div class="learn-feature">
            <span>01 /</span>
            <h3>Comprendre</h3>
            <p>Poser les concepts et les enjeux avant de choisir un outil ou une tactique.</p>
          </div>
          <div class="learn-feature">
            <span>02 /</span>
            <h3>Pratiquer</h3>
            <p>Appliquer les idées à un projet, une activité ou une situation concrète.</p>
          </div>
          <div class="learn-feature">
            <span>03 /</span>
            <h3>Ajuster</h3>
            <p>Observer ce qui se passe et faire évoluer sa méthode avec discernement.</p>
          </div>
        </div></BaseContainer
      >
    </section>
    <section class="learn-section">
      <BaseContainer class="learn-cta-panel"
        ><div>
          <p class="learn-eyebrow">À DÉCOUVRIR</p>
          <h2>Des parcours pour commencer.</h2>
          <p>Explore les sujets actuellement présentés par Learn.</p>
        </div>
        <RouterLink class="learn-button learn-button--light" to="/formations"
          >Voir les formations <span aria-hidden="true">↗</span></RouterLink
        ></BaseContainer
      >
    </section>
  </main>
</template>
