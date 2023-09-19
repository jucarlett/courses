var input = require("fs").readFileSync("beecrowd/ref1060.txt", "utf8");
var lines = input.split("\n");


let valoresPositivos = 0; //zera a variável q receberá o contador de números e define já

for (let i = 0; i < 6; i++) { //i<6 pq é 6 valores para leitura só
    let num = parseFloat(lines.shift());
    if (num > 0) {
        valoresPositivos++;
    }
}

console.log(`${valoresPositivos} valores positivos`);
