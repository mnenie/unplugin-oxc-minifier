import { OxcMinifier } from 'package-core'

/**
 * Esbuild 'unplugin-oxc-minifier' plugin
 *
 * @example
 * ```ts
 * import OxcMinifier from 'unplugin-oxc-minifier/esbuild'
 *
 * build({
 *    plugins: [OxcMinifier()]
 * })
```
 */
const esbuild = OxcMinifier.esbuild as typeof OxcMinifier.esbuild
export default esbuild
export { esbuild as 'module.exports' }
