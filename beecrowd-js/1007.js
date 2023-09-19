var input = require("fs").readFileSync("beecrowd/ref1007.js", "utf8");
var lines = input.split("\n");

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
var d = parseFloat(lines.shift());

var diferenca = parseFloat(a * b - c * d);

console.log("DIFERENCA = " + diferenca);
