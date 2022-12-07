//Buscamos un elemento en el array 
//si esta , mandandamos un mensaje de confirmacion
//si no , lo agregamos al array y mandamos mensaje de confirmacion de agregado

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let Check_element = prompt("Que elemento deseas saber si esta en el array");


let response = fruits.includes(Check_element); // is true


if(response == true){
    console.log("El array contiene el elemento")
    //puedo recorrerlo para saber su ubicacion
}else{
    console.log("no lo incluye bro")
    fruits.push(Check_element)
}
console.log(fruits)