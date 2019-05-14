const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
    entry: './src/main.js',
    output: {
      filename: 'bundlue.js',
      path: __dirname+'/dist'
    },
    module: {
        rules: [
            {test: /\.txt$/,use: 'raw-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ]
}
module.exports = config;