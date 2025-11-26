import { execa } from 'execa'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './core/*.ts',
  exports: true,
  define: {
    __DEV__: 'false',
  },
  hooks: {
    'build:before': async () => {
      await execa`npm run test`
    },
  },
})
