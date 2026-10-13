<script setup lang="ts">
import { BaseContainer } from '@altruisme/ui'
</script>

<template>
  <main>
    <section class="learn-hero learn-hero--compact">
      <BaseContainer
        ><p class="learn-eyebrow">LE CATALOGUE</p>
        <h1>Des formations pour <em>passer à l’action.</em></h1>
        <p class="learn-lead">
          Explore les parcours Learn. Chaque page présente l’intention et les grands axes du
          programme ; les détails seront ajoutés progressivement.
        </p></BaseContainer
      >
    </section>
    <section class="learn-section">
      <BaseContainer
        ><div class="learn-section-heading">
          <div>
            <p class="learn-eyebrow">EXPLORER</p>
            <h2>Deux chemins, une même exigence.</h2>
          </div>
        </div>
        <div class="learn-card-grid">
          <RouterLink to="/formations/seo" class="learn-program-card learn-program-card--seo"
            ><span class="learn-card-top"
              ><span>FORMATION / SEO</span><span aria-hidden="true">↗</span></span
            ><span class="learn-card-mark" aria-hidden="true">S</span
            ><span class="learn-card-bottom"
              ><span class="learn-card-tag">Visibilité organique</span><strong>Formation SEO</strong
              ><span
                >Une lecture structurée du référencement : intentions, contenus, architecture et
                priorités.</span
              ></span
            ></RouterLink
          >
          <RouterLink
            to="/bootcamp/freelance"
            class="learn-program-card learn-program-card--freelance"
            ><span class="learn-card-top"
              ><span>BOOTCAMP / FREELANCE</span><span aria-hidden="true">↗</span></span
            ><span class="learn-card-mark" aria-hidden="true">F</span
            ><span class="learn-card-bottom"
              ><span class="learn-card-tag">Activité indépendante</span
              ><strong>Bootcamp Freelance</strong
              ><span
                >Un cadre pour travailler son offre, créer des opportunités et conduire les bons
                échanges.</span
              ></span
            ></RouterLink
          >
        </div></BaseContainer
      >
    </section>
    <section class="learn-section learn-section--mist">
      <BaseContainer class="learn-split"
        ><div>
          <p class="learn-eyebrow">LEARN</p>
          <h2>Une pédagogie qui donne une place à la pratique.</h2>
        </div>
        <div class="learn-split-copy">
          <p>
            Les parcours sont pensés comme des points d’appui pour agir, tester et ajuster, plutôt
            que comme une collection de contenus à parcourir.
          </p>
          <RouterLink class="learn-text-link" to="/academie"
            >Découvrir l’académie <span aria-hidden="true">→</span></RouterLink
          >
        </div></BaseContainer
      >
    </section>
  </main>
</template>
