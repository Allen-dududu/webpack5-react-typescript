const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const productionGzipExtensions = ['js', 'css'];
const assetsRoot = path.resolve(__dirname, '../dist');

module.exports = merge.merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {

        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'postcss-loader',
          {
            loader: 'less-loader',
          }
        ]

      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip",
      test:  new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.join(assetsRoot, './report.html')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      maxInitialRequests: 5,
      cacheGroups: {
        // Extract public modules
        commons: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'common'
        }
      }
    }
  }
});