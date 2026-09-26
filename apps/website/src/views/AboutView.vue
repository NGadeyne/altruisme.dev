<script setup lang="ts">
import { BaseButton, BaseContainer } from '@altruisme/ui'

const bricks = [
  {
    name: 'Altruisme.dev',
    promise: 'Comprendre.',
    description: 'Des guides et des actualités pour rendre les sujets tech plus accessibles.',
    detail: 'Le média, point d’entrée de l’écosystème.',
    status: 'Disponible',
    className: 'ecosystem-brick--media',
  },
  {
    name: 'Learn',
    promise: 'Apprendre.',
    description: 'Des formations pratiques pour acquérir une compétence et passer à l’action.',
    detail: 'La priorité produit actuelle.',
    status: 'En construction',
    className: 'ecosystem-brick--learn',
  },
  {
    name: 'Consulting',
    promise: 'Être accompagné.',
    description: 'À terme, un nombre limité de spécialistes pour intervenir sur un besoin précis.',
    detail: 'Product · UX/UI · Développement · Automatisation · SEO · Cloud / DevOps',
    status: 'Collectif à structurer',
    className: 'ecosystem-brick--consulting',
  },
  {
    name: 'Builder',
    promise: 'Concevoir, puis construire.',
    description:
      'D’abord cadrer un produit et prendre les bonnes décisions. Plus tard, aider à le produire.',
    detail: 'Product · UX/UI · Développement · Automatisation · SEO · Architecture / Cloud · Audit',
    status: 'Vision produit',
    className: 'ecosystem-brick--builder',
  },
  {
    name: 'OS',
    promise: 'Piloter.',
    description: 'Un espace simple pour suivre prospects, clients, missions, finances et indicateurs.',
    detail: 'Des outils de pilotage existent déjà en interne.',
    status: 'Prototype interne',
    className: 'ecosystem-brick--os',
  },
  {
    name: 'Cloud',
    promise: 'Héberger.',
    description: 'Mettre un SaaS en production sans devoir devenir expert DevOps.',
    detail: 'À terme : hébergement, données, déploiement, logs et sauvegardes.',
    status: 'Vision long terme',
    className: 'ecosystem-brick--cloud',
  },
] as const

const flow = [
  { action: 'Comprendre', product: 'Altruisme.dev' },
  { action: 'Apprendre', product: 'Learn' },
  { action: 'Construire', product: 'Builder' },
  { action: 'Héberger', product: 'Cloud' },
  { action: 'Piloter', product: 'OS' },
] as const

const journey = [
  { action: 'Découvrir', description: 'Un guide SaaS donne envie d’aller plus loin.' },
  { action: 'Apprendre', description: 'Learn transforme cette envie en savoir-faire.' },
  { action: 'Concevoir', description: 'Builder aide à cadrer le produit et ses choix.' },
  { action: 'Déployer', description: 'Cloud propose un chemin vers la production.' },
  { action: 'Piloter', description: 'OS rassemble l’activité et ses indicateurs.' },
  { action: 'Débloquer', description: 'Consulting intervient sur un point précis.' },
] as const
</script>

<template>
  <main class="ecosystem-page">
    <section class="ecosystem-hero" aria-labelledby="ecosystem-title">
      <BaseContainer size="large">
        <div class="ecosystem-hero-content">
          <p class="ecosystem-eyebrow ecosystem-glass ecosystem-hero-eyebrow">
            <span class="ecosystem-dot" aria-hidden="true" />Écosystème Altruisme
          </p>
          <h1 id="ecosystem-title" class="ecosystem-display">
            Altruisme n’est pas un produit.
            <span>C’est un écosystème.</span>
          </h1>
          <p class="ecosystem-lead">
            Un ensemble de produits et de services pour comprendre, apprendre, construire,
            développer et piloter des projets numériques.
          </p>
          <a class="ecosystem-text-link" href="#les-briques">
            Explorer les briques <span aria-hidden="true">↓</span>
          </a>
        </div>
      </BaseContainer>
    </section>

    <section class="ecosystem-section ecosystem-why" aria-labelledby="ecosystem-why-title">
      <BaseContainer size="large">
        <div class="ecosystem-why-grid">
          <div>
            <p class="ecosystem-eyebrow">Pourquoi un écosystème ?</p>
            <h2 id="ecosystem-why-title" class="ecosystem-title">
              Les problèmes tech ne vivent <span>pas en silos.</span>
            </h2>
          </div>
          <div class="ecosystem-why-copy">
            <p>
              On peut découvrir un sujet dans un guide, l’approfondir avec Learn, concevoir un
              produit avec Builder, puis l’héberger, le piloter ou demander un regard expert.
            </p>
            <p>
              Chaque brique répond à un besoin précis. Leur intérêt grandit quand elles se
              transmettent connaissances, outils et retours du terrain.
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section
      id="les-briques"
      class="ecosystem-section ecosystem-products"
      aria-labelledby="ecosystem-products-title"
    >
      <BaseContainer size="large">
        <div class="ecosystem-section-heading">
          <p class="ecosystem-eyebrow">Les briques</p>
          <h2 id="ecosystem-products-title" class="ecosystem-title">
            Plusieurs expertises. <span>Une même direction.</span>
          </h2>
          <p class="ecosystem-section-intro">
            Sept façons d’avancer, selon le moment où l’on se trouve.
          </p>
        </div>
        <div class="ecosystem-bricks">
          <article
            v-for="(brick, index) in bricks"
            :key="brick.name"
            class="ecosystem-brick"
            :class="brick.className"
          >
            <div class="ecosystem-brick-topline">
              <span class="ecosystem-brick-index">0{{ index + 1 }}</span>
              <span class="ecosystem-status">{{ brick.status }}</span>
            </div>
            <div class="ecosystem-brick-content">
              <p class="ecosystem-brick-name">{{ brick.name }}</p>
              <h3>{{ brick.promise }}</h3>
              <p class="ecosystem-brick-description">{{ brick.description }}</p>
            </div>
            <p class="ecosystem-brick-detail">{{ brick.detail }}</p>
          </article>
        </div>
        <article class="ecosystem-foundation">
          <div>
            <p class="ecosystem-eyebrow">07 / La partie impact</p>
            <h3>Fondation Altruisme</h3>
          </div>
          <div>
            <p class="ecosystem-foundation-promise">Contribuer.</p>
            <p>
              À terme, une partie de la valeur créée par l’écosystème pourrait soutenir des projets
              utiles pour l’éducation, l’accès au numérique ou l’open source.
            </p>
            <span>Vision long terme · distincte des produits commerciaux</span>
          </div>
        </article>
      </BaseContainer>
    </section>

    <section
      class="ecosystem-section ecosystem-connections"
      aria-labelledby="ecosystem-connections-title"
    >
      <BaseContainer size="large">
        <div class="ecosystem-section-heading">
          <p class="ecosystem-eyebrow">Les connexions</p>
          <h2 id="ecosystem-connections-title" class="ecosystem-title">
            Une brique ouvre <span>la suivante.</span>
          </h2>
          <p class="ecosystem-section-intro">
            Ce chemin est un exemple, pas un parcours imposé. On entre là où l’on en a besoin.
          </p>
        </div>
        <ol class="ecosystem-flow">
          <li v-for="(step, index) in flow" :key="step.product">
            <span class="ecosystem-flow-number">0{{ index + 1 }}</span>
            <strong>{{ step.action }}</strong>
            <span>{{ step.product }}</span>
          </li>
        </ol>
        <div class="ecosystem-connections-notes">
          <p>
            <strong>Consulting</strong> peut intervenir à chaque étape lorsqu’une expertise précise
            manque.
          </p>
          <p>
            <strong>Fondation Altruisme</strong> pourrait, à terme, faire revenir une partie de la
            valeur créée vers des projets utiles.
          </p>
        </div>
        <p class="ecosystem-return">
          Et les expériences vécues nourrissent de nouveaux contenus Altruisme.dev ↗
        </p>
      </BaseContainer>
    </section>

    <section class="ecosystem-section ecosystem-journey" aria-labelledby="ecosystem-journey-title">
      <BaseContainer size="large">
        <div class="ecosystem-journey-grid">
          <div class="ecosystem-journey-intro">
            <p class="ecosystem-eyebrow">Un parcours possible</p>
            <h2 id="ecosystem-journey-title" class="ecosystem-title">
              D’un premier guide <span>à un produit en ligne.</span>
            </h2>
            <p class="ecosystem-section-intro">
              Une histoire simple pour montrer comment les briques pourraient se répondre.
            </p>
          </div>
          <ol class="ecosystem-journey-steps">
            <li v-for="(step, index) in journey" :key="step.action">
              <span>0{{ index + 1 }}</span>
              <div>
                <strong>{{ step.action }}</strong>
                <p>{{ step.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </BaseContainer>
    </section>

    <section class="ecosystem-section ecosystem-roadmap" aria-labelledby="ecosystem-roadmap-title">
      <BaseContainer size="large">
        <div class="ecosystem-section-heading">
          <p class="ecosystem-eyebrow">Le temps du projet</p>
          <h2 id="ecosystem-roadmap-title" class="ecosystem-title">
            Ce qui existe. <span>Ce qui se construit.</span>
          </h2>
          <p class="ecosystem-section-intro">
            La vision est large. Les produits disponibles aujourd’hui sont plus ciblés.
          </p>
        </div>
        <div class="ecosystem-roadmap-grid">
          <div class="ecosystem-roadmap-stage">
            <span>01 / Aujourd’hui</span>
            <h3>Le média est en ligne.</h3>
            <p>
              Altruisme.dev publie des guides et des actualités. C’est le point de départ accessible
              à tous.
            </p>
          </div>
          <div class="ecosystem-roadmap-stage">
            <span>02 / En construction</span>
            <h3>Learn prend forme.</h3>
            <p>
              Un premier parcours et un espace connecté existent. Le catalogue de formations reste à
              développer. Des outils de pilotage sont aussi explorés en interne.
            </p>
          </div>
          <div class="ecosystem-roadmap-stage">
            <span>03 / Vision long terme</span>
            <h3>La suite reste à bâtir.</h3>
            <p>
              Le SaaS Builder, un OS public, une plateforme Cloud, un collectif Consulting et la
              Fondation font partie de cette direction.
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="ecosystem-section ecosystem-origin" aria-labelledby="ecosystem-origin-title">
      <BaseContainer size="large">
        <div class="ecosystem-origin-grid">
          <div>
            <p class="ecosystem-eyebrow">Pourquoi Altruisme ?</p>
            <h2 id="ecosystem-origin-title" class="ecosystem-title">
              Construire quelque chose <span>d’utile.</span>
            </h2>
          </div>
          <p>
            Le projet vient du parcours de Nicolas Gadeyne entre développement, produit et
            accompagnement. Son fil conducteur : transmettre ce que l’on apprend, donner du contexte
            aux décisions et créer de la valeur avant de chercher à capter l’attention.
          </p>
        </div>
      </BaseContainer>
    </section>

    <section class="ecosystem-section ecosystem-final" aria-labelledby="ecosystem-final-title">
      <BaseContainer size="large">
        <div class="ecosystem-final-content">
          <p class="ecosystem-eyebrow">La prochaine étape</p>
          <h2 id="ecosystem-final-title" class="ecosystem-title">
            Commencer par apprendre. <span>Puis construire la suite.</span>
          </h2>
          <p>
            Learn est la priorité du moment. Le catalogue s’étoffera progressivement autour de
            formations concrètes.
          </p>
          <div class="ecosystem-actions">
            <BaseButton
              href="https://learn.altruisme.dev/"
              size="large"
              class="ecosystem-inverse-button"
              >Découvrir Learn</BaseButton
            >
            <BaseButton
              to="/guides"
              variant="secondary"
              size="large"
              class="ecosystem-outline-button"
              >Explorer les guides</BaseButton
            >
          </div>
        </div>
      </BaseContainer>
    </section>
  </main>
</template>

<style scoped src="./AboutView.css"></style>
