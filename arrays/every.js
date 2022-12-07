const numbers = [16, 17, 15, 14];


//un grupo de amigos iran a un bar , todos deben ser mayores de edad
//el grupo puede entrar al bar?


/*
let allOver18 = numbers.every(myFunction);
*/

let allOver18 = numbers.some(myFunction);

//un grupo de amigos iran a un zologico , debe a ver al menos una persona con ine
//el grupo puede entrar al zoo?




if (allOver18 == true){
    console.log("Bienvenidos al zoo ")
} else {
    console.log("no tienen un mayor con ine")
}

function myFunction(value, index, array) {
  return value > 18;
}


/*
if (allOver18 == true){
    console.log("Bienvenidos al bar ")
} else {
    console.log("Hay menores entre ustedes o los dejan afuera o no buscan otro lugar")
}
*/
