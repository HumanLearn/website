var fs = require('fs')
var path = require('path')
var read = require('fs-readdir-recursive')

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var contentPath = path.resolve(__dirname, 'content')
var srcPath = path.resolve(__dirname, 'src')
var indexHtmlPath = path.resolve(__dirname, 'index.html')
var faviconPath = path.resolve(__dirname, 'favicon.ico')

var postList = read(contentPath).filter(function (name) {
  return /\.(md|markdown)$/.test(name)
}).sort(function (a, b) {
  if (a.split('/')[0] === b.split('/')[0]) {
    return fs.statSync(contentPath + '/' + a).mtime.getTime() - fs.statSync(contentPath + '/' + b).mtime.getTime()
  }
  return a.split('/')[0] > b.split('/')[0] ? 1 : -1
})

module.exports = {
  context: srcPath,
  entry: [
    require.resolve('webpack-dev-server/client') + '?http://localhost:8080',
    require.resolve('webpack/hot/dev-server'),
    path.join(srcPath, 'index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    publicPath: '',
  },
  module: {
    loaders: [
      {
        test: /\.(less|css)$/,
        loader: 'style!css!less',
      }, {
        test: /\.(scss|sass)$/,
        loader: 'style!css!sass',
      }, {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.(jpg|jpeg|png|gif|eot|svg|ttf|woff|woff2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=[name].[hash].[ext]',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: indexHtmlPath,
      favicon: faviconPath,
    }),
    new webpack.DefinePlugin({
      __DEBUG__: true,
      __POSTS__: JSON.stringify(postList),
      __POSTS_DIR__: '"content/"',
    }),
  ]
}
