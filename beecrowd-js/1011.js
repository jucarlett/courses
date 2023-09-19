var input = require("fs").readFileSync("beecrowd/ref1011.txt", "utf8");
var lines = input.split("\n");

var r = parseFloat (lines.shift())
var pi= 3.14159

var volume = ((4/3) * pi * r**3)

console.log("VOLUME = " +volume.toFixed(3))
