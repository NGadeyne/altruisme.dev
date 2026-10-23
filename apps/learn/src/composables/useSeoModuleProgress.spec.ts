import { flushPromises } from '@vue/test-utils'
import { effectScope, nextTick, ref } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useSeoModuleProgress } from '@/composables/useSeoModuleProgress'
import { seoProgram } from '@/data/seoProgram'

const mock = vi.hoisted(() => ({
  rows: new Map<string, Set<string>>(),
  failSave: false,
  failLoad: false,
}))

vi.mock('@/services/seoModuleProgress', () => ({
  async loadSeoModuleProgress(userId: string) {
    if (mock.failLoad) throw new Error('load failed')
    return [...(mock.rows.get(userId) ?? new Set<string>())]
  },
  async completeSeoModule(userId: string, moduleId: string) {
    if (mock.failSave) throw new Error('save failed')
    const modules = mock.rows.get(userId) ?? new Set<string>()
    modules.add(moduleId)
    mock.rows.set(userId, modules)
  },
  async reopenSeoModule(userId: string, moduleId: string) {
    if (mock.failSave) throw new Error('save failed')
    mock.rows.get(userId)?.delete(moduleId)
  },
}))

beforeEach(() => {
  mock.rows.clear()
  mock.failSave = false
  mock.failLoad = false
  localStorage.clear()
})

describe('progression des modules SEO', () => {
  it('retrouve trois modules sur un autre appareil et sépare les comptes', async () => {
    const userId = ref<string | undefined>('learner-a')
    const scope = effectScope()
    const progress = scope.run(() => useSeoModuleProgress(userId))!
    await flushPromises()

    for (const module of seoProgram.slice(0, 3)) {
      expect(await progress.toggleCompleted(module.id)).toBe(true)
    }
    expect(progress.completedCount.value).toBe(3)
    expect(progress.percentage.value).toBe(30)

    userId.value = 'learner-b'
    await nextTick()
    await flushPromises()
    expect(progress.completedCount.value).toBe(0)

    userId.value = 'learner-a'
    await nextTick()
    await flushPromises()
    expect(progress.completedCount.value).toBe(3)

    // A fresh browser has no local progress but loads the same server state.
    scope.stop()
    localStorage.clear()
    const restored = effectScope()
    const restoredProgress = restored.run(() => useSeoModuleProgress(userId))!
    await flushPromises()
    expect(restoredProgress.completedCount.value).toBe(3)
    expect(await restoredProgress.toggleCompleted(seoProgram[0]!.id)).toBe(true)
    expect(restoredProgress.completedCount.value).toBe(2)
    restored.stop()
  })

  it('importe une seule fois la progression locale existante', async () => {
    const userId = ref<string | undefined>('learner-a')
    const key = 'altruisme-learn-seo-modules:learner-a'
    localStorage.setItem(key, JSON.stringify([seoProgram[0]!.id, seoProgram[1]!.id]))
    mock.rows.set('learner-a', new Set([seoProgram[0]!.id]))

    const scope = effectScope()
    const progress = scope.run(() => useSeoModuleProgress(userId))!
    await flushPromises()

    expect(progress.completedCount.value).toBe(2)
    expect(mock.rows.get('learner-a')).toEqual(new Set([seoProgram[0]!.id, seoProgram[1]!.id]))
    expect(localStorage.getItem(key)).toBeNull()
    scope.stop()
  })

  it('conserve la copie locale si son import échoue, puis permet de réessayer', async () => {
    const userId = ref<string | undefined>('learner-a')
    const key = 'altruisme-learn-seo-modules:learner-a'
    localStorage.setItem(key, JSON.stringify([seoProgram[0]!.id]))
    mock.failSave = true

    const scope = effectScope()
    const progress = scope.run(() => useSeoModuleProgress(userId))!
    await flushPromises()
    expect(progress.error.value).toContain('charger')
    expect(localStorage.getItem(key)).not.toBeNull()

    mock.failSave = false
    await progress.reload()
    expect(progress.completedCount.value).toBe(1)
    expect(localStorage.getItem(key)).toBeNull()
    scope.stop()
  })

  it('rétablit le dernier état enregistré si une modification échoue', async () => {
    const userId = ref<string | undefined>('learner-a')
    const scope = effectScope()
    const progress = scope.run(() => useSeoModuleProgress(userId))!
    await flushPromises()
    mock.failSave = true

    expect(await progress.toggleCompleted(seoProgram[0]!.id)).toBe(false)
    expect(progress.completedCount.value).toBe(0)
    expect(progress.error.value).toContain('enregistrer')

    mock.failSave = false
    await progress.reload()
    expect(progress.error.value).toBe('')
    scope.stop()
  })
})
