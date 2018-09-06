const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    mode: process.env.NODE_ENV || 'production',
    devtool: "eval",
    output: {
        path: path.resolve(__dirname, './'), //should be dist but github user pages must be built from the master branch.
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
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            },
            template: './src/_index.template.html',
            mobile: true,
            googleAnalyticsId: 'UA-123086279-1',
            gsv: 'BdLOE14d3iCx93Z5QUoYDCDYI2_59lHprFblw5QjUss',
            favicon: './favicon.png',
            meta: {
                description: 'Alexandru Cambose is a passionate Web Developer and Designer based in Iași, Romania. His specialty is full website design and development from start to finish. Fluent in Html, CSS, Javascript, Php, Nodejs and Laravel.',
            }
        })
    ],
    profile: true,
};