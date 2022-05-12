//Ejecicio slide
let cantidad: number = "1";
let precio: number = "450.50";
let precioInicial: number = cantidad * precio;
let descuento: number = "0.1";
let precioFinal: number = precioInicial - precioInicial * descuento;

console.log(precioFinal);

//Ejercicio clase 25 04 - slide 36

if (precioInicial > 1000) {
  console.log("El número es mayor a 1000: " + precioFinal);
} else {
  console.log("El número es menor o igual a 1000: " + precioInicial);
}

/* OTRA FORMA
let precioProducto: number = Number(prompt("Ingrese el precio del producto"));
let cantidadProducto: number = Number( prompt("Ingrese la cantidad del producto"));
let descuento: number = 0.1;
let precioCompra: number = precioProducto * cantidadProducto;
let precioConDescuento: number = precioCompra - precioCompra * 0.1;

if (precioCompra > 1000) {
 console.log("El precio de la compra es:", precioCompra);
} else {
console.log("El precio de la compra es:", precioConDescuento);
}

*/
