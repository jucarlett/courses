var input = require("fs").readFileSync("beecrowd/ref1014.txt", "utf8");
var lines = input.split("\n");

var distancia = parseInt(lines.shift())
var combustivel = parseFloat(lines.shift())

var consumoMedio = distancia/combustivel

console.log(consumoMedio.toFixed(3)+" km/l")
