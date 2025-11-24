import { defineConfig } from 'taze'

export default defineConfig({
  exclude: [
    'eslint',
    '@antfu/eslint-config',
  ],
  write: true,
  install: true,
  ignorePaths: [
    '**/node_modules/**',
  ],
  packageMode: {
    'vitest': 'major',
    'tsdown': 'latest',
    'typescript': 'minor',
    'oxc-minify': 'latest',
  },
})
