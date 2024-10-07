function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/ /g, '');

    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }

    if (cadena === cadenaInvertida) {
        return true; //es un palíndromo
    } else {
        return false; //no es un palíndromo
    }
}
