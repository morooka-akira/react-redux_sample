const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    inline: true // ソースファイルに変更があったときに自動的に実行ファイルを作り直す
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query: { // jsxとes6の変換を指定
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(git|png|jpe?g|svg)$/i,
        use:[
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disble: true
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
