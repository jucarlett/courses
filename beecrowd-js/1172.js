var input = require("fs").readFileSync("beecrowd/ref1172.txt", "utf8");
var lines = input.split("\n");

let X = [];//definida matriz q receberá a var num

for (let i = 0; i < 10; i++) {
  //i<10 pq é 10 valores no vetor q será lido

  let num = parseInt(lines.shift()); //vai ler as entradas e receber os valores e depois passar pra X

  if (num <= 0) {    //verifica de é null ou negativo
    X[i] = 1; //substitui por 1 se sim
  } else {
    X[i] = num; //senao digita o proprio número de entrada num no vetor X
  }
  console.log(`X[${i}] = ${X[i]}`);
}


