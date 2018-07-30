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
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader",
                query: { inlineRequires: '\/images\/' }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3600000
                        }
                    }
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Alexandru Cambose',
            template: './src/_index.template.html',
            mobile: true,
            googleAnalyticsId: 'UA-123086279-1',
            favicon: './favicon.ico'
        })
    ],
    profile: true,
};