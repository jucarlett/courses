var input = require('fs').readFileSync('beecrowd/ref1184.txt', 'utf8');
var lines = input.split('\n');

// Pegando a operação da primeira linha
let O = lines.shift();
let M = [];

for (let i = 0; i < 12; i++) { // loop linha
    M[i] = [];
    for (let j = 0; j < 12; j++) { // loop coluna
        M[i][j] = parseFloat(lines.shift());
    }
}

// Calculando a soma ou a média dos elementos abaixo da diagonal principal
let soma = 0;
let contadorMedia = 0; 
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < i; j++) {
        soma += M[i][j];
        contadorMedia++;
    }
}

let resultado = O === 'S' ? soma : soma / contadorMedia;


console.log(resultado.toFixed(1));
