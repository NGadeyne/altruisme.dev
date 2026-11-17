import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

function protectedCourseAssets(): Plugin {
  const protectedModule =
    /\/(?:src\/views\/(?:SeoLessonView|SeoPractice\d{2}View|LessonView|ResourceView)\.vue|src\/components\/courses\/(?:SeoLesson\d{2}(?:Content|Quiz)|SeoFurtherReading)\.vue|src\/data\/(?:training|resources|seoActions|seoResources|seoExternalResources|learningPlanCourses)\.ts)(?:\?|$)/

  return {
    name: 'learn-protected-course-assets',
    generateBundle(_options, bundle) {
      const assets = Object.keys(bundle).map((path) => `/${path}`)
      const scripts: string[] = []
      const protectedScripts: string[] = []
      const protectedModules = new Set<string>()

      for (const entry of Object.values(bundle)) {
        if (entry.type !== 'chunk') continue
        const path = `/${entry.fileName}`
        scripts.push(path)
        const modules = Object.keys(entry.modules).filter((module) => protectedModule.test(module))
        if (modules.length > 0) {
          protectedScripts.push(path)
          for (const module of modules) protectedModules.add(module.split('?')[0] ?? module)
        }
      }

      const lessonBodies = [...protectedModules].filter((module) =>
        /\/SeoLesson\d{2}Content\.vue$/.test(module),
      )
      const lessonQuizzes = [...protectedModules].filter((module) =>
        /\/SeoLesson\d{2}Quiz\.vue$/.test(module),
      )
      const practices = [...protectedModules].filter((module) =>
        /\/SeoPractice\d{2}View\.vue$/.test(module),
      )
      if (lessonBodies.length !== 31 || lessonQuizzes.length !== 31 || practices.length !== 10) {
        throw new Error('Le build Learn ne protège pas tous les contenus SEO attendus.')
      }

      this.emitFile({
        type: 'asset',
        fileName: 'protected-assets.json',
        source: JSON.stringify({
          assets: assets.sort(),
          scripts: scripts.sort(),
          protectedScripts: protectedScripts.sort(),
        }),
      })
    },
  }
}

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(), protectedCourseAssets()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
