import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { prerenderPaths, redirectPaths, render } from '../node_modules/.prerender/entry-server.js'

const output = resolve('dist')
const template = await readFile(resolve(output, 'index.html'), 'utf8')
const manifest = JSON.parse(await readFile(resolve(output, '.vite/manifest.json'), 'utf8'))

// Include the CSS of lazy-loaded page components before hydration, avoiding unstyled content.
function pageStyles(modules) {
  const css = new Set()
  const seen = new Set()
  function visit(key) {
    if (seen.has(key)) return
    seen.add(key)
    const chunk = manifest[key]
    if (!chunk) return
    for (const file of chunk.css ?? []) css.add(file)
    for (const dependency of chunk.imports ?? []) visit(dependency)
  }
  for (const module of modules) visit(module)
  return [...css]
    .filter((file) => !template.includes(`/${file}`))
    .map((file) => `<link rel="stylesheet" href="/${file}">`)
    .join('\n')
}

for (const path of [...prerenderPaths, '/404']) {
  const { html, head, modules } = await render(path)
  const page = template
    .replace(/<title>[\s\S]*?<\/title>/, () => head + '\n' + pageStyles(modules))
    .replace('<div id="app"></div>', () => `<div id="app">${html}</div>`)
  const file = resolve(output, path === '/' ? 'index.html' : `${path.slice(1)}.html`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page)
}
console.log(`Prerendered ${prerenderPaths.length} pages and 404.html.`)

// Preserve remaining route aliases at the HTTP layer; retired URLs are not registered routes.
const redirects = []
for (const path of redirectPaths) {
  const { resolvedPath } = await render(path)
  redirects.push(`${path} ${resolvedPath} 301`)
}
if (redirects.length) await writeFile(resolve(output, '_redirects'), redirects.join('\n') + '\n')
