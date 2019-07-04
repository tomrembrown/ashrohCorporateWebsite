'use strict'

const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CompressionPlugin = require('compression-webpack-plugin')
require('dotenv').config() // load the environment variables from .env

module.exports = {
  entry: './client/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    contentBase: [
      path.join(__dirname, '/client/view/public'),
      path.join(__dirname, '/')
    ],
    watchContentBase: true,
    historyApiFallback: true,
    noInfo: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080,
    proxy: [
      {
        context: ['/readRoutesServer'],
        target: 'http://localhost:' + process.env.PORT,
        secure: false
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [new VueLoaderPlugin(), new CompressionPlugin()]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
  module.exports.mode = 'production'
} else {
  module.exports.mode = 'development'
}
