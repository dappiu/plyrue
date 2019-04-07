module.exports = {
  input: {
    'plyrue': 'src/index.js'
  },
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: 'PlyrUe'
  },
  postcss: {
    extract: true
  },
  plugins: {
    vue: true,
    babel: {
      runtimeHelpers: true,
      sourceMap: true,
      extensions: ['.js', '.vue']
    }
  }
}
