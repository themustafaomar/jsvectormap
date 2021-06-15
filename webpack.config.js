const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval',
  target: 'node',
  entry: {
    jsvectormap: './src/js/JsVectorMap.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
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