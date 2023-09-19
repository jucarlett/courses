var input = require("fs").readFileSync("beecrowd/ref1182.txt", "utf8");
var lines = input.split("\n");

// Pegando a coluna e a operação da primeira e segunda linha
let C = parseInt(lines.shift());
let T = lines.shift();
let M = [];



for (let i = 0; i < 12; i++) {//loop linha
    M[i] = [];
    for (let j = 0; j < 12; j++) { //loop coluna
        M[i][j] = parseFloat(lines.shift());
    }
}

// Calculando a soma ou a média dos elementos da coluna especificada
let soma = 0;
for (let i = 0; i < 12; i++) {
    soma += M[i][C];
}

let resultado = T === 'S' ? soma : soma / 12;

// Imprimindo o resultado com 1 casa decimal
console.log(resultado.toFixed(1));
