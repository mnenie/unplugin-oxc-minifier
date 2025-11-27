import { OxcMinifier } from 'package-core'

/**
 * Rspack 'unplugin-oxc-minifier' plugin
 *
 * @example
 * ```ts
 * import OxcMinifier from 'unplugin-oxc-minifier/rspack'
 *
 * export default {
 *    plugins: [OxcMinifier()]
 * }
```
 */
const rspack = OxcMinifier.rspack as typeof OxcMinifier.rspack
export default rspack
export { rspack as 'module.exports' }
