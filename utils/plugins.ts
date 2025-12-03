import { readdirSync } from 'node:fs'
import { basename, extname } from 'node:path'

export const getPlugins = () =>
  Object.fromEntries(readdirSync('./core/plugins')
    .filter(file => extname(file) === '.ts')
    .map(file => [
      basename(file, '.ts'),
      `./core/plugins/${file}`,
    ]),
  )

export const plugins = getPlugins()
