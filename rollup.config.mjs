import esbuild from 'rollup-plugin-esbuild'
import { dts } from 'rollup-plugin-dts'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import json from '@rollup/plugin-json'

const name = 'coh-content-db-homecoming'

// noinspection JSUnusedGlobalSymbols
export default [{
  input: 'src/main/ts/index.ts',
  plugins: [
    esbuild(), // TypeScript
    json(), // Reading version from package.json
    exportBundleJson(), // Exporting the bundle.json
  ],
  output: [{
    file: `dist/${name}.js`,
    format: 'cjs',
    sourcemap: true,
  }, {
    file: `dist/${name}.mjs`,
    format: 'es',
    sourcemap: true,
  }],
  external: ['coh-content-db'],
}, {
  input: 'src/main/ts/index.ts',
  plugins: [dts()],
  output: [{
    file: `dist/${name}.d.ts`,
    format: 'es',
  }],
  external: ['coh-content-db'],
}]

function exportBundleJson() {
  return {
    name: 'write-json',
    async 'writeBundle'() {
      const bundle = await import(`./dist/${name}.mjs`)
      const headPath = path.resolve('dist', 'bundle.head.json')
      const bundlePath = path.resolve('dist', 'bundle.json')
      // noinspection JSUnresolvedReference
      writeFileSync(headPath, JSON.stringify(bundle.HOMECOMING.header))
      // noinspection JSUnresolvedReference
      writeFileSync(bundlePath, JSON.stringify(bundle.HOMECOMING))
    },
  }
}
