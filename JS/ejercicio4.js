/*  4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function esParOImpar(numero){
    if (numero % 2 === 0){
        return `El número ${numero} es par.`
    } else {
         return `El número ${numero} es impar.`
    }
}

const numeroIngresado = parseInt(prompt("Ingresá un número y te voy a decir si es par o impar:"))

if (isNaN(numeroIngresado)) {
    document.writeln("No ingresaste un número válido. Si querés que te diga si es par o impar, ingresá un número entero luego de actualizar la página.")
} else {
    const resultado = esParOImpar (numeroIngresado)
    document.writeln(resultado)
}