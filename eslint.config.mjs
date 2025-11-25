// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    stylistic: true,
    typescript: true,
  },
  {
    rules: {
      'no-console': 'error',
      'no-alert': 'error',
      'ts/explicit-function-return-type': 'off',
      'antfu/top-level-function': 'off',
    },
  },
  {
    ignores: [
      'tests/**/fixtures/**/*.{js,ts}',
      '**/coverage/**',
    ],
  },
)
