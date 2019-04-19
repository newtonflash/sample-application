const path = require('path');
const aliases = require('../config/aliases');

module.exports = async ({ config }) => {
    config.resolve.alias = { ...config.resolve.alias, ...aliases };
    return config;
};
