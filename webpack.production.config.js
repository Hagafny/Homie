const webpack = require('webpack');
const WebpackStripLoader = require('strip-loader'); //strip-loader removes whatever we want.
const devConfig = require('./webpack.config.js'); //get the develpoment webpack config.

let stripLoader = WebpackStripLoader.loader('console.log');
//create loader configuration.
let stripRule = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: stripLoader //remove console.log across all files.
};
devConfig.module.rules.push(stripRule);


devConfig.plugins[0].options.hash = true; //Add hashes to prod version for cache busting

//Add plugins to make react run on production.
devConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }));
devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());

module.exports = devConfig; 