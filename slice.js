let texto = "hola compas voy a cortar este string"
let corte = texto.slice(5,8)

console.log(corte)

//Ejercicio crea un correo electronico con los nombres

let nombres = ["juan","pedro","pablo","felipe"]
let correos = []

correos.push(nombres[0].slice(0,4) + "@heroesfb.com")
correos.push(nombres[1].slice(0,4) + "@heroesfb.com")
correos.push(nombres[2].slice(0,4) + "@heroesfb.com")


console.log(correos)
