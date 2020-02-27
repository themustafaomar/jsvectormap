const path = require('path')

module.exports = {
  devtool: 'none',
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
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
  },
}