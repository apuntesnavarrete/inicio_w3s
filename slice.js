let texto = "hola compas voy a cortar este string"
let corte = texto.slice(5,8)

console.log(corte)

//Ejercicio crea un correo electronico con los nombres

let nombres = ["juan","pedro","pablo","felipe","jorge"]
let correos = []


for(i=0; nombres.length > i ; i++ ){
    correos.push(nombres[i].slice(0,4) + "@heroesfb.com")

}

console.log(correos)

//Mejora si hay 2 nombre iguales agregarle a uno numeros.