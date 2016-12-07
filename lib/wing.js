module.exports = function(apiId, apiSecret) {
    var utils = require('./utils')
    utils.setCredentials(apiId, apiSecret)

    var api = {}
    api.User = require('./user')
    return api
}