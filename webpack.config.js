'use strict';

var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './source/index.js',
  output: {
    library: require('./package.json').name,
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'source'),
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};