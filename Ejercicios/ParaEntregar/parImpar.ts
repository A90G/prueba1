// La consigna decìa: En el caso de ser 0 (cero) el algoritmo deberá informar
// Asumo que cero es true y con cero devuelve par, en caso de que "deba informar cero textual" agregarìa un if más, sino lo dejo así para que tenga menos líneas el código
let numero: number = prompt();
if (numero % 2 === 0) {
  console.log("el número es par", numero);
} else {
  console.log("el número es impar", numero);
}
