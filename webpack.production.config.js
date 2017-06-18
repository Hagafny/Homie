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
module.exports = devConfig; 