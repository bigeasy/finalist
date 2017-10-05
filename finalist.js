module.exports = function () {
    var vargs = Array.prototype.slice.call(arguments)
    if (arguments.length == 2) {
        vargs.unshift(null)
    }
    var context = vargs.shift()
    var block = vargs.shift()
    var callback = vargs.shift()
    var invoked = false
    block.call(context, function () {
        if (!invoked) {
            invoked = true
            callback.apply(null, Array.prototype.slice.call(arguments))
        }
    })
}
