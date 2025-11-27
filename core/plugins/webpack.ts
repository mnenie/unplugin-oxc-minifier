import { OxcMinifier } from 'package-core'

/**
 * Webpack 'unplugin-oxc-minifier' plugin
 *
 * @example
 * ```ts
 * import OxcMinifier from 'unplugin-oxc-minifier/webpack'
 *
 * export default {
 *    plugins: [OxcMinifier()]
 * }
```
 */
const webpack = OxcMinifier.webpack as typeof OxcMinifier.webpack
export default webpack
export { webpack as 'module.exports' }
