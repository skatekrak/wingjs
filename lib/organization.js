module.exports = (function() {
    const utils = require('./utils')

    return {
        create: function(newOrganization, callback) {
            const options = {
                path: '/v1/organization',
                method: 'POST',
                body: newOrganization
            }

            return utils.exec(options, callback)
        },
        current: function(callback) {
            const options = {
                path: '/v1/organization',
                method: 'GET'
            }

            return utils.exec(options, callback)
        },
        update: function(organization, callback) {
            const options = {
                path: '/v1/organization',
                method: 'PUT',
                body: organization
            }

            return utils.exec(options, callback)
        }
    }
})()