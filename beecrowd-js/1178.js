var input = require('fs').readFileSync('beecrowd/ref1178.txt', 'utf8');
var lines = input.split('\n');


let num = parseFloat(lines.shift());
let N = [];

// Preenchendo o vetor
N[0] = num;
for (let i = 1; i < 100; i++) {
    N[i] = N[i - 1] / 2; //pega posicao anterior divide por 2 e joga na atual
}


for (let i = 0; i < 100; i++) {//corre vetor todo
    console.log(`N[${i}] = ${N[i].toLocaleString('en-US',{minimumFractionDigits:4,useGrouping:false}).toString().replace(",",".")}`);
    
}
