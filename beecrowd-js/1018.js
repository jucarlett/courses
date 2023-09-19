var input = require('fs').readFileSync('beecrowd/ref1018.txt', 'utf8')
var lines = input.split('\n')

var valor = parseInt(lines.shift())
var notas = [100, 50, 20, 10, 5, 2, 1]
var quantNotas = []
var resto = valor

for (var i = 0; i < notas.length; i++) {
    quantNotas[i] = parseInt(resto / notas[i])
    resto = resto % notas[i]
}
var x = 0
console.log(valor)
for (var i = 0; i < notas.length; i++) {
    console.log(quantNotas[i] + " nota(s) de R$ " + notas[i] + ",00")
    x += quantNotas[i]
}
if (resto > 0) {
    console.log(resto + " nota(s) de R$ 1,00")
}