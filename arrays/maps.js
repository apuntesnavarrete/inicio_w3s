const numbers1 = [45, 4, 9, 16, 25];
numbers1.map(myFunction);

// function myFunction(value) {
function myFunction(value, index, array) {
   console.log(value * 2);
   console.log(index);
   console.log(array);


}

// repaso fuction

numbers1.map(mysi);
function mysi(value, index, array) {

    if(value > 20){
        console.log(value)
        console.log("Es mayor que 20")

    }else{
        console.log(value)
        console.log("Es menor que 20")
    }
 }

 const eliminar_fruits = ["Banana", "Orange", "Apple", "Mango"];

 eliminar_fruits.map(drop_fuits)

function drop_fuits(value,index, array){
    console.log("Inicio de ciclo")
    console.log(value)
    console.log(index)
    console.log(array)
     eliminar_fruits.shift()

    
}


