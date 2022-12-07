//un grupo de amigos iran a un bar , todos deben ser mayores de edad
//el grupo puede entrar al bar?

const numbers = [19, 20, 21, 23];
let allOver18 = numbers.every(myFunction);


if (allOver18 == true){
    console.log("Bienvenidos al bar ")
} else {
    console.log("Hay menores entre ustedes o los dejan afuera o no buscan otro lugar")
}

function myFunction(value, index, array) {
  return value > 18;
}