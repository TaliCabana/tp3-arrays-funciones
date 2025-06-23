/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function textoAnalizado(texto){
    if (texto === texto.toUpperCase()){
        return "La cadena de texto está conformada únicamente por MAYÚSCULAS."
    } else if (texto === texto.toLowerCase()) {
        return "La cadena de texto está conformada únicamente por minúsculas."
    } else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas."
    }
}

const textoUsuario = prompt("Por favor ingresá una frase o palabrá y te diré con qué tipo de letras está conformada:")

if (textoUsuario!==null && 
    textoUsuario.trim()!=="" &&
    /[a-zA-ZáÁéÉíÍóÓúÚüÜ]/.test(textoUsuario)){ // Para asegurarme que al menos una letra está ingresando
    const resultado = textoAnalizado (textoUsuario)
    document.writeln(`<b>${resultado}</b>`)
} else {
    document.writeln("No ingresaste un texto. Actualizá la página si querés probar nuevamente.")
}