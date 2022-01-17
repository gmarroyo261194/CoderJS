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