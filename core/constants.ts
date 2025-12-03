import type { MinifyOptions } from 'oxc-minify'

export const options = {
  compress: {
    target: 'esnext',
  },
  mangle: true,
  codegen: {
    removeWhitespace: true,
  },
  sourcemap: false,
} as const satisfies MinifyOptions
