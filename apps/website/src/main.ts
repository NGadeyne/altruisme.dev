import './assets/main.css'
import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { createWebsiteRouter } from './router'
import { startMetaPixel } from './lib/metaPixel'
import { startGoogleTagManager } from './lib/googleTagManager'

const router = createWebsiteRouter()
const prerendered = document.getElementById('app')?.hasChildNodes()
const app = prerendered ? createSSRApp(App) : createApp(App)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
  startMetaPixel(router)
  startGoogleTagManager(router)
})
