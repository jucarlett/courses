var input = require("fs").readFileSync("beecrowd/ref1010.txt", "utf8");
var lines = input.split("\n");

var [codPeca1, numPeca1, valorUnitPeca1] = lines[0].split(' ')
var [codPeca2, numPeca2, valorUnitPeca2] = lines[1].split(' ')

var total = numPeca1 * valorUnitPeca1 + numPeca2 * valorUnitPeca2

console.log("VALOR A PAGAR: R$ " + total.toFixed(2))
