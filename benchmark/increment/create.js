var adhere = require('../../adhere')
var adhere_ = require('../../_adhere')
var Benchmark = require('benchmark')

var suite = new Benchmark.Suite('call')

function f (a, b, c, d, e) {}

function create (adhere) {
    return function () {
        adhere(f, function () {})(1, 2, 3, 4, 5)
    }
}

create(adhere)()

for (var i = 1; i <= 4; i++)  {
    suite.add({
        name: '_adhere create ' + i,
        fn: create(adhere_)
    })

    suite.add({
        name: ' adhere create ' + i,
        fn: create(adhere)
    })
}

suite.on('cycle', function(event) {
    console.log(String(event.target));
})

suite.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})

suite.run()
