/**
 * Created by niefz on 2018/9/18.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const webpackBaseConfig = require('./webpack.config.base.js');

const APP_PATH = resolve(__dirname, 'src');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  output: {
    path: APP_PATH
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    proxy: {
      '/counts': {
        target: 'http://xxx:xxx',
        secure: false
      }
    },
    contentBase: APP_PATH,
    compress: true,
    historyApiFallback: true,
    // host: '0.0.0.0',
    hot: true,
    open: true,
    port: 8088,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new StyleLintPlugin({
      context: 'src/',
      files: ['**/*.{vue,html,s?(a|c)ss}'],
      cache: true
    }),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
