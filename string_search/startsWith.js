function myFunction() {

    let text = prompt("Agrega texto a analizar");
    let text_nuevo = prompt("palabra a revisar");
    let respon = text.startsWith(text_nuevo);
    console.log(respon)
  }