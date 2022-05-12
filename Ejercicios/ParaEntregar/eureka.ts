let contraseña: string = "Eureka";
let ingreseContraseña: string = prompt(
  "Ingrese su contraseña, tiene 3 intentos"
);

if (contraseña === ingreseContraseña) {
  console.log("Usted ha ingresado correctamente");
} else {
  let ingreseContraseña: string = prompt(
    "Ingrese su contraseña, tiene 2 intentos"
  );

  if (contraseña === ingreseContraseña) {
    console.log("Usted ha ingresado correctamente");
  } else {
    let ingreseContraseña: string = prompt(
      "Ingrese su contraseña, tiene 1 intentos"
    );

    if (contraseña === ingreseContraseña) {
      console.log("Usted ha ingresado correctamente");
    } else {
      console.log("Contraseña incorrecta, se bloqueó el ingreso");
    }
  }
}
