const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CSS = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new CSS({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {fullySpecified: false}
            },
            {
                test: /\.css$/i,
                use: [
                    {loader: CSS.loader},
                    {loader: 'css-loader'}
                ]
            }
        ]
    }
};