const numbers = [45, 4, 9, 16, 25,23];
console.log(numbers)
const number_filter = numbers.filter(myFunction);

console.log(number_filter)




function myFunction(value, index, array) {
 return value > 18 * 1.5
}