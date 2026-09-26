<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'
import { featuredGuides } from '@/data/site'
import { week39 } from '@/content/news/week39Metadata'

const week39Path = `/actualites/${week39.slug}`
const publishedGuideCount = featuredGuides.filter((guide) => guide.status === 'available').length
const upcomingGuideCount = featuredGuides.length - publishedGuideCount
const secondaryGuides = featuredGuides.slice(2)
const compactGuides = [
  ...secondaryGuides.filter((guide) => guide.status === 'available'),
  ...secondaryGuides.filter((guide) => guide.status !== 'available'),
].slice(0, 5)

const editorialStats = [
  { value: String(publishedGuideCount), label: 'guides de référence publiés' },
  { value: String(upcomingGuideCount), label: 'grands guides en préparation' },
  { value: '1× / semaine', label: 'une sélection d’actualités utile' },
  { value: '100 %', label: 'indépendant dans la ligne éditoriale' },
]

const principles = [
  {
    number: '01',
    title: 'Moins de bruit.',
    text: 'Pas besoin de publier vingt fois par jour. On préfère sélectionner, vérifier, contextualiser et expliquer.',
  },
  {
    number: '02',
    title: 'Plus de fond.',
    text: 'Des guides longs et structurés pour comprendre un sujet jusqu’au bout, pas seulement récupérer trois astuces.',
  },
  {
    number: '03',
    title: 'Du terrain.',
    text: 'Produit, code, business, carrière : la tech racontée par celles et ceux qui la construisent et la vivent.',
  },
]

const topics = ['Produit', 'SaaS', 'IA', 'Automatisation', 'Freelance', 'ESN', 'E-commerce', 'Marketplace']
</script>

<template>
  <div class="media-home">
    <!-- Hero -->
    <section class="media-hero" aria-labelledby="media-hero-title">
      <BaseContainer size="large">
        <div class="media-hero-intro">
          <p class="media-eyebrow media-glass media-hero-eyebrow"><span class="media-eyebrow-dot" aria-hidden="true" />Média tech indépendant</p>
          <h1 id="media-hero-title" class="media-display">
            La tech mérite mieux
            <span>que du bruit.</span>
          </h1>
          <div class="media-hero-bottom">
            <p class="media-lead">
              Altruisme.DEV décrypte les produits, les modèles et les métiers qui façonnent la tech.
              Des <strong>guides de fond</strong>, une <strong>actualité contextualisée</strong>, des
              <strong>conversations utiles</strong> et des ressources pour celles et ceux qui construisent.
            </p>
            <div class="media-hero-actions">
              <div class="media-button-row">
                <BaseButton :to="week39Path" size="large">Lire l’édition de la semaine</BaseButton>
                <BaseButton to="/guides" variant="secondary" size="large">Explorer les guides</BaseButton>
              </div>
              <div class="media-topics">
                <span v-for="topic in topics.slice(0, 5)" :key="topic"><span aria-hidden="true" />{{ topic }}</span>
              </div>
            </div>
          </div>
        </div>

      </BaseContainer>
    </section>

    <!-- Chiffres / promesse -->
    <section class="media-proof" aria-label="Altruisme.DEV en chiffres">
      <BaseContainer size="large">
        <div class="media-proof-list">
          <div v-for="stat in editorialStats" :key="stat.label" class="media-proof-item">
            <p class="media-proof-value">{{ stat.value }}</p>
            <p class="media-proof-label">{{ stat.label }}</p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Actualités -->
    <section class="media-section media-news media-wash" aria-labelledby="media-news-title">
      <BaseContainer size="large">
        <div class="media-split">
          <div class="media-section-intro media-sticky">
            <p class="media-eyebrow">Le rendez-vous hebdo</p>
            <h2 id="media-news-title" class="media-title">Comprendre l’actualité. <span>Pas la subir.</span></h2>
            <p class="media-copy">
              Chaque semaine, Altruisme.DEV sélectionne les sujets qui méritent vraiment quelques minutes
              de ton attention. Pas de course au clic : du tri, du contexte et un point de vue assumé sur ce
              qui change réellement.
            </p>
            <BaseButton to="/actualites" variant="secondary" class="media-section-button">Voir toutes les actualités</BaseButton>
          </div>
          <div class="media-news-list">
            <article class="media-news-story">
              <span class="media-news-number" aria-hidden="true">#39</span>
              <div class="media-news-copy">
                <p class="media-eyebrow">{{ week39.format }}</p>
                <h3>{{ week39.title }}</h3>
                <p>{{ week39.excerpt }}</p>
              </div>
              <RouterLink :to="week39Path" class="media-arrow-link" :aria-label="`Lire ${week39.editorialTitle}`">↗</RouterLink>
            </article>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Guides -->
    <section class="media-section media-guides" aria-labelledby="media-guides-title">
      <BaseContainer size="large">
        <div class="media-guides-heading">
          <div>
            <p class="media-eyebrow">Guides de référence</p>
            <h2 id="media-guides-title" class="media-title">Des sujets complexes. <span>Enfin traités en profondeur.</span></h2>
            <p class="media-copy">Pensés comme des ressources à garder sous la main : complets, structurés, lisibles et mis à jour.</p>
          </div>
          <BaseButton to="/guides" variant="secondary">Voir la bibliothèque</BaseButton>
        </div>

        <div class="media-guide-feature-grid">
          <article v-for="(guide, index) in featuredGuides.slice(0, 2)" :key="guide.title" class="media-guide-feature" :class="{ 'media-guide-feature--primary': index === 0 }">
            <div class="media-guide-topline">
              <span class="media-eyebrow">{{ guide.label }}</span>
              <span class="media-guide-status">{{ guide.status === 'available' ? 'Publié' : 'Bientôt disponible' }}</span>
            </div>
            <div class="media-guide-copy">
              <h3>{{ guide.title }}</h3>
              <p>{{ guide.description }}</p>
              <RouterLink v-if="guide.to" :to="guide.to" class="media-text-link">Lire le guide <span aria-hidden="true">↗</span></RouterLink>
            </div>
          </article>
        </div>
        <div class="media-guide-index">
          <article v-for="guide in compactGuides" :key="guide.title" class="media-guide-index-item">
            <span class="media-eyebrow">{{ guide.label }}</span>
            <h3>{{ guide.title }}</h3>
            <RouterLink v-if="guide.to" :to="guide.to" class="media-guide-index-link">Publié · Lire le guide →</RouterLink>
            <p v-else>Bientôt disponible</p>
          </article>
        </div>
      </BaseContainer>
    </section>

    <!-- Manifeste -->
    <section class="media-section media-manifesto media-wash--ivory" aria-labelledby="media-manifesto-title">
      <BaseContainer size="large">
        <div class="media-manifesto-intro">
          <p class="media-eyebrow">La ligne éditoriale</p>
          <h2 id="media-manifesto-title" class="media-title">Un média pensé pour <span>les gens qui font.</span></h2>
          <p class="media-copy">
            Altruisme.DEV ne cherche pas à couvrir toute la tech. Il cherche à mieux couvrir les sujets qui
            touchent directement ceux qui créent des produits, des entreprises et des carrières dans la tech.
          </p>
          <RouterLink to="/apropos" class="media-text-link">Découvrir l’écosystème Altruisme <span aria-hidden="true">↗</span></RouterLink>
        </div>
        <div class="media-principles">
          <article v-for="principle in principles" :key="principle.number" class="media-principle">
            <span class="media-principle-number">{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.text }}</p>
          </article>
        </div>
      </BaseContainer>
    </section>

    <!-- Podcast -->
    <section class="media-section media-podcast media-deep" aria-labelledby="media-podcast-title">
      <BaseContainer size="large">
        <div class="media-podcast-grid">
          <div class="media-podcast-copy">
            <p class="media-eyebrow media-deep-eyebrow"><span class="media-eyebrow-dot" aria-hidden="true" />Le podcast Altruisme.DEV</p>
            <h2 id="media-podcast-title" class="media-title">Un CTO. Un jeu indé.<br /><span>Et aucune langue de bois.</span></h2>
            <p class="media-copy">
              J’invite des CTO et des figures de la tech française à venir jouer en live à un jeu vidéo indépendant.
              Entre deux parties, on parle produit, équipe, architecture, management, carrière, erreurs et quotidien réel.
            </p>
            <p class="media-copy">
              Pas un interrogatoire. Pas une conférence. Une conversation détendue, un peu drôle, parfois chaotique — comme une bonne soirée entre gens de la tech.
            </p>
            <div class="media-button-row">
              <BaseButton to="/podcast" size="large" class="media-inverse-button">Découvrir le podcast</BaseButton>
            </div>
          </div>
          <div class="media-podcast-stage">
            <div class="media-podcast-stage-head">
              <span class="media-live"><span aria-hidden="true" />Live</span>
              <span>Altruisme.DEV — Session #01</span>
            </div>
            <div class="media-podcast-stage-body">
              <div class="media-controller" aria-hidden="true">🎮</div>
              <p class="media-eyebrow">Le format</p>
              <h3>On joue. On discute. On oublie les slides.</h3>
              <div class="media-podcast-formula">
                <div><strong>1</strong><span>CTO</span></div>
                <div><strong>1</strong><span>jeu indé</span></div>
                <div><strong>Live</strong><span>sans filtre</span></div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Contribuer -->
    <section class="media-section media-contribute" aria-labelledby="media-contribute-title">
      <BaseContainer size="large">
        <div class="media-contribute-grid">
          <div>
            <p class="media-eyebrow">Contribuer à Altruisme.DEV</p>
            <h2 id="media-contribute-title" class="media-title">Les meilleures histoires tech <span>ne viennent pas toujours des médias.</span></h2>
          </div>
          <div class="media-contribute-content">
            <p class="media-copy">
              Tu as construit quelque chose, cassé quelque chose, appris quelque chose ou simplement développé un point de vue qui mérite d’être lu ?
              Altruisme.DEV est aussi là pour faire circuler les retours d’expérience de celles et ceux qui font vraiment la tech.
            </p>
            <div class="media-contribute-topics">
              <div>Retour d’expérience</div>
              <div>Analyse & opinion argumentée</div>
              <div>Étude de cas produit / tech</div>
              <div>Idée de sujet ou témoignage</div>
            </div>
            <div class="media-contribute-action">
              <BaseButton to="/contribuer" size="large">Proposer une contribution</BaseButton>
              <p>Pas besoin d’être “créateur de contenu”.<br />Il faut surtout avoir quelque chose à raconter.</p>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Ressource gratuite -->
    <section class="media-section media-resource media-deep" aria-labelledby="media-resource-title">
      <BaseContainer size="large">
        <div class="media-resource-content">
          <p class="media-eyebrow media-deep-eyebrow"><span class="media-eyebrow-dot" aria-hidden="true" />Ressource gratuite</p>
          <h2 id="media-resource-title" class="media-title">Une idée en tête ?<br /><span>Commence par le premier pas.</span></h2>
          <p class="media-copy">
            Lance-toi est une checklist courte pour passer d’une idée à un projet concret,
            du cadrage aux premiers retours.
          </p>
          <div class="media-resource-notes">
            <div><strong>Clarifier</strong><span>Définir l’idée et le problème.</span></div>
            <div><strong>Valider</strong><span>Parler aux bonnes personnes.</span></div>
            <div><strong>Construire</strong><span>Créer une première version.</span></div>
            <div><strong>Avancer</strong><span>Apprendre des premiers retours.</span></div>
          </div>
          <div class="media-button-row">
            <BaseButton to="/lancement" size="large" class="media-inverse-button">Recevoir Lance-toi</BaseButton>
            <BaseButton to="/guides" variant="secondary" size="large" class="media-outline-button">Explorer les guides</BaseButton>
          </div>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<style scoped src="./HomeView.css"></style>
