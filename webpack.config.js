const webpack = require('webpack');
const path = require('path');

const config = {
  // このファイルからimoprt(require)されているmoduleをbundleする
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
  resolve: {
    // require('foo') で記載する拡張子を指定する
    extensions: ['.js', '.jsx'],
  },
  // モードをいれないと警告がでる
  mode: 'development',
  module: {
    rules:[
      {
        // 対象ファイルの正規表現
        test: /\.(jsx|js)$/,
        // 除外ファイル(フォルダ)を指定
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        // loaderに渡すクエリパラメタ
        query: { // jsxとes6の変換を指定
          presets: ['es2015', 'react-app', 'flow']
        }
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        // loaderは右から左(最後から最初)の順で適用される
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(git|png|jpe?g|svg)$/i,
        // 前バージョンまではloadersだった
        // loaderの名前しか使わない場合はloaderに配列指定でもok
        use:[
          'file-loader',
          {
            loader: 'image-webpack-loader',
            // 前バージョンまではqueryだった
            // loaderにわたすためのqueryを記載する
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
