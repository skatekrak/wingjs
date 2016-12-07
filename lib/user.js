module.exports = (function() {
    var utils = require('./utils')

    return {
        me: function(callback) {
            const options = {
                path: '/v1/user',
                method: 'GET'
            }

            utils.exec(options, callback)
        },
        new: function(newUser, callback) {
            const options = {
                path: '/v1/user',
                method: 'POST',
                body: newUser
            }

            utils.exec(options, callback)
        },
        update: function(user, callback) {
            const options = {
                path: '/v1/user',
                method: 'PUT',
                body: user
            }

            utils.exec(options, callback)
        },
        apiKey: function(callback) {
            const options = {
                path: '/v1/user/apikey',
                method: 'GET'
            }

            utils.exec(options, callback)
        },
        generateApiKey: function(callback) {
            const options = {
                path: '/v1/user/apikey',
                method: 'PUT'
            }

            utils.exec(options, callback)
        }
    }
})()