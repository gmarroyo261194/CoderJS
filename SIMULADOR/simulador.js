let logueado = false;
let usuario = "";
let passw = "";
let cuotaSeleccionada = -1;
do {
  usuario = prompt("ingrese nimbre de usuario");
  passw = prompt("ingrese password");

  if (
    (usuario == "garroyo" ||
      usuario == "mgiorlando" ||
      usuario == "mxarroyo") &&
    passw == "simulador"
  ) {
    console.log("accedo concedido");
    logueado = true;
  } else {
    console.log("usuario o clave incorrecta");
  }
} while (!logueado);

console.log("recuperando deuda cliente...");

let deudas = ListadoDeudaCliente();
if (deudas == "") {
  console.log("no posee deudas al momento. Felicitaciones!");
} else {
  console.log(deudas);
  cuotaSeleccionada = prompt("ingrese el numero de la cuota para abonar");
  if (isNaN(cuotaSeleccionada)) {
    console.log("debe ingresar un valor numerico valido!");
  } else {
    console.log("Calculando importes por medio de pago...");
    console.log(CalcularValorMedioPago(5500));

    let tipoPago = prompt("ingrese el medio de pago a utilizar")

    PagarCuota(cuotaSeleccionada, tipoPago)
  }
}

function ListadoDeudaCliente() {
  switch (usuario) {
    case "garroyo":
      return `1 - Cuota 3 - Vto - 25/01/2022 - $5.500\n2 - Cuota 4 - Vto - 25/02/2022 - $5.500\n`;

    case "mgiorlando":
      return `1 - Cuota 2 - Vto - 25/12/2021 - $5.500\n2 - Cuota 3 - Vto - 25/01/2022 - $5.500\n`;
    case "mxarroyo":
      return "";
    default:
      return "";
  }
}

function CalcularValorMedioPago(importeBase) {
  return `1 - Efectivo = $${importeBase}\n2 - T. Credito (1 cta) = $${importeBase}\n3 - T. Credito (> 1 Cta) = $${CalcularInteresCta(
    importeBase
  )}`;
}

function CalcularInteresCta(importeBase) {
  return Math.round(parseFloat(importeBase) * 1.1);
}

function PagarCuota(nroCta, medioPago) {
  let tipoPago = "";
  switch (medioPago) {
    case "1":
      tipoPago = "Efectivo";
      break;
    case "2":
      tipoPago = "Tarjeta de Credito en 1 cuota";
      break;
    case "3":
      tipoPago = "Tarjeta de Credito en Varias Cuotas";
      break;
  }
  console.log(`Felicitaciones, acaba de abonar la cuota ${nroCta} con el medio de pago ${tipoPago}`);
}
