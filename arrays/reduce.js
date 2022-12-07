const numbers = [45, 4, 9];
let sum = numbers.reduce(myFunction);

console.log(sum)


function myFunction(total, value, index, array) {
  return total - value;
}

let reverse = numbers.reduceRight(myFunction);
console.log(reverse)
