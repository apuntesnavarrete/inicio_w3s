const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.shift();
//console.log(result) //Guarde el dato eliminado
//console.log(fruits) //Imprimir array modificado

fruits.unshift("Lemon");// agrego uno al inicio del array
//console.log(fruits) // imprimir array modificado


//Ejericio elimina uno por uno los datos del array y despues ponles un contador

const eliminar_fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(eliminar_fruits)
for(i=0; i < eliminar_fruits.length; i ){


    let eliminado = eliminar_fruits.shift()
    console.log("Eliminando")
    console.log(eliminado)
    console.log(eliminar_fruits)

   

}


// con el boton , eliminar elementos del array y actualizarlo en pantalla