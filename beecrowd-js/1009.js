var input = require("fs").readFileSync("beecrowd/ref1009.js", "utf8");
var lines = input.split("\n");

var nomeVendedor = lines.shift()
var salarioFixo = parseFloat(lines.shift())
var totalVendas = parseFloat(lines.shift())

var totalRecebido = totalVendas * 0.15 + salarioFixo

console.log("TOTAL = R$ " + totalRecebido.toFixed(2))
