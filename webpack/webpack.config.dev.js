'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PORT = require('../src/consts').PORT;
const buildPath = path.join(__dirname, '..', 'dev-build');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: buildPath,
    port: PORT,
    compress: true,
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    }
  },
  entry: {
    index: './test/browser/index.js'
  },
  output: {
    filename: 'test/browser/[name].js',
    path: buildPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/browser/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),

    new webpack.HotModuleReplacementPlugin({
      multiStep: false
    })
  ],
  module: {}
};
