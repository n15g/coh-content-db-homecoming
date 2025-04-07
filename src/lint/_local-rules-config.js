/* eslint @typescript-eslint/no-require-imports: 0 */
/* eslint unicorn/prefer-module: 0 */
require('ts-node').register()

module.exports = {
  plugins: {
    local: {
      meta: {
        name: 'local',
      },
      rules: require('./_rules').rules,
    },
  },
  rules: {
    'local/prefer-simple-alternate': ['error'],
  },
}
