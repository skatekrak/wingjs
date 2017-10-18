module.exports = (function() {
    var utils = require('./utils')

    return {
        me: function(callback) {
            const options = {
                path: '/v1/user',
                method: 'GET'
            }

            return utils.exec(options, callback)
        },
        new: function(newUser, callback) {
            const options = {
                path: '/v1/user',
                method: 'POST',
                body: newUser
            }

            return utils.exec(options, callback)
        },
        update: function(user, callback) {
            const options = {
                path: '/v1/user',
                method: 'PUT',
                body: user
            }

            return utils.exec(options, callback)
        },
        apiKey: function(callback) {
            const options = {
                path: '/v1/user/apikey',
                method: 'GET'
            }

            return utils.exec(options, callback)
        },
        generateApiKey: function(callback) {
            const options = {
                path: '/v1/user/apikey',
                method: 'PUT'
            }

            return utils.exec(options, callback)
        }
    }
})()