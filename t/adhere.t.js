require('proof')(19, prove)

function prove (okay) {
    var adhere = require('..')
    var slice = [].slice

    var encase = function (method) {
        return adhere(method, function (object, vargs) {
            method.apply(object, vargs)
        })
    }

    var string = adhere(function () { return 1 }, 1, function (object, vargs) {})
    console.log(string.toString())
    okay(string.toString(), 'function () { return 1 }', 'to string')

    var object = {}
    object.zero = encase(function () {
        okay(this === object, 'zero this')
        okay(slice.call(arguments), [ 1, 2, 3 ], 'zero arguments')
    })
    okay(object.zero.length, 0, 'zero length')
    object.zero(1, 2, 3)
    object.one = encase(function (one) {
        okay(this === object, 'zero this')
        okay(slice.call(arguments), [ 1, 2, 3 ], 'zero arguments')
    })
    okay(object.one.length, 1, 'one length')
    object.one(1, 2, 3)
    object.two = encase(function (one, two) {
        okay(this === object, 'zero this')
        okay(slice.call(arguments), [ 1, 2, 3 ], 'zero arguments')
    })
    okay(object.two.length, 2, 'two length')
    object.two(1, 2, 3)
    object.three = encase(function (one, two, three) {
        okay(this === object, 'three this')
        okay(slice.call(arguments), [ 1, 2, 3 ], 'three arguments')
    })
    okay(object.three.length, 3, 'three length')
    object.three(1, 2, 3)
    object.four = encase(function (one, two, three, four) {
        okay(this === object, 'zero this')
        okay(slice.call(arguments), [ 1, 2, 3 ], 'zero arguments')
    })
    okay(object.four.length, 4, 'four length')
    object.four(1, 2, 3)
    object.many = encase(function (one, two, three, four, five) {
        okay(this === object, 'zero this')
        okay(slice.call(arguments), [ 1, 2, 3 ], 'zero arguments')
    })
    okay(object.many.length, 5, 'many length')
    object.many(1, 2, 3)
}
