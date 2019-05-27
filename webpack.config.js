const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: "development",
    entry:{
      main: ["babel-polyfill", __dirname+'/index.js']
    },
    output: {
        /*library: "mylibrary",
        libraryTarget: "amd",*/
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[chunkhash].bundle.js',
        chunkFilename: "chunk/[name].[chunkhash].chunk.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue学习',
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:8].css',
            allChunks: true
        }),
        //已去除
        /*new webpack.optimize.CommonsChunkPlugin({
           names: ['main','manifest']
        }),*/
        new uglify(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss,autoprefixer];
                }
            }
        })
    ],
    optimization: {
        splitChunks:{
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'main',
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_module/
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_module/
            },{
                test: /\.less$/,
                /*该配置不自动刷新*/
                /*loader: 'style-loader!css-loader!less-loader',*/
                /*loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader',{
                    publicPath: '../'
                 }),*/
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },{
                            loader: 'less-loader'
                        }
                    ],
                    fallback: 'style-loader',
                    publicPath:"../"
                }),
                exclude: /node_module/
            },{
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    name: 'image/[name].[hash].[ext]',
                    limit: 8192
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname,"./dist"),
        port: 8080,
        historyApiFallback: true
    }
}