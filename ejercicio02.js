function invertirCadena(cadena) {
    let cadenaInvertida = ''; //se inicia una cadena vacía

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida = cadenaInvertida + cadena[i];
    }
    return cadenaInvertida; //devolvemos la cadena invertida
}

// Ejemplos de uso
console.log(invertirCadena("hola")); 
console.log(invertirCadena("JavaScript"));
console.log(invertirCadena("Javascript2024"));
