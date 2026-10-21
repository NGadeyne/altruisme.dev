import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

import { planFor } from '../scripts/sync-lessons.mjs'

const workerDir = dirname(dirname(fileURLToPath(import.meta.url)))

test('exports all current SEO lessons with their verified routes and a matching catalog', () => {
  const directory = mkdtempSync(join(tmpdir(), 'altruisme-seo-export-'))
  try {
    const result = spawnSync(process.execPath, [
      '--experimental-strip-types',
      'scripts/sync-lessons.mjs',
      `--export-dir=${directory}`,
    ], { cwd: workerDir, encoding: 'utf8' })
    assert.equal(result.status, 0, result.stderr)
    assert.equal(readdirSync(directory).filter((name) => /^seo-lesson-\d{2}\.md$/.test(name)).length, 28)
    const lesson15 = readFileSync(join(directory, 'seo-lesson-15.md'), 'utf8')
    assert.match(lesson15, /Leçon 15 — Comprendre robots\.txt, sitemap et balises canoniques/)
    assert.match(lesson15, /URL : https:\/\/learn\.altruisme\.dev\/formation\/lesson-15/)
    assert.match(lesson15, /robots\.txt/)
    assert.equal(
      readFileSync(join(directory, 'lessonCatalog.ts'), 'utf8'),
      readFileSync(join(workerDir, 'src/lessonCatalog.ts'), 'utf8'),
    )
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})

test('reuses an already indexed or indexing document instead of creating duplicates', () => {
  const docs = [{ id: 'seo-lesson-15', hash: 'current' }]
  const files = [
    { id: 'file_old', status: 'completed', attributes: { source: 'altruisme-learn-seo', lesson_id: 'seo-lesson-15', sha256: 'old' } },
    { id: 'file_new', status: 'in_progress', attributes: { source: 'altruisme-learn-seo', lesson_id: 'seo-lesson-15', sha256: 'current' } },
  ]
  const pending = planFor(docs, files, new Set())
  assert.deepEqual(pending.plan.map(({ action, currentFile, oldFiles }) => ({ action, currentFile, oldFiles })), [
    { action: 'finish', currentFile: 'file_new', oldFiles: ['file_old'] },
  ])

  files[1].status = 'completed'
  assert.equal(planFor(docs, files, new Set()).plan[0].action, 'finish')
  assert.deepEqual(planFor(docs, [files[1]], new Set()).plan, [])
})
