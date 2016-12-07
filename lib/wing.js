module.exports = function(apiId, apiSecret) {
    var utils = require('./utils')
    utils.setCredentials(apiId, apiSecret)

    var api = {}
    api.User = require('./user')
    api.Organization = require('./organization')
    api.Store = require('./store')
    api.Channel = require('./channel')
    return api
}