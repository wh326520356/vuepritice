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
            },{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_module/,
                query: {
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader'),
                exclude: /node_moudle/
            },{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader!less-loader'),
                exclude: /node_moudle/
            },{
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: './dist/style/img/[name].[ext]?[hash:7]'
                }
            },{
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: './dist/style/font/[name].[ext]?[hash:7]',
                    prefix: 'font'
                }
            }
        ]
    },
    plugins: []
}