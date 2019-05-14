const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
    entry: './src/index.js',
    output: {
      filename: 'bundlue.js',
      path: __dirname+'/dist'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test:/\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ]
}
module.exports = config;