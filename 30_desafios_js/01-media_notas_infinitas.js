// Média de notas infinitas

function average(numbers) {
  let sum = 0;

  numbers.forEach(number => {
    sum += number; //sum = sum+number
  })

  const average = sum / numbers.length;

  return average;
}

//teste entrada
console.log(average([10, 9, 6, 8, 9, 1, 5, 7])); //6.875
console.log(average([2, 5, 7, 1, -2])); //2.6
