var input = require("fs").readFileSync("beecrowd/ref1059.txt", "utf8");
var lines = input.split("\n");


for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) { //verifica se é par
        console.log(i);
    }
}



