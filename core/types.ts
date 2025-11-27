import type { MinifyOptions } from 'oxc-minify'
import type { FilterPattern } from 'unplugin'

type Merge<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

export interface UnpluginOptions extends MinifyOptions {
  /**
   * @default [/\.[cm]?[jt]sx?$/],
   */
  include?: FilterPattern
  /**
   * @default [/node_modules/],
   */
  exclude?: FilterPattern
  enforce?: 'pre' | 'post' | undefined
}

type MappedRequired<T> = {
  [P in keyof T]-?: T[P]
}

export type UnpluginOptionsResolved = Merge<MappedRequired<UnpluginOptions>, Pick<UnpluginOptions, 'enforce'>>
