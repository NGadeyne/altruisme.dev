import { effectScope, nextTick, ref } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useSeoModuleProgress } from '@/composables/useSeoModuleProgress'
import { seoProgram } from '@/data/seoProgram'

beforeEach(() => localStorage.clear())

describe('progression des modules SEO', () => {
  it('conserve les validations par apprenant et les restaure au retour', async () => {
    const userId = ref<string | undefined>('learner-a')
    const scope = effectScope()
    const progress = scope.run(() => useSeoModuleProgress(userId))!

    for (const module of seoProgram.slice(0, 3)) {
      expect(progress.toggleCompleted(module.id)).toBe(true)
    }
    expect(progress.completedCount.value).toBe(3)
    expect(progress.percentage.value).toBe(33)

    userId.value = 'learner-b'
    await nextTick()
    expect(progress.completedCount.value).toBe(0)

    userId.value = 'learner-a'
    await nextTick()
    expect(progress.completedCount.value).toBe(3)

    const restored = effectScope()
    const restoredProgress = restored.run(() => useSeoModuleProgress(userId))!
    expect(restoredProgress.completedCount.value).toBe(3)
    expect(restoredProgress.toggleCompleted(seoProgram[0]!.id)).toBe(true)
    expect(restoredProgress.completedCount.value).toBe(2)

    scope.stop()
    restored.stop()
  })

  it('garde le dernier état lorsque le navigateur refuse la sauvegarde', () => {
    const userId = ref<string | undefined>('learner-a')
    const scope = effectScope()
    const progress = scope.run(() => useSeoModuleProgress(userId))!
    const write = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Stockage indisponible')
    })

    expect(progress.toggleCompleted(seoProgram[0]!.id)).toBe(false)
    expect(progress.completedCount.value).toBe(0)

    write.mockRestore()
    scope.stop()
  })
})
