import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'
import publicPages from '@/data/publicPages.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        public: true,
        layout: 'auth',
      },
    },

    {
      path: '/',
      name: 'landing',
      component: () => import('@/views/LandingView.vue'),
      meta: {
        public: true,
        layout: 'public',
        ...publicPages['/'],
      },
    },

    {
      path: '/formations',
      name: 'formations',
      component: () => import('@/views/FormationsView.vue'),
      meta: {
        public: true,
        layout: 'public',
        ...publicPages['/formations'],
      },
    },

    {
      path: '/formations/seo',
      name: 'formation-seo',
      component: () => import('@/views/SeoFormationView.vue'),
      meta: {
        public: true,
        layout: 'public',
        ...publicPages['/formations/seo'],
      },
    },

    {
      path: '/bootcamp/freelance',
      name: 'bootcamp-freelance',
      component: () => import('@/views/FreelanceBootcampView.vue'),
      meta: {
        public: true,
        layout: 'public',
        ...publicPages['/bootcamp/freelance'],
      },
    },

    {
      path: '/academie',
      name: 'academie',
      component: () => import('@/views/AcademieView.vue'),
      meta: {
        public: true,
        layout: 'public',
        ...publicPages['/academie'],
      },
    },

    {
      path: '/app',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/lessons/:lessonSlug',
      name: 'lesson',
      component: () => import('@/views/LessonView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/resources/:resourceSlug',
      name: 'resource',
      component: () => import('@/views/ResourceView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/ateliers',
      name: 'workshops',
      component: () => import('@/views/WorkshopsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/pilotage',
      name: 'pilotage',
      component: () => import('@/views/PilotageView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/pilotage/opportunites',
      name: 'opportunities',
      component: () => import('@/views/OpportunitiesView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/pilotage/actions',
      name: 'actions',
      component: () => import('@/views/ActionsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if (authStore.loading) {
    await authStore.initialize()
  }

  if (to.meta.requiresAuth && !authStore.user) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath,
      },
    }
  }

  if (to.name === 'login' && authStore.user) {
    return {
      name: 'dashboard',
    }
  }

  return true
})

router.afterEach((to) => {
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')

  if (typeof to.meta.title !== 'string' || typeof to.meta.description !== 'string') {
    canonical?.remove()
    if (robots) robots.content = 'noindex, nofollow'
    else {
      const tag = document.createElement('meta')
      tag.name = 'robots'
      tag.content = 'noindex, nofollow'
      document.head.append(tag)
    }
    return
  }

  robots?.remove()

  document.title = to.meta.title

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) description.content = to.meta.description

  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
  if (ogTitle) ogTitle.content = to.meta.title

  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
  if (ogDescription) ogDescription.content = to.meta.description

  const link = canonical ?? document.createElement('link')
  link.rel = 'canonical'
  link.href = `https://learn.altruisme.dev${to.path}`
  if (!canonical) document.head.append(link)
})

export default router
