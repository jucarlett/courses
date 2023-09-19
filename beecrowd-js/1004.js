var input = require('fs').readFileSync('beecrowd/ref1004.js', 'utf8')
var lines = input.split('\n')

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())

var prod = parseInt(a*b)

console.log("PROD = "+prod)
