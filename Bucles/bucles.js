//BUCLE FOR PARA LA SUMA DE LOS NUMEROS IMPARES, SOLICITANDO EL LIMITE SUPERIOR AL USUARIO

let limite = prompt("Ingrese el maximo numero impar del bucle")
let suma = 0

if(isNaN(parseInt(limite)))
{
    console.log("Debe ingresar un numero!")
}else
{
    if((limite%2) == 0)
    {
        console.log("Debe ingresar un numero impar!")
    }else
    {
        for(let i = 1; i <= limite; i++)
        {
            if(i%2 !=0){
               suma = suma +i     
            }
        }

        console.log("El resultado de la suma de numeros impares es: " + suma)
    }
}

//BUCLE DO WHILE PARA EL CONTROL DE USUARIO Y PASSWORD

let usuario = ""
let password = ""
let valido = false
do
{
 usuario = prompt("ingrese el usuario")
 password = prompt("ingrese el password")

 if(usuario.trim().length == 0 || password.trim().length == 0)
 {
     alert("el usuario o clave no puede estar en blanco")
 }
 else
 {
    if(isNaN(parseInt(usuario)) == false)
    {
        alert("el nombre de usuario no puede ser un numero")
    }
    else
    {
        if(usuario == "garroyo" && password == "bucles")
        {
            alert("Bienvenido usuario " + usuario + "!!!")
            valido = true
        }
        else
        {
            alert("usuario o clave invalidos")
        }
    }
 }
}while( valido == false)