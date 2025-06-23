/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

function fnPerimetro (ladoA, ladoB){
    return (ladoA+ladoB)*2
}

const ladoA = parseFloat(prompt("Ingresá el valor de un lado del rectángulo en cm:"))

const ladoB = parseFloat(prompt("Ingresá el valor del lado perpendicular al anterior, en cm también:"))

if (isNaN(ladoA)|| ladoA<=0 || isNaN(ladoB) || ladoB<=0) {
    document.writeln("Debés ingresar valores numéricos válidos, mayores a 0 para cada lado.")
} else{
    const perimetro = fnPerimetro(ladoA, ladoB)
    document.writeln(`El perímetro del rectángulo es: ${perimetro} cm.`)
}