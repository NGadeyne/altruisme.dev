import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { createWebsiteRouter, routes } from './router'
import { renderPageMetadata } from './lib/pageMetadata'

export const prerenderPaths = routes
  .filter((route) => !route.redirect && !route.path.includes(':'))
  .map((route) => route.path)

export const redirectPaths = routes.filter((route) => route.redirect).map((route) => route.path)

export async function render(path: string) {
  const router = createWebsiteRouter(true)
  const app = createSSRApp(App)
  app.use(router)
  await router.push(path)
  await router.isReady()
  const context: { modules?: Set<string> } = {}
  const html = await renderToString(app, context)
  return {
    html,
    resolvedPath: router.currentRoute.value.path,
    head: renderPageMetadata(router.currentRoute.value),
    modules: [...(context.modules ?? [])],
  }
}
