var got = require('got')

module.exports = (function() {
    var _authorization = null
    var utils = {}
    
    utils.setCredentials = function(apiId, apiSecret) {
        if (!apiId || typeof apiId !== 'string') {
            throw new Error('Invalid API ID: ' + apiId)
        }

        if (!apiSecret || typeof apiSecret !== 'string') {
            throw new Error('Invalid API Secret: ' + apiSecret)
        }

        _authorization = 'Basic ' + new Buffer(apiId + ':' + apiSecret).toString('base64')
    }

    utils.exec = function(options, callback) {
        options.headers = {
            Authorization: _authorization
        }
        options.json = true

        if (callback) {
            got('https://api.wing.eu', options).then(function(response) {
                callback(response.body, undefined)
            }).catch(function(error) {
                callback(undefined, error)
            })
        }
        else {
            return got('https://api.wing.eu', options)  
                .then(response => {
                    return response.body
                })
        }
    }

    return utils
})()