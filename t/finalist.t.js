require('proof')(1, prove)

function prove (okay) {
    var finalist = require('..')
    okay(finalist, 'require')
}
