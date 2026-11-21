import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// Learn renders each lesson as a page. Here its title is already an H2 within a module.
// Shift the shared reading content and its scoped typography together at build time.
const moduleHeadings: Plugin = {
  name: 'seo-module-heading-levels',
  enforce: 'pre',
  transform: {
    filter: {
      id: /\/learn\/src\/components\/courses\/(?:SeoLesson(?:\d+Content|Quiz)|practices\/SeoPractice\d+Content)\.vue$/,
    },
    handler(source) {
      const nextLevel = (_match: string, prefix: string, level: string) =>
        prefix + (Number(level) + 1)
      return source
        .replace(/<template>[\s\S]*<\/template>/, (template) =>
          template.replace(/(<\/?h)([2-4])(?=[\s>])/g, nextLevel),
        )
        .replace(/(\.seo-lesson-content h)([2-4])(?=\s*\{)/g, nextLevel)
    },
  },
}

export default defineConfig({
  build: { manifest: true },
  server: {
    proxy: { '/api': 'http://localhost:8787' },
  },
  plugins: [moduleHeadings, vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
