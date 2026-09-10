import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const SITE_NAME = 'Altruisme'
const SITE_URL = 'https://altruisme.dev'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Signons ensemble ta prochaine mission freelance !',
        description:
          'Accompagnement pour freelances IT & Tech : clarifie ton positionnement, améliore tes profils, prospecte efficacement et signe ta prochaine mission.',
      },
    },

    {
      path: '/apropos',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'À propos | Nicolas Gadeyne',
        description:
          'Découvre mon parcours de freelance IT et Product Owner, et pourquoi j’accompagne aujourd’hui les freelances IT & Tech dans leur recherche de mission.',
      },
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact | Trouver ta prochaine mission freelance IT',
        description:
          'Fais le point sur ta recherche de mission freelance IT & Tech et découvre comment structurer ton positionnement, ta prospection et ton acquisition.',
      },
    },

    {
      path: '/guides',
      name: 'guides',
      component: () => import('../views/GuidesView.vue'),
      meta: {
        title: 'Guides Freelance IT & Tech : missions, Malt, LinkedIn et prospection',
        description:
          'Guides gratuits pour freelances IT & Tech : positionnement, Malt, LinkedIn, prospection, contenu, TJM et recherche de mission.',
      },
    },

    // Guides

    {
      path: '/guides/positionnement-freelance',
      name: 'guide-positionnement',
      component: () => import('@/views/guides/PositioningGuideView.vue'),
      meta: {
        title: 'Comment trouver un positionnement freelance IT clair',
        description:
          'Méthode et exemples pour construire un positionnement freelance clair, différenciant et compréhensible par les clients et recruteurs.',
      },
    },

    {
      path: '/guides/optimiser-profil-malt',
      name: 'guide-malt',
      component: () => import('@/views/guides/MaltGuideView.vue'),
      meta: {
        title: 'Optimiser son profil Malt pour trouver des missions freelance',
        description:
          'Optimise ton profil Malt : titre, description, compétences, expériences et mots-clés pour générer davantage d’opportunités freelance.',
      },
    },

    {
      path: '/guides/profil-linkedin-freelance',
      name: 'guide-linkedin',
      component: () => import('@/views/guides/LinkedInGuideView.vue'),
      meta: {
        title: 'Optimiser son profil LinkedIn quand on est freelance IT',
        description:
          'Transforme ton profil LinkedIn en véritable vitrine freelance : titre, résumé, expériences, preuves et positionnement pour attirer les bonnes opportunités.',
      },
    },

    {
      path: '/guides/prospection-esn-clients-finaux',
      name: 'guide-prospection',
      component: () => import('@/views/guides/ProspectingGuideView.vue'),
      meta: {
        title: 'Prospection freelance IT : ESN et clients finaux',
        description:
          'Apprends à prospecter efficacement les ESN et clients finaux : ciblage, messages, relances et routine pour trouver une mission freelance IT.',
      },
    },

    {
      path: '/guides/contenu-linkedin-freelance',
      name: 'guide-contenu',
      component: () => import('@/views/guides/ContentGuideView.vue'),
      meta: {
        title: 'Créer du contenu LinkedIn quand on est freelance IT',
        description:
          'Utilise LinkedIn pour développer ta visibilité et rassurer tes prospects grâce à une stratégie de contenu adaptée aux freelances IT & Tech.',
      },
    },

    {
      path: '/guides/qualifier-mission-freelance',
      name: 'guide-qualification-mission',
      component: () => import('@/views/guides/MissionQualificationGuideView.vue'),
      meta: {
        title: 'Comment qualifier une mission freelance avant de dire oui',
        description:
          'Besoin, périmètre, TJM, environnement et durée : les questions à poser pour savoir si une mission freelance est réellement intéressante.',
      },
    },

    {
      path: '/masterclass',
      name: 'masterclass',
      component: () => import('@/views/MasterclassView.vue'),
      meta: {
        title: 'Masterclass : trouver sa prochaine mission freelance IT',
        description:
          'Une masterclass dédiée aux freelances IT & Tech pour comprendre pourquoi leur recherche de mission bloque et mettre en place une stratégie efficace.',
      },
    },

    // Legal

    {
      path: '/mentions-legales',
      name: 'legal-notice',
      component: () => import('@/views/legal/LegalNoticeView.vue'),
      meta: {
        title: 'Mentions légales | Altruisme',
        description: 'Mentions légales du site Altruisme.',
        robots: 'noindex, follow',
      },
    },

    {
      path: '/politique-de-confidentialite',
      name: 'privacy-policy',
      component: () => import('@/views/legal/PrivacyPolicyView.vue'),
      meta: {
        title: 'Politique de confidentialité | Altruisme',
        description:
          'Politique de confidentialité et informations relatives au traitement des données personnelles sur Altruisme.',
        robots: 'noindex, follow',
      },
    },

    {
      path: '/cookies',
      name: 'cookies',
      component: () => import('@/views/legal/CookiesView.vue'),
      meta: {
        title: 'Gestion des cookies | Altruisme',
        description:
          'Informations et préférences concernant les cookies utilisés sur le site Altruisme.',
        robots: 'noindex, follow',
      },
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

function setMetaTag(
  name: string,
  content: string,
  attribute: 'name' | 'property' = 'name',
) {
  let element = document.head.querySelector(
    `meta[${attribute}="${name}"]`,
  ) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }

  canonical.href = url
}

router.afterEach((to) => {
  const title = (to.meta.title as string) || SITE_NAME

  const description =
    (to.meta.description as string) ||
    'Accompagnement et ressources pour freelances IT & Tech.'

  const robots = (to.meta.robots as string) || 'index, follow'

  const path =
    to.path === '/'
      ? '/'
      : to.path.replace(/\/+$/, '')

  const canonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path}`

  // HTML
  document.title = title
  document.documentElement.lang = 'fr'

  // SEO
  setMetaTag('description', description)
  setMetaTag('robots', robots)

  setCanonical(canonicalUrl)

  // Open Graph
  setMetaTag('og:title', title, 'property')
  setMetaTag('og:description', description, 'property')
  setMetaTag('og:type', 'website', 'property')
  setMetaTag('og:url', canonicalUrl, 'property')
  setMetaTag('og:site_name', SITE_NAME, 'property')
  setMetaTag('og:locale', 'fr_FR', 'property')

  // Twitter / X
  setMetaTag('twitter:card', 'summary_large_image')
  setMetaTag('twitter:title', title)
  setMetaTag('twitter:description', description)
})

export default router
