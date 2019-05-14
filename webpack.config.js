const path = require('path');
const ExtractTextPlugin = require('extract-text-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        index: path.resolve(__dirname,'./src/index.js'),
        vendors: ['vue','vue-router']
    },
    output: {
        path: path.resolve(__dirname,"./dist/js"),
        filename: "[name].[hash].js",
        chunkFilename: "[id].[chunkhash].js"
    },
    resolve: {
        extensions: ['','.js','.vue'],
        alias: {
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}