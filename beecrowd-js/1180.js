var input = require('fs').readFileSync('beecrowd/ref1180.txt', 'utf8');
var lines = input.split('\n');

let N = lines.shift(); //entrada do num elementos a ser lido
let X = lines.shift().split(' ').map(Number); //colentado a linha tendo como distincao de elementos o space e o map nova ordem setando todos como number

let min = X[0]; // setando menor valor
let posicao = 0; // resetando a posicao


for (let i = 1; i < N; i++) { // Percorrendo o vetor X para encontrar o menor valor e sua posição
    if (X[i] < min) {
        min = X[i];
        posicao = i;
    }
}

console.log(`Menor valor: ${min}`);
console.log(`Posicao: ${posicao}`);
