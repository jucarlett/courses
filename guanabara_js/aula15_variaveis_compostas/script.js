let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.length
num.sort() //ordem crescente



console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//para cada posição em num, mostre o valor da pos
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num.indexOf(7) //retorna a posição do valor 7
if (num.indexOf(7) == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${num.indexOf(7)}`)
}

