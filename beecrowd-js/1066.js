var input = require("fs").readFileSync("beecrowd/ref1066.txt", "utf8");
var lines = input.split("\n");

let contadorPar = 0;
let contadorImpar = 0;
let contadorNegativo = 0;
let contadorPositivo = 0; //zerando contadores e definindo

for (let i = 0; i < 5; i++) { //só leitura de 5 inteiros por isso o i<5
    let num = parseInt(lines.shift()); //vai ler as entradas e receber

    if (num % 2 === 0) { //verifica se é par 
        contadorPar++;
    } else {
        contadorImpar++; //se nao for par vai incrementar o ímpar
    }

    if (num > 0) { //verifica se é positivo ou negativo
        contadorPositivo++;
    } else if (num < 0) {
        contadorNegativo++;
    }
}

console.log(`${contadorPar} valor(es) par(es)`);
console.log(`${contadorImpar} valor(es) impar(es)`);
console.log(`${contadorPositivo} valor(es) positivo(s)`);
console.log(`${contadorNegativo} valor(es) negativo(s)`);