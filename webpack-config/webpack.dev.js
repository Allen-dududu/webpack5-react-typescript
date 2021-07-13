const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge.merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins:[ new webpack.HotModuleReplacementPlugin()]
  ,
  devServer: {
    port: 8080,
    host: 'localhost',
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true, 
    clientLogLevel: 'error',
    open: true,
    watchOptions: {
      ignored: /node_modules/
    },
  },
  stats: {
    colors: true
  },
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
});