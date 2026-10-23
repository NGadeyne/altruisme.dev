import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'
import {
  lessonsAvailable,
  isSeoLessonAvailable,
  pilotageAvailable,
  resourcesAvailable,
  workshopsAvailable,
} from '@/config/features'
import publicPages from '@/data/publicPages.json'
import { getLearningPlanCourse } from '@/data/learningPlanCourses'
import { getSeoLessonBySlug, getSeoLessonSlug } from '@/data/seoProgram'

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
      path: '/inscription',
      redirect: { name: 'checkout' },
    },

    {
      path: '/activation',
      name: 'account-activation',
      component: () => import('@/views/AccountActivationView.vue'),
      meta: {
        public: true,
        layout: 'auth',
      },
    },

    {
      path: '/confirmation-email',
      name: 'email-confirmation',
      component: () => import('@/views/EmailConfirmationView.vue'),
      meta: {
        public: true,
        layout: 'auth',
      },
    },

    {
      path: '/paiement',
      name: 'checkout',
      component: () => import('@/views/CheckoutView.vue'),
      meta: {
        public: true,
        layout: 'auth',
      },
    },

    {
      path: '/acces',
      name: 'access-pending',
      component: () => import('@/views/AccessPendingView.vue'),
      meta: {
        requiresAuth: true,
        layout: 'auth',
      },
    },

    {
      path: '/',
      name: 'landing',
      component: () => import('@/views/LandingView.vue'),
      meta: {
        public: true,
        layout: 'consulting',
        ...publicPages['/'],
      },
    },

    {
      path: '/:section(formations|packs|bootcamps|bootcamp|academie|offre-introuvable)/:pathMatch(.*)*',
      name: 'public-not-found',
      component: () => import('@/views/PublicNotFoundView.vue'),
      meta: {
        public: true,
        layout: 'public',
        ...publicPages['/page-introuvable'],
      },
    },

    {
      path: '/formations',
      name: 'formations',
      component: () => import('@/views/FormationsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formations/seo',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/app',
      redirect: (to) => ({ name: 'dashboard', query: to.query, hash: to.hash }),
    },

    {
      path: '/plan-action',
      name: 'learning-plan',
      component: () => import('@/views/LearningPlanView.vue'),
      meta: {
        requiresAuth: true,
        courseSlug: 'seo',
      },
    },

    {
      path: '/app/formations/seo/plan-action',
      redirect: (to) => ({ name: 'learning-plan', query: to.query }),
    },

    {
      path: '/formation/pratique-01',
      name: 'seo-practice-01',
      component: () => import('@/views/SeoPractice01View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-02',
      name: 'seo-practice-02',
      component: () => import('@/views/SeoPractice02View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-03',
      name: 'seo-practice-03',
      component: () => import('@/views/SeoPractice03View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-04',
      name: 'seo-practice-04',
      component: () => import('@/views/SeoPractice04View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-05',
      name: 'seo-practice-05',
      component: () => import('@/views/SeoPractice05View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-06',
      name: 'seo-practice-06',
      component: () => import('@/views/SeoPractice06View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-07',
      name: 'seo-practice-07',
      component: () => import('@/views/SeoPractice07View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-08',
      name: 'seo-practice-08',
      component: () => import('@/views/SeoPractice08View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-09',
      name: 'seo-practice-09',
      component: () => import('@/views/SeoPractice09View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/pratique-10',
      name: 'seo-practice-10',
      component: () => import('@/views/SeoPractice10View.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/:lessonSlug',
      name: 'seo-lesson',
      component: () => import('@/views/SeoLessonView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/formation/:formationSlug/lecons/:lessonId',
      redirect: (to) =>
        to.params.formationSlug === 'seo'
          ? {
              name: 'seo-lesson',
              params: { lessonSlug: getSeoLessonSlug(String(to.params.lessonId)) },
              query: to.query,
              hash: to.hash,
            }
          : { name: 'dashboard' },
    },

    {
      path: '/app/formations/:formationSlug/lecons/:lessonId',
      redirect: (to) =>
        to.params.formationSlug === 'seo'
          ? {
              name: 'seo-lesson',
              params: { lessonSlug: getSeoLessonSlug(String(to.params.lessonId)) },
              query: to.query,
              hash: to.hash,
            }
          : { name: 'dashboard' },
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
      path: '/resources',
      name: 'resources',
      component: () => import('@/views/ResourcesView.vue'),
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
      path: '/assistant',
      name: 'seo-assistant',
      component: () => import('@/views/SeoAssistantView.vue'),
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

  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 96 }
    return {
      top: 0,
    }
  },
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if ((to.meta.requiresAuth || to.name === 'login') && authStore.loading) {
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

  if (authStore.user && (to.meta.requiresAuth || to.name === 'login')) {
    const userId = authStore.user.id
    const access = await authStore.refreshSeoAccess()
    if (authStore.user?.id !== userId) return { name: 'login' }

    if (to.name === 'login' || to.name === 'access-pending') {
      if (access === 'granted') return { name: 'dashboard' }
      if (to.name === 'login') return { name: 'access-pending' }
    } else if (access !== 'granted') {
      return { name: 'access-pending' }
    }
  }

  if (to.name === 'lesson' && !lessonsAvailable) {
    return { name: 'dashboard' }
  }

  if (to.name === 'learning-plan' && !getLearningPlanCourse(String(to.meta.courseSlug))) {
    return { name: 'dashboard' }
  }

  if (to.name === 'seo-lesson') {
    const lesson = getSeoLessonBySlug(String(to.params.lessonSlug))
    if (!lesson || !isSeoLessonAvailable(lesson.id)) return { name: 'dashboard' }
  }

  if (to.name === 'resource' && !resourcesAvailable) {
    return { name: 'resources' }
  }

  if (to.name === 'workshops' && !workshopsAvailable) {
    return { name: 'dashboard' }
  }

  if (
    !pilotageAvailable &&
    (to.name === 'pilotage' || to.name === 'opportunities' || to.name === 'actions')
  ) {
    return { name: 'dashboard' }
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

  if (typeof to.meta.robots === 'string') {
    const tag = robots ?? document.createElement('meta')
    tag.name = 'robots'
    tag.content = to.meta.robots
    if (!robots) document.head.append(tag)
  } else robots?.remove()

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
