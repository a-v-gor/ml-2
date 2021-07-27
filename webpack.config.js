const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{ test: /\.pug$/, loader: 'pug-loader', options: { pretty: true } }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    })
],
};