import { execa } from 'execa'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['core/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  define: {
    __DEV__: 'false',
  },
  hooks: {
    'build:before': async () => {
      await execa('npm', ['run', 'prebuild'], { stdio: 'inherit' })
    },
  },
})
