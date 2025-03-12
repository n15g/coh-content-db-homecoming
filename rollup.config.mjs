import esbuild from 'rollup-plugin-esbuild'
import { dts } from 'rollup-plugin-dts'

const name = 'coh-content-db-homecoming'

// noinspection JSUnusedGlobalSymbols
export default [{
  input: 'src/main/index.ts',
  plugins: [esbuild()],
  output: [{
    file: `dist/${name}.js`,
    format: 'cjs',
    sourcemap: true,
  }, {
    file: `dist/${name}.mjs`,
    format: 'es',
    sourcemap: true,
  }],
}, {
  input: 'src/main/index.ts',
  plugins: [dts()],
  output: [{
    file: `dist/${name}.d.ts`,
    format: 'es',
  }],
},
]
