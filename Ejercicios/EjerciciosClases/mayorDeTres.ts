let ingreseNum1: number = Number(prompt("Ingrese primer número"));
let ingreseNum2: number = Number(prompt("Ingrese segundo número"));
let ingreseNum3: number = Number(prompt("Ingrese tercer número"));
let numeroMayor: boolean;
if (ingreseNum1>=ingreseNum2 && ingreseNum1>= ingreseNum3) {
  console.log("primer número es mayor");
 } else {
       if (ingreseNum2>=ingreseNum1 && ingreseNum2>= ingreseNum3){
         console.log("segundo número es mayor");
       } else {
                console.log("tercer número es mayor");}