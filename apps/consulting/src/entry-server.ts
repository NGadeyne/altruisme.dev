import { renderToString } from '@vue/server-renderer'
import { createSSRApp } from 'vue'
import App from './App.vue'

export function render() {
  return renderToString(createSSRApp(App))
}
