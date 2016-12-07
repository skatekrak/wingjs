module.exports = function(route) {
    const utils = require('./utils')

    return {
        create: function(newOrder, callback) {
            const options = {
                path: '/v1/' + route,
                method: 'POST',
                body: newOrder
            }

            utils.exec(options, callback)
        },
        find: function(searchParams, callback) {
            const options = {
                path: '/v1/' + route,
                method: 'GET'
            }

            if (arguments.length === 2 && Object.prototype.toString.call(searchParams) === '[object Object]') {
                options.query = searchParams
            }

            if (arguments.length === 1 && Object.prototype.toString.call(searchParams) === '[object Function]') {
                callback = searchParams
            }

            utils.exec(options, callback)
        },
        get: function(orderId, callback) {
            const options = {
                path: '/v1/' + route + '/' + orderId,
                method: 'GET'
            }

            utils.exec(options, callback)
        },
        update: function(orderId, order, callback) {
            const options = {
                path: '/v1/' + route + '/' + orderId,
                method: 'PUT',
                body: order
            }

            utils.exec(options, callback)
        },
        delete: function(orderId, callback) {
            const options = {
                path: '/v1/' + route + '/' + orderId,
                method: 'DELETE'
            }

            utils.exec(options, callback)
        }
    }
}