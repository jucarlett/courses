var input = require("fs").readFileSync("beecrowd/ref1019.txt", "utf8");
var lines = input.split("\n");


function conversaoSegEmTempo() { 
    let segundos = parseInt(lines.shift());
    
    const horas = Math.floor(segundos / 3600); //obtendo horas e Math.floor para arredondar
    segundos %= 3600; //pegando o resto para atualizar valor do segundos para conta dos minutos
    const minutos = Math.floor(segundos / 60); //obtendo minutos e Math.floor para arredondar
    segundos %= 60;

    return `${horas}:${minutos}:${segundos}`;
}

console.log(conversaoSegEmTempo());