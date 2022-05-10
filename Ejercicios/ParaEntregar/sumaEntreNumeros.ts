let numero1: number = Number(prompt("Ingrese el primer número: "));
let numero2: number = Number(prompt("Ingrese el segundo número"));
let resultado: number = 0;

for (let i = numero1; i <= numero2; i++) {
  resultado += i;
}
console.log("El resultado es: ", resultado);
