import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  define: {
    __DEV__: 'true',
  },
  resolve: {
    alias: {
      'package-core': resolve('core/index.ts'),
    },
  },
  test: {
    root: fileURLToPath(new URL('./', import.meta.url)),
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['core/**/*.{ts,tsx}'],
    },
  },
})
