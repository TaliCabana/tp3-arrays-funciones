// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function mostrarTablaMultiplicar(numero){
    for (let multiplicador = 1 ; multiplicador <= 10 ; multiplicador++){
        const resultado = numero * multiplicador
        document.writeln(`${numero} x ${multiplicador} = ${resultado} <br>`)
    }
}

const numeroIngresado = parseInt(prompt("Ingresá un número y te muestro su tabla de multiplicar del 1 al 10:"))

if (isNaN(numeroIngresado)){
    document.writeln("Tenés que ingresar un número valido para que te muestre la tabla de multiplicar. Actualizá e ingresá un valor correcto por favor.")
} else {
    document.writeln(`<h3>Tabla de Multiplicar del ${numeroIngresado}</h3>`)
    mostrarTablaMultiplicar(numeroIngresado)
}