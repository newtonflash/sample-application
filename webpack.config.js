const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const aliases = require('./config/aliases');

module.exports = {
    entry: {
        main: [
            './src/components/plp-container/PLPContainer.export.js',
            './src/core/styles/global.scss',
            './src/components/products-list/products-list.scss',
            './src/components/products-filter-bar/products-filter-bar.scss'
        ]
    },
    mode: 'development',
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, 'public/js/')
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        alias: aliases
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};
