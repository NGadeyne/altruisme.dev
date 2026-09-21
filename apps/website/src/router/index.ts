import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { nextTick } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { guideRoutes } from './guides'
import { updatePageMetadata } from '@/lib/pageMetadata'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Altruisme.DEV | Média tech indépendant',
      description:
        'Guides de fond, actualités expliquées, podcast et communauté autour du produit, du SaaS, de l’IA, de l’automatisation, du freelancing et de la tech.',
    },
  },
  {
    path: '/apropos',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'À propos | Nicolas Gadeyne & Altruisme.DEV',
      description:
        'Découvre Nicolas Gadeyne, l’origine d’Altruisme.DEV et la vision derrière ce média tech indépendant.',
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
  ...guideRoutes,
  {
    path: '/guides/saas-2026',
    redirect: (to) => ({ path: '/guides/saas', hash: to.hash, query: to.query }),
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
    name: 'community',
    component: () => import('../views/CommunityView.vue'),
    meta: {
      title: 'Communauté | Altruisme.DEV',
      description:
        'Rejoins la communauté Altruisme.DEV pour échanger autour du produit, du code, du SaaS, de l’IA, du freelancing et de la tech.',
    },
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
