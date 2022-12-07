//encuentra el primer valor que cumpla con la condicion

const numbers = [4, 21, 35, 25, 45];
let first = numbers.find(myFunction);

console.log(first)
function myFunction(value, index, array) {
  return value/2 > 18;
}

const works = ["hola","amigo_del_alma"];
let first_works = works.find(myFunction_works);



function myFunction_works(value, index, array) {
  return value.length > 5;
}

if(first_works == undefined){
    console.log("ningun coincidio con la busqueda")
}
else{
    console.log("el primer resultado que coincidio es")

    console.log(first_works)
}
