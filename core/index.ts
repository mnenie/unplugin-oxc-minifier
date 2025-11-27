import type { RenderedChunk } from 'rollup'
import type { UnpluginInstance } from 'unplugin'
import type { UnpluginOptions } from './types'
import { createUnplugin } from 'unplugin'
import { createFilter } from 'unplugin-utils'
import { resolvedMinifier } from './utils/resolved'

export const OxcMinifier: UnpluginInstance<UnpluginOptions | undefined, false> = /* #__PURE__ */ createUnplugin((options = {}) => {
  const resolved = resolvedMinifier(options)
  const { include, exclude, enforce, ...t } = resolved

  const filter = createFilter(include, exclude)

  const renderChunk = async (code: string, chunk: RenderedChunk) => {
    const { minify } = await import('oxc-minify')
    const result = await minify(chunk.fileName, code, t)

    return {
      code: result.code,
      map: result.map,
    }
  }

  return {
    name: 'unplugin-oxc-minifier',
    enforce,

    transformInclude(id: string) {
      return filter(id)
    },

    renderChunk,
  }
})
