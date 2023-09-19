var input = require("fs").readFileSync("beecrowd/ref1078.txt", "utf8");
var lines = input.split("\n");

let num = parseInt(lines.shift());

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${num} = ${i * num}`); //dentro do i*num vai ser executada a conta das var anteriores 
}
