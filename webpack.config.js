const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env', 
                  '@babel/preset-react'
                ],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                ]
              }
            }
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              'url-loader?limit=10000',
              'img-loader'
            ]
          },
          {
            test: /\.css/,
            use: [
              {
                loader: 'isomorphic-style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  discardComments: { removeAll: true },
                  localIdentName: "[name]_[local]_[hash:base64]",
                  sourceMap: true,
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader'
              }
            ]
          },
          {
              test: /\.md$/,
              use: {
                  loader: path.resolve(__dirname, './lib/markdown-loader.js'),
              }
              
          }
        ]
    },
    devServer: {
        contentBase: './build',
        overlay: true,
        hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};