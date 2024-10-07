function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; //si es divisible, no es primo :)
        }
    }

    return true; //si no se encuentra ningún divisor, es primo :(
}

// Ejemplos de uso
console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false
console.log(esPrimo(13)); // true
console.log(esPrimo(25)); // false
