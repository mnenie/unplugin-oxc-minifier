import type { MinifyOptions } from 'oxc-minify'

export const options: MinifyOptions = {
  compress: {
    target: 'esnext',
  },
  mangle: true,
  codegen: {
    removeWhitespace: true,
  },
  sourcemap: false,
}
