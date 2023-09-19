var input = require("fs").readFileSync("beecrowd/ref1067.txt", "utf8");
var lines = input.split("\n");

let num = parseInt(lines.shift());

for (let i = 1; i <= num; i++){
    if (i % 2 !== 0) { //verifica se é ímpar pq ve se o resto da divisão por 2 é dif d 0
        console.log(i);
    }
}
