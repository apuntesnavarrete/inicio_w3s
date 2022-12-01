//Revisa si hay alguna palabra en un texto a elegir

function myFunction() {

    let text = prompt("Agrega texto a analizar");
    let text_nuevo = prompt("palabra a revisar");
    let respon = text.includes(text_nuevo);
    console.log(respon)
  }