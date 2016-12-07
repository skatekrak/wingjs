module.exports = (function() {
    const utils = require('./utils')

    return {
        new: function(newStore, callback) {
            const options = {
                path: '/v1/store',
                method: 'POST',
                body: newStore
            }

            utils.exec(options, callback)
        },
        find: function(searchParams, callback) {
            const options = {
                path: '/v1/store',
                method: 'GET'
            }

            if (arguments.length === 2 && Object.prototype.toString.call(searchParams) === "[object Object]") {
                options.query = searchParams
            }

            //if first parameters is a function, we use it as a callback
            if (arguments.length === 1 && Object.prototype.toString.call(searchParams) === "[object Function]") {
                callback = searchParams
            }

            utils.exec(options, callback)
        },
        get: function(storeId, callback) {
            const options = {
                path: '/v1/store/' + storeId,
                method: 'GET'
            }

            utils.exec(options, callback)
        },
        update: function(storeId, store, callback) {
            const options = {
                path: '/v1/store/' + storeId,
                method: 'PUT',
                body: store
            }

            utils.exec(options, callback)
        },
        delete: function(storeId, callback) {
            const options = {
                path: '/v1/store/' + storeId,
                method: 'DELETE'
            }

            utils.exec(options, callback)
        }
    }
})()