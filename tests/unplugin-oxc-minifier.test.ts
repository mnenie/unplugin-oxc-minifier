import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { minify as minifyES2015 } from 'oxc-minify'
import { rollup } from 'rollup'
import { describe, expect, it } from 'vitest'
import OxcMinifierRollupPlugin from '../core/plugins/rollup'

const fixtureDir = path.join(__dirname, 'fixtures')

const availableExtensions = (file: string) => file.endsWith('.ts') || file.endsWith('.js')

describe('unplugin-oxc-minifier', () => {
  const fixtureFiles = readdirSync(fixtureDir).filter(file => file.startsWith('minify') && availableExtensions(file))

  it.each(fixtureFiles)('should minify %s with rollup bundler', async (file) => {
    const _path = path.join(fixtureDir, file)
    const originalCode = readFileSync(_path, 'utf-8')

    const bundle = await rollup({
      input: _path,
      plugins: [
        OxcMinifierRollupPlugin({
          mangle: true,
          compress: {
            target: 'esnext',
          },
        }),
      ],
    })

    const { output } = await bundle.generate({
      format: 'esm',
      sourcemap: false,
    })

    expect(output[0].code).toBeDefined()
    expect(typeof output[0].code).toBe('string')
    expect(output[0].code.length).toBeLessThan(originalCode.length)
    expect(output[0].code).not.toMatch(/\s{2,}/)
    expect(output[0].code).not.toMatch(/\n\s*\n/)

    expect(output[0].code).toMatchSnapshot('rollup')
  })

  it.each(fixtureFiles)('should minify %s directly with es2015 target', async (file) => {
    const _path = path.join(fixtureDir, file)
    const originalCode = readFileSync(_path, 'utf-8')

    const result = await minifyES2015(file, originalCode, {
      mangle: false,
      compress: {
        target: 'es2015',
      },
      sourcemap: true,
      module: false,
    })

    expect(result.code).toBeDefined()
    expect(result.code.length).toBeLessThan(originalCode.length)
    expect(result.code).toMatchSnapshot('directly-minify')
  })
})
