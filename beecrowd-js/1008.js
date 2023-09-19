var input = require("fs").readFileSync("beecrowd/ref1008.js", "utf8");
var lines = input.split("\n");

var numFuncionario = parseInt(lines.shift())
var horasTrabalhada = parseInt(lines.shift())
var valorPorHora = parseFloat(lines.shift())

var salario = horasTrabalhada * valorPorHora

console.log("NUMBER = "+numFuncionario)
console.log("SALARY = U$ "+salario.toFixed(2))