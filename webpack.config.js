const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    mode: process.env.NODE_ENV || 'production',
    devtool: "eval",
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: `[name].bundle.js`,
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    profile: true,
};