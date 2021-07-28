const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
};
const PAGES_DIR = `${PATHS.src}/${PATHS.assets}pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATHS.dist,
    filename: '[name].js',
  },
  module: {
    rules: [{ test: /\.pug$/, loader: 'pug-loader', options: { pretty: true } }],
  },
  plugins: [
    ...PAGES.map(page => new HtmlWebpackPlugin ({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
],
};