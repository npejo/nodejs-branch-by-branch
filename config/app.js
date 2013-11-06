/**
 * load required modules and initialize config variables
 */
var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    port = process.env.PORT || 3000;

/**
 * App configuration per environment
 *
 */
module.exports = {
    development: {
        port: port,
        root: rootPath
    },
    staging: {},
    production: {},
    test: {}
}