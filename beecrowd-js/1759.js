var input = require('fs').readFileSync('beecrowd/ref1759.txt', 'utf8')
var lines = input.split('\n')

let numHo = parseInt(lines.shift()); 

let ho = ""; //acumulador do HO

for (let i = 1; i <= numHo; i++) {
  ho = ho + "Ho"; //var ho recebendo o "Ho"
    
    if (i !== numHo) { //verifica se é ultima instrução ou nao
        ho += " "; //só executa se numHo for dif de 
    } else {
        ho += "!";
    }
}

console.log(ho);