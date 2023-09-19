var input = require('fs').readFileSync('beecrowd/ref1003.js', 'utf8')
var lines = input.split('\n')

var a = lines[0]
var b = lines[1]
var soma = parseInt(a) + parseInt(b)

console.log("SOMA = "+soma)

