//còmo le digo que lo haga hasta 3 veces?
//debo escribir màs còdigo del estilo: 1ro pregunte usuario si no es cierre
//luego un for?

let contrasenaUsuario: string;
let contador: number = 1;

while (contador <= 3 && contrasenaUsuario !== "Eureka") {
  contrasenaUsuario = prompt("introduzca la clave");
  contador++;
}
if (contrasenaUsuario === "Eureka") {
  console.log("clave correcta");
} else {
  console.log("ya no tiene más intentos");
}

/* var contrasenaIngreso = prompt("ingrese su contraseña");
  function validacionPasoUno() { 
  if (usuarioIngreso === nombreUsuario && contrasenaIngreso === contrasenaUsuario) {
    console.log("acceso");
  } else { (ingreso < 3)
    alert( prompt ("SÓLO TIENE 3 OPORTUNIDADES");
  }

}*/
