var input = require("fs").readFileSync("beecrowd/ref1017.txt", "utf8");
var lines = input.split("\n");

var autonomia = 12
var tempoGasto = parseInt(lines.shift())
var velocidadeMedia = parseFloat(lines.shift())

var distanciaPercorrida = tempoGasto*velocidadeMedia
var litros = (distanciaPercorrida/autonomia)


console.log(litros.toFixed(3))

