//còmo le digo que lo haga hasta 3 veces?
//debo escribir màs còdigo del estilo: 1ro pregunte usuario si no es cierre
//luego un for?
let nombreUsuario: string = "Ara";
let contrasenaUsuario: string = "Eureka";
let ingreso = 3;

if (ingreso) {
  var usuarioIngreso = prompt("ingrese su nombre de usuario");
  if (usuarioIngreso === nombreUsuario) {
  } else {
    alert("usuario incorrecto");
  }
  var contrasenaIngreso = prompt("ingrese su contraseña");
  if (contrasenaIngreso === contrasenaUsuario) {
    console.log("acceso");
  } else {
    alert("SÓLO TIENE 3 OPORTUNIDADES");
  }
}
