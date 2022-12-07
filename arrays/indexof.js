//Busca una coincidencia y devuelve el indice en que se encuentra

const fruits = ["Apple", "Orange", "Apple", "Mango"];

let position = fruits.indexOf("jorge") + 1;

if(position == 0){
    console.log("No fue encontrado")
}else{
    console.log(position)
}

