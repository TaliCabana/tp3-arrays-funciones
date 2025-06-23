// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// Creo un array con 13 elementos para que incluya al 12 (arranca en 0)
const repeticionSuma = Array(13).fill(0) // fill(0) rellena con 0

// Para repetir el bucle 50 veces:
for (let lanzamiento=0 ; lanzamiento<50 ; lanzamiento++){
// Math.random() -> genera números random entre el 0 y el 0.9999
// Math.floor() -> redondea para abajo
// => al random lo multiplico x6 para que cree nros entre el 0 y el 5.9999
// Como va a redondearse para abajo => quedará en 5 => + 1
    const dado1 = Math.floor(Math.random()*6)+1
    const dado2 = Math.floor(Math.random()*6)+1
    const suma = dado1 + dado2

    repeticionSuma[suma]++
}

// Hago la parte de arriba de la tabla, porque esto no puede entrar al bucle
document.writeln(`<table class="table table-bordered border-primary text-center">`) // Abro la tabla
document.writeln(`<tr><th>Suma</th><th>Repeticiones de cada suma</th></tr>`) // Fila (row) de encabezado

for (let suma=2 ; suma<=12 ; suma++){ // las opciones de suma son 2, 3, 4, ... , 10, 11, 12
    document.writeln(`<tr><td>${suma}</td><td>${repeticionSuma[suma]}</td></tr>`) // Filas (rows) de resultados de los bucles
}

// Fuera del bucle cierro la tabla
document.writeln("</table>")

