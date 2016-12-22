module.exports = {
  use: [
    'autoprefixer',
    'postcss-import',
    'postcss-url',
    'postcss-browser-reporter',
    'postcss-reporter'
  ],
  input: './src/index.css',
  output: 'dist/bundle.css',
  map: 'file',
  'postcss-url': {
    url: 'copy',
    useHash: true,
    assetsPath: 'assets'
  }
}
