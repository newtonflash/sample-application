const path = require('path');
const aliases = require('../config/aliases');

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
    });
    config.resolve.alias = { ...config.resolve.alias, ...aliases };
    return config;
};
