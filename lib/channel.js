module.exports = (function() {
    const utils = require('./utils')

    return {
        create: function(newChannel, callback) {
            const options = {
                path: '/v1/channel',
                method: 'POST',
                body: newChannel
            }

            utils.exec(options, callback)
        },
        find: function(searchParams, callback) {
            const options = {
                path: '/v1/channel',
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
        get: function(channelId, callback) {
            const options = {
                path: '/v1/channel/' + channelId,
                method: 'GET'
            }

            utils.exec(options, callback)
        },
        update: function(channelId, channel, callback) {
            const options = {
                path: '/v1/channel/' + channelId,
                method: 'PUT',
                body: channel
            }

            utils.exec(options, callback)
        },
        delete: function(channelId, callback) {
            const options = {
                path: '/v1/channel/' + channelId,
                method: 'DELETE'
            }

            utils.exec(options, callback)
        }
    }
})()