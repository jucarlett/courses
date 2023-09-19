var input = require("fs").readFileSync("beecrowd/ref1052.txt", "utf8");
var lines = input.split("\n");

var numeroMes = parseInt(lines.shift())

if (numeroMes == 1) {
  console.log("January")
} else if (numeroMes == 2) {
  console.log("February")
} else if (numeroMes == 3) {
  console.log("March")
} else if (numeroMes == 4) {
  console.log("April")
} else if (numeroMes == 5) {
  console.log("May")
} else if (numeroMes == 6) {
  console.log("June")
} else if (numeroMes == 7) {
  console.log("July")
} else if (numeroMes == 8) {
  console.log("August")
} else if (numeroMes == 9) {
  console.log("September")
} else if (numeroMes == 10) {
  console.log("October")
} else if (numeroMes == 11) {
  console.log("November")
} else if (numeroMes == 12) {
  console.log("December")
} else {
  console.log("Mês invalido")
}
