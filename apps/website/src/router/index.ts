import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { nextTick } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { guideRoutes } from './guides'
import { updatePageMetadata } from '@/lib/pageMetadata'
import { week39 } from '@/content/news/week39Metadata'
import { week40 } from '@/content/news/week40Metadata'
import { week41 } from '@/content/news/week41Metadata'
import { week42 } from '@/content/news/week42Metadata'
import { week43 } from '@/content/news/week43Metadata'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Altruisme.DEV | Média tech indépendant',
      description:
        'Guides de fond, actualités expliquées, podcast et ressources autour du produit, du SaaS, de l’IA, de l’automatisation, du freelancing et de la tech.',
    },
  },
  {
    path: '/apropos',
    name: 'ecosystem',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Écosystème Altruisme — Learn, Builder, Cloud, OS & Consulting',
      description:
        'Découvrez l’écosystème Altruisme : média, formations, consulting et produits pour apprendre, construire, héberger et développer des projets numériques.',
    },
  },
  {
    path: '/checklist',
    name: 'checklist',
    component: () => import('../views/LancementView.vue'),
    meta: {
      title: 'Checklist SEO gratuite : 9 points clés | Altruisme.DEV',
      description:
        'Télécharge notre checklist SEO gratuite : 9 points pour identifier les problèmes de ton site et améliorer ta visibilité sur Google et les moteurs IA.',
      ogTitle: 'Checklist SEO gratuite — 9 points pour ton site',
      ogDescription:
        'Identifie les freins à ton référencement et découvre les 9 vérifications essentielles pour améliorer ta visibilité sur Google et les moteurs IA.',
      image: '/images/checklist-seo-og.png',
      imageAlt: 'Checklist SEO gratuite : les 9 points essentiels pour ton site',
    },
  },
  {
    path: '/checklist/etapes',
    name: 'checklist-steps',
    component: () => import('../views/LancementChecklistView.vue'),
    meta: {
      title: 'La checklist : les neuf étapes | Altruisme.DEV',
      description: 'Les neuf étapes pratiques pour passer de ton idée à un premier projet concret.',
      robots: 'noindex, follow',
    },
  },
  {
    path: '/guides',
    name: 'guides',
    component: () => import('../views/GuidesView.vue'),
    meta: {
      title: 'Guides tech 2026 | Altruisme.DEV',
      description:
        'Guides complets sur le freelancing, le SaaS, l’automatisation, les ESN, l’e-commerce, l’IA et les marketplaces.',
    },
  },
  {
    path: '/outils',
    name: 'tools',
    component: () => import('../views/ToolsView.vue'),
    meta: {
      title: 'Outils tech 2026 | Altruisme.DEV',
      description:
        'Des guides d’outils et des projets Altruisme à venir pour acquérir, construire et gérer une activité numérique.',
    },
  },
  ...guideRoutes,
  {
    path: '/guides/saas-2026',
    redirect: (to) => ({ path: '/guides/saas', hash: to.hash, query: to.query }),
  },
  {
    path: '/guides/cloud-2026',
    redirect: (to) => ({ path: '/guides/cloud', hash: to.hash, query: to.query }),
  },
  {
    path: '/actualites',
    name: 'news',
    component: () => import('../views/NewsView.vue'),
    meta: {
      title: 'Actualités tech de la semaine | Altruisme.DEV',
      description:
        'Une sélection hebdomadaire des actualités produit, SaaS, IA, automatisation, freelance et entreprises tech, expliquées avec du contexte.',
    },
  },
  {
    path: `/actualites/${week43.slug}`,
    name: 'news-week-43',
    component: () => import('../views/news/Week43View.vue'),
    meta: {
      title: 'Actu Tech semaine #43 : PHP2Shell secoue le Web',
      description:
        'PHP2Shell, puces IA, OpenAI chez Google Cloud, lunettes Meta et ChatGPT chez Uber : découvre les actualités Tech à retenir de la semaine #43.',
      ogTitle: week43.title,
      ogDescription:
        'Deux failles critiques secouent PHP, Amazon attaque le verrou logiciel de NVIDIA, OpenAI arrive chez Google Cloud et Uber déploie ChatGPT à grande échelle.',
      image: week43.image,
      imageAlt: week43.imageAlt,
      ogImageAlt: 'Actu Tech de la semaine #43 — Altruisme.DEV',
      article: true,
      articleSection: week43.format,
      publishedAt: week43.publishedAt,
      modifiedAt: week43.modifiedAt,
      author: week43.author,
    },
  },
  {
    path: `/actualites/${week42.slug}`,
    name: 'news-week-42',
    component: () => import('../views/news/Week42View.vue'),
    meta: {
      title: 'Actu Tech semaine #42 : Google s’attaque au grand verrou du quantique',
      description:
        'Google avance sur le quantique, Meta muscle ses modèles IA, Apple pousse la maison connectée et les puces restent sous tension : l’actu Tech de la semaine #42.',
      ogTitle: week42.title,
      ogDescription:
        'Google progresse sur la correction d’erreur quantique, Meta relance la course aux modèles, Apple accélère dans la maison connectée et la demande en puces reste explosive.',
      image: week42.image,
      imageAlt: week42.imageAlt,
      ogImageAlt: 'Actu Tech de la semaine #42 — Altruisme.DEV',
      article: true,
      articleSection: week42.format,
      publishedAt: week42.publishedAt,
      modifiedAt: week42.modifiedAt,
      author: week42.author,
    },
  },
  {
    path: `/actualites/${week41.slug}`,
    name: 'news-week-41',
    component: () => import('../views/news/Week41View.vue'),
    meta: {
      title: 'Actu Tech semaine #41 : Google veut faire de Gemini un collègue',
      description:
        'Gemini agent, IA locale, cybersécurité, traçabilité des contenus et datacenters : découvre les actualités Tech à retenir de la semaine #41.',
      ogTitle: week41.title,
      ogDescription:
        'Google transforme Gemini en agent de travail, Microsoft pousse l’IA locale et la sécurité devient une couche essentielle de l’écosystème agentique.',
      image: week41.image,
      imageAlt: week41.imageAlt,
      ogImageAlt: 'Actu Tech de la semaine #41 — Altruisme.DEV',
      article: true,
      articleSection: week41.format,
      publishedAt: week41.publishedAt,
      modifiedAt: week41.modifiedAt,
      author: week41.author,
    },
  },
  {
    path: `/actualites/${week40.slug}`,
    name: 'news-week-40',
    component: () => import('../views/news/Week40View.vue'),
    meta: {
      title: 'Actu Tech semaine #40 : l’IA ne veut plus seulement discuter',
      description:
        'OpenAI DevDay, agents IA, sécurité, Gemini 4 et infrastructure : découvre les actualités Tech à retenir de la semaine #40.',
      ogTitle: week40.title,
      image: week40.image,
      imageAlt: week40.imageAlt,
      article: true,
      articleSection: week40.format,
      publishedAt: week40.publishedAt,
      modifiedAt: week40.modifiedAt,
      author: week40.author,
    },
  },
  {
    path: `/actualites/${week39.slug}`,
    name: 'news-week-39',
    component: () => import('../views/news/Week39View.vue'),
    meta: {
      title: 'Actu Tech de la semaine #39 : Claude, IA et cybersécurité',
      description:
        'L’essentiel de l’actu Tech de la semaine #39 : Claude et la recherche scientifique, cybersécurité, Databricks, IA et datacenters.',
      ogTitle: week39.title,
      image: week39.image,
      imageAlt: week39.imageAlt,
      article: true,
      articleSection: week39.format,
      publishedAt: week39.publishedAt,
      modifiedAt: week39.modifiedAt,
      author: week39.author,
    },
  },
  {
    path: '/podcast',
    name: 'podcast',
    component: () => import('../views/PodcastView.vue'),
    meta: {
      title: 'Podcast | Altruisme.DEV',
      description:
        'Le podcast Altruisme.DEV : conversations de fond avec celles et ceux qui construisent la tech.',
    },
  },
  {
    path: '/communaute',
    redirect: '/checklist',
  },
  {
    path: '/contribuer',
    name: 'contribute',
    component: () => import('../views/ContributeView.vue'),
    meta: {
      title: 'Contribuer | Altruisme.DEV',
      description:
        'Propose un article, un retour d’expérience, un sujet, un invité ou une contribution au média Altruisme.DEV.',
    },
  },
  {
    path: '/mentions-legales',
    name: 'legal-notice',
    component: () => import('@/views/legal/LegalNoticeView.vue'),
    meta: {
      title: 'Mentions légales | Altruisme.DEV',
      description: 'Mentions légales du site Altruisme.DEV.',
      robots: 'noindex, follow',
    },
  },
  {
    path: '/politique-de-confidentialite',
    name: 'privacy-policy',
    component: () => import('@/views/legal/PrivacyPolicyView.vue'),
    meta: {
      title: 'Politique de confidentialité | Altruisme.DEV',
      description: 'Politique de confidentialité d’Altruisme.DEV.',
      robots: 'noindex, follow',
    },
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('@/views/legal/CookiesView.vue'),
    meta: {
      title: 'Gestion des cookies | Altruisme.DEV',
      description: 'Informations et préférences concernant les cookies utilisés sur Altruisme.DEV.',
      robots: 'noindex, follow',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: 'Page introuvable | Altruisme.DEV',
      description: 'Cette page n’existe pas ou n’est plus disponible.',
      robots: 'noindex, follow',
    },
  },
]

export function createWebsiteRouter(server = import.meta.env.SSR) {
  const router = createRouter({
    history: server
      ? createMemoryHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL),
    routes,
    async scrollBehavior(to, _from, savedPosition) {
      await nextTick()
      if (savedPosition) return savedPosition
      if (to.hash) {
        let id = to.hash.slice(1)
        try {
          id = decodeURIComponent(id)
        } catch {
          /* Keep malformed fragments literal. */
        }
        const element = document.getElementById(id)
        if (element)
          return { el: element, top: parseFloat(getComputedStyle(element).scrollMarginTop) || 112 }
      }
      return { top: 0 }
    },
  })

  if (!server) router.afterEach((to) => updatePageMetadata(to))
  return router
}
