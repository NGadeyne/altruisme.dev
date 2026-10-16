import { createApp, createSSRApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

const mountTarget = document.querySelector('#app')
if (!mountTarget) throw new Error('Unable to find the Consulting app mount point.')

const app = mountTarget.hasChildNodes() ? createSSRApp(App) : createApp(App)
app.mount(mountTarget)
