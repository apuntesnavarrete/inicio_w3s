
//remplaza solo la primer coincidencia
function myFunction() {

    let text_antiguo = prompt("Que texto deseas cambiar");
    let text_nuevo = prompt("Nuevo texto");
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.replace(text_antiguo,text_nuevo);
    //para remplazar todas la coincidencias usar remplace All
    //text.replaceAll(text_antiguo,text_nuevo);

  }

