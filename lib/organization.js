module.exports = (function() {
    const utils = require('./utils')

    return {
        create: function(newOrganization, callback) {
            const options = {
                path: '/v1/organization',
                method: 'POST',
                body: newOrganization
            }

            utils.exec(options, callback)
        },
        current: function(callback) {
            const options = {
                path: '/v1/organization',
                method: 'GET'
            }

            utils.exec(options, callback)
        },
        update: function(organization, callback) {
            const options = {
                path: '/v1/organization',
                method: 'PUT',
                body: organization
            }

            utils.exec(options, callback)
        }
    }
})()