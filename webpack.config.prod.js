var fs = require('fs')
var path = require('path')
var ncp = require('ncp').ncp
var read = require('fs-readdir-recursive')

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackOnBuildPlugin = require('on-build-webpack')

var contentPath = path.resolve(__dirname, 'content')
var srcPath = path.resolve(__dirname, 'src')
var indexHtmlPath = path.resolve(__dirname, 'index.html')
var faviconPath = path.resolve(__dirname, 'favicon.ico')
var distPath = path.join(__dirname, 'dist')

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
  entry: path.join(srcPath, 'index.js'),
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: distPath,
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
        loader: 'babel',
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'image-webpack?optimizationLevel=7&progressive=true!file?name=[name].[hash].[ext]',
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)?(\?v=\d+\.\d+\.\d+)?$/,
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
    new WebpackOnBuildPlugin(function(stats) {
      ncp.limit = 16
      ncp(contentPath, path.join(__dirname, 'dist', 'content'), function (err) {
        if (err) {
          return console.error(err)
        }
        console.log('done!')
      })
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { 
        warnings: false 
      }
    })
  ]
}
