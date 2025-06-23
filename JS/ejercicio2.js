/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

// 1° Creo el array vacío donde se van a almacenar las ciudades que el usuario ingrese
const ciudades = []

// 2° Pido al usuario que las ingrese
let ciudad = prompt("Ingrese por favor al menos 3 ciudades y presiona 'Cancelar' para finalizar:")

while (ciudad !== null && ciudad.trim()!==""){ // trim es p/quitar espacios, o sea que el bucle se va a ejecutar siempre que no haya un nulo ni un vacío
    ciudades.push(ciudad.trim()); // Agrego la ciudad al array
    ciudad = prompt("Ingresá otra ciudad o si ya ingresaste al menos 3 y querés finalizar, presioná 'Cancelar':")
}

// 3° Mostrar todo el arreglo por pantalla
console.log(`Ciudades ingresadas: ${ciudades}`)
document.writeln(`<b>Ciudades ingresadas:</b> ${ciudades.join(", ")} <br><br>`)

// 4° Mostrar la longitud del array
document.writeln(`Cantidad de ciudades: ${ciudades.length} <br>`)

// 5° Mostrar la primera, tercera y última ciudad
if (ciudades.length > 0){
    document.writeln(`La primera ciudad es: ${ciudades[0]} <br>`)
} else {
    document.writeln("No ingresaste ninguna ciudad 🤨<br>")
}
if (ciudades.length>2){
    document.writeln(`La tercera ciudad es: ${ciudades[2]} <br>`)
} else {
    document.writeln("Te mostraría la tercera ciudad, pero no la ingresaste 🤷🏽‍♀️")
}
if (ciudades.length>0){
    document.writeln(`La última ciudad de la lista que ingresaste es: ${ciudades[ciudades.length-1]}<br>`)
}

// 6° Agregar "París" al final del arreglo
ciudades.push("París")
document.writeln("<br>Se agregó 'París' al final del arreglo.<br>")

// 7° Mostrar la segunda ciudad (índice 1)
if (ciudades.length>1){
    document.writeln(`La ciudad que está en la segunda posición es: ${ciudades[1]}<br>`)
}

// 8° Sustituir la segunda ciudad por "Barcelona"
if (ciudades.length>1){
    ciudades[1]="Barcelona";
    document.writeln("La segunda ciudad fue sustituída por 'Barcelona'.<br>")
}

// Muestro el arreglo actualizado:
document.writeln(`<br><b>Arreglo actualizado:</b> ${ciudades.join(", ")}`)