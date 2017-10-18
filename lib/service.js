module.exports = (function() {
    const utils = require('./utils')

    return {
        available: function(callback) {
            const options = {
                path: '/v1/service',
                method: 'GET'
            }

            return utils.exec(options, callback)
        },
        default: function(callback) {
            const options = {
                path: '/v1/service/default',
                method: 'GET'
            }

            return utils.exec(options, callback)
        },
        setDefault: function(serviceId, callback) {
            const options = {
                path: '/v1/service/default/' + serviceId,
                method: 'PUT'
            }

            return utils.exec(options, callback)
        }
    }
})()