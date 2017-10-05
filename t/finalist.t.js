require('proof')(3, prove)

function prove (okay) {
    var finalist = require('..')

    finalist(function (callback) {
        callback(null, 1)
        callback(null, 3)
    }, function (error, value) {
        okay(value, 1, 'finalist')
    })

    var object = {}
    finalist(object, function (callback) {
        okay(object === this, 'this')
        callback(null, 1)
        callback(null, 3)
    }, function (error, value) {
        okay(value, 1, 'finalist with this')
    })
}
