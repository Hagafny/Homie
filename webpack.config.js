const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;
const CriticalPluginonfig = new CriticalPlugin({
  src: 'index.html',
  inline: true,
  minify: true,
  dest: 'index.html'
})


const ProvidePlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  Tether: "tether"
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { // Work with images. This loader checks and if the file is less than 5k it will convert to Base64. If he's bigger, it will move the file
        // to a dist folder under the name= address.
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=5000&name=images/[hash:6].[ext]'
      } // inline base64 URLs for <=5k images, direct URLs for the rest  
    ]
  },
  plugins: [HtmlWebpackPluginConfig, ProvidePlugin, CriticalPluginonfig]
}