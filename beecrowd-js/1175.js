var input = require("fs").readFileSync("beecrowd/ref1175.txt", "utf8");
var lines = input.split("\n");

var N = [];

for (let i = 0; i < 20; i++) {
    N[i] = parseInt(lines.shift());//para armazenar a var q está percorrendo - originais
}

for (let i = 0; i < 10; i++) { //vai ate 10 pq estamos fazendo transação da metade de var de posição
    let tempN = N[i]; //seta e armazena a Variável temp para transação 
    N[i] = N[19 - i]; //armazena o valor da ultima posição no vetor na primeira fazendo a transação
    N[19 - i] = tempN; //inverte as posicao fazendo a transacao de slots de var
}

for (let i = 0; i < 20; i++) {
    console.log(`N[${i}] = ${N[i]}`);
}
