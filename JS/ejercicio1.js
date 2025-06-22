/* 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

Output:
Lista de meses:
Enero
Febrer
Marzo
Abril
Mayo
Junio
Julio
Agosto
Septiembre
Octubre
Noviembre
Diciembre 
*/

// Primero creo el array:
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

// Muestro la lista
document.writeln("Lista de meses: "+"<br>")

// Recorro el array y escribo cada mes:
for (i = 0 ; i < meses.length; i++){
    document.writeln(meses[i]+"<br>")
}