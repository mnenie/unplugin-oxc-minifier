import { OxcMinifier } from 'package-core'

/**
 * Rollup 'unplugin-oxc-minifier' plugin
 *
 * @example
 * ```ts
 * import OxcMinifier from 'unplugin-oxc-minifier/rollup'
 *
 * export default {
 *    plugins: [OxcMinifier()]
 * }
```
 */
const rollup = OxcMinifier.rollup as typeof OxcMinifier.rollup
export default rollup
export { rollup as 'module.exports' }
