import './assets/main.css'
import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { createWebsiteRouter } from './router'

const router = createWebsiteRouter()
const prerendered = document.getElementById('app')?.hasChildNodes()
const app = prerendered ? createSSRApp(App) : createApp(App)
app.use(router)
router.isReady().then(() => app.mount('#app'))
