var input = require("fs").readFileSync("beecrowd/ref1177.txt", "utf8");
var lines = input.split("\n");

var numT = parseInt(lines.shift());
var N = [];

for (let i = 0; i < 1000; i++) {    //i<1000 pq é vetor de 1000
    N[i] = i % numT;                //resto da divisão de i por numT
    console.log(`N[${i}] = ${N[i]}`);
    }         

