import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { getSeoLessonBySlug, getSeoLessonSlug, seoProgram } from '../../../apps/learn/src/data/seoProgram.ts'

// Vue is a direct dependency of Learn, whose static lesson components are the source.
const requireFromLearn = createRequire(new URL('../../../apps/learn/package.json', import.meta.url))
const { parse } = requireFromLearn('vue/compiler-sfc')
const sourceDir = fileURLToPath(new URL('../../../apps/learn/src/components/courses/', import.meta.url))
const catalogPath = fileURLToPath(new URL('../src/lessonCatalog.ts', import.meta.url))
const source = 'altruisme-learn-seo'
const baseUrl = 'https://api.openai.com/v1'

function inline(node) {
  if (node.type === 2) return node.content.replace(/\s+/g, ' ')
  if (node.type !== 1) throw new Error('Dynamic lesson content cannot be indexed safely')
  if (node.props.some((prop) => prop.type === 7)) throw new Error('Dynamic lesson props cannot be indexed safely')
  const value = node.children.map(inline).join('').replace(/\s+/g, ' ').trim()
  if (node.tag === 'strong') return `**${value}**`
  if (node.tag === 'em') return `*${value}*`
  if (node.tag === 'code') return `\`${value}\``
  if (node.tag === 'a') {
    const href = node.props.find((prop) => prop.name === 'href')?.value?.content
    return href && /^https?:\/\//.test(href) ? `[${value}](${href})` : value
  }
  return value
}

function table(node) {
  const rows = []
  const collect = (item) => {
    if (item.type !== 1) return
    if (item.tag === 'tr') {
      rows.push(item.children.filter((cell) => cell.type === 1).map(inline))
      return
    }
    item.children.forEach(collect)
  }
  collect(node)
  if (!rows.length) return ''
  const width = Math.max(...rows.map((row) => row.length))
  const format = (row) => `| ${Array.from({ length: width }, (_, index) => (row[index] ?? '').replace(/\|/g, '\\|')).join(' | ')} |`
  return [format(rows[0]), format(Array(width).fill('---')), ...rows.slice(1).map(format)].join('\n')
}

function blocks(node) {
  if (node.type === 2) return node.content.trim() ? [node.content.trim()] : []
  if (node.type !== 1) throw new Error('Dynamic lesson content cannot be indexed safely')
  if (/^SeoLesson\d+Quiz$/.test(node.tag)) return []
  if (/^h[2-4]$/.test(node.tag)) return [`${'#'.repeat(Number(node.tag[1]))} ${inline(node).trim()}`]
  if (node.tag === 'p') return [inline(node).trim()]
  if (node.tag === 'pre') {
    const code = node.children.map((child) => child.children?.map((part) => part.content ?? '').join('') ?? child.content ?? '').join('').trim()
    return [code ? `\`\`\`text\n${code}\n\`\`\`` : '']
  }
  if (node.tag === 'table') return [table(node)]
  if (node.tag === 'article' || node.tag === 'div') return node.children.flatMap(blocks)
  throw new Error(`Unsupported lesson tag: ${node.tag}`)
}

async function documents() {
  const lessons = seoProgram.flatMap((module) => module.lessons.map((lesson) => ({
    id: lesson.id,
    number: lesson.number,
    title: lesson.title,
    moduleTitle: module.title,
    filename: `${lesson.id}.md`,
    url: `/formation/${getSeoLessonSlug(lesson.id)}`,
  })))
  if (!lessons.length || new Set(lessons.map((lesson) => lesson.id)).size !== lessons.length ||
      new Set(lessons.map((lesson) => lesson.number)).size !== lessons.length ||
      lessons.some((lesson) => getSeoLessonBySlug(getSeoLessonSlug(lesson.id))?.number !== lesson.number)) {
    throw new Error('Unexpected SEO lesson catalog: review the source program before syncing')
  }
  const result = []
  for (const lesson of lessons) {
    const path = join(sourceDir, `SeoLesson${String(lesson.number).padStart(2, '0')}Content.vue`)
    const { descriptor, errors } = parse(await readFile(path, 'utf8'))
    if (errors.length || !descriptor.template?.ast) throw new Error(`Cannot parse ${lesson.id}`)
    const body = descriptor.template.ast.children.flatMap(blocks).filter(Boolean).join('\n\n')
    if (body.length < 1_000) throw new Error(`Lesson content seems incomplete: ${lesson.id}`)
    const content = `# Leçon ${lesson.number} — ${lesson.title}\n\nModule : ${lesson.moduleTitle}\nURL : https://learn.altruisme.dev${lesson.url}\n\n${body}\n`
    result.push({ ...lesson, content, hash: createHash('sha256').update(content).digest('hex') })
  }
  return result
}

async function api(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, ...options.headers },
    signal: AbortSignal.timeout(30_000),
  })
  if (!response.ok) throw new Error(`OpenAI request failed (${response.status}, ${path.split('?')[0]})`)
  return response.json()
}

async function listFiles(storeId) {
  const files = []
  let after
  do {
    const query = new URLSearchParams({ limit: '100' })
    if (after) query.set('after', after)
    const page = await api(`/vector_stores/${encodeURIComponent(storeId)}/files?${query}`)
    if (!Array.isArray(page.data)) throw new Error('Invalid vector store file list')
    files.push(...page.data)
    after = page.has_more ? page.data.at(-1)?.id : undefined
    if (page.has_more && !after) throw new Error('Invalid vector store pagination')
  } while (after)
  return files.filter((file) => file.attributes?.source === source)
}

export function planFor(docs, files, pruneIds) {
  const plan = []
  for (const doc of docs) {
    const existing = files.filter((file) => file.attributes?.lesson_id === doc.id)
    const matching = existing.find((file) => file.attributes.sha256 === doc.hash && file.status === 'completed') ??
      existing.find((file) => file.attributes.sha256 === doc.hash && file.status === 'in_progress')
    if (matching && existing.length === 1 && matching.status === 'completed') continue
    plan.push({
      action: matching ? 'finish' : existing.length ? 'replace' : 'add',
      lesson: doc.id,
      currentFile: matching?.id,
      oldFiles: existing.filter((file) => file.id !== matching?.id).map((file) => file.id),
      hash: doc.hash,
    })
  }
  const currentIds = new Set(docs.map((doc) => doc.id))
  for (const id of pruneIds) {
    if (currentIds.has(id)) throw new Error(`Cannot prune a current lesson: ${id}`)
    const oldFiles = files.filter((file) => file.attributes?.lesson_id === id).map((file) => file.id)
    if (oldFiles.length) plan.push({ action: 'prune', lesson: id, oldFiles })
  }
  const unknown = files.filter((file) => !currentIds.has(file.attributes?.lesson_id) && !pruneIds.has(file.attributes?.lesson_id))
  const fingerprint = createHash('sha256').update(JSON.stringify(plan)).digest('hex').slice(0, 16)
  return { plan, unknown, fingerprint }
}

async function waitForIndex(storeId, fileId) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const file = await api(`/vector_stores/${encodeURIComponent(storeId)}/files/${encodeURIComponent(fileId)}`)
    if (file.status === 'completed') return
    if (file.status === 'failed' || file.status === 'cancelled') throw new Error(`Indexing failed for ${fileId}`)
    await new Promise((resolve) => setTimeout(resolve, 2_000))
  }
  throw new Error(`Indexing timed out for ${fileId}`)
}

async function attach(storeId, doc) {
  const form = new FormData()
  form.set('purpose', 'assistants')
  form.set('file', new Blob([doc.content], { type: 'text/markdown' }), doc.filename)
  const uploaded = await api('/files', { method: 'POST', body: form })
  if (typeof uploaded.id !== 'string') throw new Error(`Upload failed for ${doc.id}`)
  const attached = await api(`/vector_stores/${encodeURIComponent(storeId)}/files`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      file_id: uploaded.id,
      attributes: { source, lesson_id: doc.id, sha256: doc.hash },
    }),
  })
  if (typeof attached.id !== 'string' || attached.id !== uploaded.id) {
    throw new Error(`Unexpected vector store file ID for ${doc.id}`)
  }
  await waitForIndex(storeId, attached.id)
  return attached.id
}

async function detach(storeId, fileId) {
  await api(`/vector_stores/${encodeURIComponent(storeId)}/files/${encodeURIComponent(fileId)}`, { method: 'DELETE' })
}

async function main() {
  const args = process.argv.slice(2)
  const exportArg = args.find((arg) => arg.startsWith('--export-dir='))
  const writeCatalog = args.includes('--write-catalog')
  const apply = args.includes('--apply')
  const confirm = args.find((arg) => arg.startsWith('--confirm='))?.slice('--confirm='.length)
  const pruneArg = args.find((arg) => arg.startsWith('--prune='))?.slice('--prune='.length)
  const pruneIds = new Set(pruneArg ? pruneArg.split(',').filter(Boolean) : [])
  if (args.some((arg) => !arg.startsWith('--export-dir=') && !arg.startsWith('--confirm=') && !arg.startsWith('--prune=') && arg !== '--apply' && arg !== '--write-catalog')) {
    throw new Error('Unknown option')
  }
  if ([...pruneIds].some((id) => !/^seo-lesson-\d{2}$/.test(id))) throw new Error('Invalid --prune lesson ID')
  const docs = await documents()
  const catalog = docs.map(({ id, number, title, moduleTitle, filename, url }) => ({ id, number, title, moduleTitle, filename, url }))
  const catalogSource = `// Generated from apps/learn/src/data/seoProgram.ts by scripts/sync-lessons.mjs.\nexport const lessonCatalog = ${JSON.stringify(catalog, null, 2)} as const\n`
  if (writeCatalog) {
    if (args.length !== 1) throw new Error('--write-catalog cannot be combined with other options')
    await writeFile(catalogPath, catalogSource)
    console.log(`Updated lesson catalog (${docs.length} lessons)`)
    return
  }
  if (exportArg) {
    const directory = exportArg.slice('--export-dir='.length)
    if (!directory) throw new Error('Missing export directory')
    await mkdir(directory, { recursive: true })
    for (const doc of docs) await writeFile(join(directory, doc.filename), doc.content)
    await writeFile(join(directory, 'lessonCatalog.ts'), catalogSource)
    console.log(`Exported ${docs.length} lessons to ${directory}`)
    return
  }
  if ((await readFile(catalogPath, 'utf8')) !== catalogSource) {
    throw new Error('Lesson catalog is outdated. Export and copy lessonCatalog.ts into workers/learn-ai/src before syncing.')
  }
  const storeId = process.env.OPENAI_VECTOR_STORE_ID
  if (!process.env.OPENAI_API_KEY || !storeId || !/^vs_[A-Za-z0-9_-]+$/.test(storeId)) {
    throw new Error('Set OPENAI_API_KEY and an existing OPENAI_VECTOR_STORE_ID in your shell')
  }
  const { plan, unknown, fingerprint } = planFor(docs, await listFiles(storeId), pruneIds)
  for (const step of plan) console.log(`${step.action}: ${step.lesson}${step.oldFiles.length ? ` (${step.oldFiles.length} old file(s))` : ''}`)
  console.log(`Unlisted obsolete files left untouched: ${unknown.length}`)
  console.log(`Plan ID: ${fingerprint}`)
  if (!apply) return
  if (confirm !== fingerprint) throw new Error(`Apply requires --confirm=${fingerprint} from the reviewed plan`)
  for (const step of plan) {
    if (step.action === 'finish' && step.currentFile) {
      await waitForIndex(storeId, step.currentFile)
    } else if (step.action !== 'prune') {
      const doc = docs.find((item) => item.id === step.lesson)
      await attach(storeId, doc)
    }
    for (const fileId of step.oldFiles) await detach(storeId, fileId)
    console.log(`Completed ${step.action}: ${step.lesson}`)
  }
  console.log('Synchronization complete. Detached File objects remain in OpenAI Files for separate review.')
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : 'Synchronization failed')
    process.exitCode = 1
  })
}
