const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function myFunction(){

    //fecha completa
    let fecha = Date();
    console.log(fecha)

    // solo obtenemos el año
    const d = new Date(fecha)
    console.log(d.getFullYear())
    console.log(d.getMonth())

    //Utilizando un array de auxiliar podemos imprimir los meses por nombre
    console.log(months[d.getMonth()])
    //Utilizando un array de auxiliar podemos imprimir los dias por nombre
    console.log(days[d.getDay()])
    //milisegundo desde 1970
    console.log(d.getTime())
    //milisegundo desde de 1970 a 2022
    const fecha_2022 = new Date("2022-01-01");
    console.log(fecha_2022.getTime())

    //milisegundos que han pasado del 2022 a la fecha actual
    console.log(d.getTime() - fecha_2022.getTime())
}