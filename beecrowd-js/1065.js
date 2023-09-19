var input = require("fs").readFileSync("beecrowd/ref1065.txt", "utf8");
var lines = input.split("\n");

let contador = 0 //zera o contador

for (let i = 0; i < 5; i++) { //i<5 pq são 5 valores
    let num = parseInt(lines.shift()); //vai ler as entradas e receber

    if (num % 2 === 0) {//verifica se o valor dividido por 2 é igual a 0
        contador++; //se sim incrementa o contador
    }
}

console.log(`${contador} valores pares`);
