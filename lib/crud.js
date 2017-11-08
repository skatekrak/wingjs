module.exports = function(route) {
    const utils = require('./utils')

    return {
        create: function(newOrder, callback) {
            const options = {
                path: '/v1/' + route,
                method: 'POST',
                body: newOrder
            }

            return utils.exec(options, callback)
        },
        find: function(searchParams, callback) {
            const options = {
                path: '/v1/' + route,
                method: 'GET'
            }

            if (Object.prototype.toString.call(searchParams) === '[object Object]') {
                options.query = searchParams
            } else if (Object.prototype.toString.call(searchParams) === '[object Function]') {
                callback = searchParams
            }

            return utils.exec(options, callback)
        },
        get: function(orderId, callback) {
            const options = {
                path: '/v1/' + route + '/' + orderId,
                method: 'GET'
            }

            return utils.exec(options, callback)
        },
        update: function(orderId, order, callback) {
            const options = {
                path: '/v1/' + route + '/' + orderId,
                method: 'PUT',
                body: order
            }

            return utils.exec(options, callback)
        },
        delete: function(orderId, callback) {
            const options = {
                path: '/v1/' + route + '/' + orderId,
                method: 'DELETE'
            }

            return utils.exec(options, callback)
        }
    }
}