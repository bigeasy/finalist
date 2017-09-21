require('proof')(1, prove)

function prove (okay) {
    var finalist = require('..')

    finalist(function (callback) {
        callback(null, 1)
        callback(null, 3)
    }, function (error, value) {
        okay(value, 1, 'finalist')
    })
}
