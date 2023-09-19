var input = require('fs').readFileSync('beecrowd/ref1006.js', 'utf8')
var lines = input.split('\n')

var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())
var c = parseFloat(lines.shift())

var media = parseFloat((a * 2 + b * 3 + c * 5) / 10)

console.log("MEDIA = " + media.toFixed(1))

