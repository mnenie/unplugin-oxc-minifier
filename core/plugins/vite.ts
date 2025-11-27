import { OxcMinifier } from 'package-core'

/**
 * Vite 'unplugin-oxc-minifier' plugin
 *
 * @example
 * ```ts
 * import OxcMinifier from 'unplugin-oxc-minifier/esbuild'
 *
 * export default defineConfig({
 *    plugins: [OxcMinifier()]
 * })
```
 */
const vite = OxcMinifier.vite as typeof OxcMinifier.vite
export default vite
export { vite as 'module.exports' }
