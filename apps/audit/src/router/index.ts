import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuditView from '@/views/AuditView.vue'
import ResultView from '@/views/ResultView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/diagnostic', name: 'audit', component: AuditView },
    { path: '/resultat', name: 'result', component: ResultView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
