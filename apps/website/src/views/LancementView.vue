<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton, BaseContainer } from '@altruisme/ui'

const steps = [
  'Clarifier l’idée',
  'Identifier le problème',
  'Choisir une cible',
  'Construire une offre',
  'Valider la demande',
  'Créer une première version',
  'Trouver les premiers utilisateurs',
  'Obtenir les premiers retours',
  'Faire la première vente',
]
const projects = ['Freelance', 'SaaS', 'E-commerce', 'Automatisation', 'Produit numérique']

// Remplacer par l’URL du PDF quand il sera disponible. La version web est utilisable dès maintenant.
const checklistUrl = '/lancement/checklist'
const email = ref('')
const consent = ref(false)
const website = ref('')
const loading = ref(false)
const result = ref<'success' | 'already_registered' | null>(null)
const error = ref('')

async function submit() {
  error.value = ''
  const normalizedEmail = email.value.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    error.value = 'Entre une adresse email valide pour recevoir la checklist.'
    return
  }
  if (!consent.value) {
    error.value = 'Confirme que tu souhaites recevoir la checklist et les prochains contenus.'
    return
  }

  loading.value = true
  try {
    const response = await fetch('/api/lancement', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: normalizedEmail, consent: consent.value, website: website.value }),
    })
    const data = (await response.json()) as { status?: string }
    if (!response.ok) {
      error.value =
        data.status === 'invalid_email'
          ? 'Cette adresse email ne semble pas valide.'
          : 'Impossible de t’inscrire pour le moment. Réessaie dans quelques instants.'
      return
    }
    result.value = data.status === 'already_registered' ? 'already_registered' : 'success'
  } catch {
    error.value = 'Impossible de t’inscrire pour le moment. Réessaie dans quelques instants.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="launch-page">
    <section class="launch-hero" aria-labelledby="launch-title">
      <BaseContainer size="large">
        <div class="launch-hero-grid">
          <div class="launch-hero-copy">
            <p class="launch-eyebrow launch-glass launch-pill"><span aria-hidden="true" />Ressource gratuite</p>
            <h1 id="launch-title" class="launch-display">Lance-toi<span>.</span></h1>
            <p class="launch-subtitle">La checklist de l’idée au premier euro.</p>
            <p class="launch-lead">
              Tu as une idée de SaaS, d’activité freelance, d’e-commerce ou simplement l’envie de construire quelque chose ?
              Cette checklist t’aide à passer de l’idée à l’action, étape par étape.
            </p>

            <div id="formulaire" class="launch-form-panel launch-glass">
              <div v-if="result" class="launch-success" role="status" aria-live="polite">
                <span class="launch-success-mark" aria-hidden="true">✓</span>
                <h2>{{ result === 'already_registered' ? 'Tu es déjà inscrit.' : 'C’est parti.' }}</h2>
                <p>Ta checklist est prête. Tu peux la consulter et l’enregistrer en PDF depuis ton navigateur.</p>
                <BaseButton :to="checklistUrl" size="large">Ouvrir Lance-toi <span aria-hidden="true">↗</span></BaseButton>
              </div>
              <form v-else novalidate @submit.prevent="submit">
                <p class="launch-form-title">Reçois la checklist gratuitement.</p>
                <div class="launch-form-row">
                  <div class="launch-field">
                    <label for="launch-email">Ton adresse email</label>
                    <input
                      id="launch-email"
                      v-model="email"
                      type="email"
                      name="email"
                      autocomplete="email"
                      inputmode="email"
                      placeholder="toi@exemple.fr"
                      required
                      :aria-invalid="error && error.includes('email') ? true : undefined"
                      :disabled="loading"
                    />
                  </div>
                  <BaseButton type="submit" size="large" :disabled="loading">
                    {{ loading ? 'Inscription en cours…' : 'Recevoir la checklist' }}
                  </BaseButton>
                </div>
                <div class="launch-honeypot" aria-hidden="true">
                  <label for="launch-website">Site web</label>
                  <input id="launch-website" v-model="website" name="website" type="text" tabindex="-1" autocomplete="off" />
                </div>
                <label class="launch-consent">
                  <input v-model="consent" type="checkbox" name="consent" :disabled="loading" />
                  <span>J’accepte de recevoir la checklist et les prochains contenus d’Altruisme. Désinscription possible à tout moment.</span>
                </label>
                <p v-if="error" class="launch-error" role="alert">{{ error }}</p>
                <p class="launch-privacy">Gratuit. Pas de spam. <RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink>.</p>
              </form>
            </div>
          </div>

          <div class="launch-preview" aria-label="Aperçu de la checklist Lance-toi">
            <div class="launch-sheet launch-sheet-back" aria-hidden="true" />
            <div class="launch-sheet launch-sheet-front">
              <div class="launch-sheet-top"><span>Altruisme.DEV</span><span>01 / 09</span></div>
              <p class="launch-sheet-label">La checklist</p>
              <p class="launch-sheet-title">Lance-toi<span>.</span></p>
              <p class="launch-sheet-subtitle">De l’idée au premier euro.</p>
              <div class="launch-sheet-rule" />
              <div v-for="(step, index) in steps.slice(0, 4)" :key="step" class="launch-sheet-step">
                <span class="launch-sheet-box" aria-hidden="true" />
                <span>{{ step }}</span>
                <small>0{{ index + 1 }}</small>
              </div>
              <p class="launch-sheet-foot">Commence petit. Continue d’avancer.</p>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="launch-section launch-steps" aria-labelledby="launch-steps-title">
      <BaseContainer size="large">
        <p class="launch-eyebrow">À l’intérieur</p>
        <h2 id="launch-steps-title" class="launch-title">De l’idée à <span>quelque chose de réel.</span></h2>
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
          <div>
            <p class="launch-eyebrow">Pour avancer à ton rythme</p>
            <h2 id="launch-projects-title" class="launch-title">Quelque chose à construire ? <span>Commence ici.</span></h2>
          </div>
          <div class="launch-project-list" aria-label="Types de projets">
            <span v-for="project in projects" :key="project">{{ project }}</span>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="launch-section launch-final" aria-labelledby="launch-final-title">
      <BaseContainer size="large">
        <div class="launch-final-inner">
          <p class="launch-eyebrow">Le premier pas</p>
          <h2 id="launch-final-title" class="launch-title">Une idée ne vaut pas grand-chose <span>tant qu’elle reste une idée.</span></h2>
          <p>Commence petit. Teste. Apprends. Améliore.</p>
          <BaseButton href="#formulaire" size="large">Recevoir gratuitement la checklist</BaseButton>
          <small>Gratuit. Pas de spam. Désinscription en un clic.</small>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<style scoped src="./LancementView.css"></style>
