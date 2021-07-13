const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const APP_PATH = path.resolve(__dirname, '../src');
// webpack.config.js
module.exports = {

  entry: {
    app: './src/index.tsx',
    // another: './src/another-module.js',
    // vendor: ['react', 'react-dom']
  },

  output: {
    clean: true, // Clean the output directory before emit.
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [APP_PATH],
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: true,
          fix: true
        }
      },
      // JavaScript
      {
        test: /\.(j|t)sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', "less-loader"]
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },

    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      showErrors: true
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // }),
    // Environment variables can be used in JS code (demo: process.env.NODE_ENV === 'production')
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

  ],

}
