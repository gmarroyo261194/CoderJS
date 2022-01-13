let numero = prompt("Ingrese un numero entre 50 y 100");

numero = parseInt(numero, 10);

if (isNaN(numero)) {
  alert("NO SE INGRESO UN VALOR NUMERICO!");
} else if (numero >= 50 && numero <= 100) {
  alert("NUMERO CORRECTO!!!");
} else {
  alert("EL NUMERO NO SE ENCUENTRA EN EL RANGO ESPECIFICADO");
}

let usuario = prompt("INGRESE SU NOMBRE DE USUARIO: ").trim().toLowerCase();

if (usuario != "") {
  if (usuario == "garroyo" || usuario == "mgiorlando") {
    console.log("Bienvenido " + usuario);
  } else {
    console.log("El usuario ingresado no esta registrado en el sistema");
  }
} else {
  console.log("el nombre de usuario no puede estar vacio");
}



const valorFijo = 7;

let valorUsuario = prompt("ingrese un numero entre 0 y 10:");

valorUsuario = parseInt(valorUsuario, 10);

if (isNaN(valorUsuario)) {
  alert("NO INGRESO UN VALOR NUMERICO");
} 
else 
{  
    if (valorUsuario >= 0 && valorUsuario <= 10) 
    {
        if (valorUsuario === valorFijo) {
            alert("SE GANO EL PREMIO!!! FELICITACIONES");
        }
        else
        {
          let diferencia = valorFijo - valorUsuario
          if(diferencia < 0)
          {
              diferencia = diferencia * -1
          }
          alert("AHH CASI.. LE FALLO POR..." + diferencia) 
        }
    } 
    else 
    {
      alert("EL NUMERO INGRESADO NO ESTA EN EL RANGO ESPECIFICADO");
    }
}
