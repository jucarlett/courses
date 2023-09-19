var input = require("fs").readFileSync("beecrowd/ref1016.txt", "utf8");
var lines = input.split("\n");

var xVelocidade = 60
var yVelocidade = 90
var distanciaDiferenca = parseInt(lines.shift())

var tempo = (distanciaDiferenca / (yVelocidade - xVelocidade)) * 60


console.log(tempo.toFixed(0)+" minutos")

