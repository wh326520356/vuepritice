const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue学习',
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        }),
        new VueLoaderPlugin()
    ],
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
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader!less',
                exclude: /node_module/
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    }
}