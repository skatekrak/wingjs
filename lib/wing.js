module.exports = function(apiId, apiSecret) {
    var utils = require('./utils')
    utils.setCredentials(apiId, apiSecret)

    var api = {}
    api.User = require('./user')
    api.Organization = require('./organization')
    api.Store = require('./crud')('store')
    api.Channel = require('./crud')('channel')
    api.Order = require('./crud')('order')
    api.Item = require('./crud')('item')
    api.Customer = require('./crud')('customer')
    api.Collect = require('./crud')('collect')
    apiService = require('./service')
    return api
}