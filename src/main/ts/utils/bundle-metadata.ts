/* eslint-disable unicorn/no-typeof-undefined */
declare const __BUNDLE_VERSION__: string | undefined
declare const __BUNDLE_UPDATE_TIME__: string | undefined

export const BUNDLE_VERSION = typeof __BUNDLE_VERSION__ === 'undefined'
  ? 'DEV'
  : __BUNDLE_VERSION__

export const BUNDLE_UPDATE_TIME = typeof __BUNDLE_UPDATE_TIME__ === 'undefined'
  ? new Date().toISOString()
  : __BUNDLE_UPDATE_TIME__
