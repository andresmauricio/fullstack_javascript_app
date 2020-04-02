const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtectPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: path.join(__dirname, 'frontend/app.js' ),
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    devMode ? 'style-loader' : miniCssExtectPlugin.loader,
                    'css-loader'
                ]
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new miniCssExtectPlugin({
            filename: 'css/bundle.css'
        })
    ]
}