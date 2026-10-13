<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
</script>

<template>
  <main>
    <section class="learn-hero learn-hero--home">
      <BaseContainer class="learn-hero-grid">
        <div>
          <p class="learn-eyebrow">ALTRUISME / LEARN</p>
          <h1>Apprendre pour <em>faire.</em></h1>
          <p class="learn-lead">
            Des parcours pour comprendre les sujets qui comptent, les mettre en pratique et avancer
            avec une méthode claire.
          </p>
          <div class="learn-actions">
            <RouterLink class="learn-button learn-button--primary" to="/formations"
              >Explorer les formations <span aria-hidden="true">↗</span></RouterLink
            >
            <RouterLink class="learn-text-link" to="/academie"
              >Découvrir l’académie <span aria-hidden="true">→</span></RouterLink
            >
          </div>
        </div>
        <div class="learn-hero-art" aria-hidden="true">
          <span class="learn-art-label">LEARN / 01</span>
          <span class="learn-art-orbit learn-art-orbit--one" />
          <span class="learn-art-orbit learn-art-orbit--two" />
          <span class="learn-art-core">L<span>.</span></span>
          <span class="learn-art-caption">COMPRENDRE<br />PRATIQUER<br />AVANCER</span>
        </div>
      </BaseContainer>
    </section>

    <section class="learn-section">
      <BaseContainer>
        <div class="learn-section-heading">
          <div>
            <p class="learn-eyebrow">LES PARCOURS</p>
            <h2>Choisir un sujet. Construire une pratique.</h2>
          </div>
          <RouterLink class="learn-text-link" to="/formations"
            >Tout voir <span aria-hidden="true">→</span></RouterLink
          >
        </div>
        <div class="learn-card-grid">
          <RouterLink to="/formations/seo" class="learn-program-card learn-program-card--seo">
            <span class="learn-card-top"
              ><span>FORMATION / 01</span><span aria-hidden="true">↗</span></span
            >
            <span class="learn-card-mark" aria-hidden="true">S</span>
            <span class="learn-card-bottom"
              ><span class="learn-card-tag">Visibilité organique</span><strong>Formation SEO</strong
              ><span
                >Comprendre les enjeux d’un site et apprendre à prioriser les actions utiles.</span
              ></span
            >
          </RouterLink>
          <RouterLink
            to="/bootcamp/freelance"
            class="learn-program-card learn-program-card--freelance"
          >
            <span class="learn-card-top"
              ><span>BOOTCAMP / 02</span><span aria-hidden="true">↗</span></span
            >
            <span class="learn-card-mark" aria-hidden="true">F</span>
            <span class="learn-card-bottom"
              ><span class="learn-card-tag">Activité indépendante</span
              ><strong>Bootcamp Freelance</strong
              ><span
                >Clarifier son positionnement et structurer sa recherche de missions.</span
              ></span
            >
          </RouterLink>
        </div>
      </BaseContainer>
    </section>

    <section class="learn-section learn-section--mist">
      <BaseContainer class="learn-split">
        <div>
          <p class="learn-eyebrow">NOTRE APPROCHE</p>
          <h2>Moins de théorie isolée.<br />Plus de décisions éclairées.</h2>
        </div>
        <div class="learn-split-copy">
          <p>
            Chaque parcours part d’un problème concret. On pose les bases, on travaille sur des cas
            d’usage et on relie les apprentissages à tes propres projets.
          </p>
          <RouterLink class="learn-text-link" to="/academie"
            >Notre vision de l’apprentissage <span aria-hidden="true">→</span></RouterLink
          >
        </div>
      </BaseContainer>
    </section>
  </main>
</template>
