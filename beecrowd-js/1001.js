var input = require('fs').readFileSync('beecrowd/ref1001.js', 'utf8')
var lines = input.split('\n')

var a = lines [0]
var b = lines [1]
var x = parseInt (a) + parseInt (b)

console.log("X = " + x)

