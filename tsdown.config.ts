import { execa } from 'execa'
import { defineConfig } from 'tsdown'

const { plugins } = await import('importx').then(x => x.import('./utils/plugins', import.meta.url))

export default defineConfig({
  entry: {
    index: './core/index.ts',
    ...plugins,
  },
  sourcemap: false,
  exports: true,
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
