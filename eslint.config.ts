import globals from 'globals'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'
import { rules as localRules } from './src/main/lint/rules'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['.github/', '.idea/', 'coverage/', 'dist/'] },
  { languageOptions: { globals: globals.browser } },

  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    rules: {
      // eslint-disable-next-line unicorn/no-null
      '@typescript-eslint/naming-convention': ['error', { selector: 'objectLiteralProperty', format: null }], // camelCase, but ignore object literals
      'eqeqeq': ['error'],
    },
  },

  stylistic.configs.customize({
    semi: false,
    braceStyle: '1tbs',
  }),

  eslintPluginUnicorn.configs['flat/recommended'], // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2546,
  {
    rules: {
      'unicorn/prevent-abbreviations': ['off'],
      'unicorn/numeric-separators-style': ['off'],
      'unicorn/name-replacements': ['error', {
        replacements: {
          ast: false,
          doc: false,
          i: false,
          mk: false,
          uri: false,
        },
        ignore: [String.raw`^(?:ast|uri)-utils(?:\.test)?$`],
      }],
    },
  },
  {
    plugins: {
      local: {
        meta: {
          name: 'local',
        },
        rules: localRules,
      },
    },
    rules: Object.fromEntries(Object.keys(localRules).map(rule => [`local/${rule}`, 'error'])),
  },
]
