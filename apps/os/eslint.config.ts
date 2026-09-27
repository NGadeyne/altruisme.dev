import { fileURLToPath } from 'node:url'

import { createVueEslintConfig } from '@altruisme/config/eslint/vue'

export default createVueEslintConfig(fileURLToPath(new URL('.oxlintrc.json', import.meta.url)))
