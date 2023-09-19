var input = require("fs").readFileSync("beecrowd/ref1051.txt", "utf8");
var lines = input.split("\n");

var salario = parseFloat(lines.shift());

if (salario <= 2000) {
  imposto = 0;
} else if (salario <= 3000) {
  imposto = (salario - 2000) * 0.08;
} else if (salario <= 4500) {
  imposto = (salario - 3000) * 0.18 + 1000 * 0.08;
} else if (salario > 4500) {
  imposto = (salario - 4500) * 0.28 + 1500 * 0.18 + 1000 * 0.08;
}

if (salario <= 2000) {
  console.log("Isento");
} else {
  console.log("R$ " + imposto.toFixed(2));
}
