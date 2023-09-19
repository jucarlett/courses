var input = require("fs").readFileSync("beecrowd/ref1080.txt", "utf8");
var lines = input.split("\n");

let max = 0; //set as vars q receberão a posicao e o maior
let posicao = 0;

for (let i = 1; i <= 100; i++) {
  let num = parseInt(lines.shift()); //vai ler as entradas e receber

  if (num > max) {
    //quando o numero d entrada for maior que o max, ele vai setar o novo max jogando o max pro num
    max = num;
    posicao = i; //da o numero do indice q foi setado o novo num com max 
  }
}

console.log(max);
console.log(posicao);
