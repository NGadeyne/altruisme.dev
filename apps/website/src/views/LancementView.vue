<script setup lang="ts">
import { onMounted } from 'vue'
import { BaseButton, BaseContainer } from '@altruisme/ui'
import { OPEN_COOKIE_SETTINGS_EVENT, useCookieConsent } from '@/composables/useCookieConsent'

const steps = [
  'Vérifier l’indexation',
  'Identifier les freins techniques',
  'Comprendre les recherches de ta cible',
  'Prioriser les pages stratégiques',
  'Optimiser les contenus',
  'Améliorer le maillage interne',
  'Renforcer la crédibilité du site',
  'Penser aussi aux moteurs IA',
  'Mesurer et ajuster',
]
const previewSteps = [
  { number: '01', label: 'Vérifier l’indexation' },
  { number: '03', label: 'Identifier les bonnes requêtes' },
  { number: '05', label: 'Optimiser les pages' },
  { number: '09', label: 'Mesurer les résultats' },
]
const faqs = [
  {
    question: 'À qui s’adresse cette checklist SEO ?',
    answer: 'À toi si tu veux comprendre la visibilité de ton site et savoir quels points vérifier en priorité, que tu sois indépendant, entrepreneur ou responsable d’un projet.',
  },
  {
    question: 'Faut-il avoir des connaissances techniques ?',
    answer: 'Non. Les vérifications sont accessibles sans être spécialiste du SEO. Certaines corrections techniques pourront demander de l’aide, mais tu sauras quoi regarder.',
  },
  {
    question: 'Est-ce utile si mon site est déjà en ligne ?',
    answer: 'Oui. Elle t’aide à faire le point sur l’indexation, les contenus et la structure de ton site pour repérer ce qui peut être amélioré.',
  },
  {
    question: 'Est-ce vraiment gratuit ?',
    answer: 'Oui. Tu reçois la checklist gratuitement en laissant ton adresse email. Aucun paiement n’est demandé.',
  },
  {
    question: 'Qu’est-ce que je vais recevoir ensuite ?',
    answer: 'La checklist, puis ponctuellement les prochains contenus d’Altruisme.DEV : guides, ressources et actualités autour de la tech, de l’acquisition et de l’entrepreneuriat.',
  },
]
const { loadPreferences, preferences } = useCookieConsent()

onMounted(loadPreferences)

function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}
</script>

<template>
  <div class="launch-page">
    <section class="launch-hero" aria-labelledby="launch-title">
      <BaseContainer size="large">
        <div class="launch-hero-grid">
          <div class="launch-hero-copy">
            <p class="launch-eyebrow launch-glass launch-pill"><span aria-hidden="true" />La checklist SEO</p>
            <h1 id="launch-title" class="launch-display">Ton site mérite d'être trouvé.</h1>
            <p class="launch-subtitle">Fais le point sur ta visibilité.</p>
            <p class="launch-lead">
              Ton site est en ligne, mais est-il vraiment visible ? Découvre les 9 points essentiels à vérifier pour améliorer ton référencement sur Google et ta visibilité dans les moteurs IA.
            </p>

            <div id="formulaire" class="launch-form-panel launch-glass">
              <p class="launch-form-title">Reçois la checklist SEO gratuitement.</p>
              <iframe
                v-if="preferences.external"
                class="launch-brevo-iframe"
                width="540"
                height="305"
                src="https://2340d204.sibforms.com/v2/serve/MUIFAGAXjTRTB1QC5C-Jkam7Bkpmy98sh7AZeNO_lJmm7GDT0uov2M-WImpl5DwEvcNs2zhVFQKIWayAXWF7_FNDCfXDkclaAwvpV1tS0qJ6WRbRhYnCr4RWbZj1jcQIlOlTQM7UaWc_eE-vl37SJP4bB6uiQm9x4eFxJiptYS6dihe9C7Qv3CmyeLLuUUiVNMtP5rDsjA452mnHlw=="
                title="Formulaire Brevo pour recevoir la checklist SEO"
                frameborder="0"
                scrolling="auto"
                allowfullscreen
              />
              <div v-else class="launch-external-placeholder">
                <p>Autorise les contenus externes pour afficher le formulaire Brevo.</p>
                <BaseButton type="button" size="medium" @click="openCookieSettings">Gérer mes préférences</BaseButton>
              </div>
              <p class="launch-privacy">Gratuit. Pas de spam. <RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink>.</p>
            </div>
          </div>

          <div class="launch-preview" aria-label="Aperçu de la checklist">
            <div class="launch-sheet launch-sheet-back" aria-hidden="true" />
            <div class="launch-sheet launch-sheet-front">
              <div class="launch-sheet-top"><span>Altruisme.DEV</span><span>01 / 09</span></div>
              <p class="launch-sheet-label">La checklist SEO</p>
              <p class="launch-sheet-title">Fondamen&shy;taux d'un SEO solide<span>.</span></p>
              <p class="launch-sheet-subtitle">9 vérifications pour identifier les problèmes et savoir par où commencer.</p>
              <div class="launch-sheet-rule" />
              <div v-for="step in previewSteps" :key="step.number" class="launch-sheet-step">
                <span class="launch-sheet-box" aria-hidden="true" />
                <span>{{ step.label }}</span>
                <small>{{ step.number }}</small>
              </div>
              <p class="launch-sheet-foot">Comprends ce qui bloque. Passe à l'action.</p>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="launch-section launch-steps" aria-labelledby="launch-steps-title">
      <BaseContainer size="large">
        <p class="launch-eyebrow">À l’intérieur</p>
        <h2 id="launch-steps-title" class="launch-title">9 points pour faire le diagnostic de <span>ton SEO</span></h2>
        <div class="launch-steps-grid">
          <div v-for="(step, index) in steps" :key="step" class="launch-step">
            <span>{{ String(index + 1).padStart(2, '0') }}</span><p>{{ step }}</p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="launch-section launch-projects" aria-labelledby="launch-projects-title">
      <BaseContainer size="large">
        <div class="launch-projects-grid">
          <div class="launch-projects-heading">
            <p class="launch-eyebrow">Pourquoi Altruisme.DEV</p>
            <h2 id="launch-projects-title" class="launch-title">Du SEO concret, <span>pas des recettes miracles.</span></h2>
          </div>
          <div>
            <p class="launch-lead">Altruisme.DEV est un média indépendant consacré à la tech, à l’acquisition et à l’entrepreneuriat.</p>
            <p class="launch-lead">Nos contenus s’appuient sur l’expérience terrain en développement, produit et acquisition.</p>
            <p class="launch-lead">Cette checklist propose une approche pratique du référencement : vérifier les bases, repérer les freins et choisir les prochaines actions avec méthode.</p>
            <div class="launch-project-list mt-6" aria-label="Pourquoi choisir Altruisme.DEV">
              <span><strong>Des années d’expérience dans la tech</strong><br /><small>Développement, produit et acquisition appliqués à la visibilité des sites.</small></span>
              <span><strong>Une approche terrain</strong><br /><small>Des vérifications concrètes pour prioriser les actions SEO.</small></span>
              <span><strong>Indépendant</strong><br /><small>Une lecture claire du référencement, sans recette miracle ni jargon inutile.</small></span>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="launch-section launch-faq" aria-labelledby="launch-faq-title">
      <BaseContainer size="large">
        <div class="launch-faq-grid">
          <div>
            <p class="launch-eyebrow">Questions fréquentes</p>
            <h2 id="launch-faq-title" class="launch-title">Avant de commencer</h2>
          </div>
          <div class="launch-faq-list">
            <details v-for="faq in faqs" :key="faq.question" class="launch-faq-item">
              <summary>
                <span>{{ faq.question }}</span>
                <span class="launch-faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>{{ faq.answer }}</p>
            </details>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="launch-section launch-final" aria-labelledby="launch-final-title">
      <BaseContainer size="large">
        <div class="launch-final-inner">
          <p class="launch-eyebrow">Le premier pas</p>
          <h2 id="launch-final-title" class="launch-title">Un bon référencement commence <span>par un bon diagnostic.</span></h2>
          <p>Identifie les points à améliorer et avance avec méthode.</p>
          <BaseButton href="/checklist#formulaire" size="large">Recevoir gratuitement la checklist</BaseButton>
          <small>Gratuit. Pas de spam. Désinscription en un clic.</small>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<style scoped src="./LancementView.css"></style>
