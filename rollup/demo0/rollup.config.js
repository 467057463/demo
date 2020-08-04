import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  external: [
    'lodash'
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
        'lodash': '_'
      }
    },
    {
      format: 'umd',
      file: './lib/dist.umd.js',
      name: 'mm',
      globals: {
        'lodash': '_'
      }
    },
    {
      format: 'system',
      file: './lib/dist.system.js'
    }
  ],  
  plugins: [
    babel()
  ]
}