var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

var env = process.env.NODE_ENV === 'testing' ?
  require('../config/test.env') :
  config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      ...utils.styleLoaders({
        sourceMap: config.build.productionSourceMap
      }),
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: 'el-table-wrapper.min.js',
    library: 'ElTableWrapper',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new UnminifiedWebpackPlugin({
      postfix: ''
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

var webpackServerConfig = merge(webpackConfig, {
  target: 'node',
  output: {
    path: config.build.assetsRoot,
    filename: 'el-table-wrapper.ssr.js',
    library: 'ElTableWrapper',
    libraryTarget: 'umd'
  }
})

module.exports = [ webpackConfig, webpackServerConfig ]
