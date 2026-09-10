import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'

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

export default router
