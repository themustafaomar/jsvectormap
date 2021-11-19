const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: path.resolve(__dirname, 'src/js/jsvectormap.js'), 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/jsvectormap.js',
    library: 'jsVectorMap',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: path.resolve(__dirname, "node_modules"),
      use: {
        loader: 'babel-loader',
      }
    }, {
      test: /\.scss$/,
      use: [
        // Inject Css to the head
        'style-loader',
        // Convert Css to common js
        'css-loader',
        // Convert Sass to Css
        'sass-loader',
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
  },
}