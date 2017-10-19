var fetch = require('node-fetch')

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

        if (callback) {
            fetch(`https://api.wing.eu${options.path}`, options).then(function(response) {
                callback(response.json(), undefined)
            }).catch(function(error) {
                callback(undefined, error)
            })
        }
        else {
            return fetch(`https://api.wing.eu${options.path}`, options)  
                .then(response => {
                    return response.json()
                })
        }
    }

    return utils
})()