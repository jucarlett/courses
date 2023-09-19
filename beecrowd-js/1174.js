var input = require("fs").readFileSync("beecrowd/ref1174.txt", "utf8");
var lines = input.split("\n");

let A = [];

for (let i = 0; i < 100; i++) {
    A[i] = parseFloat(lines.shift());
    if (A[i] <= 10) {
        console.log(`A[${i}] = ${A[i].toFixed(1)}`);
    }
}
