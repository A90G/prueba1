//Ejecicio slide
let precioInicial: number = "450.50";
let descuento: number = "0.1";
let precioFinal: number = precioInicial - precioInicial * descuento;

console.log(precioFinal);

//Ejercicio clase 25 04 - slide 36

if (precioInicial > 1000) {
  console.log("El número es mayor a 1000: " + precioFinal);
} else {
  console.log("El número es menor o igual a 1000: " + precioInicial);
}
