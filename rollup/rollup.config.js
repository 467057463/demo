import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from "rollup-plugin-dts";

const extensions =  ['.js', '.ts'];

export default [
  {
    input: 'src/index.ts',
    external:[
      'lodash',
      'jquery'
    ],
    output: [
      {
        format: 'amd',
        file: './lib/dist.amd.js',
        sourcemap:true
      },
      {
        format: 'cjs',
        file: './lib/dist.cjs.js',
        exports: 'auto'
      },
      {
        format: 'es',
        file: './lib/dist.es.js'
      },
      {
        format: 'iife',
        file: './lib/dist.iife.js',
        name: 'mm',
        globals: {
          'lodash': '_',
          'jquery': '$'
        }
      },
      {
        format: 'umd',
        file: './lib/dist.umd.js',
        name: 'mm',
        globals: {
          'lodash': '_',
          'jquery': '$'
        }
      },
      {
        format: 'system',
        file: './lib/dist.system.js'
      }
    ], 
    plugins: [
      commonjs(),
      nodeResolve({
        extensions
      }),
      babel({
        extensions,
        'exclude': 'node_modules/**',
        'babelHelpers': 'bundled'
      })
    ]
  },
  {
    input: "./types/index.d.ts",
    output: [
      { 
        file: "./index.d.ts", 
        format: "es" 
      }
    ],
    plugins: [
      dts()
    ],
  }
]