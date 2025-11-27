import type { UnpluginOptions } from '../types'
import { options as externals } from '../constants'

export const resolvedMinifier = (options: UnpluginOptions) => {
  return {
    include: options.include ?? [/\.[cm]?[jt]sx?$/],
    exclude: options.exclude ?? [/node_modules/],
    enforce: 'enforce' in options ? options.enforce : 'post',
    ...externals,
    ...options,
  }
}
