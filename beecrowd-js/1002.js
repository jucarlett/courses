var input = require('fs').readFileSync('beecrowd/ref1002.js', 'utf8')
var lines = input.split('\n')

const n = parseFloat (3.14159)
const r = lines [0]
const a = parseFloat (n) * parseFloat(r*r)

console.log("A="+a.toFixed(4))