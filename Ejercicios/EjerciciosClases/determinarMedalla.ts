let posiciónCarrera: number = Number(
  prompt("Ingrese posición en que terminó la carrera")
);

if (posiciónCarrera === 1) {
  console.log("Usted recibió Medalla de Oro");
} else {
  if (posiciónCarrera === 2) {
    console.log("Usted recibió Medalla de Plata");
  } else {
    if (posiciónCarrera === 3) {
      console.log("Usted recibió Medalla de Bronce");
    } else {
      console.log("Usted recibió Mención de Participación");
    }
  }
}

/*con swich
  let posiciónCarrera: number = Number(
   prompt("Ingrese posición en que terminó la carrera"));
  switch (posiciónCarrera) {
   case 1:
     console.log("Usted recibió Medalla de Oro");
     break;
   case 2:
     console.log("Usted recibió Medalla de Plata");
     break;
   case 3:
     console.log("Usted recibió Medalla de Bronce");
     break;
   default:
     console.log("Usted recibió Mención de Participación");
  }
 */
