/* eslint @typescript-eslint/no-require-imports: 0 */
/* eslint unicorn/prefer-module: 0 */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
  },
})

module.exports = {
  plugins: {
    local: {
      meta: {
        name: 'local',
      },
      rules: require('./rules').rules,
    },
  },
  rules: {
    'local/migrate-contact-link-title': ['error'],
    'local/migrate-contact-loc': ['error'],
    'local/migrate-requirement-loc': ['error'],
    'local/migrate-requirement-plaque-type': ['error'],
    'local/no-empty-alternate': ['error'],
    'local/no-invalid-key': ['error'],
    'local/prefer-acquisition-period': ['error'],
    'local/prefer-effect-period': ['error'],
    'local/prefer-effect-start': ['error'],
    'local/prefer-simple-alternate': ['error'],
  },
}
