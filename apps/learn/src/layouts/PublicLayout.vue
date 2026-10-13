<script setup lang="ts">
import { ref } from 'vue'
import { BaseContainer } from '@altruisme/ui'
import CookieConsent from '@/components/CookieConsent.vue'

const menuOpen = ref(false)
const year = new Date().getFullYear()
</script>

<template>
  <div class="learn-public">
    <header class="learn-header">
      <BaseContainer class="learn-header-inner">
        <RouterLink
          to="/"
          class="learn-logo"
          aria-label="Altruisme Learn, accueil"
          @click="menuOpen = false"
          ><span class="learn-logo-symbol">A<span>.</span></span
          ><span>ALTRUISME<br /><strong>LEARN</strong></span></RouterLink
        >
        <button
          class="learn-menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="learn-navigation"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? 'Fermer' : 'Menu' }}
          <span aria-hidden="true">{{ menuOpen ? '×' : '+' }}</span>
        </button>
        <nav
          id="learn-navigation"
          class="learn-nav"
          :class="{ 'learn-nav--open': menuOpen }"
          aria-label="Navigation principale"
        >
          <RouterLink to="/formations" @click="menuOpen = false">Formations</RouterLink>
          <RouterLink to="/bootcamp/freelance" @click="menuOpen = false"
            >Bootcamp Freelance</RouterLink
          >
          <RouterLink to="/academie" @click="menuOpen = false">L’académie</RouterLink>
          <RouterLink to="/app" class="learn-nav-access" @click="menuOpen = false"
            >Espace apprenant <span aria-hidden="true">↗</span></RouterLink
          >
        </nav>
      </BaseContainer>
    </header>
    <slot />
    <footer class="learn-footer">
      <BaseContainer>
        <div class="learn-footer-top">
          <div>
            <RouterLink to="/" class="learn-footer-brand">Altruisme <em>Learn.</em></RouterLink>
            <p>Comprendre. Pratiquer. Avancer.</p>
          </div>
          <nav aria-label="Navigation de pied de page">
            <RouterLink to="/formations">Formations</RouterLink
            ><RouterLink to="/formations/seo">Formation SEO</RouterLink
            ><RouterLink to="/bootcamp/freelance">Bootcamp Freelance</RouterLink
            ><RouterLink to="/academie">L’académie</RouterLink>
          </nav>
        </div>
        <div class="learn-footer-bottom">
          <span>© {{ year }} Altruisme.DEV</span
          ><RouterLink to="/app">Espace apprenant ↗</RouterLink>
        </div>
      </BaseContainer>
    </footer>
    <CookieConsent />
  </div>
</template>
