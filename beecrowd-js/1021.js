var input = require("fs").readFileSync("beecrowd/ref1021.txt", "utf8");
var lines = input.split("\n");

let valor = parseFloat(lines.shift());
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (let n of notas) { //a variavel n recebe a interacao de cada valor da array notas
  let quantidadeNotas = Math.floor(valor / n); //arredonda para baixo (inteiro mais proximo) com Math.floor
  console.log(quantidadeNotas + " nota(s) de R$ " + n.toFixed(2));
  valor %= n; //pegará o resto para atualizar o valor que usaremos abaixo
}

console.log("MOEDAS:");
for (let m of moedas) {
  let quantidadeMoedas = Math.floor(valor / m);
  console.log(quantidadeMoedas + " moeda(s) de R$ " + m.toFixed(2));
  valor = (valor % m).toFixed(2);
}
