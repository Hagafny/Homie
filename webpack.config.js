const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExtentionPlugin = require('script-ext-html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const HtmlWebpackExtentionPluginConfig = new HtmlWebpackExtentionPlugin({
  defaultAttribute: 'defer'
});

const ProvidePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Tether: 'tether',
  Popper: 'popper.js'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // Work with images. This loader checks and if the file is less than 5k it will convert to Base64. If he's bigger, it will move the file
        // to a dist folder under the name= address.
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=5000&name=images/[hash:6].[ext]'
      }, // inline base64 URLs for <=5k images, direct URLs for the rest
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ProvidePlugin,
    HtmlWebpackExtentionPluginConfig,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
