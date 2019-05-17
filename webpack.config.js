const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
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
        })
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
            },
        ]
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    }
}