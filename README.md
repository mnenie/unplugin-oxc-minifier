# unplugin-oxc-minifier

Unofficial Unplugin that adds support for [oxc-minify](https://oxc.rs/docs/guide/usage/minifier.html).

```bash
npm i -D unplugin-oxc-minifier
```

## Features

- 🚀 **Blazing Fast**: Built on Oxc's Rust-based minifier for exceptional performance
- 💡 **Zero Config**: No configuration needed for TypeScript support.
- 🔧 **Configurable**: Flexible minification options to suit your needs.
- 🛠️ **Universal**: Works with Vite, Webpack, Rollup, Rolldown, Rspack, Esbuild and more via Unplugin.
- 📦 **Size**: Smaller bundle sizes in many cases

> **`unplugin-oxc-minifier` powered by `oxc-minify`**, leveraging the speed and efficiency of Rust for fast and reliable code minification across multiple build tools.

<details>
<summary>Vite</summary><br>

```ts
import OxcMinifier from 'unplugin-oxc-minifier/vite'

export default defineConfig({
  plugins: [
    OxcMinifier()
  ]
})
```

</details>

<details>
<summary>Rollup</summary><br>

```ts
import OxcMinifier from 'unplugin-oxc-minifier/rollup'

export default {
  plugins: [
    OxcMinifier()
  ]
}
```

</details>

<details>
<summary>Webpack</summary><br>

```js
import OxcMinifier from 'unplugin-oxc-minifier/webpack'

export default {
  plugins: [
    OxcMinifier()
  ]
}
```

</details>


<details>
<summary>Rspack</summary><br>

```ts
import OxcMinifier from 'unplugin-oxc-minifier/rspack'

export default {
  /* ... */
  plugins: [
    OxcMinifier()
  ]
}
```

</details>


<details>
<summary>esbuild</summary><br>

```ts
import OxcMinifier from 'unplugin-oxc-minifier/esbuild'

build({
  plugins: [
    OxcMinifier()
  ]
})
```

</details>

<details>
<summary>Rolldown</summary><br>

```ts
import OxcMinifier from 'unplugin-oxc-minifier/rolldown'

export default {
  plugins: [
    OxcMinifier()
  ]
}
```

</details>


## Configuration

```ts
OxcMinifier({
  /**
   * Filter files to be minified
   * @default [/\.[cm]?[jt]sx?$/]
   */
  include?: FilterPattern

  /**
   * Filter files to be excluded from minification
   * @default [/node_modules/]
   */
  exclude?: FilterPattern

  /**
   * Control plugin execution order
   * - 'pre': run before other plugins
   * - 'post': run after other plugins
   * - undefined: normal execution order
   */
  enforce?: 'pre' | 'post' | undefined

  /**
   * Enable module minification
   * Uses MinifyOptions['module'] type
   */
  module?: boolean

  /**
   * Enable compression optimizations
   * Uses MinifyOptions['compress'] type
   */
  compress?: boolean | CompressOptions

  /**
   * Enable identifier mangling
   * Uses MinifyOptions['mangle'] type
   */
  mangle?: boolean | MangleOptions

  /**
   * Enable code generation optimizations
   * Uses MinifyOptions['codegen'] type
   */
  codegen?: boolean | CodegenOptions

  /**
   * Generate source maps
   * Uses MinifyOptions['sourcemap'] type
   */
  sourcemap?: boolean
})
```

## Migrate from `terser` in `[bundler]`

`[bundler]` - any of the supported bundlers (Vite, Webpack, Rollup, Esbuild, etc.)

`package.json`

```diff
{
  "devDependencies": {
-   "[bundler]-plugin-terser": "*",
+   "unplugin-oxc-minifier": "latest",
  }
}
```

`[bundler].config.ts`

```diff
- import TerserPlugin from [bundler]-plugin-terser'
+ import OxcMinifier from 'unplugin-oxc-minifier/[bundler]'

export default {
  plugins: [
    /* ... */
-   TerserPlugin({
+   OxcMinifier({
      /* ... */
-     terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        mangle: {
          toplevel: true
        }
-     }
    }),
  ],
}
```

## License

[MIT](./LICENSE) License © 2025-PRESENT [Alex Peshkov](https://github.com/mnenie)
