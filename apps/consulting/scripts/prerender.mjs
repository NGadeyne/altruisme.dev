import { readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const appDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const clientDirectory = resolve(appDirectory, 'dist')
const serverDirectory = resolve(appDirectory, '.ssr')
const clientEntry = resolve(clientDirectory, 'index.html')

const serverFiles = await readdir(serverDirectory)
const serverEntry = serverFiles.find((file) => file.startsWith('entry-server.'))
if (!serverEntry) throw new Error('Unable to find the Consulting SSR entry.')

const { render } = await import(pathToFileURL(resolve(serverDirectory, serverEntry)).href)
const appHtml = await render()
let html = await readFile(clientEntry, 'utf8')

const appMarker = '<div id="app"></div>'
if (!html.includes(appMarker)) throw new Error('Unable to find the Consulting app mount point.')
html = html.replace(appMarker, `<div id="app">${appHtml}</div>`)

const stylesheetPattern = /<link rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/g
const stylesheets = [...html.matchAll(stylesheetPattern)]
if (stylesheets.length === 0) throw new Error('Unable to find the Consulting production stylesheet.')

for (const match of stylesheets) {
  const [tag, href] = match
  if (!href?.startsWith('/')) continue
  const cssPath = resolve(clientDirectory, `.${href}`)
  const css = await readFile(cssPath, 'utf8')
  html = html.replace(tag, `<style>${css}</style>`)
  await rm(cssPath)
}

await writeFile(clientEntry, html)
await rm(serverDirectory, { recursive: true, force: true })
