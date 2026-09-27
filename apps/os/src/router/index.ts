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
      path: '/prospects',
      name: 'prospects',
      component: () => import('@/views/ProspectsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/prospects/new',
      name: 'new-prospect',
      component: () => import('@/views/NewProspectView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/prospects/:prospectId',
      name: 'prospect',
      component: () => import('@/views/ProspectView.vue'),
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/clients',
      name: 'clients',
      component: () => import('@/views/ClientsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/clients/new',
      name: 'new-client',
      component: () => import('@/views/NewClientView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/clients/:clientId',
      name: 'client',
      component: () => import('@/views/ClientView.vue'),
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
