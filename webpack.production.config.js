const WebpackStripLoader = require('strip-loader'); //strip-loader removes whatever we want.
const devConfig = require('./webpack.config.js'); //get the develpoment webpack config.

let stripLoader = WebpackStripLoader.loader('console.log');
//create loader configuration.
let stripRuleJS = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: stripLoader //remove console.log across all files.
};

let stripRuleJSX = {
    test: /\.jsx$/,
    exclude: /node_modules/,
    loader: stripLoader
};

devConfig.module.rules.push(stripRuleJS);
devConfig.module.rules.push(stripRuleJSX);
module.exports = devConfig; 