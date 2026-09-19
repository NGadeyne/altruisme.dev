import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const SITE_NAME = 'Altruisme.DEV'
const SITE_URL = 'https://altruisme.dev'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Altruisme.DEV | Média tech indépendant', description: 'Guides de fond, actualités expliquées, podcast et communauté autour du produit, du SaaS, de l’IA, de l’automatisation, du freelancing et de la tech.' } },
    { path: '/apropos', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'À propos | Nicolas Gadeyne & Altruisme.DEV', description: 'Découvre Nicolas Gadeyne, l’origine d’Altruisme.DEV et la vision derrière ce média tech indépendant.' } },
    { path: '/guides', name: 'guides', component: () => import('../views/GuidesView.vue'), meta: { title: 'Guides tech 2026 | Altruisme.DEV', description: 'Guides complets sur le freelancing, le SaaS, l’automatisation, les ESN, l’e-commerce, l’IA et les marketplaces.' } },
    { path: '/guides/freelance', name: 'guide-freelance-2026', component: () => import('../views/guides/Freelance2026GuideView.vue'), meta: { title: 'Freelance 2026 : Guide complet | Altruisme.DEV', description: 'Le guide complet 2026 pour construire, développer et pérenniser une activité freelance.' } },
    { path: '/guides/saas', name: 'guide-saas-2026', component: () => import('../views/guides/Saas2026GuideView.vue'), meta: { title: 'SaaS 2026 : Guide complet | Altruisme.DEV', description: 'Le guide complet 2026 pour comprendre, construire, lancer et développer un produit SaaS.' } },
    { path: '/actualites', name: 'news', component: () => import('../views/NewsView.vue'), meta: { title: 'Actualités tech de la semaine | Altruisme.DEV', description: 'Une sélection hebdomadaire des actualités produit, SaaS, IA, automatisation, freelance et entreprises tech, expliquées avec du contexte.' } },
    { path: '/podcast', name: 'podcast', component: () => import('../views/PodcastView.vue'), meta: { title: 'Podcast | Altruisme.DEV', description: 'Le podcast Altruisme.DEV : conversations de fond avec celles et ceux qui construisent la tech.' } },
    { path: '/communaute', name: 'community', component: () => import('../views/CommunityView.vue'), meta: { title: 'Communauté | Altruisme.DEV', description: 'Rejoins la communauté Altruisme.DEV pour échanger autour du produit, du code, du SaaS, de l’IA, du freelancing et de la tech.' } },
    { path: '/contact', redirect: '/communaute' },
    { path: '/contribuer', name: 'contribute', component: () => import('../views/ContributeView.vue'), meta: { title: 'Contribuer | Altruisme.DEV', description: 'Propose un article, un retour d’expérience, un sujet, un invité ou une contribution au média Altruisme.DEV.' } },
    { path: '/mentions-legales', name: 'legal-notice', component: () => import('@/views/legal/LegalNoticeView.vue'), meta: { title: 'Mentions légales | Altruisme.DEV', description: 'Mentions légales du site Altruisme.DEV.', robots: 'noindex, follow' } },
    { path: '/politique-de-confidentialite', name: 'privacy-policy', component: () => import('@/views/legal/PrivacyPolicyView.vue'), meta: { title: 'Politique de confidentialité | Altruisme.DEV', description: 'Politique de confidentialité d’Altruisme.DEV.', robots: 'noindex, follow' } },
    { path: '/cookies', name: 'cookies', component: () => import('@/views/legal/CookiesView.vue'), meta: { title: 'Gestion des cookies | Altruisme.DEV', description: 'Informations et préférences concernant les cookies utilisés sur Altruisme.DEV.', robots: 'noindex, follow' } },
  ],
  scrollBehavior() { return { top: 0 } },
})

function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null
  if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element) }
  element.setAttribute('content', content)
}
function setCanonical(url: string) {
  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
  canonical.href = url
}
router.afterEach((to) => {
  const title = (to.meta.title as string) || SITE_NAME
  const description = (to.meta.description as string) || 'Média tech indépendant : guides, actualités, podcast et communauté.'
  const robots = (to.meta.robots as string) || 'index, follow'
  const path = to.path === '/' ? '/' : to.path.replace(/\/+$/, '')
  const canonicalUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  document.title = title; document.documentElement.lang = 'fr'
  setMetaTag('description', description); setMetaTag('robots', robots); setCanonical(canonicalUrl)
  setMetaTag('og:title', title, 'property'); setMetaTag('og:description', description, 'property'); setMetaTag('og:type', 'website', 'property'); setMetaTag('og:url', canonicalUrl, 'property'); setMetaTag('og:site_name', SITE_NAME, 'property'); setMetaTag('og:locale', 'fr_FR', 'property')
  setMetaTag('twitter:card', 'summary_large_image'); setMetaTag('twitter:title', title); setMetaTag('twitter:description', description)
})
export default router
