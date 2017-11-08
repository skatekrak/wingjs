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

        // Encode query params if there is any
        let query = ""
        if (options.query) {
            query += "?"

            var str = [];
            for(var p in options.query)
              if (options.query.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(options.query[p]));
              }
            query += str.join("&");
            delete options.query
        }

        const url = `https://api.wing.eu${options.path}${query}`
        if (callback) {
            fetch(url, options)
                .then(response => response.json())
                .then(json => callback(json, undefined))
                .catch(error => callback(undefined, error))
        }
        else {
            return fetch(url, options)  
                .then(response => response.json())
        }
    }

    return utils
})()