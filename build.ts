/* eslint-disable @typescript-eslint/no-var-requires */
const {build} = require('esbuild')
const {pkg} = require('./package.json')

const externalDependencies = [...Object.keys(pkg?.dependencies ?? {})];

const entryFile = 'src/index.ts'
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: externalDependencies,
  logLevel: 'info',
  minify: true,
  sourcemap: false,
  watch: process.env.NODE_ENV === 'development',
}

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['ES6'],
})

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['ES6'],
})