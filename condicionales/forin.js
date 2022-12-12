let numbers = [3,5,7,9,10];

/*
for(let number of numbers) {
  console.log("El numero a imprimir es")
  console.log(number)
}
*/
for(let index in numbers) {
  console.log("El id a imprimir es")
  console.log(index)
  console.log("El Numero a imprimir es")

  console.log(numbers[index])

}

numbers.forEach(nombre=>console.log(nombre + " foreach"))