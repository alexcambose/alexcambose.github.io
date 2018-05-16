const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    mode: process.env.NODE_ENV || 'production',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: `[name].bundle.js`,
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};