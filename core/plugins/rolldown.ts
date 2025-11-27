import { OxcMinifier } from 'package-core'

/**
 * Rolldown 'unplugin-oxc-minifier' plugin
 *
 * @example
 * ```ts
 * import OxcMinifier from 'unplugin-oxc-minifier/rolldown'
 *
 * export default {
 *    plugins: [OxcMinifier()]
 * }
```
 */
const rolldown = OxcMinifier.rolldown as typeof OxcMinifier.rolldown
export default rolldown
export { rolldown as 'module.exports' }
